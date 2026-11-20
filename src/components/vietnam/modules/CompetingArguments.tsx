'use client';

import React, { useState } from 'react';
import { HISTORIOGRAPHICAL_SCHOOLS } from '@/data/vietnam/arguments';

/** The four main ways historians explain the war, side by side. */
export default function CompetingArguments() {
  const [selected, setSelected] = useState(HISTORIOGRAPHICAL_SCHOOLS[0].id);
  const school = HISTORIOGRAPHICAL_SCHOOLS.find((s) => s.id === selected) ?? HISTORIOGRAPHICAL_SCHOOLS[0];

  return (
    <div className="rounded-sm bg-surface p-5 sm:p-8">
      <div className="max-w-[62ch]">
        <h3 className="font-display text-xl font-bold text-navy">Four ways historians explain the war</h3>
        <p className="mt-2 text-base text-ink-muted">
          Each generation of historians brought new records and new questions. Pick a school to see what it argues, what it
          leans on, and where its critics push back.
        </p>
      </div>

      <div role="tablist" aria-label="Schools of thought" className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
        {HISTORIOGRAPHICAL_SCHOOLS.map((s) => {
          const on = s.id === selected;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setSelected(s.id)}
              className={`cursor-pointer rounded-sm px-3 py-3 text-left ${on ? 'bg-brand text-white' : 'bg-parchment text-ink hover:bg-brand-tint'}`}
            >
              <span className={`block text-xs ${on ? 'text-white/85' : 'text-ink-muted'}`}>{s.era.split(',')[0]}</span>
              <span className="block text-sm font-semibold">{s.name}</span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="mt-8">
        <h4 className="font-display text-xl font-bold text-navy">{school.name}</h4>
        <p className="mt-1 text-sm text-ink-muted">
          {school.era}. Read: {school.keyHistorians.slice(0, 3).join(', ')}
        </p>
        <p className="mt-4 max-w-[66ch] font-serif text-lg leading-snug text-ink">{school.coreThesis}</p>

        <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          <div>
            <h5 className="text-sm font-bold text-ink">What it gets right</h5>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-base text-ink-muted marker:text-success">
              {school.strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold text-ink">What critics say it misses</h5>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-base text-ink-muted marker:text-brand">
              {school.blindSpotsOrCritiques.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 rounded-sm bg-parchment p-5 text-base text-ink-muted">
          <span className="font-semibold text-ink">The evidence it leans on: </span>
          {school.primaryEvidenceEmphasized}
        </p>
      </div>
    </div>
  );
}
