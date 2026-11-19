'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChapterData } from '@/types/vietnam';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { isVerbatimQuotation } from '@/lib/citations';
import { splitTakeaway } from '@/lib/takeaways';
import InteractiveModuleWrapper from './InteractiveModuleWrapper';
import CausalFlowViewer from './CausalFlowViewer';
import DualPerspectiveViewer from './DualPerspectiveViewer';
import DocumentInspector from './DocumentInspector';
import { useCitation } from '@/components/common/CitationContext';
import CitationMarker from '@/components/common/CitationMarker';
import CitedParagraph from '@/components/common/CitedParagraph';
import PersonalStoryCard from './PersonalStoryCard';
import Figure from '@/components/common/Figure';
import { ChapterFlashcardsBlock, ChapterQuizBlock } from '@/components/study/ChapterPractice';

interface ChapterContentProps {
  chapter: ChapterData;
  nextChapterId?: string;
  nextChapterTitle?: string;
}

const sectionTitle = 'font-display text-[1.75rem] font-bold tracking-tight text-ink sm:text-[2.125rem]';
const sectionLede = 'mt-2 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-muted';

/** The standard chapter: question, summary, story, evidence, cause and effect, practice, sources. */
export default function ChapterContent({ chapter, nextChapterId, nextChapterTitle }: ChapterContentProps) {
  const { openCitation } = useCitation();
  const [sourcesTab, setSourcesTab] = useState<'perspectives' | 'documents' | 'citations'>('perspectives');
  const study = ALL_CHAPTERS_STUDY_DATA[chapter.id];
  const ref = { id: chapter.id, number: chapter.number, title: chapter.title };

  // Quotation marks only for a registered verbatim quotation; anything else is shown as a paraphrase.
  const landmarkCitation = chapter.landmarkMoment?.quoteCitationId
    ? CITATION_REGISTRY[chapter.landmarkMoment.quoteCitationId]
    : undefined;
  const landmarkQuote = landmarkCitation && isVerbatimQuotation(landmarkCitation) ? landmarkCitation : undefined;

  const sections = [
    study?.briefing && { id: 'briefing', label: 'Summary' },
    { id: 'story', label: 'The story' },
    { id: 'evidence', label: 'Explore' },
    { id: 'causal', label: 'Cause and effect' },
    study?.quiz?.length && { id: 'quiz', label: 'Quiz' },
    study?.flashcards?.length && { id: 'flashcards', label: 'Flashcards' },
    { id: 'sources', label: 'Sources' },
  ].filter(Boolean) as { id: string; label: string }[];

  const tabs = [
    { id: 'perspectives' as const, label: 'What each side wanted', show: true },
    { id: 'documents' as const, label: `Documents (${chapter.primaryDocuments?.length ?? 0})`, show: (chapter.primaryDocuments?.length ?? 0) > 0 },
    { id: 'citations' as const, label: `Works cited (${chapter.citations?.length ?? 0})`, show: (chapter.citations?.length ?? 0) > 0 },
  ].filter((t) => t.show);

  return (
    <article className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      {/* The chapter and its question */}
      <header className="max-w-3xl">
        <p className="text-sm text-ink-muted">
          Chapter {chapter.number}, {chapter.timeframe}
          {chapter.isLandmark && <span className="text-brand">, a turning point</span>}
        </p>
        <h1 className="mt-2 font-display text-[2.375rem] font-bold leading-[1.06] tracking-tight text-ink sm:text-[3.25rem]">
          {chapter.title}
        </h1>
        <p className="mt-3 text-lg leading-snug text-ink-muted sm:text-xl">{chapter.subtitle}</p>

        <h2 className="mt-8 font-serif text-xl leading-snug text-ink sm:text-[1.5rem]">{study?.bigQuestion ?? chapter.subtitle}</h2>
        {study?.whyItMatters && <p className="mt-3 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-muted">{study.whyItMatters}</p>}

        <nav aria-label="In this chapter" className="mt-8 border-y border-rule">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 py-3 text-[0.9375rem]">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="font-medium text-ink-muted underline-offset-4 hover:text-brand hover:underline">
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

      {/* Summary: the short version first */}
      {study?.briefing && (
        <section id="briefing" aria-labelledby="briefing-title" className="mt-16 scroll-mt-32">
          <h2 id="briefing-title" className={sectionTitle}>
            The short version
          </h2>
          <p className="reading mt-4 text-ink">{study.briefing.summary}</p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h3 className="font-display text-lg font-bold text-ink">What to know for the test</h3>
              <ol className="mt-3 divide-y divide-rule border-y border-rule">
                {study.briefing.examTakeaways.map((t) => {
                  const { label, text } = splitTakeaway(t);
                  return (
                    <li key={t} className="py-3.5 text-[1.0625rem] leading-relaxed text-ink-muted">
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
                    <dt className="font-display font-semibold text-ink">{term.term}</dt>
                    <dd className="mt-0.5 text-[0.9375rem] leading-relaxed text-ink-muted">{term.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* The story */}
      <section id="story" aria-labelledby="story-title" className="mt-20 scroll-mt-32">
        <h2 id="story-title" className={sectionTitle}>
          What happened
        </h2>
        <p className={sectionLede}>The full story. The small numbers open the source behind each claim.</p>

        <div className="reading mt-8 space-y-6 text-ink">
          {chapter.whatHappened.narrative.map((paragraph, idx) => (
            <CitedParagraph key={idx} text={paragraph} />
          ))}
        </div>

        {chapter.galleryImageIds && chapter.galleryImageIds.length > 0 && (
          <div className="mt-12 space-y-10">
            {chapter.galleryImageIds.map((id) => (
              <Figure key={id} imageId={id} />
            ))}
          </div>
        )}

        {chapter.isLandmark && chapter.landmarkMoment && (
          <figure className="mt-12 max-w-3xl border-l-[3px] border-brand pl-6">
            {landmarkQuote ? (
              <blockquote className="font-serif text-xl leading-relaxed text-ink sm:text-[1.375rem]">
                &ldquo;{landmarkQuote.exactQuotation}&rdquo;
                <CitationMarker id={landmarkQuote.id} />
              </blockquote>
            ) : (
              <>
                <p className="text-sm text-ink-muted">A historian’s account, in our words</p>
                <p className="mt-1 font-serif text-xl leading-relaxed text-ink sm:text-[1.375rem]">{chapter.landmarkMoment.quote}</p>
              </>
            )}
            <figcaption className="mt-3 text-sm text-ink-muted">
              <span className="font-semibold text-ink">{chapter.landmarkMoment.quoteSpeaker}</span>, {chapter.landmarkMoment.quoteContext} (
              {chapter.landmarkMoment.dateline})
            </figcaption>
          </figure>
        )}

        {chapter.whatHappened.keyEvents && chapter.whatHappened.keyEvents.length > 0 && (
          <div className="mt-14 max-w-3xl">
            <h3 className="font-display text-lg font-bold text-ink">Key dates</h3>
            <ol className="mt-4">
              {chapter.whatHappened.keyEvents.map((evt) => (
                <li key={`${evt.date}-${evt.title}`} className="grid gap-x-6 sm:grid-cols-[9rem_minmax(0,1fr)]">
                  <span className="pt-0.5 text-sm font-semibold tabular-nums text-brand sm:text-right">{evt.date}</span>
                  <div className="border-l-2 border-rule pb-6 pl-5">
                    <p className="font-display font-semibold leading-snug text-ink">{evt.title}</p>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-muted">{evt.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>

      {chapter.personalStory && (
        <div className="mt-16">
          <PersonalStoryCard story={chapter.personalStory} />
        </div>
      )}

      {/* The one framed object on the page: the interactive */}
      <section id="evidence" aria-labelledby="evidence-title" className="mt-20 scroll-mt-32">
        <div className="-mx-4 bg-parchment px-4 py-10 sm:mx-0 sm:rounded-2xl sm:px-8 sm:py-12">
          <h2 id="evidence-title" className={sectionTitle}>
            {chapter.interactiveModule.title}
          </h2>
          <p className={sectionLede}>{chapter.interactiveModule.prompt}</p>
          <div className="mt-8">
            <InteractiveModuleWrapper type={chapter.interactiveModule.type} />
          </div>
        </div>
      </section>

      <section id="causal" aria-label="Cause and effect" className="mt-20 scroll-mt-32">
        <CausalFlowViewer causalChain={chapter.causalChain} />
      </section>

      {study?.quiz && study.quiz.length > 0 && (
        <section id="quiz" aria-labelledby="quiz-title" className="mt-20 scroll-mt-32">
          <h2 id="quiz-title" className={sectionTitle}>
            Practice quiz
          </h2>
          <p className={sectionLede}>
            {study.quiz.length} questions on this chapter. Each explanation appears after you check your answer.
          </p>
          <div className="mt-8">
            <ChapterQuizBlock chapter={ref} questions={study.quiz} />
          </div>
        </section>
      )}

      {study?.flashcards && study.flashcards.length > 0 && (
        <section id="flashcards" aria-labelledby="flashcards-title" className="mt-20 scroll-mt-32">
          <h2 id="flashcards-title" className={sectionTitle}>
            Flashcards
          </h2>
          <p className={sectionLede}>Look at the term, say what it means, then flip the card to check.</p>
          <div className="mt-6">
            <ChapterFlashcardsBlock chapter={ref} terms={study.flashcards} />
          </div>
        </section>
      )}

      {/* Sources */}
      <section id="sources" aria-labelledby="sources-title" className="mt-20 scroll-mt-32">
        <h2 id="sources-title" className={sectionTitle}>
          Sources
        </h2>
        <p className={sectionLede}>What each side wanted, the original documents, and every work this chapter cites.</p>

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
                className={`-mb-px shrink-0 border-b-2 py-3 text-[0.9375rem] font-semibold cursor-pointer ${
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
                    <div className="text-[0.9375rem] leading-relaxed">
                      <p className="text-ink">{c.citation}</p>
                      {c.supportsClaim && <p className="mt-1 text-ink-muted">Used for: {c.supportsClaim}</p>}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openCitation(c)}
                    className="shrink-0 text-sm font-semibold text-brand underline decoration-brand-rule underline-offset-2 hover:decoration-brand cursor-pointer"
                  >
                    Details
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      {/* Bridge to the next chapter */}
      <footer className="mt-20 border-t border-ink pt-10">
        <p className="text-sm text-ink-muted">Up next</p>
        <h2 className="mt-1 max-w-3xl font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">{chapter.nextQuestion.question}</h2>
        <p className="mt-3 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-muted">{chapter.nextQuestion.framing}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {nextChapterId ? (
            <Link
              href={`/vietnam/${nextChapterId}`}
              className="rounded-md bg-brand px-5 py-3 text-[0.9375rem] font-semibold text-white hover:bg-brand-hover"
            >
              Chapter {chapter.number + 1}: {nextChapterTitle}
            </Link>
          ) : (
            <Link href="/vietnam/study-guide" className="rounded-md bg-brand px-5 py-3 text-[0.9375rem] font-semibold text-white hover:bg-brand-hover">
              Open the study guide
            </Link>
          )}
          <Link href="/vietnam" className="text-[0.9375rem] font-semibold text-ink-muted hover:text-brand">
            All chapters
          </Link>
        </div>
      </footer>
    </article>
  );
}
