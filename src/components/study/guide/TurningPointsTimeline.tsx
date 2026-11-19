import React from 'react';
import Link from 'next/link';
import { PRESIDENCIES, TURNING_POINTS } from '@/data/vietnam/studyGuide';
import { getChapter } from '@/data/vietnam/chapters';
import { splitPresidencyName } from '@/lib/study';

/**
 * The eleven turning points on one vertical line, grouped under the
 * presidency each happened in, so the timeline reads as a progression
 * through administrations rather than a list of dates.
 */
export default function TurningPointsTimeline() {
  const groups = PRESIDENCIES.map((p) => ({
    ...p,
    ...splitPresidencyName(p.name),
    events: TURNING_POINTS.filter((tp) => tp.presidencyId === p.id),
  })).filter((g) => g.events.length > 0);

  return (
    <ol className="relative">
      {groups.map((g) => (
        <li key={g.id} id={`turning-points-${g.id}`} >
          <div className="grid grid-cols-[1fr] sm:grid-cols-[7rem_1fr] sm:gap-x-8">
            <div className="hidden sm:block text-sm tabular-nums text-ink-soft pt-1 text-right">
              {g.start}–{String(g.end).slice(2)}
            </div>
            <div className="border-l-2 border-ink pl-5 sm:pl-8 pb-4">
              <h3 className="font-display text-lg font-bold text-ink leading-snug">
                {g.name}
                <span className="sm:hidden ml-2 text-sm font-normal tabular-nums text-ink-soft">
                  {g.start}–{String(g.end).slice(2)}
                </span>
              </h3>
            </div>
          </div>

          <ol>
            {g.events.map((tp) => {
              const chapter = getChapter(tp.chapterId);
              return (
                <li key={tp.event} className="grid grid-cols-[1fr] sm:grid-cols-[7rem_1fr] sm:gap-x-8">
                  <div className="hidden sm:block pt-0.5 text-right">
                    <span className="text-sm font-semibold tabular-nums text-brand">{tp.date}</span>
                  </div>
                  <div className="relative border-l-2 border-rule pl-5 sm:pl-8 pb-8">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 ${
                        tp.highlight ? 'border-brand bg-brand' : 'border-rule-strong bg-paper'
                      }`}
                    />
                    <p className="sm:hidden text-sm font-semibold tabular-nums text-brand">{tp.date}</p>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="font-display text-base sm:text-base font-semibold text-ink leading-snug">{tp.event}</h4>
                      {tp.highlight && <span className="text-sm font-medium text-brand">Often on the test</span>}
                    </div>
                    <p className="mt-1 max-w-[62ch] font-serif text-base leading-relaxed text-ink-muted">{tp.significance}</p>
                    {chapter && (
                      <Link
                        href={`/vietnam/${chapter.id}`}
                        className="mt-2 inline-block text-sm font-semibold text-ink underline decoration-rule-strong underline-offset-4 hover:decoration-brand hover:text-brand"
                      >
                        Chapter {chapter.number}: {chapter.title}
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}
