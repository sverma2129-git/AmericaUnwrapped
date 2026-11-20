'use client';

import React, { useId, useState } from 'react';
import type { LookCloserEntry } from '@/data/vietnam/lookCloser';
import PhotoViewer from './PhotoViewer';

/**
 * A photo or document with numbered details. Tap a number on the image, or a
 * row in the list below it, to read what that detail shows.
 */
export default function LookCloser({ imageId, entry, priority = false }: { imageId: string; entry: LookCloserEntry; priority?: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const panelId = useId();
  const spot = active === null ? null : entry.spots[active];

  return (
    <div>
      <div className="relative">
        <PhotoViewer imageId={imageId} priority={priority} />
        {entry.spots.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setActive(active === i ? null : i)}
            aria-pressed={active === i}
            aria-controls={panelId}
            aria-label={`Detail ${i + 1}: ${s.label}`}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            className={`absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 text-sm font-bold tabular-nums shadow-[0_0_0_3px_rgba(251,248,242,0.85)] ${
              active === i ? 'border-brand bg-brand text-white' : 'border-brand bg-paper text-brand hover:bg-brand hover:text-white'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-sm bg-parchment p-4 sm:p-5">
        <p className="text-sm font-bold text-ink">Look closer</p>
        <p className="mt-0.5 text-sm text-ink-muted">{entry.prompt}</p>
        <ol className="mt-3 flex flex-wrap gap-2">
          {entry.spots.map((s, i) => (
            <li key={s.label}>
              <button
                type="button"
                onClick={() => setActive(active === i ? null : i)}
                aria-pressed={active === i}
                aria-controls={panelId}
                className={`cursor-pointer rounded-sm border px-3 py-1.5 text-sm font-medium ${
                  active === i ? 'border-brand bg-brand text-white' : 'border-rule-strong bg-surface text-ink hover:border-ink'
                }`}
              >
                <span className="tabular-nums">{i + 1}.</span> {s.label}
              </button>
            </li>
          ))}
        </ol>
        <div id={panelId} aria-live="polite" className="mt-3 min-h-[3rem]">
          {spot && <p className="max-w-[62ch] font-serif text-lg leading-snug text-ink">{spot.text}</p>}
        </div>
      </div>
    </div>
  );
}
