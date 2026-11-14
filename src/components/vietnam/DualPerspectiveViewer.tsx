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
    <div className="my-12 sm:my-16 border-t border-b border-stone-300 py-8 sm:py-12">
      {/* Editorial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
            What Washington believed and what Hanoi believed
          </h3>
          <span className="text-xs text-stone-500 block mb-1">
            The Strategic Alignment &bull; {timeframe}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-600">
          <button
            type="button"
            onClick={() => setActiveView('comparative')}
            className={`px-3 py-1 border transition-colors cursor-pointer ${ activeView === 'comparative' ? 'border-stone-900 bg-stone-900 text-stone-100 font-bold' : 'border-stone-300 hover:border-stone-500' }`}
          >
            Side by side
          </button>
          <button
            type="button"
            onClick={() => setActiveView('deep-dive')}
            className={`px-3 py-1 border transition-colors cursor-pointer ${ activeView === 'deep-dive' ? 'border-stone-900 bg-stone-900 text-stone-100 font-bold' : 'border-stone-300 hover:border-stone-500' }`}
          >
            All five sides
          </button>
        </div>
      </div>

      {activeView === 'comparative' ? (
        /* Symmetrical Dual Scrutiny Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Washington Column */}
          <div className="space-y-6 border-l border-stone-400 pl-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-600">
                  Who decided in Washington
                </span>
                <span className="text-[11px] text-stone-500">
                  White House &bull; Pentagon &bull; CIA
                </span>
              </div>
              <h4 className="font-display text-xl font-bold text-stone-900 mt-1">
                What Washington wanted
              </h4>
              <p className="font-sans text-xs text-stone-500 mt-1">
                Actors: {washington.keyActors.join(', ')}
              </p>
            </div>

            {/* The goal */}
            <div>
              <h5 className="text-[11px] font-bold text-stone-700 mb-1">
                The goal
              </h5>
              <p className="font-display text-base sm:text-lg text-stone-800 leading-relaxed">
                {washington.strategicObjective}
              </p>
            </div>

            {/* Underlying Assumptions */}
            <div>
              <h5 className="text-[11px] font-bold text-stone-700 mb-2">
                What they assumed
              </h5>
              <ul className="space-y-2 text-sm text-stone-700 font-sans leading-relaxed list-disc list-outside pl-4">
                {washington.underlyingAssumptions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Internal Debates */}
            <div className="pt-4 border-t border-stone-200">
              <h5 className="text-[11px] font-bold text-stone-700 mb-1">
                What they argued about
              </h5>
              <ul className="space-y-1.5 text-xs text-stone-600 font-sans leading-relaxed">
                {washington.internalDebates.map((item, idx) => (
                  <li key={idx}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hanoi Column */}
          <div className="space-y-6 border-l border-stone-800 pl-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-800">
                  Who decided in Hanoi
                </span>
                <span className="text-[11px] text-stone-500">
                  Politburo &bull; VWP Central Committee
                </span>
              </div>
              <h4 className="font-display text-xl font-bold text-stone-900 mt-1">
                What Hanoi wanted
              </h4>
              <p className="font-sans text-xs text-stone-500 mt-1">
                Actors: {hanoi.keyActors.join(', ')}
              </p>
            </div>

            {/* The goal */}
            <div>
              <h5 className="text-[11px] font-bold text-stone-700 mb-1">
                The goal
              </h5>
              <p className="font-display text-base sm:text-lg text-stone-800 leading-relaxed">
                {hanoi.strategicObjective}
              </p>
            </div>

            {/* Underlying Assumptions */}
            <div>
              <h5 className="text-[11px] font-bold text-stone-700 mb-2">
                What they assumed
              </h5>
              <ul className="space-y-2 text-sm text-stone-700 font-sans leading-relaxed list-disc list-outside pl-4">
                {hanoi.underlyingAssumptions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Internal Debates */}
            <div className="pt-4 border-t border-stone-200">
              <h5 className="text-[11px] font-bold text-stone-700 mb-1">
                What they argued about
              </h5>
              <ul className="space-y-1.5 text-xs text-stone-600 font-sans leading-relaxed">
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
          <p className="font-display text-base sm:text-lg text-stone-700 leading-relaxed">
            The Vietnam War cannot be reduced to Washington vs. Hanoi alone. To understand how decisions unfolded, we must track the full chain of actors: <strong>Washington Hanoi South Vietnam The Battlefield The American Public Strategic Consequence.</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {/* 1. Washington */}
            <div className="p-5 border border-stone-300 bg-[#fbf9f5] space-y-2">
              <h5 className="font-display font-bold text-base text-stone-900">
                Keeping America’s word
              </h5>
              <span className="text-[11px] font-bold text-stone-500 block">
                Washington
              </span>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                {ecosystem ? ecosystem.washington.objective : washington.strategicObjective}
              </p>
              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                Assumption: {ecosystem ? ecosystem.washington.underlyingAssumption : washington.underlyingAssumptions[0]}
              </div>
            </div>

            {/* 2. Hanoi */}
            <div className="p-5 border border-stone-300 bg-[#fbf9f5] space-y-2">
              <h5 className="font-display font-bold text-base text-stone-900">
                One Vietnam, however long it takes
              </h5>
              <span className="text-[11px] font-bold text-stone-500 block">
                Hanoi
              </span>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                {ecosystem ? ecosystem.hanoi.objective : hanoi.strategicObjective}
              </p>
              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                Assumption: {ecosystem ? ecosystem.hanoi.underlyingAssumption : hanoi.underlyingAssumptions[0]}
              </div>
            </div>

            {/* 3. South Vietnam */}
            <div className="p-5 border border-stone-300 bg-[#fbf9f5] space-y-2">
              <h5 className="font-display font-bold text-base text-stone-900">
                A government people would back
              </h5>
              <span className="text-[11px] font-bold text-stone-500 block">
                South Vietnam
              </span>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                {ecosystem
                  ? ecosystem.saigon.regimeAndSociety
                  : 'Faced a twin challenge: fighting a communist insurgency while resisting perceived American colonization, navigating domestic Buddhist protests, military coups, and rural land disputes.'}
              </p>
              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                Dilemma: {ecosystem ? ecosystem.saigon.coreDilemma : 'How to accept billions in U.S. firepower without appearing as an American client state.'}
              </div>
            </div>

            {/* 4. The Battlefield */}
            <div className="p-5 border border-stone-300 bg-[#fbf9f5] space-y-2">
              <h5 className="font-display font-bold text-base text-stone-900">
                Two different kinds of war
              </h5>
              <span className="text-[11px] font-bold text-stone-500 block">
                The battlefield
              </span>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                {ecosystem
                  ? ecosystem.battlefield.tacticalReality
                  : 'Massive American industrial firepower (B-52s, napalm, artillery) clashed with a dispersed, subterranean enemy who dictated the time and place of 80% of all fire engagements.'}
              </p>
              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                Human Cost: {ecosystem ? ecosystem.battlefield.humanCost : 'Immense civilian displacement and catastrophic troop casualties on all sides.'}
              </div>
            </div>

            {/* 5. The Public & Diplomacy */}
            <div className="p-5 border border-stone-300 bg-[#fbf9f5] space-y-2 sm:col-span-2 lg:col-span-2">
              <h5 className="font-display font-bold text-base text-stone-900">
                How long the public would accept it
              </h5>
              <span className="text-[11px] font-bold text-stone-500 block">
                The public and the world
              </span>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                {ecosystem
                  ? ecosystem.publicAndDiplomacy.politicalPressure
                  : 'In democracies, foreign military intervention is governed by an invisible timer: domestic political tolerance. As casualty lists lengthened without tangible progress, the American public fractured, destroying administrations and forcing diplomatic exits.'}
              </p>
              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                Diplomacy: {ecosystem ? ecosystem.publicAndDiplomacy.internationalContext : 'Superpower diplomacy constrained by Beijing and Moscow backing Hanoi, while Washington managed NATO allies who refused to send troops.'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
