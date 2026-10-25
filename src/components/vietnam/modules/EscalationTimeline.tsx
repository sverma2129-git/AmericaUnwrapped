'use client';

import React, { useState } from 'react';

export default function EscalationTimeline() {
  const [selectedYear, setSelectedYear] = useState<number>(1963);

  const escalationData: Record<
    number,
    {
      advisors: number;
      casualties: number;
      label: string;
      operationalRule: string;
      milestone: string;
      kennedyQuote: string;
    }
  > = {
    1960: {
      advisors: 875,
      casualties: 9,
      label: 'Eisenhower MAAG Baseline',
      operationalRule: 'Strictly defensive training; forbidden from accompanying ARVN units on combat missions.',
      milestone: 'Infiltration from North begins along early primitive tracks of the Truong Son mountains.',
      kennedyQuote: 'Publicly affirmed global commitments while privately recognizing the limits of American power to manage post-colonial regional upheavals.',
    },
    1961: {
      advisors: 3205,
      casualties: 16,
      label: 'The Flexible Response Shift (NSAM 111)',
      operationalRule: 'Advisors permitted to accompany battalion-level units; first U.S. Army helicopter companies deployed.',
      milestone: 'Kennedy rejects conventional ground combat divisions but authorizes Green Berets and Special Forces.',
      kennedyQuote: 'Expressed skepticism regarding combat troop deployments, warning that introduction of forces creates relentless bureaucratic pressure for further escalation.',
    },
    1962: {
      advisors: 11325,
      casualties: 53,
      label: 'Creation of MACV & Strategic Hamlets',
      operationalRule: 'U.S. helicopter pilots actively engage enemy targets; Operation Ranch Hand begins defoliation spraying.',
      milestone: 'Over 8,000 "Strategic Hamlets" constructed to sever peasants from Viet Cong guerrillas, stirring rural resentment.',
      kennedyQuote: 'Viewed Southeast Asia as a critical testing arena for American credibility following confrontations in Vienna and Berlin.',
    },
    1963: {
      advisors: 16300,
      casualties: 122,
      label: 'The Buddhist Crisis & The Coup',
      operationalRule: 'Advisors routinely involved in active combat firefights; rules of engagement loosen dramatically.',
      milestone: 'Battle of Ap Bac routs ARVN; Buddhist self-immolations; Cable 243 leads to the violent overthrow of Diem.',
      kennedyQuote: 'Emphasized in broadcast remarks that the war was ultimately the responsibility of the South Vietnamese people and government.',
    },
  };

  const current = escalationData[selectedYear];

  return (
    <figure className="my-10 border border-rule bg-parchment rounded-xs shadow-xs text-ink">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-rule bg-parchment-light flex flex-wrap items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-bold uppercase tracking-wider text-ink">
            Escalation Ledger
          </span>
          <span className="text-ink-soft ml-2">&bull; The Advisory Commitment (1960–1963)</span>
        </div>
        <span className="text-ink-soft uppercase tracking-widest text-[11px] font-semibold">
          Select Year
        </span>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-brand font-bold block">
            Incremental Expansion
          </span>
          <h4 className="font-editorial-serif text-2xl font-bold text-ink mt-1">
            How 875 Military Advisers Became 16,300 Combatants
          </h4>
          <p className="mt-2 font-editorial-serif text-base text-ink-muted leading-relaxed">
            President Kennedy consistently refused to commit conventional American ground combat divisions, yet sought to prevent communist victory through incremental increases in military advisers, helicopters, and covert special operations.
          </p>
        </div>

        {/* Year Buttons */}
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-rule">
          {[1960, 1961, 1962, 1963].map((yr) => (
            <button
              key={yr}
              type="button"
              onClick={() => setSelectedYear(yr)}
              className={`p-3 text-left transition-colors cursor-pointer border rounded-xs ${
                selectedYear === yr
                  ? 'bg-brand text-white border-brand font-bold shadow-xs'
                  : 'bg-paper text-ink-muted border-rule hover:border-brand'
              }`}
            >
              <div className="font-mono text-xs font-bold">{yr}</div>
              <div className="font-editorial-serif text-xs opacity-85 mt-0.5">
                {escalationData[yr].advisors.toLocaleString()} Personnel
              </div>
            </button>
          ))}
        </div>

        {/* Selected Year Data Ledger */}
        <div className="p-6 bg-paper border border-rule rounded-xs space-y-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-rule pb-3">
            <h5 className="font-editorial-serif text-xl font-bold text-ink">
              {current.label}
            </h5>
            <span className="font-mono text-xs text-brand font-bold">
              U.S. Casualties in {selectedYear}: {current.casualties} KIA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm font-sans">
            <div>
              <span className="uppercase font-bold text-ink-soft block mb-1 text-[11px]">
                Rules of Engagement:
              </span>
              <p className="font-editorial-serif text-ink leading-relaxed">
                {current.operationalRule}
              </p>
            </div>
            <div>
              <span className="uppercase font-bold text-ink-soft block mb-1 text-[11px]">
                Strategic Milestone:
              </span>
              <p className="font-editorial-serif text-ink leading-relaxed">
                {current.milestone}
              </p>
            </div>
          </div>

          {/* Kennedy Documented Position */}
          <div className="p-4 bg-parchment border border-rule border-l-4 border-l-brand rounded-r-xs shadow-2xs">
            <span className="text-[11px] uppercase tracking-wider text-brand font-bold block mb-1">
              Documented Administration Position (Paraphrase):
            </span>
            <p className="font-editorial-serif italic text-ink leading-relaxed">
              {current.kennedyQuote}
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}
