'use client';

import React from 'react';
import type { SiegeStep } from '@/types/vietnam';
import ScrollSteps from './ScrollSteps';
import SiegeMap, { SiegeLegend } from './SiegeMap';

/** The Dien Bien Phu siege told as a pinned map that changes as the steps scroll past. */
export default function SiegeScrolly({ steps }: { steps: SiegeStep[] }) {
  return (
    <ScrollSteps
      steps={steps.map((s) => ({ key: s.state, label: s.date, headline: s.headline, body: s.body }))}
      renderFigure={(active) => (
        <>
          <div className="relative rounded-lg border border-rule overflow-hidden bg-terrain h-[32vh] sm:h-[40vh] lg:h-[60vh]">
            <SiegeMap state={steps[active].state} />
            <span className="absolute top-3 left-3 meta px-2.5 py-1 rounded-sm bg-surface/90 border border-rule text-ink">
              {steps[active].date}
            </span>
          </div>
          <div className="mt-3">
            <SiegeLegend />
          </div>
        </>
      )}
    />
  );
}
