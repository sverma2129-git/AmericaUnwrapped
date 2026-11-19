'use client';

import React from 'react';
import type { NightStep } from '@/types/vietnam';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { isVerbatimQuotation } from '@/lib/citations';
import CitationMarker from '@/components/common/CitationMarker';
import ScrollSteps from './ScrollSteps';

// Ghost radar returns: positions on the scope (schematic, not plotted data).
const BLIPS = [
  [118, 46], [176, 92], [86, 128], [196, 138],
];

/** Radar scope schematic: the two destroyers at the center, contacts around them. */
function RadarScope({ firing }: { firing: boolean }) {
  const fade = 'transition-opacity duration-500 motion-reduce:transition-none';
  return (
    <svg
      viewBox="0 0 280 180"
      role="img"
      aria-label={firing ? 'Radar scope: the destroyers fire at the contacts' : 'Radar scope: contacts appear around the destroyers'}
      className="w-full h-full"
    >
      {[76, 52, 28].map((r) => (
        <circle key={r} cx="140" cy="90" r={r} fill="none" stroke="var(--color-rule-strong)" strokeWidth="1" />
      ))}
      <line x1="56" y1="90" x2="224" y2="90" stroke="var(--color-rule-strong)" />
      <line x1="140" y1="10" x2="140" y2="170" stroke="var(--color-rule-strong)" />
      <rect x="131" y="82" width="7" height="15" rx="1.5" className="fill-ink" />
      <rect x="143" y="84" width="7" height="15" rx="1.5" className="fill-ink" />
      <g className={fade} opacity={firing ? 1 : 0} stroke="var(--color-brand)" strokeWidth="1.25">
        {BLIPS.map(([x, y]) => (
          <line key={`f-${x}`} x1="141" y1="90" x2={x} y2={y} />
        ))}
      </g>
      {BLIPS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5.5" fill="var(--color-parchment)" stroke="var(--color-brand)" strokeWidth="1.75" strokeDasharray="3 3" />
      ))}
      <text x="140" y="118" textAnchor="middle" fontSize="10" className="fill-ink-muted">Maddox and Turner Joy</text>
      <text x={BLIPS[1][0] + 10} y={BLIPS[1][1] + 4} fontSize="10" fill="var(--color-brand)">radar contact</text>
    </svg>
  );
}

function Clock({ place, time }: { place: string; time: string }) {
  return (
    <div>
      <span className="meta text-ink-soft block">{place}</span>
      <span className="block font-display text-lg sm:text-lg font-semibold text-ink tabular-nums leading-tight">{time}</span>
    </div>
  );
}

/**
 * The night of August 4 in two time zones: what happened at sea, and when
 * Washington knew. The figure shows the record itself where one exists (the
 * pilot's account, the cable, the address) and a radar schematic otherwise.
 */
export default function NightScrolly({ steps }: { steps: NightStep[] }) {
  return (
    <ScrollSteps
      steps={steps.map((s) => ({ key: s.scene, label: s.localTime, headline: s.headline, body: s.body }))}
      renderFigure={(active) => {
        const step = steps[active];
        const citation = step.quoteCitationId ? CITATION_REGISTRY[step.quoteCitationId] : undefined;
        const quote = citation && isVerbatimQuotation(citation) ? citation : undefined;
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <Clock place="Gulf of Tonkin" time={step.localTime} />
              <Clock place="Washington" time={step.washingtonTime} />
            </div>
            <div className="mt-3 bg-parchment rounded-sm min-h-[24vh] lg:min-h-[32vh] flex items-center">
              {quote ? (
                <figure className="p-4 sm:p-6">
                  <blockquote className="font-display text-sm sm:text-lg text-ink leading-snug">
                    &ldquo;{quote.exactQuotation}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 text-xs text-ink-soft">
                    {quote.authorOrInstitution}, {quote.date}
                    <CitationMarker id={quote.id} />
                  </figcaption>
                </figure>
              ) : (
                <div className="w-full h-[24vh] lg:h-[32vh] p-2">
                  <RadarScope firing={step.scene === 'firing'} />
                </div>
              )}
            </div>
          </>
        );
      }}
    />
  );
}
