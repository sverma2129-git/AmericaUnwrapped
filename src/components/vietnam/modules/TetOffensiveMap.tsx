'use client';

import React, { useState } from 'react';

type PlaceId = 'saigon' | 'hue' | 'khesanh' | 'highlands' | 'coastal' | 'delta';

interface Place {
  id: PlaceId;
  name: string;
  short: string;
  x: number;
  y: number;
  summary: string;
  fighting: string;
  hanoi: string;
  washington: string;
}

const PLACES: Place[] = [
  {
    id: 'saigon',
    name: 'Saigon and the U.S. Embassy',
    short: 'Saigon',
    x: 310,
    y: 390,
    summary: 'Fighting inside the American embassy grounds, on morning television.',
    fighting:
      'At 2:47 a.m. on January 31, 19 Viet Cong commandos blew a hole in the embassy’s outer wall with explosives. Other squads hit the Presidential Palace, the national radio station and Tan Son Nhut Air Base. Within six hours every commando at the embassy had been killed or captured.',
    hanoi: 'The attackers took none of the key government buildings, the city did not rise up, and Hanoi lost some of its best-trained fighters.',
    washington:
      'Television showed wounded Americans and dead attackers on the embassy grounds. Westmoreland had just said victory was in sight.',
  },
  {
    id: 'hue',
    name: 'Hue, the old imperial capital',
    short: 'Hue',
    x: 260,
    y: 110,
    summary: 'The longest and bloodiest battle of Tet: 26 days of house-to-house fighting.',
    fighting:
      'Two North Vietnamese regiments took the walled Citadel in the morning fog and raised the NLF flag. U.S. Marines and South Vietnamese troops needed nearly a month to retake the city, and more than 80% of Hue was left in ruins.',
    hanoi:
      'About 5,000 North Vietnamese and Viet Cong soldiers died. While they held the city, communist officials executed an estimated 2,800 to 3,000 government workers, teachers and others they saw as enemies.',
    washington: 'Communist troops had taken South Vietnam’s third-largest city and held it for almost a month.',
  },
  {
    id: 'khesanh',
    name: 'Khe Sanh Combat Base',
    short: 'Khe Sanh',
    x: 220,
    y: 80,
    summary: 'A 77-day siege that kept American commanders looking the wrong way.',
    fighting:
      'Starting January 21, two North Vietnamese divisions surrounded 6,000 Marines at a mountain base near Laos. Johnson kept a model of the base in the White House basement, determined not to suffer an American Dien Bien Phu.',
    hanoi: 'The siege pulled huge amounts of American air power, more than 100,000 tons of bombs, away from the cities on the coast.',
    washington: 'The Marines held, and the siege was lifted in April. Two months later the military quietly abandoned the base, and Americans asked what it had been for.',
  },
  {
    id: 'highlands',
    name: 'The Central Highlands',
    short: 'Highlands',
    x: 320,
    y: 230,
    summary: 'Attacks on Pleiku, Kontum and Ban Me Thuot at the same time.',
    fighting: 'Mortar fire and ground attacks hit South Vietnamese army headquarters and airfields in the highland towns.',
    hanoi: 'The attackers did real damage but were pushed out of the towns within three days.',
    washington: 'The attacks showed how well the enemy could move men and supplies through Laos and Cambodia without being caught.',
  },
  {
    id: 'coastal',
    name: 'Da Nang, Qui Nhon and Nha Trang',
    short: 'Coast',
    x: 370,
    y: 280,
    summary: 'Attacks on the big supply ports and air bases along the coast.',
    fighting: 'Rockets and ground attacks struck the Da Nang air base, the port at Qui Nhon and supply depots at Nha Trang.',
    hanoi: 'Guerrilla units caught in the open lost many men to American helicopter gunships.',
    washington: 'Even the heavily guarded supply bases behind the lines were not safe.',
  },
  {
    id: 'delta',
    name: 'The Mekong Delta',
    short: 'Delta',
    x: 270,
    y: 440,
    summary: 'Fighting in South Vietnam’s most crowded farm region.',
    fighting:
      'Viet Cong battalions struck 13 of the 16 provincial capitals in the Delta. In Ben Tre, an American officer told Associated Press reporter Peter Arnett that the town had to be destroyed to save it.',
    hanoi: 'The Viet Cong in the Delta lost experienced local leaders and fighters it could not replace.',
    washington: 'The destruction of Ben Tre and other towns made many Americans question how the war was being fought.',
  },
];

