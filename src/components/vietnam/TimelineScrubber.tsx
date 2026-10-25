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
    <figure className="my-14 sm:my-20 border border-[#E8DDC8] bg-[#FAF7F2] rounded-xs shadow-xs text-[#2C2523]">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-[#E8DDC8] bg-[#F7F3EB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="font-bold uppercase tracking-wider text-[#2C2523]">
            Chronological Backbone
          </span>
          <span className="text-[#6B5E59] ml-2">&bull; Thirty-Year Parallel Chronology (1945–1995)</span>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Filter year, treaty, battle..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-xs px-3 py-1.5 border border-[#E8DDC8] bg-[#FFFEFA] text-[#2C2523] placeholder-[#5C524E]/60 focus:outline-none focus:border-[#8B252D] w-full sm:w-56 rounded-xs"
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
              className={`text-xs uppercase tracking-wider px-2.5 py-1 border transition-colors cursor-pointer rounded-xs ${
                filterTheater === th.key
                  ? 'bg-[#8B252D] text-white border-[#8B252D] font-bold shadow-xs'
                  : 'bg-[#FFFEFA] text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
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
              className="p-3.5 bg-[#FFFEFA] border border-[#E8DDC8] rounded-xs shadow-xs flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-xs"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#8B252D]">
                    {item.dateStr}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#6B5E59] border border-[#E8DDC8] bg-[#FAF7F2] px-1.5 py-0.5 rounded-xs">
                    {item.theater}
                  </span>
                </div>
                <div className="font-editorial-serif text-sm font-bold text-[#2C2523]">
                  {item.title}
                </div>
                <p className="font-sans text-[#5C524E] leading-snug">
                  {item.summary}
                </p>
              </div>

              <button
                type="button"
                onClick={() => jumpToChapter(item.chapterRef)}
                className="text-[11px] uppercase tracking-wider text-[#8B252D] hover:underline cursor-pointer shrink-0 font-semibold"
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
