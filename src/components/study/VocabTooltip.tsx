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
        className="underline decoration-[#8B252D]/80 decoration-dotted underline-offset-4 cursor-help font-medium text-[#2C2523] hover:text-[#8B252D] transition-colors"
      >
        {children || term}
      </span>

      {isVisible && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 sm:w-72 p-3.5 bg-[#FFFEFA] border border-[#E8DDC8] text-[#2C2523] rounded-xs shadow-xl text-xs z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-100 block"
        >
          <strong className="font-editorial-serif text-sm block mb-1 text-[#8B252D]">
            {term}
          </strong>
          <span className="font-sans block leading-relaxed text-[#5C524E]">
            {definition}
          </span>
          {significance && (
            <span className="mt-1.5 pt-1.5 border-t border-[#E8DDC8] font-sans text-[11px] block italic text-[#6B5E59]">
              Significance: {significance}
            </span>
          )}
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#E8DDC8] block" />
        </span>
      )}
    </span>
  );
}
