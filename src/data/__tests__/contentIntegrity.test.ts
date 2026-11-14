import { describe, expect, it } from 'vitest';
import { CHAPTER_COUNT, VIETNAM_CHAPTERS, getAdjacentChapters } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { TURNING_POINTS } from '@/data/vietnam/studyGuide';
import { isVerbatimQuotation } from '@/lib/citations';
import { fleschKincaidGrade } from '@/lib/readability';
import fs from 'fs';
import path from 'path';
import { IMAGE_REGISTRY, RIGHTS_LABEL } from '@/data/vietnam/images';

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

describe('image registry', () => {
  const dir = path.resolve(__dirname, '../../../public/images/vietnam');
  const records = Object.entries(IMAGE_REGISTRY);

  it.each(records)('%s has a file, a description and a traceable source', (key, image) => {
    expect(image.id).toBe(key);
    expect(fs.existsSync(path.join(dir, image.file)), image.file).toBe(true);
    expect(image.width).toBeGreaterThan(0);
    expect(image.height).toBeGreaterThan(0);
    expect(image.alt.length).toBeGreaterThanOrEqual(20);
    expect(image.caption.length).toBeGreaterThanOrEqual(20);
    expect(image.creator.trim()).toBeTruthy();
    expect(image.date.trim()).toBeTruthy();
    expect(image.source.trim()).toBeTruthy();
    expect(image.sourceUrl).toMatch(/^https:\/\//);
    expect(RIGHTS_LABEL[image.rights]).toBeTruthy();
  });

  it('has no image file without a registry entry', () => {
    const registered = new Set(records.map(([, image]) => image.file));
    const orphans = fs.readdirSync(dir).filter((file) => !registered.has(file));
    expect(orphans).toEqual([]);
  });

  it('is the only source of images used by chapters, flashcards and quizzes', () => {
    const used: string[] = [];
    for (const chapter of VIETNAM_CHAPTERS) {
      if (chapter.leadImageId) used.push(chapter.leadImageId);
      used.push(...(chapter.galleryImageIds ?? []));
      for (const beat of chapter.story?.beats ?? []) {
        if (beat.imageId) used.push(beat.imageId);
        if (beat.visual?.kind === 'image') used.push(beat.visual.imageId);
      }
      const study = ALL_CHAPTERS_STUDY_DATA[chapter.id];
      for (const item of [...study.quiz, ...study.flashcards, ...study.briefing.keyTerms]) {
        if (item.imageId) used.push(item.imageId);
      }
    }
    expect(used.length).toBeGreaterThan(0);
    for (const id of used) expect(IMAGE_REGISTRY[id], id).toBeDefined();
  });

  it('gives every chapter a lead image', () => {
    for (const chapter of VIETNAM_CHAPTERS) expect(chapter.leadImageId, chapter.id).toBeTruthy();
  });
});

/** Plain-wording rules from VOICE.md, checked on the short text students see first. */
const BANNED_WORDS = [
  'forensic', 'dossier', 'archival', 'ecosystem', 'imperative', 'matrix', 'anatomy',
  'calculus', 'paradigm', 'historiographical', 'high-yield', 'definitive',
  'cataclysmic', 'pivotal',
];

function shortStudyText(chapterId: string): string[] {
  const s = ALL_CHAPTERS_STUDY_DATA[chapterId];
  return [
    s.bigQuestion,
    s.whyItMatters,
    ...s.whatYouWillLearn,
    s.briefing.summary,
    ...s.briefing.examTakeaways,
    ...[...s.briefing.keyTerms, ...s.flashcards].flatMap((t) => [t.definition, t.significance, t.examTip ?? '']),
    ...s.quiz.map((q) => q.rationale),
  ];
}

describe('plain wording', () => {
  it('keeps jargon out of chapter titles, summaries and study text', () => {
    for (const chapter of VIETNAM_CHAPTERS) {
      const texts = [
        chapter.title,
        chapter.subtitle,
        chapter.summary,
        chapter.interactiveModule?.title ?? '',
        ...shortStudyText(chapter.id),
      ];
      for (const text of texts) {
        for (const word of BANNED_WORDS) {
          expect(text.toLowerCase().includes(word), `${chapter.id}: "${word}" in "${text.slice(0, 80)}"`).toBe(false);
        }
      }
    }
  });

  it('keeps the first things a student reads at grade 11 or below', () => {
    const tooHard: string[] = [];
    for (const chapter of VIETNAM_CHAPTERS) {
      const s = ALL_CHAPTERS_STUDY_DATA[chapter.id];
      const parts = {
        summary: chapter.summary,
        bigQuestion: s.bigQuestion,
        takeaways: s.briefing.examTakeaways.join(' '),
        quickSummary: s.briefing.summary,
      };
      for (const [name, text] of Object.entries(parts)) {
        const grade = fleschKincaidGrade(text);
        if (grade > 11) tooHard.push(`${chapter.id}/${name}: grade ${grade.toFixed(1)}`);
      }
    }
    expect(tooHard).toEqual([]);
  });

  it('writes chapter and module titles without ampersands or colon subtitles', () => {
    for (const chapter of VIETNAM_CHAPTERS) {
      for (const title of [chapter.title, chapter.interactiveModule?.title ?? '']) {
        expect(title.includes('&'), `${chapter.id}: ${title}`).toBe(false);
        expect(title.includes(':'), `${chapter.id}: ${title}`).toBe(false);
      }
    }
  });
});
