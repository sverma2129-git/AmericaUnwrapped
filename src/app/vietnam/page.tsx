import React from 'react';
import Link from 'next/link';
import TimelineArc from '@/components/vietnam/TimelineArc';
import ChapterIndex from '@/components/vietnam/ChapterIndex';

export const metadata = {
  title: 'The Vietnam War, 1945–1975',
  description:
    'The Vietnam War in 12 chapters, with maps, original documents and practice questions.',
};

export default function VietnamHubPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* 1. Header & Central Inquiry */}
      <header className="border-b border-rule pb-12 max-w-3xl space-y-5">
        <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
          The Vietnam War
        </h1>

        <p className="font-display text-xl sm:text-2xl text-ink-muted leading-relaxed">
          How did thirty years of decisions lead to a war nobody could end?
        </p>

        <p className="font-sans text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed">
          From 1945 to 1975, five American presidents, the government in Saigon and the leaders in Hanoi each wanted something the others would not accept. Follow the war in 12 chapters, with maps, the original cables and practice questions for every chapter.
        </p>

        {/* Primary Action Strip */}
        <div className="pt-4 flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/vietnam/french-indochina-dien-bien-phu"
            className="px-5 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-xs transition-colors"
          >
            Start with Chapter 1
          </Link>

          <Link
            href="/vietnam/study-guide"
            className="px-5 py-3 bg-parchment hover:bg-rule text-ink border border-rule font-medium rounded-xs transition-colors"
          >
            Study guide
          </Link>

          <Link
            href="/vietnam/gulf-of-tonkin"
            className="px-4 py-3 bg-parchment hover:bg-rule text-ink border border-rule font-medium rounded-xs transition-colors"
          >
            Jump to the Gulf of Tonkin
          </Link>
        </div>
      </header>

      {/* 2. Fast-Track Exam Preparation Banner */}
      <section className="bg-parchment border border-rule p-6 sm:p-8 rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-ink">
            Test tomorrow? Start with the study guide.
          </h2>
          <p className="font-sans text-sm text-ink-muted leading-relaxed">
            The whole unit on one page, every key term, a practice quiz and essay outlines.
          </p>
        </div>
        <Link
          href="/vietnam/study-guide"
          className="px-6 py-3.5 bg-brand hover:bg-brand-hover text-white text-sm font-semibold rounded-xs whitespace-nowrap text-center transition-colors"
        >
          Open the study guide
        </Link>
      </section>

      {/* 3. Thirty-Year Chronological Arc */}
      <section id="timeline" aria-label="Chronological Timeline" className="space-y-4">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink">
            Thirty years at a glance
          </h2>
        </div>
        <div className="bg-parchment border border-rule p-6 rounded-xs">
          <TimelineArc />
        </div>
      </section>

      {/* 4. The Chapters */}
      <section id="chapters" aria-label="Chapters" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-rule">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">
              The 12 chapters
            </h2>
          </div>
          <p className="font-sans text-sm text-ink-muted max-w-md">
            Each chapter asks one question and answers it with the evidence.
          </p>
        </div>

        <ChapterIndex />
      </section>

      {/* 5. Editorial Standard & Provenance Colophon */}
      <footer className="pt-8 border-t border-rule text-center text-xs text-ink-soft space-y-2">
        <div>
          PRIMARY ARCHIVES: U.S. National Archives (NARA) &bull; National Archives of Vietnam &bull; Wilson Center CWIHP &bull; Foreign Relations of the United States (FRUS)
        </div>
        <div>
          Evidence first, conclusions second. Washington, Hanoi, and Saigon held to the same standard.
        </div>
      </footer>
    </div>
  );
}
