'use client';

import React, { useState } from 'react';

export default function TonkinReconstruction() {
  const [selectedAspect, setSelectedAspect] = useState<'sensors' | 'cables' | 'context'>('cables');

  return (
    <div className="space-y-6">
      {/* Aspect Switcher Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 gap-3 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Forensic Incident Audit
          </span>
          <span className="text-stone-500 ml-2">&bull; Gulf of Tonkin (August 2 vs. August 4, 1964)</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-stone-400 mr-1">Lens:</span>
          {(['cables', 'sensors', 'context'] as const).map((aspect) => (
            <button
              key={aspect}
              onClick={() => setSelectedAspect(aspect)}
              className={`px-2.5 py-1 rounded-xs border transition-colors cursor-pointer capitalize ${
                selectedAspect === aspect
                  ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 font-bold'
                  : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-stone-500'
              }`}
            >
              {aspect === 'cables' ? 'Declassified Cables' : aspect === 'sensors' ? 'Physical Sensors' : 'Covert Context'}
            </button>
          ))}
        </div>
      </div>

      {/* Persistent Side-by-Side Comparative Dossier */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Incident 1: August 2 Confirmed Clash */}
        <div className="p-5 bg-white dark:bg-[#121110] border border-stone-300 dark:border-stone-800 rounded-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between font-archival-mono text-[10px] text-stone-500 pb-2 mb-2 border-b border-stone-100 dark:border-stone-800">
              <span className="font-bold uppercase text-stone-700 dark:text-stone-300">INCIDENT I &bull; DAYLIGHT</span>
              <span>02 AUG 1964 &bull; 15:00 LOCAL</span>
            </div>

            <h4 className="font-editorial-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              The Confirmed Naval Engagement
            </h4>
            <div className="font-archival-mono text-xs text-stone-500 mb-3">
              USS Maddox vs. 3 North Vietnamese Torpedo Boats
            </div>

            {selectedAspect === 'sensors' && (
              <div className="space-y-3 font-editorial-serif text-sm text-stone-800 dark:text-stone-200">
                <p>
                  <strong>Physical Damage:</strong> One spent 14.5mm machine-gun projectile was recovered from the hull of the USS Maddox.
                </p>
                <p>
                  <strong>Visual Sighting:</strong> Daylight conditions; carrier aircraft from the USS Ticonderoga visually confirmed and engaged three P-4 torpedo boats, damaging two and leaving one dead in the water.
                </p>
                <p>
                  <strong>Sensor Returns:</strong> Torpedo wakes were photographed by shipboard personnel; clear radar tracks recorded throughout the engagement.
                </p>
              </div>
            )}

            {selectedAspect === 'cables' && (
              <div className="space-y-3">
                <div className="p-3 bg-[#f2ede4] dark:bg-[#181614] border border-stone-200 dark:border-stone-800 font-archival-mono text-xs text-stone-800 dark:text-stone-200 space-y-1">
                  <div className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">
                    USS MADDOX OPERATIONAL LOG // CONFIRMED CONTACT
                  </div>
                  <p className="italic">
                    &ldquo;BEING APPROACHED BY HIGH SPEED WATERCRAFT... OPENED FIRE WITH 5-INCH GUNS AFTER ENEMY LAUNCHED TORPEDO AT RANGE 9,000 YARDS.&rdquo;
                  </p>
                </div>
                <p className="font-editorial-serif text-xs text-stone-600 dark:text-stone-400">
                  Naval records on August 2 show clear contemporaneous consensus that an engagement took place.
                </p>
              </div>
            )}

            {selectedAspect === 'context' && (
              <div className="space-y-3 font-editorial-serif text-sm text-stone-800 dark:text-stone-200">
                <p>
                  <strong>OPLAN 34A Raids:</strong> Just hours prior on the night of July 30–31, South Vietnamese commando gunboats staged covert amphibious sabotage raids against North Vietnamese coastal radar installations on Hon Me and Hon Ngu islands.
                </p>
                <p>
                  <strong>Hanoi’s Perception:</strong> North Vietnamese naval command treated the USS Maddox, operating in nearby waters on a DeSoto intelligence-gathering patrol, as directly coordinating the South Vietnamese raids.
                </p>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-[11px] font-archival-mono text-stone-500">
            Status: Historical consensus confirms real naval firefight.
          </div>
        </div>

        {/* Incident 2: August 4 Contested Incident */}
        <div className="p-5 bg-white dark:bg-[#121110] border border-stone-300 dark:border-stone-800 rounded-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between font-archival-mono text-[10px] text-stone-500 pb-2 mb-2 border-b border-stone-100 dark:border-stone-800">
              <span className="font-bold uppercase text-red-700 dark:text-red-400">INCIDENT II &bull; NIGHT STORM</span>
              <span>04 AUG 1964 &bull; 21:00 LOCAL</span>
            </div>

            <h4 className="font-editorial-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              The Contested &ldquo;Phantom&rdquo; Clash
            </h4>
            <div className="font-archival-mono text-xs text-stone-500 mb-3">
              USS Maddox &amp; USS Turner Joy Firing in Heavy Seas
            </div>

            {selectedAspect === 'sensors' && (
              <div className="space-y-3 font-editorial-serif text-sm text-stone-800 dark:text-stone-200">
                <p>
                  <strong>Physical Damage:</strong> Zero hits, zero shrapnel, zero physical debris, zero recovered enemy wreckage.
                </p>
                <p>
                  <strong>Pilot Sighting:</strong> Navy pilot Commander James Stockdale, who flew over the destroyers for two hours, testified: &ldquo;I had the best seat in the house... not a fourth-rate PT boat in sight.&rdquo;
                </p>
                <p>
                  <strong>Sensor Anomalies:</strong> Freak weather inversions created false radar ghost returns; sonar operators reported dozens of torpedoes that were later attributed to acoustic cavitation from the destroyers’ own high-speed rudders.
                </p>
              </div>
            )}

            {selectedAspect === 'cables' && (
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 font-archival-mono text-xs text-stone-900 dark:text-stone-100 space-y-1">
                  <div className="text-[10px] text-amber-800 dark:text-amber-400 uppercase tracking-widest font-bold">
                    CAPTAIN J.J. HERRICK FLASH CABLE // 04 AUG 1964
                  </div>
                  <p className="italic">
                    &ldquo;REVIEW OF ACTION MAKES MANY CONTACTS AND TORPEDOES FIRED APPEAR DOUBTFUL. FREAK WEATHER EFFECTS ON RADAR AND OVEREAGER SONARMEN MAY HAVE ACCOUNTED FOR MANY REPORTS... SUGGEST COMPLETE EVALUATION BEFORE ANY ACTION TAKEN.&rdquo;
                  </p>
                </div>
                <p className="font-editorial-serif text-xs text-stone-600 dark:text-stone-400">
                  Captain Herrick sent this cable urging caution hours before LBJ announced retaliatory bombing to the American public.
                </p>
              </div>
            )}

            {selectedAspect === 'context' && (
              <div className="space-y-3 font-editorial-serif text-sm text-stone-800 dark:text-stone-200">
                <p>
                  <strong>SIGINT Intercept Misread:</strong> A 2001 NSA cryptologic study by Robert Hanyok concluded that communications intelligence intercepts were selectively translated and compiled by intelligence staff to support the conclusion of an attack while contradictory cables were omitted.
                </p>
                <p>
                  <strong>Political Pressure:</strong> With Barry Goldwater campaigning on an aggressive platform in the 1964 presidential election, the Johnson administration sought to preempt accusations of being &ldquo;soft on communism.&rdquo;
                </p>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-[11px] font-archival-mono text-amber-800 dark:text-amber-400 font-semibold">
            Status: Declassified naval and NSA records indicate no attack occurred on August 4.
          </div>
        </div>
      </div>

      {/* The Synchronized Timeline of August 4, 1964 */}
      <div className="p-4 bg-stone-100 dark:bg-[#181614] border border-stone-200 dark:border-stone-800 rounded-xs">
        <span className="font-archival-mono text-[10px] uppercase tracking-widest text-stone-500 font-bold block mb-3">
          Chronology of a Crisis · August 4, 1964 (Washington Time)
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-sans">
          <div className="p-3 bg-white dark:bg-[#121110] border border-stone-200 dark:border-stone-800 rounded-xs">
            <span className="font-archival-mono font-bold text-stone-500 block mb-1">09:12 AM EST</span>
            <p className="font-editorial-serif text-stone-800 dark:text-stone-200">
              Initial reports arrive in Pentagon of torpedo attack on USS Maddox and Turner Joy in progress.
            </p>
          </div>

          <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-xs">
            <span className="font-archival-mono font-bold text-amber-800 dark:text-amber-400 block mb-1">01:27 PM EST</span>
            <p className="font-editorial-serif text-stone-900 dark:text-stone-100">
              Capt. Herrick’s cable urges restraint: <em>&ldquo;Many contacts doubtful... suggest complete evaluation.&rdquo;</em>
            </p>
          </div>

          <div className="p-3 bg-white dark:bg-[#121110] border border-stone-200 dark:border-stone-800 rounded-xs">
            <span className="font-archival-mono font-bold text-stone-500 block mb-1">05:00 PM EST</span>
            <p className="font-editorial-serif text-stone-800 dark:text-stone-200">
              McNamara and Joint Chiefs order Operation Pierce Arrow: 64 retaliatory air sorties against North Vietnamese torpedo boat bases.
            </p>
          </div>

          <div className="p-3 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 rounded-xs">
            <span className="font-archival-mono font-bold text-stone-300 dark:text-stone-700 block mb-1">11:34 PM EST</span>
            <p className="font-editorial-serif text-xs leading-normal">
              LBJ announces airstrikes on television, stating U.S. ships were targets of &ldquo;unprovoked, open aggression.&rdquo;
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 text-xs font-editorial-serif text-stone-600 dark:text-stone-400 italic">
          Within 72 hours of the televised address, Congress passed the Gulf of Tonkin Resolution (416–0 in the House, 88–2 in the Senate), serving as the functional constitutional authorization for the commitment of over 500,000 American combat troops.
        </div>
      </div>
    </div>
  );
}
