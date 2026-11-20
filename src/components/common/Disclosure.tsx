import React from 'react';

/**
 * A fold-out row: a title and one line of description, opened on demand.
 * Used for material most readers skip but some want, such as sources.
 */
export default function Disclosure({ title, detail, children }: { title: string; detail?: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-sm bg-surface open:bg-surface">
      <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 hover:text-brand [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="block font-display text-lg font-bold text-navy group-hover:text-brand">{title}</span>
          {detail && <span className="mt-0.5 block text-sm text-ink-muted">{detail}</span>}
        </span>
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-open:rotate-180 motion-reduce:transition-none">
          <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      </summary>
      <div className="px-5 pb-6 pt-1">{children}</div>
    </details>
  );
}
