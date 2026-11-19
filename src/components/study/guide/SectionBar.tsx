'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FocusSelect } from './StudyFocus';

export interface SectionLink {
  id: string;
  label: string;
}

/**
 * Sticky in-page navigation under the site header. Links jump to sections
 * (so every section has a shareable #address) and the current section is
 * marked as the reader scrolls.
 */
export default function SectionBar({ sections }: { sections: SectionLink[] }) {
  const [active, setActive] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // On narrow screens the links scroll sideways; keep the current one visible.
  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!nav || !link) return;
    const left = link.offsetLeft - 16;
    const right = link.offsetLeft + link.offsetWidth - nav.clientWidth + 16;
    if (nav.scrollLeft > left) nav.scrollTo({ left });
    else if (nav.scrollLeft < right) nav.scrollTo({ left: right });
  }, [active]);

  useEffect(() => {
    const onScroll = () => {
      // The section whose top has passed a line just under the two sticky bars.
      const line = 140;
      let current: string | null = null;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  return (
    <div className="sticky top-16 z-30 -mx-4 sm:-mx-6 lg:-mx-8 border-y border-rule bg-paper/95 backdrop-blur-md">
      <div className="flex items-center gap-3 px-4 sm:px-6 lg:px-8">
        <nav ref={navRef} id="study-sections" aria-label="Study guide sections" className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none]">
          <ul className="flex gap-1 py-2">
            {sections.map((s) => {
              const current = s.id === active;
              return (
                <li key={s.id} className="shrink-0">
                  <a
                    href={`#${s.id}`}
                    aria-current={current ? 'location' : undefined}
                    className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      current ? 'bg-parchment text-ink' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <FocusSelect className="shrink-0 py-2" />
      </div>
    </div>
  );
}
