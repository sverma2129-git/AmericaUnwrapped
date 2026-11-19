'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChapterData } from '@/types/vietnam';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { getChapterPart } from '@/data/vietnam/chapters';
import { splitTakeaway } from '@/lib/takeaways';
import InteractiveModuleWrapper from './InteractiveModuleWrapper';
import CausalFlowViewer from './CausalFlowViewer';
import DualPerspectiveViewer from './DualPerspectiveViewer';
import DocumentInspector from './DocumentInspector';
import { useCitation } from '@/components/common/CitationContext';
import CitationMarker from '@/components/common/CitationMarker';
import CitedParagraph from '@/components/common/CitedParagraph';
import DocumentFacsimile from '@/components/common/DocumentFacsimile';
import PersonalStoryCard from './PersonalStoryCard';
import SectionHead from './SectionHead';
import Figure from '@/components/common/Figure';
import { ChapterFlashcardsBlock, ChapterQuizBlock } from '@/components/study/ChapterPractice';

interface ChapterContentProps {
  chapter: ChapterData;
  nextChapterId?: string;
  nextChapterTitle?: string;
}

/**
 * The standard chapter, laid out like a magazine article: headline and
 * question, a lead photograph, the story with a margin for the short version
 * and the dates, then the interactive, cause and effect, test prep and sources.
 */
