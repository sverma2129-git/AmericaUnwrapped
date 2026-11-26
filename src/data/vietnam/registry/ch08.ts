import { ChapterCitation, SourceRegistryEntry } from '@/types/vietnam';

// Chapter 8 entries, aggregated into SOURCE_REGISTRY / CITATION_REGISTRY by ../sourceRegistry.ts

export const sources: SourceRegistryEntry[] = [];

export const citations: Record<string, ChapterCitation> = {
  'c8-1': {
    id: 'c8-1',
    marker: 1,
    citation: 'Kimball, Jeffrey. Nixon’s Vietnam War. University Press of Kansas, 1998.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'Jeffrey Kimball',
    title: 'Nixon’s Vietnam War',
    date: '1998',
    publicationOrArchive: 'University Press of Kansas',
    supportsClaim: 'Explains Nixon’s plan for Vietnamization and his madman theory: pulling troops out while bombing harder, to push Hanoi into a deal.',
    limitations: 'About decisions in the White House, not what was happening inside South Vietnam.',
    originalUrl: 'https://openlibrary.org/works/OL1882273W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c8-2': {
    id: 'c8-2',
    marker: 2,
    citation: 'Sorley, Lewis. A Better War: The Unexamined Victories and Final Tragedy of America’s Last Years in Vietnam. Harcourt, 1999.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'Lewis Sorley',
    title: 'A Better War: The Unexamined Victories and Final Tragedy of America’s Last Years in Vietnam',
    date: '1999',
    publicationOrArchive: 'Harcourt, Inc.',
    supportsClaim: 'Argues that General Creighton Abrams changed the way the war was fought and was making the countryside safer.',
    limitations: 'Many historians disagree. They say Sorley overstates the progress and plays down how weak South Vietnam’s government was.',
    originalUrl: 'https://openlibrary.org/works/OL111810W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c8-3': {
    id: 'c8-3',
    marker: 3,
    citation: 'Willbanks, James H. A Raid Too Far: Operation Lam Son 719 and Vietnamization in Laos. Texas A&M University Press, 2014.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'James H. Willbanks',
    title: 'A Raid Too Far: Operation Lam Son 719 and Vietnamization in Laos',
    date: '2014',
    publicationOrArchive: 'Texas A&M University Press',
    supportsClaim: 'A detailed study of Lam Son 719, the 1971 push into Laos, showing how South Vietnam’s army struggled without American advisers beside it.',
    limitations: 'About one operation in 1971, not the whole air war.',
    originalUrl: 'https://openlibrary.org/works/OL23301241W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
};
