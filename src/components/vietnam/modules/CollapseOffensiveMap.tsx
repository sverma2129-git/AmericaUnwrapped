'use client';

import React, { useState } from 'react';

type PhaseIndex = 0 | 1 | 2 | 3 | 4;

interface CampaignPhase {
  date: string;
  location: string;
  title: string;
  coords: { x: number; y: number };
  narrative: string;
  logisticsAndAid: string;
  significance: string;
}

const CAMPAIGN_PHASES: CampaignPhase[] = [
  {
    date: 'March 10–12, 1975',
    location: 'Ban Me Thuot (Central Highlands)',
    title: 'The Breakthrough at Ban Me Thuot',
    coords: { x: 310, y: 260 },
    narrative:
      'General Van Tien Dung feigned a strike toward Pleiku and Kontum, but secretly concentrated three PAVN divisions against Ban Me Thuot. Soviet-supplied T-54 tanks and heavy artillery breached the defenses in 36 hours, bisecting South Vietnam.',
    logisticsAndAid:
      'ARVN artillery was rationed to three rounds per day per tube; helicopters were grounded due to a lack of spare parts following congressional aid cuts.',
    significance:
      'Exposed the severe material depletion of South Vietnamese forces and shattered strategic communications between northern and southern corps.',
  },
  {
    date: 'March 14–24, 1975',
    location: 'Route 7B & Central Highlands',
    title: 'Thieu’s Evacuation & The "Column of Tears"',
    coords: { x: 340, y: 280 },
    narrative:
      'In a secret meeting at Cam Ranh, President Thieu ordered General Pham Van Phu to evacuate all of II Corps to coastal enclaves without notifying civilian officials. The withdrawal down unpaved, bridge-broken Route 7B disintegrated into chaos: 200,000 soldiers and 400,000 civilian refugees were shelled by PAVN artillery along the choked roadway.',
    logisticsAndAid:
      'South Vietnamese soldiers abandoned their units to escort their fleeing families, destroying military cohesion without fighting a set-piece battle.',
    significance:
      'The complete organizational collapse of South Vietnam’s II Corps within 72 hours, surrendering two-thirds of the country’s landmass.',
  },
  {
    date: 'March 25–30, 1975',
    location: 'Hue & Da Nang (Northern Front)',
    title: 'The Northern Front Dissolves',
    coords: { x: 260, y: 120 },
    narrative:
      'With their southern flank exposed, ARVN forces in northern I Corps were ordered to hold Hue, then abruptly counter-ordered to retreat to Da Nang. In Da Nang, South Vietnam’s second-largest city, 100,000 demoralized troops dissolved into panic amid 300,000 fleeing refugees. The city fell on March 30 without a major battle.',
    logisticsAndAid:
      'Billions of dollars of modern American equipment—F-5 jets, howitzers, tanks, and trucks—were captured intact on airfields and docks.',
    significance:
      'Hanoi realized that the southern armed forces were not executing an orderly withdrawal, but undergoing total institutional disintegration.',
  },
  {
    date: 'April 9–21, 1975',
    location: 'Xuan Loc (Saigon Perimeter)',
    title: 'The ARVN 18th Division Stand at Xuan Loc',
    coords: { x: 320, y: 375 },
    narrative:
      'Just 40 miles northeast of Saigon, the ARVN 18th Division under Brigadier General Le Minh Dao mounted a tenacious, two-week defense against the PAVN 4th Army Corps. The 18th repelled repeated human wave assaults and survived heavy artillery bombardment, inflicting an estimated 2,000 to 3,000 casualties before withdrawing in good order when outflanked.',
    logisticsAndAid:
      'South Vietnamese forces utilized C-130-dropped Daisy Cutter 15,000-lb fuel-air bombs in a final attempt to halt the armored advance.',
    significance:
      'Demonstrated that ARVN soldiers fought tenaciously where leadership and munitions held. Xuan Loc was the last major defensive stand of the war.',
  },
  {
    date: 'April 26–30, 1975',
    location: 'Saigon (Ho Chi Minh Campaign)',
    title: 'The Fall of Saigon & Unconditional Surrender',
    coords: { x: 300, y: 395 },
    narrative:
      'Sixteen North Vietnamese divisions converged on Saigon in the final "Ho Chi Minh Campaign." Operation Frequent Wind evacuated roughly 1,000 Americans and 7,000 vulnerable South Vietnamese by helicopter to 7th Fleet carriers. At 11:30 AM on April 30, PAVN Tank 843 crashed through the gates of the Presidential Palace, where General Duong Van Minh announced unconditional surrender.',
    logisticsAndAid:
      'President Ford’s request for $722 million in emergency military aid was rejected by Congress, confirming that no American intervention would occur.',
    significance:
      'The thirty-year conflict ended with the complete collapse of the Republic of Vietnam and the reunification of the country under Hanoi.',
  },
];

