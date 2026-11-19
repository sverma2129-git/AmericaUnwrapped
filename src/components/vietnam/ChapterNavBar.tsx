'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { getAdjacentChapters, getChapterPart } from '@/data/vietnam/chapters';
import { ChapterData } from '@/types/vietnam';

/**
 * The running head of a chapter: where you are in the book, the next and
 * previous chapters, and a thin line showing how far through the chapter you
 * have read. The full table of contents lives in the site header.
 */
export default function ChapterNavBar({ currentChapter }: { currentChapter: ChapterData }) {
  const { prev, next } = getAdjacentChapters(currentChapter);
  const part = getChapterPart(currentChapter);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav id="chapter-bar" aria-label="Chapter" className="sticky top-14 z-30 border-b border-rule bg-paper">
      <div className="mx-auto flex h-11 max-w-6xl items-center justify-between gap-4 px-4 text-sm sm:px-6 lg:px-8">
        <p className="min-w-0 truncate text-ink-muted">
          {part && <span className="hidden sm:inline">Part {part.number}, </span>}
          Chapter {currentChapter.number}
          <span className="hidden md:inline">
            : <span className="font-medium text-ink">{currentChapter.title}</span>
          </span>
        </p>
        <div className="flex shrink-0 items-center gap-5 font-medium">
          {prev && (
            <Link href={`/vietnam/${prev.id}`} className="text-ink-muted hover:text-brand" aria-label={`Previous: Chapter ${prev.number}, ${prev.title}`}>
              Previous
            </Link>
          )}
          {next ? (
            <Link href={`/vietnam/${next.id}`} className="text-ink hover:text-brand" aria-label={`Next: Chapter ${next.number}, ${next.title}`}>
              Next chapter
            </Link>
          ) : (
            <Link href="/vietnam/study-guide" className="text-brand hover:text-brand-hover">
              Study guide
            </Link>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="h-0.5 w-full">
        <div ref={barRef} className="h-full w-full origin-left bg-brand" style={{ transform: 'scaleX(0)' }} />
      </div>
    </nav>
  );
}
