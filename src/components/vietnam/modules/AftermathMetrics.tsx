'use client';

import React, { useState } from 'react';

type Tab = 'deaths' | 'refugees' | 'bombs';

const DEATHS = [
  { label: 'American military dead', value: '58,220', note: '153,303 wounded' },
  { label: 'South Vietnamese soldiers dead', value: 'About 254,000', note: 'More than 500,000 wounded' },
  { label: 'North Vietnamese and Viet Cong dead', value: 'About 1.1 million', note: 'Hanoi’s 1995 figure' },
  { label: 'Vietnamese civilians dead', value: '2 to 4 million', note: 'North and South together' },
];

/** The cost of the war in people, refugees and bombs left in the ground. */
export default function AftermathMetrics() {
  const [tab, setTab] = useState<Tab>('deaths');
  const tabs: { id: Tab; label: string }[] = [
    { id: 'deaths', label: 'The dead' },
    { id: 'refugees', label: 'Camps and refugees' },
    { id: 'bombs', label: 'Bombs in the ground' },
  ];

  return (
    <div>
      <div role="tablist" aria-label="What the war cost" className="flex gap-1 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`shrink-0 cursor-pointer rounded-t-sm px-4 py-2.5 text-sm font-semibold ${tab === t.id ? 'bg-surface text-ink' : 'text-ink-muted hover:text-ink'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="space-y-8 rounded-sm rounded-tl-none bg-surface p-5 sm:p-8">
        {tab === 'deaths' && (
          <>
            <div className="max-w-[62ch]">
              <h3 className="font-display text-xl font-bold text-navy">An estimated 3.1 to 3.8 million people died</h3>
              <p className="mt-2 text-base text-ink-muted">
                Thirty years of war killed Vietnamese in every region and on every side. More than 58,000 Americans died.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {DEATHS.map((d) => (
                <div key={d.label}>
                  <dt className="text-sm text-ink-muted">{d.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-extrabold text-navy">{d.value}</dd>
                  <dd className="text-xs text-ink-soft">{d.note}</dd>
                </div>
              ))}
            </dl>
            <div className="rounded-sm bg-parchment p-5">
              <p className="text-sm font-semibold text-ink">Where the numbers come from</p>
              <p className="mt-1 text-base text-ink-muted">
                On April 4, 1995, shortly before relations with Washington were restored, Hanoi published its war dead for
                the first time: 1.1 million soldiers killed, 600,000 wounded and about 2 million civilians killed. A 1995
                study by Hirschman, Preston and Vu put total Vietnamese deaths at about 3.1 million.
              </p>
            </div>
          </>
        )}

        {tab === 'refugees' && (
          <>
            <div className="max-w-[62ch]">
              <h3 className="font-display text-xl font-bold text-navy">Re-education camps and the boat people</h3>
              <p className="mt-2 text-base text-ink-muted">
                After Saigon fell, the new government sent about a million former South Vietnamese officers, officials and
                teachers to re-education.
              </p>
            </div>
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-ink-muted">Re-education camps</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-navy">About 1 million sent</dd>
                <dd className="mt-1 text-sm text-ink-muted">
                  Between 100,000 and 300,000 were held for 5 to 17 years of forced labor. An estimated 10,000 to 20,000 died of
                  hunger and disease.
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-muted">The boat people</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-navy">800,000 to 2 million</dd>
                <dd className="mt-1 text-sm text-ink-muted">
                  Fled by sea between 1975 and 1995 in crowded wooden boats. International agencies estimate 200,000 to 500,000
                  died at sea.
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-muted">Doi Moi, 1986</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-navy">A change of course</dd>
                <dd className="mt-1 text-sm text-ink-muted">
                  With collective farming failing and Soviet aid shrinking, the Communist Party turned toward a market economy
                  in 1986.
                </dd>
              </div>
            </dl>
          </>
        )}

        {tab === 'bombs' && (
          <div className="max-w-[62ch]">
            <h3 className="font-display text-xl font-bold text-navy">800,000 tons of unexploded bombs</h3>
            <p className="mt-2 text-base text-ink-muted">
              The war stayed in the ground. Somewhere between 10% and 30% of the 7.5 million tons of American bombs dropped
              never went off, and they made about a fifth of Vietnam’s farmland dangerous to work.
            </p>
            <p className="mt-6 font-serif text-xl leading-snug text-ink">
              Since 1975, more than 40,000 Vietnamese have been killed and more than 60,000 injured by old bomblets, mines and
              shells, many while farming or collecting scrap metal.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
