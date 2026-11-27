'use client';

import React from 'react';
import type { FeaturedDocument } from '@/types/vietnam';
import { CITATION_REGISTRY, SOURCE_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { isVerbatimQuotation } from '@/lib/citations';
import { useCitation } from './CitationContext';

/** The archive reference, shortened to its first part, for the stamp. */
function stampText(locator?: string): string | null {
  if (!locator) return null;
  return locator.split(' / ')[0].split(' (')[0].trim();
}

/**
 * A real document, set as it was typed: the form's header lines, the text in a
 * typewriter face, and a red archive stamp with where the original is held.
 * Renders only a verified verbatim quotation; anything else renders nothing.
 */
export default function DocumentFacsimile({ doc, className = '' }: { doc: FeaturedDocument; className?: string }) {
  const { openCitation } = useCitation();
  const citation = CITATION_REGISTRY[doc.citationId];
  if (!citation || !isVerbatimQuotation(citation)) return null;
  const entry = SOURCE_REGISTRY.find((e) => e.id === doc.citationId);
  const stamp = doc.stamp ?? stampText(entry?.locator ?? citation.locator);

  return (
    <figure className={`max-w-2xl ${className}`}>
      <div>
        <div className="paper rounded-sm border border-rule px-5 pb-7 pt-6 sm:px-9 sm:pb-9 sm:pt-8">
          <div className="flex flex-wrap-reverse items-start justify-between gap-x-6 gap-y-4">
            <p className="typed pt-1 font-bold text-navy">{doc.kind.toUpperCase()}</p>
            {stamp && (
              <p
                aria-label={`Archive reference: ${stamp}`}
                className="typed max-w-[15rem] -rotate-2 rounded-sm border-2 border-brand px-2 py-1 text-xs font-bold leading-snug text-brand"
              >
                {stamp}
              </p>
            )}
          </div>
          <dl className="typed mt-3 grid grid-cols-[5.5rem_minmax(0,1fr)] gap-y-0.5 text-ink">
            {doc.header.map(([label, value]) => (
              <React.Fragment key={label}>
                <dt className="text-ink-soft">{label.toUpperCase()}:</dt>
                <dd>{value}</dd>
              </React.Fragment>
            ))}
          </dl>
          <hr className="my-5 border-t border-dashed border-rule" />
          <blockquote lang="en" className="typed text-ink">
            {citation.exactQuotation}
          </blockquote>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[60ch] text-sm leading-relaxed text-ink-muted">
        {doc.note}{' '}
        <button
          type="button"
          onClick={() => openCitation(doc.citationId)}
          className="cursor-pointer font-medium text-brand underline decoration-brand-rule underline-offset-4 hover:decoration-brand"
        >
          See the source
        </button>
      </figcaption>
    </figure>
  );
}
