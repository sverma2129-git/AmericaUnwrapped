'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { ChapterData } from '@/types/vietnam';

interface ChapterNavBarProps {
  currentChapter: ChapterData;
}

export default function ChapterNavBar({ currentChapter }: ChapterNavBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const prevChapter =
    currentChapter.number > 1
      ? VIETNAM_CHAPTERS.find((c) => c.number === currentChapter.number - 1)
      : null;

  const nextChapter =
    currentChapter.number < 12
      ? VIETNAM_CHAPTERS.find((c) => c.number === currentChapter.number + 1)
      : null;

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <nav
        aria-label="Chapter Reading Bar"
        className="sticky top-16 z-30 backdrop-blur-md bg-[#FFFEFA]/95 border-b border-[#E8DDC8] text-[#2C2523] transition-colors"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs">
          {/* Left: Previous chapter or Hub */}
          <div className="flex items-center gap-3">
            <Link
              href="/vietnam"
              className="text-[#5C524E] hover:text-[#8B252D] transition-colors hidden sm:inline-block font-medium"
            >
              &larr; Explore History
            </Link>
            {prevChapter && (
              <Link
                href={`/vietnam/${prevChapter.id}`}
                className="flex items-center gap-1 font-semibold text-[#2C2523] hover:text-[#8B252D] transition-colors"
                title={`Previous: Chapter ${prevChapter.number} - ${prevChapter.title}`}
              >
                <span>&larr; Ch. {prevChapter.number.toString().padStart(2, '0')}</span>
              </Link>
            )}
          </div>

          {/* Center: Current Chapter Name & Drawer Trigger */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xs transition-colors font-semibold bg-[#FAF7F2] border border-[#E8DDC8] hover:border-[#8B252D] text-[#2C2523] cursor-pointer"
            aria-expanded={drawerOpen}
            aria-controls="chapter-drawer"
          >
            <span className="truncate max-w-[200px] sm:max-w-md">
              Ch. {currentChapter.number.toString().padStart(2, '0')}: {currentChapter.title}
            </span>
            <span className="text-[10px] text-[#8B252D]">{drawerOpen ? '▲' : '▼'}</span>
          </button>

          {/* Right: Next chapter */}
          <div className="flex items-center gap-3">
            {nextChapter ? (
              <Link
                href={`/vietnam/${nextChapter.id}`}
                className="flex items-center gap-1 font-semibold text-[#2C2523] hover:text-[#8B252D] transition-colors"
                title={`Next: Chapter ${nextChapter.number} - ${nextChapter.title}`}
              >
                <span>Ch. {nextChapter.number.toString().padStart(2, '0')} &rarr;</span>
              </Link>
            ) : (
              <Link
                href="/vietnam/study-guide"
                className="text-[#8B252D] font-semibold hover:underline"
              >
                Study Guide &rarr;
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Chapter Selection Drawer */}
      {drawerOpen && (
        <div
          id="chapter-drawer"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-20 p-4"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="bg-[#FFFEFA] border border-[#E8DDC8] w-full max-w-4xl max-h-[85vh] overflow-y-auto p-6 shadow-xl rounded-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8DDC8]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                  The Vietnam War
                </span>
                <h3 className="font-editorial-serif text-xl font-bold text-[#2C2523]">
                  Select a Chapter
                </h3>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-xs px-3 py-1 border border-[#E8DDC8] bg-[#FAF7F2] hover:bg-[#E8DDC8] rounded-xs text-[#2C2523] cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {VIETNAM_CHAPTERS.map((ch) => {
                const isCurrent = ch.id === currentChapter.id;
                return (
                  <Link
                    key={ch.id}
                    href={`/vietnam/${ch.id}`}
                    onClick={() => setDrawerOpen(false)}
                    className={`p-3.5 border transition-all rounded-xs flex flex-col justify-between ${
                      isCurrent
                        ? 'border-[#8B252D] bg-[#FDF3F3] text-[#8B252D] font-semibold'
                        : 'border-[#E8DDC8] bg-[#FAF7F2] hover:border-[#8B252D] text-[#2C2523]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#5C524E] mb-1">
                        <span>Ch. {ch.number.toString().padStart(2, '0')} &bull; {ch.timeframe}</span>
                        {ch.isLandmark && (
                          <span className="text-[#8B252D] font-bold text-[10px]">★ Turning Point</span>
                        )}
                      </div>
                      <div className="font-editorial-serif text-sm leading-snug line-clamp-2">
                        {ch.title}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
