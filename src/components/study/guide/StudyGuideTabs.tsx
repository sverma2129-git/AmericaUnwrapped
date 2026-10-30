'use client';

import React, { useRef, useState } from 'react';

export interface StudyGuideTab {
  id: string;
  label: string;
  content: React.ReactNode;
}

/**
 * Accessible tab switcher. Inactive panels stay mounted (just hidden) so quiz
 * progress and flashcard position survive switching tabs.
 */
export default function StudyGuideTabs({ tabs }: { tabs: StudyGuideTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const offset = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!offset) return;
    e.preventDefault();
    const next = tabs[(index + offset + tabs.length) % tabs.length];
    setActiveId(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <>
      <div role="tablist" aria-label="Study guide sections" className="flex flex-wrap gap-2 text-sm border-b border-rule pb-3">
        {tabs.map((tab, index) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`px-4 py-2 rounded-full border transition-colors cursor-pointer font-medium ${
                selected
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-surface text-ink-muted border-rule hover:text-ink hover:border-rule-strong'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== activeId}
        >
          {tab.content}
        </div>
      ))}
    </>
  );
}
