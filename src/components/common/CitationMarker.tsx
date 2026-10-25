'use client';

import React from 'react';
import { useCitation } from './CitationContext';
import { resolveCitation } from '@/lib/citations';

interface CitationMarkerProps {
  id: string;
  label?: string | number;
  className?: string;
  title?: string;
}

export default function CitationMarker({
  id,
  label,
  className = '',
  title,
}: CitationMarkerProps) {
  const { openCitation } = useCitation();
  const citationData = resolveCitation(id);

  const displayLabel = label !== undefined ? label : (citationData?.marker || id);
  const hoverTitle = title || citationData?.title || citationData?.citation || `Inspect citation [${displayLabel}]`;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        openCitation(id);
      }}
      title={hoverTitle}
      aria-label={`Citation [${displayLabel}]: ${hoverTitle}`}
      className={`inline-flex items-center justify-center font-mono text-[11px] font-bold text-brand hover:text-brand-hover align-super px-0.5 mx-0.5 rounded-xs transition-colors focus:outline-hidden focus:ring-1 focus:ring-brand cursor-pointer ${className}`}
    >
      <span className="opacity-80 hover:opacity-100 hover:underline">
        [{displayLabel}]
      </span>
    </button>
  );
}
