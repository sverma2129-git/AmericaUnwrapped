import type { Metadata } from 'next';
import Link from 'next/link';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import ChapterNavigation from '@/components/vietnam/ChapterNavigation';
import ChapterView from '@/components/vietnam/ChapterView';
import TimelineScrubber from '@/components/vietnam/TimelineScrubber';

export const metadata: Metadata = {
  title: 'The Vietnam War (1945–1975) · America Unwrapped',
  description:
    'A deeply researched, interactive digital history experience. Understand how the conflict developed from 1945 to 1975, the decisions in Washington and Hanoi, and why the war ended the way it did.',
};

export default function VietnamWarPage() {
  return (
    <div className="relative bg-[#FFFEFA] text-[#2C2523]">
      {/* Slender Sticky Reading Bar */}
      <ChapterNavigation />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        {/* Redirection banner to student experience */}
        <aside className="mb-8 p-4 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-[#2C2523]">
            <strong className="text-[#8B252D] uppercase tracking-wider block mb-0.5">Student Edition Available:</strong>
            Explore the redesigned chapter experience with 60-second briefings, self-grading quizzes, and interactive maps.
          </div>
          <div className="flex items-center gap-2 shrink-0 text-xs">
            <Link
              href="/vietnam"
              className="px-3 py-1.5 bg-[#8B252D] hover:bg-[#731E25] text-white font-bold uppercase rounded-xs transition-colors"
            >
              Explore History &rarr;
            </Link>
            <Link
              href="/vietnam/study-guide"
              className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#E8DDC8] text-[#2C2523] border border-[#E8DDC8] font-bold uppercase rounded-xs transition-colors"
            >
              Study Guide &rarr;
            </Link>
          </div>
        </aside>

        {/* Editorial Dateline & Kicker */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs uppercase tracking-widest text-[#6B5E59] mb-4">
            Curriculum Project &bull; 12-Part Digital History Series
          </div>

          <h1 className="font-editorial-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2C2523] leading-[1.05]">
            The Vietnam War
          </h1>

          <p className="mt-4 font-editorial-serif italic text-2xl sm:text-3xl text-[#5C524E] font-normal">
            1945–1975: Conflict, Decision, &amp; Consequence
          </p>
        </div>

        {/* Framing Manifesto — Giving Text Room to Breathe */}
        <div className="border-t border-b border-[#E8DDC8] py-10 my-12 space-y-6 font-editorial-serif text-xl sm:text-2xl text-[#2C2523] leading-relaxed">
          <p>
            Why did the world’s foremost industrial democracy spend thirty years, 58,000 American lives, and billions in treasure fighting a war it could not win? And how did a war-torn agricultural nation withstand the heaviest aerial bombardment in human history?
          </p>
          <p className="text-base sm:text-lg text-[#5C524E] font-sans leading-relaxed">
            This publication does not merely recite Vietnam facts. It reconstructs the causal chain that drove thirty years of tragedy: <strong>decision &rarr; assumption &rarr; reaction &rarr; consequence</strong>. By examining Washington, Hanoi, South Vietnam, and the battlefield with equal intellectual scrutiny, we make the mechanics of escalation genuinely understandable.
          </p>
        </div>

        {/* Chronological Backbone Ruler */}
        <section aria-label="Timeline Backbone">
          <TimelineScrubber />
        </section>

        {/* Narrative Chapters Section */}
        <main className="divide-y-0">
          {VIETNAM_CHAPTERS.map((ch, idx) => (
            <ChapterView
              key={ch.id}
              chapter={ch}
              isLastChapter={idx === VIETNAM_CHAPTERS.length - 1}
            />
          ))}
        </main>

        {/* Editorial Colophon & Methodology */}
        <footer className="mt-24 pt-12 border-t border-[#E8DDC8] text-xs font-sans space-y-4 text-[#5C524E]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h4 className="font-editorial-serif text-xl font-bold text-[#2C2523]">
              Editorial Standards &amp; Documentary Provenance
            </h4>
            <Link
              href="/about"
              className="text-xs uppercase tracking-wider text-[#8B252D] hover:underline"
            >
              Read Editorial Charter &rarr;
            </Link>
          </div>
          <p className="leading-relaxed font-editorial-serif text-sm sm:text-base text-[#5C524E] max-w-3xl">
            This digital history project adheres to strict intellectual standards: evidence before conclusion, equal scrutiny of American and Vietnamese primary documentation, separation of established fact from interpretation, and total rejection of historical caricatures. Primary sources include declassified CIA and NSA cryptologic studies, the Pentagon Papers, Wilson Center Cold War International History Project translations, and official Vietnamese archival records.
          </p>
        </footer>
      </div>
    </div>
  );
}
