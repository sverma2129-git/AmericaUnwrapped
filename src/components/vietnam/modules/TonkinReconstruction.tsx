'use client';

import React, { useState } from 'react';

export default function TonkinReconstruction() {
  const [selectedAspect, setSelectedAspect] = useState<'sensors' | 'cables' | 'context'>('cables');

  return (
    <div className="space-y-6">
      {/* Aspect Switcher Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8DDC8] gap-3 text-xs">
        <div>
          <span className="font-bold uppercase tracking-wider text-[#2C2523]">
            Forensic Incident Audit
          </span>
          <span className="text-[#6B5E59] ml-2">&bull; Gulf of Tonkin (August 2 vs. August 4, 1964)</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[#6B5E59] mr-1">Lens:</span>
          {(['cables', 'sensors', 'context'] as const).map((aspect) => (
            <button
              key={aspect}
              onClick={() => setSelectedAspect(aspect)}
              className={`px-2.5 py-1 rounded-xs border transition-colors cursor-pointer capitalize text-xs ${
                selectedAspect === aspect
                  ? 'bg-[#8B252D] text-white border-[#8B252D] font-bold shadow-xs'
                  : 'bg-[#FFFEFA] text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
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
        <div className="p-5 bg-[#FFFEFA] border border-[#E8DDC8] rounded-xs flex flex-col justify-between space-y-4 shadow-xs">
          <div>
            <div className="flex items-center justify-between text-[10px] text-[#6B5E59] pb-2 mb-2 border-b border-[#E8DDC8]">
              <span className="font-bold uppercase text-[#2C2523]">INCIDENT I &bull; DAYLIGHT</span>
              <span>02 AUG 1964 &bull; 15:00 LOCAL</span>
            </div>

            <h4 className="font-editorial-serif text-lg font-bold text-[#2C2523]">
              The Confirmed Naval Engagement
            </h4>
            <div className="text-xs text-[#6B5E59] mb-3">
              USS Maddox vs. 3 North Vietnamese Torpedo Boats
            </div>

            {selectedAspect === 'sensors' && (
              <div className="space-y-3 font-editorial-serif text-sm text-[#2C2523]">
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
                <div className="p-3 bg-[#FAF7F2] border border-[#E8DDC8] font-mono text-xs text-[#2C2523] space-y-1 rounded-xs">
                  <div className="text-[10px] text-[#6B5E59] uppercase tracking-widest font-bold">
                    USS MADDOX OPERATIONAL LOG // CONFIRMED CONTACT
                  </div>
                  <p className="italic">
                    &ldquo;BEING APPROACHED BY HIGH SPEED WATERCRAFT... OPENED FIRE WITH 5-INCH GUNS AFTER ENEMY LAUNCHED TORPEDO AT RANGE 9,000 YARDS.&rdquo;
                  </p>
                </div>
                <p className="font-editorial-serif text-xs text-[#5C524E]">
                  Naval records on August 2 show clear contemporaneous consensus that an engagement took place.
                </p>
              </div>
            )}

            {selectedAspect === 'context' && (
              <div className="space-y-3 font-editorial-serif text-sm text-[#2C2523]">
                <p>
                  <strong>OPLAN 34A Raids:</strong> Just hours prior on the night of July 30–31, South Vietnamese commando gunboats staged covert amphibious sabotage raids against North Vietnamese coastal radar installations on Hon Me and Hon Ngu islands.
                </p>
                <p>
                  <strong>Hanoi’s Perception:</strong> North Vietnamese naval command treated the USS Maddox, operating in nearby waters on a DeSoto intelligence-gathering patrol, as directly coordinating the South Vietnamese raids.
                </p>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-[#E8DDC8] text-[11px] text-[#6B5E59]">
            Status: Historical consensus confirms real naval firefight.
          </div>
        </div>

        {/* Incident 2: August 4 Contested Incident */}
        <div className="p-5 bg-[#FFFEFA] border border-[#E8DDC8] rounded-xs flex flex-col justify-between space-y-4 shadow-xs">
          <div>
            <div className="flex items-center justify-between text-[10px] text-[#6B5E59] pb-2 mb-2 border-b border-[#E8DDC8]">
              <span className="font-bold uppercase text-[#8B252D]">INCIDENT II &bull; NIGHT STORM</span>
              <span>04 AUG 1964 &bull; 21:00 LOCAL</span>
            </div>

            <h4 className="font-editorial-serif text-lg font-bold text-[#2C2523]">
              The Contested &ldquo;Phantom&rdquo; Clash
            </h4>
            <div className="text-xs text-[#6B5E59] mb-3">
              USS Maddox &amp; USS Turner Joy Firing in Heavy Seas
            </div>

            {selectedAspect === 'sensors' && (
              <div className="space-y-3 font-editorial-serif text-sm text-[#2C2523]">
                <p>
                  <strong>Physical Damage:</strong> Zero hits, zero shrapnel, zero physical debris, zero recovered enemy wreckage.
                </p>
                <p>
                  <strong>Pilot Sighting:</strong> Navy pilot Commander James Stockdale, who flew over the destroyers for two hours, testified that no North Vietnamese patrol boats were visible during the reported engagement.
                </p>
                <p>
                  <strong>Sensor Anomalies:</strong> Freak weather inversions created false radar ghost returns; sonar operators reported dozens of torpedoes that were later attributed to acoustic cavitation from the destroyers’ own high-speed rudders.
                </p>
              </div>
            )}

            {selectedAspect === 'cables' && (
              <div className="space-y-3">
                <div className="p-3 bg-[#FAF7F2] border border-[#E8DDC8] font-mono text-xs text-[#2C2523] space-y-1 rounded-xs">
                  <div className="text-[10px] text-[#8B252D] uppercase tracking-widest font-bold">
                    CAPTAIN J.J. HERRICK FLASH CABLE // 04 AUG 1964
                  </div>
                  <p className="italic">
                    REVIEW OF ACTION MAKES MANY CONTACTS AND TORPEDOES FIRED APPEAR DOUBTFUL. FREAK WEATHER EFFECTS ON RADAR AND OVEREAGER SONARMEN MAY HAVE ACCOUNTED FOR MANY REPORTS... SUGGEST COMPLETE EVALUATION BEFORE ANY ACTION TAKEN.
                  </p>
                </div>
                <p className="font-editorial-serif text-xs text-[#5C524E]">
                  Captain Herrick sent this cable urging caution hours before LBJ announced retaliatory bombing to the American public.
                </p>
              </div>
            )}

            {selectedAspect === 'context' && (
              <div className="space-y-3 font-editorial-serif text-sm text-[#2C2523]">
                <p>
                  <strong>SIGINT Intercept Misread:</strong> A 2001 NSA cryptologic study by Robert Hanyok concluded that communications intelligence intercepts were selectively translated and compiled by intelligence staff to support the conclusion of an attack while contradictory cables were omitted.
                </p>
                <p>
                  <strong>Political Pressure:</strong> With Barry Goldwater campaigning on an aggressive platform in the 1964 presidential election, the Johnson administration sought to preempt accusations of being &ldquo;soft on communism.&rdquo;
                </p>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-[#E8DDC8] text-[11px] font-mono text-[#8B252D] font-semibold">
            Status: Declassified naval and NSA records indicate no attack occurred on August 4.
          </div>
        </div>
      </div>

      {/* The Synchronized Timeline of August 4, 1964 */}
      <div className="p-4 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs shadow-xs">
        <span className="text-[10px] uppercase tracking-widest text-[#6B5E59] font-bold block mb-3">
          Chronology of a Crisis · August 4, 1964 (Washington Time)
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-sans">
          <div className="p-3 bg-[#FFFEFA] border border-[#E8DDC8] rounded-xs shadow-xs">
            <span className="font-mono font-bold text-[#6B5E59] block mb-1">09:12 AM EST</span>
            <p className="font-editorial-serif text-[#2C2523]">
              Initial reports arrive in Pentagon of torpedo attack on USS Maddox and Turner Joy in progress.
            </p>
          </div>

          <div className="p-3 bg-[#FFFEFA] border-2 border-[#8B252D] rounded-xs shadow-xs">
            <span className="font-mono font-bold text-[#8B252D] block mb-1">01:27 PM EST</span>
            <p className="font-editorial-serif text-[#2C2523] font-medium">
              Capt. Herrick’s cable urges restraint, reporting contacts doubtful and advising evaluation before taking action.
            </p>
          </div>

          <div className="p-3 bg-[#FFFEFA] border border-[#E8DDC8] rounded-xs shadow-xs">
            <span className="font-mono font-bold text-[#6B5E59] block mb-1">05:00 PM EST</span>
            <p className="font-editorial-serif text-[#2C2523]">
              McNamara and Joint Chiefs order Operation Pierce Arrow: 64 retaliatory air sorties against North Vietnamese torpedo boat bases.
            </p>
          </div>

          <div className="p-3 bg-[#8B252D] text-white rounded-xs shadow-xs">
            <span className="font-mono font-bold text-[#E8DDC8] block mb-1">11:34 PM EST</span>
            <p className="font-editorial-serif text-xs leading-normal">
              LBJ announces airstrikes on television, characterizing attacks as unprovoked aggression.
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E8DDC8] text-xs font-editorial-serif text-[#5C524E] italic">
          Within 72 hours of the televised address, Congress passed the Gulf of Tonkin Resolution (416–0 in the House, 88–2 in the Senate), serving as the functional constitutional authorization for the commitment of over 500,000 American combat troops.
        </div>
      </div>
    </div>
  );
}
