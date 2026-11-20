'use client';

import React, { useState } from 'react';

interface Step {
  date: string;
  place: string;
  title: string;
  x: number;
  y: number;
  story: string;
  supplies: string;
  meaning: string;
}

const STEPS: Step[] = [
  {
    date: 'March 10–12, 1975',
    place: 'Ban Me Thuot',
    title: 'North Vietnam breaks through at Ban Me Thuot',
    x: 310,
    y: 260,
    story:
      'General Van Tien Dung faked an attack toward Pleiku and Kontum, then massed three divisions against Ban Me Thuot. Soviet-supplied tanks and heavy artillery broke through in 36 hours and cut South Vietnam in two.',
    supplies: 'After the aid cuts, South Vietnamese gunners were limited to three shells a day per gun, and helicopters sat grounded for lack of spare parts.',
    meaning: 'The attack showed how short of supplies South Vietnam’s army had become, and it cut the links between its northern and southern commands.',
  },
  {
    date: 'March 14–24, 1975',
    place: 'Route 7B',
    title: 'Thieu’s retreat and the Column of Tears',
    x: 340,
    y: 280,
    story:
      'At a secret meeting at Cam Ranh, Thieu ordered General Pham Van Phu to pull the whole II Corps out of the highlands to the coast, without telling civilian officials. The retreat down Route 7B, an unpaved road with broken bridges, fell apart. North Vietnamese artillery shelled 200,000 soldiers and 400,000 civilian refugees crowded onto the road.',
    supplies: 'Many soldiers left their units to get their families out, and the army came apart without fighting a major battle.',
    meaning: 'II Corps collapsed, and South Vietnam lost the Central Highlands.',
  },
  {
    date: 'March 25–30, 1975',
    place: 'Hue and Da Nang',
    title: 'The northern front falls apart',
    x: 260,
    y: 120,
    story:
      'Troops in the north were told to hold Hue, then suddenly ordered to fall back to Da Nang. In Da Nang, South Vietnam’s second-largest city, 100,000 soldiers broke into panic among 300,000 refugees. The city fell on March 30 without a major battle.',
    supplies: 'Billions of dollars of American equipment, including F-5 jets, howitzers, tanks and trucks, was captured intact on airfields and docks.',
    meaning: 'Hanoi’s commanders saw that South Vietnam’s army was not retreating in order. It was coming apart.',
  },
  {
    date: 'April 9–21, 1975',
    place: 'Xuan Loc',
    title: 'The last stand at Xuan Loc',
    x: 320,
    y: 375,
    story:
      'About 40 miles from Saigon, the ARVN 18th Division under Brigadier General Le Minh Dao held off North Vietnam’s 4th Army Corps for two weeks. It beat back attack after attack under heavy shelling, then pulled out in good order when it was outflanked.',
    supplies: 'South Vietnam’s air force dropped a 15,000-pound bomb, the BLU-82, on North Vietnamese troops near Xuan Loc, one of its last attempts to stop the advance.',
    meaning: 'Where leaders and ammunition held, South Vietnamese soldiers fought hard. Xuan Loc was the last major stand of the war.',
  },
  {
    date: 'April 26–30, 1975',
    place: 'Saigon',
    title: 'Saigon falls',
    x: 300,
    y: 395,
    story:
      'Sixteen North Vietnamese divisions closed in on Saigon in the final push, the Ho Chi Minh Campaign. Operation Frequent Wind flew about 1,000 Americans and 7,000 South Vietnamese out by helicopter to Navy ships. At 11:30 a.m. on April 30, Tank 843 crashed through the gates of the Presidential Palace, and General Duong Van Minh surrendered.',
    supplies: 'Congress had turned down President Ford’s request for $722 million in emergency military aid. Everyone knew the Americans were not coming back.',
    meaning: 'Thirty years of war ended with South Vietnam gone and the country reunited under Hanoi.',
  },
];

const CITIES = [
  { name: 'Hue', x: 260, y: 100, step: 2 },
  { name: 'Da Nang', x: 290, y: 130, step: 2 },
  { name: 'Ban Me Thuot', x: 310, y: 260, step: 0 },
  { name: 'Tuy Hoa', x: 360, y: 300, step: 1 },
  { name: 'Xuan Loc', x: 320, y: 375, step: 3 },
  { name: 'Saigon', x: 300, y: 395, step: 4 },
];

