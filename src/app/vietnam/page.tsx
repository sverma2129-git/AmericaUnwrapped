import React from 'react';
import Link from 'next/link';
import ChapterIndex from '@/components/vietnam/ChapterIndex';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';

export const metadata = {
  title: 'The Vietnam War, 1945–1975',
  description: 'The Vietnam War in 12 chapters, with maps, original documents and practice questions.',
};

export default function VietnamHubPage() {
  const first = VIETNAM_CHAPTERS[0];
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-[3.25rem]">
          The Vietnam War
        </h1>
        <p className="mt-4 font-serif text-xl leading-snug text-ink sm:text-[1.4375rem]">
          How did thirty years of decisions lead to a war nobody could end?
        </p>
        <p className="mt-4 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          From 1945 to 1975, six American presidents, the government in Saigon and the leaders in Hanoi each wanted
          something the others would not accept. Follow the war in {VIETNAM_CHAPTERS.length} chapters, with maps, the
          original cables and practice questions for every chapter.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={`/vietnam/${first.id}`}
            className="rounded-md bg-brand px-5 py-3 text-[0.9375rem] font-semibold text-white hover:bg-brand-hover"
          >
            Start with Chapter 1
          </Link>
          <Link
            href="/vietnam/study-guide"
            className="text-[0.9375rem] font-semibold text-brand underline decoration-brand-rule underline-offset-4 hover:decoration-brand"
          >
            Test coming up? Open the study guide
          </Link>
        </div>
      </header>

      <section aria-labelledby="chapters-title" className="mt-16 sm:mt-20">
        <h2 id="chapters-title" className="font-display text-[1.75rem] font-bold tracking-tight text-ink sm:text-[2.125rem]">
          The chapters
        </h2>
        <p className="mt-2 max-w-[62ch] text-[1.0625rem] text-ink-muted">
          In order, from Ho Chi Minh’s declaration of independence to how historians argue about the war today. Each
          chapter asks one question and answers it with the evidence.
        </p>
        <div className="mt-8">
          <ChapterIndex />
        </div>
      </section>
    </div>
  );
}
