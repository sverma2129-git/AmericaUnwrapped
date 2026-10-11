'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChapterData } from '@/types/vietnam';
import InteractiveModuleWrapper from './InteractiveModuleWrapper';
import CausalFlowViewer from './CausalFlowViewer';
import DualPerspectiveViewer from './DualPerspectiveViewer';
import DocumentInspector from './DocumentInspector';

interface ChapterContentProps {
  chapter: ChapterData;
  nextChapterId?: string;
  nextChapterTitle?: string;
}

export default function ChapterContent({
  chapter,
  nextChapterId,
  nextChapterTitle,
}: ChapterContentProps) {
  // Deep-dive archival tab selector
  const [activeDossierTab, setActiveDossierTab] = useState<'perspectives' | 'documents' | 'narrative'>('perspectives');

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* 1. Masthead & Framing Header */}
      <header className="border-b border-stone-300 dark:border-stone-800 pb-8 sm:pb-12">
        <div className="flex flex-wrap items-center gap-2 font-archival-mono text-xs uppercase tracking-widest text-stone-500 mb-3">
          <span>Inquiry {chapter.number.toString().padStart(2, '0')}</span>
          <span className="text-stone-300 dark:text-stone-700">&bull;</span>
          <span>{chapter.timeframe}</span>
          {chapter.isLandmark && (
            <>
              <span className="text-stone-300 dark:text-stone-700">&bull;</span>
              <span className="text-amber-800 dark:text-amber-300 font-bold">Landmark Turning Point</span>
            </>
          )}
        </div>

        <h1 className="font-editorial-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-[1.15]">
          {chapter.title}
        </h1>

        <p className="mt-3 font-editorial-serif italic text-lg sm:text-2xl text-stone-600 dark:text-stone-400 max-w-3xl">
          {chapter.subtitle}
        </p>

        {/* The Analytical Hook (Typeset as Lead Editorial Paragraph) */}
        <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800/80">
          <p className="font-editorial-serif text-lg sm:text-xl text-stone-800 dark:text-stone-200 leading-relaxed max-w-4xl editorial-dropcap">
            {chapter.summary}
          </p>
        </div>

        {/* Landmark Quote (Restrained Archival Plate) */}
        {chapter.isLandmark && chapter.landmarkMoment && (
          <aside className="mt-6 border-l-2 border-stone-800 dark:border-stone-200 pl-5 py-2">
            <blockquote className="font-editorial-serif text-base sm:text-lg italic text-stone-700 dark:text-stone-300 leading-relaxed">
              &ldquo;{chapter.landmarkMoment.quote}&rdquo;
            </blockquote>
            <div className="mt-1 font-archival-mono text-xs text-stone-500">
              &mdash; {chapter.landmarkMoment.quoteSpeaker}, <span className="italic">{chapter.landmarkMoment.quoteContext}</span> ({chapter.landmarkMoment.dateline})
            </div>
          </aside>
        )}
      </header>

      {/* 2. Central Visual / Interactive Discovery Core (The Hero of the Viewport) */}
      <section aria-label="Interactive Visual Evidence" className="scroll-mt-16">
        <div className="border border-stone-300 dark:border-stone-800 bg-[#f9f7f2] dark:bg-[#161514] p-5 sm:p-8 rounded-xs shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-6 border-b border-stone-200 dark:border-stone-800 gap-2">
            <div>
              <span className="font-archival-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">
                Visual &bull; Tactical &bull; Systemic Evidence
              </span>
              <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                {chapter.interactiveModule.title}
              </h2>
            </div>
            <p className="font-editorial-serif italic text-xs text-stone-600 dark:text-stone-400 max-w-sm">
              {chapter.interactiveModule.prompt}
            </p>
          </div>

          <InteractiveModuleWrapper type={chapter.interactiveModule.type} />
        </div>
      </section>

      {/* 3. The Causal Chain Ledger */}
      <section aria-label="Causal Structure of Decisions" className="scroll-mt-16">
        <CausalFlowViewer causalChain={chapter.causalChain} />
      </section>

      {/* 4. The Archival Dossier: Bilateral Perspectives, Primary Records, Deep Read */}
      <section aria-label="Historical Context and Sources" className="pt-6 border-t border-stone-300 dark:border-stone-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-stone-200 dark:border-stone-800 gap-4">
          <div>
            <span className="font-archival-mono text-[11px] uppercase tracking-widest text-stone-500 block">
              The Documentary Dossier
            </span>
            <h3 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              Evidence, Strategy, and Historical Record
            </h3>
          </div>

          {/* Dossier Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-archival-mono">
            <button
              onClick={() => setActiveDossierTab('perspectives')}
              className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer ${
                activeDossierTab === 'perspectives'
                  ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 font-bold'
                  : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-stone-500'
              }`}
            >
              Bilateral Strategy
            </button>

            {chapter.primaryDocuments && chapter.primaryDocuments.length > 0 && (
              <button
                onClick={() => setActiveDossierTab('documents')}
                className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer ${
                  activeDossierTab === 'documents'
                    ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 font-bold'
                    : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-stone-500'
                }`}
              >
                Primary Sources ({chapter.primaryDocuments.length})
              </button>
            )}

            <button
              onClick={() => setActiveDossierTab('narrative')}
              className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer ${
                activeDossierTab === 'narrative'
                  ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 font-bold'
                  : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-stone-500'
              }`}
            >
              Documented Narrative
            </button>
          </div>
        </div>

        {/* Tab 1: Bilateral Strategy Viewer */}
        {activeDossierTab === 'perspectives' && (
          <div className="space-y-6">
            <DualPerspectiveViewer
              timeframe={chapter.timeframe}
              washington={chapter.washington}
              hanoi={chapter.hanoi}
              ecosystem={chapter.strategicEcosystem}
            />
          </div>
        )}

        {/* Tab 2: Primary Source Documents */}
        {activeDossierTab === 'documents' && (
          <div className="space-y-8">
            {chapter.primaryDocuments.map((doc) => (
              <DocumentInspector key={doc.id} document={doc} />
            ))}
          </div>
        )}

        {/* Tab 3: Complete Contextual Narrative & Milestones */}
        {activeDossierTab === 'narrative' && (
          <div className="space-y-8 max-w-3xl">
            {/* The Historical Narrative */}
            <div className="space-y-6 font-editorial-serif text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-[1.85]">
              {chapter.whatHappened.narrative.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Chronological Milestones */}
            {chapter.whatHappened.keyEvents && chapter.whatHappened.keyEvents.length > 0 && (
              <div className="pt-8 border-t border-stone-200 dark:border-stone-800">
                <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 font-bold block mb-4">
                  Chronological Milestones
                </span>
                <div className="space-y-3">
                  {chapter.whatHappened.keyEvents.map((evt, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-stone-50 dark:bg-[#161514] border border-stone-200 dark:border-stone-800 rounded-xs flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
                    >
                      <span className="font-archival-mono text-xs font-bold text-stone-600 dark:text-stone-400 whitespace-nowrap min-w-[120px]">
                        {evt.date}
                      </span>
                      <div>
                        <div className="font-editorial-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                          {evt.title}
                        </div>
                        <div className="font-editorial-serif text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                          {evt.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Citations & Bibliography */}
            {chapter.citations && chapter.citations.length > 0 && (
              <div className="pt-6 border-t border-stone-200 dark:border-stone-800">
                <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 font-bold block mb-3">
                  Scholarly References
                </span>
                <ul className="space-y-2 font-archival-mono text-xs text-stone-600 dark:text-stone-400">
                  {chapter.citations.map((c) => (
                    <li key={c.id} className="flex items-start gap-2">
                      <span className="font-bold text-stone-400">[{c.marker}]</span>
                      <span>{c.citation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </section>

      {/* 5. Forward Causal Bridge (Next Inquiry) */}
      <footer className="border-t-2 border-stone-900 dark:border-stone-100 pt-8 pb-12">
        <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 block mb-2">
          The Resulting Dilemma &rarr;
        </span>
        <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-3">
          {chapter.nextQuestion.question}
        </h3>
        <p className="font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-6 max-w-2xl">
          {chapter.nextQuestion.framing}
        </p>

        {nextChapterId ? (
          <Link
            href={`/vietnam/${nextChapterId}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-stone-100 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 font-archival-mono text-xs font-bold uppercase tracking-wider transition-colors rounded-sm"
          >
            <span>Proceed to Chapter {(chapter.number + 1).toString().padStart(2, '0')}: {nextChapterTitle} &rarr;</span>
          </Link>
        ) : (
          <Link
            href="/vietnam"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-stone-100 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 font-archival-mono text-xs font-bold uppercase tracking-wider transition-colors rounded-sm"
          >
            <span>Return to Vietnam Overview &rarr;</span>
          </Link>
        )}
      </footer>
    </article>
  );
}
