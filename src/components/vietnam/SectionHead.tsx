import React from 'react';

/** Every section of a chapter opens the same way: a rule in ink, then the heading. */
export default function SectionHead({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) {
  return (
    <header className="border-t border-ink pt-4">
      <h2 id={id} className="font-display text-2xl font-bold tracking-tight text-ink">
        {title}
      </h2>
      {children && <p className="mt-2 max-w-[62ch] text-base text-ink-muted">{children}</p>}
    </header>
  );
}
