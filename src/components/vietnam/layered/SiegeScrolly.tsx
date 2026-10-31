'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { SiegeStep } from '@/types/vietnam';
import CitedParagraph from '@/components/common/CitedParagraph';
import SiegeMap, { SiegeLegend } from './SiegeMap';

/**
 * Scroll-driven map: the map stays pinned while the steps scroll past, and
 * whichever step crosses the middle of the viewport drives the map state.
 * Without JavaScript the steps still read top to bottom.
 */
export default function SiegeScrolly({ steps }: { steps: SiegeStep[] }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)');
    // Measuring five step cards is cheap, so this runs on every scroll event
    // rather than through requestAnimationFrame (which pauses in background tabs).
    const update = () => {
      // Reading line: mid-screen when the map sits beside the steps; just
      // below the pinned map when it sits above them on narrow screens.
      const mapBottom = mapRef.current?.getBoundingClientRect().bottom ?? 0;
      const line = wide.matches ? window.innerHeight * 0.55 : mapBottom + (window.innerHeight - mapBottom) * 0.4;
      let next = 0;
      stepRefs.current.forEach((el, i) => {
        if (el && el.firstElementChild!.getBoundingClientRect().top < line) next = i;
      });
      setActive(next);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const step = steps[active];

  return (
    <div className="relative lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10 px-4 sm:px-8 pb-6">
      {/* Pinned map (first on mobile so it sits above the steps) */}
      {/* top offset clears the site header (4rem) plus the chapter nav bar */}
      <div ref={mapRef} className="sticky top-[7.5rem] z-10 lg:order-2 self-start pt-4 pb-3 lg:py-8 bg-surface">
        <div className="relative rounded-lg border border-rule overflow-hidden bg-terrain h-[32vh] sm:h-[40vh] lg:h-[60vh]">
          <SiegeMap state={step.state} />
          <span className="absolute top-3 left-3 eyebrow px-2.5 py-1 rounded-full bg-surface/90 border border-rule text-ink">
            {step.date}
          </span>
        </div>
        <div className="mt-3">
          <SiegeLegend />
        </div>
      </div>

      {/* Steps */}
      <ol className="lg:order-1 relative">
        {steps.map((s, i) => (
          <li
            key={s.state}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            data-index={i}
            className="min-h-[60vh] lg:min-h-[75vh] flex items-center first:pt-6 last:min-h-[45vh] lg:last:min-h-[60vh]"
          >
            <div
              className={`w-full rounded-xl border p-5 sm:p-6 bg-surface transition-[border-color,box-shadow,opacity] duration-300 ${
                i === active ? 'border-rule-strong shadow-md opacity-100' : 'border-rule opacity-60'
              }`}
            >
              <span className="eyebrow text-brand block mb-1.5">
                {i + 1} / {steps.length} &middot; {s.date}
              </span>
              <h4 className="font-editorial-serif text-xl font-medium tracking-tight text-ink mb-2">{s.headline}</h4>
              <CitedParagraph text={s.body} className="text-[0.9375rem] text-ink-muted leading-relaxed" />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
