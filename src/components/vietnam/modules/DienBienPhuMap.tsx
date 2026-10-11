'use client';

import React, { useState } from 'react';

type SectorId = 'valley' | 'airstrip' | 'beatrice' | 'isabelle' | 'artillery';
type SiegePhase = 1 | 2 | 3;

interface SectorDetail {
  title: string;
  frenchPremise: string;
  vietMinhReality: string;
  tacticalOutcome: string;
}

const SECTOR_DATA: Record<SectorId, SectorDetail> = {
  valley: {
    title: 'The Valley Floor · Muong Thanh Basin (Camp Retranché)',
    frenchPremise:
      'General Navarre calculated that 10,800 elite French paratroopers and Legionnaires, backed by heavy armor and air support in an open valley, could annihilate massed Viet Minh infantry.',
    vietMinhReality:
      'Constructing a fortified base in a 12-mile valley surrounded by mountain ridges gave the adversary permanent commanding high ground and line of sight.',
    tacticalOutcome:
      'The French garrison surrendered its geographic advantage before the first shot was fired, placing itself at the focal point of converging artillery fire.',
  },
  artillery: {
    title: 'Mountain Ridgeline Artillery · General Giap’s Logistical Feat',
    frenchPremise:
      'French artillery commander Charles Piroth assured Navarre that the Viet Minh could never haul heavy artillery through roadless jungle mountains, and that French counter-battery guns would silence any hostile fire in minutes.',
    vietMinhReality:
      'Giap mobilized 250,000 civilian porters (dan cong) to hand-haul 105mm howitzers and 37mm anti-aircraft guns up mountain slopes, digging them into forward-facing camouflaged caves immune to aerial spotting.',
    tacticalOutcome:
      'Unable to locate or silence Giap’s plunging mountain artillery, Colonel Piroth took his own life in his command bunker on the second night of the battle.',
  },
  airstrip: {
    title: 'Muong Thanh Airstrip · The Severed Lifeline',
    frenchPremise:
      'With no overland roads connecting Dien Bien Phu to French lines, the garrison relied entirely on continuous aerial resupply by transport aircraft flying from Hanoi.',
    vietMinhReality:
      'Giap deployed Chinese-supplied 37mm anti-aircraft artillery along the valley ridges, creating a deadly flak trap that forced transport planes to drop parachutes from high altitude.',
    tacticalOutcome:
      'Within two weeks, direct artillery shelling cratered the runway completely. Up to 30% of French parachute resupply drifted directly into Viet Minh trenches.',
  },
  beatrice: {
    title: 'Strongpoint Beatrice (Him Lam) · The Opening Shock',
    frenchPremise:
      'French commanders fortified Beatrice as an impregnable northeastern bastion designed to break any frontal infantry assault and hold for weeks.',
    vietMinhReality:
      'On March 13, Giap opened fire with an unprecedented massed artillery bombardment. A direct hit pulverized the French battalion command bunker, killing key commanders in the opening minutes.',
    tacticalOutcome:
      'Beatrice fell in less than six hours, demonstrating that French fixed field fortifications could not survive concentrated artillery fire.',
  },
  isabelle: {
    title: 'Strongpoint Isabelle (Hong Cum) · Isolated Southern Outpost',
    frenchPremise:
      'Positioned three miles south of the main camp, Isabelle was intended to provide mutual artillery crossfire to support the central garrison.',
    vietMinhReality:
      'Viet Minh trench networks severed the road between Isabelle and the central base within days, trapping 1,800 soldiers who could neither relieve the center nor receive help.',
    tacticalOutcome:
      'Isabelle was starved and isolated in siege trenches, surrendering last on May 8, 1954, the day after the main fortress fell.',
  },
};

const PHASES = [
  {
    phase: 1 as SiegePhase,
    dates: 'March 13–17, 1954',
    title: 'Phase 1: The Artillery Shock',
    summary: 'Massed bombardment shatters outer strongpoints Beatrice and Gabrielle. French artillery commander commits suicide.',
  },
  {
    phase: 2 as SiegePhase,
    dates: 'March 30 – April 15, 1954',
    title: 'Phase 2: The Trench Chokehold',
    summary: 'Viet Minh dig hundreds of miles of interlocking siege trenches, tightening the ring and rendering the airstrip unusable.',
  },
  {
    phase: 3 as SiegePhase,
    dates: 'May 1–7, 1954',
    title: 'Phase 3: The Final Surge',
    summary: 'Monsoon rains flood French bunkers; Giap launches all-out assault; French command bunker falls on May 7.',
  },
];