export default function ChapterContent({ chapter, nextChapterId, nextChapterTitle }: ChapterContentProps) {
  const { openCitation } = useCitation();
  const [sourcesTab, setSourcesTab] = useState<'perspectives' | 'documents' | 'citations'>('perspectives');
  const study = ALL_CHAPTERS_STUDY_DATA[chapter.id];
  const part = getChapterPart(chapter);
  const ref = { id: chapter.id, number: chapter.number, title: chapter.title };
  const narrative = chapter.whatHappened.narrative;
  // The document sits after the second paragraph, where the story has set it up.
  const documentAfter = Math.min(1, narrative.length - 1);

  const sections = [
    { id: 'story', label: 'The story' },
    { id: 'explore', label: 'Explore' },
    { id: 'causal', label: 'Cause and effect' },
    study && { id: 'test', label: 'For the test' },
    { id: 'sources', label: 'Sources' },
  ].filter(Boolean) as { id: string; label: string }[];

  const tabs = [
    { id: 'perspectives' as const, label: 'What each side wanted', show: true },
    { id: 'documents' as const, label: `Documents (${chapter.primaryDocuments?.length ?? 0})`, show: (chapter.primaryDocuments?.length ?? 0) > 0 },
    { id: 'citations' as const, label: `Works cited (${chapter.citations?.length ?? 0})`, show: (chapter.citations?.length ?? 0) > 0 },
  ].filter((t) => t.show);

  return (
    <article className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header className="max-w-4xl">
        <p className="text-sm text-ink-muted">
          {part ? `Part ${part.number}, ` : ''}Chapter {chapter.number}, {chapter.timeframe}
          {chapter.isLandmark && <span className="text-brand">, a turning point</span>}
        </p>
        <h1 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{chapter.title}</h1>
        <p className="mt-4 max-w-[40ch] font-serif text-xl leading-snug text-ink">{study?.bigQuestion ?? chapter.subtitle}</p>
        {study?.whyItMatters && <p className="mt-4 max-w-[62ch] text-base text-ink-muted">{study.whyItMatters}</p>}
        <nav aria-label="In this chapter" className="mt-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="font-medium text-ink-muted underline decoration-rule-strong underline-offset-4 hover:text-brand hover:decoration-brand">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {chapter.leadImageId && (
        <div className="mt-10">
          <Figure imageId={chapter.leadImageId} priority />
        </div>
      )}

      {/* The story, with the short version and the dates in the margin */}
      <div className="mt-16 grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <section id="story" aria-labelledby="story-title" className="min-w-0">
          <SectionHead id="story-title" title="What happened" />
          <div className="reading mt-6 space-y-6 text-ink">
            {narrative.map((paragraph, idx) => (
              <React.Fragment key={idx}>
                <CitedParagraph text={paragraph} />
                {idx === documentAfter && chapter.featuredDocument && (
                  <div className="py-4 font-sans">
                    <DocumentFacsimile doc={chapter.featuredDocument} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {chapter.galleryImageIds && chapter.galleryImageIds.length > 0 && (
            <div className="mt-12 space-y-10">
              {chapter.galleryImageIds.map((id) => (
                <Figure key={id} imageId={id} />
              ))}
            </div>
          )}

          {chapter.personalStory && (
            <div className="mt-14">
              <PersonalStoryCard story={chapter.personalStory} />
            </div>
          )}
        </section>

        <aside aria-label="The chapter at a glance" className="space-y-10 lg:pt-1">
          {study?.briefing && (
            <section aria-labelledby="brief-title">
              <h2 id="brief-title" className="border-t border-ink pt-3 text-sm font-bold text-ink">
                The short version
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{study.briefing.summary}</p>
            </section>
          )}
          {chapter.whatHappened.keyEvents && chapter.whatHappened.keyEvents.length > 0 && (
            <section aria-labelledby="dates-title">
              <h2 id="dates-title" className="border-t border-ink pt-3 text-sm font-bold text-ink">
                Key dates
              </h2>
              <ol className="mt-3 space-y-4">
                {chapter.whatHappened.keyEvents.map((evt) => (
                  <li key={`${evt.date}-${evt.title}`}>
                    <p className="text-xs font-semibold tabular-nums text-brand">{evt.date}</p>
                    <p className="mt-0.5 text-sm font-semibold leading-snug text-ink">{evt.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">{evt.detail}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </aside>
      </div>

      {/* The one framed object on the page: the interactive */}
      <section id="explore" aria-labelledby="explore-title" className="mt-20">
        <div className="-mx-4 bg-parchment px-4 py-10 sm:mx-0 sm:rounded-sm sm:px-8 sm:py-12">
          <h2 id="explore-title" className="font-display text-2xl font-bold tracking-tight text-ink">
            {chapter.interactiveModule.title}
          </h2>
          <p className="mt-2 max-w-[62ch] text-base text-ink-muted">{chapter.interactiveModule.prompt}</p>
          <div className="mt-8">
            <InteractiveModuleWrapper type={chapter.interactiveModule.type} />
          </div>
        </div>
      </section>

      <section id="causal" aria-labelledby="causal-title" className="mt-20">
        <SectionHead id="causal-title" title="Cause and effect">
          One decision from this chapter, followed step by step to a result nobody planned.
        </SectionHead>
        <div className="mt-8">
          <CausalFlowViewer causalChain={chapter.causalChain} showHeading={false} />
        </div>
      </section>

      {study && (
        <section id="test" aria-labelledby="test-title" className="mt-20">
          <SectionHead id="test-title" title="For the test" />
          <div className="mt-8 grid gap-x-14 gap-y-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold text-ink">What to know</h3>
              <ol className="mt-3 divide-y divide-rule border-y border-rule">
                {study.briefing.examTakeaways.map((t) => {
                  const { label, text } = splitTakeaway(t);
                  return (
                    <li key={t} className="py-3.5 text-base text-ink-muted">
                      {label && <span className="font-semibold text-ink">{label}. </span>}
                      {text}
                    </li>
                  );
                })}
              </ol>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">Key terms</h3>
              <dl className="mt-3 divide-y divide-rule border-y border-rule">
                {study.briefing.keyTerms.map((term) => (
                  <div key={term.id} className="py-3.5">
                    <dt className="font-semibold text-ink">{term.term}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-ink-muted">{term.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {study.quiz && study.quiz.length > 0 && (
            <div className="mt-14">
              <h3 id="quiz" className="font-display text-xl font-bold text-ink">
                Practice quiz
              </h3>
              <p className="mt-1 max-w-[62ch] text-base text-ink-muted">
                {study.quiz.length} questions on this chapter. Each explanation appears after you check your answer.
              </p>
              <div className="mt-6">
                <ChapterQuizBlock chapter={ref} questions={study.quiz} />
              </div>
            </div>
          )}

          {study.flashcards && study.flashcards.length > 0 && (
            <div className="mt-14">
              <h3 id="flashcards" className="font-display text-xl font-bold text-ink">
                Flashcards
              </h3>
              <p className="mt-1 max-w-[62ch] text-base text-ink-muted">Look at the term, say what it means, then flip the card to check.</p>
              <div className="mt-6">
                <ChapterFlashcardsBlock chapter={ref} terms={study.flashcards} />
              </div>
            </div>
          )}
        </section>
      )}

      <section id="sources" aria-labelledby="sources-title" className="mt-20">
        <SectionHead id="sources-title" title="Sources">
          What each side wanted, the original documents, and every work this chapter cites.
        </SectionHead>

        <div role="tablist" aria-label="Sources" className="mt-6 flex gap-6 overflow-x-auto border-b border-rule">
          {tabs.map((t) => {
            const selected = sourcesTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`sources-tab-${t.id}`}
                aria-selected={selected}
                aria-controls="sources-panel"
                onClick={() => setSourcesTab(t.id)}
                className={`-mb-px shrink-0 cursor-pointer border-b-2 py-3 text-sm font-semibold ${
                  selected ? 'border-brand text-ink' : 'border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id="sources-panel" aria-labelledby={`sources-tab-${sourcesTab}`} className="pt-2">
          {sourcesTab === 'perspectives' && (
            <DualPerspectiveViewer
              timeframe={chapter.timeframe}
              washington={chapter.washington}
              hanoi={chapter.hanoi}
              ecosystem={chapter.strategicEcosystem}
            />
          )}

          {sourcesTab === 'documents' && (
            <div className="space-y-8 pt-8">
              {chapter.primaryDocuments.map((doc) => (
                <DocumentInspector key={doc.id} document={doc} />
              ))}
            </div>
          )}

          {sourcesTab === 'citations' && (
            <ol className="mt-6 divide-y divide-rule border-y border-rule">
              {chapter.citations.map((c) => (
                <li key={c.id} className="flex items-start justify-between gap-4 py-4">
                  <div className="flex items-start gap-3">
                    <CitationMarker id={c.id} label={c.marker} />
                    <div className="text-sm leading-relaxed">
                      <p className="text-ink">{c.citation}</p>
                      {c.supportsClaim && <p className="mt-1 text-ink-muted">Used for: {c.supportsClaim}</p>}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openCitation(c)}
                    className="shrink-0 cursor-pointer text-sm font-semibold text-brand underline decoration-brand-rule underline-offset-2 hover:decoration-brand"
                  >
                    Details
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <footer className="mt-20 border-t border-ink pt-10">
        <p className="text-sm text-ink-muted">Up next</p>
        <h2 className="mt-1 max-w-3xl font-serif text-xl leading-snug text-ink">{chapter.nextQuestion.question}</h2>
        <p className="mt-3 max-w-[62ch] text-base text-ink-muted">{chapter.nextQuestion.framing}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {nextChapterId ? (
            <Link href={`/vietnam/${nextChapterId}`} className="rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover">
              Chapter {chapter.number + 1}: {nextChapterTitle}
            </Link>
          ) : (
            <Link href="/vietnam/study-guide" className="rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover">
              Go to the study guide
            </Link>
          )}
          <Link href="/vietnam" className="text-sm font-medium text-ink-muted hover:text-brand">
            All chapters
          </Link>
        </div>
      </footer>
    </article>
  );
}
