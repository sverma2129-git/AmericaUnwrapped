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
            className="bg-[#FAF7F2] border border-[#E8DDC8] hover:border-[#8B252D] p-6 flex flex-col justify-between group transition-colors rounded-xs shadow-2xs"
          >
            <div>
              {/* Header / Meta */}
              <div className="flex items-center justify-between gap-2 mb-3">
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
              <h3 className="font-editorial-serif text-xl sm:text-2xl font-bold text-[#2C2523] leading-snug group-hover:text-[#8B252D] transition-colors">
                <Link href={`/vietnam/${ch.id}`}>
                  {ch.title}
                </Link>
              </h3>

              {/* Central Inquiry Question */}
              <div className="my-3 p-3 bg-[#F7F3EB] border-l-2 border-[#8B252D] rounded-r-xs">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B252D] block mb-0.5">
                  The Inquiry
                </span>
                <p className="font-editorial-serif text-xs text-[#2C2523] italic leading-snug">
                  &ldquo;{study?.bigQuestion || ch.subtitle}&rdquo;
                </p>
              </div>

              {/* Analytical Summary */}
              <p className="font-sans text-xs text-[#5C524E] leading-relaxed mb-4 line-clamp-3">
                {ch.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8DDC8] space-y-3">
              {/* Feature badges */}
              <div className="flex flex-wrap gap-1.5 text-[11px] text-[#5C524E]">
                <span className="px-2 py-0.5 bg-white border border-[#E8DDC8] rounded-xs">
                  ⚡ 60s Briefing
                </span>
                <span className="px-2 py-0.5 bg-white border border-[#E8DDC8] rounded-xs">
                  ✍️ {study?.quiz?.length || 3} Quizzes
                </span>
                <span className="px-2 py-0.5 bg-white border border-[#E8DDC8] rounded-xs">
                  🃏 {study?.flashcards?.length || 3} Cards
                </span>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span
                  className="text-[#6B5E59] truncate max-w-[170px]"
                  title={ch.interactiveModule.title}
                >
                  🗺️ {ch.interactiveModule.title.split(':')[0]}
                </span>
                <Link
                  href={`/vietnam/${ch.id}`}
                  className="font-semibold text-[#8B252D] hover:underline"
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
