'use client';

import React, { useState } from 'react';

export default function ParisAccordsTimeline() {
  const [selectedPhase, setSelectedPhase] = useState<'breakthrough' | 'deadlock' | 'christmas' | 'signing'>('breakthrough');

  const phases = {
    deadlock: {
      title: 'The Four-Year Deadlock (1969–1972)',
      timeframe: 'August 1969 – September 1972',
      summary:
        'Kissinger and Le Duc Tho met secretly in a villa in Sainte-Gemme outside Paris. Talks were paralyzed by two irreconcilable demands: Washington insisted that all North Vietnamese Army (PAVN) troops withdraw completely from the South. Hanoi insisted that South Vietnamese President Nguyen Van Thieu be removed and replaced by a coalition government before any ceasefire.',
      keyConcession: 'Neither side would budge; the war continued for three more years with over 20,000 additional American and hundreds of thousands of Vietnamese casualties.',
    },
    breakthrough: {
      title: 'The October 1972 Secret Compromise',
      timeframe: 'October 8, 1972',
      summary:
        'With the U.S. presidential election weeks away, Le Duc Tho made a dramatic concession: Hanoi dropped its demand that Thieu be removed from power. In return, Kissinger conceded the core American demand: roughly 150,000–200,000 North Vietnamese combat troops were permitted to remain in place inside South Vietnam.',
      keyConcession: 'Kissinger publicly announced "Peace is at hand" on October 26, ensuring Nixon’s reelection landslide while secretly sealing South Vietnam’s long-term military vulnerability.',
    },
    christmas: {
      title: 'Thieu’s Rejection & The Christmas Bombing',
      timeframe: 'December 18–29, 1972',
      summary:
        'President Thieu furiously rejected the draft treaty, stating that allowing 150,000 enemy troops on his sovereign soil was a death warrant. When Hanoi refused to renegotiate 69 amendments demanded by Thieu, Nixon ordered Operation Linebacker II: 11 days of around-the-clock B-52 strikes against Hanoi and Haiphong, dropping over 20,000 tons of explosives.',
      keyConcession: 'The bombing did not alter the text of the treaty; its primary purpose was to coerce Thieu by demonstrating American ruthlessness and to convince Hanoi that Washington would strike if provoked.',
    },
    signing: {
      title: 'The Signing of the Accords',
      timeframe: 'January 27, 1973',
      summary:
        'The final Paris Peace Accords signed in January was virtually identical to the draft agreed in October. Nixon coerced Thieu into signing by secretly threatening to cut off all aid if he balked, while writing personal letters guaranteeing that the U.S. would "respond with full force" if Hanoi violated the ceasefire—guarantees made null and void by Watergate and the War Powers Act.',
      keyConcession: 'All American combat troops departed within 60 days; 591 American POWs returned home; North Vietnamese divisions remained stationed inside South Vietnam.',
    },
  };

  const current = phases[selectedPhase];

  return (
    <figure className="my-10 border border-stone-300 dark:border-stone-800 bg-[#f9f7f2] dark:bg-[#161514]">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/60 flex flex-wrap items-center justify-between gap-2 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Diplomatic Anatomy
          </span>
          <span className="text-stone-500 ml-2">&bull; The Paris Negotiations (1969–1973)</span>
        </div>
        <span className="text-stone-500 uppercase tracking-widest text-[11px]">
          Four Phases of Compromise &amp; Exit
        </span>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 block">
            The Fatal Concession
          </span>
          <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
            Leaving 150,000 PAVN Troops in South Vietnam
          </h4>
          <p className="mt-2 font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            The fundamental compromise that unlocked the Paris Peace Accords was asymmetric: the United States agreed to withdraw all American forces in exchange for American POWs, while allowing North Vietnamese combat divisions to remain stationed inside South Vietnamese territory.
          </p>
        </div>

        {/* Phase Buttons */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-200 dark:border-stone-800">
          {(['deadlock', 'breakthrough', 'christmas', 'signing'] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedPhase(key)}
              className={`px-3 py-1.5 text-xs font-archival-mono uppercase tracking-wider transition-colors cursor-pointer border ${
                selectedPhase === key
                  ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                  : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
              }`}
            >
              {phases[key].title.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Active Phase Ledger */}
        <div className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-2">
            <h5 className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              {current.title}
            </h5>
            <span className="font-archival-mono text-xs text-stone-500">
              {current.timeframe}
            </span>
          </div>

          <p className="font-editorial-serif text-base text-stone-800 dark:text-stone-200 leading-relaxed">
            {current.summary}
          </p>

          <div className="p-4 bg-[#f2ede4] dark:bg-[#1a1816] border border-stone-300 dark:border-stone-800 text-xs font-sans">
            <span className="font-archival-mono uppercase font-bold text-stone-700 dark:text-stone-300 block mb-1">
              The Real-World Consequence:
            </span>
            <p className="font-editorial-serif text-stone-800 dark:text-stone-200 leading-relaxed text-sm">
              {current.keyConcession}
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}
