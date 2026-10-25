import React from 'react';
import Link from 'next/link';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';

export default function ChapterIndex() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {VIETNAM_CHAPTERS.map((ch) => {
        const study = ALL_CHAPTERS_STUDY_DATA[ch.id];
        return (
          <article
            key={ch.id}
            className="bg-parchment border border-rule hover:border-brand p-6 flex flex-col justify-between group transition-colors rounded-xs shadow-2xs"
          >
            <div>
              {/* Header / Meta */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold text-ink-muted">
                  Chapter {ch.number.toString().padStart(2, '0')} &bull; {ch.timeframe}
                </span>
                {ch.isLandmark && (
                  <span className="px-2 py-0.5 bg-brand-tint text-brand border border-brand-rule text-[10px] font-bold uppercase rounded-xs">
                    Turning Point
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-editorial-serif text-xl sm:text-2xl font-bold text-ink leading-snug group-hover:text-brand transition-colors">
                <Link href={`/vietnam/${ch.id}`}>
                  {ch.title}
                </Link>
              </h3>

              {/* Central Inquiry Question */}
              <div className="my-3 p-3 bg-parchment-light border-l-2 border-brand rounded-r-xs">
                <span className="text-[10px] uppercase tracking-wider font-bold text-brand block mb-0.5">
                  The Inquiry
                </span>
                <p className="font-editorial-serif text-xs text-ink italic leading-snug">
                  &ldquo;{study?.bigQuestion || ch.subtitle}&rdquo;
                </p>
              </div>

              {/* Analytical Summary */}
              <p className="font-sans text-xs text-ink-muted leading-relaxed mb-4 line-clamp-3">
                {ch.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-rule space-y-3">
              {/* Feature badges */}
              <div className="flex flex-wrap gap-1.5 text-[11px] text-ink-muted">
                <span className="px-2 py-0.5 bg-white border border-rule rounded-xs">
                  ⚡ 60s Briefing
                </span>
                <span className="px-2 py-0.5 bg-white border border-rule rounded-xs">
                  ✍️ {study?.quiz?.length || 3} Quizzes
                </span>
                <span className="px-2 py-0.5 bg-white border border-rule rounded-xs">
                  🃏 {study?.flashcards?.length || 3} Cards
                </span>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span
                  className="text-ink-soft truncate max-w-[170px]"
                  title={ch.interactiveModule.title}
                >
                  🗺️ {ch.interactiveModule.title.split(':')[0]}
                </span>
                <Link
                  href={`/vietnam/${ch.id}`}
                  className="font-semibold text-brand hover:underline"
                >
                  Study Chapter &rarr;
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
