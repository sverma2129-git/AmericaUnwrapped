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
  { id: 'early', label: 'Ch. 1–4: How it started', firstChapter: 1, lastChapter: 4 },
  { id: 'escalation', label: 'Ch. 5–8: The American war', firstChapter: 5, lastChapter: 8 },
  { id: 'collapse', label: 'Ch. 9–12: The way out', firstChapter: 9, lastChapter: 12 },
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

/** The chapter a study item comes from, for labels, filters and links. */
export interface ChapterRef {
  id: string;
  number: number;
  title: string;
}

export interface QuizItem {
  question: QuizQuestion;
  chapter: ChapterRef;
}

export interface GlossaryEntry {
  term: KeyTerm;
  chapter: ChapterRef;
}

function chapterRef(c: ChapterData): ChapterRef {
  return { id: c.id, number: c.number, title: c.title };
}

/** Every quiz question in chapter order, with the chapter it belongs to. */
export function collectQuizItems(chapters: ChapterData[], studyData: Record<string, ChapterStudyData>): QuizItem[] {
  return chapters.flatMap((c) => (studyData[c.id]?.quiz ?? []).map((question) => ({ question, chapter: chapterRef(c) })));
}

/**
 * The same de-duplicated term list as buildGlossary, in chapter order, with the
 * chapter where each term first appears.
 */
export function buildGlossaryEntries(chapters: ChapterData[], studyData: Record<string, ChapterStudyData>): GlossaryEntry[] {
  const seen = new Set<string>();
  const entries: GlossaryEntry[] = [];
  for (const c of chapters) {
    const data = studyData[c.id];
    if (!data) continue;
    for (const term of [...data.flashcards, ...data.briefing.keyTerms]) {
      if (seen.has(term.term)) continue;
      seen.add(term.term);
      entries.push({ term, chapter: chapterRef(c) });
    }
  }
  return entries;
}

/** Search a term's name, definition, significance and exam tip. */
export function matchesTerm(term: KeyTerm, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [term.term, term.definition, term.significance, term.examTip ?? ''].some((t) => t.toLowerCase().includes(q));
}

/** "Harry Truman and Dwight Eisenhower (1945–1961)" → name and years. */
export function splitPresidencyName(full: string): { name: string; start: number; end: number } {
  const m = full.match(/^(.*?)\s*\((\d{4})\D+(\d{4})\)\s*$/);
  if (!m) return { name: full, start: 0, end: 0 };
  return { name: m[1], start: Number(m[2]), end: Number(m[3]) };
}
