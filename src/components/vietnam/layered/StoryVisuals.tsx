import React from 'react';
import type { CausalStep, StoryVisual } from '@/types/vietnam';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { isVerbatimQuotation } from '@/lib/citations';
import CitationMarker from '@/components/common/CitationMarker';
import ModuleFrame from './ModuleFrame';
import SiegeScrolly from './SiegeScrolly';

/** A primary-source quotation. Renders nothing unless the citation is a verified verbatim quote. */
function VerbatimQuote({ citationId }: { citationId: string }) {
  const citation = CITATION_REGISTRY[citationId];
  if (!citation || !isVerbatimQuotation(citation)) return null;
  return (
    <figure className="card-surface rounded-xl p-6 sm:p-8 border-l-4 border-l-brand">
      <span className="eyebrow text-ink-soft block mb-3">Primary source</span>
      <blockquote className="font-editorial-serif text-xl sm:text-2xl text-ink leading-snug tracking-tight">
        &ldquo;{citation.exactQuotation}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm text-ink-muted">
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
      <div className="px-5 sm:px-8 py-6 sm:py-8">
        <div className="flex items-end justify-between mb-2 text-sm">
          <span>
            <span className="font-editorial-serif text-3xl font-medium text-brand tabular-nums">~{range}</span>
            <span className="ml-2 font-semibold text-ink">{visual.label}</span>
          </span>
          <span className="font-semibold text-ink-muted">{visual.remainderLabel}</span>
        </div>
        <div
          className="relative h-10 rounded-md overflow-hidden bg-parchment border border-rule"
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
        <div className="mt-1.5 flex justify-between text-[11px] text-ink-soft tabular-nums" aria-hidden="true">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
    </ModuleFrame>
  );
}

function Debate({ visual }: { visual: Extract<StoryVisual, { kind: 'debate' }> }) {
  return (
    <ModuleFrame question={visual.question} takeaway={visual.outcome}>
      <div className="grid sm:grid-cols-2">
        {visual.sides.map((side, i) => (
          <div key={side.stance} className={`px-5 sm:px-8 py-5 sm:py-6 ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-rule' : ''}`}>
            <span className={`eyebrow block mb-2 ${i === 0 ? 'text-brand' : 'text-ink'}`}>{side.stance}</span>
            <p className="text-sm font-semibold text-ink leading-snug">{side.who}</p>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">{side.argument}</p>
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
    <ol className="grid md:grid-cols-3 gap-3 md:gap-0">
      {steps.map((s, i) => (
        <li
          key={s.label}
          className={`card-surface p-5 rounded-xl md:rounded-none ${i === 0 ? 'md:rounded-l-xl' : ''} ${
            i === steps.length - 1 ? 'md:rounded-r-xl' : 'md:border-r-0'
          }`}
        >
          <span className="eyebrow text-ink-soft flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded-full bg-ink text-paper text-[10px] flex items-center justify-center tabular-nums">{i + 1}</span>
            {s.label}
          </span>
          <p className="text-sm text-ink leading-relaxed">{s.text}</p>
        </li>
      ))}
    </ol>
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
