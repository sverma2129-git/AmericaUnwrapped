'use client';

import React, { useState } from 'react';

const DRAFT_PER_MONTH = 16500; // about 200,000 young men turned 18 each year in North Vietnam

const VIEWS = [
  {
    who: 'Westmoreland’s view',
    text: 'Enough firepower, from artillery to B-52 strikes, would make the war too costly for Hanoi to keep fighting.',
  },
  {
    who: 'The Pentagon analysts’ view',
    text: 'The enemy chose when and where to fight in most battles, so it could slow down whenever its losses got too high.',
  },
  {
    who: 'Le Duan’s view',
    text: 'Hanoi accepted losses of ten to one or worse, betting that American voters would tire of the war before North Vietnam ran out of soldiers.',
  },
];

/** Westmoreland’s crossover point as a model a student can push on. */
export default function AttritionModel() {
  const [claimed, setClaimed] = useState(12000);
  const [enemyStarted, setEnemyStarted] = useState(78);

  // The more fights the enemy started, the more it could break off and limit its losses.
  const lost = Math.round(claimed * (enemyStarted / 100));
  const change = DRAFT_PER_MONTH - lost;

  return (
    <div className="space-y-10">
      <div className="max-w-[62ch]">
        <h3 className="font-display text-xl font-bold text-navy">Could the U.S. kill soldiers faster than Hanoi could replace them?</h3>
        <p className="mt-2 text-base text-ink-muted">
          Westmoreland called the goal the crossover point: the month when enemy losses would outrun new recruits. Move
          the sliders to test his math.
        </p>
      </div>

      <div className="grid gap-x-10 gap-y-8 rounded-sm bg-surface p-5 sm:p-8 md:grid-cols-2">
        <div className="space-y-8">
          <label className="block">
            <span className="flex items-baseline justify-between gap-4 text-sm">
              <span className="font-semibold text-ink">Enemy deaths the U.S. command claimed each month</span>
              <span className="shrink-0 font-bold tabular-nums text-ink">{claimed.toLocaleString()}</span>
            </span>
            <input
              type="range"
              min={4000}
              max={22000}
              step={1000}
              value={claimed}
              onChange={(e) => setClaimed(Number(e.target.value))}
              className="mt-3 w-full cursor-pointer accent-brand"
            />
            <span className="mt-1 flex justify-between text-xs text-ink-soft">
              <span>4,000, early 1965</span>
              <span>12,000, 1967 average</span>
              <span>22,000, highest claim</span>
            </span>
          </label>

          <label className="block">
            <span className="flex items-baseline justify-between gap-4 text-sm">
              <span className="font-semibold text-ink">Share of firefights the enemy started</span>
              <span className="shrink-0 font-bold tabular-nums text-ink">{enemyStarted}%</span>
            </span>
            <input
              type="range"
              min={50}
              max={90}
              step={2}
              value={enemyStarted}
              onChange={(e) => setEnemyStarted(Number(e.target.value))}
              className="mt-3 w-full cursor-pointer accent-brand"
            />
            <span className="mt-1 flex justify-between text-xs text-ink-soft">
              <span>50%</span>
              <span>78%, Pentagon study</span>
              <span>90%</span>
            </span>
            <span className="mt-3 block text-sm text-ink-muted">
              Pentagon analysts under Alain Enthoven found that communist forces started more than 75% of firefights. They
              could break off and limit their losses whenever they chose.
            </span>
          </label>

          <p className="text-sm text-ink-muted">
            Young men turning 18 in North Vietnam each year: about 200,000, or 16,500 a month.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <p className="flex justify-between text-sm">
              <span className="text-ink-muted">New soldiers each month</span>
              <span className="font-bold tabular-nums text-ink">{DRAFT_PER_MONTH.toLocaleString()}</span>
            </p>
            <div className="mt-1.5 h-5 overflow-hidden rounded-sm bg-parchment">
              <div className="h-full bg-ink-muted" style={{ width: `${(DRAFT_PER_MONTH / 22000) * 100}%` }} />
            </div>
          </div>
          <div>
            <p className="flex justify-between text-sm">
              <span className="text-ink-muted">Soldiers lost each month</span>
              <span className="font-bold tabular-nums text-brand font-mono">{lost.toLocaleString()}</span>
            </p>
            <div className="mt-1.5 h-5 overflow-hidden rounded-sm bg-parchment">
              <div className="h-full bg-brand transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${Math.min(100, (lost / 22000) * 100)}%` }} />
            </div>
          </div>

          <div aria-live="polite" className={`rounded-sm p-5 ${change > 0 ? 'bg-parchment' : 'bg-success-tint'}`}>
            <p className="font-display text-xl font-bold text-navy">
              {change > 0
                ? `Hanoi’s army grows by ${change.toLocaleString()} a month`
                : `Hanoi’s army shrinks by ${Math.abs(change).toLocaleString()} a month`}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {change > 0
                ? 'At these numbers, Hanoi replaces its losses and then some. The crossover point never comes.'
                : 'At these numbers, losses outrun new recruits. This is the crossover point Westmoreland was counting on.'}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-display text-lg font-bold text-navy">Three ways to read the numbers</h4>
        <ul className="mt-4 grid gap-x-10 gap-y-6 md:grid-cols-3">
          {VIEWS.map((v) => (
            <li key={v.who}>
              <p className="font-semibold text-ink">{v.who}</p>
              <p className="mt-1 text-base text-ink-muted">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
