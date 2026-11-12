import React from 'react';
import Link from 'next/link';
import { CHAPTER_COUNT, VIETNAM_CHAPTERS, getChapter } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { SOURCE_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { buildGlossary, collectQuizQuestions } from '@/lib/study';

export const metadata = {
  title: { absolute: 'America Unwrapped · Visual History & High-School Study Platform' },
  description:
    'The Vietnam War told through the real documents and the real arguments, with interactive maps and everything you need for the unit test.',
};

const textLink = 'font-semibold text-brand underline decoration-brand-rule hover:decoration-brand transition-colors';

export default function HomePage() {
  const firstChapter = VIETNAM_CHAPTERS[0];
  const featured = getChapter('gulf-of-tonkin');
  const quizCount = collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA).length;
  const termCount = buildGlossary(ALL_CHAPTERS_STUDY_DATA).length;
  const verifiedQuotes = SOURCE_REGISTRY.filter((e) => e.verificationCategory === 'VERIFIED_QUOTATION').length;

  const studyTools = [
    { title: 'Cheat sheet', detail: 'Every presidency and turning point on one page.' },
    { title: 'Practice quiz', detail: `${quizCount} questions, each with an explanation.` },
    { title: 'Flashcards', detail: `${termCount} key terms with what to know for the exam.` },
    { title: 'Essay outlines', detail: 'Model arguments for DBQ and long-essay prompts.' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24">
      {/* Lead story and side story */}
      <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-12">
        <section className="lg:col-span-8">
          <h1 className="font-display text-[2.25rem] sm:text-[3.25rem] font-bold leading-[1.05] text-ink">
            Why did the world’s most powerful military spend 20 years fighting a war it couldn’t win?
          </h1>
          <p className="reading mt-6 text-ink-muted">
            Read the actual cables, hear from the people who were there, and decide for yourself. Then get ready for the test.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href={`/vietnam/${firstChapter.id}`}
              className="inline-flex items-center px-5 py-3 bg-brand hover:bg-brand-hover text-white text-[0.9375rem] font-semibold rounded-md transition-colors"
            >
              Start with Chapter 1
            </Link>
            <Link href="/vietnam/study-guide" className={textLink}>
              Test tomorrow? Open the study guide
            </Link>
          </div>
        </section>

        {featured && (
          <aside className="lg:col-span-4 self-start bg-parchment rounded-xl p-6 sm:p-7">
            <h2 className="font-display text-2xl font-semibold leading-snug text-ink">
              <Link href={`/vietnam/${featured.id}`} className="hover:text-brand transition-colors">
                How phantom radar contacts started an undeclared war
              </Link>
            </h2>
            <p className="meta mt-2 text-ink-soft">
              Chapter {featured.number}, {featured.timeframe}
            </p>
            <p className="mt-3 text-[0.9375rem] text-ink-muted leading-relaxed">
              On August 4, 1964, destroyers fired into a tropical squall, believing they were under attack. Within hours the commander cabled his doubts. Congress authorized force anyway, by a combined vote of 504 to 2.
            </p>
            <Link href={`/vietnam/${featured.id}#story`} className={`${textLink} inline-block mt-4 text-[0.9375rem]`}>
              Follow the night hour by hour
            </Link>
          </aside>
        )}
      </div>

      {/* What is inside, in one line */}
      <p className="mt-12 text-[0.9375rem] text-ink-muted">
        <span className="font-semibold text-ink">Inside:</span>{' '}
        <Link href="/vietnam" className="hover:text-brand">{CHAPTER_COUNT} chapters</Link>,{' '}
        <Link href="/vietnam/study-guide" className="hover:text-brand">{quizCount} practice questions</Link>,{' '}
        <Link href="/vietnam/study-guide" className="hover:text-brand">{termCount} key terms</Link>, and{' '}
        <Link href="/about" className="hover:text-brand">{verifiedQuotes} quotations checked word for word</Link>.
      </p>

      {/* Contents */}
      <section aria-labelledby="contents-heading" className="mt-16 sm:mt-20">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="contents-heading" className="font-display text-3xl font-semibold text-ink">
            The Vietnam War
          </h2>
          <Link href="/vietnam" className={`${textLink} text-[0.9375rem]`}>
            Unit overview
          </Link>
        </div>
        <ol className="mt-6 md:columns-2 md:gap-x-12">
          {VIETNAM_CHAPTERS.map((ch) => (
            <li key={ch.id} className="border-b border-rule break-inside-avoid">
              <Link href={`/vietnam/${ch.id}`} className="group flex items-baseline gap-3 py-3">
                <span className="w-6 shrink-0 text-sm text-ink-soft tabular-nums">{ch.number}</span>
                <span className="font-display text-lg leading-snug text-ink group-hover:text-brand transition-colors">
                  {ch.title.split(':')[0]}
                  {ch.isLandmark && <span className="meta ml-2 text-brand">Turning point</span>}
                </span>
                <span aria-hidden="true" className="flex-1" />
                <span className="shrink-0 text-sm text-ink-soft tabular-nums">{ch.timeframe}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Study tools */}
      <section aria-labelledby="study-heading" className="mt-16 sm:mt-20">
        <h2 id="study-heading" className="font-display text-3xl font-semibold text-ink">
          Study for the test
        </h2>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6">
          {studyTools.map((tool) => (
            <li key={tool.title}>
              <Link href="/vietnam/study-guide" className={textLink}>
                {tool.title}
              </Link>
              <p className="mt-1.5 text-[0.9375rem] text-ink-muted leading-relaxed">{tool.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* How we work */}
      <section aria-labelledby="method-heading" className="mt-16 sm:mt-20">
        <h2 id="method-heading" className="font-display text-3xl font-semibold text-ink">
          Check our work
        </h2>
        <p className="reading mt-4 text-ink-muted">
          Every big claim links to the document behind it, so you can read it yourself. We hold Washington, Hanoi, and Saigon to the same standard, and we never put quotation marks around words nobody actually said.{' '}
          <Link href="/about" className={textLink}>
            How we decide what’s true
          </Link>
        </p>
      </section>
    </div>
  );
}
