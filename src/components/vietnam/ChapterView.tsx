'use client';

import React from 'react';
import { ChapterData } from '@/types/vietnam';
import DualPerspectiveViewer from './DualPerspectiveViewer';
import CausalChainViewer from './CausalChainViewer';
import DocumentInspector from './DocumentInspector';
import InteractiveModuleWrapper from './InteractiveModuleWrapper';

interface ChapterViewProps {
  chapter: ChapterData;
  isLastChapter?: boolean;
}

export default function ChapterView({ chapter, isLastChapter }: ChapterViewProps) {
  const leadParagraph = chapter.whatHappened.narrative[0] || chapter.summary;
  const remainingParagraphs = chapter.whatHappened.narrative.slice(1);

  return (
    <article
      id={chapter.id}
      className="py-20 sm:py-32 border-b border-stone-200 dark:border-stone-800 scroll-mt-20 max-w-4xl mx-auto"
    >
      {/* ========================================================================= */}
      {/* 1. THE HOOK & CHAPTER MASTHEAD */}
      {/* ========================================================================= */}
      <header className="mb-14 sm:mb-18">
        {/* Chapter Metadata Line */}
        <div className="flex items-center gap-3 mb-4 font-archival-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
          <span className="font-bold text-stone-900 dark:text-stone-100">
            Chapter {chapter.number.toString().padStart(2, '0')}
          </span>
          <span aria-hidden="true">&bull;</span>
          <span>{chapter.timeframe}</span>
        </div>

        {/* Chapter Headline */}
        <h2 className="font-editorial-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
          {chapter.title}
        </h2>

        {/* Chapter Subtitle */}
        <p className="mt-3 font-editorial-serif italic text-xl sm:text-2xl text-stone-600 dark:text-stone-400 font-normal">
          {chapter.subtitle}
        </p>

        {/* ======================================================================= */}
        {/* LANDMARK VISUAL WEIGHT: 5 Critical Turning Points (Directive 7)        */}
        {/* Dien Bien Phu, Tonkin, Tet, Paris Peace Accords, Fall of Saigon         */}
        {/* ======================================================================= */}
        {chapter.isLandmark && chapter.landmarkMoment && (
          <aside className="my-10 p-6 sm:p-10 bg-[#161514] text-[#fbf9f5] border border-stone-800 shadow-sm relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3 text-xs font-archival-mono text-stone-400">
              <span className="uppercase tracking-widest font-bold text-amber-300">
                Landmark Turning Point &bull; {chapter.landmarkMoment.location}
              </span>
              <span>{chapter.landmarkMoment.dateline}</span>
            </div>

            <div className="mt-6">
              <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {chapter.landmarkMoment.bannerTitle}
              </h3>

              <blockquote className="mt-4 border-l-2 border-amber-400 pl-4 py-1 font-editorial-serif italic text-lg sm:text-xl text-stone-200 leading-relaxed">
                &ldquo;{chapter.landmarkMoment.quote}&rdquo;
              </blockquote>

              <footer className="mt-3 text-xs font-archival-mono text-stone-400">
                &mdash; {chapter.landmarkMoment.quoteSpeaker} ({chapter.landmarkMoment.quoteContext})
              </footer>
            </div>
          </aside>
        )}

        {/* The Lead Hook Paragraph with Drop-Cap (Directive 3 & 5) */}
        <div className="mt-10 font-editorial-serif text-xl sm:text-2xl leading-relaxed text-stone-900 dark:text-stone-100 editorial-dropcap">
          <p>{leadParagraph}</p>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. THE CONTEXT: Multi-Polar Reality (Directive 5 & 9)                      */}
      {/* Washington -> Hanoi -> South Vietnam -> Battlefield -> Public             */}
      {/* ========================================================================= */}
      <section className="my-12 sm:my-16 space-y-6 sm:space-y-8 font-editorial-serif text-lg sm:text-xl text-stone-800 dark:text-stone-200 leading-[1.85]">
        {remainingParagraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
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
            <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-1">
              Historical Evidence &bull; Archival Record
            </span>
            <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
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
            <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-1">
              Interactive Evidence Module
            </span>
            <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
              {chapter.interactiveModule.title}
            </h3>
            <p className="mt-1 font-editorial-serif text-stone-600 dark:text-stone-400 italic text-base">
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
      {/* 6. THE TRANSITION: The Causal Bridge to the Next Dilemma (Directive 5)    */}
      {/* ========================================================================= */}
      {!isLastChapter && chapter.nextQuestion && (
        <footer className="mt-16 sm:mt-24 pt-8 border-t border-stone-300 dark:border-stone-800">
          <div className="max-w-2xl">
            <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-2">
              The Causal Bridge &rarr; Next Chapter
            </span>
            <h4 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
              {chapter.nextQuestion.question}
            </h4>
            <p className="mt-3 font-editorial-serif text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed">
              {chapter.nextQuestion.framing}
            </p>
          </div>
        </footer>
      )}
    </article>
  );
}
