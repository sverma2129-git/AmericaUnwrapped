import { ChapterCitation, SourceRegistryEntry } from '@/types/vietnam';

// Chapter 6 entries, aggregated into SOURCE_REGISTRY / CITATION_REGISTRY by ../sourceRegistry.ts

export const sources: SourceRegistryEntry[] = [];

export const citations: Record<string, ChapterCitation> = {
  'c6-1': {
    id: 'c6-1',
    marker: 1,
    citation: 'Pike, Douglas. Viet Cong: The Organization and Techniques of the National Liberation Front of South Vietnam. MIT Press, 1966.',
    sourceType: 'SCHOLARLY_SECONDARY_SOURCE',
    authorOrInstitution: 'Douglas Pike',
    title: 'Viet Cong: The Organization and Techniques of the National Liberation Front of South Vietnam',
    date: '1966',
    publicationOrArchive: 'MIT Press',
    locator: 'Chapters 4–7, pp. 74–140',
    supportsClaim: 'Analyzes the organizational structure, clandestine administrative shadow government, and recruitment mechanisms of the National Liberation Front (NLF).',
    limitations: 'Written by a U.S. government intelligence and information analyst during the active conflict.',
    originalUrl: 'https://mitpress.mit.edu/',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c6-2': {
    id: 'c6-2',
    marker: 2,
    citation: 'Buckingham, William A. The Air Force and Herbicides in Southeast Asia, 1961–1971. Office of Air Force History, 1982.',
    sourceType: 'LATER_HISTORICAL_ANALYSIS',
    authorOrInstitution: 'William A. Buckingham',
    title: 'The Air Force and Herbicides in Southeast Asia, 1961–1971',
    date: '1982',
    publicationOrArchive: 'Office of Air Force History, U.S. Air Force',
    locator: 'Chapters 3–6, pp. 45–130',
    supportsClaim: 'Documents the official operational history and tactical rationale of Operation Ranch Hand defoliant spraying across South Vietnam.',
    limitations: 'Official military history focusing on aerial operations rather than subsequent long-term environmental and human toxicological consequences.',
    originalUrl: 'https://www.airforcehistory.af.mil/',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
  'c6-3': {
    id: 'c6-3',
    marker: 3,
    citation: 'U.S. Congress, House Committee on Government Operations. U.S. Assistance Programs in Vietnam (Hearings on the Phoenix Program). 92nd Cong., 1st sess., 1971.',
    sourceType: 'PRIMARY_SOURCE',
    authorOrInstitution: 'House Committee on Government Operations',
    title: 'U.S. Assistance Programs in Vietnam (Hearings on the Phoenix Program)',
    date: 'July 1971',
    publicationOrArchive: 'U.S. Government Printing Office, 92nd Congress',
    locator: 'Hearings Transcript, pp. 150–240 (Testimony of William Colby)',
    supportsClaim: 'Contains sworn congressional testimony regarding the scope, operational procedures, and abuses of the Phoenix Program / Phung Hoang targeting of communist cadres.',
    limitations: 'Congressional investigative hearings; contains contested claims regarding civilian collateral casualties and intelligence vetting reliability.',
    originalUrl: 'https://www.congress.gov/',
    verificationCategory: 'VERIFIED_PARAPHRASE',
  },
};
