'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChapterData } from '@/types/vietnam';

interface TonkinPrototypeProps {
  chapter: ChapterData;
  nextChapterId?: string;
  nextChapterTitle?: string;
}

export default function TonkinPrototype({
  chapter,
  nextChapterId,
  nextChapterTitle,
}: TonkinPrototypeProps) {
  // Scene 2: Interactive Radar / Bridge Time scrubber (minutes into the action)
  const [radarTime, setRadarTime] = useState<number>(1); // 0: 21:30, 1: 22:15, 2: 23:00

  // Scene 4: Washington Clock Step (0: 09:12 AM, 1: 01:27 PM, 2: 05:00 PM, 3: 11:34 PM)
  const [washingtonStep, setWashingtonStep] = useState<number>(1);

  // Scene 6: Deeper Investigation Destination Tab
  const [investigationTab, setInvestigationTab] = useState<'documents' | 'hanoi' | 'historians' | 'monograph'>('documents');

  const scrollToScene = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const radarMoments = [
    {
      time: '21:30 Local',
      title: 'Initial Radar Contacts in Tropical Squall',
      blips: [
        { x: 190, y: 140, label: 'Ghost Blip' },
        { x: 310, y: 160, label: 'Radar Echo' },
      ],
      sonarReport: 'Heavy sea state. Sonar operators report intermittent acoustic spikes.',
      bridgeAction: 'Maddox and Turner Joy alter course at 20 knots into 6-foot swells.',
    },
    {
      time: '22:15 Local',
      title: 'General Quarters & The Sonar Panic',
      blips: [
        { x: 170, y: 200, label: 'Contact 1' },
        { x: 230, y: 180, label: 'Contact 2' },
        { x: 270, y: 240, label: 'Cavitation' },
      ],
      sonarReport: 'Sonar reports torpedo in the water! Turn hard starboard! 22 torpedoes reported over 90 minutes.',
      bridgeAction: 'Both destroyers open sustained fire, discharging 652 shells into black, rain-swept water.',
    },
    {
      time: '23:00 Local',
      title: 'Cease Fire & The Disappearing Enemy',
      blips: [],
      sonarReport: 'Contacts disappear. No engine noises heard. Sonar admits acoustic noise from own rudder.',
      bridgeAction: 'Carrier pilots overhead report no wakes, no searchlights, and no enemy torpedo boats in sight.',
    },
  ];

  const washingtonTimeline = [
    {
      time: '09:12 AM EST',
      label: 'Flash Report Arrives',
      location: 'Pentagon War Room',
      headline: 'Initial Flash: "Destroyers under continuous torpedo attack."',
      detail:
        'Defense Secretary Robert McNamara briefs President Johnson. The initial naval dispatch claims multiple torpedoes fired and enemy boats engaged in international waters.',
    },
    {
      time: '01:27 PM EST',
      label: 'The Doubt Telegram',
      location: 'White House Situation Room',
      headline: 'Capt. Herrick’s Warning Cable Arrives in Washington',
      detail:
        'Task Group Commander Capt. John Herrick cables CINCPAC urging a complete halt: "Review of action makes many contacts and torpedoes fired appear doubtful... Suggest complete evaluation before any action taken."',
    },
    {
      time: '05:00 PM EST',
      label: 'Strikes Finalized',
      location: 'The Oval Office',
      headline: 'LBJ and McNamara Order Operation Pierce Arrow',
      detail:
        'Despite naval doubts and pilot reports of zero enemy sightings, Johnson orders 64 retaliatory air strike sorties against North Vietnamese torpedo boat bases and fuel depots.',
    },
    {
      time: '11:34 PM EST',
      label: 'The National Address',
      location: 'White House Broadcast Studio',
      headline: 'Johnson Addresses the Nation on Live Television',
      detail:
        'LBJ announces airstrikes are underway for "unprovoked open aggression." Three days later, Congress passes the Gulf of Tonkin Resolution, surrendering constitutional war-making authority.',
    },
  ];

  return (
    <div className="w-full bg-[#fbf8f2] dark:bg-[#0c0d10] text-stone-900 dark:text-stone-100 transition-colors selection:bg-amber-200 dark:selection:bg-amber-900">
      {/* ─────────────────────────────────────────────────────────────
          SCENE 1: THE NIGHT
          Atmospheric cold open. Dark ocean canvas. Sparse, massive text.
      ───────────────────────────────────────────────────────────── */}
      <section
        id="scene-1"
        className="min-h-screen scroll-mt-14 bg-[#060a12] text-stone-100 flex flex-col justify-between p-6 sm:p-12 lg:p-20 relative overflow-hidden"
      >
        {/* Subtle background radar ring animation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <div className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full border border-sky-400/30 flex items-center justify-center">
            <div className="w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] rounded-full border border-sky-400/20 flex items-center justify-center">
              <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-sky-400/20" />
            </div>
          </div>
        </div>

        {/* Scene 1 Header */}
        <div className="relative z-10 font-archival-mono text-xs uppercase tracking-widest text-stone-400">
          Scene 01 &bull; August 4, 1964 &bull; 21:00 Hours Local &bull; Gulf of Tonkin
        </div>

        {/* Cold Open Hero Typography */}
        <div className="relative z-10 max-w-4xl space-y-6 my-auto py-12">
          <h1 className="font-editorial-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Something was happening in the Gulf of Tonkin.
          </h1>
          <p className="font-editorial-serif text-2xl sm:text-3xl text-stone-300 leading-relaxed max-w-2xl font-light">
            Washington was about to decide what it meant.
          </p>
          <div className="pt-4 text-sm font-sans text-stone-400 max-w-xl leading-relaxed">
            In pitch-black monsoon rain, two American destroyers fired 652 shells into an empty sea.
            Within 72 hours, Congress granted a blank check for war.
          </div>
        </div>

        {/* Single Forward Action */}
        <div className="relative z-10 pt-8 border-t border-stone-800 flex items-center justify-between">
          <span className="font-archival-mono text-xs text-stone-500 uppercase tracking-widest">
            A Forensic Investigation by America Unwrapped
          </span>
          <button
            onClick={() => scrollToScene('scene-2')}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-950 font-archival-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all rounded-xs cursor-pointer shadow-lg"
          >
            <span>Enter the Night &darr;</span>
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SCENE 2: WHAT WAS REPORTED
          The chaos of the bridge. The interactive radar/sonar scope.
      ───────────────────────────────────────────────────────────── */}
      <section
        id="scene-2"
        className="min-h-screen scroll-mt-14 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto border-b border-stone-300 dark:border-stone-800 space-y-12"
      >
        <div className="max-w-3xl space-y-3">
          <div className="font-archival-mono text-xs uppercase tracking-widest text-red-800 dark:text-red-400 font-bold">
            Scene 02 &bull; The Confusion on the Bridge
          </div>
          <h2 className="font-editorial-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            What was reported in the dark?
          </h2>
          <p className="font-editorial-serif text-lg sm:text-xl text-stone-700 dark:text-stone-300 leading-relaxed">
            The destroyers USS <em>Maddox</em> and USS <em>Turner Joy</em> were operating in heavy sea swells and torrential rain. Lookouts could see nothing beyond the spray of their own bows.
          </p>
        </div>

        {/* Interactive Bridge Radar Console */}
        <div className="bg-[#0b101b] text-stone-100 border border-stone-800 rounded-sm p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Time Scrubber */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-800 gap-4">
            <div>
              <span className="font-archival-mono text-[10px] uppercase tracking-widest text-sky-400 block">
                Combat Information Center (CIC) &bull; Sensor Feed
              </span>
              <div className="font-editorial-serif text-xl font-bold text-white mt-0.5">
                {radarMoments[radarTime].title}
              </div>
            </div>

            <div className="flex items-center gap-2 font-archival-mono text-xs">
              <span className="text-stone-400 mr-1">Scrub Night Hours:</span>
              {radarMoments.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setRadarTime(idx)}
                  className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer ${
                    radarTime === idx
                      ? 'bg-sky-400 text-stone-950 border-sky-400 font-bold'
                      : 'bg-[#131b2e] text-stone-300 border-stone-700 hover:border-stone-500'
                  }`}
                >
                  {m.time.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Dual Scope: Radar Canvas on Left, Audio/Log Feed on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* The Radar CRT Display */}
            <div className="md:col-span-6 flex items-center justify-center p-4 bg-[#070b14] border border-stone-800 rounded-full aspect-square max-w-[360px] mx-auto relative overflow-hidden shadow-inner">
              {/* Radar CRT Grid */}
              <div className="absolute inset-4 rounded-full border border-sky-500/20 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border border-sky-500/20 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full border border-sky-500/20" />
                </div>
              </div>
              {/* Sweep Line */}
              <div className="absolute inset-0 bg-conic from-sky-400/20 via-transparent to-transparent rounded-full animate-spin [animation-duration:4s] pointer-events-none" />

              {/* Radar Vector Overlay */}
              <svg viewBox="0 0 360 360" className="w-full h-full relative z-10 select-none">
                <line x1="0" y1="180" x2="360" y2="180" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="180" y1="0" x2="180" y2="360" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.3" />

                {/* Own Ships (Center) */}
                <circle cx="180" cy="180" r="4" fill="#38bdf8" />
                <text x="180" y="196" textAnchor="middle" className="font-archival-mono text-[9px] fill-sky-300 font-bold">
                  MADDOX &amp; TURNER JOY
                </text>

                {/* Active Radar Blips for selected moment */}
                {radarMoments[radarTime].blips.map((blip, i) => (
                  <g key={i} className="animate-pulse">
                    <circle cx={blip.x} cy={blip.y} r="5" fill="#f87171" />
                    <text x={blip.x + 8} y={blip.y + 3} className="font-archival-mono text-[8px] fill-red-300 font-bold">
                      {blip.label}
                    </text>
                  </g>
                ))}

                {radarMoments[radarTime].blips.length === 0 && (
                  <text x="180" y="140" textAnchor="middle" className="font-archival-mono text-[10px] fill-stone-500 italic">
                    No confirmed contacts
                  </text>
                )}
              </svg>
            </div>

            {/* The Bridge Log & Sensor Dispatches */}
            <div className="md:col-span-6 space-y-6">
              <div className="space-y-2 border-l-2 border-sky-400 pl-4 py-1">
                <span className="font-archival-mono text-[10px] uppercase tracking-widest text-sky-400 font-bold block">
                  Sonar Log Entry ({radarMoments[radarTime].time})
                </span>
                <p className="font-editorial-serif text-stone-200 text-base leading-relaxed italic">
                  &ldquo;{radarMoments[radarTime].sonarReport}&rdquo;
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-stone-600 pl-4 py-1">
                <span className="font-archival-mono text-[10px] uppercase tracking-widest text-stone-400 font-bold block">
                  Bridge Tactical Maneuver
                </span>
                <p className="font-editorial-serif text-stone-300 text-sm leading-relaxed">
                  {radarMoments[radarTime].bridgeAction}
                </p>
              </div>

              <div className="p-4 bg-[#111927] border border-stone-800 rounded-xs text-xs font-sans text-stone-400 space-y-1">
                <span className="font-archival-mono text-[10px] uppercase tracking-wider text-amber-400 font-bold block">
                  The Critical Optical Reality:
                </span>
                <p>
                  Zero searchlight beams illuminated an enemy boat. Zero bullet hits struck the hull of either ship. Every decision on the bridge was made by watching green blips dance across a cathode-ray tube in a storm.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition to Scene 3 */}
        <div className="text-center pt-8">
          <button
            onClick={() => scrollToScene('scene-3')}
            className="inline-flex items-center gap-2 text-xs font-archival-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          >
            <span>Proceed to Scene 03: The Daylight Audit &darr;</span>
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SCENE 3: THE STORY STARTS BREAKING APART
          The discrepancy revealed. Daylight arrives.
      ───────────────────────────────────────────────────────────── */}
      <section
        id="scene-3"
        className="min-h-screen scroll-mt-14 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto border-b border-stone-300 dark:border-stone-800 space-y-12"
      >
        <div className="max-w-3xl space-y-3">
          <div className="font-archival-mono text-xs uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold">
            Scene 03 &bull; The Story Breaks Apart
          </div>
          <h2 className="font-editorial-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Daylight arrives. The evidence vanishes.
          </h2>
          <p className="font-editorial-serif text-lg sm:text-xl text-stone-700 dark:text-stone-300 leading-relaxed">
            As the sun rose over the South China Sea on August 5, officers on the destroyers and pilots in the air began examining what had actually taken place.
          </p>
        </div>

        {/* Visual Forensic Matrix: Claimed vs Proven */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: What Was Claimed in the Storm */}
          <div className="border-t-2 border-stone-800 dark:border-stone-200 pt-6 space-y-6">
            <div className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 font-bold">
              The Night Claim &bull; August 4
            </div>

            <div className="space-y-4 font-editorial-serif">
              <div>
                <div className="text-3xl font-bold text-stone-900 dark:text-stone-100">22 Torpedoes</div>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                  Reported by sonar operators as high-speed acoustic tracks closing on the destroyers.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-stone-900 dark:text-stone-100">652 Rounds Fired</div>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                  Both destroyers expended hundreds of rounds of 5-inch and 3-inch ammunition into radar blips.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-stone-900 dark:text-stone-100">&ldquo;Unprovoked Aggression&rdquo;</div>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                  Washington framed the reported attack as a brazen daylight and nighttime assault in international waters.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: What the Forensic Record Proved */}
          <div className="border-t-2 border-red-700 dark:border-red-500 pt-6 space-y-6 bg-red-50/40 dark:bg-red-950/10 p-6 rounded-xs">
            <div className="font-archival-mono text-xs uppercase tracking-widest text-red-800 dark:text-red-400 font-bold">
              The Forensic Reality &bull; Proven by Records
            </div>

            <div className="space-y-4 font-editorial-serif">
              <div>
                <div className="text-3xl font-bold text-red-900 dark:text-red-300">0 Physical Hits</div>
                <p className="text-sm text-stone-700 dark:text-stone-300 mt-1">
                  Neither destroyer had a single bullet scratch, shell fragment, or torpedo dent. Zero debris was found.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-red-900 dark:text-red-300">Rudder Cavitation</div>
                <p className="text-sm text-stone-700 dark:text-stone-300 mt-1">
                  Naval investigators later proved the sonar heard the <em>Maddox&rsquo;s</em> own high-speed rudders churning water during sharp turns.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-red-900 dark:text-red-300">Pilot Testified: Nothing</div>
                <p className="text-sm text-stone-700 dark:text-stone-300 mt-1">
                  Navy Commander James Stockdale flying 1,000 feet above: <em>&ldquo;I had the best seat in the house... not a fourth-rate PT boat in sight.&rdquo;</em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Decisive Quote Plate */}
        <div className="p-6 bg-stone-100 dark:bg-[#15171e] border-l-4 border-amber-600 dark:border-amber-400 rounded-r-xs space-y-2">
          <blockquote className="font-editorial-serif text-lg sm:text-xl italic text-stone-800 dark:text-stone-200 leading-relaxed">
            &ldquo;It is not simply that there is a different story as to what happened; it is that no attack happened that night.&rdquo;
          </blockquote>
          <div className="font-archival-mono text-xs text-stone-600 dark:text-stone-400">
            &mdash; Robert J. Hanyok, Historian, Center for Cryptologic History, National Security Agency (Declassified Study, 2001)
          </div>
        </div>

        {/* Transition to Scene 4 */}
        <div className="text-center pt-8">
          <button
            onClick={() => scrollToScene('scene-4')}
            className="inline-flex items-center gap-2 text-xs font-archival-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          >
            <span>Proceed to Scene 04: The Clock in Washington &darr;</span>
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SCENE 4: WASHINGTON
          The clock. The doubt telegram arrives. Bombing orders prepared.
      ───────────────────────────────────────────────────────────── */}
      <section
        id="scene-4"
        className="min-h-screen scroll-mt-14 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto border-b border-stone-300 dark:border-stone-800 space-y-12"
      >
        <div className="max-w-3xl space-y-3">
          <div className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 font-bold">
            Scene 04 &bull; The White House &amp; The Clock
          </div>
          <h2 className="font-editorial-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            The race against doubt.
          </h2>
          <p className="font-editorial-serif text-lg sm:text-xl text-stone-700 dark:text-stone-300 leading-relaxed">
            In Washington, reports of the attack arrived on the morning of August 4. Before noon, doubt had already arrived with them. Follow the clock.
          </p>
        </div>

        {/* Interactive Washington Clock Tracker */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-archival-mono text-xs">
            {washingtonTimeline.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setWashingtonStep(idx)}
                className={`p-3 text-left border-t-2 transition-all cursor-pointer ${
                  washingtonStep === idx
                    ? 'border-stone-900 dark:border-stone-100 font-bold text-stone-950 dark:text-stone-100 bg-stone-100/60 dark:bg-stone-900/60'
                    : 'border-stone-200 dark:border-stone-800 text-stone-400 hover:text-stone-700'
                }`}
              >
                <div className="text-[10px] text-stone-400">{item.time}</div>
                <div className="text-xs mt-1">{item.label}</div>
              </button>
            ))}
          </div>

          {/* Active Moment Detail */}
          <div className="p-6 sm:p-8 bg-white dark:bg-[#12141a] border border-stone-300 dark:border-stone-800 rounded-xs space-y-4">
            <div className="flex items-center justify-between font-archival-mono text-xs text-stone-500">
              <span className="font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                {washingtonTimeline[washingtonStep].location}
              </span>
              <span>{washingtonTimeline[washingtonStep].time}</span>
            </div>

            <h3 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              {washingtonTimeline[washingtonStep].headline}
            </h3>

            <p className="font-editorial-serif text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed max-w-3xl">
              {washingtonTimeline[washingtonStep].detail}
            </p>
          </div>
        </div>

        {/* Real Archival Telegram Facsimile Reproduction */}
        <div className="space-y-3">
          <div className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 font-bold">
            The Archival Cable Received at 1:27 PM EST:
          </div>

          <div className="p-6 sm:p-8 bg-[#f5f1e8] dark:bg-[#16181f] border border-stone-300 dark:border-stone-700 font-archival-mono text-xs text-stone-900 dark:text-stone-200 space-y-3 rounded-xs shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-stone-300 dark:border-stone-700 text-[10px] text-stone-500">
              <span className="font-bold text-red-800 dark:text-red-400 tracking-widest uppercase">
                TOP SECRET // OPERATIONAL IMMEDIATE FLASH
              </span>
              <span>REF NO. 041327Z AUG 64</span>
            </div>
            <div className="text-[11px] text-stone-600 dark:text-stone-400">
              FROM: CTG 72.1 (CAPT HERRICK ON USS MADDOX) // TO: CINCPAC
            </div>
            <div className="p-3 bg-white/70 dark:bg-black/30 border border-stone-200 dark:border-stone-800 rounded-xs leading-relaxed text-xs sm:text-sm italic">
              &ldquo;REVIEW OF ACTION MAKES MANY CONTACTS AND TORPEDOES FIRED APPEAR DOUBTFUL. FREAK WEATHER EFFECTS ON RADAR AND OVEREAGER SONARMEN MAY HAVE ACCOUNTED FOR MANY REPORTS. NO ACTUAL VISUAL SIGHTINGS BY MADDOX. SUGGEST COMPLETE EVALUATION BEFORE ANY FURTHER ACTION TAKEN.&rdquo;
            </div>
            <div className="text-[11px] text-stone-500 font-editorial-serif">
              * Robert McNamara had this document on his desk when he finalized the targets for 64 retaliatory air strike sorties.
            </div>
          </div>
        </div>

        {/* Transition to Scene 5 */}
        <div className="text-center pt-8">
          <button
            onClick={() => scrollToScene('scene-5')}
            className="inline-flex items-center gap-2 text-xs font-archival-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          >
            <span>Proceed to Scene 05: The Decision &darr;</span>
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SCENE 5: THE DECISION & THE CASUALTY CHAIN
          Retaliation → Congress → Escalation. One visual causal chain.
      ───────────────────────────────────────────────────────────── */}
      <section
        id="scene-5"
        className="min-h-screen scroll-mt-14 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto border-b border-stone-300 dark:border-stone-800 space-y-12"
      >
        <div className="max-w-3xl space-y-3">
          <div className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 font-bold">
            Scene 05 &bull; The Consequence
          </div>
          <h2 className="font-editorial-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            How doubt became a decade of war.
          </h2>
          <p className="font-editorial-serif text-lg sm:text-xl text-stone-700 dark:text-stone-300 leading-relaxed">
            The Tonkin incident mattered not because of what happened in the Gulf, but because of what Washington did with the report.
          </p>
        </div>

        {/* One Visual Causal Chain */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
          <div className="border-t-2 border-stone-800 dark:border-stone-200 pt-4 space-y-2">
            <span className="font-archival-mono text-[10px] uppercase font-bold text-stone-500">Step 1: The Strike</span>
            <h4 className="font-editorial-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Retaliatory Bombing
            </h4>
            <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-400 leading-normal">
              Operation Pierce Arrow drops bombs on four North Vietnamese naval bases and a major oil depot within 24 hours.
            </p>
          </div>

          <div className="border-t-2 border-stone-800 dark:border-stone-200 pt-4 space-y-2">
            <span className="font-archival-mono text-[10px] uppercase font-bold text-stone-500">Step 2: The Blank Check</span>
            <h4 className="font-editorial-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Resolution 88-408
            </h4>
            <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-400 leading-normal">
              Drafted months earlier, the resolution passes the House 416–0 and Senate 88–2, giving LBJ authority to &ldquo;take all necessary measures.&rdquo;
            </p>
          </div>

          <div className="border-t-2 border-amber-600 dark:border-amber-400 pt-4 space-y-2">
            <span className="font-archival-mono text-[10px] uppercase font-bold text-amber-800 dark:text-amber-400">Step 3: The Dissent</span>
            <h4 className="font-editorial-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Wayne Morse Warns
            </h4>
            <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-400 leading-normal">
              Senator Morse on the Senate floor: <em>&ldquo;I believe that history will record that we made a grave mistake in subverting the Constitution.&rdquo;</em>
            </p>
          </div>

          <div className="border-t-2 border-red-700 dark:border-red-500 pt-4 space-y-2 bg-red-50/50 dark:bg-red-950/20 p-4 rounded-r-xs">
            <span className="font-archival-mono text-[10px] uppercase font-bold text-red-800 dark:text-red-400">Step 4: The Escalation</span>
            <h4 className="font-editorial-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              543,000 Troops
            </h4>
            <p className="font-editorial-serif text-sm text-stone-800 dark:text-stone-200 leading-normal">
              Armed with the resolution, LBJ used it in 1965 to deploy Marines and launch Rolling Thunder without returning to Congress.
            </p>
          </div>
        </div>

        {/* Transition to Scene 6 */}
        <div className="text-center pt-8">
          <button
            onClick={() => scrollToScene('scene-6')}
            className="inline-flex items-center gap-2 text-xs font-archival-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          >
            <span>Proceed to Scene 06: Deeper Investigation &darr;</span>
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SCENE 6: INVESTIGATE
          Destinations into deeper material: Documents, Hanoi, Historians.
      ───────────────────────────────────────────────────────────── */}
      <section id="scene-6" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto space-y-12 scroll-mt-14">
        <div className="max-w-3xl space-y-3">
          <div className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 font-bold">
            Scene 06 &bull; The Historical Archive
          </div>
          <h2 className="font-editorial-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Investigate the record.
          </h2>
          <p className="font-editorial-serif text-lg sm:text-xl text-stone-700 dark:text-stone-300 leading-relaxed">
            You now understand what happened, how the story broke apart, and why Washington acted. Choose where you want to inspect primary evidence.
          </p>
        </div>

        {/* Four Investigation Destination Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-stone-200 dark:border-stone-800 pb-3 font-archival-mono text-xs">
          {[
            { id: 'documents', label: '1. Declassified Telegrams' },
            { id: 'hanoi', label: '2. What Hanoi Knew' },
            { id: 'historians', label: '3. Historians & McNamara' },
            { id: 'monograph', label: '4. Full Academic Monograph' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setInvestigationTab(tab.id as typeof investigationTab)}
              className={`px-4 py-2 border transition-all cursor-pointer rounded-xs ${
                investigationTab === tab.id
                  ? 'bg-stone-900 text-stone-50 border-stone-900 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-100 font-bold'
                  : 'bg-white dark:bg-[#12141a] text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-stone-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Declassified Telegrams & NSA Study */}
        {investigationTab === 'documents' && (
          <div className="space-y-6 pt-2">
            <div className="p-6 bg-white dark:bg-[#12141a] border border-stone-200 dark:border-stone-800 rounded-xs space-y-3">
              <span className="font-archival-mono text-[10px] uppercase tracking-widest text-red-800 dark:text-red-400 font-bold">
                DOCUMENT 01 &bull; CAPT. HERRICK CABLE (13:27 EST, AUG 4, 1964)
              </span>
              <h4 className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                &ldquo;Freak weather effects... suggest complete evaluation&rdquo;
              </h4>
              <p className="font-editorial-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Captain Herrick’s immediate post-action evaluation conceded that overeager sonarmen and radar ghost returns accounted for reports, and explicitly cautioned Washington against taking military action until a daylight assessment could occur.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#12141a] border border-stone-200 dark:border-stone-800 rounded-xs space-y-3">
              <span className="font-archival-mono text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                DOCUMENT 02 &bull; NSA CRYPTOLOGIC QUARTERLY (ROBERT HANYOK, 2001)
              </span>
              <h4 className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                &ldquo;Skunks, Bogies, Silent Hounds, and the Flying Fish&rdquo;
              </h4>
              <p className="font-editorial-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Historian Robert Hanyok proved through SIGINT intercept logs that communications intercepted on August 4 were translations of messages sent on August 2 regarding the salvage of damaged boats, which mid-level intelligence officers retroactively altered to look like current combat dispatches.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: What Hanoi Knew */}
        {investigationTab === 'hanoi' && (
          <div className="space-y-4 pt-2 max-w-3xl font-editorial-serif text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed">
            <p>
              Official Vietnamese military archives confirm that on <strong>August 2</strong>, North Vietnamese Torpedo Boat Squadron 135 was ordered to attack the USS Maddox after the island of Hon Me had been shelled by southern commandos in Operation 34A. Hanoi viewed the two operations as inextricably linked.
            </p>
            <p>
              However, Vietnamese naval logs and communications for <strong>August 4</strong> demonstrate conclusively that no torpedo boats were dispatched. Two boats were undergoing repairs at Haiphong; a third was docked for maintenance.
            </p>
            <p>
              Rather than deterring Hanoi, the retaliatory American airstrikes (Operation Pierce Arrow) convinced Party First Secretary <strong>Le Duan</strong> that full-scale American war was inevitable. Hanoi responded by dispatching the first regular North Vietnamese Army (PAVN) infantry regiments south down the Ho Chi Minh Trail.
            </p>
          </div>
        )}

        {/* Tab 3: Historians & McNamara */}
        {investigationTab === 'historians' && (
          <div className="space-y-6 pt-2 max-w-3xl">
            <div className="p-5 bg-white dark:bg-[#12141a] border border-stone-200 dark:border-stone-800 rounded-xs space-y-2">
              <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 font-bold block">
                Robert S. McNamara &bull; The Fog of War (2003 Interview)
              </span>
              <p className="font-editorial-serif text-base italic text-stone-800 dark:text-stone-200 leading-relaxed">
                &ldquo;It was just confusion, and events afterward showed that our judgment that we’d been attacked that day was wrong. It didn’t happen.&rdquo;
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-[#12141a] border border-stone-200 dark:border-stone-800 rounded-xs space-y-2">
              <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 font-bold block">
                Edwin E. Moise &bull; Tonkin Gulf and the Escalation of the Vietnam War (1996)
              </span>
              <p className="font-editorial-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Moise conducted the definitive physical and radar reconstruction of the battle, proving that the radar returns were caused by temperature inversions over the Gulf of Tonkin, while sonar operators were deceived by acoustic reflections of their own vessel.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Full Monograph */}
        {investigationTab === 'monograph' && (
          <div className="space-y-6 pt-2 max-w-3xl font-editorial-serif text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-[1.85]">
            {chapter.whatHappened.narrative.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="pt-6 border-t border-stone-200 dark:border-stone-800 font-archival-mono text-xs text-stone-500 space-y-2">
              <span className="uppercase font-bold tracking-wider block">Scholarly References:</span>
              {chapter.citations.map((c) => (
                <div key={c.id}>
                  [{c.marker}] {c.citation}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Forward Chapter Bridge */}
        <div className="pt-12 border-t-2 border-stone-900 dark:border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 block">
              The Next Chapter in the Conflict:
            </span>
            <h3 className="font-editorial-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
              Chapter 05: Americanization &amp; Attrition (1965–1967)
            </h3>
            <p className="font-editorial-serif text-sm text-stone-600 dark:text-stone-400 mt-0.5">
              With the blank check in hand, how did Washington calculate it could break Hanoi’s will to fight?
            </p>
          </div>

          {nextChapterId && (
            <Link
              href={`/vietnam/${nextChapterId}`}
              className="inline-flex items-center justify-center shrink-0 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-stone-100 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 font-archival-mono text-xs font-bold uppercase tracking-wider transition-colors rounded-sm shadow-md"
            >
              {nextChapterTitle ? `Proceed to ${nextChapterTitle} →` : 'Chapter 05: Attrition →'}
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
