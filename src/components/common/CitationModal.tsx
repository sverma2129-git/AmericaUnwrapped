'use client';

import React, { useEffect, useCallback } from 'react';
import { useCitation } from './CitationContext';
import { SourceClassificationType } from '@/types/vietnam';

export default function CitationModal() {
  const { activeCitation, isOpen, closeCitation } = useCitation();

  // Close on Escape key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCitation();
      }
    },
    [closeCitation]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !activeCitation) {
    return null;
  }

  // Format source type badge and human-readable label
  const getSourceTypeBadge = (type?: SourceClassificationType | string) => {
    switch (type) {
      case 'PRIMARY_SOURCE':
      case 'archival':
      case 'declassified':
        return {
          label: 'Primary Archival Source',
          className: 'bg-[#FDF3F3] text-[#8B252D] border-[#F0C4C7]',
          description: 'Contemporary government cable, resolution, treaty, or declassified record.',
        };
      case 'CONTEMPORARY_REPORTING':
        return {
          label: 'Contemporary Reporting',
          className: 'bg-[#FAF7F2] text-[#78350f] border-[#E8DDC8]',
          description: 'Journalistic dispatch, broadcast news, or wire filed during the war.',
        };
      case 'SCHOLARLY_SECONDARY_SOURCE':
      case 'academic-monograph':
        return {
          label: 'Scholarly Secondary Source',
          className: 'bg-[#FAF7F2] text-[#2C2523] border-[#E8DDC8]',
          description: 'Peer-reviewed academic monograph, university press publication, or archival study.',
        };
      default:
        return {
          label: 'Historical Reference',
          className: 'bg-[#FAF7F2] text-[#5C524E] border-[#E8DDC8]',
          description: 'Historical monograph, official documentation, or archive.',
        };
    }
  };

  const badge = getSourceTypeBadge(activeCitation.sourceType);
  const isVerifiedQuotation = activeCitation.verificationCategory === 'VERIFIED_QUOTATION' || Boolean(activeCitation.exactQuotation);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="citation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
      onClick={closeCitation}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFFEFA] border border-[#E8DDC8] text-[#2C2523] shadow-2xl rounded-xs p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header & Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-[#E8DDC8] pb-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs border ${badge.className}`}
              >
                {badge.label}
              </span>
              {isVerifiedQuotation ? (
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-[#FAF7F2] text-[#2C2523] border border-[#E8DDC8]">
                  Verified Verbatim Source
                </span>
              ) : (
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-[#FAF7F2] text-[#5C524E] border border-[#E8DDC8]">
                  Documented Source Paraphrase
                </span>
              )}
            </div>
            <p className="font-sans text-xs text-[#5C524E]">
              {badge.description}
            </p>
          </div>

          <button
            type="button"
            onClick={closeCitation}
            aria-label="Close citation modal"
            className="p-1.5 text-[#5C524E] hover:text-[#8B252D] transition-colors cursor-pointer rounded-xs"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 1. SOURCE PROVENANCE */}
        <section aria-labelledby="section-source" className="space-y-2">
          <span
            id="section-source"
            className="font-mono text-[10px] uppercase tracking-widest text-[#8B252D] font-bold block"
          >
            Source Provenance
          </span>

          <div className="space-y-1">
            <h3
              id="citation-modal-title"
              className="font-editorial-serif text-xl sm:text-2xl font-bold text-[#2C2523] leading-snug"
            >
              {activeCitation.title || activeCitation.citation}
            </h3>

            {activeCitation.authorOrInstitution && (
              <p className="font-sans text-xs sm:text-sm text-[#5C524E]">
                <span className="font-semibold text-[#2C2523]">Author / Creator:</span> {activeCitation.authorOrInstitution}
              </p>
            )}

            <div className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs text-[#5C524E]">
              {activeCitation.date && (
                <span>
                  <strong className="text-[#2C2523]">Date:</strong> {activeCitation.date}
                </span>
              )}
              {activeCitation.publicationOrArchive && (
                <span>
                  <strong className="text-[#2C2523]">Archive / Publication:</strong> {activeCitation.publicationOrArchive}
                </span>
              )}
            </div>

            {activeCitation.locator && (
              <div className="pt-1 font-mono text-xs text-[#2C2523]">
                <strong className="text-[#5C524E] uppercase tracking-wider text-[10px] block">
                  Precise Locator:
                </strong>
                <span className="bg-[#FAF7F2] px-2 py-0.5 rounded-xs border border-[#E8DDC8] inline-block mt-0.5 font-medium">
                  {activeCitation.locator}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* 2. VERBATIM EXCERPT OR PARAPHRASE */}
        {(activeCitation.exactQuotation || isVerifiedQuotation) ? (
          <section aria-labelledby="section-exact-quote" className="p-4 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs space-y-1.5 border-l-4 border-l-[#8B252D]">
            <span
              id="section-exact-quote"
              className="font-mono text-[10px] uppercase tracking-widest text-[#8B252D] font-bold block"
            >
              Verified Exact Verbatim Excerpt
            </span>
            <blockquote className="font-editorial-serif italic text-base sm:text-lg text-[#2C2523] leading-relaxed pl-1 py-0.5">
              &ldquo;{activeCitation.exactQuotation || activeCitation.citation}&rdquo;
            </blockquote>
          </section>
        ) : null}

        {/* 3. WHAT THIS SOURCE SUPPORTS */}
        {activeCitation.supportsClaim && (
          <section aria-labelledby="section-supports" className="space-y-1.5 border-t border-[#E8DDC8] pt-4">
            <span
              id="section-supports"
              className="font-mono text-[10px] uppercase tracking-widest text-[#5C524E] font-bold block"
            >
              What This Source Supports
            </span>
            <p className="font-sans text-sm sm:text-base text-[#2C2523] leading-relaxed">
              {activeCitation.supportsClaim}
            </p>
          </section>
        )}

        {/* 4. LIMITATIONS */}
        {activeCitation.limitations && (
          <section aria-labelledby="section-limitations" className="space-y-1.5 border-t border-[#E8DDC8] pt-4">
            <span
              id="section-limitations"
              className="font-mono text-[10px] uppercase tracking-widest text-[#8B252D] font-bold block"
            >
              Documentary Limitations &amp; Context
            </span>
            <p className="font-sans italic text-sm text-[#5C524E] leading-relaxed bg-[#FDF3F3] p-3 rounded-xs border border-[#F0C4C7]">
              {activeCitation.limitations}
            </p>
          </section>
        )}

        {/* 5. VIEW ORIGINAL LINK / ARCHIVE ACCESS */}
        <footer className="border-t border-[#E8DDC8] pt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-xs text-[#5C524E]">
            America Unwrapped Citation Archive &bull; Ref [{activeCitation.marker || activeCitation.id}]
          </div>

          {activeCitation.originalUrl ? (
            <a
              href={activeCitation.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#8B252D] hover:bg-[#731E25] text-white font-sans text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-xs"
            >
              <span>View Original Archive</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <span className="font-sans text-xs text-[#5C524E] italic">
              Original document in physical repository
            </span>
          )}
        </footer>
      </div>
    </div>
  );
}
