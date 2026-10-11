'use client';

import React, { useState } from 'react';
import { PrimarySourceExcerpt } from '@/types/vietnam';

interface DocumentInspectorProps {
  document: PrimarySourceExcerpt;
}

export default function DocumentInspector({ document }: DocumentInspectorProps) {
  const [showFullContext, setShowFullContext] = useState(false);

  const archiveLabel = {
    washington: 'U.S. National Archives / Declassified Record',
    hanoi: 'National Archives of Vietnam / Central Committee Archive',
    saigon: 'Republic of Vietnam Historical Archive',
    neutral: 'Eyewitness Journalistic Record',
    international: 'International Diplomatic Archive',
  }[document.side] || 'Archival Document';

  return (
    <figure className="my-12 sm:my-16 border border-stone-300 dark:border-stone-800 bg-[#f9f7f2] dark:bg-[#161514] text-stone-900 dark:text-stone-100">
      {/* Archival Docket Header */}
      <div className="px-5 py-3 border-b border-stone-200 dark:border-stone-800/80 bg-stone-100/90 dark:bg-stone-900/60 flex flex-wrap items-center justify-between gap-3 text-xs font-archival-mono">
        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
          <span className="uppercase tracking-widest font-semibold text-[11px]">
            {archiveLabel}
          </span>
          {document.archiveId && (
            <span className="text-stone-400 dark:text-stone-600">
              [{document.archiveId}]
            </span>
          )}
        </div>
        <div className="uppercase tracking-widest text-[11px] font-bold px-2 py-0.5 border border-stone-400/60 dark:border-stone-600/60 text-stone-800 dark:text-stone-200">
          {document.classification}
        </div>
      </div>

      {/* Artifact Identification & Editorial Significance */}
      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
            Archival Primary Source
          </span>
          <h4 className="font-editorial-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
            {document.title}
          </h4>
          <p className="mt-2 text-xs sm:text-sm font-archival-mono text-stone-600 dark:text-stone-400">
            {document.authorOrSpeaker} &bull; {document.role} &bull; <time>{document.date}</time>
          </p>
        </div>

        {/* Why It Matters Callout — Front & Center */}
        <div className="border-l-2 border-stone-800 dark:border-stone-200 pl-4 py-1">
          <span className="font-archival-mono text-[11px] uppercase tracking-wider font-bold text-stone-500 dark:text-stone-400 block mb-1">
            Why This Artifact Matters
          </span>
          <p className="font-editorial-serif text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed italic">
            {document.whyItMatters}
          </p>
        </div>

        {/* The Archival Plate: Verbatim Facsimile Excerpt */}
        <div className="relative p-5 sm:p-7 bg-[#f2ede4] dark:bg-[#1a1816] border border-stone-300 dark:border-stone-800 font-archival-mono text-xs sm:text-sm text-stone-900 dark:text-stone-200 leading-relaxed shadow-inner">
          <div className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-500 mb-3 border-b border-stone-300/80 dark:border-stone-800 pb-1.5 flex items-center justify-between">
            <span>Official Verbatim Excerpt</span>
            <span>Ref: {document.id}</span>
          </div>

          <blockquote className="whitespace-pre-line font-medium">
            &ldquo;{document.excerpt}&rdquo;
          </blockquote>

          <div className="mt-4 pt-3 border-t border-stone-300/80 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400 flex flex-wrap items-center justify-between gap-2">
            <span>Repository: {document.archiveSource}</span>
            <span className="italic">Verified Authentic</span>
          </div>
        </div>

        {/* Historical Context & Analytical Note */}
        <div className="pt-2 text-stone-700 dark:text-stone-300">
          <button
            type="button"
            onClick={() => setShowFullContext(!showFullContext)}
            className="text-xs font-archival-mono uppercase tracking-wider font-semibold text-stone-800 dark:text-stone-200 underline underline-offset-4 hover:text-stone-950 dark:hover:text-stone-50 cursor-pointer"
          >
            {showFullContext ? 'Collapse Archival Note ↑' : 'Inspect Archival Provenance & Historical Context ↓'}
          </button>

          {showFullContext && (
            <div className="mt-4 p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 font-sans text-xs sm:text-sm leading-relaxed space-y-3">
              <span className="font-archival-mono text-xs uppercase tracking-wider font-bold text-stone-500 block">
                Historical Context &amp; Declassification Record
              </span>
              <p>{document.historicalContext}</p>
            </div>
          )}
        </div>
      </div>
    </figure>
  );
}
