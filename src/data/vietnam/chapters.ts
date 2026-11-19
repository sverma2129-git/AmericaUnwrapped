import { ChapterData } from '@/types/vietnam';
import chapter01 from './chapters/01-french-indochina-dien-bien-phu';
import chapter02 from './chapters/02-geneva-south-vietnam';
import chapter03 from './chapters/03-kennedy-and-diem';
import chapter04 from './chapters/04-gulf-of-tonkin';
import chapter05 from './chapters/05-americanization-attrition';
import chapter06 from './chapters/06-the-secret-war';
import chapter07 from './chapters/07-tet-offensive';
import chapter08 from './chapters/08-nixon-and-vietnamization';
import chapter09 from './chapters/09-paris-peace-accords';
import chapter10 from './chapters/10-the-collapse';
import chapter11 from './chapters/11-aftermath-1975';
import chapter12 from './chapters/12-memory-and-the-argument';

/** Each chapter lives in ./chapters/; this module orders and exposes them. */
export const VIETNAM_CHAPTERS: ChapterData[] = [
  chapter01,
  chapter02,
  chapter03,
  chapter04,
  chapter05,
  chapter06,
  chapter07,
  chapter08,
  chapter09,
  chapter10,
  chapter11,
  chapter12,
].sort((a, b) => a.number - b.number);

export const CHAPTER_COUNT = VIETNAM_CHAPTERS.length;

export function getChapter(slug: string): ChapterData | undefined {
  return VIETNAM_CHAPTERS.find((c) => c.id === slug);
}

export function getAdjacentChapters(chapter: ChapterData): {
  prev: ChapterData | undefined;
  next: ChapterData | undefined;
} {
  return {
    prev: VIETNAM_CHAPTERS.find((c) => c.number === chapter.number - 1),
    next: VIETNAM_CHAPTERS.find((c) => c.number === chapter.number + 1),
  };
}

/**
 * The unit read as a book in four parts. Each part starts at a chapter number
 * and runs until the next part begins.
 */
export const CHAPTER_PART_DEFS = [
  { title: 'Getting in', years: '1945–1963', firstChapter: 1 },
  { title: 'The American war', years: '1964–1968', firstChapter: 4 },
  { title: 'Getting out', years: '1969–1975', firstChapter: 8 },
  { title: 'Afterward', years: '1975 to today', firstChapter: 11 },
] as const;

export interface ChapterPart {
  number: number;
  title: string;
  years: string;
  chapters: ChapterData[];
}

export const CHAPTER_PARTS: ChapterPart[] = CHAPTER_PART_DEFS.map((def, i) => {
  const nextFirst = CHAPTER_PART_DEFS[i + 1]?.firstChapter ?? Infinity;
  return {
    number: i + 1,
    title: def.title,
    years: def.years,
    chapters: VIETNAM_CHAPTERS.filter((c) => c.number >= def.firstChapter && c.number < nextFirst),
  };
});

export function getChapterPart(chapter: ChapterData): ChapterPart | undefined {
  return CHAPTER_PARTS.find((p) => p.chapters.some((c) => c.id === chapter.id));
}
