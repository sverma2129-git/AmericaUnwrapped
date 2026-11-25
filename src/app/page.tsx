import React from 'react';
import Link from 'next/link';
import { VIETNAM_CHAPTERS, getChapter } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { buildGlossary, collectQuizQuestions } from '@/lib/study';
import DocumentFacsimile from '@/components/common/DocumentFacsimile';
import ContentsGrid from '@/components/vietnam/ContentsGrid';
import { DBQ_PROMPTS, TURNING_POINTS } from '@/data/vietnam/studyGuide';

export const metadata = {
  title: { absolute: 'America Unwrapped: the Vietnam War for high school students' },
  description:
    'The Vietnam War from 1945 to 1975 in twelve chapters, told through the cables, letters and photographs of the time, with a study guide for the unit test.',
};

const textLink = 'font-medium text-brand underline decoration-brand-rule underline-offset-4 hover:decoration-brand';

export default function HomePage() {
  const firstChapter = VIETNAM_CHAPTERS[0];
  const featured = getChapter('gulf-of-tonkin');
  const quizCount = collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA).length;
  const termCount = buildGlossary(ALL_CHAPTERS_STUDY_DATA).length;

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
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-16 lg:px-8">
      <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <section aria-labelledby="home-title">
          <h1 id="home-title" className="font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            The Vietnam War, 1945–1975
          </h1>
          <p className="mt-5 max-w-[34ch] font-serif text-xl leading-snug text-ink">
            In 1945 Ho Chi Minh asked Harry Truman for help. Thirty years later, the last Americans left Saigon by
            helicopter.
          </p>
          <p className="mt-5 max-w-[52ch] text-base text-ink-muted">
            Have a test coming up? Start with the study guide: {quizCount} practice questions, {termCount} flashcards and
            a timeline. Want the whole story? Twelve chapters follow the war through the cables and photographs of the
            time.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/vietnam/study-guide"
              className="rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
            >
              Study for your test
            </Link>
            <Link href={`/vietnam/${firstChapter.id}`} className={`${textLink} text-sm`}>
              Read the story from Chapter 1
            </Link>
          </div>
          <p className="mt-6 max-w-[52ch] text-sm text-ink-muted">
            Free, with no account. We check every quotation word for word against the
            original, and every image links to its archive record.
          </p>
        </section>

        {featured?.featuredDocument && (
          <section aria-labelledby="home-document" className="lg:pt-1">
            <h2 id="home-document" className="sr-only">
              A document from Chapter {featured.number}
            </h2>
            <DocumentFacsimile doc={featured.featuredDocument} />
            <p className="mt-4 text-sm">
              <Link href={`/vietnam/${featured.id}`} className={textLink}>
                Read Chapter {featured.number}, {featured.title}
              </Link>
            </p>
          </section>
        )}
      </div>

      <section aria-labelledby="study-title" className="mt-16 rounded-sm bg-parchment px-5 py-10 sm:mt-20 sm:px-10 sm:py-12">
        <h2 id="study-title" className="font-display text-2xl font-bold text-navy">
          Studying for a test?
        </h2>
        <p className="mt-2 max-w-[56ch] text-base text-ink-muted">
          Start here. Everything in the study guide comes from the twelve chapters, and each question shows which chapter
          to reread if you miss it. Your teacher writes your test, so use these to check what you know.
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
  );
}
