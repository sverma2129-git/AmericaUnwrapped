import { ChapterCitation, SourceRegistryEntry } from '@/types/vietnam';

// Chapter 10 entries, aggregated into SOURCE_REGISTRY / CITATION_REGISTRY by ../sourceRegistry.ts

// ─── CHAPTER 10: THE 1975 COLLAPSE ──────────────────────────────────────────
export const sources: SourceRegistryEntry[] = [
  {
    id: 'Q016',
    chapter: 10,
    type: 'claim',
    verificationCategory: 'VERIFIED_PARAPHRASE',
    text: 'In Black April, military historian George J. Veith documents how North Vietnamese armored units rammed through the iron gates of Saigon’s Presidential Palace at 11:30 a.m. on April 30, 1975, capturing President Duong Van Minh and concluding the military collapse of the Republic of Vietnam.',
    source: 'Black April: The Fall of South Vietnam, 1973–1975',
    authorOrCreator: 'George J. Veith',
    institution: 'Encounter Books / Historical Monograph',
    date: '2012',
    sourceUrl: 'https://www.encounterbooks.com/books/black-april/',
    locator: 'Encounter Books, 2012, Chapter 19, pp. 488–492',
    locatorStatus: 'supported',
    verified: true,
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    supportsClaim: 'Describes the last days of the Ho Chi Minh Campaign and South Vietnam’s surrender on April 30, 1975.',
    limitations: 'This is our summary of Veith’s account, not his exact words.',
    conversionStatus: 'converted_to_paraphrase',
    notes: 'Historical narrative verified against Veith (2012). Quotation marks permanently removed.',
  },
];

export const citations: Record<string, ChapterCitation> = {
  'c10-1': {
    id: 'c10-1',
    marker: 1,
    citation: 'Veith, George J. Black April: The Fall of South Vietnam, 1973–1975. Encounter Books, 2012.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'George J. Veith',
    title: 'Black April: The Fall of South Vietnam, 1973–1975',
    date: '2012',
    publicationOrArchive: 'Encounter Books',
    supportsClaim: 'Tells how South Vietnam fell in 55 days: aid cuts, shortages of fuel and ammunition, and the retreat from the Central Highlands.',
    limitations: 'Veith is sympathetic to South Vietnam’s army. He argues it could have held out with more American aid and air support.',
    originalUrl: 'https://openlibrary.org/works/OL15901784W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c10-2': {
    id: 'c10-2',
    marker: 2,
    citation: 'Dung, Van Tien. Our Great Spring Victory: An Account of the Liberation of South Vietnam. Monthly Review Press, 1977.',
    sourceType: 'LATER_HISTORICAL_ANALYSIS',
    authorOrInstitution: 'General Van Tien Dung',
    title: 'Our Great Spring Victory: An Account of the Liberation of South Vietnam',
    date: '1977',
    publicationOrArchive: 'Monthly Review Press (English translation)',
    supportsClaim: 'The memoir of General Van Tien Dung, North Vietnam’s army chief of staff, on how he planned the 1975 offensive and the capture of Saigon.',
    limitations: 'Written by the winning general to celebrate the victory. It plays down South Vietnamese resistance and disagreements among his own commanders.',
    originalUrl: 'https://openlibrary.org/works/OL9281873W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c10-3': {
    id: 'c10-3',
    marker: 3,
    citation: 'Snepp, Frank. Decent Interval: An Insider’s Account of Saigon’s Indecent End. Random House, 1977.',
    sourceType: 'LATER_HISTORICAL_ANALYSIS',
    authorOrInstitution: 'Frank Snepp',
    title: 'Decent Interval: An Insider’s Account of Saigon’s Indecent End',
    date: '1977',
    publicationOrArchive: 'Random House',
    supportsClaim: 'Frank Snepp, a CIA analyst in Saigon, describes officials who ignored the warning signs, and how many Vietnamese who had worked with the Americans were left behind.',
    limitations: 'A personal memoir by an angry insider. The CIA took him to court for publishing it without its approval.',
    originalUrl: 'https://openlibrary.org/works/OL4149633W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
};
