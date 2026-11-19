'use client';

import React, { useState } from 'react';

interface YearData {
  year: number;
  usTroops: number;
  arvnDeaths: number;
  usDeaths: number;
  bombTonnage: string;
  milestone: string;
  contestedDebate: string;
}

const TRACKER_DATA: Record<number, YearData> = {
  1968: {
    year: 1968,
    usTroops: 536100,
    arvnDeaths: 20800,
    usDeaths: 16879,
    bombTonnage: '1,430,000 tons',
    milestone: 'Peak U.S. ground deployment. Following the Tet Offensive, General Creighton Abrams replaces General Westmoreland and institutes the "One War" population-security doctrine.',
    contestedDebate: 'Did Abrams’ shift to small-unit patrolling and pacification fundamentally turn the war around (Lewis Sorley thesis), or was the South Vietnamese government still structurally fragile?',
  },
  1969: {
    year: 1969,
    usTroops: 475200,
    arvnDeaths: 21800,
    usDeaths: 11780,
    bombTonnage: '1,387,000 tons',
    milestone: 'President Nixon announces the "Nixon Doctrine" and the initial withdrawal of 25,000 U.S. troops. Operation Menu begins secret B-52 carpet bombing of communist sanctuaries inside neutral Cambodia with falsified flight logs.',
    contestedDebate: 'Was Vietnamization designed as a genuine strategy to achieve South Vietnamese self-sufficiency, or primarily as a political mechanism to manage domestic dissent while negotiating an exit?',
  },
  1970: {
    year: 1970,
    usTroops: 334600,
    arvnDeaths: 23300,
    usDeaths: 6173,
    bombTonnage: '1,180,000 tons',
    milestone: 'Joint U.S.-ARVN Cambodian Incursion (April–June) to destroy North Vietnamese logistical base areas. Sparked nationwide campus protests; 4 students shot dead at Kent State (May 4). Congress passes the Cooper-Church Amendment prohibiting ground troops in Cambodia.',
    contestedDebate: 'Did the Cambodian incursion buy precious time for South Vietnamese military buildup, or did it destabilize neutral Cambodia and pave the way for the rise of the Khmer Rouge?',
  },
  1971: {
    year: 1971,
    usTroops: 156800,
    arvnDeaths: 22700,
    usDeaths: 2414,
    bombTonnage: '950,000 tons',
    milestone: 'Operation Lam Son 719: ARVN forces invade Laos along Route 9 to sever the Ho Chi Minh Trail without accompanying U.S. ground advisors. Met by massed North Vietnamese armor and heavy artillery, the retreat degenerates into panic.',
    contestedDebate: 'Washington claimed Lam Son 719 disrupted enemy supply lines for months; critics and Hanoi cited it as proof that ARVN could not stand alone against North Vietnamese regulars without direct U.S. air and logistical backing.',
  },
  1972: {
    year: 1972,
    usTroops: 24200,
    arvnDeaths: 39500,
    usDeaths: 759,
    bombTonnage: '1,120,000 tons',
    milestone: 'The Easter Offensive: North Vietnam launches a massive conventional 14-division assault with Soviet T-54 tanks. ARVN ground forces mount fierce resistance, heavily supported by Operation Linebacker B-52 strikes and laser-guided munitions.',
    contestedDebate: 'Did the blunting of the 1972 offensive prove ARVN had become an effective fighting force, or did it demonstrate that South Vietnam remained entirely dependent on massive American airpower to survive?',
  },
};

const YEARS = [1968, 1969, 1970, 1971, 1972];

