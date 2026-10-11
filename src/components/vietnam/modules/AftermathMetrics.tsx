'use client';

import React, { useState } from 'react';

export default function AftermathMetrics() {
  const [activeTab, setActiveTab] = useState<'casualties' | 'refugees' | 'environmental'>('casualties');

  return (
    <figure className="my-10 border border-stone-300 dark:border-stone-800 bg-[#f9f7f2] dark:bg-[#161514]">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/60 flex flex-wrap items-center justify-between gap-2 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Documented Human Ledger
          </span>
          <span className="text-stone-500 ml-2">&bull; The Cost of 30 Years of War (1945–1975 &amp; Beyond)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('casualties')}
            className={`px-2.5 py-1 text-xs font-archival-mono uppercase tracking-wider transition-colors cursor-pointer border ${
              activeTab === 'casualties'
                ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
            }`}
          >
            Human Casualties
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('refugees')}
            className={`px-2.5 py-1 text-xs font-archival-mono uppercase tracking-wider transition-colors cursor-pointer border ${
              activeTab === 'refugees'
                ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
            }`}
          >
            Refugees &amp; Camps
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('environmental')}
            className={`px-2.5 py-1 text-xs font-archival-mono uppercase tracking-wider transition-colors cursor-pointer border ${
              activeTab === 'environmental'
                ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
            }`}
          >
            Unexploded Ordnance
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {activeTab === 'casualties' && (
          <div className="space-y-6">
            <div>
              <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 block">
                Military &amp; Civilian Accounting
              </span>
              <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                An Estimated 3.1 to 3.8 Million Lives Lost
              </h4>
              <p className="mt-2 font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                The human cost of thirty years of armed conflict devastated Vietnamese society across all regions and political lines, while claiming over 58,000 American military lives.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
                <span className="font-archival-mono text-[10px] uppercase tracking-wider text-stone-500 block">
                  U.S. Military Dead
                </span>
                <div className="mt-1 font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                  58,220
                </div>
                <span className="font-archival-mono text-[10px] text-stone-400 block mt-1">
                  153,303 wounded
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
                <span className="font-archival-mono text-[10px] uppercase tracking-wider text-stone-500 block">
                  ARVN (South) Dead
                </span>
                <div className="mt-1 font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                  ~254,000
                </div>
                <span className="font-archival-mono text-[10px] text-stone-400 block mt-1">
                  500,000+ wounded
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
                <span className="font-archival-mono text-[10px] uppercase tracking-wider text-stone-500 block">
                  PAVN / VC Dead
                </span>
                <div className="mt-1 font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                  ~1,100,000
                </div>
                <span className="font-archival-mono text-[10px] text-stone-400 block mt-1">
                  Official 1995 disclosure
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
                <span className="font-archival-mono text-[10px] uppercase tracking-wider text-stone-500 block">
                  Vietnamese Civilians Dead
                </span>
                <div className="mt-1 font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                  2M – 4M
                </div>
                <span className="font-archival-mono text-[10px] text-stone-400 block mt-1">
                  North &amp; South combined
                </span>
              </div>
            </div>

            <div className="p-5 bg-[#f2ede4] dark:bg-[#1a1816] border border-stone-300 dark:border-stone-800 text-xs sm:text-sm font-sans space-y-2">
              <span className="font-archival-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                Methodological Documentation &bull; The 1995 Hanoi Disclosure:
              </span>
              <p className="font-editorial-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                On April 4, 1995, preceding the formal diplomatic normalization with Washington, Hanoi officially published casualty figures for the first time: 1.1 million North Vietnamese and Viet Cong combatants killed, 600,000 wounded, and approximately 2 million civilian deaths. Independent demographic evaluations (Hirschman, Preston, and Vu, 1995) estimated total Vietnamese deaths at 3.1 million.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'refugees' && (
          <div className="space-y-6">
            <div>
              <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 block">
                Post-1975 Displacement
              </span>
              <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                Re-education Camps &amp; The Boat People Diaspora
              </h4>
              <p className="mt-2 font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                Following the collapse of the southern regime, the unified communist government subjected roughly 1 million former South Vietnamese military officers, civil servants, and intellectuals to compulsory &ldquo;re-education.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
                <span className="font-archival-mono uppercase font-bold text-stone-500 block">Re-education Camps</span>
                <div className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                  1 Million Detained
                </div>
                <p className="text-stone-600 dark:text-stone-400 font-editorial-serif">
                  Between 100,000 and 300,000 were imprisoned for up to 5 to 17 years in harsh forced-labor redoubts; an estimated 10,000 to 20,000 died of malnutrition and disease.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
                <span className="font-archival-mono uppercase font-bold text-stone-500 block">The Boat People Exodus</span>
                <div className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                  1.5 – 2.0 Million Fled
                </div>
                <p className="text-stone-600 dark:text-stone-400 font-editorial-serif">
                  Between 1975 and 1995, over 1.5 million people fled Vietnam on overcrowded wooden vessels; the UN High Commissioner for Refugees estimated 200,000 to 400,000 drowned at sea.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
                <span className="font-archival-mono uppercase font-bold text-stone-500 block">Doi Moi (1986)</span>
                <div className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                  Economic Realpolitik
                </div>
                <p className="text-stone-600 dark:text-stone-400 font-editorial-serif">
                  Economic collapse from collectivization and Soviet aid loss forced the Communist Party in 1986 to abandon orthodox socialism in favor of market-oriented economic reforms (<em>Doi Moi</em>).
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'environmental' && (
          <div className="space-y-6">
            <div>
              <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 block">
                The Toxic &amp; Explosive Legacy
              </span>
              <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                800,000 Tons of Unexploded Ordnance Remaining in the Soil
              </h4>
              <p className="mt-2 font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                The physical battlefield outlived the war. Roughly 10% to 30% of the 7.5 million tons of American bombs dropped failed to detonate upon impact, contaminating 20% of Vietnam’s arable land.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 text-xs sm:text-sm font-sans">
              <span className="font-archival-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                Post-War Casualties (1975–Present):
              </span>
              <p className="font-editorial-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                Since 1975, over <strong>40,000 Vietnamese have been killed</strong> and more than <strong>60,000 injured</strong> by unexploded cluster bomblets, landmines, and artillery shells while farming or scavenging for scrap metal.
              </p>
            </div>
          </div>
        )}
      </div>
    </figure>
  );
}
