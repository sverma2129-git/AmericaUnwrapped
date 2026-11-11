import React from 'react';
import type { CausalStep, StoryVisual } from '@/types/vietnam';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { isVerbatimQuotation } from '@/lib/citations';
import CitationMarker from '@/components/common/CitationMarker';
import CitedParagraph from '@/components/common/CitedParagraph';
import ModuleFrame from './ModuleFrame';
import SiegeScrolly from './SiegeScrolly';
import NightScrolly from './NightScrolly';

/**
 * A primary-source quotation set as a pull quote between two rules. Renders
 * nothing unless the citation is a verified verbatim quote.
 */
function VerbatimQuote({ citationId }: { citationId: string }) {
  const citation = CITATION_REGISTRY[citationId];
  if (!citation || !isVerbatimQuotation(citation)) return null;
  return (
    <figure className="border-y border-ink py-6">
      <blockquote className="font-editorial-serif text-2xl sm:text-[1.75rem] font-medium text-ink leading-snug">
        &ldquo;{citation.exactQuotation}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-[0.9375rem] text-ink-muted">
        <strong className="text-ink font-semibold">{citation.authorOrInstitution}</strong>, {citation.title}, {citation.date}
        <CitationMarker id={citationId} />
      </figcaption>
    </figure>
  );
}

function ShareBar({ visual }: { visual: Extract<StoryVisual, { kind: 'share' }> }) {
  const range = visual.low === visual.high ? `${visual.low}%` : `${visual.low}–${visual.high}%`;
  return (
    <ModuleFrame question={visual.title} caption={visual.note} citationId={visual.citationId}>
      <div className="flex items-baseline justify-between mb-2 text-[0.9375rem]">
        <span className="font-semibold text-ink">
          {visual.label}: about {range}
        </span>
        <span className="text-ink-muted">{visual.remainderLabel}</span>
      </div>
      <div
        className="relative h-9 bg-parchment border border-rule"
        role="img"
        aria-label={`${visual.label}: about ${range}. ${visual.remainderLabel}: the rest.`}
      >
        <div className="absolute inset-y-0 left-0 bg-brand" style={{ width: `${visual.low}%` }} />
        {visual.high > visual.low && (
          <div
            className="absolute inset-y-0 bg-brand/40"
            style={{ left: `${visual.low}%`, width: `${visual.high - visual.low}%` }}
            title="Range of estimates"
          />
        )}
      </div>
      <div className="mt-1.5 flex justify-between text-xs text-ink-soft tabular-nums" aria-hidden="true">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </ModuleFrame>
  );
}

function Debate({ visual }: { visual: Extract<StoryVisual, { kind: 'debate' }> }) {
  return (
    <ModuleFrame question={visual.question} takeaway={visual.outcome}>
      <div className="grid sm:grid-cols-2 gap-y-6 sm:gap-x-10">
        {visual.sides.map((side, i) => (
          <div key={side.stance} className={i > 0 ? 'sm:border-l sm:border-rule sm:pl-10' : ''}>
            <p className="font-editorial-serif text-lg font-semibold text-ink leading-snug">
              <span className={i === 0 ? 'text-brand' : ''}>{side.stance}:</span> {side.who}
            </p>
            <p className="mt-2 text-[0.9375rem] text-ink-muted leading-relaxed">{side.argument}</p>
          </div>
        ))}
      </div>
    </ModuleFrame>
  );
}

function Consequence({ chain }: { chain: CausalStep }) {
  const steps = [
    { label: 'The decision', text: chain.decision.action },
    { label: 'What followed', text: chain.result.immediate },
    { label: 'The catch', text: chain.unintendedConsequence },
  ];
  return (
    <ol className="grid md:grid-cols-3 gap-y-6 md:gap-x-10 border-t-2 border-ink pt-4">
      {steps.map((s, i) => (
        <li key={s.label} className={i > 0 ? 'md:border-l md:border-rule md:pl-10' : ''}>
          <p className="font-semibold text-ink">
            {i + 1}. {s.label}
          </p>
          <p className="mt-1.5 text-[0.9375rem] text-ink-muted leading-relaxed">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

function Compare({ visual }: { visual: Extract<StoryVisual, { kind: 'compare' }> }) {
  const [a, b] = visual.columns;
  return (
    <ModuleFrame
      question={visual.question}
      takeaway={visual.takeaway}
      caption="Compiled from the sources cited in each row."
      citationId={visual.citationId}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[0.9375rem]">
          <thead>
            <tr className="border-b border-ink">
              <th className="w-[24%] py-2" />
              {[a, b].map((c) => (
                <th key={c.label} scope="col" className="px-3 sm:px-4 py-2 text-left font-editorial-serif text-lg font-semibold text-ink">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visual.rowLabels.map((label, r) => (
              <tr key={label} className="border-b border-rule align-top">
                <th scope="row" className="py-3 pr-3 text-left meta text-ink-soft">
                  {label}
                </th>
                {[a, b].map((c) => (
                  <td key={c.label} className="px-3 sm:px-4 py-3 text-ink leading-relaxed">
                    <CitedParagraph text={c.cells[r]} />
                  </td>
                ))}
              </tr>
            ))}
            <tr className="align-top">
              <th scope="row" className="py-3 pr-3 text-left meta text-ink-soft">
                Verdict
              </th>
              {[a, b].map((c, i) => (
                <td key={c.label} className={`px-3 sm:px-4 py-3 font-semibold ${i === 0 ? 'text-success' : 'text-brand'}`}>
                  {c.verdict}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </ModuleFrame>
  );
}

export default function StoryVisualView({ visual, causalChain }: { visual: StoryVisual; causalChain: CausalStep }) {
  switch (visual.kind) {
    case 'quote':
      return <VerbatimQuote citationId={visual.citationId} />;
    case 'share':
      return <ShareBar visual={visual} />;
    case 'debate':
      return <Debate visual={visual} />;
    case 'consequence':
      return <Consequence chain={causalChain} />;
    case 'compare':
      return <Compare visual={visual} />;
    case 'night':
      return (
        <ModuleFrame
          question={visual.question}
          instruction={visual.instruction}
          takeaway={visual.takeaway}
          caption={visual.caption}
          citationId={visual.citationId}
        >
          <NightScrolly steps={visual.steps} />
        </ModuleFrame>
      );
    case 'siege':
      return (
        <ModuleFrame
          question={visual.question}
          instruction={visual.instruction}
          takeaway={visual.takeaway}
          caption={visual.caption}
          citationId={visual.citationId}
        >
          <SiegeScrolly steps={visual.steps} />
        </ModuleFrame>
      );
  }
}
