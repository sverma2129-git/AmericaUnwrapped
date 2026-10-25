'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { VIETNAM_CHAPTERS, getAdjacentChapters } from '@/data/vietnam/chapters';
import { ChapterData } from '@/types/vietnam';

interface ChapterNavBarProps {
  currentChapter: ChapterData;
}

export default function ChapterNavBar({ currentChapter }: ChapterNavBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { prev: prevChapter, next: nextChapter } = getAdjacentChapters(currentChapter);

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
        className="sticky top-16 z-30 backdrop-blur-md bg-paper/95 border-b border-rule text-ink transition-colors"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs">
          {/* Left: Previous chapter or Hub */}
          <div className="flex items-center gap-3">
            <Link
              href="/vietnam"
              className="text-ink-muted hover:text-brand transition-colors hidden sm:inline-block font-medium"
            >
              &larr; Explore History
            </Link>
            {prevChapter && (
              <Link
                href={`/vietnam/${prevChapter.id}`}
                className="flex items-center gap-1 font-semibold text-ink hover:text-brand transition-colors"
                title={`Previous: Chapter ${prevChapter.number} - ${prevChapter.title}`}
              >
                <span>&larr; Ch. {prevChapter.number.toString().padStart(2, '0')}</span>
              </Link>
            )}
          </div>

          {/* Center: Current Chapter Name & Drawer Trigger */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xs transition-colors font-semibold bg-parchment border border-rule hover:border-brand text-ink cursor-pointer"
            aria-expanded={drawerOpen}
            aria-controls="chapter-drawer"
          >
            <span className="truncate max-w-[200px] sm:max-w-md">
              Ch. {currentChapter.number.toString().padStart(2, '0')}: {currentChapter.title}
            </span>
            <span className="text-[10px] text-brand">{drawerOpen ? '▲' : '▼'}</span>
          </button>

          {/* Right: Next chapter */}
          <div className="flex items-center gap-3">
            {nextChapter ? (
              <Link
                href={`/vietnam/${nextChapter.id}`}
                className="flex items-center gap-1 font-semibold text-ink hover:text-brand transition-colors"
                title={`Next: Chapter ${nextChapter.number} - ${nextChapter.title}`}
              >
                <span>Ch. {nextChapter.number.toString().padStart(2, '0')} &rarr;</span>
              </Link>
            ) : (
              <Link
                href="/vietnam/study-guide"
                className="text-brand font-semibold hover:underline"
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
            className="bg-paper border border-rule w-full max-w-4xl max-h-[85vh] overflow-y-auto p-6 shadow-xl rounded-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-rule">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand block">
                  The Vietnam War
                </span>
                <h3 className="font-editorial-serif text-xl font-bold text-ink">
                  Select a Chapter
                </h3>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-xs px-3 py-1 border border-rule bg-parchment hover:bg-rule rounded-xs text-ink cursor-pointer"
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
                        ? 'border-brand bg-brand-tint text-brand font-semibold'
                        : 'border-rule bg-parchment hover:border-brand text-ink'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-ink-muted mb-1">
                        <span>Ch. {ch.number.toString().padStart(2, '0')} &bull; {ch.timeframe}</span>
                        {ch.isLandmark && (
                          <span className="text-brand font-bold text-[10px]">★ Turning Point</span>
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
