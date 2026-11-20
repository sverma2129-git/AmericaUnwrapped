'use client';

import React, { useState } from 'react';

const YEARS: Record<
  number,
  { advisers: number; deaths: number; title: string; rules: string; event: string; kennedy: string }
> = {
  1960: {
    advisers: 875,
    deaths: 9,
    title: 'Where Eisenhower left it',
    rules: 'Advisers trained South Vietnamese troops and were not allowed to go with them into combat.',
    event: 'Men and supplies from the North start moving south on rough mountain trails.',
    kennedy: 'Kennedy, newly elected, backed America’s promises abroad in public. In private he doubted how much the United States could control in former colonies.',
  },
  1961: {
    advisers: 3205,
    deaths: 16,
    title: 'Kennedy sends more',
    rules: 'Advisers may now go out with South Vietnamese battalions. The first U.S. Army helicopter companies arrive.',
    event: 'Kennedy turns down regular combat divisions but approves Green Berets and other Special Forces.',
    kennedy: 'Kennedy doubted that sending combat troops would work. He warned that once some went in, the pressure to send more would never stop.',
  },
  1962: {
    advisers: 11325,
    deaths: 53,
    title: 'A new command and the strategic hamlets',
    rules: 'U.S. helicopter pilots fire on enemy targets. Operation Ranch Hand begins spraying herbicides.',
    event: 'More than 8,000 strategic hamlets go up to cut farmers off from the Viet Cong, and many farmers resent them.',
    kennedy: 'After tense meetings with the Soviets in Vienna and the crisis over Berlin, Kennedy saw Southeast Asia as a test of whether America kept its word.',
  },
  1963: {
    advisers: 16300,
    deaths: 122,
    title: 'The Buddhist crisis and the coup',
    rules: 'Advisers are fighting in firefights as a matter of routine.',
    event: 'South Vietnam’s army is beaten at Ap Bac, monks burn themselves in protest, and Cable 243 opens the way to the coup against Diem.',
    kennedy: 'In a television interview, Kennedy said that in the end the war belonged to the South Vietnamese people and their government.',
  },
};

/** Kennedy’s buildup, one year at a time. */
export default function EscalationTimeline() {
  const [year, setYear] = useState(1963);
  const current = YEARS[year];

  return (
    <div className="rounded-sm bg-surface p-5 sm:p-8">
      <div className="max-w-[62ch]">
        <h3 className="font-display text-xl font-bold text-ink">How 875 advisers became 16,300</h3>
        <p className="mt-2 text-base text-ink-muted">
          Kennedy never sent regular combat divisions. Instead he added advisers, helicopters and secret operations a little
          at a time. Pick a year.
        </p>
      </div>

      <div role="tablist" aria-label="Year" className="mt-6 grid grid-cols-4 gap-2">
        {Object.entries(YEARS).map(([y, d]) => {
          const selected = Number(y) === year;
          return (
            <button
              key={y}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setYear(Number(y))}
              className={`cursor-pointer rounded-sm px-3 py-3 text-left ${selected ? 'bg-brand text-white' : 'bg-parchment text-ink hover:bg-brand-tint'}`}
            >
              <span className="block text-sm font-bold">{y}</span>
              <span className={`block text-xs tabular-nums ${selected ? 'text-white/85' : 'text-ink-muted'}`}>{d.advisers.toLocaleString()} advisers</span>
            </button>
          );
        })}
      </div>

      {/* Bars show the buildup at a glance */}
      <div aria-hidden="true" className="mt-4 flex h-16 items-end gap-2">
        {Object.entries(YEARS).map(([y, d]) => (
          <div key={y} className="flex-1">
            <div className={`rounded-sm ${Number(y) === year ? 'bg-brand' : 'bg-rule-strong'}`} style={{ height: `${(d.advisers / 16300) * 64}px` }} />
          </div>
        ))}
      </div>

      <div aria-live="polite" className="mt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h4 className="font-display text-lg font-bold text-ink">
            {year}: {current.title}
          </h4>
          <p className="text-sm font-semibold text-brand">
            {current.deaths} Americans killed in {year}
          </p>
        </div>
        <dl className="mt-4 grid gap-x-10 gap-y-5 md:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold text-ink">What advisers were allowed to do</dt>
            <dd className="mt-1 text-base text-ink-muted">{current.rules}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-ink">What happened</dt>
            <dd className="mt-1 text-base text-ink-muted">{current.event}</dd>
          </div>
        </dl>
        <div className="mt-6 rounded-sm bg-parchment p-5">
          <p className="text-sm font-semibold text-ink">Kennedy’s thinking, in our words</p>
          <p className="mt-1 font-serif text-lg leading-snug text-ink">{current.kennedy}</p>
        </div>
      </div>
    </div>
  );
}
