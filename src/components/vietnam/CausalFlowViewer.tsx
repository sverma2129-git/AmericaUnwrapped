'use client';

import React from 'react';
import { CausalStep } from '@/types/vietnam';

interface CausalFlowViewerProps {
  causalChain: CausalStep;
}

export default function CausalFlowViewer({ causalChain }: CausalFlowViewerProps) {
  return (
    <div className="py-8 border-t border-b border-stone-300 dark:border-stone-800">
      {/* Kicker & Title */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-2">
        <div>
          <span className="font-archival-mono text-[11px] uppercase tracking-widest text-stone-500 block mb-1">
            Causal Anatomy &bull; Strategy &amp; Consequence
          </span>
          <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
            The Chain of Consequence
          </h3>
        </div>
        <span className="font-archival-mono text-xs text-stone-500">
          Decision &rarr; Blind Spot &rarr; Reaction &rarr; Fallout
        </span>
      </div>

      {/* 4-Step Typographic Ledger with Hairline Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {/* Step 1: Decision */}
        <div className="space-y-2 border-l-2 border-stone-800 dark:border-stone-200 pl-4 py-1">
          <div className="flex items-center justify-between text-[11px] font-archival-mono text-stone-500">
            <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">I. The Decision</span>
            <span>{causalChain.decision.date}</span>
          </div>
          <div className="font-archival-mono text-xs font-semibold text-stone-700 dark:text-stone-300">
            Actor: {causalChain.decision.actor}
          </div>
          <p className="font-editorial-serif text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
            {causalChain.decision.action}
          </p>
        </div>

        {/* Step 2: Assumption & Blind Spot */}
        <div className="space-y-2 border-l-2 border-stone-400 dark:border-stone-600 pl-4 py-1">
          <div className="text-[11px] font-archival-mono text-stone-500 font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            II. The Blind Spot
          </div>
          <div>
            <div className="font-archival-mono text-[10px] uppercase text-stone-500">Premise:</div>
            <p className="font-editorial-serif text-xs text-stone-700 dark:text-stone-300 leading-normal">
              {causalChain.assumption.premise}
            </p>
          </div>
          <div className="pt-1">
            <div className="font-archival-mono text-[10px] uppercase text-amber-800 dark:text-amber-400 font-semibold">Unexamined Risk:</div>
            <p className="font-editorial-serif text-xs text-stone-800 dark:text-stone-200 leading-normal italic">
              {causalChain.assumption.blindSpot}
            </p>
          </div>
        </div>

        {/* Step 3: Collision */}
        <div className="space-y-2 border-l-2 border-stone-400 dark:border-stone-600 pl-4 py-1">
          <div className="text-[11px] font-archival-mono text-stone-500 font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            III. The Collision
          </div>
          <div>
            <div className="font-archival-mono text-[10px] uppercase text-stone-500">Immediate Tactical Event:</div>
            <p className="font-editorial-serif text-xs text-stone-700 dark:text-stone-300 leading-normal">
              {causalChain.result.immediate}
            </p>
          </div>
          <div className="pt-1">
            <div className="font-archival-mono text-[10px] uppercase text-stone-500">Adversary Counter:</div>
            <p className="font-editorial-serif text-xs text-stone-700 dark:text-stone-300 leading-normal">
              {causalChain.result.counterAction}
            </p>
          </div>
        </div>

        {/* Step 4: Consequence */}
        <div className="space-y-2 border-l-2 border-amber-600 dark:border-amber-500 pl-4 py-1 bg-amber-50/50 dark:bg-amber-950/20 rounded-r-xs p-3">
          <div className="text-[11px] font-archival-mono text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wider">
            IV. Strategic Consequence
          </div>
          <p className="font-editorial-serif text-sm text-stone-900 dark:text-stone-100 leading-relaxed">
            {causalChain.unintendedConsequence}
          </p>
        </div>
      </div>

      {/* Bridging Dilemma Footnote */}
      <div className="mt-6 pt-4 border-t border-stone-200/80 dark:border-stone-800 text-xs font-editorial-serif text-stone-600 dark:text-stone-400 flex items-baseline gap-2">
        <span className="font-archival-mono uppercase tracking-wider font-bold text-stone-500 text-[10px] whitespace-nowrap">
          Next Dilemma:
        </span>
        <span className="italic">
          &ldquo;{causalChain.nextDecision}&rdquo;
        </span>
      </div>
    </div>
  );
}
