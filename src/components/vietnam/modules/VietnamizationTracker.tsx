'use client';

import React, { useState } from 'react';

interface YearData {
  usTroops: number;
  arvnDeaths: number;
  usDeaths: number;
  bombs: string;
  event: string;
  debate: string;
}

const DATA: Record<number, YearData> = {
  1968: {
    usTroops: 536100,
    arvnDeaths: 20800,
    usDeaths: 16879,
    bombs: '1,430,000 tons',
    event: 'American troop numbers peak. After Tet, General Creighton Abrams replaces Westmoreland and shifts toward protecting villages, a plan called One War.',
    debate: 'Did Abrams’ small patrols and village security turn the war around, as Lewis Sorley argues, or was South Vietnam’s government still too weak?',
  },
  1969: {
    usTroops: 475200,
    arvnDeaths: 21800,
    usDeaths: 11780,
    bombs: '1,387,000 tons',
    event: 'Nixon announces the Nixon Doctrine and the first withdrawal of 25,000 troops. B-52s begin secretly bombing communist bases in neutral Cambodia, and the flight records are falsified.',
    debate: 'Was Vietnamization a real plan to make South Vietnam stand on its own, or a way to calm protest at home while negotiating an exit?',
  },
  1970: {
    usTroops: 334600,
    arvnDeaths: 23300,
    usDeaths: 6173,
    bombs: '1,180,000 tons',
    event: 'American and South Vietnamese troops invade Cambodia from April to June. Protests spread across campuses, and on May 4 National Guardsmen kill four students at Kent State. Congress passes the Cooper-Church Amendment.',
    debate: 'Did the invasion buy South Vietnam time to build its army, or did it throw Cambodia into chaos and help the Khmer Rouge rise?',
  },
  1971: {
    usTroops: 156800,
    arvnDeaths: 22700,
    usDeaths: 2414,
    bombs: '950,000 tons',
    event: 'In Operation Lam Son 719, South Vietnamese troops cross into Laos along Route 9 to cut the Ho Chi Minh Trail, with no American advisers. North Vietnamese tanks and artillery hit back, and the retreat turns into panic.',
    debate: 'Washington said the raid slowed enemy supplies for months. Critics, and Hanoi, said it proved South Vietnam’s army could not fight alone.',
  },
  1972: {
    usTroops: 24200,
    arvnDeaths: 39500,
    usDeaths: 759,
    bombs: '1,120,000 tons',
    event: 'In the Easter Offensive, North Vietnam invades with 14 divisions and Soviet tanks. South Vietnamese troops fight hard, backed by B-52 strikes and laser-guided bombs.',
    debate: 'Did stopping the offensive show that South Vietnam’s army had become a real fighting force, or that it could not survive without American air power?',
  },
};

const YEARS = [1968, 1969, 1970, 1971, 1972];

