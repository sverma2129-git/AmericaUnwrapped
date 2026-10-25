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
    locator: 'Chapters 3–7, pp. 65–185',
    supportsClaim: 'Examines the strategic design of Vietnamization and the "Madman Theory," demonstrating how Nixon coupled troop withdrawals with aggressive bombing escalations to force negotiations.',
    limitations: 'Focuses on White House executive decision-making and diplomatic maneuvering rather than South Vietnamese internal societal cohesion.',
    originalUrl: 'https://kansaspress.ku.edu/9780700609246/',
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
    locator: 'Chapters 1–5, pp. 15–120',
    supportsClaim: 'Presents the revisionist argument that General Creighton Abrams successfully reformed military strategy into an effective pacification and population-security framework.',
    limitations: 'A highly contested revisionist work; critics (e.g., Daddis, Birtle) argue it overstates military progress and discounts South Vietnam’s severe structural political fragilities.',
    originalUrl: 'https://www.harcourtbooks.com/',
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
    locator: 'Chapters 4–7, pp. 95–180',
    supportsClaim: 'Provides the definitive operational audit of the 1971 cross-border incursion into Laos, revealing ARVN’s severe logistical and command limitations when denied U.S. ground advisors.',
    limitations: 'Operational military monograph focused on a specific 1971 campaign rather than the full scope of the regional air war.',
    originalUrl: 'https://www.tamupress.com/book/9781623491178/a-raid-too-far/',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
};