export default function CollapseOffensiveMap() {
  const [activePhase, setActivePhase] = useState<PhaseIndex>(0);

  const current = CAMPAIGN_PHASES[activePhase];

  return (
    <div className="space-y-6">
      {/* Editorial Phase Scrubber */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 gap-3 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Campaign Cartography
          </span>
          <span className="text-stone-500 ml-2">&bull; The 55-Day Spring 1975 Collapse</span>
        </div>

        {/* Phase Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {CAMPAIGN_PHASES.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhase(idx as PhaseIndex)}
              className={`px-2.5 py-1 rounded-xs border transition-colors cursor-pointer whitespace-nowrap ${
                activePhase === idx
                  ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 font-bold'
                  : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-stone-500'
              }`}
            >
              Phase {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Map & Operational Ledger Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Geographic Map of South Vietnam with Highways and Advances */}
        <div className="lg:col-span-6 bg-[#eee8db] dark:bg-[#1a1815] border border-stone-300 dark:border-stone-700 rounded-xs p-3 relative aspect-3/4 flex items-center justify-center overflow-hidden shadow-inner">
          <svg viewBox="180 50 250 460" className="w-full h-full select-none" role="img" aria-label="1975 Spring Offensive operational map">
            {/* South Vietnam Coastline Silhouette */}
            <path
              d="M 230,70 L 260,100 L 290,130 L 330,180 L 360,230 L 400,300 L 390,340 L 360,380 L 330,410 L 270,450 L 230,480 L 220,450 L 250,420 L 250,380 L 280,340 L 270,250 L 230,160 L 200,90 Z"
              fill="#e7dfd1"
              stroke="#78716c"
              strokeWidth="1.5"
              className="dark:fill-[#24211d] dark:stroke-stone-600"
            />

            {/* Strategic Highways */}
            {/* Route 1: Coastal Highway */}
            <path
              d="M 230,70 Q 280,120 330,180 T 390,300 T 360,380 T 300,395"
              fill="none"
              stroke="#a8a29e"
              strokeWidth="2"
              strokeDasharray="3,3"
            />
            <text x="365" y="240" className="fill-stone-500 font-archival-mono text-[7px] rotate-75">
              ROUTE 1
            </text>

            {/* Route 14: Central Highlands Highway */}
            <path
              d="M 270,160 Q 300,210 310,260 T 300,395"
              fill="none"
              stroke="#a8a29e"
              strokeWidth="1.5"
              strokeDasharray="2,2"
            />
            <text x="275" y="210" className="fill-stone-500 font-archival-mono text-[7px] rotate-70">
              ROUTE 14
            </text>

            {/* Route 7B: Retreat Corridor */}
            <path
              d="M 310,260 L 360,300"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
              strokeDasharray="2,2"
            />
            <text x="325" y="275" className="fill-red-800 dark:fill-red-400 font-archival-mono text-[7px] font-bold">
              ROUTE 7B
            </text>

            {/* PAVN Main Advance Vector (Progressive based on phase) */}
            {activePhase >= 1 && (
              <line x1="310" y1="260" x2="350" y2="295" stroke="#991b1b" strokeWidth="3" markerEnd="url(#arrow)" />
            )}
            {activePhase >= 2 && (
              <path
                d="M 230,70 L 260,100 L 290,130"
                fill="none"
                stroke="#991b1b"
                strokeWidth="4"
              />
            )}
            {activePhase >= 3 && (
              <path
                d="M 290,130 L 330,180 L 390,300"
                fill="none"
                stroke="#991b1b"
                strokeWidth="4"
              />
            )}
            {activePhase >= 4 && (
              <circle cx="300" cy="395" r="28" fill="none" stroke="#991b1b" strokeWidth="2" strokeDasharray="3,3" />
            )}

            {/* Key Operational Cities */}
            {[
              { name: 'Hue', x: 260, y: 100, phase: 2 },
              { name: 'Da Nang', x: 290, y: 130, phase: 2 },
              { name: 'Ban Me Thuot', x: 310, y: 260, phase: 0 },
              { name: 'Tuy Hoa', x: 360, y: 300, phase: 1 },
              { name: 'Xuan Loc', x: 320, y: 375, phase: 3 },
              { name: 'Saigon', x: 300, y: 395, phase: 4 },
            ].map((city, idx) => {
              const isCurrent = current.coords.x === city.x && current.coords.y === city.y;
              return (
                <g key={idx} className="cursor-pointer" onClick={() => setActivePhase(city.phase as PhaseIndex)}>
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isCurrent ? '7' : '4'}
                    fill={isCurrent ? '#991b1b' : '#57534e'}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text
                    x={city.x + 8}
                    y={city.y + 3}
                    className={`font-archival-mono text-[8px] font-bold ${
                      isCurrent ? 'fill-red-950 dark:fill-red-300 font-extrabold underline' : 'fill-stone-800 dark:fill-stone-300'
                    }`}
                  >
                    {city.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Phase Narrative & Logistic Analysis */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 bg-white dark:bg-[#121110] border border-stone-200 dark:border-stone-800 rounded-xs">
            <div className="flex items-center justify-between text-[10px] font-archival-mono text-stone-500 mb-1">
              <span>PHASE {activePhase + 1} OF 5</span>
              <span>{current.date}</span>
            </div>
            <h4 className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              {current.title}
            </h4>
            <div className="text-xs text-brand font-medium mt-0.5">
              Sector: {current.location}
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
              <span className="font-archival-mono text-[10px] uppercase tracking-wider text-stone-500 font-bold block mb-1">
                Operational Realities:
              </span>
              <p className="font-editorial-serif text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                {current.narrative}
              </p>
            </div>
          </div>

          {/* Aid Cuts & Logistics Factor */}
          <div className="p-4 bg-stone-50 dark:bg-[#181614] border border-stone-200 dark:border-stone-800 rounded-xs text-xs">
            <span className="font-archival-mono font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 block mb-1">
              Logistical &amp; Aid Factors:
            </span>
            <p className="font-editorial-serif text-stone-700 dark:text-stone-300 leading-relaxed text-sm">
              {current.logisticsAndAid}
            </p>
          </div>

          {/* Historical Consequence */}
          <div className="p-4 bg-stone-100/80 dark:bg-stone-900/60 border-l-2 border-stone-800 dark:border-stone-200 rounded-r-xs text-xs">
            <span className="font-archival-mono font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
              Significance in the 55-Day Arc:
            </span>
            <p className="font-editorial-serif text-stone-800 dark:text-stone-200 leading-relaxed">
              {current.significance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
