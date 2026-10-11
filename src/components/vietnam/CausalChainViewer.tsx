'use client';

import React from 'react';
import { CausalStep } from '@/types/vietnam';

interface CausalChainViewerProps {
  causalChain: CausalStep;
}

export default function CausalChainViewer({ causalChain }: CausalChainViewerProps) {
  return (
    <div className="my-12 sm:my-16 border-t border-b border-stone-300 dark:border-stone-800 py-8 sm:py-12">
      {/* Causal Ledger Header */}
      <div className="mb-8">
        <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-1">
          Causal Anatomy of the Turning Point
        </span>
        <h4 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
          Decision &rarr; Assumption &rarr; Reaction &rarr; Consequence
        </h4>
        <p className="mt-2 font-editorial-serif text-base text-stone-600 dark:text-stone-400 italic">
          History does not unfold in a vacuum. Every escalation was produced by human choices anchored in specific assumptions.
        </p>
      </div>

      {/* The Causal Flow — Editorial Ledger Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-stone-900 dark:text-stone-100">
        {/* Step 1: The Decision */}
        <div className="border-t-2 border-stone-800 dark:border-stone-200 pt-3 space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="font-archival-mono text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
              I. The Choice
            </span>
            <span className="font-archival-mono text-[11px] text-stone-500">
              {causalChain.decision.date}
            </span>
          </div>
          <div className="font-archival-mono text-xs text-stone-500 dark:text-stone-400 uppercase">
            {causalChain.decision.actor}
          </div>
          <p className="font-editorial-serif text-base sm:text-lg leading-snug">
            {causalChain.decision.action}
          </p>
        </div>

        {/* Step 2: The Premise & Blind Spot */}
        <div className="border-t-2 border-stone-500 dark:border-stone-500 pt-3 space-y-3">
          <span className="font-archival-mono text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 block">
            II. The Fatal Blind Spot
          </span>
          <div>
            <span className="font-archival-mono text-[11px] uppercase text-stone-500 block">
              Operating Premise:
            </span>
            <p className="font-editorial-serif text-sm leading-snug text-stone-700 dark:text-stone-300 mt-0.5">
              {causalChain.assumption.premise}
            </p>
          </div>
          <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
            <span className="font-archival-mono text-[11px] uppercase text-stone-800 dark:text-stone-200 font-semibold block">
              What Was Ignored:
            </span>
            <p className="font-editorial-serif text-sm leading-snug italic text-stone-800 dark:text-stone-200 mt-0.5">
              {causalChain.assumption.blindSpot}
            </p>
          </div>
        </div>

        {/* Step 3: Immediate Outcome & Reaction */}
        <div className="border-t-2 border-stone-500 dark:border-stone-500 pt-3 space-y-3">
          <span className="font-archival-mono text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 block">
            III. The Collision
          </span>
          <div>
            <span className="font-archival-mono text-[11px] uppercase text-stone-500 block">
              Immediate Tactical Result:
            </span>
            <p className="font-editorial-serif text-sm leading-snug text-stone-700 dark:text-stone-300 mt-0.5">
              {causalChain.result.immediate}
            </p>
          </div>
          <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
            <span className="font-archival-mono text-[11px] uppercase text-stone-800 dark:text-stone-200 font-semibold block">
              Adversary Counter-Punch:
            </span>
            <p className="font-editorial-serif text-sm leading-snug text-stone-800 dark:text-stone-200 mt-0.5">
              {causalChain.result.counterAction}
            </p>
          </div>
        </div>

        {/* Step 4: The Unintended Consequence */}
        <div className="border-t-2 border-stone-800 dark:border-stone-200 pt-3 space-y-2">
          <span className="font-archival-mono text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 block">
            IV. Strategic Consequence
          </span>
          <p className="font-editorial-serif text-base sm:text-lg leading-snug">
            {causalChain.unintendedConsequence}
          </p>
          <div className="pt-2 text-xs font-archival-mono text-stone-500 dark:text-stone-400">
            Sets up the next dilemma &rarr;
          </div>
        </div>
      </div>
    </div>
  );
}
