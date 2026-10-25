'use client';

import React, { useState } from 'react';

type TheaterId = 'saigon' | 'hue' | 'khesanh' | 'highlands' | 'coastal' | 'delta';

interface StrikeLocation {
  id: TheaterId;
  name: string;
  coords: { x: number; y: number };
  corps: string;
  significance: string;
  tacticalAction: string;
  hanoiOutcome: string;
  washingtonShock: string;
}

const STRIKE_LOCATIONS: Record<TheaterId, StrikeLocation> = {
  saigon: {
    id: 'saigon',
    name: 'Saigon (Capital & U.S. Embassy)',
    coords: { x: 310, y: 390 },
    corps: 'III Corps · Capital Military District',
    significance: 'Breached the psychological heart of American command on live television.',
    tacticalAction:
      'At 2:47 AM on January 31, 19 Viet Cong sappers of the C-10 Sapper Battalion blew a hole in the outer wall of the U.S. Embassy with satchel charges. Sapper squads also attacked the Presidential Palace, the National Radio station, and Tan Son Nhut Air Base. All embassy sappers were killed or captured within six hours.',
    hanoiOutcome:
      'Failed to capture key government buildings or trigger an urban civilian uprising; elite sapper units sacrificed.',
    washingtonShock:
      'American news cameras broadcast bloodied soldiers and dead sappers on embassy grounds into morning living rooms, shattering General Westmoreland’s claims that victory was within sight.',
  },
  hue: {
    id: 'hue',
    name: 'Hue Citadel & Ancient Capital',
    coords: { x: 260, y: 110 },
    corps: 'I Corps · Northern Front',
    significance: 'The bloodiest single battle of Tet: 26 days of brutal house-to-house combat.',
    tacticalAction:
      'Two PAVN regiments seized the historic imperial citadel under morning fog, hoisting the NLF flag. It required nearly a month of intense room-to-room combat by U.S. Marines and ARVN infantry to retake the city, leaving over 80% of Hue in ruins.',
    hanoiOutcome:
      'Heavy losses (an estimated 5,000 PAVN/VC dead). During their occupation, communist cadres executed an estimated 2,800 to 3,000 civil servants, teachers, and suspected southern sympathizers.',
    washingtonShock:
      'Demonstrated that communist regular forces could seize South Vietnam’s third-largest city and hold it for nearly a month against combined U.S. and ARVN firepower.',
  },
  khesanh: {
    id: 'khesanh',
    name: 'Khe Sanh Combat Base',
    coords: { x: 220, y: 80 },
    corps: 'I Corps · Laotian Border',
    significance: 'The 77-day diversionary siege that fixated American high command.',
    tacticalAction:
      'Two North Vietnamese divisions surrounded 6,000 U.S. Marines in an isolated mountain outpost near the Laotian border beginning January 21. President Johnson kept a terrain model in the White House basement, determined to prevent an "American Dien Bien Phu."',
    hanoiOutcome:
      'Pinned down massive U.S. tactical airpower (over 100,000 tons of bombs dropped in Operation Niagara) and strategic attention away from the vulnerable coastal cities.',
    washingtonShock:
      'The base was successfully held and relieved in April, but was quietly abandoned by the U.S. military two months later, prompting sharp public questioning of its strategic value.',
  },
  highlands: {
    id: 'highlands',
    name: 'Central Highlands (Pleiku, Kontum, Ban Me Thuot)',
    coords: { x: 320, y: 230 },
    corps: 'II Corps · Central Plateau',
    significance: 'Simultaneous strikes aimed at severing South Vietnam in half.',
    tacticalAction:
      'Coordinated mortar barrages and ground assaults hit provincial capitals in Pleiku, Kontum, and Ban Me Thuot, attacking ARVN division headquarters and airfield perimeters.',
    hanoiOutcome:
      'Communist forces inflicted substantial logistical damage but were pushed out of provincial centers within 72 hours by ARVN counter-attacks.',
    washingtonShock:
      'Proved communist forces had developed sophisticated cross-country logistical networks through Laos and Cambodia that U.S. border interdiction had failed to detect.',
  },
  coastal: {
    id: 'coastal',
    name: 'Coastal Cities (Da Nang, Qui Nhon, Nha Trang)',
    coords: { x: 370, y: 280 },
    corps: 'I & II Corps · Coastal Lowlands',
    significance: 'Assaults on the primary logistics hubs and air bases along the coast.',
    tacticalAction:
      'Rocket and ground attacks struck the massive Da Nang air base, deep-water port facilities in Qui Nhon, and logistics depots in Nha Trang.',
    hanoiOutcome:
      'Guerrilla units suffered catastrophic casualties when caught in the open against rapid American helicopter and gunship counter-attacks.',
    washingtonShock:
      'Exposed that even heavily defended rear-echelon coastal supply enclaves were not secure from coordinated penetration.',
  },
  delta: {
    id: 'delta',
    name: 'Mekong Delta (Can Tho, My Tho, Ben Tre)',
    coords: { x: 270, y: 440 },
    corps: 'IV Corps · Southern Rice Bowl',
    significance: 'Dense guerrilla warfare in South Vietnam’s demographic and agricultural core.',
    tacticalAction:
      'Viet Cong battalions struck 13 of 16 provincial capitals in the Delta. In Ben Tre, heavy combat prompted an American officer to explain to AP correspondent Peter Arnett that forces had to destroy the town in order to save it from enemy capture.',
    hanoiOutcome:
      'The southern Viet Cong guerrilla infrastructure in the Delta suffered irreplaceable losses of experienced local political and military cadres.',
    washingtonShock:
      'The civilian destruction in Ben Tre and Delta towns crystallized growing moral doubts among the American public regarding the methods of counterinsurgency.',
  },
};

