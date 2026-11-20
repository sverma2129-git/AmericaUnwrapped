import React from 'react';
import { CausalStep } from '@/types/vietnam';

interface CausalFlowViewerProps {
  causalChain: CausalStep;
  /** Off where a surrounding panel already names the section. */
  showHeading?: boolean;
}

/**
 * One decision traced through to its consequence, as four numbered steps on a
 * single line. The steps are a real sequence, so they are numbered.
 */
export default function CausalFlowViewer({ causalChain, showHeading = true }: CausalFlowViewerProps) {
  const steps: { title: string; meta?: string; body: { label?: string; text: string; strong?: boolean }[] }[] = [
    {
      title: 'The decision',
      meta: `${causalChain.decision.actor}, ${causalChain.decision.date}`,
      body: [{ text: causalChain.decision.action, strong: true }],
    },
    {
      title: 'What they expected',
      body: [
        { text: causalChain.assumption.premise },
        { label: 'What they got wrong', text: causalChain.assumption.blindSpot },
      ],
    },
    {
      title: 'What happened',
      body: [
        { text: causalChain.result.immediate },
        { label: 'The response', text: causalChain.result.counterAction },
      ],
    },
    { title: 'Where it led', body: [{ text: causalChain.unintendedConsequence, strong: true }] },
  ];

  return (
    <div>
      {showHeading && (
        <>
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-2xl">Cause and effect</h2>
          <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-ink-muted">
            One decision from this chapter, followed step by step to a result nobody planned.
          </p>
        </>
      )}

      <ol className={showHeading ? 'mt-8' : ''}>
        {steps.map((step, i) => {
          const last = i === steps.length - 1;
          return (
            <li key={step.title} className="relative grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 sm:gap-x-6">
              <span
                className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold ${
                  last ? 'bg-brand text-white' : 'border-2 border-ink bg-paper text-ink'
                }`}
              >
                {i + 1}
              </span>
              {!last && <span aria-hidden="true" className="absolute left-[17px] top-9 bottom-0 w-0.5 bg-rule-strong" />}
              <div className={last ? 'pb-2' : 'pb-9'}>
                <h3 className={`pt-1.5 font-display text-lg font-bold ${last ? 'text-brand' : 'text-ink'}`}>{step.title}</h3>
                {step.meta && <p className="text-sm text-ink-muted">{step.meta}</p>}
                <div className="mt-2 max-w-[66ch] space-y-3">
                  {step.body.map((b) => (
                    <p key={b.text} className={`font-serif text-base leading-relaxed ${b.strong ? 'text-ink' : 'text-ink-muted'}`}>
                      {b.label && <span className="mr-1.5 font-sans text-sm font-semibold text-ink">{b.label}.</span>}
                      {b.text}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-8 max-w-[66ch] rounded-sm bg-parchment p-5 text-base leading-relaxed text-ink-muted">
        <span className="font-semibold text-ink">Next question: </span>
        {causalChain.nextDecision}
      </p>
    </div>
  );
}
