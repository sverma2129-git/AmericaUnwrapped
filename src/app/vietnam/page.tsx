import React from 'react';
import Link from 'next/link';
import TimelineArc from '@/components/vietnam/TimelineArc';
import ChapterIndex from '@/components/vietnam/ChapterIndex';

export const metadata = {
  title: 'The Vietnam War (1945–1975) · America Unwrapped',
  description:
    'An interactive, evidence-driven exploration of conflict, strategy, and consequence across thirty years of the Vietnam War.',
};

export default function VietnamHubPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* 1. High-Stakes Editorial Opening */}
      <header className="border-b border-stone-300 dark:border-stone-800 pb-12 sm:pb-16 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4 font-archival-mono text-xs uppercase tracking-widest text-stone-500">
          <span>Flagship Digital Investigation</span>
          <span className="text-stone-300 dark:text-stone-700">&bull;</span>
          <span>1945–1975 &amp; Beyond</span>
        </div>

        <h1 className="font-editorial-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase leading-none">
          The Vietnam War
        </h1>

        <p className="mt-5 font-editorial-serif italic text-lg sm:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed">
          How did thirty years of strategic decisions produce an unresolvable war?
        </p>

        <p className="mt-4 font-editorial-serif text-base sm:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          Between 1945 and 1975, five American presidencies, the government in Saigon, and the communist leadership in Hanoi pursued mutually incompatible strategic imperatives. Explore the forensic record: inspect tactical battlefield maps, examine declassified cables, test manpower models, and trace the causal chain of decisions.
        </p>

        {/* Primary Action Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-archival-mono">
          <Link
            href="/vietnam/french-indochina-dien-bien-phu"
            className="px-5 py-3 bg-stone-900 hover:bg-stone-800 text-stone-100 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 font-bold uppercase tracking-wider transition-colors rounded-sm shadow-xs"
          >
            Start with Chapter 01: Dien Bien Phu &rarr;
          </Link>

          <Link
            href="/vietnam/gulf-of-tonkin"
            className="px-4 py-3 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-stone-900 dark:hover:border-stone-100 font-semibold uppercase tracking-wider transition-colors rounded-sm"
          >
            Inspect Tonkin (Ch. 04)
          </Link>

          <Link
            href="/vietnam/tet-offensive"
            className="px-4 py-3 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-stone-900 dark:hover:border-stone-100 font-semibold uppercase tracking-wider transition-colors rounded-sm"
          >
            Explore Tet (Ch. 07)
          </Link>

          <Link
            href="/vietnam-war"
            className="px-3 py-3 text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 underline underline-offset-4 tracking-wider transition-colors"
          >
            Legacy Single-Page
          </Link>
        </div>
      </header>

      {/* 2. Thirty-Year Chronological Arc */}
      <section aria-label="Chronological Timeline">
        <TimelineArc />
      </section>

      {/* 3. The 12 Chapter Dossiers */}
      <section aria-label="Chapter Dossiers">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-2 pb-4 border-b border-stone-200 dark:border-stone-800">
          <div>
            <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 block mb-1">
              Table of Inquiries
            </span>
            <h2 className="font-editorial-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
              The Twelve Inquiries
            </h2>
          </div>
          <p className="font-editorial-serif text-sm text-stone-500 italic max-w-md">
            Each inquiry isolates the central dilemma: the operating assumptions, tactical reality, and resulting consequence.
          </p>
        </div>

        <ChapterIndex />
      </section>

      {/* 4. Editorial Standard & Provenance Colophon */}
      <footer className="pt-10 border-t border-stone-300 dark:border-stone-800 text-center font-archival-mono text-xs text-stone-500 space-y-2">
        <div>
          PRIMARY ARCHIVES: U.S. National Archives (NARA) &bull; National Archives of Vietnam &bull; Wilson Center CWIHP &bull; Foreign Relations of the United States (FRUS)
        </div>
        <div>
          SCHOLARLY RIGOR: Evidence before verdict. Symmetrical scrutiny across Washington, Hanoi, and Saigon.
        </div>
      </footer>
    </div>
  );
}
