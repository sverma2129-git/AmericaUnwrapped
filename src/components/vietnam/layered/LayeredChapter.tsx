import React from 'react';
import { PeriodBadge } from '@/components/vietnam/ContentsGrid';
import type { ChapterData } from '@/types/vietnam';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { getAdjacentChapters, getChapterPart } from '@/data/vietnam/chapters';
import CitedParagraph from '@/components/common/CitedParagraph';
import CitationMarker from '@/components/common/CitationMarker';
import DocumentFacsimile from '@/components/common/DocumentFacsimile';
import { splitTakeaway } from '@/lib/takeaways';
import Disclosure from '@/components/common/Disclosure';
import ChapterStudy from '@/components/study/ChapterStudy';
import NextChapterCard from '../NextChapterCard';
import DualPerspectiveViewer from '../DualPerspectiveViewer';
import DocumentInspector from '../DocumentInspector';
import CausalFlowViewer from '../CausalFlowViewer';
import SectionHead from '../SectionHead';
import InlineCheck from './InlineCheck';
import StoryVisualView from './StoryVisuals';
import { CourseProvider, CourseToggle } from './CourseContext';
import CourseTasks, { CourseObjectives } from './CourseTasks';
import { EvidenceLocker, HistoriansDisagree } from './EvidenceParts';
import Figure from '@/components/common/Figure';

interface LayeredChapterProps {
  chapter: ChapterData;
  nextChapterId?: string;
  nextChapterTitle?: string;
}

const NUMBER_WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

/**
 * The scrollytelling chapter. It shares its header, section names and ending
 * with the standard chapter; the story itself is told in short parts with maps
 * and timelines that change as you scroll.
 */
