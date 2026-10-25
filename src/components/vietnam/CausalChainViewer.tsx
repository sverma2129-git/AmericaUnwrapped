'use client';

import React from 'react';
import { CausalStep } from '@/types/vietnam';

interface CausalChainViewerProps {
  causalChain: CausalStep;
}

export default function CausalChainViewer({ causalChain }: CausalChainViewerProps) {
  return (
    <div className="my-12 sm:my-16 border-t border-b border-[#E8DDC8] py-8 sm:py-12 text-[#2C2523]">
      {/* Causal Ledger Header */}
      <div className="mb-8">
        <span className="font-archival-mono text-xs uppercase tracking-widest text-[#8B252D] font-bold block mb-1">
          Causal Anatomy of the Turning Point
        </span>
        <h4 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#2C2523]">
          Decision &rarr; Assumption &rarr; Reaction &rarr; Consequence
        </h4>
        <p className="mt-2 font-editorial-serif text-base text-[#5C524E] italic">
          History does not unfold in a vacuum. Every escalation was produced by human choices anchored in specific assumptions.
        </p>
      </div>

      {/* The Causal Flow — Editorial Ledger Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#2C2523]">
        {/* Step 1: The Decision */}
        <div className="border-t-2 border-[#8B252D] pt-3 space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="font-archival-mono text-xs font-bold uppercase tracking-wider text-[#8B252D]">
              I. The Choice
            </span>
            <span className="font-archival-mono text-[11px] text-[#5C524E]">
              {causalChain.decision.date}
            </span>
          </div>
          <div className="font-archival-mono text-xs text-[#5C524E] uppercase">
            {causalChain.decision.actor}
          </div>
          <p className="font-editorial-serif text-base sm:text-lg leading-snug">
            {causalChain.decision.action}
          </p>
        </div>

        {/* Step 2: The Premise & Blind Spot */}
        <div className="border-t-2 border-[#E8DDC8] pt-3 space-y-3">
          <span className="font-archival-mono text-xs font-bold uppercase tracking-wider text-[#2C2523] block">
            II. The Fatal Blind Spot
          </span>
          <div>
            <span className="font-archival-mono text-[11px] uppercase text-[#5C524E] block">
              Operating Premise:
            </span>
            <p className="font-editorial-serif text-sm leading-snug text-[#5C524E] mt-0.5">
              {causalChain.assumption.premise}
            </p>
          </div>
          <div className="pt-2 border-t border-[#E8DDC8]">
            <span className="font-archival-mono text-[11px] uppercase text-[#8B252D] font-semibold block">
              What Was Ignored:
            </span>
            <p className="font-editorial-serif text-sm leading-snug italic text-[#2C2523] mt-0.5">
              {causalChain.assumption.blindSpot}
            </p>
          </div>
        </div>

        {/* Step 3: Immediate Outcome & Reaction */}
        <div className="border-t-2 border-[#E8DDC8] pt-3 space-y-3">
          <span className="font-archival-mono text-xs font-bold uppercase tracking-wider text-[#2C2523] block">
            III. The Collision
          </span>
          <div>
            <span className="font-archival-mono text-[11px] uppercase text-[#5C524E] block">
              Immediate Tactical Result:
            </span>
            <p className="font-editorial-serif text-sm leading-snug text-[#5C524E] mt-0.5">
              {causalChain.result.immediate}
            </p>
          </div>
          <div className="pt-2 border-t border-[#E8DDC8]">
            <span className="font-archival-mono text-[11px] uppercase text-[#2C2523] font-semibold block">
              Adversary Counter-Punch:
            </span>
            <p className="font-editorial-serif text-sm leading-snug text-[#2C2523] mt-0.5">
              {causalChain.result.counterAction}
            </p>
          </div>
        </div>

        {/* Step 4: The Unintended Consequence */}
        <div className="border-t-2 border-[#8B252D] pt-3 space-y-2">
          <span className="font-archival-mono text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
            IV. Strategic Consequence
          </span>
          <p className="font-editorial-serif text-base sm:text-lg leading-snug">
            {causalChain.unintendedConsequence}
          </p>
          <div className="pt-2 text-xs font-archival-mono text-[#5C524E]">
            Sets up the next dilemma &rarr;
          </div>
        </div>
      </div>
    </div>
  );
}
