import { ChapterStudyData, KeyTerm, QuizQuestion } from '@/types/study';
import { ChapterData } from '@/types/vietnam';

export interface QuizAnswer {
  selected: number;
  correct: boolean;
}

export interface QuizRange {
  id: string;
  label: string;
  firstChapter: number;
  lastChapter: number;
}

/** Thematic groupings used by the master practice quiz filter. */
export const QUIZ_RANGES: QuizRange[] = [
  { id: 'early', label: 'Ch. 1–4: Origins & Tonkin', firstChapter: 1, lastChapter: 4 },
  { id: 'escalation', label: 'Ch. 5–8: Escalation & Tet', firstChapter: 5, lastChapter: 8 },
  { id: 'collapse', label: 'Ch. 9–12: Withdrawal & Legacy', firstChapter: 9, lastChapter: 12 },
];

export function scoreQuiz(answers: Record<number, QuizAnswer>, totalQuestions: number) {
  const correct = Object.values(answers).filter((a) => a.correct).length;
  const percent = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;
  return { correct, percent };
}

/** Quiz questions in chapter order, optionally limited to an inclusive chapter-number range. */
export function collectQuizQuestions(
  chapters: ChapterData[],
  studyData: Record<string, ChapterStudyData>,
  range?: Pick<QuizRange, 'firstChapter' | 'lastChapter'>
): QuizQuestion[] {
  return chapters
    .filter((c) => !range || (c.number >= range.firstChapter && c.number <= range.lastChapter))
    .flatMap((c) => studyData[c.id]?.quiz ?? []);
}

/** Flashcards plus briefing key terms across all chapters, de-duplicated by term (first wins). */
export function buildGlossary(studyData: Record<string, ChapterStudyData>): KeyTerm[] {
  const byTerm = new Map<string, KeyTerm>();
  for (const chapter of Object.values(studyData)) {
    for (const term of [...chapter.flashcards, ...chapter.briefing.keyTerms]) {
      if (!byTerm.has(term.term)) byTerm.set(term.term, term);
    }
  }
  return Array.from(byTerm.values());
}

export function filterGlossary(terms: KeyTerm[], query: string): KeyTerm[] {
  const q = query.trim().toLowerCase();
  if (!q) return terms;
  return terms.filter(
    (t) =>
      t.term.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q) ||
      t.significance?.toLowerCase().includes(q)
  );
}
