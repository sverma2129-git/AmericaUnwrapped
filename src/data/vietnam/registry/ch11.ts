import { ChapterCitation, SourceRegistryEntry } from '@/types/vietnam';

// Chapter 11 entries, aggregated into SOURCE_REGISTRY / CITATION_REGISTRY by ../sourceRegistry.ts

// ─── CHAPTER 11: CASUALTIES & RECONCILIATION ────────────────────────────────
export const sources: SourceRegistryEntry[] = [
  {
    id: 'Q011',
    chapter: 11,
    type: 'claim',
    verificationCategory: 'VERIFIED_PARAPHRASE',
    text: 'On April 4, 1995, an Associated Press wire reported that the Vietnamese government had officially released its comprehensive war casualty figures, disclosing that 1.1 million North Vietnamese and Viet Cong combatants died, 600,000 were wounded, and approximately 2 million civilians died on both sides during the 1954–1975 war.',
    source: 'Associated Press Wire: "Vietnam Releases First Official War Casualty Figures"',
    authorOrCreator: 'Associated Press Wire Service',
    institution: 'The Associated Press (Hanoi Bureau)',
    date: 'April 4, 1995',
    sourceUrl: 'https://apnews.com/',
    locator: 'The Virginian-Pilot / AP Wire Archive, April 4, 1995',
    locatorStatus: 'supported',
    verified: true,
    sourceType: 'CONTEMPORARY_REPORTING',
    supportsClaim: 'A 1995 news report on the war death figures Vietnam’s government released twenty years after the war ended.',
    limitations: 'These are the government’s own numbers, released long after the war. We describe the report in our own words.',
    conversionStatus: 'converted_to_paraphrase',
    notes: 'Casualty figures verified against AP dispatch of April 4, 1995. Quotation marks removed.',
  },
];

export const citations: Record<string, ChapterCitation> = {
  'c11-1': {
    id: 'c11-1',
    marker: 1,
    citation: 'Robinson, W. Courtland. Terms of Refuge: The Indochinese Exodus and the International Response. Zed Books, 1998.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'W. Courtland Robinson',
    title: 'Terms of Refuge: The Indochinese Exodus and the International Response',
    date: '1998',
    publicationOrArchive: 'Zed Books / UNHCR Study',
    supportsClaim: 'A study of the refugees who fled Vietnam, Laos and Cambodia after 1975, including the boat people.',
    limitations: 'About refugee camps and resettlement in other countries, not life inside Vietnam.',
    originalUrl: 'https://openlibrary.org/works/OL1915581W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c11-2': {
    id: 'c11-2',
    marker: 2,
    citation: 'Hirschman, Charles, et al. "Vietnamese Casualties During the American War: A New Estimate." Population and Development Review, 1995.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'Charles Hirschman, Samuel Preston, and Vu Manh Loi',
    title: 'Vietnamese Casualties During the American War: A New Estimate',
    date: '1995',
    publicationOrArchive: 'Population and Development Review, Vol. 21, No. 4',
    locator: 'Vol. 21, No. 4, pp. 783–812',
    supportsClaim: 'A study that estimates about one million Vietnamese died in the war from 1965 to 1975, soldiers and civilians together.',
    limitations: 'An estimate built from surveys and population data, not a count of each death.',
    originalUrl: 'https://www.jstor.org/stable/2137774',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c11-3': {
    id: 'c11-3',
    marker: 3,
    citation: 'Evans, Grant, and Kelvin Rowley. Red Brotherhood at War: Vietnam, Cambodia and Laos since 1975. Verso, 1990.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'Grant Evans and Kelvin Rowley',
    title: 'Red Brotherhood at War: Vietnam, Cambodia and Laos since 1975',
    date: '1990',
    publicationOrArchive: 'Verso Books (Revised Edition)',
    supportsClaim: 'Covers the wars between communist countries after 1975: Vietnam’s invasion of Cambodia to remove the Khmer Rouge, and China’s attack on Vietnam.',
    limitations: 'About the conflicts between countries, not life or healing inside Vietnam.',
    originalUrl: 'https://openlibrary.org/works/OL1662186W',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
};
