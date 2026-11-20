'use client';

import React, { useState } from 'react';

type Phase = 'deadlock' | 'breakthrough' | 'christmas' | 'signing';

const PHASES: Record<Phase, { tab: string; title: string; when: string; story: string; meaning: string }> = {
  deadlock: {
    tab: 'Stuck',
    title: 'Years of stalled talks',
    when: 'August 1969 – September 1972',
    story:
      'Henry Kissinger and Le Duc Tho met in secret at a house in Sainte-Gemme, outside Paris. Two demands kept them stuck. Washington wanted every North Vietnamese soldier out of the South. Hanoi wanted South Vietnam’s President Thieu removed and replaced by a coalition government before any ceasefire.',
    meaning: 'Neither side moved, and the war went on. Between 1969 and 1972, more than 20,000 more Americans died, along with hundreds of thousands of Vietnamese.',
  },
  breakthrough: {
    tab: 'The deal',
    title: 'The secret deal of October 1972',
    when: 'October 8, 1972',
    story:
      'With the American election a few weeks away, Le Duc Tho dropped Hanoi’s demand that Thieu go. In return, Kissinger dropped Washington’s main demand: about 150,000 to 200,000 North Vietnamese troops could stay where they were inside South Vietnam.',
    meaning:
      'On October 26, less than two weeks before the election, Kissinger announced that peace was near. Letting North Vietnamese troops stay left South Vietnam exposed for the long term.',
  },
  christmas: {
    tab: 'The bombing',
    title: 'Thieu says no, and the Christmas Bombing',
    when: 'December 18–29, 1972',
    story:
      'Thieu rejected the draft. He said letting 150,000 enemy troops stay on South Vietnamese soil was a death warrant for his country. When Hanoi refused the 69 changes Thieu wanted, Nixon ordered Operation Linebacker II: 11 days of round-the-clock B-52 raids on Hanoi and Haiphong, with more than 20,000 tons of bombs.',
    meaning: 'The bombing barely changed the treaty. Its main purpose was to push Thieu into signing and to show Hanoi that Washington would strike if provoked.',
  },
  signing: {
    tab: 'Signed',
    title: 'The Accords are signed',
    when: 'January 27, 1973',
    story:
      'The final Accords were almost the same as the October draft. Nixon got Thieu to sign by secretly threatening to cut off all aid, while promising him in private letters that the United States would strike back hard if Hanoi broke the ceasefire. Those promises could not be kept. In June 1973 Congress passed the Case-Church Amendment, which banned U.S. military action in Indochina after August 15, 1973, and Watergate forced Nixon from office in August 1974.',
    meaning: 'All American combat troops left within 60 days, and 591 American prisoners of war came home. North Vietnamese divisions stayed inside South Vietnam.',
  },
};

const ORDER: Phase[] = ['deadlock', 'breakthrough', 'christmas', 'signing'];

/** The Paris talks in four steps. */
export default function ParisAccordsTimeline() {
  const [phase, setPhase] = useState<Phase>('breakthrough');
  const current = PHASES[phase];

  return (
    <div className="rounded-sm bg-surface p-5 sm:p-8">
      <div className="max-w-[62ch]">
        <h3 className="font-display text-xl font-bold text-navy">A deal that left 150,000 North Vietnamese troops in the South</h3>
        <p className="mt-2 text-base text-ink-muted">
          The United States agreed to take out every American soldier and get its prisoners back. North Vietnam got to keep
          its troops inside South Vietnam. Follow how the deal came together.
        </p>
      </div>

      <ol role="tablist" aria-label="Stages of the talks" className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {ORDER.map((key, i) => {
          const on = key === phase;
          return (
            <li key={key}>
              <button
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setPhase(key)}
                className={`w-full cursor-pointer rounded-sm px-3 py-3 text-left ${on ? 'bg-brand text-white' : 'bg-parchment text-ink hover:bg-brand-tint'}`}
              >
                <span className={`block text-xs tabular-nums ${on ? 'text-white/85' : 'text-ink-muted'}`}>Step {i + 1}</span>
                <span className="block text-sm font-semibold">{PHASES[key].tab}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div aria-live="polite" className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div>
          <p className="text-sm font-semibold tabular-nums text-brand font-mono">{current.when}</p>
          <h4 className="mt-1 font-display text-lg font-bold text-navy">{current.title}</h4>
          <p className="mt-3 font-serif text-lg leading-snug text-ink">{current.story}</p>
        </div>
        <div className="self-start rounded-sm bg-parchment p-5">
          <p className="text-sm font-semibold text-ink">What it meant</p>
          <p className="mt-1 text-base text-ink-muted">{current.meaning}</p>
        </div>
      </div>
    </div>
  );
}