/** U.S. troops leaving and South Vietnamese losses rising, year by year. */
export default function VietnamizationTracker() {
  const [year, setYear] = useState(1971);
  const current = DATA[year];

  const width = 600;
  const height = 240;
  const pad = { top: 30, right: 40, bottom: 40, left: 40 };
  const x = (y: number) => pad.left + (YEARS.indexOf(y) / (YEARS.length - 1)) * (width - pad.left - pad.right);
  const yUs = (v: number) => height - pad.bottom - (v / 550000) * (height - pad.top - pad.bottom);
  const yArvn = (v: number) => height - pad.bottom - (v / 45000) * (height - pad.top - pad.bottom);
  const usPath = YEARS.map((y, i) => `${i ? 'L' : 'M'} ${x(y)} ${yUs(DATA[y].usTroops)}`).join(' ');
  const arvnPath = YEARS.map((y, i) => `${i ? 'L' : 'M'} ${x(y)} ${yArvn(DATA[y].arvnDeaths)}`).join(' ');

  return (
    <div className="space-y-8">
      <div className="max-w-[62ch]">
        <h3 className="font-display text-xl font-bold text-navy">As American troops left, South Vietnam’s losses grew</h3>
        <p className="mt-2 text-base text-ink-muted">
          From 1968 to 1972, more than 500,000 American troops came home. The fighting did not stop. South Vietnam’s army
          took it over, backed by American planes. Pick a year.
        </p>
      </div>

      <div className="rounded-sm bg-surface p-5 sm:p-8">
        <div role="tablist" aria-label="Year" className="flex flex-wrap gap-2">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              role="tab"
              aria-selected={y === year}
              onClick={() => setYear(y)}
              className={`cursor-pointer rounded-sm px-3.5 py-1.5 text-sm font-semibold tabular-nums ${
                y === year ? 'bg-brand text-white' : 'bg-parchment text-ink hover:bg-brand-tint'
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          <span className="flex items-center gap-2 text-ink-muted">
            <span className="inline-block h-0.5 w-5 bg-ink-muted" /> American troops in Vietnam
          </span>
          <span className="flex items-center gap-2 text-ink-muted">
            <span className="inline-block h-0.5 w-5 bg-brand" /> South Vietnamese soldiers killed
          </span>
        </div>

        <div className="mt-2 overflow-x-auto">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[480px] select-none" role="img" aria-label="Chart of American troop levels falling and South Vietnamese combat deaths rising from 1968 to 1972">
            {[0, 0.5, 1].map((p) => {
              const yy = pad.top + p * (height - pad.top - pad.bottom);
              return <line key={p} x1={pad.left} y1={yy} x2={width - pad.right} y2={yy} stroke="var(--color-terrain)" strokeWidth="1" />;
            })}
            {YEARS.map((y) => (
              <g key={y} className="cursor-pointer" onClick={() => setYear(y)}>
                {y === year && <line x1={x(y)} y1={pad.top} x2={x(y)} y2={height - pad.bottom} stroke="var(--color-brand-rule)" strokeWidth="2" />}
                <text x={x(y)} y={height - pad.bottom + 22} textAnchor="middle" className={`text-xs ${y === year ? 'fill-ink font-bold' : 'fill-ink-soft'}`}>
                  {y}
                </text>
              </g>
            ))}
            <path d={usPath} fill="none" stroke="var(--color-ink-muted)" strokeWidth="3" />
            <path d={arvnPath} fill="none" stroke="var(--color-brand)" strokeWidth="3" />
            {YEARS.map((y) => (
              <g key={y} className="cursor-pointer" onClick={() => setYear(y)}>
                <circle cx={x(y)} cy={yUs(DATA[y].usTroops)} r={y === year ? 6 : 4} fill="var(--color-ink-muted)" stroke="var(--color-surface)" strokeWidth="1.5" />
                <circle cx={x(y)} cy={yArvn(DATA[y].arvnDeaths)} r={y === year ? 6 : 4} fill="var(--color-brand)" stroke="var(--color-surface)" strokeWidth="1.5" />
              </g>
            ))}
          </svg>
        </div>

        <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-ink-muted">American troops in {year}</dt>
            <dd className="mt-1 font-display text-2xl font-extrabold tabular-nums text-navy">{current.usTroops.toLocaleString()}</dd>
            <dd className="text-sm text-ink-soft">{current.usDeaths.toLocaleString()} Americans killed that year</dd>
          </div>
          <div>
            <dt className="text-sm text-ink-muted">South Vietnamese soldiers killed</dt>
            <dd className="mt-1 font-display text-2xl font-extrabold tabular-nums text-brand">{current.arvnDeaths.toLocaleString()}</dd>
            <dd className="text-sm text-ink-soft">South Vietnam’s army now did the ground fighting</dd>
          </div>
          <div>
            <dt className="text-sm text-ink-muted">American bombs dropped</dt>
            <dd className="mt-1 font-display text-2xl font-extrabold tabular-nums text-navy">{current.bombs}</dd>
            <dd className="text-sm text-ink-soft">Air power stayed after the troops left</dd>
          </div>
        </dl>
      </div>

      <div aria-live="polite" className="grid gap-x-10 gap-y-6 md:grid-cols-2">
        <div>
          <h4 className="font-display text-lg font-bold text-navy">What happened in {year}</h4>
          <p className="mt-2 text-base text-ink-muted">{current.event}</p>
        </div>
        <div className="rounded-sm bg-parchment p-5">
          <h4 className="font-display text-lg font-bold text-navy">What historians argue about</h4>
          <p className="mt-2 text-base text-ink-muted">{current.debate}</p>
        </div>
      </div>
    </div>
  );
}
