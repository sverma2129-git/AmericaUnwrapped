import { ChapterCitation, SourceRegistryEntry } from '@/types/vietnam';

// Chapter 12 entries, aggregated into SOURCE_REGISTRY / CITATION_REGISTRY by ../sourceRegistry.ts

export const sources: SourceRegistryEntry[] = [];

export const citations: Record<string, ChapterCitation> = {
  'c12-1': {
    id: 'c12-1',
    marker: 1,
    citation: 'Halberstam, David. The Best and the Brightest. Random House, 1972.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'David Halberstam',
    title: 'The Best and the Brightest',
    date: '1972',
    publicationOrArchive: 'Random House',
    supportsClaim: 'The founding book of the orthodox view. It argues that confident, clever officials under Kennedy and Johnson led the country into the war.',
    limitations: 'A reporter wrote it in 1972, before the White House tapes and foreign records were opened.',
    originalUrl: 'https://openlibrary.org/works/OL109599W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c12-2': {
    id: 'c12-2',
    marker: 2,
    citation: 'Summers, Harry G. On Strategy: A Critical Analysis of the Vietnam War. Presidio Press, 1982.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'Colonel Harry G. Summers Jr.',
    title: 'On Strategy: A Critical Analysis of the Vietnam War',
    date: '1982',
    publicationOrArchive: 'Presidio Press / U.S. Army War College',
    supportsClaim: 'A revisionist argument by an Army colonel: the United States should have fought North Vietnam as a regular war instead of chasing guerrillas in the South.',
    limitations: 'Later historians say he underrated how strong the southern rebellion was, and the risk of a war with China.',
    originalUrl: 'https://openlibrary.org/works/OL2931119W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c12-3': {
    id: 'c12-3',
    marker: 3,
    citation: 'Logevall, Fredrik. Choosing War: The Lost Chance for Peace and the Escalation of War in Vietnam. University of California Press, 1999.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'Fredrik Logevall',
    title: 'Choosing War: The Lost Chance for Peace and the Escalation of War in Vietnam',
    date: '1999',
    publicationOrArchive: 'University of California Press',
    supportsClaim: 'Argues that the war was not inevitable. Between 1963 and 1965, leaders chose war partly because they feared looking weak at home.',
    limitations: 'About choices made by presidents and diplomats, not the momentum of the fighting.',
    originalUrl: 'https://openlibrary.org/works/OL6211304W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c12-4': {
    id: 'c12-4',
    marker: 4,
    citation: 'Nguyen, Lien-Hang T. Hanoi’s War: An International History of the War for Peace in Vietnam. University of North Carolina Press, 2012.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'Lien-Hang T. Nguyen',
    title: 'Hanoi’s War: An International History of the War for Peace in Vietnam',
    date: '2012',
    publicationOrArchive: 'University of North Carolina Press',
    supportsClaim: 'Uses Vietnamese records to show that Hanoi’s leaders were not just following Moscow or Beijing. They made their own war plans and played the big powers against each other.',
    limitations: 'About North Vietnam’s leaders and diplomacy, not American public opinion.',
    originalUrl: 'https://openlibrary.org/works/OL16416536W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
};
