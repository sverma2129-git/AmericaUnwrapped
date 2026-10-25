'use client';

import React from 'react';
import { ChapterData } from '@/types/vietnam';
import DualPerspectiveViewer from './DualPerspectiveViewer';
import CausalChainViewer from './CausalChainViewer';
import DocumentInspector from './DocumentInspector';
import InteractiveModuleWrapper from './InteractiveModuleWrapper';
import { useCitation } from '@/components/common/CitationContext';
import CitationMarker from '@/components/common/CitationMarker';

function FormattedParagraph({ text, className = '' }: { text: string; className?: string }) {
  const parts = text.split(/(\[\^[a-zA-Z0-9_-]+\])/g);
  return (
    <p className={className}>
      {parts.map((part, idx) => {
        const match = part.match(/^\[\^([a-zA-Z0-9_-]+)\]$/);
        if (match) {
          return <CitationMarker key={idx} id={match[1]} />;
        }
        return part;
      })}
    </p>
  );
}

interface ChapterViewProps {
  chapter: ChapterData;
  isLastChapter?: boolean;
}

export default function ChapterView({ chapter, isLastChapter }: ChapterViewProps) {
  const { openCitation } = useCitation();
  const leadParagraph = chapter.whatHappened.narrative[0] || chapter.summary;
  const remainingParagraphs = chapter.whatHappened.narrative.slice(1);

  return (
    <article
      id={chapter.id}
      className="py-20 sm:py-32 border-b border-[#E8DDC8] scroll-mt-20 max-w-4xl mx-auto text-[#2C2523]"
    >
      {/* ========================================================================= */}
      {/* 1. THE HOOK & CHAPTER MASTHEAD */}
      {/* ========================================================================= */}
      <header className="mb-14 sm:mb-18">
        {/* Chapter Metadata Line */}
        <div className="flex items-center gap-3 mb-4 font-archival-mono text-xs uppercase tracking-widest text-[#5C524E]">
          <span className="font-bold text-[#2C2523]">
            Chapter {chapter.number.toString().padStart(2, '0')}
          </span>
          <span aria-hidden="true">&bull;</span>
          <span>{chapter.timeframe}</span>
        </div>

        {/* Chapter Headline */}
        <h2 className="font-editorial-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C2523] leading-tight">
          {chapter.title}
        </h2>

        {/* Chapter Subtitle */}
        <p className="mt-3 font-editorial-serif italic text-xl sm:text-2xl text-[#5C524E] font-normal">
          {chapter.subtitle}
        </p>

        {/* ======================================================================= */}
        {/* LANDMARK VISUAL WEIGHT: 5 Critical Turning Points (Directive 7)        */}
        {/* Dien Bien Phu, Tonkin, Tet, Paris Peace Accords, Fall of Saigon         */}
        {/* ======================================================================= */}
        {chapter.isLandmark && chapter.landmarkMoment && (
          <aside className="my-10 p-6 sm:p-10 bg-[#FAF7F2] text-[#2C2523] border border-[#E8DDC8] shadow-xs relative overflow-hidden rounded-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8DDC8] pb-3 text-xs font-sans text-[#6B5E59]">
              <span className="uppercase tracking-widest font-bold text-[#8B252D]">
                Landmark Turning Point &bull; {chapter.landmarkMoment.location}
              </span>
              <span>{chapter.landmarkMoment.dateline}</span>
            </div>

            <div className="mt-6">
              <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#2C2523] tracking-tight">
                {chapter.landmarkMoment.bannerTitle}
              </h3>

              <div className="mt-4 border-l-2 border-[#8B252D] pl-4 py-1 font-editorial-serif italic text-lg sm:text-xl text-[#2C2523] leading-relaxed">
                {chapter.landmarkMoment.quote}
              </div>

              <footer className="mt-3 text-xs text-[#5C524E]">
                &mdash; {chapter.landmarkMoment.quoteSpeaker} ({chapter.landmarkMoment.quoteContext})
              </footer>
            </div>
          </aside>
        )}

        {/* The Lead Hook Paragraph with Drop-Cap (Directive 3 & 5) */}
        <div className="mt-10 font-editorial-serif text-xl sm:text-2xl leading-relaxed text-[#2C2523] editorial-dropcap">
          <FormattedParagraph text={leadParagraph} />
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. THE CONTEXT: Multi-Polar Reality (Directive 5 & 9)                      */}
      {/* Washington -> Hanoi -> South Vietnam -> Battlefield -> Public             */}
      {/* ========================================================================= */}
      <section className="my-12 sm:my-16 space-y-6 sm:space-y-8 font-editorial-serif text-lg sm:text-xl text-[#2C2523] leading-[1.85]">
        {remainingParagraphs.map((para, idx) => (
          <FormattedParagraph key={idx} text={para} />
        ))}
      </section>

      {/* Multi-Perspective Strategic Alignment Grid */}
      <section className="my-12 sm:my-16">
        <DualPerspectiveViewer
          washington={chapter.washington}
          hanoi={chapter.hanoi}
          timeframe={chapter.timeframe}
          ecosystem={chapter.strategicEcosystem}
        />
      </section>

      {/* ========================================================================= */}
      {/* 3. THE EVIDENCE: Archival Artifacts & Tactical Tools (Directive 6 & 8)     */}
      {/* Show the document, identify it, explain why it matters, inspect it        */}
      {/* ========================================================================= */}
      {chapter.primaryDocuments && chapter.primaryDocuments.length > 0 && (
        <section className="my-14 sm:my-20">
          <div className="mb-4">
            <span className="font-archival-mono text-xs uppercase tracking-widest text-[#5C524E] block mb-1">
              Historical Evidence &bull; Archival Record
            </span>
            <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#2C2523]">
              The Documentary Record
            </h3>
          </div>

          <div className="space-y-8">
            {chapter.primaryDocuments.map((doc) => (
              <DocumentInspector key={doc.id} document={doc} />
            ))}
          </div>
        </section>
      )}

      {/* Interactive Tactical / Analytical Tool (Directive 6) */}
      {chapter.interactiveModule && (
        <section className="my-14 sm:my-20">
          <div className="mb-4">
            <span className="font-archival-mono text-xs uppercase tracking-widest text-[#5C524E] block mb-1">
              Interactive Evidence Module
            </span>
            <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#2C2523]">
              {chapter.interactiveModule.title}
            </h3>
            <p className="mt-1 font-editorial-serif text-[#5C524E] italic text-base">
              {chapter.interactiveModule.prompt}
            </p>
          </div>

          <InteractiveModuleWrapper type={chapter.interactiveModule.type} />
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4 & 5. INTERPRETATION & CONSEQUENCE: Causal Anatomy (Directive 5 & 10)     */}
      {/* ========================================================================= */}
      <section className="my-14 sm:my-20">
        <CausalChainViewer causalChain={chapter.causalChain} />
      </section>

      {/* ========================================================================= */}
      {/* 5B. DOCUMENTARY DOSSIER: Citations & Archival Sources                      */}
      {/* ========================================================================= */}
      {chapter.citations && chapter.citations.length > 0 && (
        <section aria-label="Scholarly References" className="my-10 pt-6 border-t border-[#E8DDC8]">
          <span className="font-archival-mono text-xs uppercase tracking-widest text-[#5C524E] font-bold block mb-3">
            Scholarly References &amp; Archival Records
          </span>
          <ul className="space-y-2.5 font-archival-mono text-xs text-[#5C524E]">
            {chapter.citations.map((c) => (
              <li
                key={c.id}
                className="flex items-start justify-between gap-3 p-2 rounded-xs hover:bg-[#FAF7F2] transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <CitationMarker id={c.id} label={c.marker} />
                  <div>
                    <span className="text-[#2C2523] font-medium">
                      {c.citation}
                    </span>
                    {c.supportsClaim && (
                      <p className="font-editorial-serif italic text-xs text-[#5C524E] mt-0.5">
                        Supports: {c.supportsClaim}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openCitation(c)}
                  className="text-[11px] font-bold text-[#8B252D] hover:underline uppercase whitespace-nowrap cursor-pointer px-1 py-0.5"
                >
                  Dossier &rarr;
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. THE TRANSITION: The Causal Bridge to the Next Dilemma (Directive 5)    */}
      {/* ========================================================================= */}
      {!isLastChapter && chapter.nextQuestion && (
        <footer className="mt-16 sm:mt-24 pt-8 border-t border-[#E8DDC8]">
          <div className="max-w-2xl">
            <span className="font-archival-mono text-xs uppercase tracking-widest text-[#5C524E] block mb-2">
              The Causal Bridge &rarr; Next Chapter
            </span>
            <h4 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#2C2523] leading-snug">
              {chapter.nextQuestion.question}
            </h4>
            <p className="mt-3 font-editorial-serif text-[#5C524E] text-base sm:text-lg leading-relaxed">
              {chapter.nextQuestion.framing}
            </p>
          </div>
        </footer>
      )}
    </article>
  );
}
