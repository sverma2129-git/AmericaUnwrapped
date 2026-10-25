'use client';

import React, { useMemo, useState } from 'react';
import FlashcardDeck from '@/components/study/FlashcardDeck';
import { filterGlossary } from '@/lib/study';
import { KeyTerm } from '@/types/study';

export default function GlossaryPanel({ terms }: { terms: KeyTerm[] }) {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => filterGlossary(terms, search), [terms, search]);

  return (
    <section aria-label="Flashcards and Glossary" className="space-y-12">
      {/* Interactive Card Deck */}
      <div>
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
            Interactive Vocabulary Deck
          </span>
          <h2 className="font-editorial-serif text-2xl font-bold text-ink">
            Flip Cards: High-Yield Terms ({terms.length} Total)
          </h2>
        </div>
        <FlashcardDeck cards={terms} title="Unit Key Terms & Concepts" />
      </div>

      {/* Master Searchable Glossary */}
      <div className="space-y-4 pt-8 border-t border-rule">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <h3 className="font-editorial-serif text-2xl font-bold text-ink">Searchable Unit Glossary</h3>
            <p className="font-sans text-xs text-ink-muted mt-0.5">
              Complete alphabetical index with definitions, historical significance, and exam tips.
            </p>
          </div>

          <input
            type="search"
            aria-label="Search glossary"
            placeholder="Search vocabulary or concept..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3.5 py-2 text-xs border border-rule bg-white text-ink rounded-xs w-full sm:w-72 focus:outline-hidden focus:border-brand"
          />
        </div>

        <p className="sr-only" aria-live="polite">
          {filtered.length} of {terms.length} terms shown
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="p-4 bg-parchment border border-rule rounded-xs space-y-2">
              <div className="flex items-baseline justify-between gap-2 border-b border-rule pb-1.5">
                <span className="font-editorial-serif font-bold text-base text-ink">{item.term}</span>
                {item.phonetic && (
                  <span className="font-mono text-xs text-brand italic">[{item.phonetic}]</span>
                )}
              </div>
              <p className="font-sans text-xs text-ink leading-relaxed">
                <strong>Definition:</strong> {item.definition}
              </p>
              {item.significance && (
                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                  <strong>Significance:</strong> {item.significance}
                </p>
              )}
              {item.examTip && (
                <div className="pt-1 text-xs text-brand">
                  💡 <strong>Exam Tip:</strong> {item.examTip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
