'use client';

import React, { useRef, useState } from 'react';
import type { PresidencySummary } from '@/data/vietnam/studyGuide';
import { splitPresidencyName } from '@/lib/study';

const UNIT_START = 1945;
const UNIT_END = 1975;

/**
 * The five presidencies on one proportional 1945–1975 bar. Each segment is a
 * tab: its width shows how long that administration owned the war, and
 * choosing it opens what the president did, the turning point and the
 * mistake students make about him.
 */
export default function PresidentsExplorer({ presidencies }: { presidencies: PresidencySummary[] }) {
  const [activeId, setActiveId] = useState(presidencies[0]?.id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const rows = presidencies.map((p) => ({ ...p, ...splitPresidencyName(p.name) }));
  const active = rows.find((r) => r.id === activeId) ?? rows[0];

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next = index + (keys[e.key] ?? 0);
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = rows.length - 1;
    if (next === index) return;
    e.preventDefault();
    const target = rows[(next + rows.length) % rows.length];
    setActiveId(target.id);
    tabRefs.current[target.id]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Presidents, 1945 to 1975" className="flex flex-col md:flex-row md:items-stretch gap-px md:gap-1">
        {rows.map((r, i) => {
          const selected = r.id === active.id;
          const years = Math.max(r.end - r.start, 0.7);
          return (
            <button
              key={r.id}
              ref={(el) => {
                tabRefs.current[r.id] = el;
              }}
              type="button"
              role="tab"
              id={`president-tab-${r.id}`}
              aria-selected={selected}
              aria-controls="president-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(r.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              style={{ flexGrow: years }}
              className="group relative flex flex-col justify-start md:basis-0 md:min-w-[7.5rem] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-sm"
            >
              <span
                aria-hidden="true"
                className={`hidden md:block h-2.5 rounded-sm transition-colors ${selected ? 'bg-brand' : 'bg-rule-strong group-hover:bg-ink-soft'}`}
              />
              <span
                className={`flex md:block items-baseline gap-3 py-3 md:pt-3 md:pb-1 pl-3 md:pl-0 border-l-[3px] md:border-l-0 md:bg-transparent ${
                  selected ? 'border-brand bg-parchment' : 'border-rule'
                }`}
              >
                <span className="text-sm tabular-nums text-ink-muted w-24 md:w-auto shrink-0 md:block">
                  {r.start}–{r.end}
                </span>
                <span className={`block font-display font-semibold leading-snug ${selected ? 'text-ink' : 'text-ink-muted group-hover:text-ink'}`}>
                  {r.name}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="hidden md:flex justify-between text-xs tabular-nums text-ink-soft mt-1" aria-hidden="true">
        <span>{UNIT_START}</span>
        <span>{UNIT_END}</span>
      </div>

      <div
        role="tabpanel"
        id="president-panel"
        aria-labelledby={`president-tab-${active.id}`}
        tabIndex={0}
        className="mt-6 md:mt-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand rounded-sm"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-ink leading-tight">{active.name}</h3>
          <p className="text-sm text-ink-muted">
            <a href={`#turning-points-${active.id}`} className="font-semibold text-brand underline underline-offset-2 hover:text-brand-hover">
              Turning points from these years
            </a>
          </p>
        </div>
        <p className="mt-1 text-base font-semibold text-brand">{active.doctrine}</p>

        <dl className="mt-6 grid max-w-[66ch] gap-x-10 gap-y-6 lg:max-w-none lg:grid-cols-3">
          <div>
            <dt className="font-display text-sm font-semibold text-ink">{active.name.includes(' and ') ? 'What they did' : 'What he did'}</dt>
            <dd className="mt-1.5 font-serif text-base leading-relaxed text-ink">{active.keyActions}</dd>
          </div>
          <div>
            <dt className="font-display text-sm font-semibold text-ink">The turning point</dt>
            <dd className="mt-1.5 font-serif text-base leading-relaxed text-ink">{active.turningPoint}</dd>
          </div>
          <div className="lg:border-l lg:border-brand-rule lg:pl-6">
            <dt className="font-display text-sm font-semibold text-brand">Mistake to avoid on the test</dt>
            <dd className="mt-1.5 font-serif text-base leading-relaxed text-ink">{active.examPitfall}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
