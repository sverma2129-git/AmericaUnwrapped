import React from 'react';
import Link from 'next/link';
import { CHAPTER_COUNT, VIETNAM_CHAPTERS, getChapter } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { SOURCE_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { buildGlossary, collectQuizQuestions } from '@/lib/study';

export const metadata = {
  title: { absolute: 'America Unwrapped · Visual History & High-School Study Platform' },
  description:
    'History made genuinely understandable through museum-grade visual storytelling, authentic primary sources, interactive tactical maps, and test-ready study tools.',
};

const tileBase = 'rounded-xl border border-rule p-6 shadow-2xs';
const tileLink = `${tileBase} group block transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md`;

function Eyebrow({ children, className = 'text-brand' }: { children: React.ReactNode; className?: string }) {
  return <span className={`text-[11px] font-bold uppercase tracking-widest block ${className}`}>{children}</span>;
}

function StatTile({ value, label, href }: { value: number; label: string; href: string }) {
  return (
    <Link href={href} className={`${tileLink} bg-parchment flex flex-col justify-between gap-3 min-h-32 p-5 sm:p-6`}>
      <span className="font-editorial-serif text-4xl sm:text-5xl font-bold text-brand leading-none">{value}</span>
      <span className="text-sm text-ink-muted leading-snug group-hover:text-ink transition-colors">{label}</span>
    </Link>
  );
}

export default function HomePage() {
  const firstChapter = VIETNAM_CHAPTERS[0];
  const featured = getChapter('gulf-of-tonkin');
  const quizCount = collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA).length;
  const termCount = buildGlossary(ALL_CHAPTERS_STUDY_DATA).length;
  const verifiedQuotes = SOURCE_REGISTRY.filter((e) => e.verificationCategory === 'VERIFIED_QUOTATION').length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Hero (2×2) */}
        <section className={`${tileBase} col-span-2 lg:row-span-2 bg-ink border-ink text-paper flex flex-col justify-between gap-8 p-8 sm:p-10`}>
          <div className="space-y-5">
            <Eyebrow className="text-brand-rule">High School &bull; AP U.S. History</Eyebrow>
            <h1 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-[1.15]">
              Why did the world’s most powerful military spend 20 years fighting a war it couldn’t win?
            </h1>
            <p className="text-base text-paper/75 leading-relaxed max-w-md">
              Museum-quality storytelling, declassified evidence, and study tools built for students.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/vietnam"
              className="px-5 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-colors"
            >
              Explore the Vietnam War &rarr;
            </Link>
            <Link
              href="/vietnam/study-guide"
              className="px-5 py-3 border border-paper/30 hover:border-paper/70 text-paper font-medium rounded-lg transition-colors"
            >
              Study Guide
            </Link>
          </div>
        </section>

        {/* Featured inquiry (2×1) */}
        {featured && (
          <Link
            href={`/vietnam/${featured.id}#interactive-evidence`}
            className={`${tileLink} col-span-2 bg-brand-tint border-brand-rule flex flex-col justify-between gap-4`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <Eyebrow>Featured Inquiry &bull; Ch. {featured.number.toString().padStart(2, '0')}</Eyebrow>
                <h2 className="font-editorial-serif text-xl sm:text-2xl font-bold text-ink leading-snug group-hover:text-brand transition-colors">
                  How phantom radar contacts started an undeclared war
                </h2>
              </div>
              <div className="text-right shrink-0">
                <span className="font-editorial-serif text-3xl font-bold text-brand block leading-none">504–2</span>
                <span className="text-[11px] text-ink-muted">combined vote in Congress</span>
              </div>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed">
              On August 4, 1964, destroyers fired into a tropical squall, believing they were under attack. Within hours the commander cabled his doubts. Congress authorized war anyway.
            </p>
            <span className="text-sm font-semibold text-brand">Inspect the radar evidence &rarr;</span>
          </Link>
        )}

        {/* Stats (1×1 each) */}
        <StatTile value={CHAPTER_COUNT} label="chapters, 1945 to 1975" href="/vietnam" />
        <StatTile value={quizCount} label="self-grading quiz questions" href="/vietnam/study-guide" />

        {/* Study guide (2×1) */}
        <Link href="/vietnam/study-guide" className={`${tileLink} col-span-2 bg-parchment space-y-4`}>
          <div className="space-y-1">
            <Eyebrow>Exam Prep</Eyebrow>
            <h2 className="font-editorial-serif text-xl font-bold text-ink group-hover:text-brand transition-colors">
              Everything for the unit test, on one page
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {['📋 Cheat sheet', '✍️ Practice quiz', '🃏 Flashcards', '📝 DBQ outlines'].map((chip) => (
              <span key={chip} className="px-3 py-1.5 bg-white border border-rule rounded-full text-ink">
                {chip}
              </span>
            ))}
          </div>
        </Link>

        <StatTile value={termCount} label="glossary terms & flashcards" href="/vietnam/study-guide" />
        <StatTile value={verifiedQuotes} label="verified primary-source quotations" href="/about" />

        {/* Chapters strip (full width) */}
        <section className={`${tileBase} col-span-2 lg:col-span-4 bg-paper`} aria-labelledby="chapters-heading">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <h2 id="chapters-heading" className="font-editorial-serif text-xl font-bold text-ink">
              The {CHAPTER_COUNT} Inquiries
            </h2>
            <Link href="/vietnam" className="text-sm font-semibold text-brand hover:underline">
              All chapters &rarr;
            </Link>
          </div>
          <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {VIETNAM_CHAPTERS.map((ch) => (
              <li key={ch.id}>
                <Link
                  href={`/vietnam/${ch.id}`}
                  className="group flex h-full flex-col gap-1 rounded-lg border border-rule bg-parchment p-3 hover:border-brand transition-colors"
                >
                  <span className="flex items-center justify-between font-mono text-[11px] text-ink-soft">
                    {ch.number.toString().padStart(2, '0')}
                    {ch.isLandmark && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" title="Turning point">
                        <span className="sr-only">Turning point</span>
                      </span>
                    )}
                  </span>
                  <span className="text-xs font-semibold text-ink leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                    {ch.title}
                  </span>
                  <span className="text-[11px] text-ink-muted mt-auto">{ch.timeframe}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* Principles (2×1) */}
        <Link href="/about" className={`${tileLink} col-span-2 bg-parchment space-y-3`}>
          <Eyebrow>Our Standard</Eyebrow>
          <h2 className="font-editorial-serif text-xl font-bold text-ink group-hover:text-brand transition-colors">
            Evidence before conclusions
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Major claims link to declassified cables and archival records, and Washington, Hanoi, and Saigon get equal scrutiny. Paraphrases are never dressed up as quotations.
          </p>
        </Link>

        {/* Start (2×1) */}
        <Link
          href={`/vietnam/${firstChapter.id}`}
          className={`${tileLink} col-span-2 bg-brand border-brand text-white hover:border-brand-hover hover:bg-brand-hover flex flex-col justify-between gap-6`}
        >
          <div className="space-y-2">
            <Eyebrow className="text-brand-rule">Start Here</Eyebrow>
            <h2 className="font-editorial-serif text-2xl font-bold leading-snug">
              Chapter 01: {firstChapter.title}
            </h2>
          </div>
          <span className="text-sm font-semibold">Begin reading &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