export default function VietnamizationTracker() {
  const [selectedYear, setSelectedYear] = useState<number>(1971);

  const current = TRACKER_DATA[selectedYear];

  // SVG Chart Dimensions
  const width = 600;
  const height = 240;
  const padding = { top: 30, right: 40, bottom: 40, left: 60 };

  const getX = (year: number) => {
    const idx = YEARS.indexOf(year);
    return padding.left + (idx / (YEARS.length - 1)) * (width - padding.left - padding.right);
  };

  // Scales for US troops (0 to 550k)
  const getYUsTroops = (val: number) => {
    return height - padding.bottom - (val / 550000) * (height - padding.top - padding.bottom);
  };

  // Scales for ARVN KIA (0 to 45k) mapped across height
  const getYArvnKia = (val: number) => {
    return height - padding.bottom - (val / 45000) * (height - padding.top - padding.bottom);
  };

  // Construct SVG paths
  const usTroopsPath = YEARS.map((y, i) => `${i === 0 ? 'M' : 'L'} ${getX(y)} ${getYUsTroops(TRACKER_DATA[y].usTroops)}`).join(' ');
  const arvnKiaPath = YEARS.map((y, i) => `${i === 0 ? 'M' : 'L'} ${getX(y)} ${getYArvnKia(TRACKER_DATA[y].arvnDeaths)}`).join(' ');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-rule gap-2 text-xs">
        <div>
          <span className="font-bold text-ink">
            1968 to 1972
          </span>
        </div>
        <span className="text-ink-soft text-xs">
          Tap a point to pick a year
        </span>
      </div>

      <div>
        <h3 className="font-display text-2xl font-bold text-ink">
          As U.S. troops left, the bombing grew
        </h3>
        <p className="mt-2 font-display text-base text-ink-muted leading-relaxed">
          Between 1968 and 1972, the United States withdrew over 500,000 ground troops to de-escalate domestic political opposition. However, combat intensity did not decline proportionally: ground combat was transferred to the South Vietnamese army, subsidized by massive air bombardment.
        </p>
      </div>

      {/* Interactive Multi-Line SVG Trend Chart */}
      <div className="bg-white border border-rule p-4 rounded-xs">
        <div className="flex flex-wrap items-center justify-end gap-4 text-xs mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-ink rounded-full inline-block" />
            <span className="text-ink-muted">U.S. Troop Strength (536k 24k)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-red-700 rounded-full inline-block" />
            <span className="text-red-800 font-semibold">ARVN Combat KIA (20k 39k)</span>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[500px] select-none">
            {/* Grid Lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
              const y = padding.top + pct * (height - padding.top - padding.bottom);
              return (
                <line
                  key={i}
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#e7dfd1"
                  strokeWidth="1"
                  className=""
                />
              );
            })}

            {/* X-Axis Baseline */}
            <line
              x1={padding.left}
              y1={height - padding.bottom}
              x2={width - padding.right}
              y2={height - padding.bottom}
              stroke="#78716c"
              strokeWidth="1.5"
            />

            {/* X-Axis Year Labels */}
            {YEARS.map((year) => {
              const x = getX(year);
              const isSelected = selectedYear === year;
              return (
                <g key={year} className="cursor-pointer" onClick={() => setSelectedYear(year)}>
                  <line
                    x1={x}
                    y1={padding.top}
                    x2={x}
                    y2={height - padding.bottom}
                    stroke={isSelected ? '#991b1b' : 'none'}
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <text
                    x={x}
                    y={height - padding.bottom + 20}
                    textAnchor="middle"
                    className={`text-xs ${ isSelected ? 'fill-ink font-bold underline' : 'fill-ink-soft hover:fill-ink' }`}
                  >
                    {year}
                  </text>
                </g>
              );
            })}

            {/* Line 1: U.S. Troop Curve (Steep decline) */}
            <path d={usTroopsPath} fill="none" stroke="#44403c" strokeWidth="3" className="" />

            {/* Line 2: ARVN Combat Deaths (Plateau / Surge) */}
            <path d={arvnKiaPath} fill="none" stroke="#dc2626" strokeWidth="3" />

            {/* Interactive Points along both lines */}
            {YEARS.map((year) => {
              const x = getX(year);
              const yUs = getYUsTroops(TRACKER_DATA[year].usTroops);
              const yArvn = getYArvnKia(TRACKER_DATA[year].arvnDeaths);
              const isSelected = selectedYear === year;

              return (
                <g key={year} className="cursor-pointer" onClick={() => setSelectedYear(year)}>
                  {/* U.S. Troop Marker */}
                  <circle
                    cx={x}
                    cy={yUs}
                    r={isSelected ? '6' : '4.5'}
                    fill="#44403c"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    className=""
                  />

                  {/* ARVN KIA Marker */}
                  <circle
                    cx={x}
                    cy={yArvn}
                    r={isSelected ? '6' : '4.5'}
                    fill="#dc2626"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />

                  {/* Data Labels if Selected */}
                  {isSelected && (
                    <>
                      <text
                        x={x}
                        y={yUs - 10}
                        textAnchor="middle"
                        className="text-xs font-bold fill-ink"
                      >
                        {TRACKER_DATA[year].usTroops.toLocaleString()} troops
                      </text>
                      <text
                        x={x}
                        y={yArvn + 16}
                        textAnchor="middle"
                        className="text-xs font-bold fill-red-800"
                      >
                        {TRACKER_DATA[year].arvnDeaths.toLocaleString()} ARVN KIA
                      </text>
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selected Year Data Ledger */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white border border-rule rounded-xs">
          <div className="text-xs text-ink-soft">
            U.S. Troop Level ({selectedYear})
          </div>
          <div className="font-display text-2xl font-bold mt-1 text-ink">
            {current.usTroops.toLocaleString()}
          </div>
          <div className="text-xs text-ink-soft mt-1">
            U.S. Deaths in {selectedYear}: {current.usDeaths.toLocaleString()}
          </div>
        </div>

        <div className="p-4 bg-white border border-rule rounded-xs">
          <div className="text-xs text-red-700 font-bold">
            ARVN Combat KIA ({selectedYear})
          </div>
          <div className="font-display text-2xl font-bold mt-1 text-red-900">
            {current.arvnDeaths.toLocaleString()}
          </div>
          <div className="text-xs text-ink-soft mt-1">
            South Vietnam took over the ground fighting
          </div>
        </div>

        <div className="p-4 bg-white border border-rule rounded-xs">
          <div className="text-xs text-ink-soft">
            U.S. bomb tonnage
          </div>
          <div className="font-display text-2xl font-bold mt-1 text-ink">
            {current.bombTonnage}
          </div>
          <div className="text-xs text-ink-soft mt-1">
            Planes replaced ground troops
          </div>
        </div>
      </div>

      {/* Selected Year Milestone & Historiographical Debate */}
      <div className="p-5 bg-white border border-rule rounded-xs space-y-4">
        <div>
          <span className="text-xs text-ink-soft font-bold block mb-1">
            Operational Milestone · {selectedYear}
          </span>
          <p className="font-display text-base text-ink leading-relaxed">
            {current.milestone}
          </p>
        </div>

        <div className="pt-3 border-t border-rule">
          <span className="text-xs text-brand font-bold block mb-1">
            Historians disagree:
          </span>
          <p className="font-display text-sm text-ink-muted leading-relaxed">
            {current.contestedDebate}
          </p>
        </div>
      </div>
    </div>
  );
}
