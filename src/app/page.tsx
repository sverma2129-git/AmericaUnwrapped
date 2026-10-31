import React from 'react';
import Link from 'next/link';
import { CHAPTER_COUNT, VIETNAM_CHAPTERS, getChapter } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { SOURCE_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { buildGlossary, collectQuizQuestions } from '@/lib/study';
import Icon, { type IconName } from '@/components/common/Icon';

export const metadata = {
  title: { absolute: 'America Unwrapped · Visual History & High-School Study Platform' },
  description:
    'The Vietnam War told through the real documents and the real arguments, with interactive maps and everything you need for the unit test.',
};

const tileBase = 'card-surface rounded-xl p-6 sm:p-8';
const tileLink = `${tileBase} card-interactive group block`;

const STUDY_TOOLS: { label: string; icon: IconName }[] = [
  { label: 'Cheat sheet', icon: 'fileText' },
  { label: 'Practice quiz', icon: 'pen' },
  { label: 'Flashcards', icon: 'layers' },
  { label: 'DBQ outlines', icon: 'scroll' },
];

function Eyebrow({ children, className = 'text-brand' }: { children: React.ReactNode; className?: string }) {
  return <span className={`eyebrow block ${className}`}>{children}</span>;
}

function StatTile({ value, label, detail, href }: { value: number; label: string; detail: string; href: string }) {
  return (
    <Link href={href} className="card-surface card-interactive group rounded-xl p-5 sm:p-6 flex flex-col gap-3">
      <span className="flex items-center justify-between gap-2">
        <Eyebrow className="text-ink-soft group-hover:text-ink transition-colors">{label}</Eyebrow>
        <Icon
          name="arrowUpRight"
          className="w-4 h-4 text-ink-soft opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </span>
      <span className="font-editorial-serif text-4xl sm:text-5xl font-medium text-ink leading-none tabular-nums">
        {value}
      </span>
      <span className="text-sm text-ink-muted leading-snug border-t border-rule pt-3 mt-auto">{detail}</span>
    </Link>
  );
}

function ArrowLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${className}`}>
      {children}
      <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </span>
  );
}

export default function HomePage() {
  const firstChapter = VIETNAM_CHAPTERS[0];
  const featured = getChapter('gulf-of-tonkin');
  const quizCount = collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA).length;
  const termCount = buildGlossary(ALL_CHAPTERS_STUDY_DATA).length;
  const verifiedQuotes = SOURCE_REGISTRY.filter((e) => e.verificationCategory === 'VERIFIED_QUOTATION').length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Hero (2×2) */}
        <section className="col-span-2 lg:row-span-2 rounded-xl bg-ink text-paper shadow-sm flex flex-col justify-between gap-10 p-8 sm:p-10">
          <div className="space-y-6">
            <Eyebrow className="text-paper/60">High School &middot; AP U.S. History</Eyebrow>
            <h1 className="font-editorial-serif text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-medium leading-[1.1] tracking-tight">
              Why did the world’s most powerful military spend 20 years fighting a war it couldn’t win?
            </h1>
            <p className="text-base text-paper/75 leading-relaxed max-w-md">
              Read the actual cables, hear from the people who were there, and decide for yourself. Then get ready for the test.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/vietnam"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-paper hover:bg-surface text-ink font-semibold rounded-lg transition-colors"
            >
              Explore the Vietnam War
              <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/vietnam/study-guide"
              className="inline-flex items-center px-5 py-3 border border-paper/25 hover:border-paper/60 text-paper font-medium rounded-lg transition-colors"
            >
              Study Guide
            </Link>
          </div>
        </section>

        {/* Featured inquiry (2×1) */}
        {featured && (
          <Link href={`/vietnam/${featured.id}#interactive-evidence`} className={`${tileLink} col-span-2 flex flex-col gap-5`}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
              <div className="space-y-2.5">
                <Eyebrow>Featured Inquiry &middot; Ch. {featured.number.toString().padStart(2, '0')}</Eyebrow>
                <h2 className="font-editorial-serif text-2xl font-medium text-ink leading-snug tracking-tight group-hover:text-brand transition-colors">
                  How phantom radar contacts started an undeclared war
                </h2>
              </div>
              <div className="shrink-0 flex items-baseline gap-3 sm:block sm:text-right sm:pl-6 sm:border-l border-rule">
                <span className="font-editorial-serif text-3xl font-medium text-ink block leading-none tabular-nums">504–2</span>
                <span className="eyebrow block text-ink-soft sm:mt-2 sm:max-w-28 sm:ml-auto">Combined vote in Congress</span>
              </div>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed">
              On August 4, 1964, destroyers fired into a tropical squall, believing they were under attack. Within hours the commander cabled his doubts. Congress authorized war anyway.
            </p>
            <ArrowLink className="mt-auto text-brand">Inspect the radar evidence</ArrowLink>
          </Link>
        )}

        {/* Study guide (2×1) */}
        <Link href="/vietnam/study-guide" className={`${tileLink} col-span-2 flex flex-col gap-5`}>
          <div className="space-y-2.5">
            <Eyebrow>Exam Prep</Eyebrow>
            <h2 className="font-editorial-serif text-2xl font-medium text-ink leading-snug tracking-tight group-hover:text-brand transition-colors">
              Everything for the unit test, on one page
            </h2>
          </div>
          <ul className="mt-auto flex flex-wrap gap-2 text-xs font-medium text-ink-muted">
            {STUDY_TOOLS.map((tool) => (
              <li
                key={tool.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-parchment-light border border-rule rounded-full group-hover:border-rule-strong transition-colors"
              >
                <Icon name={tool.icon} className="w-3.5 h-3.5 text-ink-soft" />
                {tool.label}
              </li>
            ))}
          </ul>
        </Link>

        {/* Stats (one row of four) */}
        <StatTile value={CHAPTER_COUNT} label="Chapters" detail="From 1945 to the fall of Saigon" href="/vietnam" />
        <StatTile value={quizCount} label="Quiz questions" detail="Self-grading, with explanations" href="/vietnam/study-guide" />
        <StatTile value={termCount} label="Key terms" detail="Glossary entries and flashcards" href="/vietnam/study-guide" />
        <StatTile value={verifiedQuotes} label="Verified quotes" detail="Checked primary-source quotations" href="/about" />

        {/* Chapters strip (full width) */}
        <section className={`${tileBase} col-span-2 lg:col-span-4`} aria-labelledby="chapters-heading">
          <div className="flex items-end justify-between gap-4 mb-6 pb-4 border-b border-rule">
            <div className="space-y-1.5">
              <Eyebrow className="text-ink-soft">Table of Contents</Eyebrow>
              <h2 id="chapters-heading" className="font-editorial-serif text-2xl font-medium text-ink tracking-tight">
                The {CHAPTER_COUNT} Inquiries
              </h2>
            </div>
            <Link href="/vietnam" className="group text-brand hover:text-brand-hover transition-colors">
              <ArrowLink>All chapters</ArrowLink>
            </Link>
          </div>
          <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {VIETNAM_CHAPTERS.map((ch) => (
              <li key={ch.id}>
                <Link
                  href={`/vietnam/${ch.id}`}
                  className="group card-interactive flex h-full flex-col gap-1.5 rounded-lg border border-rule bg-parchment-light hover:bg-surface p-3.5"
                >
                  <span className="flex items-center justify-between font-archival-mono text-[11px] text-ink-soft tabular-nums">
                    {ch.number.toString().padStart(2, '0')}
                    {ch.isLandmark && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" title="Turning point">
                        <span className="sr-only">Turning point</span>
                      </span>
                    )}
                  </span>
                  <span className="font-editorial-serif text-[0.9375rem] font-medium text-ink leading-snug line-clamp-3 group-hover:text-brand transition-colors">
                    {ch.title.split(':')[0]}
                  </span>
                  <span className="text-[11px] text-ink-soft mt-auto pt-1 tabular-nums">{ch.timeframe}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* Principles (2×1) */}
        <Link href="/about" className={`${tileLink} col-span-2 space-y-3`}>
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="font-editorial-serif text-2xl font-medium text-ink tracking-tight group-hover:text-brand transition-colors">
            Check our work
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Every big claim links to the document behind it, so you can read it yourself. We hold Washington, Hanoi, and Saigon to the same standard, and we never put quotation marks around words nobody actually said.
          </p>
        </Link>

        {/* Start (2×1) */}
        <Link
          href={`/vietnam/${firstChapter.id}`}
          className="group col-span-2 rounded-xl bg-brand hover:bg-brand-hover text-white shadow-sm hover:shadow-md p-6 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
        >
          <div className="space-y-2.5">
            <Eyebrow className="text-brand-rule">Start Here</Eyebrow>
            <h2 className="font-editorial-serif text-2xl font-medium leading-snug tracking-tight">
              Chapter 01: {firstChapter.title}
            </h2>
          </div>
          <ArrowLink>Begin reading</ArrowLink>
        </Link>
      </div>
    </div>
  );
}
