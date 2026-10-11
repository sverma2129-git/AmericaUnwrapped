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
    <div className="relative bg-[#fbf9f5] dark:bg-[#121110]">
      {/* Slender Sticky Reading Bar */}
      <ChapterNavigation />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        {/* Editorial Dateline & Kicker */}
        <div className="mb-10 text-center sm:text-left">
          <div className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 mb-4">
            Flagship Project No. 01 &bull; 12-Part Digital History Experience
          </div>

          <h1 className="font-editorial-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-[1.05]">
            The Vietnam War
          </h1>

          <p className="mt-4 font-editorial-serif italic text-2xl sm:text-3xl text-stone-600 dark:text-stone-400 font-normal">
            1945–1975: Conflict, Decision, &amp; Consequence
          </p>
        </div>

        {/* Framing Manifesto — Giving Text Room to Breathe */}
        <div className="border-t border-b border-stone-300 dark:border-stone-800 py-10 my-12 space-y-6 font-editorial-serif text-xl sm:text-2xl text-stone-800 dark:text-stone-200 leading-relaxed">
          <p>
            Why did the world’s foremost industrial democracy spend thirty years, 58,000 American lives, and billions in treasure fighting a war it could not win? And how did a war-torn agricultural nation withstand the heaviest aerial bombardment in human history?
          </p>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
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
        <footer className="mt-24 pt-12 border-t border-stone-300 dark:border-stone-800 text-xs font-sans space-y-4 text-stone-600 dark:text-stone-400">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h4 className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Editorial Standards &amp; Documentary Provenance
            </h4>
            <Link
              href="/about"
              className="font-archival-mono text-xs uppercase tracking-wider text-stone-800 dark:text-stone-200 underline underline-offset-4 hover:text-stone-950"
            >
              Read Editorial Charter &rarr;
            </Link>
          </div>
          <p className="leading-relaxed font-editorial-serif text-sm sm:text-base text-stone-700 dark:text-stone-300 max-w-3xl">
            This digital history project adheres to strict intellectual standards: evidence before conclusion, equal scrutiny of American and Vietnamese primary documentation, separation of established fact from interpretation, and total rejection of historical caricatures. Primary sources include declassified CIA and NSA cryptologic studies, the Pentagon Papers, Wilson Center Cold War International History Project translations, and official Vietnamese archival records.
          </p>
        </footer>
      </div>
    </div>
  );
}
