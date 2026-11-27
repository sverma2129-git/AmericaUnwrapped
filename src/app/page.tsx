import React from 'react';
import Link from 'next/link';
import { VIETNAM_CHAPTERS, getChapter } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { buildGlossary, collectQuizQuestions } from '@/lib/study';
import DocumentFacsimile from '@/components/common/DocumentFacsimile';
import { imageSrc } from '@/components/common/Figure';
import ContentsGrid from '@/components/vietnam/ContentsGrid';
import { IMAGE_REGISTRY } from '@/data/vietnam/images';
import { DBQ_PROMPTS, TURNING_POINTS } from '@/data/vietnam/studyGuide';
import { socialMeta } from '@/lib/social';

export const metadata = {
  title: { absolute: 'America Unwrapped: the Vietnam War for high school students' },
  description:
    'The Vietnam War from 1945 to 1975 in twelve chapters, told through the cables, letters and photographs of the time, with a study guide for the unit test.',
  ...socialMeta(
    'America Unwrapped: the Vietnam War',
    'The Vietnam War from 1945 to 1975 in twelve chapters, told through the cables, letters and photographs of the time, with a study guide for the unit test.',
  ),
};

const textLink = 'font-medium text-brand underline decoration-brand-rule underline-offset-4 hover:decoration-brand';

export default function HomePage() {
  const firstChapter = VIETNAM_CHAPTERS[0];
  const featured = getChapter('gulf-of-tonkin');
  const quizCount = collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA).length;
  const termCount = buildGlossary(ALL_CHAPTERS_STUDY_DATA).length;
  const hero = IMAGE_REGISTRY['frequent-wind-1975'];

  const studyTools = [
    {
      title: 'Practice quiz',
      count: `${quizCount} questions`,
      detail: 'Answer, then read why. Retry the ones you miss.',
      action: 'Start the quiz',
      href: '/vietnam/study-guide#quiz',
    },
    {
      title: 'Flashcards',
      count: `${termCount} terms`,
      detail: 'Flip, sort into Got it and Still learning, and come back to the hard ones.',
      action: 'Study the cards',
      href: '/vietnam/study-guide#flashcards',
    },
    {
      title: 'Essay practice',
      count: `${DBQ_PROMPTS.length} prompts`,
      detail: 'AP-style prompts with a thesis, evidence and the mistakes to avoid.',
      action: 'Plan an essay',
      href: '/vietnam/study-guide#essays',
    },
    {
      title: 'Presidents and turning points',
      count: `${TURNING_POINTS.length} turning points`,
      detail: 'Six presidents in order, and the events that changed the war.',
      action: 'See the timeline',
      href: '/vietnam/study-guide#presidents',
    },
  ];

  return (
    <>
      {/* The opening: one photograph, full width */}
      <section aria-labelledby="home-title" className="relative isolate">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc(hero.file)}
          alt={hero.alt}
          fetchPriority="high"
          className="h-[80vh] min-h-[34rem] w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">
            {/* color is set inline because the base heading style is navy */}
            <h1
              id="home-title"
              className="font-display max-w-[16ch] text-hero"
              style={{ color: '#fff' }}
            >
              Thirty years of war ended like this.
            </h1>
            <p className="mt-4 max-w-[52ch] text-lg text-white/90">
              April 1975: a ship’s crew pushes a helicopter into the sea to make room for more evacuation flights from
              Saigon. See how the Vietnam War came to this, through the records of the time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href={`/vietnam/${firstChapter.id}`}
                className="rounded-sm bg-brand px-6 py-3 text-base font-semibold text-white hover:bg-brand-hover"
              >
                Read the story
              </Link>
              <Link href="/vietnam/study-guide" className="text-base font-semibold text-white underline underline-offset-4">
                Study for your test
              </Link>
            </div>
            <p className="mt-5 text-sm text-white/75">
              Photo: {hero.creator}, {hero.date}.{' '}
              <a href={hero.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Source record
              </a>
            </p>
          </div>
        </div>
      </section>

    <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <p className="max-w-[70ch] text-base text-ink-muted">
        Have a test coming up? Start with the study guide: {quizCount} practice questions, {termCount} flashcards and a
        timeline. Want the whole story? Twelve chapters follow the war from 1945 to 1975. Free, with no account. Quotations have footnotes
        naming their sources, and every image links to its archive record.
      </p>

      <section aria-labelledby="study-title" className="mt-10 rounded-sm bg-parchment px-5 py-10 sm:mt-12 sm:px-10 sm:py-12">
        <h2 id="study-title" className="font-display text-2xl font-bold text-navy">
          Studying for a test?
        </h2>
        <p className="mt-2 max-w-[56ch] text-base text-ink-muted">
          Start here. Everything in the study guide comes from the twelve chapters, and each question shows which chapter
          to reread if you miss it. Your teacher writes your test, so use these to check what you know.
        </p>
        <p className="mt-3 text-base">
          <Link href="/teachers" className={textLink}>
            Teaching this unit? Get the links for your class
          </Link>
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {studyTools.map((tool) => (
            <li key={tool.title}>
              <Link
                href={tool.href}
                className="group flex h-full flex-col rounded-sm border border-rule bg-surface p-5 hover:border-brand-rule hover:bg-brand-tint"
              >
                <span className="font-mono text-xs text-ink-muted">{tool.count}</span>
                <span className="mt-2 font-display text-xl font-bold leading-snug text-navy">{tool.title}</span>
                <span className="mt-2 flex-1 text-sm text-ink-muted">{tool.detail}</span>
                <span className="mt-5 text-sm font-semibold text-brand underline decoration-brand-rule underline-offset-4 group-hover:decoration-brand">
                  {tool.action}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {featured?.featuredDocument && (
        <section aria-labelledby="home-document" className="mt-20 grid gap-x-14 gap-y-8 sm:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <div>
            <h2 id="home-document" className="font-display text-2xl font-bold text-navy">
              This attack probably never happened
            </h2>
            <p className="mt-3 max-w-[44ch] text-base text-ink-muted">
              On August 4, 1964, U.S. ships reported a second attack. Read what the commander at sea cabled home that
              day, then see how it helped lead America into war.
            </p>
            <p className="mt-4">
              <Link href={`/vietnam/${featured.id}`} className={textLink}>
                Read Chapter {featured.number}, {featured.title}
              </Link>
            </p>
          </div>
          <DocumentFacsimile doc={featured.featuredDocument} />
        </section>
      )}

      <section aria-labelledby="contents-title" className="mt-20 sm:mt-24">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2 id="contents-title" className="font-display text-2xl font-bold text-navy">
            The story in four parts
          </h2>
          <Link href="/vietnam" className={`${textLink} text-sm`}>
            All chapters, with their questions
          </Link>
        </div>
        <div className="mt-6">
          <ContentsGrid />
        </div>
      </section>
    </div>
    </>
  );
}
