'use client';

import React, { useState } from 'react';
import type { ChapterRef } from '@/lib/study';
import type { KeyTerm, QuizQuestion } from '@/types/study';
import { splitTakeaway } from '@/lib/takeaways';
import { ChapterFlashcardsBlock, ChapterQuizBlock } from './ChapterPractice';

interface ChapterStudyProps {
  chapter: ChapterRef;
  takeaways: string[];
  keyTerms: KeyTerm[];
  quiz: QuizQuestion[];
  flashcards: KeyTerm[];
}

type Tab = 'know' | 'terms' | 'quiz' | 'cards';

/**
 * Everything for the test in one place: a manila band with four tabs, so a
 * student picks the tool they need instead of scrolling past all four.
 */
export default function ChapterStudy({ chapter, takeaways, keyTerms, quiz, flashcards }: ChapterStudyProps) {
  const tabs: { id: Tab; label: string; show: boolean }[] = [
    { id: 'know', label: 'What to know', show: takeaways.length > 0 },
    { id: 'terms', label: 'Key terms', show: keyTerms.length > 0 },
    { id: 'quiz', label: `Practice quiz (${quiz.length})`, show: quiz.length > 0 },
    { id: 'cards', label: `Flashcards (${flashcards.length})`, show: flashcards.length > 0 },
  ];
  const visible = tabs.filter((t) => t.show);
  const [tab, setTab] = useState<Tab>(visible[0]?.id ?? 'know');

  function onKey(e: React.KeyboardEvent, i: number) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = visible[(i + (e.key === 'ArrowRight' ? 1 : -1) + visible.length) % visible.length];
    setTab(next.id);
    document.getElementById(`study-tab-${next.id}`)?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Study this chapter" className="flex gap-1 overflow-x-auto">
        {visible.map((t, i) => {
          const selected = tab === t.id;
          return (
            <button
              key={t.id}
              id={`study-tab-${t.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="study-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(t.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={`shrink-0 cursor-pointer rounded-t-sm px-4 py-2.5 text-sm font-semibold ${
                selected ? 'bg-surface text-ink' : 'text-ink-muted hover:bg-surface/60 hover:text-ink'
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div id="study-panel" role="tabpanel" aria-labelledby={`study-tab-${tab}`} className="rounded-sm rounded-tl-none bg-surface p-5 sm:p-8">
        {tab === 'know' && (
          <ol className="grid gap-x-10 gap-y-6 md:grid-cols-3">
            {takeaways.map((t, i) => {
              const { label, text } = splitTakeaway(t);
              return (
                <li key={t}>
                  <p className="font-display text-2xl font-extrabold tabular-nums text-brand">{i + 1}</p>
                  {label && <p className="mt-1 font-semibold text-ink">{label}</p>}
                  <p className="mt-1 text-base text-ink-muted">{text}</p>
                </li>
              );
            })}
          </ol>
        )}

        {tab === 'terms' && (
          <dl className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {keyTerms.map((term) => (
              <div key={term.id}>
                <dt className="font-semibold text-ink">{term.term}</dt>
                <dd className="mt-1 text-base text-ink-muted">{term.definition}</dd>
              </div>
            ))}
          </dl>
        )}

        {tab === 'quiz' && <ChapterQuizBlock chapter={chapter} questions={quiz} />}

        {tab === 'cards' && <ChapterFlashcardsBlock chapter={chapter} terms={flashcards} />}
      </div>
    </div>
  );
}
