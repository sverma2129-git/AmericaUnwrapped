import React from 'react';
import Link from 'next/link';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { Thumb } from '@/components/common/Figure';

/**
 * The table of contents: one row per chapter, in order, each with its photo,
 * dates and the question the chapter answers.
 */
export default function ChapterIndex() {
  return (
    <ol className="divide-y divide-rule border-y border-rule">
      {VIETNAM_CHAPTERS.map((ch) => {
        const question = ALL_CHAPTERS_STUDY_DATA[ch.id]?.bigQuestion ?? ch.subtitle;
        return (
          <li key={ch.id}>
            <Link
              href={`/vietnam/${ch.id}`}
              className="group grid grid-cols-[minmax(0,1fr)_6.5rem] gap-x-5 gap-y-2 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_11rem] sm:gap-x-8"
            >
              <span className="hidden sm:block pt-1 font-display text-2xl font-bold tabular-nums text-rule-strong group-hover:text-brand">
                {ch.number}
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-ink-muted">
                  <span className="sm:hidden">Chapter {ch.number}, </span>
                  {ch.timeframe}
                  {ch.isLandmark && <span className="text-brand">, a turning point</span>}
                </span>
                <span className="mt-1 block font-display text-xl sm:text-2xl font-bold leading-snug text-ink group-hover:text-brand">
                  {ch.title}
                </span>
                <span className="mt-2 block max-w-[60ch] font-serif text-[1.0625rem] leading-relaxed text-ink-muted">{question}</span>
              </span>
              {ch.leadImageId ? (
                <Thumb imageId={ch.leadImageId} className="aspect-[4/3] w-full rounded-md" />
              ) : (
                <span />
              )}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
