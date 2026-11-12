'use client';

import React from 'react';
import CitedParagraph from '@/components/common/CitedParagraph';
import { useActiveStep } from './useActiveStep';

export interface ScrollStep {
  key: string;
  label: string;
  headline: string;
  body: string;
}

/**
 * Scroll-driven figure: the figure stays pinned while the steps scroll past,
 * and the step being read decides what the figure shows. Without JavaScript the
 * steps still read top to bottom.
 */
export default function ScrollSteps({
  steps,
  renderFigure,
}: {
  steps: ScrollStep[];
  renderFigure: (active: number) => React.ReactNode;
}) {
  const { active, stepRef, figureRef } = useActiveStep();

  return (
    <div className="relative lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
      {/* Pinned figure (first on mobile so it sits above the steps); the top
          offset clears the site header (4rem) plus the chapter nav bar */}
      <div ref={figureRef} className="sticky top-[7.5rem] z-10 lg:order-2 self-start pt-3 pb-3 lg:py-6 bg-paper">
        {renderFigure(active)}
      </div>

      <ol className="lg:order-1 relative">
        {steps.map((s, i) => (
          <li
            key={s.key}
            ref={stepRef(i)}
            data-index={i}
            className="min-h-[60vh] lg:min-h-[75vh] flex items-center first:pt-6 last:min-h-[45vh] lg:last:min-h-[60vh]"
          >
            <div
              className={`w-full card-surface rounded-xl p-5 sm:p-6 transition-[border-color,opacity] duration-300 ${
                i === active ? 'border-ink opacity-100' : 'opacity-55'
              }`}
            >
              <h4 className="font-display text-xl font-semibold text-ink">{s.headline}</h4>
              <p className="meta mt-1 text-ink-soft tabular-nums">
                {s.label} &middot; step {i + 1} of {steps.length}
              </p>
              <CitedParagraph text={s.body} className="mt-3 text-base text-ink-muted leading-relaxed" />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
