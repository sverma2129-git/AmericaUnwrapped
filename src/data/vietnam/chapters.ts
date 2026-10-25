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