export default function LayeredChapter({ chapter }: LayeredChapterProps) {
  const study = ALL_CHAPTERS_STUDY_DATA[chapter.id];
  const story = chapter.story;
  const beats = story?.beats ?? [];
  const part = getChapterPart(chapter);
  const questions = new Map(study?.quiz.map((q) => [q.id, q]));
  const doc = chapter.featuredDocument;
  const docInStory = doc?.afterBeatId && beats.some((b) => b.id === doc.afterBeatId);
  const partsWord = NUMBER_WORDS[beats.length] ?? String(beats.length);

  const sections = [
    { id: 'story', label: 'The story' },
    { id: 'sources', label: 'Sources' },
    { id: 'test', label: 'For the test' },
  ];

  return (
    <CourseProvider>
      <article className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <header className="max-w-4xl">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted">
            <span>{part ? `Part ${part.number}, ` : ''}Chapter {chapter.number}</span>
            <PeriodBadge>{chapter.timeframe}</PeriodBadge>
            {chapter.isLandmark && <span className="font-medium text-brand">A turning point</span>}
          </p>
          <h1 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{chapter.title}</h1>
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

        {chapter.leadImageId && <Figure imageId={chapter.leadImageId} priority className="mt-10" />}

        {/* The short version: what to know, and the dates */}
        <section aria-labelledby="brief-title" className="mt-16 rounded-sm bg-parchment p-6 sm:p-8">
          <h2 id="brief-title" className="text-sm font-bold text-ink">
            The short version
          </h2>
          <ul className="mt-4 grid gap-x-10 gap-y-6 md:grid-cols-3">
            {study?.briefing.examTakeaways.map((t) => {
              const { label, text } = splitTakeaway(t);
              return (
                <li key={t}>
                  {label && <p className="font-semibold text-ink">{label}</p>}
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
                </li>
              );
            })}
          </ul>
          <ol aria-label="Key dates" className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
            {chapter.whatHappened.keyEvents.map((e) => (
              <li key={e.title}>
                <span className="block text-xs font-semibold tabular-nums text-brand font-mono">{e.date}</span>
                <span className="mt-1 block text-sm leading-snug text-ink">{e.title}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="story" aria-labelledby="story-title" className="mt-20">
          <SectionHead id="story-title" title="What happened">
            The story in {partsWord} short parts. A few end with a question to check yourself.
          </SectionHead>

          <div className="mt-10 space-y-20 sm:space-y-24">
            {beats.map((beat) => {
              const check = beat.checkId ? questions.get(beat.checkId) : undefined;
              const wide = ['siege', 'night', 'consequence', 'compare'].includes(beat.visual?.kind ?? '');
              return (
                <section key={beat.id} id={`beat-${beat.id}`} aria-labelledby={`beat-${beat.id}-h`}>
                  <p className="text-sm text-ink-soft">{beat.kicker}</p>
                  <h3 id={`beat-${beat.id}-h`} className="mt-1 max-w-2xl font-display text-xl font-bold leading-tight text-navy">
                    {beat.headline}
                  </h3>
                  <div className="reading mt-4 space-y-4 text-ink">
                    {beat.body.map((p, j) => (
                      <CitedParagraph key={j} text={p} />
                    ))}
                  </div>

                  {[beat.imageId, ...(beat.moreImageIds ?? [])].filter(Boolean).map((id) => (
                    <Figure key={id} imageId={id as string} className="mt-8" />
                  ))}

                  {beat.visual && (
                    <div className={`mt-8 ${wide ? '' : 'max-w-3xl'}`}>
                      <StoryVisualView visual={beat.visual} causalChain={chapter.causalChain} />
                    </div>
                  )}

                  {check && (
                    <div className="mt-8 max-w-3xl">
                      <InlineCheck question={check} />
                    </div>
                  )}

                  {doc && docInStory && doc.afterBeatId === beat.id && <DocumentFacsimile doc={doc} className="mt-10" />}
                </section>
              );
            })}
          </div>
        </section>

        <section id="sources" aria-labelledby="sources-title" className="mt-24">
          <SectionHead id="sources-title" title="Sources">
            Every claim in the story comes from something in this section.
          </SectionHead>

          {doc && !docInStory && <DocumentFacsimile doc={doc} className="mt-8" />}

          {story?.debate && (
            <div className="mt-12">
              <HistoriansDisagree debate={story.debate} />
            </div>
          )}

          <div className="mt-10 space-y-2 rounded-sm bg-parchment p-2">
            {story?.evidence && story.evidence.length > 0 && (
              <Disclosure title="Read the sources yourself" detail={`${story.evidence.length} verified quotations, each with a question to think about`}>
                <EvidenceLocker citationIds={story.evidence} />
              </Disclosure>
            )}

            <Disclosure title="How each side saw it" detail="What Washington and Hanoi each wanted, assumed, and argued about">
              <DualPerspectiveViewer washington={chapter.washington} hanoi={chapter.hanoi} />
            </Disclosure>

            {chapter.primaryDocuments.length > 0 && (
              <Disclosure title="Read the documents" detail={`${chapter.primaryDocuments.length} primary sources, with context and limitations`}>
                <div className="space-y-8">
                  {chapter.primaryDocuments.map((d) => (
                    <DocumentInspector key={d.id} document={d} />
                  ))}
                </div>
              </Disclosure>
            )}

            <Disclosure title="Cause and effect" detail="The decision, the assumption behind it, and what it led to">
              <CausalFlowViewer causalChain={chapter.causalChain} showHeading={false} />
            </Disclosure>

            {chapter.citations.length > 0 && (
              <Disclosure title="Works cited" detail={`${chapter.citations.length} works cited in this chapter`}>
                <ol className="max-w-3xl space-y-4">
                  {chapter.citations.map((c) => (
                    <li key={c.id} className="flex gap-3 text-sm">
                      <CitationMarker id={c.id} label={c.marker} className="!align-baseline" />
                      <div>
                        <p className="text-ink">{c.citation}</p>
                        {c.supportsClaim && <p className="mt-1 text-ink-muted">Used for: {c.supportsClaim}</p>}
                        {c.limitations && <p className="mt-1 text-ink-soft">Limits: {c.limitations}</p>}
                      </div>
                    </li>
                  ))}
                </ol>
              </Disclosure>
            )}
          </div>
        </section>

        <section id="test" aria-labelledby="test-title" className="mt-24 rounded-sm bg-parchment p-5 sm:p-10">
          <SectionHead id="test-title" title="Study for the test">
            {story?.tasks
              ? 'Pick your course for activities written for it. Nothing you type leaves this page.'
              : 'Pick a tool. Your progress on the flashcards stays on this device.'}
          </SectionHead>

          {story?.tasks && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-sm text-ink-muted">I’m studying for</span>
              <CourseToggle />
            </div>
          )}

          {story?.objectives && (
            <div className="mt-8 max-w-3xl">
              <CourseObjectives objectives={story.objectives} />
            </div>
          )}

          {story?.tasks && (
            <div className="mt-12">
              <CourseTasks tasks={story.tasks} />
            </div>
          )}

          {study && (
            <div className="mt-12">
              <ChapterStudy
                chapter={{ id: chapter.id, number: chapter.number, title: chapter.title }}
                takeaways={[]}
                keyTerms={study.briefing.keyTerms}
                quiz={study.quiz ?? []}
                flashcards={study.flashcards ?? []}
              />
            </div>
          )}
        </section>

        <section aria-label="Next chapter" className="mt-20">
          <NextChapterCard next={getAdjacentChapters(chapter).next} />
        </section>
      </article>
    </CourseProvider>
  );
}
