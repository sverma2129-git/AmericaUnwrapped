'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChapterData } from '@/types/vietnam';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { CHAPTER_COUNT } from '@/data/vietnam/chapters';
import QuickBriefing from '@/components/study/QuickBriefing';
import ChapterQuiz from '@/components/study/ChapterQuiz';
import FlashcardDeck from '@/components/study/FlashcardDeck';
import InteractiveModuleWrapper from './InteractiveModuleWrapper';
import CausalFlowViewer from './CausalFlowViewer';
import DualPerspectiveViewer from './DualPerspectiveViewer';
import DocumentInspector from './DocumentInspector';
import { useCitation } from '@/components/common/CitationContext';
import CitationMarker from '@/components/common/CitationMarker';
import CitedParagraph from '@/components/common/CitedParagraph';
import PersonalStoryCard from './PersonalStoryCard';

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
  const { openCitation } = useCitation();
  const [activeDossierTab, setActiveDossierTab] = useState<'perspectives' | 'documents' | 'citations'>('perspectives');

  // Study data for this chapter
  const studyData = ALL_CHAPTERS_STUDY_DATA[chapter.id];

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16">
      {/* 1. Masthead & Inquiry Framing */}
      <header className="border-b border-rule pb-8 sm:pb-12 space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
          <span className="font-semibold text-brand">
            Inquiry {chapter.number.toString().padStart(2, '0')}
          </span>
          <span>&bull;</span>
          <span>{chapter.timeframe}</span>
          {chapter.isLandmark && (
            <>
              <span>&bull;</span>
              <span className="text-brand font-bold bg-brand-tint border border-brand-rule px-2 py-0.5 rounded-xs">
                Turning Point
              </span>
            </>
          )}
        </div>

        <h1 className="font-editorial-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.12]">
          {chapter.title}
        </h1>

        <p className="font-editorial-serif italic text-lg sm:text-2xl text-ink-muted max-w-3xl leading-relaxed">
          {chapter.subtitle}
        </p>

        {/* Central Historical Inquiry Banner */}
        <div className="mt-8 bg-parchment border-l-4 border-brand border-t border-r border-b border-rule p-5 sm:p-6 rounded-r-xs shadow-2xs">
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
            The Central Historical Question
          </span>
          <h2 className="font-editorial-serif text-xl sm:text-2xl font-bold text-ink leading-snug">
            {studyData?.bigQuestion || chapter.subtitle}
          </h2>
          {studyData?.whyItMatters && (
            <p className="mt-2.5 font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
              <strong className="text-ink font-semibold">Why It Matters for Exams &amp; History:</strong>{' '}
              {studyData.whyItMatters}
            </p>
          )}
        </div>

        {/* Quick-Jump Section Anchors for Students */}
        <nav aria-label="Chapter sections" className="mt-6 flex flex-wrap gap-2 text-xs">
          <a
            href="#briefing"
            className="px-3 py-1.5 bg-parchment hover:bg-rule text-ink rounded-xs transition-colors border border-rule font-medium"
          >
            ⚡ 60-Sec Briefing
          </a>
          <a
            href="#story"
            className="px-3 py-1.5 bg-parchment hover:bg-rule text-ink rounded-xs transition-colors border border-rule font-medium"
          >
            📖 The Story
          </a>
          <a
            href="#evidence"
            className="px-3 py-1.5 bg-parchment hover:bg-rule text-ink rounded-xs transition-colors border border-rule font-medium"
          >
            🗺️ Tactical Evidence
          </a>
          <a
            href="#causal"
            className="px-3 py-1.5 bg-parchment hover:bg-rule text-ink rounded-xs transition-colors border border-rule font-medium"
          >
            🔗 Cause &amp; Effect
          </a>
          {studyData?.quiz && studyData.quiz.length > 0 && (
            <a
              href="#quiz"
              className="px-3 py-1.5 bg-brand-tint text-brand hover:bg-[#FBE8EA] rounded-xs transition-colors border border-brand-rule font-semibold"
            >
              ✍️ Practice Quiz
            </a>
          )}
          {studyData?.flashcards && studyData.flashcards.length > 0 && (
            <a
              href="#flashcards"
              className="px-3 py-1.5 bg-parchment hover:bg-rule text-ink rounded-xs transition-colors border border-rule font-medium"
            >
              🃏 Flashcards
            </a>
          )}
          <a
            href="#dossier"
            className="px-3 py-1.5 bg-parchment hover:bg-rule text-ink rounded-xs transition-colors border border-rule font-medium"
          >
            📂 Sources ({chapter.primaryDocuments?.length || 0})
          </a>
        </nav>
      </header>

      {/* 2. Quick Briefing (Summary + Exam Takeaways + Key Terms) */}
      {studyData?.briefing && (
        <section id="briefing" aria-label="Student Briefing" className="scroll-mt-24">
          <QuickBriefing
            bigQuestion={studyData.bigQuestion}
            whyItMatters={studyData.whyItMatters}
            summary={studyData.briefing.summary}
            examTakeaways={studyData.briefing.examTakeaways}
            keyTerms={studyData.briefing.keyTerms}
          />
        </section>
      )}

      {/* 3. The Core Story: Unburied, Readable, Beautiful Narrative */}
      <section id="story" aria-label="The Historical Story" className="scroll-mt-24 space-y-8">
        <div className="border-b border-rule pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
            Section 02 &bull; The Historical Narrative
          </span>
          <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-ink">
            How Events Unfolded
          </h2>
          <p className="font-sans text-sm text-ink-muted mt-1">
            Carefully researched narrative grounded in primary sources and declassified records.
          </p>
        </div>

        {/* Narrative Prose */}
        <div className="max-w-3xl mx-auto space-y-6 font-sans text-base sm:text-lg text-ink leading-[1.8]">
          {chapter.whatHappened.narrative.map((paragraph, idx) => (
            <div key={idx} className={idx === 0 ? 'editorial-dropcap' : ''}>
              <CitedParagraph text={paragraph} />
            </div>
          ))}
        </div>

        {/* Landmark Quote Callout (if present) */}
        {chapter.isLandmark && chapter.landmarkMoment && (
          <aside className="my-8 max-w-3xl mx-auto border-l-4 border-brand bg-parchment p-5 sm:p-6 rounded-r-xs border-t border-r border-b border-rule">
            <div className="font-editorial-serif text-lg sm:text-xl italic text-ink leading-relaxed">
              &ldquo;{chapter.landmarkMoment.quote}&rdquo;
            </div>
            <div className="mt-3 font-sans text-xs text-ink-muted">
              &mdash; <strong className="text-ink">{chapter.landmarkMoment.quoteSpeaker}</strong>,{' '}
              <span className="italic">{chapter.landmarkMoment.quoteContext}</span> ({chapter.landmarkMoment.dateline})
            </div>
          </aside>
        )}

        {/* Key Chronological Milestones */}
        {chapter.whatHappened.keyEvents && chapter.whatHappened.keyEvents.length > 0 && (
          <div className="max-w-3xl mx-auto pt-6 border-t border-rule">
            <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-4">
              Chronological Timeline &bull; Key Milestones
            </span>
            <div className="space-y-3">
              {chapter.whatHappened.keyEvents.map((evt, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-parchment border border-rule rounded-xs flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
                >
                  <span className="font-semibold text-xs text-brand whitespace-nowrap min-w-[130px]">
                    {evt.date}
                  </span>
                  <div>
                    <div className="font-editorial-serif font-bold text-base text-ink">
                      {evt.title}
                    </div>
                    <div className="font-sans text-sm text-ink-muted mt-1 leading-relaxed">
                      {evt.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. Interactive Tactical / Visual Evidence Core */}
      {chapter.personalStory && <PersonalStoryCard story={chapter.personalStory} />}

      <section id="evidence" aria-label="Interactive Visual Evidence" className="scroll-mt-24">
        <div className="border border-rule bg-parchment p-5 sm:p-8 rounded-xs shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-6 border-b border-rule gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
                Visual &bull; Tactical &bull; Spatial Investigation
              </span>
              <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-ink">
                {chapter.interactiveModule.title}
              </h2>
            </div>
            <p className="font-sans text-xs text-ink-muted max-w-sm">
              {chapter.interactiveModule.prompt}
            </p>
          </div>

          <InteractiveModuleWrapper type={chapter.interactiveModule.type} />
        </div>
      </section>

      {/* 5. Causal Flow Ledger: Chain of Decisions */}
      <section id="causal" aria-label="Causal Structure of Decisions" className="scroll-mt-24">
        <CausalFlowViewer causalChain={chapter.causalChain} />
      </section>

      {/* 6. Test Your Understanding: Interactive Quiz */}
      {studyData?.quiz && studyData.quiz.length > 0 && (
        <section id="quiz" aria-label="Chapter Quiz" className="scroll-mt-24">
          <ChapterQuiz
            questions={studyData.quiz}
            title={`Check Your Knowledge: Inquiry ${chapter.number.toString().padStart(2, '0')}`}
          />
        </section>
      )}

      {/* 7. Key Term Flashcards */}
      {studyData?.flashcards && studyData.flashcards.length > 0 && (
        <section id="flashcards" aria-label="Flashcards" className="scroll-mt-24">
          <FlashcardDeck
            cards={studyData.flashcards}
            title={`Vocabulary Flashcards: Inquiry ${chapter.number.toString().padStart(2, '0')}`}
          />
        </section>
      )}

      {/* 8. Archival Dossier: Bilateral Perspectives, Primary Sources, Scholarly References */}
      <section id="dossier" aria-label="Archival Records and Sources" className="pt-8 border-t border-rule scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-rule gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand block">
              Historical Verification &bull; Archival Records
            </span>
            <h3 className="font-editorial-serif text-2xl font-bold text-ink">
              The Documentary Evidence Dossier
            </h3>
          </div>

          {/* Dossier Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            <button
              onClick={() => setActiveDossierTab('perspectives')}
              className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer font-medium ${
                activeDossierTab === 'perspectives'
                  ? 'bg-brand text-white border-brand font-bold'
                  : 'bg-white text-ink-muted border-rule hover:border-brand'
              }`}
            >
              Bilateral Strategy
            </button>

            {chapter.primaryDocuments && chapter.primaryDocuments.length > 0 && (
              <button
                onClick={() => setActiveDossierTab('documents')}
                className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer font-medium ${
                  activeDossierTab === 'documents'
                    ? 'bg-brand text-white border-brand font-bold'
                    : 'bg-white text-ink-muted border-rule hover:border-brand'
                }`}
              >
                Primary Sources ({chapter.primaryDocuments.length})
              </button>
            )}

            {chapter.citations && chapter.citations.length > 0 && (
              <button
                onClick={() => setActiveDossierTab('citations')}
                className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer font-medium ${
                  activeDossierTab === 'citations'
                    ? 'bg-brand text-white border-brand font-bold'
                    : 'bg-white text-ink-muted border-rule hover:border-brand'
                }`}
              >
                Citations ({chapter.citations.length})
              </button>
            )}
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

        {/* Tab 3: Citations & Bibliography */}
        {activeDossierTab === 'citations' && (
          <div className="pt-2">
            <ul className="space-y-3 text-xs text-ink-muted">
              {chapter.citations.map((c) => (
                <li
                  key={c.id}
                  className="flex items-start justify-between gap-3 p-3.5 rounded-xs border border-rule bg-parchment hover:border-brand transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <CitationMarker id={c.id} label={c.marker} />
                    <div>
                      <span className="text-ink font-medium">
                        {c.citation}
                      </span>
                      {c.supportsClaim && (
                        <p className="font-sans text-xs text-ink-muted mt-1">
                          Supports: {c.supportsClaim}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openCitation(c)}
                    className="text-xs font-semibold text-brand hover:underline uppercase whitespace-nowrap cursor-pointer px-2.5 py-1 bg-white border border-rule rounded-xs"
                  >
                    Dossier &rarr;
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 9. Forward Causal Bridge (Next Inquiry) */}
      <footer className="border-t border-rule pt-8 pb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-2">
          The Resulting Dilemma &rarr;
        </span>
        <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-ink mb-3">
          {chapter.nextQuestion.question}
        </h3>
        <p className="font-sans text-base text-ink-muted leading-relaxed mb-6 max-w-2xl">
          {chapter.nextQuestion.framing}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {nextChapterId ? (
            <Link
              href={`/vietnam/${nextChapterId}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-xs"
            >
              <span>Proceed to Chapter {(chapter.number + 1).toString().padStart(2, '0')}: {nextChapterTitle} &rarr;</span>
            </Link>
          ) : (
            <Link
              href="/vietnam/study-guide"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-xs"
            >
              <span>Master Unit Study Guide &amp; Exam Review &rarr;</span>
            </Link>
          )}

          <Link
            href="/vietnam"
            className="inline-flex items-center gap-2 px-5 py-3.5 border border-rule bg-parchment hover:bg-rule text-ink text-xs font-medium uppercase tracking-wider transition-colors rounded-xs"
          >
            <span>All {CHAPTER_COUNT} Chapters Overview</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
