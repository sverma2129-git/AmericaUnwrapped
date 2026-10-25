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
  }[document.side] || 'Archival Document';

  const lookupId = document.registryId || document.id;

  return (
    <figure className="my-12 sm:my-16 border border-[#E8DDC8] bg-[#FAF7F2] text-[#2C2523] rounded-xs shadow-xs">
      {/* Archival Docket Header */}
      <div className="px-5 py-3 border-b border-[#E8DDC8] bg-[#F7F3EB] flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
        <div className="flex items-center gap-2 text-[#5C524E]">
          <span className="uppercase tracking-widest font-semibold text-[11px]">
            {archiveLabel}
          </span>
          {document.archiveId && (
            <span className="text-[#6B5E59]">
              [{document.archiveId}]
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="uppercase tracking-widest text-[11px] font-bold px-2 py-0.5 border border-[#E8DDC8] bg-[#FFFEFA] text-[#2C2523]">
            {document.classification}
          </div>
          <button
            type="button"
            onClick={() => openCitation(lookupId)}
            className="text-[11px] font-bold text-[#8B252D] hover:underline uppercase px-2.5 py-0.5 border border-[#8B252D]/30 bg-[#FFFEFA] cursor-pointer rounded-xs"
          >
            Citation Dossier &rarr;
          </button>
        </div>
      </div>

      {/* Artifact Identification & Editorial Significance */}
      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#6B5E59] block mb-1">
            Archival Primary Source
          </span>
          <h4 className="font-editorial-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2C2523] leading-tight">
            {document.title}
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-[#5C524E]">
            {document.authorOrSpeaker} &bull; {document.role} &bull; <time>{document.date}</time>
          </p>
        </div>

        {/* Why It Matters Callout — Front & Center */}
        <div className="border-l-2 border-[#8B252D] pl-4 py-1">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#8B252D] block mb-1">
            Why This Artifact Matters
          </span>
          <p className="font-editorial-serif text-base sm:text-lg text-[#2C2523] leading-relaxed italic">
            {document.whyItMatters}
          </p>
        </div>

        {/* The Archival Plate: Archival Record / Summary */}
        <div className="relative p-5 sm:p-7 bg-[#FFFEFA] border border-[#E8DDC8] font-mono text-xs sm:text-sm text-[#2C2523] leading-relaxed shadow-xs rounded-xs">
          <div className="text-[10px] uppercase tracking-widest text-[#6B5E59] mb-3 border-b border-[#E8DDC8] pb-1.5 flex items-center justify-between">
            <span>
              {document.isVerified ? 'Source Transcription' : 'Archival Summary & Record (Unverified)'}
            </span>
            <span>Ref: {document.registryId || document.id}</span>
          </div>

          {document.isVerified ? (
            <blockquote className="whitespace-pre-line font-medium text-[#2C2523]">
              &ldquo;{document.excerpt}&rdquo;
            </blockquote>
          ) : (
            <div className="whitespace-pre-line font-medium text-[#2C2523]">
              {document.excerpt}
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-[#E8DDC8] text-[11px] text-[#5C524E] flex flex-wrap items-center justify-between gap-2">
            <span>Repository: {document.archiveSource}</span>
            <span className="italic">
              {document.isVerified
                ? 'Source transcription'
                : 'Pending Archival Verification (Paraphrased Summary)'}
            </span>
          </div>
        </div>

        {/* Historical Context & Analytical Note */}
        <div className="pt-2 text-[#2C2523]">
          <button
            type="button"
            onClick={() => setShowFullContext(!showFullContext)}
            className="text-xs uppercase tracking-wider font-semibold text-[#8B252D] underline underline-offset-4 hover:text-[#731E25] cursor-pointer"
          >
            {showFullContext ? 'Collapse Archival Note ↑' : 'Inspect Archival Provenance & Historical Context ↓'}
          </button>

          {showFullContext && (
            <div className="mt-4 p-5 bg-[#FFFEFA] border border-[#E8DDC8] text-xs sm:text-sm leading-relaxed space-y-3 rounded-xs">
              <span className="text-xs uppercase tracking-wider font-bold text-[#8B252D] block">
                Historical Context &amp; Declassification Record
              </span>
              <p className="text-[#5C524E]">{document.historicalContext}</p>
            </div>
          )}
        </div>
      </div>
    </figure>
  );
}
