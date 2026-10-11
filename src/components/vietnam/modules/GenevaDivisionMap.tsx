'use client';

import React, { useState } from 'react';

export default function GenevaDivisionMap() {
  const [activeLayer, setActiveLayer] = useState<'boundary' | 'refugees' | 'elections'>('boundary');

  return (
    <figure className="my-10 border border-stone-300 dark:border-stone-800 bg-[#f9f7f2] dark:bg-[#161514]">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/60 flex flex-wrap items-center justify-between gap-2 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Geopolitical Cartography
          </span>
          <span className="text-stone-500 ml-2">&bull; The 17th Parallel &amp; Geneva Partition (1954–1956)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveLayer('boundary')}
            className={`px-2.5 py-1 text-xs font-archival-mono uppercase tracking-wider transition-colors cursor-pointer border ${
              activeLayer === 'boundary'
                ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
            }`}
          >
            The 17th Parallel
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('refugees')}
            className={`px-2.5 py-1 text-xs font-archival-mono uppercase tracking-wider transition-colors cursor-pointer border ${
              activeLayer === 'refugees'
                ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
            }`}
          >
            Operation Passage to Freedom
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('elections')}
            className={`px-2.5 py-1 text-xs font-archival-mono uppercase tracking-wider transition-colors cursor-pointer border ${
              activeLayer === 'elections'
                ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
            }`}
          >
            The 1956 Election Veto
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 block">
            {activeLayer === 'boundary'
              ? 'Provisional Military Demarcation Line (Ben Hai River)'
              : activeLayer === 'refugees'
              ? 'Operation Passage to Freedom (1954–1955)'
              : 'The Multi-Causal Partition Failure (1956)'}
          </span>
          <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
            {activeLayer === 'boundary'
              ? 'A Temporary Truce Line That Hardened Into Cold War Partition'
              : activeLayer === 'refugees'
              ? 'Nearly 1 Million Northern Catholics Flee South by U.S. Navy'
              : 'Why Nationwide Elections Were Never Held'}
          </h4>
        </div>

        {/* Print-Cartography SVG Map */}
        <div className="relative bg-[#eee8db] dark:bg-[#1f1d1a] border border-stone-300 dark:border-stone-700 p-4 aspect-16/9 flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 800 450" className="w-full h-full select-none" role="img" aria-label="Cartographic map of partitioned Vietnam">
            {/* North Vietnam Outline */}
            <path
              d="M 280,30 Q 420,40 520,90 Q 460,180 430,220 L 290,220 Q 230,120 280,30 Z"
              fill="#e4dcce"
              stroke="#57534e"
              strokeWidth="2"
            />
            <text x="360" y="110" className="fill-stone-900 dark:fill-stone-100 font-editorial-serif text-sm font-bold">
              Democratic Republic of Vietnam (North)
            </text>
            <text x="360" y="130" className="fill-stone-600 dark:fill-stone-400 font-archival-mono text-xs">
              Hanoi &bull; Ho Chi Minh &bull; Land Reform Era
            </text>

            {/* South Vietnam Outline */}
            <path
              d="M 290,230 L 430,230 Q 480,280 510,350 Q 460,430 320,420 Q 280,340 290,230 Z"
              fill="#dcd3c3"
              stroke="#57534e"
              strokeWidth="2"
            />
            <text x="370" y="330" className="fill-stone-900 dark:fill-stone-100 font-editorial-serif text-sm font-bold">
              State / Republic of Vietnam (South)
            </text>
            <text x="370" y="350" className="fill-stone-600 dark:fill-stone-400 font-archival-mono text-xs">
              Saigon &bull; Ngo Dinh Diem
            </text>

            {/* The 17th Parallel Demarcation Line */}
            <line
              x1="180"
              y1="225"
              x2="600"
              y2="225"
              stroke="#1c1917"
              strokeWidth="2.5"
              strokeDasharray="6,4"
            />
            <text x="400" y="215" textAnchor="middle" className="fill-stone-900 dark:fill-stone-100 font-archival-mono text-xs uppercase font-bold">
              17th Parallel &bull; Ben Hai River DMZ
            </text>

            {/* Dynamic Overlay Elements */}
            {activeLayer === 'refugees' && (
              <g>
                <path
                  d="M 400,140 Q 480,230 430,320"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="3"
                  markerEnd="url(#arrow)"
                />
                <text x="490" y="240" className="fill-stone-800 dark:fill-stone-200 font-archival-mono text-xs font-bold">
                  850,000–1,000,000 Refugees South
                </text>
                <text x="490" y="258" className="fill-stone-600 dark:fill-stone-400 font-archival-mono text-[10px]">
                  Assisted by U.S. Navy Task Force 90
                </text>
              </g>
            )}

            {activeLayer === 'elections' && (
              <g>
                <rect x="250" y="200" width="300" height="50" fill="#1c1917" fillOpacity="0.85" rx="2" />
                <text x="400" y="230" textAnchor="middle" fill="#fff" className="font-archival-mono text-xs uppercase tracking-wider font-bold">
                  1956 Elections Cancelled &bull; Division Permanent
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Narrative Analysis Ledger */}
        <div className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 font-sans text-xs sm:text-sm">
          {activeLayer === 'boundary' && (
            <div className="space-y-2 text-stone-700 dark:text-stone-300 leading-relaxed font-editorial-serif">
              <p>
                Article 6 of the 1954 Geneva Accords explicitly declared: <em>&ldquo;The military demarcation line at the 17th parallel is provisional and should not in any way be interpreted as constituting a political or territorial boundary.&rdquo;</em>
              </p>
              <p>
                However, neither the United States nor the State of Vietnam signed the final declaration. With French forces evacuating and Washington pledging support to Prime Minister Ngo Dinh Diem, the provisional ceasefire line immediately solidified into a fortified international Cold War boundary.
              </p>
            </div>
          )}

          {activeLayer === 'refugees' && (
            <div className="space-y-2 text-stone-700 dark:text-stone-300 leading-relaxed font-editorial-serif">
              <p>
                Under the Geneva agreement, a 300-day window allowed free movement between zones. Between 850,000 and 1,000,000 northern Vietnamese—predominantly Catholics, civil servants, and anti-communist landowners—fled south, heavily transported by U.S. Navy ships in <strong>Operation Passage to Freedom</strong>.
              </p>
              <p>
                Roughly 90,000–100,000 southern Viet Minh fighters regathered north, though Hanoi secretly left thousands of political cadres behind to form an underground revolutionary network.
              </p>
            </div>
          )}

          {activeLayer === 'elections' && (
            <div className="space-y-2 text-stone-700 dark:text-stone-300 leading-relaxed font-editorial-serif">
              <p>
                The permanent partition was not caused by a single decision. It was a structural international failure:
              </p>
              <ul className="list-disc list-outside pl-4 space-y-1 font-sans text-xs text-stone-600 dark:text-stone-400">
                <li><strong>No Enforcement Mechanism:</strong> The International Control Commission (India, Canada, Poland) lacked legal authority or troops to supervise elections.</li>
                <li><strong>Diem’s Refusal:</strong> Diem argued South Vietnam had not signed the accords and that free elections were impossible in a communist totalitarian state.</li>
                <li><strong>Eisenhower’s Assessment:</strong> Eisenhower famously acknowledged that had elections been held, Ho Chi Minh would have won roughly 80% of the nationwide vote due to his prestige as the victor over France.</li>
                <li><strong>Northern Priorities:</strong> Hanoi was absorbed in a bloody and destabilizing internal land reform campaign, prioritizing northern consolidation over risking military conflict prematurely.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </figure>
  );
}
