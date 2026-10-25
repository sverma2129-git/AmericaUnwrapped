import React from 'react';
import Link from 'next/link';
import TimelineArc from '@/components/vietnam/TimelineArc';
import ChapterIndex from '@/components/vietnam/ChapterIndex';

export const metadata = {
  title: 'Explore History: The Vietnam War (1945–1975) · America Unwrapped',
  description:
    'An interactive, evidence-driven exploration of conflict, strategy, and consequence across thirty years of the Vietnam War.',
};

export default function VietnamHubPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* 1. Header & Central Inquiry */}
      <header className="border-b border-[#E8DDC8] pb-12 text-center max-w-4xl mx-auto space-y-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#8B252D] block">
          Flagship Historical Investigation &bull; 1945–1975
        </span>

        <h1 className="font-editorial-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#2C2523] leading-tight">
          The Vietnam War
        </h1>

        <p className="font-editorial-serif italic text-xl sm:text-2xl text-[#5C524E] leading-relaxed">
          How did thirty years of strategic decisions produce an unresolvable war?
        </p>

        <p className="font-sans text-base sm:text-lg text-[#5C524E] max-w-2xl mx-auto leading-relaxed">
          Between 1945 and 1975, five American presidencies, the government in Saigon, and the communist leadership in Hanoi pursued mutually incompatible strategic imperatives. Explore the forensic record: inspect tactical battlefield maps, examine declassified cables, test manpower models, and trace the causal chain of decisions.
        </p>

        {/* Primary Action Strip */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link
            href="/vietnam/french-indochina-dien-bien-phu"
            className="px-5 py-3 bg-[#8B252D] hover:bg-[#731E25] text-white font-semibold rounded-xs shadow-xs transition-colors"
          >
            Start with Chapter 01: Dien Bien Phu &rarr;
          </Link>

          <Link
            href="/vietnam/study-guide"
            className="px-5 py-3 bg-[#FAF7F2] hover:bg-[#E8DDC8] text-[#2C2523] border border-[#E8DDC8] font-medium rounded-xs transition-colors"
          >
            Master Unit Study Guide &amp; Quizzes
          </Link>

          <Link
            href="/vietnam/gulf-of-tonkin"
            className="px-4 py-3 bg-[#FAF7F2] hover:bg-[#E8DDC8] text-[#2C2523] border border-[#E8DDC8] font-medium rounded-xs transition-colors"
          >
            Inspect Tonkin (Ch. 04)
          </Link>
        </div>
      </header>

      {/* 2. Fast-Track Exam Preparation Banner */}
      <section className="bg-[#FAF7F2] border border-[#E8DDC8] p-6 sm:p-8 rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
            Exam Prep Mode &bull; AP &amp; High School U.S. History
          </span>
          <h2 className="font-editorial-serif text-2xl font-bold text-[#2C2523]">
            Have a test tomorrow? Open the Master Study Guide.
          </h2>
          <p className="font-sans text-sm text-[#5C524E] leading-relaxed">
            Get the full unit condensed into a 1-page cheat sheet across all five presidencies, 40+ high-yield key terms with phonetics, an interactive multi-chapter practice quiz, and DBQ essay prompts.
          </p>
        </div>
        <Link
          href="/vietnam/study-guide"
          className="px-6 py-3.5 bg-[#8B252D] hover:bg-[#731E25] text-white text-sm font-semibold rounded-xs whitespace-nowrap text-center transition-colors shadow-xs"
        >
          Open Unit Study Guide &rarr;
        </Link>
      </section>

      {/* 3. Thirty-Year Chronological Arc */}
      <section id="timeline" aria-label="Chronological Timeline" className="space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block mb-1">
            Historical Arc &bull; 1945–1975
          </span>
          <h2 className="font-editorial-serif text-3xl font-bold text-[#2C2523]">
            Thirty Years of Escalation, Stalemate, and Collapse
          </h2>
        </div>
        <div className="bg-[#FAF7F2] border border-[#E8DDC8] p-6 rounded-xs">
          <TimelineArc />
        </div>
      </section>

      {/* 4. The 12 Chapter Dossiers */}
      <section id="chapters" aria-label="Chapter Dossiers" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#E8DDC8]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block mb-1">
              Table of Inquiries &bull; 12 Chapters
            </span>
            <h2 className="font-editorial-serif text-3xl font-bold text-[#2C2523]">
              The Twelve Inquiries
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5C524E] max-w-md">
            Each inquiry isolates the central dilemma: the operating assumptions, tactical reality, and resulting consequence.
          </p>
        </div>

        <ChapterIndex />
      </section>

      {/* 5. Editorial Standard & Provenance Colophon */}
      <footer className="pt-8 border-t border-[#E8DDC8] text-center text-xs text-[#6B5E59] space-y-2">
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
