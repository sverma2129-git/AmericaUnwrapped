'use client';

import React from 'react';
import { ChapterData } from '@/types/vietnam';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { getAdjacentChapters } from '@/data/vietnam/chapters';
import { LOOK_CLOSER } from '@/data/vietnam/lookCloser';
import { IMAGE_REGISTRY } from '@/data/vietnam/images';
import InteractiveModuleWrapper from './InteractiveModuleWrapper';
import CausalFlowViewer from './CausalFlowViewer';
import DualPerspectiveViewer from './DualPerspectiveViewer';
import DocumentInspector from './DocumentInspector';
import NextChapterCard from './NextChapterCard';
import CitationMarker from '@/components/common/CitationMarker';
import CitedParagraph from '@/components/common/CitedParagraph';
import DocumentFacsimile from '@/components/common/DocumentFacsimile';
import Disclosure from '@/components/common/Disclosure';
import PersonalStoryCard from './PersonalStoryCard';
import Figure from '@/components/common/Figure';
import ChapterStudy from '@/components/study/ChapterStudy';

interface ChapterContentProps {
  chapter: ChapterData;
  nextChapterId?: string;
  nextChapterTitle?: string;
}

const h2 = 'font-display text-2xl font-extrabold tracking-tight text-navy';

/**
 * The standard chapter in three movements. Read: the story in short dated
 * sections, with photographs and the key document placed where they belong.
 * Explore: the interactive and one decision traced to its result. Study: a
 * tabbed band with everything for the test. Sources fold away at the end.
 */
