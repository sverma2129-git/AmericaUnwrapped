'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { VIETNAM_CHAPTERS, getAdjacentChapters } from '@/data/vietnam/chapters';
import { ChapterData } from '@/types/vietnam';
import Icon from '@/components/common/Icon';

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
        aria-label="Chapters"
        className="sticky top-16 z-30 backdrop-blur-md bg-paper/95 border-b border-rule text-ink transition-colors"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between gap-3 text-sm">
          {/* Left: Previous chapter or Hub */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/vietnam"
              className="text-ink-muted hover:text-brand transition-colors hidden sm:inline-block font-medium"
            >
              All chapters
            </Link>
            {prevChapter && (
              <Link
                href={`/vietnam/${prevChapter.id}`}
                className="flex shrink-0 items-center gap-1 whitespace-nowrap font-semibold text-ink hover:text-brand transition-colors"
                title={`Previous: Chapter ${prevChapter.number} - ${prevChapter.title}`}
              >
                <Icon name="chevronLeft" className="w-3.5 h-3.5" />
                <span>Ch. {prevChapter.number}</span>
              </Link>
            )}
          </div>

          {/* Center: Current Chapter Name & Drawer Trigger */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="flex min-w-0 items-center gap-2 rounded-md px-3 py-1.5 font-semibold text-ink hover:bg-parchment cursor-pointer"
            aria-expanded={drawerOpen}
            aria-controls="chapter-drawer"
          >
            <span className="truncate max-w-[11rem] sm:max-w-md">
              Chapter {currentChapter.number}: {currentChapter.title}
            </span>
            <Icon name={drawerOpen ? 'chevronUp' : 'chevronDown'} className="w-3.5 h-3.5 text-ink-muted" />
          </button>

          {/* Right: Next chapter */}
          <div className="flex shrink-0 items-center gap-3">
            {nextChapter ? (
              <Link
                href={`/vietnam/${nextChapter.id}`}
                className="flex shrink-0 items-center gap-1 whitespace-nowrap font-semibold text-ink hover:text-brand transition-colors"
                title={`Next: Chapter ${nextChapter.number} - ${nextChapter.title}`}
              >
                <span>Ch. {nextChapter.number}</span>
                <Icon name="chevronRight" className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <Link
                href="/vietnam/study-guide"
                className="text-brand font-semibold hover:underline"
              >
                Study guide
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Chapter Selection Drawer */}
      {drawerOpen && (
        <div
          id="chapter-drawer"
          className="fixed inset-0 z-50 bg-ink/30 flex items-start justify-center pt-20 p-4"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="chapter-drawer-title"
            className="bg-paper w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-xl rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-rule">
              <div>
                <h3 id="chapter-drawer-title" className="font-display text-xl font-bold text-ink">
                  Choose a chapter
                </h3>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="rounded-md px-3 py-1.5 text-sm font-semibold text-ink-muted hover:bg-parchment hover:text-ink cursor-pointer"
              >
                Close
              </button>
            </div>

            <ol className="divide-y divide-rule">
              {VIETNAM_CHAPTERS.map((ch) => {
                const isCurrent = ch.id === currentChapter.id;
                return (
                  <li key={ch.id}>
                    <Link
                      href={`/vietnam/${ch.id}`}
                      onClick={() => setDrawerOpen(false)}
                      aria-current={isCurrent ? 'page' : undefined}
                      className={`grid grid-cols-[2rem_minmax(0,1fr)_auto] items-baseline gap-3 rounded-md px-2 py-3 hover:bg-parchment ${isCurrent ? 'text-brand' : 'text-ink'}`}
                    >
                      <span className="text-sm tabular-nums text-ink-soft">{ch.number}</span>
                      <span className="font-display font-semibold leading-snug">
                        {ch.title}
                        {isCurrent && <span className="ml-2 text-sm font-normal text-ink-muted">You are here</span>}
                      </span>
                      <span className="text-sm tabular-nums text-ink-soft">{ch.timeframe}</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      )}
    </>
  );
}
