'use client';

import React, { useState } from 'react';

export default function AttritionModel() {
  const [usKillRate, setUsKillRate] = useState<number>(12000); // monthly enemy KIA claimed by MACV
  const [hanoiDraftFlow] = useState<number>(16500); // ~200k/year divided by 12 months = 16,666/mo
  const [combatInitiationRate, setCombatInitiationRate] = useState<number>(78); // % of firefights initiated by communist forces

  // Effective losses accounting for combat initiation & contact breaking
  const effectiveLosses = Math.round(usKillRate * (combatInitiationRate / 100));
  const netMonthlyChange = hanoiDraftFlow - effectiveLosses;

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 gap-2 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Systems Analysis &bull; Operational Model
          </span>
          <span className="text-stone-500 ml-2">&bull; MACV Attrition &amp; The Crossover Point (1965–1967)</span>
        </div>
        <span className="text-stone-500 uppercase tracking-widest text-[11px]">
          Interactive Parameter Exploration
        </span>
      </div>

      <div>
        <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
          The Strategy of Attrition &amp; The Crossover Point Model
        </h4>
        <p className="mt-2 font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
          General William Westmoreland defined American military victory through reaching the &ldquo;crossover point&rdquo;: the threshold at which allied firepower would kill or incapacitate enemy soldiers faster than North Vietnam and the Viet Cong could replenish them. Adjust the operational parameters below to examine the demographic and tactical assumptions that governed the debate.
        </p>
      </div>

      {/* Sliders & Visual Reservoir Chart */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Sliders Control Panel */}
        <div className="md:col-span-6 space-y-6 bg-white dark:bg-[#121110] p-5 border border-stone-200 dark:border-stone-800 rounded-xs">
          <div>
            <div className="flex justify-between text-xs font-archival-mono mb-2">
              <span className="text-stone-700 dark:text-stone-300 font-bold uppercase tracking-wider">
                Claimed Monthly Enemy Losses (MACV):
              </span>
              <span className="font-bold text-stone-900 dark:text-stone-100">
                {usKillRate.toLocaleString()} / mo
              </span>
            </div>
            <input
              type="range"
              min={4000}
              max={22000}
              step={1000}
              value={usKillRate}
              onChange={(e) => setUsKillRate(Number(e.target.value))}
              className="w-full accent-stone-900 dark:accent-stone-100 cursor-pointer"
              aria-label="Claimed monthly enemy losses"
            />
            <div className="flex justify-between text-[10px] font-archival-mono text-stone-500 mt-1">
              <span>4,000 (Early 1965)</span>
              <span>12,000 (MACV 1967 Avg)</span>
              <span>22,000 (Peak Claim)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-archival-mono mb-2">
              <span className="text-stone-700 dark:text-stone-300 font-bold uppercase tracking-wider">
                Enemy Firefight Initiation Rate:
              </span>
              <span className="font-bold text-stone-900 dark:text-stone-100">
                {combatInitiationRate}%
              </span>
            </div>
            <input
              type="range"
              min={50}
              max={90}
              step={2}
              value={combatInitiationRate}
              onChange={(e) => setCombatInitiationRate(Number(e.target.value))}
              className="w-full accent-stone-900 dark:accent-stone-100 cursor-pointer"
              aria-label="Enemy firefight initiation rate"
            />
            <div className="flex justify-between text-[10px] font-archival-mono text-stone-500 mt-1">
              <span>50% (Open warfare)</span>
              <span>78% (Pentagon Systems Study)</span>
              <span>90% (Strict guerrilla avoidance)</span>
            </div>
            <p className="mt-2 font-editorial-serif text-xs text-stone-500 dark:text-stone-400">
              Department of Defense Systems Analysis under Alain Enthoven found that communist forces initiated over 75% of firefights, allowing them to disengage and regulate casualty rates when losses mounted.
            </p>
          </div>

          <div className="pt-4 border-t border-stone-100 dark:border-stone-800 text-xs font-archival-mono text-stone-600 dark:text-stone-400">
            <div>Baseline Northern Draft Cohort: <strong>~200,000/yr (16,500/mo)</strong></div>
            <div className="text-[11px] text-stone-500 mt-0.5">Demographic pool reaching age 18 annually in North Vietnam.</div>
          </div>
        </div>

        {/* Visual Reservoir Graphic & Calculation Feedback */}
        <div className="md:col-span-6 space-y-4">
          <div className="p-5 bg-white dark:bg-[#121110] border border-stone-200 dark:border-stone-800 rounded-xs space-y-4">
            <span className="font-archival-mono text-[10px] uppercase tracking-widest text-stone-500 block">
              Manpower Replacement Ledger
            </span>

            {/* Visual Bar Comparison */}
            <div className="space-y-3 pt-2">
              <div>
                <div className="flex justify-between text-xs font-archival-mono mb-1">
                  <span className="text-stone-600 dark:text-stone-400">Hanoi Monthly Inflow:</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">16,500 cadres</span>
                </div>
                <div className="h-6 w-full bg-stone-200 dark:bg-stone-800 rounded-xs overflow-hidden">
                  <div className="h-full bg-stone-700 dark:bg-stone-400" style={{ width: '75%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-archival-mono mb-1">
                  <span className="text-stone-600 dark:text-stone-400">Effective Combat Losses:</span>
                  <span className="font-bold text-red-700 dark:text-red-400">{effectiveLosses.toLocaleString()} / mo</span>
                </div>
                <div className="h-6 w-full bg-stone-200 dark:bg-stone-800 rounded-xs overflow-hidden">
                  <div
                    className="h-full bg-red-700 dark:bg-red-500 transition-all duration-300"
                    style={{ width: `${Math.min(100, (effectiveLosses / 22000) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Resulting Balance Card */}
            <div className={`p-4 border rounded-xs transition-colors shadow-xs ${
              netMonthlyChange > 0
                ? 'bg-parchment border-rule'
                : 'bg-emerald-50 border-emerald-300'
            }`}>
              <div className="text-[10px] uppercase font-bold tracking-wider text-ink-soft">
                Net Monthly Manpower Trajectory:
              </div>
              <div className="font-editorial-serif text-2xl font-bold mt-1 text-ink">
                {netMonthlyChange > 0 ? `+${netMonthlyChange.toLocaleString()} cadres / mo` : `${netMonthlyChange.toLocaleString()} cadres / mo`}
              </div>
              <p className="font-editorial-serif text-xs text-ink-muted mt-1">
                {netMonthlyChange > 0
                  ? 'At these parameters, draft replenishment exceeds effective combat attrition. Communist force strength continues to expand or stabilize.'
                  : 'At these parameters, attrition exceeds the annual biological replenishment rate, creating a net deficit in regular cadre formations.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tripartite Historiographical Ledger */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 bg-stone-50 dark:bg-[#181614] border border-stone-200 dark:border-stone-800 rounded-xs text-xs">
          <span className="font-archival-mono font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
            1. MACV Attrition Logic (Westmoreland)
          </span>
          <p className="font-editorial-serif text-stone-700 dark:text-stone-300 leading-relaxed text-sm">
            Commanders argued that massive firepower (artillery, B-52 Arc Light strikes, helicopter gunships) would inflict unendurable human costs, eventually forcing Hanoi to calculate that continued military struggle was futile.
          </p>
        </div>

        <div className="p-4 bg-stone-50 dark:bg-[#181614] border border-stone-200 dark:border-stone-800 rounded-xs text-xs">
          <span className="font-archival-mono font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
            2. Pentagon Systems Analysis (Enthoven)
          </span>
          <p className="font-editorial-serif text-stone-700 dark:text-stone-300 leading-relaxed text-sm">
            Civilian analysts in the Defense Department calculated that because the enemy chose when and where to fight in ~78% of contacts, communist commanders could simply throttle back operations to maintain their forces indefinitely.
          </p>
        </div>

        <div className="p-4 bg-stone-50 dark:bg-[#181614] border border-stone-200 dark:border-stone-800 rounded-xs text-xs">
          <span className="font-archival-mono font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
            3. Hanoi’s Strategic Calculation (Le Duan)
          </span>
          <p className="font-editorial-serif text-stone-700 dark:text-stone-300 leading-relaxed text-sm">
            Operating under revolutionary war doctrine (*Chien tranh nhan dan*), Hanoi accepted casualty ratios exceeding 10-to-1, calculating that American democratic public opinion would exhaust its willingness to sustain casualties long before North Vietnam ran out of soldiers.
          </p>
        </div>
      </div>
    </div>
  );
}
