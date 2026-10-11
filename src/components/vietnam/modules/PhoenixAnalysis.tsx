'use client';

import React, { useState } from 'react';

export default function PhoenixAnalysis() {
  const [activeTab, setActiveTab] = useState<'phoenix' | 'ranchhand'>('phoenix');

  return (
    <figure className="my-10 border border-stone-300 dark:border-stone-800 bg-[#f9f7f2] dark:bg-[#161514]">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/60 flex flex-wrap items-center justify-between gap-2 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Documented Intelligence Audit
          </span>
          <span className="text-stone-500 ml-2">&bull; Phoenix Metrics &amp; Defoliation (1967–1972)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('phoenix')}
            className={`px-2.5 py-1 text-xs font-archival-mono uppercase tracking-wider transition-colors cursor-pointer border ${
              activeTab === 'phoenix'
                ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
            }`}
          >
            The Phoenix Program
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ranchhand')}
            className={`px-2.5 py-1 text-xs font-archival-mono uppercase tracking-wider transition-colors cursor-pointer border ${
              activeTab === 'ranchhand'
                ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
            }`}
          >
            Operation Ranch Hand
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {activeTab === 'phoenix' ? (
          <div className="space-y-6">
            <div>
              <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 block">
                Congressional Testimony &bull; Moorhead Committee (1971)
              </span>
              <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                Deconstructing the &ldquo;Neutralization&rdquo; Statistics
              </h4>
              <p className="mt-2 font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                The Phoenix Program (<em>Phung Hoang</em>) was designed by the CIA and CORDS to dismantle the Viet Cong Infrastructure (VCI)—the shadow civil government that taxed villages, drafted youths, and executed Saigon officials.
              </p>
            </div>

            {/* Official Four-Category Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
                <span className="font-archival-mono text-[10px] uppercase tracking-wider text-stone-500 block">
                  Total Neutralized
                </span>
                <div className="mt-1 font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                  81,740
                </div>
                <span className="font-archival-mono text-[10px] text-stone-400 block mt-1">
                  1968–1972 Total
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
                <span className="font-archival-mono text-[10px] uppercase tracking-wider text-stone-500 block">
                  Captured / Interrogated
                </span>
                <div className="mt-1 font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                  33,358
                </div>
                <span className="font-archival-mono text-[10px] text-stone-400 block mt-1">
                  40.8% of total
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
                <span className="font-archival-mono text-[10px] uppercase tracking-wider text-stone-500 block">
                  Rallied / Defected
                </span>
                <div className="mt-1 font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                  22,013
                </div>
                <span className="font-archival-mono text-[10px] text-stone-400 block mt-1">
                  Chieu Hoi amnesty (26.9%)
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
                <span className="font-archival-mono text-[10px] uppercase tracking-wider text-stone-500 block">
                  Documented Killed
                </span>
                <div className="mt-1 font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                  26,369
                </div>
                <span className="font-archival-mono text-[10px] text-stone-400 block mt-1">
                  MACV recorded (32.3%)
                </span>
              </div>
            </div>

            {/* The 87% vs 13% Reality Ledger */}
            <div className="p-5 bg-[#f2ede4] dark:bg-[#1a1816] border border-stone-300 dark:border-stone-800 space-y-4">
              <span className="font-archival-mono text-xs uppercase tracking-wider font-bold text-stone-700 dark:text-stone-300 block">
                The Methodological Distortion: Who Actually Did the Killing?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm font-sans">
                <div className="space-y-1">
                  <div className="font-editorial-serif font-bold text-stone-900 dark:text-stone-100 text-base">
                    87% &bull; Conventional Military Clashes
                  </div>
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed font-editorial-serif">
                    The vast majority of deaths were ordinary infantrymen or villagers killed in regular military sweeps, artillery strikes, or ambushes. Because province chiefs faced monthly neutralization quotas from Saigon, dead bodies were routinely classified ex-post-facto as &ldquo;VCI cadres&rdquo; to fulfill bureaucratic quotas.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-editorial-serif font-bold text-stone-900 dark:text-stone-100 text-base">
                    13% &bull; Targeted Police / PRU Raids
                  </div>
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed font-editorial-serif">
                    Only approximately 13% of deaths occurred during targeted raids by CIA-advised Provincial Reconnaissance Units (PRUs) or National Police. CIA director William Colby testified before Congress in 1971 that Phoenix was not an assassination program, but acknowledged widespread abuses, torture, and wrongful arrests by local South Vietnamese police.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 block">
                Ecological Warfare &bull; 1961–1971
              </span>
              <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                Operation Ranch Hand: Herbicidal Warfare &amp; The Dioxin Toll
              </h4>
              <p className="mt-2 font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                Between 1961 and 1971, the U.S. Air Force sprayed nearly 20 million gallons of chemical herbicides over 4.5 million acres of South Vietnam and the Ho Chi Minh Trail, attempting to strip forest canopies and destroy insurgent food crops.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
                <span className="font-archival-mono uppercase font-bold text-stone-500 block">Total Volume Sprayed</span>
                <div className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                  19.5 Million Gallons
                </div>
                <p className="text-stone-600 dark:text-stone-400">
                  65% consisted of Agent Orange, contaminated with the highly toxic carcinogen 2,3,7,8-TCDD (dioxin).
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
                <span className="font-archival-mono uppercase font-bold text-stone-500 block">Forests &amp; Mangroves Stripped</span>
                <div className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                  4.5 Million Acres
                </div>
                <p className="text-stone-600 dark:text-stone-400">
                  Equivalent to 10% of South Vietnam’s total land area; devastated the Rung Sat mangrove swamps outside Saigon.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
                <span className="font-archival-mono uppercase font-bold text-stone-500 block">Crop Destruction Program</span>
                <div className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                  Agent Blue Spraying
                </div>
                <p className="text-stone-600 dark:text-stone-400">
                  Arsenic-based defoliant targeted rice paddies in Viet Cong areas, producing severe civilian malnutrition while guerrilla fighters confiscated the remaining grain.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </figure>
  );
}