export default function DienBienPhuMap() {
  const [selectedSector, setSelectedSector] = useState<SectorId>('valley');
  const [activePhase, setActivePhase] = useState<SiegePhase>(2);
  const [showFiringArcs, setShowFiringArcs] = useState<boolean>(true);

  const detail = SECTOR_DATA[selectedSector];

  return (
    <div className="space-y-6">
      {/* Interactive Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 gap-3 text-xs font-archival-mono">
        <div className="flex items-center gap-2">
          <span className="text-stone-500 uppercase tracking-wider">Siege Chronology:</span>
          {PHASES.map((p) => (
            <button
              key={p.phase}
              onClick={() => setActivePhase(p.phase)}
              className={`px-2.5 py-1 rounded-xs border transition-colors cursor-pointer ${
                activePhase === p.phase
                  ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 font-bold'
                  : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-stone-500'
              }`}
            >
              Phase {p.phase}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowFiringArcs(!showFiringArcs)}
          className={`px-3 py-1 rounded-xs border transition-colors cursor-pointer ${
            showFiringArcs
              ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border-amber-400 dark:border-amber-700 font-semibold'
              : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border-stone-300 dark:border-stone-700'
          }`}
        >
          {showFiringArcs ? '● Firing Trajectories: Visible' : '○ Firing Trajectories: Hidden'}
        </button>
      </div>

      {/* Phase Annotation Banner */}
      <div className="p-3 bg-stone-100 dark:bg-stone-900/60 border-l-2 border-stone-800 dark:border-stone-200 text-xs">
        <div className="font-archival-mono font-bold text-stone-900 dark:text-stone-100">
          {PHASES[activePhase - 1].dates} · {PHASES[activePhase - 1].title}
        </div>
        <p className="font-editorial-serif text-stone-600 dark:text-stone-400 mt-0.5">
          {PHASES[activePhase - 1].summary}
        </p>
      </div>

      {/* The Battlefield Cartography Canvas */}
      <div className="relative bg-[#eee8db] dark:bg-[#1a1815] border border-stone-300 dark:border-stone-700 rounded-xs p-2 sm:p-4 aspect-16/10 flex items-center justify-center overflow-hidden shadow-inner">
        <svg viewBox="0 0 800 500" className="w-full h-full select-none" role="img" aria-label="Topographic map of Dien Bien Phu">
          {/* Contour Lines - Surrounding Mountain Ridges */}
          <path
            d="M 50,50 Q 400,20 750,50 Q 780,250 750,450 Q 400,480 50,450 Q 20,250 50,50 Z"
            fill="none"
            stroke="#a8a29e"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <path
            d="M 100,90 Q 400,60 700,90 Q 730,250 700,410 Q 400,440 100,410 Q 70,250 100,90 Z"
            fill="none"
            stroke="#78716c"
            strokeWidth="2"
          />
          <path
            d="M 160,130 Q 400,100 640,130 Q 670,250 640,370 Q 400,400 160,370 Q 130,250 160,130 Z"
            fill="none"
            stroke="#a8a29e"
            strokeWidth="1"
          />

          {/* Mountain Ridge Labels */}
          <text x="400" y="45" textAnchor="middle" className="fill-stone-600 dark:fill-stone-400 font-archival-mono text-[11px] tracking-widest uppercase font-bold">
            HIGH MOUNTAIN RIDGELINE (ELEVATION 1,200M+) &bull; GIAP’S ARTILLERY CAVES
          </text>

          {/* Nam Yum River flowing through valley */}
          <path
            d="M 280,50 Q 320,160 380,250 T 450,450"
            fill="none"
            stroke="#0284c7"
            strokeWidth="3.5"
            strokeOpacity="0.8"
          />
          <text x="290" y="120" className="fill-sky-800 dark:fill-sky-400 font-archival-mono text-[10px] -rotate-45 font-semibold">
            Nam Yum River
          </text>

          {/* French Central Basin - Camp Retranché */}
          <ellipse
            cx="400"
            cy="250"
            rx={activePhase === 1 ? '160' : activePhase === 2 ? '120' : '80'}
            ry={activePhase === 1 ? '110' : activePhase === 2 ? '80' : '55'}
            fill="#e7dfd1"
            fillOpacity="0.85"
            stroke={selectedSector === 'valley' ? '#991b1b' : '#57534e'}
            strokeWidth={selectedSector === 'valley' ? '3' : '2'}
            className="cursor-pointer transition-all"
            onClick={() => setSelectedSector('valley')}
          />
          <text x="400" y="225" textAnchor="middle" className="fill-stone-900 dark:fill-stone-100 font-editorial-serif text-sm font-bold pointer-events-none">
            Camp Retranché (Main Garrison)
          </text>
          <text x="400" y="240" textAnchor="middle" className="fill-stone-600 dark:fill-stone-400 font-archival-mono text-[9px] pointer-events-none">
            {activePhase === 1 ? 'Perimeter: 16 km' : activePhase === 2 ? 'Perimeter: 8 km (Encircled)' : 'Perimeter: <2 km (Surrender)'}
          </text>

          {/* The Airstrip */}
          <g
            className="cursor-pointer group"
            onClick={() => setSelectedSector('airstrip')}
            transform="rotate(-20 400 250)"
          >
            <rect
              x="365"
              y="180"
              width="70"
              height="140"
              rx="2"
              fill={selectedSector === 'airstrip' ? '#991b1b' : '#57534e'}
              className="transition-colors"
            />
            {/* Crater marks if Phase 2 or 3 */}
            {activePhase >= 2 && (
              <>
                <circle cx="385" cy="210" r="4" fill="#000" />
                <circle cx="415" cy="250" r="5" fill="#000" />
                <circle cx="395" cy="290" r="4" fill="#000" />
              </>
            )}
            <text x="400" y="255" textAnchor="middle" className="fill-white font-archival-mono text-[9px] uppercase font-bold pointer-events-none">
              {activePhase === 1 ? 'AIRSTRIP' : 'AIRSTRIP CRATERED'}
            </text>
          </g>

          {/* Strongpoint Beatrice */}
          <g className="cursor-pointer" onClick={() => setSelectedSector('beatrice')}>
            <circle
              cx="580"
              cy="140"
              r="24"
              fill={selectedSector === 'beatrice' ? '#991b1b' : activePhase >= 2 ? '#78716c' : '#d6cbba'}
              stroke="#44403c"
              strokeWidth="2"
              className="transition-colors"
            />
            <text x="580" y="144" textAnchor="middle" className={`font-archival-mono text-[10px] font-bold ${selectedSector === 'beatrice' ? 'fill-white' : 'fill-stone-900'}`}>
              BEATRICE
            </text>
            <text x="580" y="176" textAnchor="middle" className="fill-stone-600 dark:fill-stone-400 font-archival-mono text-[9px]">
              {activePhase === 1 ? 'Assault Mar 13' : 'Fell Day 1'}
            </text>
          </g>

          {/* Strongpoint Isabelle */}
          <g className="cursor-pointer" onClick={() => setSelectedSector('isabelle')}>
            <circle
              cx="450"
              cy="400"
              r="22"
              fill={selectedSector === 'isabelle' ? '#991b1b' : '#d6cbba'}
              stroke="#44403c"
              strokeWidth="2"
              className="transition-colors"
            />
            <text x="450" y="404" textAnchor="middle" className={`font-archival-mono text-[10px] font-bold ${selectedSector === 'isabelle' ? 'fill-white' : 'fill-stone-900'}`}>
              ISABELLE
            </text>
            <text x="450" y="432" textAnchor="middle" className="fill-stone-600 dark:fill-stone-400 font-archival-mono text-[9px]">
              Isolated 3 mi south
            </text>
          </g>

          {/* Giap's Mountain Artillery Positions */}
          <g className="cursor-pointer" onClick={() => setSelectedSector('artillery')}>
            {[
              { x: 180, y: 110, label: 'Giap Howitzers' },
              { x: 620, y: 80, label: 'Giap 105mm' },
              { x: 720, y: 260, label: 'Giap 37mm AA' },
              { x: 140, y: 320, label: 'Giap Artillery' },
            ].map((gun, idx) => (
              <g key={idx} transform={`translate(${gun.x}, ${gun.y})`}>
                <polygon points="0,-10 10,8 -10,8" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="3" fill="#ffffff" />
                <text x="0" y="20" textAnchor="middle" className="fill-stone-700 dark:fill-stone-300 font-archival-mono text-[9px] font-bold">
                  [G] {gun.label}
                </text>
              </g>
            ))}
          </g>

          {/* Dynamic Artillery Plunging Trajectories */}
          {showFiringArcs && (
            <g stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.8">
              {/* Arcs to Airstrip */}
              <line x1="180" y1="110" x2="390" y2="240" />
              <line x1="620" y1="80" x2="410" y2="230" />
              <line x1="720" y1="260" x2="420" y2="270" />
              <line x1="140" y1="320" x2="380" y2="260" />

              {/* Arc to Beatrice if Phase 1 */}
              {activePhase === 1 && (
                <line x1="620" y1="80" x2="580" y2="140" strokeWidth="2.5" stroke="#991b1b" />
              )}
            </g>
          )}

          {/* Viet Minh Trench Lines (Visible in Phase 2 & 3) */}
          {activePhase >= 2 && (
            <path
              d="M 300,180 L 330,210 L 320,240 L 350,260 M 520,200 L 480,220 L 490,250 L 450,270"
              stroke="#57534e"
              strokeWidth="2"
              strokeDasharray="2,2"
              fill="none"
            />
          )}
        </svg>
      </div>

      {/* Sector Selection Pills */}
      <div className="flex flex-wrap gap-2 text-xs font-archival-mono">
        <span className="text-stone-500 py-1">Inspect Position:</span>
        {(['valley', 'artillery', 'airstrip', 'beatrice', 'isabelle'] as const).map((id) => (
          <button
            key={id}
            onClick={() => setSelectedSector(id)}
            className={`px-3 py-1 rounded-xs border transition-colors cursor-pointer ${
              selectedSector === id
                ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 font-bold'
                : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-stone-500'
            }`}
          >
            {SECTOR_DATA[id].title.split('·')[0].trim()}
          </button>
        ))}
      </div>

      {/* Symmetrical Tactical Audit Card */}
      <div className="p-5 bg-white dark:bg-[#121110] border border-stone-200 dark:border-stone-800 rounded-xs space-y-4">
        <div>
          <span className="font-archival-mono text-[10px] uppercase tracking-widest text-stone-500 block">
            Tactical Sector Analysis
          </span>
          <h4 className="font-editorial-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            {detail.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-3 bg-stone-50 dark:bg-[#181614] border border-stone-200 dark:border-stone-800 rounded-xs">
            <span className="font-archival-mono uppercase tracking-wider font-bold text-stone-600 dark:text-stone-400 block mb-1">
              French Operational Premise:
            </span>
            <p className="font-editorial-serif text-stone-800 dark:text-stone-200 leading-relaxed text-sm">
              {detail.frenchPremise}
            </p>
          </div>

          <div className="p-3 bg-stone-50 dark:bg-[#181614] border border-stone-200 dark:border-stone-800 rounded-xs">
            <span className="font-archival-mono uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 block mb-1">
              Viet Minh Counter-Logistics:
            </span>
            <p className="font-editorial-serif text-stone-800 dark:text-stone-200 leading-relaxed text-sm">
              {detail.vietMinhReality}
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-xs flex items-baseline gap-2">
          <span className="font-archival-mono font-bold uppercase tracking-wider text-stone-500 whitespace-nowrap">
            Tactical Result:
          </span>
          <p className="font-editorial-serif text-stone-700 dark:text-stone-300">
            {detail.tacticalOutcome}
          </p>
        </div>
      </div>
    </div>
  );
}
