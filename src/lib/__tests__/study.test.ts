import { describe, expect, it } from 'vitest';
import { QUIZ_RANGES, buildGlossary, collectQuizQuestions, filterGlossary, scoreQuiz } from '@/lib/study';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { CHAPTER_COUNT, VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { KeyTerm } from '@/types/study';

describe('scoreQuiz', () => {
  it('counts correct answers against the total question count', () => {
    const answers = {
      0: { selected: 1, correct: true },
      1: { selected: 0, correct: false },
      2: { selected: 2, correct: true },
    };
    expect(scoreQuiz(answers, 4)).toEqual({ correct: 2, percent: 50 });
  });

  it('returns 0% instead of NaN for an empty quiz', () => {
    expect(scoreQuiz({}, 0)).toEqual({ correct: 0, percent: 0 });
  });
});

describe('collectQuizQuestions', () => {
  const all = collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA);

  it('includes every chapter quiz question', () => {
    const expected = Object.values(ALL_CHAPTERS_STUDY_DATA).reduce((n, c) => n + c.quiz.length, 0);
    expect(all).toHaveLength(expected);
  });

  it('quiz ranges cover every chapter exactly once', () => {
    const grouped = QUIZ_RANGES.flatMap((r) => collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA, r));
    expect(grouped.map((q) => q.id)).toEqual(all.map((q) => q.id));
    expect(QUIZ_RANGES.at(-1)?.lastChapter).toBe(CHAPTER_COUNT);
  });
});

describe('glossary', () => {
  const term = (t: string, definition = 'def', significance = 'sig'): KeyTerm => ({
    id: t.toLowerCase(),
    term: t,
    definition,
    significance,
  });

  it('de-duplicates terms across chapters', () => {
    const glossary = buildGlossary(ALL_CHAPTERS_STUDY_DATA);
    const names = glossary.map((t) => t.term);
    expect(new Set(names).size).toBe(names.length);
  });

  it('filters by term, definition, or significance (case-insensitive)', () => {
    const terms = [term('Domino Theory'), term('Tet', 'Lunar new year offensive'), term('Napalm', 'x', 'Incendiary weapon')];
    expect(filterGlossary(terms, '  ')).toBe(terms);
    expect(filterGlossary(terms, 'domino').map((t) => t.term)).toEqual(['Domino Theory']);
    expect(filterGlossary(terms, 'LUNAR').map((t) => t.term)).toEqual(['Tet']);
    expect(filterGlossary(terms, 'incendiary').map((t) => t.term)).toEqual(['Napalm']);
  });
});