const OTHER_TOWNS = [
  { x: 240, y: 95 }, { x: 295, y: 145 }, { x: 310, y: 165 }, { x: 330, y: 190 }, { x: 390, y: 310 },
  { x: 380, y: 340 }, { x: 360, y: 375 }, { x: 325, y: 380 }, { x: 280, y: 425 }, { x: 230, y: 420 },
  { x: 235, y: 450 }, { x: 285, y: 465 }, { x: 250, y: 485 },
];

/** Where the Tet attacks hit, and what each one cost each side. */
export default function TetOffensiveMap() {
  const [selected, setSelected] = useState<PlaceId>('saigon');
  const [showAll, setShowAll] = useState(true);
  const current = PLACES.find((p) => p.id === selected)!;

  return (
    <div className="space-y-8">
      <div className="grid gap-x-10 gap-y-6 rounded-sm bg-surface p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
        <div>
          <div className="overflow-hidden rounded-sm bg-terrain/40">
            <svg viewBox="180 50 250 460" className="h-auto w-full select-none" role="img" aria-label="Map of South Vietnam showing where the Tet attacks hit">
              <path
                d="M 230,70 L 260,100 L 290,130 L 330,180 L 360,230 L 400,300 L 390,340 L 360,380 L 330,410 L 270,450 L 230,480 L 220,450 L 250,420 L 250,380 L 280,340 L 270,250 L 230,160 L 200,90 Z"
                fill="var(--color-terrain)"
                stroke="var(--color-rule-strong)"
                strokeWidth="1.5"
              />
              <line x1="180" y1="70" x2="260" y2="70" stroke="var(--color-brand)" strokeWidth="2" strokeDasharray="4,2" />
              <text x="185" y="65" className="fill-brand text-[8px] font-bold">17th parallel</text>
              <text x="195" y="140" className="fill-ink-soft text-[10px]">Laos</text>
              <text x="210" y="320" className="fill-ink-soft text-[10px]">Cambodia</text>
              <text x="350" y="110" className="fill-ink-soft text-[10px]">South China Sea</text>

              {showAll && OTHER_TOWNS.map((t, i) => <circle key={i} cx={t.x} cy={t.y} r="3" fill="var(--color-brand)" fillOpacity="0.55" />)}

              {PLACES.map((p) => {
                const on = p.id === selected;
                return (
                  <g key={p.id} className="cursor-pointer" onClick={() => setSelected(p.id)}>
                    {on && <circle cx={p.x} cy={p.y} r="11" fill="none" stroke="var(--color-brand-hover)" strokeWidth="1.5" />}
                    <circle cx={p.x} cy={p.y} r={on ? 6 : 5} fill={on ? 'var(--color-brand-hover)' : 'var(--color-brand)'} stroke="var(--color-surface)" strokeWidth="1.5" />
                    <text x={p.x + 9} y={p.y + 3} className={`text-[9px] font-bold ${on ? 'fill-brand-hover' : 'fill-ink'}`}>
                      {p.short}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm text-ink-muted">
            <input type="checkbox" checked={showAll} onChange={(e) => setShowAll(e.target.checked)} className="accent-brand" />
            Show the other towns attacked the same night
          </label>
        </div>

        <div>
          <div role="tablist" aria-label="Places attacked" className="flex flex-wrap gap-2">
            {PLACES.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={p.id === selected}
                onClick={() => setSelected(p.id)}
                className={`cursor-pointer rounded-sm px-3 py-1.5 text-sm font-semibold ${
                  p.id === selected ? 'bg-brand text-white' : 'bg-parchment text-ink hover:bg-brand-tint'
                }`}
              >
                {p.short}
              </button>
            ))}
          </div>

          <div aria-live="polite" className="mt-6">
            <h3 className="font-display text-xl font-bold text-navy">{current.name}</h3>
            <p className="mt-1 text-base text-ink-muted">{current.summary}</p>
            <p className="mt-4 font-serif text-lg leading-snug text-ink">{current.fighting}</p>
            <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-ink">What it cost Hanoi</dt>
                <dd className="mt-1 text-base text-ink-muted">{current.hanoi}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink">What it did to Washington</dt>
                <dd className="mt-1 text-base text-ink-muted">{current.washington}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="max-w-[66ch]">
        <h4 className="font-display text-lg font-bold text-navy">Why Tet is a puzzle</h4>
        <p className="mt-2 text-base text-ink-muted">
          On the battlefield, Tet was a disaster for the communist side. About 40,000 Viet Cong fighters were killed, and
          the uprising Hanoi expected never came. At home in the United States, the attacks on dozens of cities at once
          wrecked the story that the war was being won. Within two months, Walter Cronkite had called the war a stalemate,
          Westmoreland was on his way out of Vietnam, and Johnson had decided not to run again.
        </p>
      </div>
    </div>
  );
}
