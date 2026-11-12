'use client';

import React from 'react';
import { CausalStep } from '@/types/vietnam';

interface CausalFlowViewerProps {
  causalChain: CausalStep;
}

export default function CausalFlowViewer({ causalChain }: CausalFlowViewerProps) {
  return (
    <div className="py-8 border-t border-b border-rule">
      {/* Kicker & Title */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-2">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            The Chain of Consequence
          </h3>
        </div>
        <span className="text-xs text-ink-soft">
          Decision Blind Spot Reaction Fallout
        </span>
      </div>

      {/* 4-Step Typographic Ledger with Hairline Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {/* Step 1: Decision */}
        <div className="space-y-2 border-l border-ink pl-4 py-1">
          <div className="flex items-center justify-between text-[11px] text-ink-soft">
            <span className="font-bold text-ink">I. The Decision</span>
            <span>{causalChain.decision.date}</span>
          </div>
          <div className="text-xs font-semibold text-ink-muted">
            Actor: {causalChain.decision.actor}
          </div>
          <p className="font-display text-sm text-ink leading-relaxed">
            {causalChain.decision.action}
          </p>
        </div>

        {/* Step 2: Assumption & Blind Spot */}
        <div className="space-y-2 border-l border-rule pl-4 py-1">
          <div className="text-[11px] text-ink-soft font-bold">
            II. The Blind Spot
          </div>
          <div>
            <div className="text-[10px] text-ink-soft">Premise:</div>
            <p className="font-display text-xs text-ink-muted leading-normal">
              {causalChain.assumption.premise}
            </p>
          </div>
          <div className="pt-1">
            <div className="text-[10px] text-brand font-semibold">Unexamined Risk:</div>
            <p className="font-display text-xs text-ink leading-normal">
              {causalChain.assumption.blindSpot}
            </p>
          </div>
        </div>

        {/* Step 3: Collision */}
        <div className="space-y-2 border-l border-rule pl-4 py-1">
          <div className="text-[11px] text-ink-soft font-bold">
            III. The Collision
          </div>
          <div>
            <div className="text-[10px] text-ink-soft">Immediate Tactical Event:</div>
            <p className="font-display text-xs text-ink-muted leading-normal">
              {causalChain.result.immediate}
            </p>
          </div>
          <div className="pt-1">
            <div className="text-[10px] text-ink-soft">Adversary Counter:</div>
            <p className="font-display text-xs text-ink-muted leading-normal">
              {causalChain.result.counterAction}
            </p>
          </div>
        </div>

        {/* Step 4: Consequence */}
        <div className="space-y-2 border-l border-brand pl-4 py-1 bg-parchment border-t border-r border-b border-rule rounded-r-xs p-3">
          <div className="text-[11px] text-brand font-bold">
            IV. Strategic Consequence
          </div>
          <p className="font-display text-sm text-ink leading-relaxed">
            {causalChain.unintendedConsequence}
          </p>
        </div>
      </div>

      {/* Bridging Dilemma Footnote */}
      <div className="mt-6 pt-4 border-t border-rule text-xs font-display text-ink-muted flex items-baseline gap-2">
        <span className="font-bold text-brand text-[10px] whitespace-nowrap">
          Next Dilemma:
        </span>
        <span className="italic">
          &ldquo;{causalChain.nextDecision}&rdquo;
        </span>
      </div>
    </div>
  );
}
