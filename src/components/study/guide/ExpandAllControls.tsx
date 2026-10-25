'use client';

import React from 'react';

interface ExpandAllControlsProps {
  /** id of the element containing the <details> sections to toggle. */
  targetId: string;
}

const buttonClass =
  'px-2.5 py-1 bg-white hover:bg-parchment-light border border-rule text-ink-muted rounded-xs font-semibold cursor-pointer transition-colors';

export default function ExpandAllControls({ targetId }: ExpandAllControlsProps) {
  const setAll = (open: boolean) => {
    document
      .getElementById(targetId)
      ?.querySelectorAll('details')
      .forEach((details) => {
        details.open = open;
      });
  };

  return (
    <div className="flex items-center gap-2 text-xs">
      <button type="button" onClick={() => setAll(true)} aria-controls={targetId} className={buttonClass}>
        Expand All
      </button>
      <button type="button" onClick={() => setAll(false)} aria-controls={targetId} className={buttonClass}>
        Collapse All
      </button>
    </div>
  );
}
