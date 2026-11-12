import { describe, expect, it } from 'vitest';
import { CHAPTER_COUNT, VIETNAM_CHAPTERS, getAdjacentChapters } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { TURNING_POINTS } from '@/data/vietnam/studyGuide';
import { isVerbatimQuotation } from '@/lib/citations';
import { fleschKincaidGrade } from '@/lib/readability';

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

  it('quote personal stories only from verified verbatim quotations', () => {
    for (const chapter of VIETNAM_CHAPTERS) {
      const id = chapter.personalStory?.quoteCitationId;
      if (!id) continue;
      const citation = CITATION_REGISTRY[id];
      expect(citation, `${chapter.id}: ${id}`).toBeDefined();
      expect(isVerbatimQuotation(citation), `${chapter.id}: ${id}`).toBe(true);
    }
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

describe('layered chapter stories', () => {
  const layered = VIETNAM_CHAPTERS.filter((c) => c.layout === 'layered');
  const markers = (text: string) => [...text.matchAll(/\[\^([a-zA-Z0-9_-]+)\]/g)].map((m) => m[1]);

  it('exist for every chapter set to the layered layout', () => {
    for (const chapter of layered) {
      expect(chapter.story?.beats.length, chapter.id).toBeGreaterThan(0);
    }
  });

  it('cite only registered sources', () => {
    for (const chapter of layered) {
      const story = chapter.story!;
      // Every inline marker anywhere in the story (beats, steps, tables, debate, tasks).
      const ids = markers(JSON.stringify(story));
      for (const beat of story.beats) {
        const v = beat.visual;
        if (v && 'citationId' in v) ids.push(v.citationId);
      }
      for (const id of ids) expect(CITATION_REGISTRY[id], `${chapter.id}: ${id}`).toBeDefined();
    }
  });

  it('quote only verified verbatim quotations', () => {
    for (const chapter of layered) {
      const story = chapter.story!;
      const quoted: string[] = [...(story.evidence ?? [])];
      for (const beat of story.beats) {
        if (beat.visual?.kind === 'quote') quoted.push(beat.visual.citationId);
        if (beat.visual?.kind === 'night') {
          for (const step of beat.visual.steps) if (step.quoteCitationId) quoted.push(step.quoteCitationId);
        }
      }
      for (const task of [...(story.tasks?.ah1 ?? []), ...(story.tasks?.apush ?? [])]) {
        if (task.kind === 'stimulus' || task.kind === 'saq') quoted.push(task.citationId);
      }
      for (const id of quoted) {
        const citation = CITATION_REGISTRY[id];
        expect(citation && isVerbatimQuotation(citation), `${chapter.id}: ${id}`).toBe(true);
      }
    }
  });

  it('give every course the same kinds of support', () => {
    for (const chapter of layered) {
      const { tasks, objectives } = chapter.story!;
      if (!tasks && !objectives) continue;
      for (const course of ['ah1', 'apush'] as const) {
        expect(tasks?.[course].length, `${chapter.id} ${course} tasks`).toBeGreaterThan(0);
        expect(objectives?.[course].length, `${chapter.id} ${course} objectives`).toBeGreaterThan(0);
      }
    }
  });

  it('check students with questions from the chapter quiz', () => {
    for (const chapter of layered) {
      const quizIds = new Set(ALL_CHAPTERS_STUDY_DATA[chapter.id].quiz.map((q) => q.id));
      for (const beat of chapter.story!.beats) {
        if (beat.checkId) expect(quizIds.has(beat.checkId), `${chapter.id}/${beat.id}: ${beat.checkId}`).toBe(true);
      }
    }
  });
});

describe('landmark quotes', () => {
  it('cite a verified verbatim quotation whose text matches exactly', () => {
    for (const chapter of VIETNAM_CHAPTERS) {
      const moment = chapter.landmarkMoment;
      if (!moment?.quoteCitationId) continue;
      const citation = CITATION_REGISTRY[moment.quoteCitationId];
      expect(citation && isVerbatimQuotation(citation), `${chapter.id}: ${moment.quoteCitationId}`).toBe(true);
      expect(moment.quote, chapter.id).toBe(citation.exactQuotation);
    }
  });
});

describe('quiz answer patterns', () => {
  const questions = VIETNAM_CHAPTERS.flatMap((c) => ALL_CHAPTERS_STUDY_DATA[c.id].quiz);

  it('have four distinct options and a valid answer', () => {
    for (const q of questions) {
      expect(q.options.length, q.id).toBe(4);
      expect(new Set(q.options).size, q.id).toBe(4);
      expect(q.correctIndex, q.id).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex, q.id).toBeLessThan(q.options.length);
    }
  });

  it('do not favor one answer position', () => {
    const counts = [0, 0, 0, 0];
    for (const q of questions) counts[q.correctIndex]++;
    for (const n of counts) expect(n / questions.length).toBeLessThanOrEqual(0.35);
  });

  it('rarely make the correct answer the longest option', () => {
    const longest = questions.filter((q) => {
      const others = q.options.filter((_, i) => i !== q.correctIndex).map((o) => o.length);
      return q.options[q.correctIndex].length > Math.max(...others);
    });
    expect(longest.length / questions.length).toBeLessThanOrEqual(0.25);
  });
});

describe('layered story reading level', () => {
  // Core text targets grades 9-10 (Flesch-Kincaid is approximate, so the limits leave a margin).
  const storyText = (beat: { body: string[]; visual?: unknown }) => {
    const steps = (beat.visual as { steps?: { body: string }[] } | undefined)?.steps ?? [];
    return [...beat.body, ...steps.map((s) => s.body)];
  };

  it('stays at a high-school reading level', () => {
    for (const chapter of VIETNAM_CHAPTERS.filter((c) => c.layout === 'layered')) {
      const beats = chapter.story!.beats;
      expect(fleschKincaidGrade(beats.flatMap(storyText).join(' ')), chapter.id).toBeLessThanOrEqual(10.5);
      for (const beat of beats) {
        expect(fleschKincaidGrade(storyText(beat).join(' ')), `${chapter.id}/${beat.id}`).toBeLessThanOrEqual(12);
      }
    }
  });
});
