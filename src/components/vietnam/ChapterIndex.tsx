import React from 'react';
import Link from 'next/link';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';

export default function ChapterIndex() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {VIETNAM_CHAPTERS.map((ch) => (
        <article
          key={ch.id}
          className="border border-stone-300/90 dark:border-stone-800 bg-[#f9f7f2] dark:bg-[#161514] p-6 flex flex-col justify-between group hover:border-stone-900 dark:hover:border-stone-300 transition-colors rounded-sm relative"
        >
          <div>
            {/* Header / Meta */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-archival-mono text-xs font-bold text-stone-500 tracking-wider">
                CHAPTER {ch.number.toString().padStart(2, '0')} · {ch.timeframe}
              </span>
              {ch.isLandmark && (
                <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border border-amber-300/80 dark:border-amber-800 text-[10px] font-archival-mono uppercase tracking-wider font-semibold rounded-xs">
                  Turning Point
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-editorial-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-colors">
              {ch.title}
            </h3>

            {/* Subtitle */}
            <p className="font-editorial-serif italic text-sm text-stone-600 dark:text-stone-400 mt-1 mb-4">
              {ch.subtitle}
            </p>

            {/* Analytical Summary */}
            <p className="font-editorial-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
              {ch.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-stone-200 dark:border-stone-800/80 flex items-center justify-between">
            <span className="font-archival-mono text-[11px] text-stone-500 truncate max-w-[200px]" title={ch.interactiveModule.title}>
              Tool: {ch.interactiveModule.title.split(':')[0]}
            </span>
            <Link
              href={`/vietnam/${ch.id}`}
              className="inline-flex items-center font-archival-mono text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 group-hover:underline underline-offset-4"
            >
              Open Chapter &rarr;
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
