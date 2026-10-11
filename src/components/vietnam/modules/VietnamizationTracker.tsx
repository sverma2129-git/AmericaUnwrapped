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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 gap-2 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Quantitative Trajectory &bull; 1968–1972
          </span>
          <span className="text-stone-500 ml-2">&bull; The Substitution Dynamic</span>
        </div>
        <span className="text-stone-500 uppercase tracking-widest text-[11px]">
          Click points on graph to select year
        </span>
      </div>

      <div>
        <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
          The &ldquo;Scissors Curve&rdquo; of Vietnamization
        </h4>
        <p className="mt-2 font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
          Between 1968 and 1972, the United States withdrew over 500,000 ground troops to de-escalate domestic political opposition. However, combat intensity did not decline proportionally: ground combat was transferred to the South Vietnamese army, subsidized by massive air bombardment.
        </p>
      </div>

      {/* Interactive Multi-Line SVG Trend Chart */}
      <div className="bg-white dark:bg-[#121110] border border-stone-200 dark:border-stone-800 p-4 rounded-xs shadow-inner">
        <div className="flex flex-wrap items-center justify-end gap-4 text-xs font-archival-mono mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-stone-900 dark:bg-stone-100 rounded-full inline-block" />
            <span className="text-stone-700 dark:text-stone-300">U.S. Troop Strength (536k &rarr; 24k)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-red-700 dark:bg-red-500 rounded-full inline-block" />
            <span className="text-red-800 dark:text-red-400 font-semibold">ARVN Combat KIA (20k &rarr; 39k)</span>
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
                  className="dark:stroke-stone-800"
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
                    className={`font-archival-mono text-xs ${
                      isSelected
                        ? 'fill-stone-950 dark:fill-stone-100 font-bold underline'
                        : 'fill-stone-500 hover:fill-stone-900 dark:hover:fill-stone-100'
                    }`}
                  >
                    {year}
                  </text>
                </g>
              );
            })}

            {/* Line 1: U.S. Troop Curve (Steep decline) */}
            <path d={usTroopsPath} fill="none" stroke="#44403c" strokeWidth="3" className="dark:stroke-stone-300" />

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
                    className="dark:fill-stone-200"
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
                        className="font-archival-mono text-[9px] font-bold fill-stone-900 dark:fill-stone-100"
                      >
                        {TRACKER_DATA[year].usTroops.toLocaleString()} troops
                      </text>
                      <text
                        x={x}
                        y={yArvn + 16}
                        textAnchor="middle"
                        className="font-archival-mono text-[9px] font-bold fill-red-800 dark:fill-red-400"
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
        <div className="p-4 bg-white dark:bg-[#121110] border border-stone-200 dark:border-stone-800 rounded-xs">
          <div className="font-archival-mono text-[10px] text-stone-500 uppercase tracking-widest">
            U.S. Troop Level ({selectedYear})
          </div>
          <div className="font-editorial-serif text-2xl font-bold mt-1 text-stone-900 dark:text-stone-100">
            {current.usTroops.toLocaleString()}
          </div>
          <div className="font-archival-mono text-xs text-stone-500 mt-1">
            U.S. Deaths in {selectedYear}: {current.usDeaths.toLocaleString()}
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-[#121110] border border-stone-200 dark:border-stone-800 rounded-xs">
          <div className="font-archival-mono text-[10px] text-red-700 dark:text-red-400 uppercase tracking-widest font-bold">
            ARVN Combat KIA ({selectedYear})
          </div>
          <div className="font-editorial-serif text-2xl font-bold mt-1 text-red-900 dark:text-red-300">
            {current.arvnDeaths.toLocaleString()}
          </div>
          <div className="font-archival-mono text-xs text-stone-500 mt-1">
            Ground casualties transferred to South Vietnam
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-[#121110] border border-stone-200 dark:border-stone-800 rounded-xs">
          <div className="font-archival-mono text-[10px] text-stone-500 uppercase tracking-widest">
            U.S. Aerial Bomb Tonnage
          </div>
          <div className="font-editorial-serif text-2xl font-bold mt-1 text-stone-900 dark:text-stone-100">
            {current.bombTonnage}
          </div>
          <div className="font-archival-mono text-xs text-stone-500 mt-1">
            Airpower substituted for ground troops
          </div>
        </div>
      </div>

      {/* Selected Year Milestone & Historiographical Debate */}
      <div className="p-5 bg-white dark:bg-[#121110] border border-stone-200 dark:border-stone-800 rounded-xs space-y-4">
        <div>
          <span className="font-archival-mono text-[10px] uppercase tracking-widest text-stone-500 font-bold block mb-1">
            Operational Milestone · {selectedYear}
          </span>
          <p className="font-editorial-serif text-base text-stone-800 dark:text-stone-200 leading-relaxed">
            {current.milestone}
          </p>
        </div>

        <div className="pt-3 border-t border-stone-100 dark:border-stone-800">
          <span className="font-archival-mono text-[10px] uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold block mb-1">
            Historiographical Controversy:
          </span>
          <p className="font-editorial-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed italic">
            {current.contestedDebate}
          </p>
        </div>
      </div>
    </div>
  );
}