export default function ChapterContent({ chapter }: ChapterContentProps) {
  const study = ALL_CHAPTERS_STUDY_DATA[chapter.id];
  const { next } = getAdjacentChapters(chapter);
  const ref = { id: chapter.id, number: chapter.number, title: chapter.title };
  const narrative = chapter.whatHappened.narrative;
  const sections = chapter.whatHappened.sections;
  const lead = chapter.leadImageId ? IMAGE_REGISTRY[chapter.leadImageId] : undefined;
  const portraitLead = Boolean(lead && lead.height > lead.width * 1.05);

  // Place the document after the second paragraph and the photographs after
  // the others, so the pictures arrive with the part of the story they show.
  const docSlot = chapter.featuredDocument ? Math.min(1, narrative.length - 1) : -1;
  const photoSlots = narrative.map((_, i) => i).filter((i) => i !== docSlot);
  const gallery = chapter.galleryImageIds ?? [];
  const photoAt = new Map<number, string>();
  gallery.slice(0, photoSlots.length).forEach((id, k) => photoAt.set(photoSlots[k], id));
  const leftover = gallery.slice(photoSlots.length);

  return (
    <article className="pb-20">
      {/* Title */}
      <header
        className={`mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 ${
          portraitLead ? 'lg:grid lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start lg:gap-x-14' : ''
        }`}
      >
        <div className="max-w-4xl">
          <p className="text-sm text-ink-muted">
            Chapter {chapter.number}, {chapter.timeframe}
          </p>
          <h1 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{chapter.title}</h1>
          <p className="mt-4 max-w-[40ch] font-serif text-xl leading-snug text-ink">{study?.bigQuestion ?? chapter.subtitle}</p>
          {study?.whyItMatters && <p className="mt-4 max-w-[62ch] text-base text-ink-muted">{study.whyItMatters}</p>}
          <nav aria-label="In this chapter" className="mt-6">
            <ul className="flex flex-wrap gap-2 text-sm">
              {[
                { id: 'story', label: 'Read the story' },
                { id: 'explore', label: 'Explore' },
                study && { id: 'study', label: 'Study for the test' },
                { id: 'sources', label: 'Sources' },
              ]
                .filter(Boolean)
                .map((s) => {
                  const item = s as { id: string; label: string };
                  return (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="inline-block rounded-sm bg-parchment px-3 py-1.5 font-medium text-ink hover:bg-brand hover:text-white">
                        {item.label}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
        {chapter.leadImageId && (
          <div className={portraitLead ? 'mt-10 lg:mt-0' : 'mt-10'}>
            <Figure imageId={chapter.leadImageId} priority />
          </div>
        )}
      </header>

      {/* Read */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-x-14 gap-y-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8">
        <section id="story" aria-labelledby="story-title" className="min-w-0">
          <h2 id="story-title" className={h2}>
            What happened
          </h2>
          <div className="mt-8 space-y-12">
            {narrative.map((paragraph, idx) => {
              const sec = sections?.[idx];
              const photo = photoAt.get(idx);
              return (
                <div key={idx}>
                  {sec && (
                    <>
                      {sec.date && <p className="font-mono text-xs font-semibold tabular-nums text-brand">{sec.date}</p>}
                      <h3 className="mt-1 font-display text-xl font-bold leading-snug text-navy">{sec.heading}</h3>
                    </>
                  )}
                  <CitedParagraph text={paragraph} className="reading mt-3 text-ink" />
                  {idx === docSlot && chapter.featuredDocument && <DocumentFacsimile doc={chapter.featuredDocument} className="mt-10" />}
                  {photo && <Figure imageId={photo} className="mt-10" />}
                </div>
              );
            })}
          </div>

          {leftover.length > 0 && (
            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {leftover.map((id) =>
                LOOK_CLOSER[id] ? (
                  <div key={id} className="sm:col-span-2">
                    <Figure imageId={id} />
                  </div>
                ) : (
                  <Figure key={id} imageId={id} />
                ),
              )}
            </div>
          )}

          {chapter.personalStory && (
            <div className="mt-14">
              <PersonalStoryCard story={chapter.personalStory} />
            </div>
          )}
        </section>

        <aside aria-label="The chapter at a glance" className="space-y-10 lg:sticky lg:top-32 lg:self-start">
          {study?.briefing && (
            <section aria-labelledby="brief-title" className="rounded-sm bg-parchment p-5">
              <h2 id="brief-title" className="text-sm font-bold text-ink">
                The short version
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.briefing.summary}</p>
            </section>
          )}
          {chapter.whatHappened.keyEvents && chapter.whatHappened.keyEvents.length > 0 && (
            <section aria-labelledby="dates-title" className="px-1">
              <h2 id="dates-title" className="text-sm font-bold text-ink">
                Key dates
              </h2>
              <ol className="mt-3 space-y-4">
                {chapter.whatHappened.keyEvents.map((evt) => (
                  <li key={`${evt.date}-${evt.title}`}>
                    <p className="text-xs font-semibold tabular-nums text-brand font-mono">{evt.date}</p>
                    <p className="mt-0.5 text-sm font-semibold leading-snug text-ink">{evt.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">{evt.detail}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </aside>
      </div>

      {/* Explore */}
      <section id="explore" aria-labelledby="explore-title" className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="explore-title" className={h2}>
          {chapter.interactiveModule.title}
        </h2>
        <p className="mt-2 max-w-[62ch] text-base text-ink-muted">{chapter.interactiveModule.prompt}</p>
        <div className="mt-8">
          <InteractiveModuleWrapper type={chapter.interactiveModule.type} />
        </div>

        <div className="mt-20">
          <h2 className={h2}>How one decision played out</h2>
          <p className="mt-2 max-w-[62ch] text-base text-ink-muted">Follow one decision from this chapter to a result nobody planned.</p>
          <div className="mt-8">
            <CausalFlowViewer causalChain={chapter.causalChain} showHeading={false} />
          </div>
        </div>
      </section>

      {/* Study */}
      {study && (
        <section id="study" aria-labelledby="study-title" className="mt-24 bg-parchment py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 id="study-title" className={h2}>
              Study for the test
            </h2>
            <p className="mt-2 max-w-[62ch] text-base text-ink-muted">Pick a tool. Your progress on the flashcards stays on this device.</p>
            <div className="mt-8">
              <ChapterStudy
                chapter={ref}
                takeaways={study.briefing.examTakeaways}
                keyTerms={study.briefing.keyTerms}
                quiz={study.quiz ?? []}
                flashcards={study.flashcards ?? []}
              />
            </div>
          </div>
        </section>
      )}

      {/* Sources */}
      <section id="sources" aria-labelledby="sources-title" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="sources-title" className={h2}>
          Sources
        </h2>
        <p className="mt-2 max-w-[62ch] text-base text-ink-muted">Every claim in this chapter comes from something here.</p>
        <div className="mt-6 space-y-2 rounded-sm bg-parchment p-2">
          <Disclosure title="What each side wanted" detail="Washington and Hanoi, judged by the same questions">
            <DualPerspectiveViewer washington={chapter.washington} hanoi={chapter.hanoi} />
          </Disclosure>
          {chapter.primaryDocuments.length > 0 && (
            <Disclosure title="Read the documents" detail={`${chapter.primaryDocuments.length} primary sources, with context and limits`}>
              <div className="space-y-8 pt-2">
                {chapter.primaryDocuments.map((doc) => (
                  <DocumentInspector key={doc.id} document={doc} />
                ))}
              </div>
            </Disclosure>
          )}
          {chapter.citations.length > 0 && (
            <Disclosure title="Works cited" detail={`${chapter.citations.length} books, articles and records`}>
              <ol className="max-w-3xl space-y-4 pt-2">
                {chapter.citations.map((c) => (
                  <li key={c.id} className="flex gap-3 text-sm">
                    <CitationMarker id={c.id} label={c.marker} className="!align-baseline" />
                    <div>
                      <p className="text-ink">{c.citation}</p>
                      {c.supportsClaim && <p className="mt-1 text-ink-muted">Used for: {c.supportsClaim}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </Disclosure>
          )}
        </div>
      </section>

      {/* Next */}
      <section aria-label="Next chapter" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
        <NextChapterCard next={next} />
      </section>
    </article>
  );
}
