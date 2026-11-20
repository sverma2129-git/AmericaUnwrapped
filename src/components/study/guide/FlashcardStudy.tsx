'use client';

import React, { useMemo, useRef, useState, useSyncExternalStore } from 'react';
import type { GlossaryEntry } from '@/lib/study';
import { Thumb } from '@/components/common/Figure';
import { FocusNote, inFocus, useStudyFocus } from './StudyFocus';

const STORAGE_KEY = 'america-unwrapped:vietnam:review-terms';

// Marked terms live in localStorage, read through a tiny external store so the
// server render (no storage) and the first client render agree.
const listeners = new Set<() => void>();
let cachedRaw: string | null = null;
let cachedSet: Set<string> = new Set();

function readMarked(): Set<string> {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedSet = new Set(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
      cachedSet = new Set();
    }
  }
  return cachedSet;
}

function writeMarked(next: Set<string>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
  } catch {
    // Storage blocked (private window): keep the marks for this visit only.
    cachedRaw = JSON.stringify([...next]);
    cachedSet = next;
  }
  listeners.forEach((l) => l());
}

const EMPTY: Set<string> = new Set();
function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Flashcards for retrieval practice: see the term, recall the meaning, flip to
 * check, then sort the card into "Still learning" or "Got it". Cards marked
 * "Still learning" are kept in this browser so a student can come back to
 * just those.
 */
