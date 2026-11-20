import React from 'react';
import Link from 'next/link';
import type { ChapterData } from '@/types/vietnam';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { Thumb } from '@/components/common/Figure';

/**
 * The end of a chapter: the next one, with its photograph and its question,
 * as one large link. Without a next chapter it points to the study guide.
 */
export default function NextChapterCard({ next }: { next?: ChapterData }) {
  if (!next) {
    return (
      <Link href="/vietnam/study-guide" className="group block rounded-sm bg-brand p-8 text-white sm:p-12">
        <p className="text-sm text-white/80">You have reached the end of the unit</p>
        <p className="mt-2 font-display text-2xl font-extrabold group-hover:underline">Go to the study guide</p>
      </Link>
    );
  }
  const question = ALL_CHAPTERS_STUDY_DATA[next.id]?.bigQuestion ?? next.subtitle;
  return (
    <Link
      href={`/vietnam/${next.id}`}
      className="group grid overflow-hidden rounded-sm bg-parchment sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
    >
      {next.leadImageId && <Thumb imageId={next.leadImageId} className="aspect-[4/3] h-full w-full sm:aspect-auto" />}
      <span className="flex flex-col justify-center p-6 sm:p-10">
        <span className="text-sm text-ink-muted">
          Next: Chapter {next.number}, {next.timeframe}
        </span>
        <span className="mt-2 font-display text-2xl font-extrabold tracking-tight text-navy group-hover:text-brand">{next.title}</span>
        <span className="mt-3 font-serif text-lg leading-snug text-ink-muted">{question}</span>
        <span className="mt-6 inline-flex w-fit rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white group-hover:bg-brand-hover">
          Read Chapter {next.number}
        </span>
      </span>
    </Link>
  );
}
