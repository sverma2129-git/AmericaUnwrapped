'use client';

import React, { useMemo, useState } from 'react';
import { matchesTerm, type GlossaryEntry } from '@/lib/study';
import { FocusNote, inFocus, useStudyFocus } from './StudyFocus';

/**
 * A lookup list, not a reading list: terms grouped by chapter, each with its
 * one-line meaning visible and the significance and exam tip one tap away.
 */
export default function Glossary({ entries }: { entries: GlossaryEntry[] }) {
  const { focus } = useStudyFocus();
  const [query, setQuery] = useState('');

  const scoped = useMemo(() => inFocus(entries, focus), [entries, focus]);
  const searching = query.trim().length > 0;
  // While searching, terms whose name matches come before terms that only mention the word.
  const results = useMemo(() => {
    const hits = scoped.filter((e) => matchesTerm(e.term, query));
    if (!searching) return hits;
    const q = query.trim().toLowerCase();
    const named = (e: GlossaryEntry) => (e.term.term.toLowerCase().includes(q) ? 0 : 1);
    return [...hits].sort((x, y) => named(x) - named(y));
  }, [scoped, query, searching]);
  const groups = useMemo(() => {
    const map = new Map<number, { chapter: GlossaryEntry['chapter'] | null; items: GlossaryEntry[] }>();
    if (searching) return [{ chapter: null, items: results }];
    for (const e of results) {
      const g = map.get(e.chapter.number) ?? { chapter: e.chapter, items: [] };
      g.items.push(e);
      map.set(e.chapter.number, g);
    }
    return [...map.values()];
  }, [results, searching]);

  return (
    <div>
      <FocusNote shown={scoped.length} total={entries.length} noun="terms" />

      <div className="mt-4 flex flex-wrap items-end gap-x-6 gap-y-2">
        <label className="block w-full max-w-md">
          <span className="block text-sm font-semibold text-ink">Find a term</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try Tonkin, Tet or Nixon"
            className="mt-1.5 h-11 w-full rounded-sm border border-rule-strong bg-surface px-3.5 text-base text-ink placeholder:text-ink-soft focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand"
          />
        </label>
        <p className="pb-2.5 text-sm text-ink-muted" aria-live="polite">
          {query.trim() ? `${results.length} of ${scoped.length} terms match` : `${scoped.length} terms`}
        </p>
      </div>

      {results.length === 0 ? (
        <div className="mt-6 py-4">
          <p className="font-display font-semibold text-ink">No terms match “{query.trim()}”.</p>
          <p className="mt-1 text-ink-muted">
            Check the spelling or try a shorter word{focus !== null ? ', or switch to all 12 chapters' : ''}.
          </p>
          <button type="button" onClick={() => setQuery('')} className="mt-3 text-sm font-semibold text-brand underline underline-offset-2 cursor-pointer">
            Clear the search
          </button>
        </div>
      ) : (
        <div className="mt-6 space-y-2">
          {groups.map(({ chapter, items }) => {
            const list = (
              <dl className="space-y-1">
                {items.map(({ term, chapter: from }) => (
                  <div key={term.term} className="grid gap-x-8 gap-y-1 py-4 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
                    <dt className="font-display font-semibold leading-snug text-ink">
                      {term.term}
                      {!chapter && <span className="block text-sm font-normal text-ink-muted">Chapter {from.number}</span>}
                    </dt>
                    <dd>
                      <p className="max-w-[66ch] font-serif text-base leading-relaxed text-ink">{term.definition}</p>
                      <details className="group mt-1.5">
                        <summary className="inline-flex min-h-6 py-0.5 cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-brand [&::-webkit-details-marker]:hidden">
                          <span aria-hidden="true" className="transition-transform group-open:rotate-90 motion-reduce:transition-none">›</span>
                          {term.examTip ? 'Why it matters and test tip' : 'Why it matters'}
                        </summary>
                        <div className="mt-2 max-w-[66ch] space-y-2 rounded-sm bg-parchment p-4">
                          <p className="font-serif text-base leading-relaxed text-ink-muted">{term.significance}</p>
                          {term.examTip && (
                            <p className="text-sm leading-relaxed text-ink-muted">
                              <span className="font-semibold text-brand">On the test. </span>
                              {term.examTip}
                            </p>
                          )}
                        </div>
                      </details>
                    </dd>
                  </div>
                ))}
              </dl>
            );
            if (!chapter) {
              return (
                <section key="results" aria-label="Search results">
                  {list}
                </section>
              );
            }
            return (
              <details key={chapter.id} open={groups.length === 1} className="group rounded-sm bg-parchment">
                <summary className="flex cursor-pointer list-none items-baseline gap-3 px-5 py-4 hover:text-brand [&::-webkit-details-marker]:hidden">
                  <span className="text-sm tabular-nums text-ink-muted">Ch. {chapter.number}</span>
                  <span className="min-w-0 flex-1 font-display text-lg font-bold text-ink group-hover:text-brand">{chapter.title}</span>
                  <span className="shrink-0 text-sm text-ink-muted">{items.length} terms</span>
                </summary>
                <div className="rounded-b-sm bg-surface px-5 pb-2">{list}</div>
              </details>
            );
          })}
        </div>
      )}
    </div>
  );
}
