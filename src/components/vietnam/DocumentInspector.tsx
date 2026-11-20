'use client';

import React, { useState } from 'react';
import { PrimarySourceExcerpt } from '@/types/vietnam';
import { useCitation } from '@/components/common/CitationContext';

const ARCHIVE: Record<string, string> = {
  washington: 'U.S. government record',
  hanoi: 'North Vietnamese record',
  saigon: 'South Vietnamese record',
  neutral: 'Eyewitness reporting',
  international: 'International diplomatic record',
};

/** One primary source: who wrote it, why it matters, its words, and its background on request. */
export default function DocumentInspector({ document }: { document: PrimarySourceExcerpt }) {
  const [showContext, setShowContext] = useState(false);
  const { openCitation } = useCitation();
  const lookupId = document.registryId || document.id;

  return (
    <article className="paper rounded-sm border border-rule border-l-4 border-l-navy p-5 sm:p-7">
      <p className="font-mono text-xs text-ink-muted">
        {ARCHIVE[document.side] ?? 'Document'}
        {document.classification ? `, ${document.classification}` : ''}
      </p>
      <h4 className="mt-1 font-display text-xl font-bold text-navy">{document.title}</h4>
      <p className="mt-1 text-sm text-ink-muted">
        {document.authorOrSpeaker}, {document.role}, <time>{document.date}</time>
      </p>

      <p className="mt-5 max-w-[66ch] font-serif text-lg leading-snug text-ink">{document.whyItMatters}</p>

      <div className="mt-5 rounded-sm border border-rule bg-parchment-light p-5 sm:p-6">
        <p className="font-mono text-xs text-ink-soft">{document.isVerified ? 'The exact words' : 'A summary in our words, not a quotation'}</p>
        {document.isVerified ? (
          <blockquote className="typed mt-3 whitespace-pre-line text-ink">&ldquo;{document.excerpt}&rdquo;</blockquote>
        ) : (
          <p className="mt-3 whitespace-pre-line text-base text-ink">{document.excerpt}</p>
        )}
        <p className="mt-4 font-mono text-xs text-ink-soft">Held by: {document.archiveSource}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <button
          type="button"
          onClick={() => setShowContext(!showContext)}
          aria-expanded={showContext}
          className="cursor-pointer font-semibold text-brand underline decoration-brand-rule underline-offset-4 hover:decoration-brand"
        >
          {showContext ? 'Hide the background' : 'Show the background'}
        </button>
        <button
          type="button"
          onClick={() => openCitation(lookupId)}
          className="cursor-pointer font-semibold text-brand underline decoration-brand-rule underline-offset-4 hover:decoration-brand"
        >
          See the source details
        </button>
      </div>
      {showContext && <p className="mt-3 max-w-[66ch] text-base text-ink-muted">{document.historicalContext}</p>}
    </article>
  );
}
