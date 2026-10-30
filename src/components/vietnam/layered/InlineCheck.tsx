'use client';

import React, { useId, useState } from 'react';
import type { QuizQuestion } from '@/types/study';
import CitationMarker from '@/components/common/CitationMarker';

/** One quick retrieval question placed right after the beat it checks. */
export default function InlineCheck({ question }: { question: QuizQuestion }) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const correct = picked === question.correctIndex;
  const labelId = useId();

  return (
    <section
      aria-labelledby={labelId}
      className="rounded-xl border border-rule bg-parchment-light p-5 sm:p-6"
    >
      <span className="eyebrow text-ink-soft block mb-2">Quick check</span>
      <p id={labelId} className="font-editorial-serif text-lg font-medium text-ink leading-snug">
        {question.question}
      </p>

      <div role="group" aria-labelledby={labelId} className="mt-4 grid gap-2">
        {question.options.map((option, idx) => {
          const isAnswer = idx === question.correctIndex;
          const isPicked = idx === picked;
          let tone = 'bg-surface border-rule hover:border-rule-strong text-ink';
          if (answered && isAnswer) tone = 'bg-success-tint border-success-rule text-ink';
          else if (answered && isPicked) tone = 'bg-brand-tint border-brand-rule text-ink';
          else if (answered) tone = 'bg-surface border-rule text-ink-soft';
          return (
            <button
              key={idx}
              type="button"
              disabled={answered}
              aria-pressed={isPicked}
              onClick={() => setPicked(idx)}
              className={`flex items-start gap-3 text-left text-sm leading-snug px-4 py-3 rounded-lg border transition-colors ${tone} ${
                answered ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <span
                aria-hidden="true"
                className={`mt-0.5 w-5 h-5 shrink-0 rounded-full border flex items-center justify-center text-[11px] font-semibold ${
                  answered && isAnswer
                    ? 'bg-success border-success text-white'
                    : answered && isPicked
                      ? 'bg-brand border-brand text-white'
                      : 'border-rule-strong text-ink-soft'
                }`}
              >
                {answered && isAnswer ? '✓' : answered && isPicked ? '✕' : String.fromCharCode(65 + idx)}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite">
        {answered && (
          <p className="mt-4 text-sm text-ink-muted leading-relaxed">
            <strong className={correct ? 'text-success' : 'text-brand'}>{correct ? 'Right.' : 'Not quite.'}</strong>{' '}
            {question.rationale}
            {question.citationRef && <CitationMarker id={question.citationRef} />}
          </p>
        )}
      </div>
    </section>
  );
}
