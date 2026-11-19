'use client';

import React from 'react';
import type { ChapterRef } from '@/lib/study';
import type { KeyTerm, QuizQuestion } from '@/types/study';
import { StudyFocusProvider } from './guide/StudyFocus';
import PracticeQuiz from './guide/PracticeQuiz';
import FlashcardStudy from './guide/FlashcardStudy';

/**
 * The study guide's quiz and flashcards, scoped to one chapter, so practice
 * looks and works the same everywhere on the site.
 */
export function ChapterQuizBlock({ chapter, questions }: { chapter: ChapterRef; questions: QuizQuestion[] }) {
  return (
    <StudyFocusProvider chapters={[chapter]}>
      <PracticeQuiz items={questions.map((question) => ({ question, chapter }))} showChapter={false} />
    </StudyFocusProvider>
  );
}

export function ChapterFlashcardsBlock({ chapter, terms }: { chapter: ChapterRef; terms: KeyTerm[] }) {
  return (
    <StudyFocusProvider chapters={[chapter]}>
      <FlashcardStudy entries={terms.map((term) => ({ term, chapter }))} showChapter={false} />
    </StudyFocusProvider>
  );
}
