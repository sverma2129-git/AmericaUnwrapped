'use client';

import React, { useState } from 'react';

export default function PhoenixAnalysis() {
  const [activeTab, setActiveTab] = useState<'phoenix' | 'ranchhand'>('phoenix');

  return (
    <figure className="my-10 border border-rule-strong bg-paper">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-rule bg-parchment-light flex flex-wrap items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-bold text-ink">
            What the records show
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('phoenix')}
            className={`px-2.5 py-1 text-xs transition-colors cursor-pointer border ${ activeTab === 'phoenix' ? 'border-ink bg-ink text-paper font-bold' : 'border-rule-strong bg-white text-ink-muted hover:border-rule-strong' }`}
          >
            The Phoenix Program
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ranchhand')}
            className={`px-2.5 py-1 text-xs transition-colors cursor-pointer border ${ activeTab === 'ranchhand' ? 'border-ink bg-ink text-paper font-bold' : 'border-rule-strong bg-white text-ink-muted hover:border-rule-strong' }`}
          >
            Operation Ranch Hand
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {activeTab === 'phoenix' ? (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-ink mt-1">
                What the Phoenix numbers really count
              </h3>
              <p className="mt-2 font-display text-base text-ink-muted leading-relaxed">
                The Phoenix Program (<em>Phung Hoang</em>) was designed by the CIA and CORDS to dismantle the Viet Cong Infrastructure (VCI), the hidden civil government that taxed villages, drafted youths, and executed Saigon officials.
              </p>
            </div>

            {/* Official Four-Category Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white border border-rule-strong">
                <span className="text-xs text-ink-soft block">
                  Total captured, turned or killed
                </span>
                <div className="mt-1 font-display text-xl sm:text-2xl font-bold text-ink">
                  81,740
                </div>
                <span className="text-xs text-ink-soft block mt-1">
                  1968–1972 Total
                </span>
              </div>

              <div className="p-4 bg-white border border-rule-strong">
                <span className="text-xs text-ink-soft block">
                  Captured and questioned
                </span>
                <div className="mt-1 font-display text-xl sm:text-2xl font-bold text-ink">
                  33,358
                </div>
                <span className="text-xs text-ink-soft block mt-1">
                  40.8% of total
                </span>
              </div>

              <div className="p-4 bg-white border border-rule-strong">
                <span className="text-xs text-ink-soft block">
                  Switched sides
                </span>
                <div className="mt-1 font-display text-xl sm:text-2xl font-bold text-ink">
                  22,013
                </div>
                <span className="text-xs text-ink-soft block mt-1">
                  Chieu Hoi amnesty (26.9%)
                </span>
              </div>

              <div className="p-4 bg-white border border-rule-strong">
                <span className="text-xs text-ink-soft block">
                  Killed
                </span>
                <div className="mt-1 font-display text-xl sm:text-2xl font-bold text-ink">
                  26,369
                </div>
                <span className="text-xs text-ink-soft block mt-1">
                  MACV recorded (32.3%)
                </span>
              </div>
            </div>

            {/* The 87% vs 13% Reality Ledger */}
            <div className="p-5 bg-parchment border border-rule-strong space-y-4">
              <span className="text-xs font-bold text-ink-muted block">
                Who actually did the killing?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm font-sans">
                <div className="space-y-1">
                  <div className="font-display font-bold text-ink text-base">
                    87% &bull; Conventional Military Clashes
                  </div>
                  <p className="text-ink-muted leading-relaxed font-display">
                    The vast majority of deaths were ordinary infantrymen or villagers killed in regular military sweeps, artillery strikes, or ambushes. Because province chiefs faced monthly neutralization quotas from Saigon, dead bodies were routinely classified ex-post-facto as &ldquo;VCI cadres&rdquo; to fulfill bureaucratic quotas.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-display font-bold text-ink text-base">
                    13% &bull; Targeted Police / PRU Raids
                  </div>
                  <p className="text-ink-muted leading-relaxed font-display">
                    Only approximately 13% of deaths occurred during targeted raids by CIA-advised Provincial Reconnaissance Units (PRUs) or National Police. CIA director William Colby testified before Congress in 1971 that Phoenix was not an assassination program, but acknowledged widespread abuses, torture, and wrongful arrests by local South Vietnamese police.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-ink mt-1">
                Operation Ranch Hand and the cost of dioxin
              </h3>
              <p className="mt-2 font-display text-base text-ink-muted leading-relaxed">
                Between 1961 and 1971, the U.S. Air Force sprayed nearly 20 million gallons of chemical herbicides over 4.5 million acres of South Vietnam and the Ho Chi Minh Trail, attempting to strip forest canopies and destroy insurgent food crops.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 bg-white border border-rule space-y-1">
                <span className="font-bold text-ink-soft block">Total sprayed</span>
                <div className="font-display text-lg font-bold text-ink">
                  19.5 Million Gallons
                </div>
                <p className="text-ink-muted">
                  65% consisted of Agent Orange, contaminated with the highly toxic carcinogen 2,3,7,8-TCDD (dioxin).
                </p>
              </div>

              <div className="p-4 bg-white border border-rule space-y-1">
                <span className="font-bold text-ink-soft block">Forests and mangroves stripped</span>
                <div className="font-display text-lg font-bold text-ink">
                  4.5 Million Acres
                </div>
                <p className="text-ink-muted">
                  Equivalent to 10% of South Vietnam’s total land area; devastated the Rung Sat mangrove swamps outside Saigon.
                </p>
              </div>

              <div className="p-4 bg-white border border-rule space-y-1">
                <span className="font-bold text-ink-soft block">Crops destroyed</span>
                <div className="font-display text-lg font-bold text-ink">
                  Agent Blue spraying
                </div>
                <p className="text-ink-muted">
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
