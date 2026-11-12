'use client';

import React from 'react';
import type { HistoriansDebate } from '@/types/vietnam';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { isVerbatimQuotation } from '@/lib/citations';
import CitationMarker from '@/components/common/CitationMarker';
import CitedParagraph from '@/components/common/CitedParagraph';
import { useCourse } from './CourseContext';

/** Two positions historians take, with the evidence each relies on, and what both agree on. */
export function HistoriansDisagree({ debate }: { debate: HistoriansDebate }) {
  return (
    <section aria-labelledby="debate-heading">
      <h3 id="debate-heading" className="font-display text-xl sm:text-2xl font-semibold text-ink">
        Historians disagree: {debate.question}
      </h3>
      <CitedParagraph text={debate.agreed} className="mt-2 text-base text-ink-muted leading-relaxed max-w-3xl" />
      <div className="mt-6 grid md:grid-cols-2 gap-y-8 md:gap-x-12">
        {debate.positions.map((p, i) => (
          <div key={p.label} className="">
            <h4 className="font-display text-lg font-semibold text-ink leading-snug">
              {String.fromCharCode(65 + i)}. {p.label}
            </h4>
            <CitedParagraph text={p.claim} className="mt-2 text-[0.9375rem] text-ink leading-relaxed" />
            <p className="mt-4 text-[0.9375rem] font-semibold text-ink">The evidence for it</p>
            <ul className="mt-1.5 space-y-1.5 text-[0.9375rem] text-ink-muted leading-relaxed list-disc pl-5">
              {p.evidence.map((e, j) => (
                <li key={j}>
                  <CitedParagraph text={e} className="inline" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const SOURCING_PROMPT = {
  ah1: 'Who created this, and when? Is it a primary source (from the time) or a secondary source (written later)?',
  apush: 'What was the purpose of this source, and who was its audience? How does that limit what it can prove?',
};

const TYPE_LABEL: Record<string, string> = {
  PRIMARY_SOURCE: 'Primary source',
  CONTEMPORARY_REPORTING: 'Contemporary reporting',
  SCHOLARLY_SECONDARY_SOURCE: 'Secondary source',
  LATER_HISTORICAL_ANALYSIS: 'Later analysis',
};

/** Verified quotations in reading order, each with a sourcing question for the student's course. */
export function EvidenceLocker({ citationIds }: { citationIds: string[] }) {
  const { course } = useCourse();
  const quotes = citationIds
    .map((id) => CITATION_REGISTRY[id])
    .filter((c) => c && isVerbatimQuotation(c));
  return (
    <ol className="divide-y divide-rule">
      {quotes.map((c) => (
        <li key={c.id} className="py-6 first:pt-0 last:pb-0 max-w-3xl">
          <blockquote className="font-display text-lg text-ink leading-snug">&ldquo;{c.exactQuotation}&rdquo;</blockquote>
          <p className="mt-2 text-[0.9375rem] text-ink-muted">
            <strong className="text-ink font-semibold">{c.authorOrInstitution}</strong>, {c.title}
            <CitationMarker id={c.id} />
          </p>
          <p className="meta mt-1 text-ink-soft">
            {TYPE_LABEL[c.sourceType ?? ''] ?? 'Source'}, {c.date}
          </p>
          {c.limitations && (
            <p className="mt-3 text-[0.9375rem] text-ink-muted leading-relaxed">
              <strong className="font-semibold text-ink">What it can&rsquo;t tell you:</strong> {c.limitations}
            </p>
          )}
          <p className="mt-2 text-[0.9375rem] text-ink leading-relaxed">
            <strong className="font-semibold text-brand">Ask yourself:</strong> {SOURCING_PROMPT[course ?? 'ah1']}
          </p>
        </li>
      ))}
    </ol>
  );
}
