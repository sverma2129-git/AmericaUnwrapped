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
      kennedyQuote: 'We must face the fact that the United States is neither omnipotent nor omniscient... but we shall pay any price, bear any burden.',
    },
    1961: {
      advisors: 3205,
      casualties: 16,
      label: 'The Flexible Response Shift (NSAM 111)',
      operationalRule: 'Advisors permitted to accompany battalion-level units; first U.S. Army helicopter companies deployed.',
      milestone: 'Kennedy rejects conventional ground combat divisions but authorizes Green Berets and Special Forces.',
      kennedyQuote: 'The troops will march in, the crowds will cheer and in four days everyone will have forgotten. Then we will be told we have to send in more troops.',
    },
    1962: {
      advisors: 11325,
      casualties: 53,
      label: 'Creation of MACV & Strategic Hamlets',
      operationalRule: 'U.S. helicopter pilots actively engage enemy targets; Operation Ranch Hand begins defoliation spraying.',
      milestone: 'Over 8,000 "Strategic Hamlets" constructed to sever peasants from Viet Cong guerrillas, stirring rural resentment.',
      kennedyQuote: 'Now we have a problem in making our power credible, and Vietnam looks like the place.',
    },
    1963: {
      advisors: 16300,
      casualties: 122,
      label: 'The Buddhist Crisis & The Coup',
      operationalRule: 'Advisors routinely involved in active combat firefights; rules of engagement loosen dramatically.',
      milestone: 'Battle of Ap Bac routs ARVN; Buddhist self-immolations; Cable 243 leads to the violent overthrow of Diem.',
      kennedyQuote: 'In the final analysis, it is their war. They are the ones who have to win it or lose it.',
    },
  };

  const current = escalationData[selectedYear];

  return (
    <figure className="my-10 border border-stone-300 dark:border-stone-800 bg-[#f9f7f2] dark:bg-[#161514]">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/60 flex flex-wrap items-center justify-between gap-2 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Escalation Ledger
          </span>
          <span className="text-stone-500 ml-2">&bull; The Advisory Commitment (1960–1963)</span>
        </div>
        <span className="text-stone-500 uppercase tracking-widest text-[11px]">
          Select Year
        </span>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 block">
            Incremental Expansion
          </span>
          <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
            How 875 Military Advisers Became 16,300 Combatants
          </h4>
          <p className="mt-2 font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            President Kennedy consistently refused to commit conventional American ground combat divisions, yet sought to prevent communist victory through incremental increases in military advisers, helicopters, and covert special operations.
          </p>
        </div>

        {/* Year Buttons */}
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-stone-200 dark:border-stone-800">
          {[1960, 1961, 1962, 1963].map((yr) => (
            <button
              key={yr}
              type="button"
              onClick={() => setSelectedYear(yr)}
              className={`p-3 text-left transition-colors cursor-pointer border ${
                selectedYear === yr
                  ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                  : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
              }`}
            >
              <div className="font-archival-mono text-xs font-bold">{yr}</div>
              <div className="font-editorial-serif text-xs opacity-75 mt-0.5">
                {escalationData[yr].advisors.toLocaleString()} Personnel
              </div>
            </button>
          ))}
        </div>

        {/* Selected Year Data Ledger */}
        <div className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
            <h5 className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              {current.label}
            </h5>
            <span className="font-archival-mono text-xs text-stone-500">
              U.S. Casualties in {selectedYear}: {current.casualties} KIA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm font-sans">
            <div>
              <span className="font-archival-mono uppercase font-bold text-stone-500 block mb-1">
                Rules of Engagement:
              </span>
              <p className="font-editorial-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                {current.operationalRule}
              </p>
            </div>
            <div>
              <span className="font-archival-mono uppercase font-bold text-stone-500 block mb-1">
                Strategic Milestone:
              </span>
              <p className="font-editorial-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                {current.milestone}
              </p>
            </div>
          </div>

          {/* Kennedy Quote */}
          <div className="p-4 bg-[#f2ede4] dark:bg-[#1a1816] border border-stone-300 dark:border-stone-800 border-l-2 border-l-stone-900 dark:border-l-stone-100">
            <span className="font-archival-mono text-[11px] uppercase tracking-wider text-stone-500 block mb-1">
              Contemporaneous Kennedy Remark:
            </span>
            <p className="font-editorial-serif italic text-stone-900 dark:text-stone-100 leading-relaxed">
              &ldquo;{current.kennedyQuote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}
