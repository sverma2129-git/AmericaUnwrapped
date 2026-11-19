import { describe, expect, it } from 'vitest';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { PRESIDENCIES, TURNING_POINTS } from '@/data/vietnam/studyGuide';
import {
  buildGlossary,
  buildGlossaryEntries,
  collectQuizItems,
  collectQuizQuestions,
  matchesTerm,
  splitPresidencyName,
} from '@/lib/study';

describe('study guide helpers', () => {
  it('keep every quiz question, in the same order, with its chapter', () => {
    const items = collectQuizItems(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA);
    expect(items.map((i) => i.question)).toEqual(collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA));
    for (const item of items) {
      expect(ALL_CHAPTERS_STUDY_DATA[item.chapter.id].quiz).toContain(item.question);
    }
  });

  it('keep every glossary term exactly once', () => {
    const entries = buildGlossaryEntries(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA);
    const terms = entries.map((e) => e.term.term);
    expect(new Set(terms).size).toBe(terms.length);
    expect(new Set(terms)).toEqual(new Set(buildGlossary(ALL_CHAPTERS_STUDY_DATA).map((t) => t.term)));
  });

  it('search the term, definition, significance and exam tip', () => {
    const term = { id: 'x', term: 'Domino Theory', definition: 'An idea', significance: 'Used by presidents', examTip: 'Pair with Eisenhower' };
    expect(matchesTerm(term, 'domino')).toBe(true);
    expect(matchesTerm(term, 'eisenhower')).toBe(true);
    expect(matchesTerm(term, '  ')).toBe(true);
    expect(matchesTerm(term, 'tonkin')).toBe(false);
  });

  it('read a name and years from every presidency', () => {
    for (const p of PRESIDENCIES) {
      const { name, start, end } = splitPresidencyName(p.name);
      expect(name.length, p.name).toBeGreaterThan(3);
      expect(end, p.name).toBeGreaterThanOrEqual(start);
      expect(start, p.name).toBeGreaterThanOrEqual(1945);
    }
  });

  it('place every turning point under a presidency', () => {
    const ids = new Set(PRESIDENCIES.map((p) => p.id));
    for (const tp of TURNING_POINTS) expect(ids.has(tp.presidencyId), tp.event).toBe(true);
  });
});
