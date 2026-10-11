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

  const isTonkin = currentChapter.id === 'gulf-of-tonkin';

  return (
    <>
      <nav
        aria-label="Chapter Reading Bar"
        className={`sticky top-0 z-40 backdrop-blur-md transition-colors ${
          isTonkin
            ? 'bg-[#060a12]/95 border-b border-stone-800 text-stone-200'
            : 'bg-[#fbf9f5]/95 dark:bg-[#121110]/95 border-b border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs font-archival-mono">
          {/* Left: Previous chapter or Hub */}
          <div className="flex items-center gap-3">
            <Link
              href="/vietnam"
              className={`transition-colors hidden sm:inline-block ${
                isTonkin
                  ? 'text-stone-400 hover:text-stone-100'
                  : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
              }`}
            >
              &larr; Overview
            </Link>
            {prevChapter && (
              <Link
                href={`/vietnam/${prevChapter.id}`}
                className={`flex items-center gap-1 font-bold transition-colors ${
                  isTonkin
                    ? 'text-stone-300 hover:text-white'
                    : 'text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white'
                }`}
                title={`Previous: Chapter ${prevChapter.number} - ${prevChapter.title}`}
              >
                <span>&larr; Ch. {prevChapter.number.toString().padStart(2, '0')}</span>
              </Link>
            )}
          </div>

          {/* Center: Current Chapter Name & Drawer Trigger */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`flex items-center gap-2 px-3 py-1 rounded-sm transition-colors font-bold ${
              isTonkin
                ? 'bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-800'
                : 'bg-stone-200/60 dark:bg-stone-800/60 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100'
            }`}
            aria-expanded={drawerOpen}
            aria-controls="chapter-drawer"
          >
            <span className="truncate max-w-[200px] sm:max-w-md">
              Ch. {currentChapter.number.toString().padStart(2, '0')}: {currentChapter.title}
            </span>
            <span className="text-[10px] text-stone-500">{drawerOpen ? '▲' : '▼'}</span>
          </button>

          {/* Right: Next chapter */}
          <div className="flex items-center gap-3">
            {nextChapter ? (
              <Link
                href={`/vietnam/${nextChapter.id}`}
                className={`flex items-center gap-1 font-bold transition-colors ${
                  isTonkin
                    ? 'text-stone-300 hover:text-white'
                    : 'text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white'
                }`}
                title={`Next: Chapter ${nextChapter.number} - ${nextChapter.title}`}
              >
                <span>Ch. {nextChapter.number.toString().padStart(2, '0')} &rarr;</span>
              </Link>
            ) : (
              <span className="text-stone-400 dark:text-stone-600">Final Chapter</span>
            )}
          </div>
        </div>
      </nav>

      {/* Chapter Selection Drawer */}
      {drawerOpen && (
        <div
          id="chapter-drawer"
          className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-xs flex items-start justify-center pt-14 p-4"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="bg-[#fbf9f5] dark:bg-[#161514] border border-stone-300 dark:border-stone-800 w-full max-w-4xl max-h-[85vh] overflow-y-auto p-6 shadow-xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200 dark:border-stone-800">
              <div>
                <span className="font-archival-mono text-[11px] uppercase tracking-widest text-stone-500 block">
                  Vietnam: 1945–1975
                </span>
                <h3 className="font-editorial-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                  Select an Analytical Chapter
                </h3>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="font-archival-mono text-xs px-2.5 py-1 border border-stone-300 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-sm text-stone-700 dark:text-stone-300"
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
                        ? 'border-stone-950 dark:border-stone-100 bg-stone-200/50 dark:bg-stone-800/80 font-semibold'
                        : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-[#121110] hover:border-stone-400 dark:hover:border-stone-600'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-archival-mono text-stone-500 mb-1">
                        <span>{ch.number.toString().padStart(2, '0')} · {ch.timeframe}</span>
                        {ch.isLandmark && (
                          <span className="text-amber-700 dark:text-amber-400 font-bold">★ Landmark</span>
                        )}
                      </div>
                      <div className="font-editorial-serif text-sm text-stone-900 dark:text-stone-100 leading-snug line-clamp-2">
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
