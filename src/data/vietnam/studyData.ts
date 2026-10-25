import { ChapterStudyData } from '@/types/study';
import { DIEN_BIEN_PHU_STUDY_DATA } from './study/01-french-indochina-dien-bien-phu';
import { GENEVA_STUDY_DATA } from './study/02-geneva-south-vietnam';
import { KENNEDY_DIEM_STUDY_DATA } from './study/03-kennedy-and-diem';
import { TONKIN_STUDY_DATA } from './study/04-gulf-of-tonkin';
import { ATTRITION_STUDY_DATA } from './study/05-americanization-attrition';
import { SECRET_WAR_STUDY_DATA } from './study/06-the-secret-war';
import { TET_OFFENSIVE_STUDY_DATA } from './study/07-tet-offensive';
import { VIETNAMIZATION_STUDY_DATA } from './study/08-nixon-and-vietnamization';
import { PARIS_ACCORDS_STUDY_DATA } from './study/09-paris-peace-accords';
import { THE_COLLAPSE_STUDY_DATA } from './study/10-the-collapse';
import { AFTERMATH_STUDY_DATA } from './study/11-aftermath-1975';
import { MEMORY_ARGUMENT_STUDY_DATA } from './study/12-memory-and-the-argument';

/** Per-chapter study data lives in ./study/; this module aggregates it. */
export {
  DIEN_BIEN_PHU_STUDY_DATA,
  GENEVA_STUDY_DATA,
  KENNEDY_DIEM_STUDY_DATA,
  TONKIN_STUDY_DATA,
  ATTRITION_STUDY_DATA,
  SECRET_WAR_STUDY_DATA,
  TET_OFFENSIVE_STUDY_DATA,
  VIETNAMIZATION_STUDY_DATA,
  PARIS_ACCORDS_STUDY_DATA,
  THE_COLLAPSE_STUDY_DATA,
  AFTERMATH_STUDY_DATA,
  MEMORY_ARGUMENT_STUDY_DATA,
};

// ─── MASTER REGISTRY OF ALL 12 CHAPTERS ──────────────────────────────────────
export const ALL_CHAPTERS_STUDY_DATA: Record<string, ChapterStudyData> = {
  'french-indochina-dien-bien-phu': DIEN_BIEN_PHU_STUDY_DATA,
  'geneva-south-vietnam': GENEVA_STUDY_DATA,
  'kennedy-and-diem': KENNEDY_DIEM_STUDY_DATA,
  'gulf-of-tonkin': TONKIN_STUDY_DATA,
  'americanization-attrition': ATTRITION_STUDY_DATA,
  'the-secret-war': SECRET_WAR_STUDY_DATA,
  'tet-offensive': TET_OFFENSIVE_STUDY_DATA,
  'nixon-and-vietnamization': VIETNAMIZATION_STUDY_DATA,
  'paris-peace-accords': PARIS_ACCORDS_STUDY_DATA,
  'the-collapse': THE_COLLAPSE_STUDY_DATA,
  'aftermath-1975': AFTERMATH_STUDY_DATA,
  'memory-and-the-argument': MEMORY_ARGUMENT_STUDY_DATA,
};

export const STUDY_DATA_REGISTRY: Record<string, ChapterStudyData> = ALL_CHAPTERS_STUDY_DATA;
