'use client';

import React, { useState } from 'react';
import { SidePerspective, StrategicActorEcosystem } from '@/types/vietnam';

interface DualPerspectiveViewerProps {
  washington: SidePerspective;
  hanoi: SidePerspective;
  timeframe: string;
  ecosystem?: StrategicActorEcosystem;
}

export default function DualPerspectiveViewer({
  washington,
  hanoi,
  timeframe,
  ecosystem,
}: DualPerspectiveViewerProps) {
  const [activeView, setActiveView] = useState<'comparative' | 'deep-dive'>('comparative');

  return (
    <div className="my-12 sm:my-16 border-t border-b border-stone-300 dark:border-stone-800 py-8 sm:py-12">
      {/* Editorial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8">
        <div>
          <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-1">
            The Strategic Alignment &bull; {timeframe}
          </span>
          <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
            What Washington Believed vs. What Hanoi Believed
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-archival-mono text-stone-600 dark:text-stone-400">
          <button
            type="button"
            onClick={() => setActiveView('comparative')}
            className={`px-3 py-1 border transition-colors cursor-pointer ${
              activeView === 'comparative'
                ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                : 'border-stone-300 dark:border-stone-700 hover:border-stone-500'
            }`}
          >
            Comparative Dual View
          </button>
          <button
            type="button"
            onClick={() => setActiveView('deep-dive')}
            className={`px-3 py-1 border transition-colors cursor-pointer ${
              activeView === 'deep-dive'
                ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                : 'border-stone-300 dark:border-stone-700 hover:border-stone-500'
            }`}
          >
            The Full Five-Actor Ecosystem
          </button>
        </div>
      </div>

      {activeView === 'comparative' ? (
        /* Symmetrical Dual Scrutiny Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Washington Column */}
          <div className="space-y-6 border-l-2 border-stone-400 dark:border-stone-600 pl-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-archival-mono text-xs uppercase tracking-wider font-bold text-stone-600 dark:text-stone-400">
                  Washington Decision-Makers
                </span>
                <span className="font-archival-mono text-[11px] text-stone-500">
                  White House &bull; Pentagon &bull; CIA
                </span>
              </div>
              <h4 className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                The American Imperative
              </h4>
              <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-1">
                Actors: {washington.keyActors.join(', ')}
              </p>
            </div>

            {/* Strategic Objective */}
            <div>
              <h5 className="font-archival-mono text-[11px] uppercase tracking-wider font-bold text-stone-700 dark:text-stone-300 mb-1">
                Strategic Objective
              </h5>
              <p className="font-editorial-serif text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed">
                {washington.strategicObjective}
              </p>
            </div>

            {/* Underlying Assumptions */}
            <div>
              <h5 className="font-archival-mono text-[11px] uppercase tracking-wider font-bold text-stone-700 dark:text-stone-300 mb-2">
                Underlying Strategic Premises
              </h5>
              <ul className="space-y-2 text-sm text-stone-700 dark:text-stone-300 font-sans leading-relaxed list-disc list-outside pl-4">
                {washington.underlyingAssumptions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Internal Debates */}
            <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
              <h5 className="font-archival-mono text-[11px] uppercase tracking-wider font-bold text-stone-700 dark:text-stone-300 mb-1">
                Internal Dissent &amp; Policy Debate
              </h5>
              <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                {washington.internalDebates.map((item, idx) => (
                  <li key={idx}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hanoi Column */}
          <div className="space-y-6 border-l-2 border-stone-800 dark:border-stone-200 pl-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-archival-mono text-xs uppercase tracking-wider font-bold text-stone-800 dark:text-stone-200">
                  Hanoi Decision-Makers
                </span>
                <span className="font-archival-mono text-[11px] text-stone-500">
                  Politburo &bull; VWP Central Committee
                </span>
              </div>
              <h4 className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                The Revolutionary Imperative
              </h4>
              <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-1">
                Actors: {hanoi.keyActors.join(', ')}
              </p>
            </div>

            {/* Strategic Objective */}
            <div>
              <h5 className="font-archival-mono text-[11px] uppercase tracking-wider font-bold text-stone-700 dark:text-stone-300 mb-1">
                Strategic Objective
              </h5>
              <p className="font-editorial-serif text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed">
                {hanoi.strategicObjective}
              </p>
            </div>

            {/* Underlying Assumptions */}
            <div>
              <h5 className="font-archival-mono text-[11px] uppercase tracking-wider font-bold text-stone-700 dark:text-stone-300 mb-2">
                Underlying Revolutionary Premises
              </h5>
              <ul className="space-y-2 text-sm text-stone-700 dark:text-stone-300 font-sans leading-relaxed list-disc list-outside pl-4">
                {hanoi.underlyingAssumptions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Internal Debates */}
            <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
              <h5 className="font-archival-mono text-[11px] uppercase tracking-wider font-bold text-stone-700 dark:text-stone-300 mb-1">
                Internal Purges &amp; Tactical Factions
              </h5>
              <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                {hanoi.internalDebates.map((item, idx) => (
                  <li key={idx}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* The Full Five-Actor Strategic Ecosystem */
        <div className="space-y-6">
          <p className="font-editorial-serif text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
            The Vietnam War cannot be reduced to Washington vs. Hanoi alone. To understand how decisions unfolded, we must track the full chain of actors: <strong>Washington &rarr; Hanoi &rarr; South Vietnam &rarr; The Battlefield &rarr; The American Public &rarr; Strategic Consequence.</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {/* 1. Washington */}
            <div className="p-5 border border-stone-300 dark:border-stone-800 bg-[#fbf9f5] dark:bg-[#161514] space-y-2">
              <span className="font-archival-mono text-[11px] uppercase font-bold text-stone-500 block">
                01 &bull; Washington (White House &amp; Pentagon)
              </span>
              <h5 className="font-editorial-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Preserving Global Credibility
              </h5>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {ecosystem ? ecosystem.washington.objective : washington.strategicObjective}
              </p>
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 text-[11px] font-archival-mono text-stone-500">
                Assumption: {ecosystem ? ecosystem.washington.underlyingAssumption : washington.underlyingAssumptions[0]}
              </div>
            </div>

            {/* 2. Hanoi */}
            <div className="p-5 border border-stone-300 dark:border-stone-800 bg-[#fbf9f5] dark:bg-[#161514] space-y-2">
              <span className="font-archival-mono text-[11px] uppercase font-bold text-stone-500 block">
                02 &bull; Hanoi (Politburo &amp; General Giap)
              </span>
              <h5 className="font-editorial-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Protracted National Reunification
              </h5>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {ecosystem ? ecosystem.hanoi.objective : hanoi.strategicObjective}
              </p>
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 text-[11px] font-archival-mono text-stone-500">
                Assumption: {ecosystem ? ecosystem.hanoi.underlyingAssumption : hanoi.underlyingAssumptions[0]}
              </div>
            </div>

            {/* 3. South Vietnam */}
            <div className="p-5 border border-stone-300 dark:border-stone-800 bg-[#fbf9f5] dark:bg-[#161514] space-y-2">
              <span className="font-archival-mono text-[11px] uppercase font-bold text-stone-500 block">
                03 &bull; South Vietnam (Saigon &amp; Civil Society)
              </span>
              <h5 className="font-editorial-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Sovereignty &amp; Internal Legitimacy
              </h5>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {ecosystem
                  ? ecosystem.saigon.regimeAndSociety
                  : 'Faced a twin challenge: fighting a communist insurgency while resisting perceived American colonization, navigating domestic Buddhist protests, military coups, and rural land disputes.'}
              </p>
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 text-[11px] font-archival-mono text-stone-500">
                Dilemma: {ecosystem ? ecosystem.saigon.coreDilemma : 'How to accept billions in U.S. firepower without appearing as an American client state.'}
              </div>
            </div>

            {/* 4. The Battlefield */}
            <div className="p-5 border border-stone-300 dark:border-stone-800 bg-[#fbf9f5] dark:bg-[#161514] space-y-2">
              <span className="font-archival-mono text-[11px] uppercase font-bold text-stone-500 block">
                04 &bull; The Battlefield (Jungle &amp; Rice Paddies)
              </span>
              <h5 className="font-editorial-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Asymmetric Friction
              </h5>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {ecosystem
                  ? ecosystem.battlefield.tacticalReality
                  : 'Massive American industrial firepower (B-52s, napalm, artillery) clashed with a dispersed, subterranean enemy who dictated the time and place of 80% of all fire engagements.'}
              </p>
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 text-[11px] font-archival-mono text-stone-500">
                Human Cost: {ecosystem ? ecosystem.battlefield.humanCost : 'Immense civilian displacement and catastrophic troop casualties on all sides.'}
              </div>
            </div>

            {/* 5. The Public & Diplomacy */}
            <div className="p-5 border border-stone-300 dark:border-stone-800 bg-[#fbf9f5] dark:bg-[#161514] space-y-2 sm:col-span-2 lg:col-span-2">
              <span className="font-archival-mono text-[11px] uppercase font-bold text-stone-500 block">
                05 &bull; The Public &amp; The World (Home Front &amp; Allies)
              </span>
              <h5 className="font-editorial-serif font-bold text-base text-stone-900 dark:text-stone-100">
                The Domestic Horizon of Endurance
              </h5>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {ecosystem
                  ? ecosystem.publicAndDiplomacy.politicalPressure
                  : 'In democracies, foreign military intervention is governed by an invisible timer: domestic political tolerance. As casualty lists lengthened without tangible progress, the American public fractured, destroying administrations and forcing diplomatic exits.'}
              </p>
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 text-[11px] font-archival-mono text-stone-500">
                Diplomacy: {ecosystem ? ecosystem.publicAndDiplomacy.internationalContext : 'Superpower diplomacy constrained by Beijing and Moscow backing Hanoi, while Washington managed NATO allies who refused to send troops.'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
