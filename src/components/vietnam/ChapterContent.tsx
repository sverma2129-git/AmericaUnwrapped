'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChapterData } from '@/types/vietnam';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { CHAPTER_COUNT } from '@/data/vietnam/chapters';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { isVerbatimQuotation } from '@/lib/citations';
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
import Icon from '@/components/common/Icon';

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

  // Quotation marks only for a registered verbatim quotation; anything else is shown as a paraphrase.
  const landmarkCitation = chapter.landmarkMoment?.quoteCitationId
    ? CITATION_REGISTRY[chapter.landmarkMoment.quoteCitationId]
    : undefined;
  const landmarkQuote = landmarkCitation && isVerbatimQuotation(landmarkCitation) ? landmarkCitation : undefined;

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16">
      {/* 1. Masthead & Inquiry Framing */}
      <header className="border-b border-rule pb-8 sm:pb-12 space-y-4">
        <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.12]">
          {chapter.title}
        </h1>

        <p className="font-display text-lg sm:text-2xl text-ink-muted max-w-3xl leading-relaxed">
          {chapter.subtitle}
        </p>

        <p className="meta text-ink-soft">
          Chapter {chapter.number} &middot; {chapter.timeframe}
          {chapter.isLandmark && <span className="text-brand"> &middot; Turning point</span>}
        </p>

        {/* Central Historical Inquiry Banner */}
        <div className="mt-8 bg-parchment border border-rule p-5 sm:p-6 rounded-md">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-ink leading-snug">
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border font-medium transition-colors bg-surface text-ink-muted border-rule hover:text-ink hover:border-rule-strong"
          >
            <Icon name="zap" />
            60-Sec Briefing
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border font-medium transition-colors bg-surface text-ink-muted border-rule hover:text-ink hover:border-rule-strong"
          >
            <Icon name="book" />
            The Story
          </a>
          <a
            href="#evidence"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border font-medium transition-colors bg-surface text-ink-muted border-rule hover:text-ink hover:border-rule-strong"
          >
            <Icon name="map" />
            Tactical Evidence
          </a>
          <a
            href="#causal"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border font-medium transition-colors bg-surface text-ink-muted border-rule hover:text-ink hover:border-rule-strong"
          >
            <Icon name="link" />
            Cause &amp; Effect
          </a>
          {studyData?.quiz && studyData.quiz.length > 0 && (
            <a
              href="#quiz"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border font-medium transition-colors bg-brand-tint text-brand border-brand-rule hover:border-brand font-semibold"
            >
              <Icon name="pen" />
            Practice Quiz
            </a>
          )}
          {studyData?.flashcards && studyData.flashcards.length > 0 && (
            <a
              href="#flashcards"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border font-medium transition-colors bg-surface text-ink-muted border-rule hover:text-ink hover:border-rule-strong"
            >
              <Icon name="layers" />
            Flashcards
            </a>
          )}
          <a
            href="#dossier"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border font-medium transition-colors bg-surface text-ink-muted border-rule hover:text-ink hover:border-rule-strong"
          >
            <Icon name="folder" />
            Sources ({chapter.primaryDocuments?.length || 0})
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
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
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
          <aside className="my-8 max-w-3xl mx-auto border-l border-brand bg-parchment p-5 sm:p-6 rounded-r-xs border-t border-r border-b border-rule">
            {landmarkQuote ? (
              <blockquote className="font-display text-lg sm:text-xl text-ink leading-relaxed">
                &ldquo;{landmarkQuote.exactQuotation}&rdquo;
                <CitationMarker id={landmarkQuote.id} />
              </blockquote>
            ) : (
              <>
                <span className="meta text-ink-soft block mb-2">Historian&rsquo;s account (paraphrased)</span>
                <p className="font-display text-lg sm:text-xl text-ink leading-relaxed">
                  {chapter.landmarkMoment.quote}
                </p>
              </>
            )}
            <div className="mt-3 font-sans text-xs text-ink-muted">
              &mdash; <strong className="text-ink">{chapter.landmarkMoment.quoteSpeaker}</strong>,{' '}
              <span className="italic">{chapter.landmarkMoment.quoteContext}</span> ({chapter.landmarkMoment.dateline})
            </div>
          </aside>
        )}

        {/* Key Chronological Milestones */}
        {chapter.whatHappened.keyEvents && chapter.whatHappened.keyEvents.length > 0 && (
          <div className="max-w-3xl mx-auto pt-6 border-t border-rule">
            <span className="text-xs font-bold text-brand block mb-4">
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
                    <div className="font-display font-bold text-base text-ink">
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
        <div className="border border-rule bg-parchment p-5 sm:p-8 rounded-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-6 border-b border-rule gap-2">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
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
            <h3 className="font-display text-2xl font-bold text-ink">
              The Documentary Evidence Dossier
            </h3>
          </div>

          {/* Dossier Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            <button
              onClick={() => setActiveDossierTab('perspectives')}
              className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer font-medium ${ activeDossierTab === 'perspectives' ? 'bg-brand text-white border-brand font-bold' : 'bg-white text-ink-muted border-rule hover:border-brand' }`}
            >
              Bilateral Strategy
            </button>

            {chapter.primaryDocuments && chapter.primaryDocuments.length > 0 && (
              <button
                onClick={() => setActiveDossierTab('documents')}
                className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer font-medium ${ activeDossierTab === 'documents' ? 'bg-brand text-white border-brand font-bold' : 'bg-white text-ink-muted border-rule hover:border-brand' }`}
              >
                Primary Sources ({chapter.primaryDocuments.length})
              </button>
            )}

            {chapter.citations && chapter.citations.length > 0 && (
              <button
                onClick={() => setActiveDossierTab('citations')}
                className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer font-medium ${ activeDossierTab === 'citations' ? 'bg-brand text-white border-brand font-bold' : 'bg-white text-ink-muted border-rule hover:border-brand' }`}
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
                    className="text-xs font-semibold text-brand hover:underline whitespace-nowrap cursor-pointer px-2.5 py-1 bg-white border border-rule rounded-xs"
                  >
                    Dossier
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 9. Forward Causal Bridge (Next Inquiry) */}
      <footer className="border-t border-rule pt-8 pb-12">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-3">
          {chapter.nextQuestion.question}
        </h3>
        <p className="font-sans text-base text-ink-muted leading-relaxed mb-6 max-w-2xl">
          {chapter.nextQuestion.framing}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {nextChapterId ? (
            <Link
              href={`/vietnam/${nextChapterId}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-hover text-white text-xs font-semibold transition-colors rounded-xs"
            >
              <span>Proceed to Chapter {(chapter.number + 1).toString().padStart(2, '0')}: {nextChapterTitle}</span>
            </Link>
          ) : (
            <Link
              href="/vietnam/study-guide"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-hover text-white text-xs font-semibold transition-colors rounded-xs"
            >
              <span>Master Unit Study Guide &amp; Exam Review</span>
            </Link>
          )}

          <Link
            href="/vietnam"
            className="inline-flex items-center gap-2 px-5 py-3.5 border border-rule bg-parchment hover:bg-rule text-ink text-xs font-medium transition-colors rounded-xs"
          >
            <span>All {CHAPTER_COUNT} Chapters Overview</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
