'use client';

import React, { useState } from 'react';

type Layer = 'boundary' | 'refugees' | 'elections';

const LAYERS: { id: Layer; label: string; heading: string }[] = [
  { id: 'boundary', label: 'The line', heading: 'A temporary truce line becomes a Cold War border' },
  { id: 'refugees', label: 'The move south', heading: 'Nearly a million northerners, most of them Catholic, go south' },
  { id: 'elections', label: 'The 1956 vote', heading: 'Why the elections were never held' },
];

/** The 17th parallel, the move south, and the vote that never happened. */
export default function GenevaDivisionMap() {
  const [layer, setLayer] = useState<Layer>('boundary');
  const current = LAYERS.find((l) => l.id === layer)!;

  return (
    <div className="rounded-sm bg-surface p-5 sm:p-8">
      <div role="tablist" aria-label="Map layers" className="flex flex-wrap gap-2">
        {LAYERS.map((l) => (
          <button
            key={l.id}
            type="button"
            role="tab"
            aria-selected={layer === l.id}
            onClick={() => setLayer(l.id)}
            className={`cursor-pointer rounded-sm px-3.5 py-2 text-sm font-semibold ${
              layer === l.id ? 'bg-brand text-white' : 'bg-parchment text-ink hover:bg-brand-tint'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <h3 className="mt-6 font-display text-xl font-bold text-ink">{current.heading}</h3>

      <div className="mt-6 grid gap-x-10 gap-y-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
        <div className="overflow-hidden rounded-sm bg-terrain/40">
          <svg viewBox="0 0 800 450" className="h-auto w-full select-none" role="img" aria-label="Map of Vietnam divided at the 17th parallel">
            <path d="M 280,30 Q 420,40 520,90 Q 460,180 430,220 L 290,220 Q 230,120 280,30 Z" fill="var(--color-terrain)" stroke="var(--color-rule-strong)" strokeWidth="2" />
            <text x="360" y="110" className="fill-ink font-display text-sm font-bold">
              North Vietnam
            </text>
            <text x="360" y="130" className="fill-ink-soft text-xs">
              Capital: Hanoi. Leader: Ho Chi Minh
            </text>

            <path d="M 290,230 L 430,230 Q 480,280 510,350 Q 460,430 320,420 Q 280,340 290,230 Z" fill="var(--color-terrain-line)" stroke="var(--color-rule-strong)" strokeWidth="2" />
            <text x="370" y="330" className="fill-ink font-display text-sm font-bold">
              South Vietnam
            </text>
            <text x="370" y="350" className="fill-ink-soft text-xs">
              Capital: Saigon. Leader: Ngo Dinh Diem
            </text>

            <line x1="180" y1="225" x2="600" y2="225" stroke="var(--color-brand)" strokeWidth="2.5" strokeDasharray="6,4" />
            <text x="400" y="215" textAnchor="middle" className="fill-brand text-xs font-bold">
              17th parallel, along the Ben Hai River
            </text>

            {layer === 'refugees' && (
              <g>
                <path d="M 400,140 Q 480,230 430,320" fill="none" stroke="var(--color-brand)" strokeWidth="3" />
                <path d="M 422,312 L 430,322 L 438,310" fill="none" stroke="var(--color-brand)" strokeWidth="3" />
                <text x="490" y="240" className="fill-ink text-xs font-bold">
                  850,000 to 1 million people go south
                </text>
                <text x="490" y="258" className="fill-ink-muted text-xs">
                  Many on U.S. Navy ships
                </text>
              </g>
            )}

            {layer === 'elections' && (
              <g>
                <rect x="250" y="195" width="300" height="60" fill="var(--color-brand)" rx="3" />
                <text x="400" y="230" textAnchor="middle" fill="var(--color-surface)" className="text-xs font-bold">
                  No vote in 1956. The split stays.
                </text>
              </g>
            )}
          </svg>
        </div>

        <div aria-live="polite" className="space-y-3 text-base text-ink-muted">
          {layer === 'boundary' && (
            <>
              <p>
                The 1954 Geneva Declaration called the line at the 17th parallel a temporary military line. It was not
                supposed to be a political border.
              </p>
              <p>
                But neither the United States nor the State of Vietnam signed the declaration. As French troops left and
                Washington backed Ngo Dinh Diem, the ceasefire line hardened into a fortified Cold War border.
              </p>
            </>
          )}

          {layer === 'refugees' && (
            <>
              <p>
                For 300 days, people could move between the two zones. Between 850,000 and 1 million northerners went
                south, most of them Catholics, government workers and landowners who opposed the communists. Many sailed
                on U.S. Navy ships in Operation Passage to Freedom.
              </p>
              <p>
                About 90,000 to 100,000 Viet Minh fighters from the South went north. Hanoi quietly left thousands of
                party members behind to build an underground network.
              </p>
            </>
          )}

          {layer === 'elections' && (
            <>
              <p className="text-ink">No single decision made the split permanent. Several things worked together.</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-brand">
                <li>
                  <span className="font-semibold text-ink">Nobody could enforce the vote.</span> The International Control
                  Commission of India, Canada and Poland had no troops and no legal power to run elections.
                </li>
                <li>
                  <span className="font-semibold text-ink">Diem refused.</span> He said South Vietnam had never signed the
                  accords and that a free vote was impossible in the communist North.
                </li>
                <li>
                  <span className="font-semibold text-ink">Ho would have won.</span> Eisenhower later wrote that Ho Chi Minh
                  would probably have taken about 80% of the vote.
                </li>
                <li>
                  <span className="font-semibold text-ink">Hanoi was busy at home.</span> Its leaders were caught up in a
                  violent land reform campaign and put the North first.
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
