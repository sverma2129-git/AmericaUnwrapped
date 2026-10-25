'use client';

import React, { useState } from 'react';

interface VocabTooltipProps {
  term: string;
  definition: string;
  significance?: string;
  children?: React.ReactNode;
}

export default function VocabTooltip({
  term,
  definition,
  significance,
  children,
}: VocabTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <span
        tabIndex={0}
        role="button"
        aria-label={`${term}: ${definition}`}
        className="underline decoration-brand/80 decoration-dotted underline-offset-4 cursor-help font-medium text-ink hover:text-brand transition-colors"
      >
        {children || term}
      </span>

      {isVisible && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 sm:w-72 p-3.5 bg-paper border border-rule text-ink rounded-xs shadow-xl text-xs z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-100 block"
        >
          <strong className="font-editorial-serif text-sm block mb-1 text-brand">
            {term}
          </strong>
          <span className="font-sans block leading-relaxed text-ink-muted">
            {definition}
          </span>
          {significance && (
            <span className="mt-1.5 pt-1.5 border-t border-rule font-sans text-[11px] block italic text-ink-soft">
              Significance: {significance}
            </span>
          )}
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-rule block" />
        </span>
      )}
    </span>
  );
}
