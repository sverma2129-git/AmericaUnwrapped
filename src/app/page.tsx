import React from 'react';
import Link from 'next/link';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';

export const metadata = {
  title: 'America Unwrapped · Visual History & High-School Study Platform',
  description:
    'History made genuinely understandable through museum-grade visual storytelling, authentic primary sources, interactive tactical maps, and test-ready study tools.',
};

export default function HomePage() {
  return (
    <div className="space-y-20 py-8 sm:py-16">
      {/* 1. Hero Section: Compelling Headline & Introduction */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#8B252D]">
          High School &bull; AP U.S. History Learning Platform
        </span>

        <h1 className="font-editorial-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C2523] leading-[1.15]">
          Why did the world’s most powerful military spend 20 years fighting a war it couldn’t win?
        </h1>

        <p className="font-sans text-lg sm:text-xl text-[#5C524E] max-w-2xl mx-auto leading-relaxed">
          America Unwrapped replaces dense textbook walls of text with museum-quality storytelling, authentic declassified evidence, and practical study tools built for students.
        </p>

        {/* Primary Action Buttons */}
        <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-sm">
          <Link
            href="/vietnam"
            className="px-6 py-3.5 bg-[#8B252D] hover:bg-[#731E25] text-white font-semibold rounded-xs shadow-xs transition-colors"
          >
            Explore History: The Vietnam War &rarr;
          </Link>
          <Link
            href="/vietnam/study-guide"
            className="px-6 py-3.5 bg-[#FAF7F2] hover:bg-[#E8DDC8] text-[#2C2523] border border-[#E8DDC8] font-medium rounded-xs transition-colors"
          >
            Open Master Study Guide
          </Link>
        </div>
      </section>

      {/* 2. Three Clear Student Pathways */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-editorial-serif text-2xl font-bold text-[#2C2523]">
            Three Ways to Learn
          </h2>
          <p className="font-sans text-sm text-[#5C524E] mt-1">
            Choose the approach that fits your goals today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pathway 1: Read the Story */}
          <Link
            href="/vietnam"
            className="p-6 bg-[#FAF7F2] border border-[#E8DDC8] hover:border-[#8B252D] rounded-xs transition-all group flex flex-col justify-between shadow-2xs"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                01 &bull; The Narrative Arc
              </span>
              <h3 className="font-editorial-serif text-xl font-bold text-[#2C2523] group-hover:text-[#8B252D] transition-colors">
                Read the 12 Chapters
              </h3>
              <p className="font-sans text-sm text-[#5C524E] leading-relaxed">
                Follow thirty years of history from 1945 French Indochina to the 1975 Fall of Saigon, with unburied stories and primary documents.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8DDC8] text-sm font-semibold text-[#8B252D] flex items-center justify-between">
              <span>Explore all chapters</span>
              <span>&rarr;</span>
            </div>
          </Link>

          {/* Pathway 2: Explore Evidence */}
          <Link
            href="/vietnam/gulf-of-tonkin"
            className="p-6 bg-[#FAF7F2] border border-[#E8DDC8] hover:border-[#8B252D] rounded-xs transition-all group flex flex-col justify-between shadow-2xs"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                02 &bull; Interactive Evidence
              </span>
              <h3 className="font-editorial-serif text-xl font-bold text-[#2C2523] group-hover:text-[#8B252D] transition-colors">
                Tactical Maps &amp; Radar
              </h3>
              <p className="font-sans text-sm text-[#5C524E] leading-relaxed">
                Inspect Tonkin synchronized radar scopes, Dien Bien Phu valley terrain, the Ho Chi Minh Trail, and declassified Pentagon cables.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8DDC8] text-sm font-semibold text-[#8B252D] flex items-center justify-between">
              <span>Inspect Tonkin evidence</span>
              <span>&rarr;</span>
            </div>
          </Link>

          {/* Pathway 3: Study for Exams */}
          <Link
            href="/vietnam/study-guide"
            className="p-6 bg-[#FAF7F2] border border-[#E8DDC8] hover:border-[#8B252D] rounded-xs transition-all group flex flex-col justify-between shadow-2xs"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                03 &bull; Exam Preparation
              </span>
              <h3 className="font-editorial-serif text-xl font-bold text-[#2C2523] group-hover:text-[#8B252D] transition-colors">
                Study Guide &amp; Quizzes
              </h3>
              <p className="font-sans text-sm text-[#5C524E] leading-relaxed">
                Review the 1-page unit cheat sheet across 5 presidencies, practice with self-grading quizzes, and test vocabulary with flip cards.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8DDC8] text-sm font-semibold text-[#8B252D] flex items-center justify-between">
              <span>Open Study Guide</span>
              <span>&rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Featured Spotlight: The Gulf of Tonkin Incident */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E8DDC8] p-6 sm:p-10 rounded-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-[#E8DDC8]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D]">
              Featured Inquiry &bull; Chapter 04
            </span>
            <Link
              href="/vietnam/gulf-of-tonkin"
              className="text-xs font-semibold text-[#8B252D] hover:underline"
            >
              Open Full Chapter &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#2C2523] leading-snug">
                The Gulf of Tonkin: How Phantom Radar Ghosts Started an Undeclared War
              </h2>
              <p className="font-sans text-base text-[#5C524E] leading-relaxed">
                On August 4, 1964, U.S. destroyers fired 652 shells into a pitch-black tropical squall, believing they were under torpedo attack. Within hours, the commander cabled Washington that freak weather and acoustic echoes had misled operators. Yet Congress passed the Tonkin Resolution 504–2, giving President Johnson a &ldquo;blank check&rdquo; for war.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-white border border-[#E8DDC8] text-xs font-medium text-[#2C2523] rounded-xs">
                  ⚡ 60-Sec Briefing
                </span>
                <span className="px-3 py-1 bg-white border border-[#E8DDC8] text-xs font-medium text-[#2C2523] rounded-xs">
                  🗺️ Dual-Clock Radar Reconstruction
                </span>
                <span className="px-3 py-1 bg-white border border-[#E8DDC8] text-xs font-medium text-[#2C2523] rounded-xs">
                  ✍️ Self-Grading Quiz
                </span>
                <span className="px-3 py-1 bg-white border border-[#E8DDC8] text-xs font-medium text-[#2C2523] rounded-xs">
                  📜 Declassified NSA Records
                </span>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#F7F3EB] border border-[#E8DDC8] p-5 rounded-xs space-y-3 text-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                The Timeline Dilemma
              </span>
              <ul className="space-y-2 text-xs text-[#5C524E]">
                <li><strong className="text-[#2C2523]">21:30 ICT:</strong> Radar contacts reported 30 miles off USS Maddox.</li>
                <li><strong className="text-[#2C2523]">22:00 ICT:</strong> Sonar reports 22 torpedoes fired.</li>
                <li><strong className="text-[#8B252D]">01:27 EDT:</strong> Capt. Herrick cables doubts to McNamara.</li>
                <li><strong className="text-[#8B252D]">23:34 EDT:</strong> LBJ announces retaliatory air strikes.</li>
              </ul>
              <Link
                href="/vietnam/gulf-of-tonkin#evidence"
                className="mt-3 block text-center py-2 bg-[#8B252D] hover:bg-[#731E25] text-white text-xs font-semibold rounded-xs transition-colors"
              >
                Inspect Radar Evidence &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 12 Chronological Inquiries Curriculum Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E8DDC8] pb-4 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block mb-1">
              Curriculum Sequence &bull; All 12 Chapters
            </span>
            <h2 className="font-editorial-serif text-3xl font-bold text-[#2C2523]">
              The Twelve Inquiries
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5C524E] max-w-md">
            Each chapter includes a 60-second briefing, full narrative, interactive map or model, practice quiz, and flashcards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIETNAM_CHAPTERS.map((ch) => {
            const study = ALL_CHAPTERS_STUDY_DATA[ch.id];
            return (
              <article
                key={ch.id}
                className="bg-[#FAF7F2] border border-[#E8DDC8] hover:border-[#8B252D] p-6 rounded-xs transition-colors group flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-3">
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#5C524E]">
                      Chapter {ch.number.toString().padStart(2, '0')} &bull; {ch.timeframe}
                    </span>
                    {ch.isLandmark && (
                      <span className="px-2 py-0.5 bg-[#FDF3F3] text-[#8B252D] border border-[#F0C4C7] text-[10px] font-bold uppercase rounded-xs">
                        Turning Point
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial-serif text-xl font-bold text-[#2C2523] leading-snug group-hover:text-[#8B252D] transition-colors">
                    <Link href={`/vietnam/${ch.id}`}>
                      {ch.title}
                    </Link>
                  </h3>

                  {/* Central Inquiry Question */}
                  <div className="p-3 bg-[#F7F3EB] border-l-2 border-[#8B252D] rounded-r-xs">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B252D] block mb-0.5">
                      The Big Question
                    </span>
                    <p className="font-editorial-serif text-xs text-[#2C2523] italic leading-snug">
                      &ldquo;{study?.bigQuestion || ch.subtitle}&rdquo;
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="font-sans text-xs text-[#5C524E] leading-relaxed line-clamp-3">
                    {ch.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DDC8] flex items-center justify-between text-xs">
                  <span className="text-[#6B5E59]">
                    ~7 min read
                  </span>
                  <Link
                    href={`/vietnam/${ch.id}`}
                    className="font-semibold text-[#8B252D] hover:underline"
                  >
                    Study Chapter &rarr;
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 5. Pedagogical Value Pillars for Students & Teachers */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#2C2523]">
            Why Students Learn Faster on America Unwrapped
          </h2>
          <p className="font-sans text-sm text-[#5C524E] mt-2">
            Built for clarity, retention, and genuine understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
              01 &bull; 60-Second Briefings
            </span>
            <h3 className="font-editorial-serif text-lg font-bold text-[#2C2523]">
              No Walls of Text or Buried Content
            </h3>
            <p className="font-sans text-sm text-[#5C524E] leading-relaxed">
              Every chapter starts with a 60-second summary and three essential exam takeaways. The main story is unburied and divided with clear subheadings.
            </p>
          </div>

          <div className="p-6 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
              02 &bull; Test-Ready Study Tools
            </span>
            <h3 className="font-editorial-serif text-lg font-bold text-[#2C2523]">
              Practice Quizzes with Historical Rationales
            </h3>
            <p className="font-sans text-sm text-[#5C524E] leading-relaxed">
              Self-grading questions provide immediate feedback with real historical explanations and direct links to declassified source documents.
            </p>
          </div>

          <div className="p-6 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
              03 &bull; Spatial &amp; Tactical Evidence
            </span>
            <h3 className="font-editorial-serif text-lg font-bold text-[#2C2523]">
              Interactive Maps, Radar &amp; Decision Trees
            </h3>
            <p className="font-sans text-sm text-[#5C524E] leading-relaxed">
              Understand why decisions were made under fog of war: inspect Dien Bien Phu valley ridges, Tonkin radar contacts, and Ho Chi Minh Trail networks.
            </p>
          </div>

          <div className="p-6 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
              04 &bull; Archival Rigor
            </span>
            <h3 className="font-editorial-serif text-lg font-bold text-[#2C2523]">
              Evidence Before Conclusions
            </h3>
            <p className="font-sans text-sm text-[#5C524E] leading-relaxed">
              Major claims link directly to declassified cables, intelligence estimates, and Politburo records. We scrutinize Washington, Hanoi, and Saigon equally.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Bottom Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="bg-[#E8DDC8] border border-[#DFD3BC] p-8 sm:p-12 rounded-xs space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B252D] block">
            Start Learning
          </span>
          <h2 className="font-editorial-serif text-3xl sm:text-4xl font-bold text-[#2C2523]">
            Ready to Begin?
          </h2>
          <p className="font-sans text-base text-[#5C524E] max-w-xl mx-auto leading-relaxed">
            Whether preparing for tomorrow’s unit exam or exploring Cold War history for curiosity, America Unwrapped gives you clarity in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/vietnam/french-indochina-dien-bien-phu"
              className="px-6 py-3.5 bg-[#8B252D] hover:bg-[#731E25] text-white font-semibold rounded-xs shadow-xs transition-colors"
            >
              Start Chapter 01: Dien Bien Phu &rarr;
            </Link>
            <Link
              href="/vietnam/study-guide"
              className="px-6 py-3.5 bg-[#FFFEFA] hover:bg-[#FAF7F2] text-[#2C2523] border border-[#DFD3BC] font-semibold rounded-xs transition-colors"
            >
              Open Master Study Guide &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
