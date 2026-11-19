'use client';

import React, { createContext, useContext, useState } from 'react';
import type { ChapterRef } from '@/lib/study';

/**
 * The chapter a student has chosen to focus on. The quiz, flashcards and
 * glossary all narrow to it, so a student with a test on one topic can review
 * just that topic. null means the whole unit.
 */
interface StudyFocusValue {
  chapters: ChapterRef[];
  focus: number | null;
  setFocus: (chapterNumber: number | null) => void;
}

const StudyFocusContext = createContext<StudyFocusValue | null>(null);

export function StudyFocusProvider({ chapters, children }: { chapters: ChapterRef[]; children: React.ReactNode }) {
  const [focus, setFocus] = useState<number | null>(null);
  return <StudyFocusContext.Provider value={{ chapters, focus, setFocus }}>{children}</StudyFocusContext.Provider>;
}

export function useStudyFocus(): StudyFocusValue {
  const value = useContext(StudyFocusContext);
  if (!value) throw new Error('useStudyFocus must be used inside StudyFocusProvider');
  return value;
}

/** Keeps only the items from the focused chapter. */
export function inFocus<T extends { chapter: ChapterRef }>(items: T[], focus: number | null): T[] {
  return focus === null ? items : items.filter((i) => i.chapter.number === focus);
}

export const FOCUS_SELECT_ID = 'study-focus';

/** The chapter picker. One instance lives in the section bar. */
export function FocusSelect({ className = '' }: { className?: string }) {
  const { chapters, focus, setFocus } = useStudyFocus();
  return (
    <label className={`flex items-center gap-2 ${className}`}>
      <span className="sr-only lg:not-sr-only text-sm text-ink-muted whitespace-nowrap">Study</span>
      <select
        id={FOCUS_SELECT_ID}
        value={focus ?? ''}
        onChange={(e) => setFocus(e.target.value ? Number(e.target.value) : null)}
        className="h-9 max-w-[7.5rem] sm:max-w-[10rem] lg:max-w-[16rem] truncate rounded-sm border border-rule-strong bg-surface pl-2.5 pr-7 text-sm font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <option value="">All chapters</option>
        {chapters.map((c) => (
          <option key={c.id} value={c.number}>
            Ch. {c.number}: {c.title}
          </option>
        ))}
      </select>
    </label>
  );
}

/** Says what the focus is doing, with a way back to the whole unit. */
export function FocusNote({ shown, total, noun }: { shown: number; total: number; noun: string }) {
  const { chapters, focus, setFocus } = useStudyFocus();
  if (focus === null) return null;
  const chapter = chapters.find((c) => c.number === focus);
  return (
    <p className="text-sm text-ink-muted">
      Showing {shown} of {total} {noun}, from Chapter {focus}
      {chapter ? `, ${chapter.title}` : ''}.{' '}
      <button type="button" onClick={() => setFocus(null)} className="font-semibold text-brand underline underline-offset-2 hover:text-brand-hover cursor-pointer">
        Show all chapters
      </button>
    </p>
  );
}
