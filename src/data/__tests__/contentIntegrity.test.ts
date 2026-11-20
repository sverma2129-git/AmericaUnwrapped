import { describe, expect, it } from 'vitest';
import { CHAPTER_COUNT, CHAPTER_PARTS, VIETNAM_CHAPTERS, getAdjacentChapters } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { TURNING_POINTS } from '@/data/vietnam/studyGuide';
import { isVerbatimQuotation } from '@/lib/citations';
import { fleschKincaidGrade } from '@/lib/readability';
import fs from 'fs';
import path from 'path';
import { IMAGE_REGISTRY, RIGHTS_LABEL } from '@/data/vietnam/images';
import { LOOK_CLOSER } from '@/data/vietnam/lookCloser';

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

describe('look closer details', () => {
  it('point at registered images, inside the frame, with real text', () => {
    for (const [imageId, entry] of Object.entries(LOOK_CLOSER)) {
      expect(IMAGE_REGISTRY[imageId], imageId).toBeTruthy();
      expect(entry.spots.length, imageId).toBeGreaterThanOrEqual(2);
      for (const spot of entry.spots) {
        expect(spot.x, `${imageId}: ${spot.label}`).toBeGreaterThan(0);
        expect(spot.x, `${imageId}: ${spot.label}`).toBeLessThan(100);
        expect(spot.y, `${imageId}: ${spot.label}`).toBeGreaterThan(0);
        expect(spot.y, `${imageId}: ${spot.label}`).toBeLessThan(100);
        expect(spot.text.length, `${imageId}: ${spot.label}`).toBeGreaterThan(30);
        expect(/[“”"]/.test(spot.text), `${imageId}: no quotation marks`).toBe(false);
      }
    }
  });
});

describe('editorial design rules', () => {
  it('puts every chapter in exactly one part, in order', () => {
    const ids = CHAPTER_PARTS.flatMap((p) => p.chapters.map((c) => c.id));
    expect(ids).toEqual(VIETNAM_CHAPTERS.map((c) => c.id));
    for (const part of CHAPTER_PARTS) expect(part.chapters.length, part.title).toBeGreaterThan(0);
  });

  it('shows a featured document only for a verified verbatim quotation', () => {
    for (const chapter of VIETNAM_CHAPTERS) {
      const doc = chapter.featuredDocument;
      if (!doc) continue;
      const citation = CITATION_REGISTRY[doc.citationId];
      expect(citation && isVerbatimQuotation(citation), `${chapter.id}: ${doc.citationId}`).toBe(true);
      expect(doc.header.length, chapter.id).toBeGreaterThan(0);
      if (doc.afterBeatId) expect(chapter.story?.beats.some((b) => b.id === doc.afterBeatId), chapter.id).toBe(true);
    }
  });

  it('gives every story paragraph its own heading when a chapter has headings', () => {
    for (const chapter of VIETNAM_CHAPTERS) {
      const sections = chapter.whatHappened.sections;
      if (!sections) continue;
      expect(sections.length, chapter.id).toBe(chapter.whatHappened.narrative.length);
      for (const s of sections) expect(s.heading.length, chapter.id).toBeGreaterThan(5);
    }
  });

  it('keeps the story text free of raw markdown and em dashes', () => {
    for (const chapter of VIETNAM_CHAPTERS) {
      for (const p of chapter.whatHappened.narrative) {
        expect(p.includes('**'), chapter.id).toBe(false);
        if (chapter.layout !== 'layered') expect(p.includes('—'), `${chapter.id}: ${p.slice(0, 60)}`).toBe(false);
        // Italics are written *like this*: the asterisks must pair up.
        expect((p.match(/\*/g) ?? []).length % 2, chapter.id).toBe(0);
      }
    }
  });

  it('puts quotation marks only around words from a verified verbatim quotation', () => {
    // The About page promises this. Names and terms go without quotation marks;
    // titles inside bibliographic citation strings are exempt.
    const verified = Object.values(CITATION_REGISTRY)
      .filter(isVerbatimQuotation)
      .map((c) => c.exactQuotation as string);
    const dataDir = path.resolve(__dirname, '../vietnam');
    const files = [
      ...fs.readdirSync(path.join(dataDir, 'chapters')).map((f) => path.join(dataDir, 'chapters', f)),
      ...fs.readdirSync(path.join(dataDir, 'study')).map((f) => path.join(dataDir, 'study', f)),
      path.join(dataDir, 'studyGuide.ts'),
      path.join(dataDir, 'timeline.ts'),
      path.join(dataDir, 'arguments.ts'),
    ];
    const unverified: string[] = [];
    for (const file of files) {
      for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
        if (line.includes('citation:') || line.includes('exactQuotation')) continue;
        for (const m of line.matchAll(/[“"]([^“”"\n]{1,400}?)[”"]/g)) {
          const inner = m[1].replace(/^[\s,.!?]+|[\s,.!?]+$/g, '');
          if (!verified.some((v) => v.includes(inner))) unverified.push(`${path.basename(file)}: ${m[0].slice(0, 60)}`);
        }
      }
    }
    expect(unverified).toEqual([]);
  });

  it('uses no HTML entities or straight quotes in chapter text', () => {
    for (const chapter of VIETNAM_CHAPTERS) {
      const text = JSON.stringify(chapter);
      expect(/&[a-z]+;/.test(text), chapter.id).toBe(false);
    }
  });

  it('sets type only from the scale: no arbitrary font sizes in components', () => {
    const root = path.resolve(__dirname, '../..');
    const files: string[] = [];
    const walk = (dir: string) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (full.endsWith('.tsx')) files.push(full);
      }
    };
    walk(path.join(root, 'app'));
    walk(path.join(root, 'components'));
    for (const file of files) {
      const source = fs.readFileSync(file, 'utf8');
      // SVG map labels scale with their viewBox, so px sizes inside <text> are allowed.
      const offenders: string[] = [...(source.match(/text-\[[0-9.]+rem\]/g) ?? []), ...(source.match(/text-[4-9]xl/g) ?? [])];
      expect(offenders, path.relative(root, file)).toEqual([]);
    }
  });
});
