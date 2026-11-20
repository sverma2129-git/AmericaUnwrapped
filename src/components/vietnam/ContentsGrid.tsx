'use client';

import React from 'react';
import Link from 'next/link';
import { CHAPTER_PARTS, VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { useReadChapters } from '@/lib/readingProgress';
import { Thumb } from '@/components/common/Figure';

/** Small mono pill for a time period, e.g. 1965–1967. */
export function PeriodBadge({ children, tone = 'plain' }: { children: React.ReactNode; tone?: 'plain' | 'navy' }) {
  return (
    <span
      className={`inline-block rounded-sm px-1.5 py-0.5 font-mono text-xs tabular-nums ${
        tone === 'navy' ? 'bg-navy text-white' : 'border border-rule bg-surface text-ink-muted'
      }`}
    >
      {children}
    </span>
  );
}

/**
 * The home page table of contents. A rail across the top shows the four parts
 * of the story and how much of each the student has read; below it, each part
 * gets a divider and a row of chapter cards with photo, period and progress.
 */
export default function ContentsGrid() {
  const read = useReadChapters();
  const readCount = VIETNAM_CHAPTERS.filter((c) => read.includes(c.id)).length;
  const nextUp = VIETNAM_CHAPTERS.find((c) => !read.includes(c.id));

  return (
    <div>
      {/* Progress and where to pick up */}
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <p className="text-sm text-ink-muted" aria-live="polite">
          {readCount === 0
            ? 'Start at Chapter 1, or jump to the one your class is on.'
            : `You’ve read ${readCount} of ${VIETNAM_CHAPTERS.length} chapters on this device.`}
        </p>
        {readCount > 0 && nextUp && (
          <Link href={`/vietnam/${nextUp.id}`} className="rounded-sm bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-hover">
            Continue with Chapter {nextUp.number}
          </Link>
        )}
      </div>

      {/* The rail: one segment per part, one notch per chapter */}
      <ol aria-label="The four parts of the story" className="mt-5 grid grid-cols-4 gap-1.5">
        {CHAPTER_PARTS.map((part) => (
          <li key={part.number}>
            <a href={`#part-${part.number}`} className="group block">
              <span className="flex gap-0.5" aria-hidden="true">
                {part.chapters.map((c) => (
                  <span key={c.id} className={`h-2 flex-1 ${read.includes(c.id) ? 'bg-brand' : 'bg-navy/80 group-hover:bg-navy'}`} />
                ))}
              </span>
              <span className="mt-2 block font-mono text-xs text-ink-muted">Part {part.number}</span>
              <span className="block text-sm font-semibold leading-snug text-navy group-hover:text-brand">{part.title}</span>
            </a>
          </li>
        ))}
      </ol>

      {/* Parts and chapter cards */}
      <div className="mt-14 space-y-14">
        {CHAPTER_PARTS.map((part) => (
          <section key={part.number} id={`part-${part.number}`} aria-labelledby={`part-title-${part.number}`}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-navy pb-3">
              <h3 id={`part-title-${part.number}`} className="font-display text-xl font-bold text-navy">
                Part {part.number}: {part.title}
              </h3>
              <PeriodBadge tone="navy">{part.years}</PeriodBadge>
            </div>
            <ol className={`mt-6 grid gap-5 sm:grid-cols-2 ${part.chapters.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
              {part.chapters.map((ch) => {
                const done = read.includes(ch.id);
                return (
                  <li key={ch.id}>
                    <Link
                      href={`/vietnam/${ch.id}`}
                      className="group flex h-full flex-col overflow-hidden rounded-sm border border-rule bg-surface hover:border-rule-strong hover:bg-parchment-light"
                    >
                      {ch.leadImageId && <Thumb imageId={ch.leadImageId} className="aspect-[16/9] w-full" />}
                      <span className="flex flex-1 flex-col p-4">
                        <span className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand font-mono text-xs font-bold text-white">
                              {ch.number}
                            </span>
                            <PeriodBadge>{ch.timeframe}</PeriodBadge>
                          </span>
                          {done && <span className="font-mono text-xs font-semibold text-success">Read ✓</span>}
                        </span>
                        <span className="mt-3 font-display text-xl font-bold leading-snug text-navy group-hover:text-brand">{ch.title}</span>
                        {ch.isLandmark && <span className="mt-2 text-sm font-medium text-brand">A turning point</span>}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
