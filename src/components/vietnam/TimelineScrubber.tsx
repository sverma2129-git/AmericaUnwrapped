'use client';

import React, { useState } from 'react';
import { VIETNAM_TIMELINE } from '@/data/vietnam/timeline';

export default function TimelineScrubber() {
  const [filterTheater, setFilterTheater] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEvents = VIETNAM_TIMELINE.filter((ev) => {
    const matchesTheater = filterTheater === 'all' || ev.theater === filterTheater;
    const matchesQuery =
      searchQuery === '' ||
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.year.toString().includes(searchQuery);
    return matchesTheater && matchesQuery;
  });

  const jumpToChapter = (chapterRef: string) => {
    const el = document.getElementById(chapterRef);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <figure className="my-14 sm:my-20 border border-stone-300 dark:border-stone-800 bg-[#f9f7f2] dark:bg-[#161514]">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Chronological Backbone
          </span>
          <span className="text-stone-500 ml-2">&bull; Thirty-Year Parallel Chronology (1945–1995)</span>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Filter year, treaty, battle..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-xs px-3 py-1 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none w-full sm:w-56"
        />
      </div>

      <div className="p-5 sm:p-7 space-y-5">
        {/* Theater Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {[
            { key: 'all', label: 'All Theaters' },
            { key: 'washington', label: 'Washington' },
            { key: 'hanoi', label: 'Hanoi' },
            { key: 'saigon', label: 'Saigon' },
            { key: 'battlefield', label: 'Battlefield' },
            { key: 'diplomacy', label: 'Diplomacy' },
          ].map((th) => (
            <button
              key={th.key}
              type="button"
              onClick={() => setFilterTheater(th.key)}
              className={`text-xs font-archival-mono uppercase tracking-wider px-2.5 py-1 border transition-colors cursor-pointer ${
                filterTheater === th.key
                  ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                  : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
              }`}
            >
              {th.label}
            </button>
          ))}
        </div>

        {/* Scrollable Event Feed */}
        <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              className="p-3.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-xs"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-archival-mono font-bold text-stone-900 dark:text-stone-100">
                    {item.dateStr}
                  </span>
                  <span className="font-archival-mono text-[10px] uppercase text-stone-500 border border-stone-200 dark:border-stone-800 px-1.5 py-0.5">
                    {item.theater}
                  </span>
                </div>
                <div className="font-editorial-serif text-sm font-bold text-stone-900 dark:text-stone-100">
                  {item.title}
                </div>
                <p className="font-sans text-stone-600 dark:text-stone-400 leading-snug">
                  {item.summary}
                </p>
              </div>

              <button
                type="button"
                onClick={() => jumpToChapter(item.chapterRef)}
                className="font-archival-mono text-[11px] uppercase tracking-wider text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50 underline underline-offset-2 cursor-pointer shrink-0"
              >
                Read in Chapter &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
