'use client';

import React from 'react';

interface SectionNavProps {
  hasDocuments?: boolean;
}

export default function SectionNav({ hasDocuments = true }: SectionNavProps) {
  const sections = [
    { id: 'hook', label: 'Hook' },
    { id: 'interactive', label: 'Interactive Evidence' },
    { id: 'causality', label: 'Causal Chain' },
    { id: 'perspectives', label: 'Bilateral Perspectives' },
    ...(hasDocuments ? [{ id: 'documents', label: 'Primary Sources' }] : []),
    { id: 'narrative', label: 'Deep Read' },
    { id: 'bridge', label: 'Next Dilemma' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="py-2 mb-8 border-y border-stone-200 dark:border-stone-800 overflow-x-auto text-xs font-archival-mono">
      <div className="flex items-center justify-start sm:justify-center gap-1 sm:gap-2 min-w-max text-stone-500">
        <span className="uppercase text-[10px] tracking-wider text-stone-400 mr-2">Jump to:</span>
        {sections.map((s, idx) => (
          <React.Fragment key={s.id}>
            {idx > 0 && <span className="text-stone-300 dark:text-stone-700">&bull;</span>}
            <button
              onClick={() => scrollTo(s.id)}
              className="px-2 py-1 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 rounded-xs transition-colors cursor-pointer"
            >
              {s.label}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
