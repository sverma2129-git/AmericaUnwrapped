import React from 'react';
import Link from 'next/link';
import { CHAPTER_PARTS, VIETNAM_CHAPTERS, getChapter } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { buildGlossary, collectQuizQuestions } from '@/lib/study';
import DocumentFacsimile from '@/components/common/DocumentFacsimile';

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
    { title: 'Presidents and turning points', href: '/vietnam/study-guide#presidents', detail: 'Who decided what, from Truman to Ford.' },
    { title: 'Practice quiz', href: '/vietnam/study-guide#quiz', detail: `${quizCount} questions, each explained after you answer.` },
    { title: 'Flashcards', href: '/vietnam/study-guide#flashcards', detail: `${termCount} key terms to learn.` },
    { title: 'Essay practice', href: '/vietnam/study-guide#essays', detail: 'AP-style prompts with sample outlines.' },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-16 lg:px-8">
      <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <section aria-labelledby="home-title">
          <h1 id="home-title" className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            The Vietnam War, 1945–1975
          </h1>
          <p className="mt-5 max-w-[34ch] font-serif text-xl leading-snug text-ink">
            How the United States got into Vietnam, why it couldn’t get out, and why people still argue about it.
          </p>
          <p className="mt-5 max-w-[52ch] text-base text-ink-muted">
            Twelve chapters, told through the cables, letters and photographs of the time. Every quotation is checked
            word for word against the original, and the documents are a click away.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href={`/vietnam/${firstChapter.id}`}
              className="rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
            >
              Start with Chapter 1
            </Link>
            <Link href="/vietnam/study-guide" className={`${textLink} text-sm`}>
              Go to the study guide
            </Link>
          </div>
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

      <section aria-labelledby="contents-title" className="mt-20 sm:mt-24">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-ink pb-3">
          <h2 id="contents-title" className="font-display text-xl font-bold text-ink">
            Contents
          </h2>
          <Link href="/vietnam" className={`${textLink} text-sm`}>
            All chapters, with photos
          </Link>
        </div>
        <div className="mt-6 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {CHAPTER_PARTS.map((part) => (
            <section key={part.number} aria-labelledby={`part-${part.number}`}>
              <h3 id={`part-${part.number}`} className="text-sm text-ink-soft">
                Part {part.number}, {part.years}
              </h3>
              <p className="mt-1 font-display text-lg font-bold leading-snug text-ink">{part.title}</p>
              <ol className="mt-4 space-y-3">
                {part.chapters.map((ch) => (
                  <li key={ch.id}>
                    <Link href={`/vietnam/${ch.id}`} className="group grid grid-cols-[1.75rem_minmax(0,1fr)] items-baseline">
                      <span className="text-sm tabular-nums text-ink-soft">{ch.number}</span>
                      <span>
                        <span className="block font-serif text-lg leading-snug text-ink group-hover:text-brand">{ch.title}</span>
                        <span className="block text-xs text-ink-soft">{ch.timeframe}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </section>

      <section aria-labelledby="study-title" className="mt-20 sm:mt-24">
        <div className="border-b border-ink pb-3">
          <h2 id="study-title" className="font-display text-xl font-bold text-ink">
            Studying for a test?
          </h2>
        </div>
        <ul className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {studyTools.map((tool) => (
            <li key={tool.title}>
              <Link href={tool.href} className={`${textLink} text-base`}>
                {tool.title}
              </Link>
              <p className="mt-1 text-sm text-ink-muted">{tool.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
