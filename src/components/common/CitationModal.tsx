'use client';

import React, { useEffect, useRef } from 'react';
import { useCitation } from './CitationContext';
import { getSourceTypeBadge, isVerbatimQuotation, SourceTypeBadge } from '@/lib/citations';

const BADGE_TONE_CLASSES: Record<SourceTypeBadge['tone'], string> = {
  primary: 'bg-brand-tint text-brand border-brand-rule',
  reporting: 'bg-parchment text-[#78350f] border-rule',
  scholarly: 'bg-parchment text-ink border-rule',
  reference: 'bg-parchment text-ink-muted border-rule',
};

export default function CitationModal() {
  const { activeCitation, isOpen, closeCitation } = useCitation();
  const dialogRef = useRef<HTMLDialogElement>(null);

  // The native <dialog> provides focus trapping, Escape handling, and focus
  // restoration to the triggering element when closed.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && activeCitation && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen, activeCitation]);

  const badge = activeCitation ? getSourceTypeBadge(activeCitation.sourceType) : null;
  const isVerbatim = activeCitation ? isVerbatimQuotation(activeCitation) : false;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="citation-modal-title"
      onClose={() => {
        document.body.style.overflow = '';
        closeCitation();
      }}
      onClick={(e) => {
        // Clicks on the backdrop target the <dialog> element itself
        if (e.target === e.currentTarget) closeCitation();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto bg-paper border border-rule text-ink shadow-2xl rounded-xs p-0 backdrop:bg-black/50 backdrop:backdrop-blur-xs"
    >
      {activeCitation && badge && (
      <div className="p-6 sm:p-8 space-y-6">
        {/* Modal Header & Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-rule pb-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs border ${BADGE_TONE_CLASSES[badge.tone]}`}
              >
                {badge.label}
              </span>
              {isVerbatim ? (
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-parchment text-ink border border-rule">
                  Verified Verbatim Source
                </span>
              ) : (
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-parchment text-ink-muted border border-rule">
                  Documented Source Paraphrase
                </span>
              )}
            </div>
            <p className="font-sans text-xs text-ink-muted">
              {badge.description}
            </p>
          </div>

          <button
            type="button"
            onClick={closeCitation}
            aria-label="Close citation modal"
            className="p-1.5 text-ink-muted hover:text-brand transition-colors cursor-pointer rounded-xs"
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
            className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold block"
          >
            Source Provenance
          </span>

          <div className="space-y-1">
            <h3
              id="citation-modal-title"
              className="font-editorial-serif text-xl sm:text-2xl font-bold text-ink leading-snug"
            >
              {activeCitation.title || activeCitation.citation}
            </h3>

            {activeCitation.authorOrInstitution && (
              <p className="font-sans text-xs sm:text-sm text-ink-muted">
                <span className="font-semibold text-ink">Author / Creator:</span> {activeCitation.authorOrInstitution}
              </p>
            )}

            <div className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs text-ink-muted">
              {activeCitation.date && (
                <span>
                  <strong className="text-ink">Date:</strong> {activeCitation.date}
                </span>
              )}
              {activeCitation.publicationOrArchive && (
                <span>
                  <strong className="text-ink">Archive / Publication:</strong> {activeCitation.publicationOrArchive}
                </span>
              )}
            </div>

            {activeCitation.locator && (
              <div className="pt-1 font-mono text-xs text-ink">
                <strong className="text-ink-muted uppercase tracking-wider text-[10px] block">
                  Precise Locator:
                </strong>
                <span className="bg-parchment px-2 py-0.5 rounded-xs border border-rule inline-block mt-0.5 font-medium">
                  {activeCitation.locator}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* 2. VERBATIM EXCERPT (verified quotations with exact text only) */}
        {isVerbatim && (
          <section aria-labelledby="section-exact-quote" className="p-4 bg-parchment border border-rule rounded-xs space-y-1.5 border-l-4 border-l-brand">
            <span
              id="section-exact-quote"
              className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold block"
            >
              Verified Exact Verbatim Excerpt
            </span>
            <blockquote className="font-editorial-serif italic text-base sm:text-lg text-ink leading-relaxed pl-1 py-0.5">
              &ldquo;{activeCitation.exactQuotation}&rdquo;
            </blockquote>
          </section>
        )}

        {/* 3. WHAT THIS SOURCE SUPPORTS */}
        {activeCitation.supportsClaim && (
          <section aria-labelledby="section-supports" className="space-y-1.5 border-t border-rule pt-4">
            <span
              id="section-supports"
              className="font-mono text-[10px] uppercase tracking-widest text-ink-muted font-bold block"
            >
              What This Source Supports
            </span>
            <p className="font-sans text-sm sm:text-base text-ink leading-relaxed">
              {activeCitation.supportsClaim}
            </p>
          </section>
        )}

        {/* 4. LIMITATIONS */}
        {activeCitation.limitations && (
          <section aria-labelledby="section-limitations" className="space-y-1.5 border-t border-rule pt-4">
            <span
              id="section-limitations"
              className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold block"
            >
              Documentary Limitations &amp; Context
            </span>
            <p className="font-sans italic text-sm text-ink-muted leading-relaxed bg-brand-tint p-3 rounded-xs border border-brand-rule">
              {activeCitation.limitations}
            </p>
          </section>
        )}

        {/* 5. VIEW ORIGINAL LINK / ARCHIVE ACCESS */}
        <footer className="border-t border-rule pt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-xs text-ink-muted">
            America Unwrapped Citation Archive &bull; Ref [{activeCitation.marker || activeCitation.id}]
          </div>

          {activeCitation.originalUrl ? (
            <a
              href={activeCitation.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand hover:bg-brand-hover text-white font-sans text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-xs"
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
            <span className="font-sans text-xs text-ink-muted italic">
              Original document in physical repository
            </span>
          )}
        </footer>
      </div>
      )}
    </dialog>
  );
}
