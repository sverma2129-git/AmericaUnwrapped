'use client';

import React, { useState, useEffect } from 'react';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';

export default function ChapterNavigation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapterId, setActiveChapterId] = useState<string>(VIETNAM_CHAPTERS[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check which chapter section is in view
      for (let i = VIETNAM_CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(VIETNAM_CHAPTERS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveChapterId(VIETNAM_CHAPTERS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeChapter =
    VIETNAM_CHAPTERS.find((c) => c.id === activeChapterId) || VIETNAM_CHAPTERS[0];

  const scrollToChapter = (id: string) => {
    setIsMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Slender Reading Progress Line at Very Top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-stone-200 dark:bg-stone-800 z-50">
        <div
          className="h-full bg-stone-900 dark:bg-stone-100 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Understated Sticky Reading Bar */}
      <nav
        aria-label="Chapter Reading Progress"
        className="sticky top-0 z-30 bg-[#fbf9f5] dark:bg-[#121110] border-b border-stone-200 dark:border-stone-800 px-4 sm:px-8 py-2.5"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          {/* Active Chapter Label */}
          <div className="flex items-baseline gap-2.5 overflow-hidden">
            <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 whitespace-nowrap">
              Part {activeChapter.number.toString().padStart(2, '0')} &bull; {activeChapter.timeframe}
            </span>
            <span className="hidden sm:inline font-editorial-serif text-sm font-bold text-stone-900 dark:text-stone-100 truncate">
              {activeChapter.title}
            </span>
          </div>

          {/* Index Trigger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="font-archival-mono text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-50 cursor-pointer flex items-center gap-1.5"
          >
            <span>Table of Contents ({activeChapter.number}/12)</span>
            <span className="text-[10px]">{isMenuOpen ? '▲' : '▼'}</span>
          </button>
        </div>

        {/* Dropdown Drawer of Chapters */}
        {isMenuOpen && (
          <div className="max-w-5xl mx-auto mt-2 p-4 bg-white dark:bg-[#1a1816] border border-stone-300 dark:border-stone-700 shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-[70vh] overflow-y-auto">
            {VIETNAM_CHAPTERS.map((ch) => {
              const isCurrent = ch.id === activeChapterId;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => scrollToChapter(ch.id)}
                  className={`text-left p-3 border transition-colors cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'border-stone-900 dark:border-stone-100 bg-[#f9f7f2] dark:bg-[#161514]'
                      : 'border-stone-200 dark:border-stone-800 hover:border-stone-400'
                  }`}
                >
                  <div className="flex items-center justify-between font-archival-mono text-[11px] text-stone-500 mb-1">
                    <span>Chapter {ch.number.toString().padStart(2, '0')}</span>
                    <span>{ch.timeframe}</span>
                  </div>
                  <div className="font-editorial-serif text-sm font-bold text-stone-900 dark:text-stone-100 leading-snug">
                    {ch.title}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}
