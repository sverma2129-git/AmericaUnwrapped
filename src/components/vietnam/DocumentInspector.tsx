'use client';

import React, { useState } from 'react';
import { PrimarySourceExcerpt } from '@/types/vietnam';
import { useCitation } from '@/components/common/CitationContext';

interface DocumentInspectorProps {
  document: PrimarySourceExcerpt;
}

export default function DocumentInspector({ document }: DocumentInspectorProps) {
  const [showFullContext, setShowFullContext] = useState(false);
  const { openCitation } = useCitation();

  const archiveLabel = {
    washington: 'U.S. National Archives / Declassified Record',
    hanoi: 'National Archives of Vietnam / Central Committee Archive',
    saigon: 'Republic of Vietnam Historical Archive',
    neutral: 'Eyewitness Journalistic Record',
    international: 'International Diplomatic Archive',
  }[document.side] || 'Document';

  const lookupId = document.registryId || document.id;

  return (
    <figure className="my-12 sm:my-16 border border-rule bg-parchment text-ink rounded-xs">
      {/* Archival Docket Header */}
      <div className="px-5 py-3 border-b border-rule bg-parchment-light flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
        <div className="flex items-center gap-2 text-ink-muted">
          <span className="font-semibold text-xs">
            {archiveLabel}
          </span>
          {document.archiveId && (
            <span className="text-ink-soft">
              [{document.archiveId}]
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs font-bold px-2 py-0.5 border border-rule bg-paper text-ink">
            {document.classification}
          </div>
          <button
            type="button"
            onClick={() => openCitation(lookupId)}
            className="text-xs font-bold text-brand hover:underline px-2.5 py-0.5 border border-brand/30 bg-paper cursor-pointer rounded-xs"
          >
            Source details
          </button>
        </div>
      </div>

      {/* Artifact Identification & Editorial Significance */}
      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <h4 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink leading-tight">
            {document.title}
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-ink-muted">
            {document.authorOrSpeaker}, {document.role}, <time>{document.date}</time>
          </p>
        </div>

        {/* Why It Matters Callout — Front & Center */}
        <div className="border-l border-brand pl-4 py-1">
          <span className="text-xs font-bold text-brand block mb-1">
            Why this document matters
          </span>
          <p className="font-display text-base sm:text-lg text-ink leading-relaxed">
            {document.whyItMatters}
          </p>
        </div>

        {/* The Archival Plate: Archival Record / Summary */}
        <div className="relative p-5 sm:p-7 bg-paper border border-rule text-xs sm:text-sm text-ink leading-relaxed rounded-xs">
          <div className="text-xs text-ink-soft mb-3 border-b border-rule pb-1.5 flex items-center justify-between">
            <span>
              {document.isVerified ? 'The exact words' : 'A summary in our words'}
            </span>
            <span>Ref: {document.registryId || document.id}</span>
          </div>

          {document.isVerified ? (
            <blockquote className="whitespace-pre-line font-medium text-ink">
              &ldquo;{document.excerpt}&rdquo;
            </blockquote>
          ) : (
            <div className="whitespace-pre-line font-medium text-ink">
              {document.excerpt}
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-rule text-xs text-ink-muted flex flex-wrap items-center justify-between gap-2">
            <span>Repository: {document.archiveSource}</span>
            <span className="italic">
              {document.isVerified
                ? 'The exact words'
                : 'A summary, not a quotation'}
            </span>
          </div>
        </div>

        {/* Historical Context & Analytical Note */}
        <div className="pt-2 text-ink">
          <button
            type="button"
            onClick={() => setShowFullContext(!showFullContext)}
            className="text-xs font-semibold text-brand underline underline-offset-4 hover:text-brand-hover cursor-pointer"
          >
            {showFullContext ? 'Hide background' : 'Show background'}
          </button>

          {showFullContext && (
            <div className="mt-4 p-5 bg-paper border border-rule text-xs sm:text-sm leading-relaxed space-y-3 rounded-xs">
              <span className="text-xs font-bold text-brand block">
                Background
              </span>
              <p className="text-ink-muted">{document.historicalContext}</p>
            </div>
          )}
        </div>
      </div>
    </figure>
  );
}
