'use client';

import React, { useState } from 'react';

const PHOENIX = [
  { label: 'Removed in all', value: '81,740', note: 'Official count, 1968–1972' },
  { label: 'Captured', value: '33,358', note: '41% of the total' },
  { label: 'Switched sides', value: '22,013', note: '27%, under the Chieu Hoi amnesty' },
  { label: 'Killed', value: '26,369', note: '32%' },
];

/** The Phoenix Program and Operation Ranch Hand, by their own numbers. */
export default function PhoenixAnalysis() {
  const [tab, setTab] = useState<'phoenix' | 'ranchhand'>('phoenix');
  const tabs = [
    { id: 'phoenix' as const, label: 'The Phoenix Program' },
    { id: 'ranchhand' as const, label: 'Operation Ranch Hand' },
  ];

  return (
    <div>
      <div role="tablist" aria-label="Two secret programs" className="flex gap-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`cursor-pointer rounded-t-sm px-4 py-2.5 text-sm font-semibold ${
              tab === t.id ? 'bg-surface text-ink' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="space-y-8 rounded-sm rounded-tl-none bg-surface p-5 sm:p-8">
        {tab === 'phoenix' ? (
          <>
            <div className="max-w-[62ch]">
              <h3 className="font-display text-xl font-bold text-navy">What the Phoenix numbers count</h3>
              <p className="mt-2 text-base text-ink-muted">
                The CIA and the U.S. pacification office, CORDS, built the Phoenix Program (<em>Phung Hoang</em>) to break up
                the Viet Cong’s hidden government. That network collected taxes, drafted young men and killed officials
                loyal to Saigon.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {PHOENIX.map((p) => (
                <div key={p.label}>
                  <dt className="text-sm text-ink-muted">{p.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-extrabold tabular-nums text-navy">{p.value}</dd>
                  <dd className="text-xs text-ink-soft">{p.note}</dd>
                </div>
              ))}
            </dl>

            <div className="rounded-sm bg-parchment p-5 sm:p-6">
              <h4 className="font-display text-lg font-bold text-navy">Who actually did the killing?</h4>
              <div className="mt-4 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                <div>
                  <p className="font-display text-2xl font-extrabold text-brand">87%</p>
                  <p className="font-semibold text-ink">In regular combat</p>
                  <p className="mt-1 text-base text-ink-muted">
                    Most of the dead were soldiers or villagers killed in ordinary sweeps, artillery fire and ambushes.
                    Province chiefs had monthly quotas from Saigon, so officials often listed these dead as Viet Cong
                    officials after the fact.
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold text-brand">13%</p>
                  <p className="font-semibold text-ink">In targeted raids</p>
                  <p className="mt-1 text-base text-ink-muted">
                    The rest died in raids by police or by CIA-advised Provincial Reconnaissance Units. In 1971 William
                    Colby told Congress that Phoenix was not an assassination program, but he admitted to abuses, torture
                    and wrongful arrests by local police.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="max-w-[62ch]">
              <h3 className="font-display text-xl font-bold text-navy">Operation Ranch Hand and the cost of dioxin</h3>
              <p className="mt-2 text-base text-ink-muted">
                From 1962 to 1971, U.S. Air Force planes sprayed herbicides over South Vietnam and the Ho Chi Minh Trail to
                strip away jungle cover and destroy the crops guerrillas ate.
              </p>
            </div>

            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-ink-muted">Sprayed</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-navy">19 million gallons</dd>
                <dd className="mt-1 text-sm text-ink-muted">About 11 million gallons were Agent Orange, contaminated with the dioxin 2,3,7,8-TCDD.</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-muted">Forest stripped</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-navy">5 million acres</dd>
                <dd className="mt-1 text-sm text-ink-muted">Including the Rung Sat mangrove swamps outside Saigon.</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-muted">Crops destroyed</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-navy">500,000 acres</dd>
                <dd className="mt-1 text-sm text-ink-muted">
                  Agent Blue, an arsenic-based herbicide, was sprayed on rice fields in Viet Cong areas. Villagers lost
                  their food, and guerrillas took much of the grain that was left.
                </dd>
              </div>
            </dl>
          </>
        )}
      </div>
    </div>
  );
}
