import React from 'react';
import Link from 'next/link';
import { CHAPTER_PARTS } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { Thumb } from '@/components/common/Figure';

/**
 * The table of contents in its four parts: each chapter with its photo, its
 * dates and the question it answers.
 */
export default function ChapterIndex() {
  return (
    <div className="space-y-16 pt-12 sm:space-y-20">
      {CHAPTER_PARTS.map((part) => (
        <section key={part.number} aria-labelledby={`index-part-${part.number}`} className="grid gap-x-10 gap-y-6 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <header className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm text-ink-soft">
              Part {part.number}, {part.years}
            </p>
            <h3 id={`index-part-${part.number}`} className="mt-1 font-display text-xl font-bold text-ink">
              {part.title}
            </h3>
          </header>
          <ol className="space-y-2">
            {part.chapters.map((ch) => {
              const question = ALL_CHAPTERS_STUDY_DATA[ch.id]?.bigQuestion ?? ch.subtitle;
              return (
                <li key={ch.id}>
                  <Link
                    href={`/vietnam/${ch.id}`}
                    className="group grid grid-cols-[minmax(0,1fr)_6rem] gap-x-5 rounded-sm p-3 hover:bg-parchment sm:grid-cols-[2.5rem_minmax(0,1fr)_12rem] sm:gap-x-6 sm:p-4"
                  >
                    <span className="hidden font-display text-xl font-bold tabular-nums text-ink-soft group-hover:text-brand sm:block">
                      {ch.number}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-ink-soft">
                        <span className="sm:hidden">Chapter {ch.number}, </span>
                        {ch.timeframe}
                        {ch.isLandmark && <span className="text-brand">, a turning point</span>}
                      </span>
                      <span className="mt-1 block font-display text-xl font-bold leading-snug text-ink group-hover:text-brand">
                        {ch.title}
                      </span>
                      <span className="mt-2 block max-w-[58ch] font-serif text-base leading-relaxed text-ink-muted">{question}</span>
                    </span>
                    {ch.leadImageId ? <Thumb imageId={ch.leadImageId} className="aspect-[4/3] w-full rounded-sm" /> : <span />}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
