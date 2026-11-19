'use client';

import React from 'react';
import { FOCUS_SELECT_ID } from './StudyFocus';

interface Counts {
  chapters: number;
  turningPoints: number;
  terms: number;
  questions: number;
  essays: number;
}

/**
 * Entry points by what the student came to do. Nobody has to start at the top:
 * each row jumps straight to the part of the page that fits.
 */
export default function StartHere({ counts }: { counts: Counts }) {
  const rows: { need: string; what: string; href?: string; action?: () => void }[] = [
    {
      need: 'Learn the whole war',
      what: `The presidents, then ${counts.turningPoints} turning points in order`,
      href: '#presidents',
    },
    {
      need: 'Review one topic for a test',
      what: 'Pick its chapter. The flashcards, quiz and glossary narrow to it.',
      action: () => {
        const select = document.getElementById(FOCUS_SELECT_ID) as HTMLSelectElement | null;
        select?.focus();
        try {
          select?.showPicker?.();
        } catch {
          // showPicker needs a user gesture in some browsers; focus is enough.
        }
      },
    },
    { need: 'Memorize the vocabulary', what: `${counts.terms} flashcards you can shuffle and sort`, href: '#flashcards' },
    {
      need: 'Practice for the test',
      what: `${counts.questions} questions with explanations, and ${counts.essays} essay prompts`,
      href: '#quiz',
    },
    { need: 'Look something up', what: 'Search every term in the unit', href: '#glossary' },
  ];

  const link =
    'font-display font-semibold text-ink underline decoration-rule-strong underline-offset-4 hover:text-brand hover:decoration-brand cursor-pointer text-left';

  return (
    <div className="mt-10">
      <h2 className="font-display text-lg font-bold text-ink">Where do you want to start?</h2>
      <ul className="mt-3 divide-y divide-rule border-y border-rule">
        {rows.map((r) => (
          <li key={r.need} className="grid gap-x-6 gap-y-0.5 py-3 sm:grid-cols-[13rem_minmax(0,1fr)] sm:items-baseline">
            {r.href ? (
              <a href={r.href} className={link}>
                {r.need}
              </a>
            ) : (
              <button type="button" onClick={r.action} className={link}>
                {r.need}
              </button>
            )}
            <span className="text-sm text-ink-muted">{r.what}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