export default function FlashcardStudy({ entries, showChapter = true }: { entries: GlossaryEntry[]; showChapter?: boolean }) {
  const { focus } = useStudyFocus();
  const marked = useSyncExternalStore(subscribe, readMarked, () => EMPTY);
  const [onlyMarked, setOnlyMarked] = useState(false);
  const [order, setOrder] = useState<'chapter' | 'shuffled'>('chapter');
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);

  const deck = useMemo(() => {
    let cards = inFocus(entries, focus);
    if (onlyMarked) cards = cards.filter((c) => marked.has(c.term.term));
    return order === 'shuffled' ? shuffled(cards) : cards;
    // shuffleSeed re-deals the deck when "Shuffle" is pressed again.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries, focus, onlyMarked, order, shuffleSeed, onlyMarked ? marked : null]);

  // A new deck starts at the first card.
  const deckKey = `${focus}|${onlyMarked}|${order}|${shuffleSeed}`;
  const [seenDeck, setSeenDeck] = useState(deckKey);
  if (seenDeck !== deckKey) {
    setSeenDeck(deckKey);
    setIndex(0);
    setFlipped(false);
  }

  const safeIndex = Math.min(index, Math.max(deck.length - 1, 0));
  const card = deck[safeIndex];
  const markedInScope = inFocus(entries, focus).filter((c) => marked.has(c.term.term)).length;

  const go = (delta: number) => {
    if (deck.length === 0) return;
    setFlipped(false);
    setIndex((safeIndex + delta + deck.length) % deck.length);
  };

  const sort = (stillLearning: boolean) => {
    if (!card) return;
    const next = new Set(marked);
    if (stillLearning) next.add(card.term.term);
    else next.delete(card.term.term);
    writeMarked(next);
    if (onlyMarked && !stillLearning) {
      // The card leaves the review pile; stay on the same position.
      setFlipped(false);
      return;
    }
    go(1);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.target instanceof HTMLSelectElement || e.target instanceof HTMLInputElement) return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
  };

  const toggle = (active: boolean) =>
    `rounded-sm border px-3 py-2 text-sm font-semibold cursor-pointer transition-colors ${
      active ? 'border-ink bg-ink text-paper' : 'border-rule-strong bg-surface text-ink hover:border-ink'
    }`;

  return (
    <div onKeyDown={onKeyDown}>
      <FocusNote shown={inFocus(entries, focus).length} total={entries.length} noun="terms" />

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          aria-pressed={order === 'shuffled'}
          onClick={() => {
            setOrder('shuffled');
            setShuffleSeed((s) => s + 1);
          }}
          className={toggle(order === 'shuffled')}
        >
          {order === 'shuffled' ? 'Shuffle again' : 'Shuffle'}
        </button>
        {order === 'shuffled' && (
          <button type="button" onClick={() => setOrder('chapter')} className={toggle(false)}>
            Chapter order
          </button>
        )}
        <button
          type="button"
          aria-pressed={onlyMarked}
          onClick={() => setOnlyMarked((v) => !v)}
          disabled={!onlyMarked && markedInScope === 0}
          className={`${toggle(onlyMarked)} disabled:cursor-not-allowed disabled:opacity-50`}
        >
          Still learning ({markedInScope})
        </button>
      </div>

      {card ? (
        <div className="mt-6 max-w-2xl">
          <p className="flex justify-between text-sm text-ink-muted" aria-live="polite">
            <span>
              Card {safeIndex + 1} of {deck.length}
            </span>
            <span>
              {showChapter ? `Chapter ${card.chapter.number}` : ''}
              {marked.has(card.term.term) ? (showChapter ? ', still learning' : 'Still learning') : ''}
            </span>
          </p>

          <div className="mt-2 [perspective:1600px]">
            <button
              ref={cardRef}
              type="button"
              onClick={() => setFlipped((f) => !f)}
              aria-label={flipped ? `${card.term.term}. Showing the meaning. Press to see the term again.` : `${card.term.term}. Press to show the meaning.`}
              className="group block w-full text-left cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <div
                className={`grid transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] [transform-style:preserve-3d] motion-reduce:transition-none ${
                  flipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* Front: the term only, so the student has to recall the meaning */}
                <div
                  aria-hidden={flipped}
                  className="[grid-area:1/1] flex min-h-[15rem] flex-col justify-center rounded-sm border border-rule-strong bg-surface px-6 py-8 sm:px-10 [backface-visibility:hidden]"
                >
                  {card.term.imageId && (
                    <Thumb imageId={card.term.imageId} className="mb-5 h-28 w-40 rounded-sm sm:h-32 sm:w-48" />
                  )}
                  <p className="font-display text-xl sm:text-2xl font-bold leading-tight text-navy">{card.term.term}</p>
                  {card.term.phonetic && <p className="mt-2 text-sm text-ink-muted">Say it: {card.term.phonetic}</p>}
                  <p className="mt-6 text-sm text-ink-soft">Think of what it means, then tap the card or press Space.</p>
                </div>
                {/* Back: meaning, significance, exam tip */}
                <div
                  aria-hidden={!flipped}
                  className="[grid-area:1/1] flex min-h-[15rem] flex-col justify-center rounded-sm border border-brand-rule bg-surface px-6 py-7 sm:px-10 [backface-visibility:hidden] [transform:rotateY(180deg)]"
                >
                  <p className="font-display text-sm font-semibold text-brand">{card.term.term}</p>
                  <p className="mt-2 font-serif text-lg leading-relaxed text-ink">{card.term.definition}</p>
                  <p className="mt-3 font-serif text-base leading-relaxed text-ink-muted">
                    <span className="font-sans font-semibold text-ink">Why it matters. </span>
                    {card.term.significance}
                  </p>
                  {card.term.examTip && (
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      <span className="font-semibold text-brand">On the test. </span>
                      {card.term.examTip}
                    </p>
                  )}
                </div>
              </div>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button type="button" onClick={() => go(-1)} aria-label="Previous card" className="rounded-sm px-3 py-2.5 text-sm font-semibold text-ink-muted hover:text-ink cursor-pointer">
              Previous
            </button>
            <div className="ml-auto flex flex-wrap items-center gap-2">
              {flipped ? (
                <>
                  <button type="button" onClick={() => sort(true)} className="rounded-sm border border-rule-strong bg-surface px-4 py-2.5 text-sm font-semibold text-ink hover:border-ink cursor-pointer">
                    Still learning
                  </button>
                  <button type="button" onClick={() => sort(false)} className="rounded-sm bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover cursor-pointer">
                    Got it
                  </button>
                </>
              ) : (
                <>
                  <button type="button" onClick={() => go(1)} className="rounded-sm px-3 py-2.5 text-sm font-semibold text-ink-muted hover:text-ink cursor-pointer">
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFlipped(true);
                      cardRef.current?.focus();
                    }}
                    className="rounded-sm bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover cursor-pointer"
                  >
                    Show the meaning
                  </button>
                </>
              )}
            </div>
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            Keys: Space flips the card, left and right arrows move. Cards you mark “Still learning” are saved in this browser only.
          </p>
        </div>
      ) : (
        <div className="mt-6 max-w-2xl rounded-sm border border-dashed border-rule-strong px-6 py-10">
          <p className="font-display font-semibold text-ink">No cards marked “Still learning” here.</p>
          <p className="mt-1 text-ink-muted">Flip a card and choose “Still learning” to save it for review.</p>
          <button type="button" onClick={() => setOnlyMarked(false)} className="mt-4 text-sm font-semibold text-brand underline underline-offset-2 cursor-pointer">
            Show all cards
          </button>
        </div>
      )}
    </div>
  );
}
