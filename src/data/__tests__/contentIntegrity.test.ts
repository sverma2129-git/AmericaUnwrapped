import { describe, expect, it } from 'vitest';
import { CHAPTER_COUNT, VIETNAM_CHAPTERS, getAdjacentChapters } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { TURNING_POINTS } from '@/data/vietnam/studyGuide';

describe('chapters', () => {
  it('have unique ids and contiguous numbers starting at 1', () => {
    const ids = VIETNAM_CHAPTERS.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(VIETNAM_CHAPTERS.map((c) => c.number)).toEqual(
      Array.from({ length: CHAPTER_COUNT }, (_, i) => i + 1)
    );
  });

  it('link to adjacent chapters with no link past either end', () => {
    expect(getAdjacentChapters(VIETNAM_CHAPTERS[0]).prev).toBeUndefined();
    expect(getAdjacentChapters(VIETNAM_CHAPTERS[CHAPTER_COUNT - 1]).next).toBeUndefined();
    expect(getAdjacentChapters(VIETNAM_CHAPTERS[0]).next).toBe(VIETNAM_CHAPTERS[1]);
  });

  it('each have study data', () => {
    for (const chapter of VIETNAM_CHAPTERS) {
      expect(ALL_CHAPTERS_STUDY_DATA[chapter.id], chapter.id).toBeDefined();
      expect(ALL_CHAPTERS_STUDY_DATA[chapter.id].chapterId).toBe(chapter.id);
    }
  });
});

describe('quiz questions', () => {
  const questions = Object.values(ALL_CHAPTERS_STUDY_DATA).flatMap((c) => c.quiz);

  it('have unique ids', () => {
    const ids = questions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(questions.map((q) => [q.id, q] as const))('%s has a valid answer and citation', (_id, q) => {
    expect(q.options.length).toBeGreaterThanOrEqual(2);
    expect(q.correctIndex).toBeGreaterThanOrEqual(0);
    expect(q.correctIndex).toBeLessThan(q.options.length);
    if (q.citationRef) expect(CITATION_REGISTRY).toHaveProperty([q.citationRef]);
  });
});

describe('study guide turning points', () => {
  it('link to existing chapters', () => {
    const ids = new Set(VIETNAM_CHAPTERS.map((c) => c.id));
    for (const tp of TURNING_POINTS) expect(ids, tp.event).toContain(tp.chapterId);
  });
});
