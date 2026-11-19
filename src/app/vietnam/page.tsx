import React from 'react';
import Link from 'next/link';
import ChapterIndex from '@/components/vietnam/ChapterIndex';
import { CHAPTER_COUNT, VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';

export const metadata = {
  title: 'The Vietnam War, 1945–1975',
  description: 'The Vietnam War in 12 chapters and four parts, with maps, original documents and practice questions.',
};

export default function VietnamHubPage() {
  const first = VIETNAM_CHAPTERS[0];
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header className="grid gap-x-14 gap-y-6 border-b border-ink pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
        <div>
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">The Vietnam War</h1>
          <p className="mt-4 max-w-[30ch] font-serif text-xl leading-snug text-ink">
            Thirty years, six American presidents, and a war nobody could end.
          </p>
        </div>
        <div>
          <p className="max-w-[56ch] text-base text-ink-muted">
            The {CHAPTER_COUNT} chapters run in order, from Ho Chi Minh’s declaration of independence in 1945 to how
            historians argue about the war today. Each one asks a single question and answers it with the evidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={`/vietnam/${first.id}`}
              className="rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
            >
              Start with Chapter 1
            </Link>
            <Link
              href="/vietnam/study-guide"
              className="text-sm font-medium text-brand underline decoration-brand-rule underline-offset-4 hover:decoration-brand"
            >
              Go to the study guide
            </Link>
          </div>
        </div>
      </header>

      <h2 className="sr-only">The chapters</h2>
      <ChapterIndex />
    </div>
  );
}
