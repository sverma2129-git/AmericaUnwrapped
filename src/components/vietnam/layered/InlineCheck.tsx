'use client';

import React, { useId, useState } from 'react';
import type { QuizQuestion } from '@/types/study';
import CitationMarker from '@/components/common/CitationMarker';
import Icon from '@/components/common/Icon';
import Figure from '@/components/common/Figure';

/** One quick retrieval question placed right after the beat it checks. */
export default function InlineCheck({ question }: { question: QuizQuestion }) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const correct = picked === question.correctIndex;
  const labelId = useId();

  return (
    <section aria-labelledby={labelId} className="bg-parchment rounded-xl p-5 sm:p-6">
      {question.imageId && <Figure imageId={question.imageId} variant="compact" className="mb-4" />}
      <p id={labelId} className="font-display text-lg font-semibold text-ink leading-snug">
        <span className="font-sans text-[0.9375rem] font-semibold text-brand">Quick check. </span>
        {question.question}
      </p>

      <div role="group" aria-labelledby={labelId} className="mt-4 grid gap-2">
        {question.options.map((option, idx) => {
          const isAnswer = idx === question.correctIndex;
          const isPicked = idx === picked;
          let tone = 'bg-surface border-rule hover:border-ink text-ink';
          if (answered && isAnswer) tone = 'bg-success-tint border-success text-ink';
          else if (answered && isPicked) tone = 'bg-brand-tint border-brand text-ink';
          else if (answered) tone = 'bg-surface border-rule text-ink-soft';
          return (
            <button
              key={idx}
              type="button"
              disabled={answered}
              aria-pressed={isPicked}
              onClick={() => setPicked(idx)}
              className={`flex items-start gap-3 text-left text-[0.9375rem] leading-snug px-4 py-3.5 rounded-lg border transition-colors ${tone} ${
                answered ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <span
                aria-hidden="true"
                className={`mt-0.5 w-5 shrink-0 text-center text-sm font-semibold ${
                  answered && isAnswer ? 'text-success' : answered && isPicked ? 'text-brand' : 'text-ink-soft'
                }`}
              >
                {answered && isAnswer ? (
                  <Icon name="check" className="w-4 h-4 inline" strokeWidth={2.5} />
                ) : answered && isPicked ? (
                  <Icon name="x" className="w-4 h-4 inline" strokeWidth={2.5} />
                ) : (
                  String.fromCharCode(65 + idx)
                )}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite">
        {answered && (
          <p className="mt-4 text-[0.9375rem] text-ink-muted leading-relaxed">
            <strong className={correct ? 'text-success' : 'text-brand'}>{correct ? 'Right.' : 'Not quite.'}</strong>{' '}
            {question.rationale}
            {question.citationRef && <CitationMarker id={question.citationRef} />}
          </p>
        )}
      </div>
    </section>
  );
}