// Additional 30+ strike markers for the nationwide simultaneity view
const MINOR_STRIKES = [
  { name: 'Quang Tri', x: 240, y: 95 },
  { name: 'Hoi An', x: 295, y: 145 },
  { name: 'Tam Ky', x: 310, y: 165 },
  { name: 'Quang Ngai', x: 330, y: 190 },
  { name: 'Tuy Hoa', x: 390, y: 310 },
  { name: 'Cam Ranh', x: 380, y: 340 },
  { name: 'Phan Thiet', x: 360, y: 375 },
  { name: 'Bien Hoa', x: 325, y: 380 },
  { name: 'Vinh Long', x: 280, y: 425 },
  { name: 'Chau Doc', x: 230, y: 420 },
  { name: 'Rach Gia', x: 235, y: 450 },
  { name: 'Soc Trang', x: 285, y: 465 },
  { name: 'Ca Mau', x: 250, y: 485 },
];

export default function TetOffensiveMap() {
  const [selectedTheater, setSelectedTheater] = useState<TheaterId>('saigon');
  const [showSimultaneity, setShowSimultaneity] = useState<boolean>(true);

  const current = STRIKE_LOCATIONS[selectedTheater];

  return (
    <div className="space-y-6">
      {/* Editorial Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 gap-3 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Operational Cartography
          </span>
          <span className="text-stone-500 ml-2">&bull; South Vietnam · Tet 1968 Strike Coordinates</span>
        </div>

        <button
          onClick={() => setShowSimultaneity(!showSimultaneity)}
          className={`px-3 py-1 rounded-xs border transition-colors cursor-pointer text-xs ${
            showSimultaneity
              ? 'bg-[#8B252D] text-white border-[#8B252D] font-bold shadow-xs'
              : 'bg-[#FFFEFA] text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
          }`}
        >
          {showSimultaneity ? '● 36 Provincial Strikes: Visible' : '○ 36 Provincial Strikes: Filtered'}
        </button>
      </div>

      {/* Cartographic Grid: Map on Left / Theater Audit on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Geographic Map of South Vietnam */}
        <div className="lg:col-span-6 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs p-3 relative aspect-3/4 flex items-center justify-center overflow-hidden shadow-xs">
          <svg viewBox="180 50 250 460" className="w-full h-full select-none" role="img" aria-label="Geographic map of South Vietnam during the Tet Offensive">
            {/* South Vietnam Coastline Silhouette */}
            <path
              d="M 230,70 L 260,100 L 290,130 L 330,180 L 360,230 L 400,300 L 390,340 L 360,380 L 330,410 L 270,450 L 230,480 L 220,450 L 250,420 L 250,380 L 280,340 L 270,250 L 230,160 L 200,90 Z"
              fill="#EAE2D5"
              stroke="#A89F91"
              strokeWidth="1.5"
            />

            {/* 17th Parallel DMZ Marker */}
            <line x1="180" y1="70" x2="260" y2="70" stroke="#8B252D" strokeWidth="2" strokeDasharray="4,2" />
            <text x="185" y="65" className="fill-[#8B252D] font-mono text-[8px] font-bold">
              17th PARALLEL (DMZ)
            </text>

            {/* Region / Neighbor Labels */}
            <text x="195" y="140" className="fill-[#6B5E59] font-mono text-[9px] -rotate-45">
              LAOS
            </text>
            <text x="210" y="320" className="fill-[#6B5E59] font-mono text-[9px]">
              CAMBODIA
            </text>
            <text x="350" y="110" className="fill-[#5C524E] font-mono text-[9px]">
              SOUTH CHINA SEA
            </text>

            {/* 36 Provincial Strike Points (If Enabled) */}
            {showSimultaneity && (
              <g>
                {MINOR_STRIKES.map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r="3.5"
                    fill="#ef4444"
                    fillOpacity="0.8"
                    stroke="#991b1b"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                ))}
              </g>
            )}

            {/* Major Interactive Theaters */}
            {Object.values(STRIKE_LOCATIONS).map((loc) => {
              const isSelected = selectedTheater === loc.id;
              return (
                <g
                  key={loc.id}
                  className="cursor-pointer group"
                  onClick={() => setSelectedTheater(loc.id)}
                >
                  {/* Outer selection ring */}
                  {isSelected && (
                    <circle
                      cx={loc.coords.x}
                      cy={loc.coords.y}
                      r="12"
                      fill="none"
                      stroke="#991b1b"
                      strokeWidth="2"
                      strokeDasharray="2,2"
                    />
                  )}
                  {/* Strike Target Dot */}
                  <circle
                    cx={loc.coords.x}
                    cy={loc.coords.y}
                    r={isSelected ? '6' : '5'}
                    fill={isSelected ? '#991b1b' : '#b91c1c'}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  {/* Label */}
                  <text
                    x={loc.coords.x + 8}
                    y={loc.coords.y + 3}
                    className={`font-archival-mono text-[8px] font-bold ${
                      isSelected
                        ? 'fill-red-950 dark:fill-red-300 font-extrabold underline'
                        : 'fill-stone-800 dark:fill-stone-200'
                    }`}
                  >
                    {loc.name.split('(')[0].trim()}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Sector Historical Investigation */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 bg-[#FFFEFA] border border-[#E8DDC8] rounded-xs shadow-xs text-[#2C2523]">
            <span className="text-[10px] uppercase tracking-widest text-[#6B5E59] block mb-1">
              {current.corps}
            </span>
            <h4 className="font-editorial-serif text-xl font-bold text-[#2C2523]">
              {current.name}
            </h4>
            <p className="font-editorial-serif italic text-xs text-[#5C524E] mt-1">
              {current.significance}
            </p>

            <div className="mt-4 pt-3 border-t border-[#E8DDC8]">
              <span className="text-[10px] uppercase tracking-wider text-[#8B252D] font-bold block mb-1">
                Tactical Engagement:
              </span>
              <p className="font-editorial-serif text-sm text-[#2C2523] leading-relaxed">
                {current.tacticalAction}
              </p>
            </div>
          </div>

          {/* Symmetrical Dual Repercussions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            <div className="p-3 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs shadow-xs">
              <span className="text-[10px] uppercase font-bold text-[#8B252D] block mb-1">
                Hanoi’s Result (Battlefield):
              </span>
              <p className="font-editorial-serif text-[#5C524E] leading-normal text-xs">
                {current.hanoiOutcome}
              </p>
            </div>

            <div className="p-3 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs shadow-xs">
              <span className="text-[10px] uppercase font-bold text-[#2C2523] block mb-1">
                Washington’s Result (Politics):
              </span>
              <p className="font-editorial-serif text-[#5C524E] leading-normal text-xs">
                {current.washingtonShock}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Central Historiographical Paradox */}
      <div className="p-4 bg-[#FAF7F2] border-l-4 border-[#8B252D] border-t border-r border-b border-[#E8DDC8] rounded-r-xs text-xs shadow-xs">
        <span className="font-bold uppercase tracking-wider text-[#8B252D] block mb-1">
          The 1968 Strategic Paradox:
        </span>
        <p className="font-editorial-serif text-[#2C2523] leading-relaxed text-sm">
          Militarily, the Tet Offensive was an overwhelming defeat for communist forces: an estimated 40,000 Viet Cong fighters were killed, and no spontaneous southern revolution occurred. Politically and psychologically, however, the simultaneous assaults across 36 provincial capitals destroyed the Johnson administration’s narrative of progress, precipitating Walter Cronkite’s declaration of stalemate, General Westmoreland’s replacement, and President Johnson’s decision not to seek re-election.
        </p>
      </div>
    </div>
  );
}