/** The 55 days of 1975, step by step on a map. */
export default function CollapseOffensiveMap() {
  const [step, setStep] = useState(0);
  const current = STEPS[step];

  return (
    <div className="rounded-sm bg-surface p-5 sm:p-8">
      <ol role="tablist" aria-label="Steps of the collapse" className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {STEPS.map((s, i) => (
          <li key={s.title}>
            <button
              type="button"
              role="tab"
              aria-selected={i === step}
              onClick={() => setStep(i)}
              className={`w-full cursor-pointer rounded-sm px-3 py-2.5 text-left ${i === step ? 'bg-brand text-white' : 'bg-parchment text-ink hover:bg-brand-tint'}`}
            >
              <span className={`block text-xs tabular-nums ${i === step ? 'text-white/85' : 'text-ink-muted'}`}>{s.date.split(',')[0]}</span>
              <span className="block text-sm font-semibold">{s.place}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-x-10 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="overflow-hidden rounded-sm bg-terrain/40">
          <svg viewBox="180 50 250 460" className="h-auto w-full select-none" role="img" aria-label="Map of South Vietnam showing the North Vietnamese advance in 1975">
            <path
              d="M 230,70 L 260,100 L 290,130 L 330,180 L 360,230 L 400,300 L 390,340 L 360,380 L 330,410 L 270,450 L 230,480 L 220,450 L 250,420 L 250,380 L 280,340 L 270,250 L 230,160 L 200,90 Z"
              fill="var(--color-terrain)"
              stroke="var(--color-rule-strong)"
              strokeWidth="1.5"
            />
            <path d="M 230,70 Q 280,120 330,180 T 390,300 T 360,380 T 300,395" fill="none" stroke="var(--color-rule-strong)" strokeWidth="2" strokeDasharray="3,3" />
            <text x="368" y="240" className="fill-ink-soft text-[8px]">Route 1</text>
            <path d="M 270,160 Q 300,210 310,260 T 300,395" fill="none" stroke="var(--color-rule-strong)" strokeWidth="1.5" strokeDasharray="2,2" />
            <text x="276" y="205" className="fill-ink-soft text-[8px]">Route 14</text>
            <path d="M 310,260 L 360,300" fill="none" stroke="var(--color-brand)" strokeWidth="2" strokeDasharray="2,2" />
            <text x="324" y="276" className="fill-brand-hover text-[8px] font-bold">Route 7B</text>

            {step >= 1 && <line x1="310" y1="260" x2="350" y2="295" stroke="var(--color-brand-hover)" strokeWidth="3" />}
            {step >= 2 && <path d="M 230,70 L 260,100 L 290,130" fill="none" stroke="var(--color-brand-hover)" strokeWidth="4" />}
            {step >= 3 && <path d="M 290,130 L 330,180 L 390,300" fill="none" stroke="var(--color-brand-hover)" strokeWidth="4" />}
            {step >= 4 && <circle cx="300" cy="395" r="28" fill="none" stroke="var(--color-brand-hover)" strokeWidth="2" strokeDasharray="3,3" />}

            {CITIES.map((c) => {
              const on = current.x === c.x && current.y === c.y;
              return (
                <g key={c.name} className="cursor-pointer" onClick={() => setStep(c.step)}>
                  <circle cx={c.x} cy={c.y} r={on ? 7 : 4} fill={on ? 'var(--color-brand-hover)' : 'var(--color-ink-muted)'} stroke="var(--color-surface)" strokeWidth="1.5" />
                  <text x={c.x + 8} y={c.y + 3} className={`text-[9px] font-bold ${on ? 'fill-brand-hover' : 'fill-ink'}`}>
                    {c.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div aria-live="polite">
          <p className="text-sm font-semibold tabular-nums text-brand font-mono">
            Step {step + 1} of {STEPS.length}, {current.date}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold text-navy">{current.title}</h3>
          <p className="mt-3 font-serif text-lg leading-snug text-ink">{current.story}</p>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-sm font-semibold text-ink">Supplies and aid</dt>
              <dd className="mt-1 text-base text-ink-muted">{current.supplies}</dd>
            </div>
            <div className="rounded-sm bg-parchment p-5">
              <dt className="text-sm font-semibold text-ink">Why it mattered</dt>
              <dd className="mt-1 text-base text-ink-muted">{current.meaning}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
