'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Figure from '@/components/common/Figure';
import Icon from '@/components/common/Icon';
import { useCitation } from '@/components/common/CitationContext';
import type { QuizItem } from '@/lib/study';
import { FocusNote, inFocus, useStudyFocus } from './StudyFocus';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

interface Answer {
  selected: number;
  correct: boolean;
}

type Phase = 'quiz' | 'summary';

/**
 * The unit practice test. A question is answered, then checked; the answer and
 * explanation appear only after checking. Students can skip, go back, finish
 * early, and then retry just the questions they missed. Nothing is saved
 * between visits.
 */
export default function PracticeQuiz({ items, showChapter = true }: { items: QuizItem[]; showChapter?: boolean }) {
  const { focus } = useStudyFocus();
  const pool = useMemo(() => inFocus(items, focus), [items, focus]);
  // Restart whenever the chapter focus changes.
  return <QuizRun key={focus ?? 'all'} pool={pool} total={items.length} showChapter={showChapter} />;
}

function QuizRun({ pool, total, showChapter }: { pool: QuizItem[]; total: number; showChapter: boolean }) {
  const { openCitation } = useCitation();
  const [round, setRound] = useState<QuizItem[]>(pool);
  const [retrying, setRetrying] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [phase, setPhase] = useState<Phase>('quiz');
  const questionRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  const item = round[index];
  const q = item?.question;
  const answer = q ? answers[q.id] : undefined;
  const checked = answer !== undefined;
  const answeredCount = round.filter((i) => answers[i.question.id]).length;
  const correctCount = round.filter((i) => answers[i.question.id]?.correct).length;

  // Move focus to the new question (or the results) after the student navigates,
  // so keyboard and screen-reader users start at the top of what changed.
  useEffect(() => {
    if (!moved.current) return;
    (phase === 'summary' ? summaryRef : questionRef).current?.focus();
  }, [index, phase]);

  if (pool.length === 0) {
    return <p className="text-ink-muted">This chapter has no practice questions yet.</p>;
  }

  const goTo = (i: number) => {
    moved.current = true;
    setIndex(i);
    setSelected(answers[round[i].question.id]?.selected ?? null);
  };

  const check = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected === null || checked) return;
    setAnswers((prev) => ({ ...prev, [q.id]: { selected, correct: selected === q.correctIndex } }));
  };

  const next = () => {
    if (index < round.length - 1) goTo(index + 1);
    else finish();
  };

  const finish = () => {
    moved.current = true;
    setPhase('summary');
  };

  const startRound = (items: QuizItem[], isRetry: boolean) => {
    moved.current = true;
    setAnswers((prev) => {
      const copy = { ...prev };
      for (const i of items) delete copy[i.question.id];
      return copy;
    });
    setRound(items);
    setRetrying(isRetry);
    setIndex(0);
    setSelected(null);
    setPhase('quiz');
  };

  if (phase === 'summary') {
    return (
      <QuizSummary
        round={round}
        answers={answers}
        retrying={retrying}
        headingRef={summaryRef}
        onRetryMissed={(missed) => startRound(missed, true)}
        onRestart={() => startRound(pool, false)}
        onResume={() => {
          const firstOpen = round.findIndex((i) => !answers[i.question.id]);
          setPhase('quiz');
          goTo(firstOpen === -1 ? 0 : firstOpen);
        }}
      />
    );
  }

  return (
    <div>
      <FocusNote shown={pool.length} total={total} noun="questions" />

      {/* Status: where you are and how it is going */}
      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="font-display text-sm font-semibold text-ink">
          {retrying ? 'Retrying missed questions: ' : ''}Question {index + 1} of {round.length}
        </p>
        <p className="text-sm text-ink-muted" aria-live="polite">
          {answeredCount === 0 ? 'No answers yet' : `${correctCount} right out of ${answeredCount} answered`}
        </p>
      </div>
      <div
        className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-rule"
        role="progressbar"
        aria-label="Questions answered"
        aria-valuemin={0}
        aria-valuemax={round.length}
        aria-valuenow={answeredCount}
      >
        <div className="h-full bg-brand transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${(answeredCount / round.length) * 100}%` }} />
      </div>

      <form onSubmit={check} className="mt-8">
        <fieldset aria-labelledby={`question-${q.id}`}>
          {(showChapter || q.imageId) && (
            <p className="text-sm text-ink-muted">
              {showChapter ? `Chapter ${item.chapter.number}: ${item.chapter.title}` : 'Source-based question'}
              {showChapter && q.imageId ? ' (source-based question)' : ''}
            </p>
          )}
          {q.imageId && <Figure key={q.imageId} imageId={q.imageId} variant="compact" className="mt-4" />}
          <h3
            ref={questionRef}
            id={`question-${q.id}`}
            tabIndex={-1}
            className="mt-3 max-w-[60ch] font-display text-lg sm:text-xl font-semibold leading-snug text-ink focus:outline-none"
          >
            {q.question}
          </h3>

          <div className="mt-6 grid gap-2.5">
            {q.options.map((option, i) => {
              const isSelected = selected === i;
              const isAnswer = i === q.correctIndex;
              let tone = 'border-rule bg-surface hover:border-ink-soft';
              let note: string | null = null;
              if (checked) {
                if (isAnswer) {
                  tone = 'border-success bg-success-tint';
                  note = isSelected ? 'Your answer, correct' : 'Correct answer';
                } else if (isSelected) {
                  tone = 'border-brand bg-brand-tint';
                  note = 'Your answer';
                } else {
                  tone = 'border-rule bg-surface text-ink-muted';
                }
              } else if (isSelected) {
                tone = 'border-brand bg-surface ring-1 ring-brand';
              }
              return (
                <label
                  key={i}
                  className={`flex items-start gap-3.5 rounded-sm border px-4 py-3.5 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand ${tone} ${
                    checked ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={i}
                    checked={isSelected}
                    disabled={checked}
                    onChange={() => setSelected(i)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      checked && isAnswer
                        ? 'bg-success text-white'
                        : checked && isSelected
                          ? 'bg-brand text-white'
                          : isSelected
                            ? 'bg-brand text-white'
                            : 'border border-rule-strong text-ink-muted'
                    }`}
                  >
                    {checked && isAnswer ? <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} /> : checked && isSelected ? <Icon name="x" className="h-3.5 w-3.5" strokeWidth={3} /> : LETTERS[i]}
                  </span>
                  <span className="flex-1 text-base leading-relaxed">
                    {option}
                    {note && <span className="mt-0.5 block text-sm font-semibold text-ink">{note}</span>}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Feedback appears only after the answer is checked */}
        <div aria-live="polite">
          {checked && (
            <div className={`mt-6 border-l-[3px] pl-5 ${answer.correct ? 'border-success' : 'border-brand'}`}>
              <p className={`font-display font-semibold ${answer.correct ? 'text-success' : 'text-brand'}`}>
                {answer.correct ? 'Right.' : `Not quite. The answer is ${LETTERS[q.correctIndex]}.`}
              </p>
              <p className="mt-1.5 max-w-[66ch] font-serif text-base leading-relaxed text-ink">{q.rationale}</p>
              {q.citationRef && (
                <button
                  type="button"
                  onClick={() => openCitation(q.citationRef!)}
                  className="mt-2 text-sm font-semibold text-brand underline underline-offset-2 hover:text-brand-hover cursor-pointer"
                >
                  See the source
                </button>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className="rounded-sm px-3 py-2.5 text-sm font-semibold text-ink-muted hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Back
          </button>
          {answeredCount > 0 && (
            <button type="button" onClick={finish} className="rounded-sm px-3 py-2.5 text-sm font-semibold text-ink-muted hover:text-ink cursor-pointer">
              Finish and see results
            </button>
          )}
          <div className="ml-auto flex items-center gap-3">
            {!checked && index < round.length - 1 && (
              <button type="button" onClick={next} className="rounded-sm px-3 py-2.5 text-sm font-semibold text-ink-muted hover:text-ink cursor-pointer">
                Skip
              </button>
            )}
            {checked ? (
              <button type="button" onClick={next} className="rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover cursor-pointer">
                {index < round.length - 1 ? 'Next question' : 'See results'}
              </button>
            ) : (
              <button
                type="submit"
                disabled={selected === null}
                className="rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover disabled:bg-rule disabled:text-ink-soft disabled:cursor-not-allowed cursor-pointer"
              >
                Check answer
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

function QuizSummary({
  round,
  answers,
  retrying,
  headingRef,
  onRetryMissed,
  onRestart,
  onResume,
}: {
  round: QuizItem[];
  answers: Record<string, Answer>;
  retrying: boolean;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  onRetryMissed: (missed: QuizItem[]) => void;
  onRestart: () => void;
  onResume: () => void;
}) {
  const answered = round.filter((i) => answers[i.question.id]);
  const missed = answered.filter((i) => !answers[i.question.id].correct);
  const skipped = round.length - answered.length;
  const correct = answered.length - missed.length;
  const percent = answered.length ? Math.round((correct / answered.length) * 100) : 0;

  // Chapters ranked by misses, so the weakest topic is first.
  const byChapter = new Map<number, { chapter: QuizItem['chapter']; right: number; total: number }>();
  for (const i of answered) {
    const row = byChapter.get(i.chapter.number) ?? { chapter: i.chapter, right: 0, total: 0 };
    row.total += 1;
    if (answers[i.question.id].correct) row.right += 1;
    byChapter.set(i.chapter.number, row);
  }
  const chapters = [...byChapter.values()].sort((a, b) => a.right / a.total - b.right / b.total || a.chapter.number - b.chapter.number);
  const toReread = chapters.filter((c) => c.right < c.total);

  return (
    <div>
      <h3 ref={headingRef} tabIndex={-1} className="font-display text-xl sm:text-2xl font-bold text-navy focus:outline-none">
        {retrying ? 'Retry results: ' : ''}
        {correct} of {answered.length} right
      </h3>
      <p className="mt-2 text-ink-muted">
        {answered.length === 0
          ? 'You have not answered any questions yet.'
          : `That is ${percent}%. ${missed.length === 0 ? 'You missed none.' : `You missed ${missed.length}.`}`}
        {skipped > 0 ? ` ${skipped} ${skipped === 1 ? 'question was' : 'questions were'} left unanswered.` : ''}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {missed.length > 0 && (
          <button type="button" onClick={() => onRetryMissed(missed)} className="rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover cursor-pointer">
            Retry the {missed.length} you missed
          </button>
        )}
        {skipped > 0 && (
          <button type="button" onClick={onResume} className="rounded-sm border border-rule-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink cursor-pointer">
            Answer the rest
          </button>
        )}
        <button type="button" onClick={onRestart} className="rounded-sm border border-rule-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink cursor-pointer">
          Start over
        </button>
      </div>

      {toReread.length > 0 && (
        <div className="mt-10">
          <h4 className="font-display text-lg font-bold text-navy">Chapters to reread</h4>
          <ul className="mt-3 space-y-2">
            {toReread.map(({ chapter, right, total }) => (
              <li key={chapter.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
                <Link href={`/vietnam/${chapter.id}`} className="font-semibold text-ink underline decoration-rule-strong underline-offset-4 hover:text-brand hover:decoration-brand">
                  Chapter {chapter.number}: {chapter.title}
                </Link>
                <span className="text-sm tabular-nums text-ink-muted">
                  {right} of {total} right
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {missed.length > 0 && (
        <div className="mt-10">
          <h4 className="font-display text-lg font-bold text-navy">What you missed</h4>
          <ul className="mt-3 space-y-2">
            {missed.map(({ question: q, chapter }) => (
              <li key={q.id}>
                <details className="group py-3">
                  <summary className="flex cursor-pointer list-none items-start gap-3 [&::-webkit-details-marker]:hidden">
                    <span aria-hidden="true" className="mt-1 text-brand transition-transform group-open:rotate-90 motion-reduce:transition-none">
                      ›
                    </span>
                    <span className="flex-1">
                      <span className="block font-medium text-ink leading-snug">{q.question}</span>
                      <span className="mt-0.5 block text-sm text-ink-muted">Chapter {chapter.number}</span>
                    </span>
                  </summary>
                  <div className="mt-3 space-y-2 pl-6">
                    <p className="text-sm text-ink-muted">
                      You chose {LETTERS[answers[q.id].selected]}: {q.options[answers[q.id].selected]}
                    </p>
                    <p className="text-sm font-semibold text-success">
                      Answer {LETTERS[q.correctIndex]}: {q.options[q.correctIndex]}
                    </p>
                    <p className="max-w-[66ch] font-serif text-base leading-relaxed text-ink">{q.rationale}</p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
