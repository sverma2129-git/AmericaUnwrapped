import React from 'react';

/** A section heading with an optional one-line lede. Space, not rules, separates sections. */
export default function SectionHead({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) {
  return (
    <header>
      <h2 id={id} className="font-display text-2xl font-extrabold tracking-tight text-navy">
        {title}
      </h2>
      {children && <p className="mt-2 max-w-[62ch] text-base text-ink-muted">{children}</p>}
    </header>
  );
}
