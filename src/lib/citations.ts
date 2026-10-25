import { ChapterCitation, SourceClassificationType, VerificationCategory } from '@/types/vietnam';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';

export const CANONICAL_SOURCE_TYPES: ReadonlySet<string> = new Set<SourceClassificationType>([
  'PRIMARY_SOURCE',
  'CONTEMPORARY_REPORTING',
  'SCHOLARLY_SECONDARY_SOURCE',
  'LATER_HISTORICAL_ANALYSIS',
  'REFERENCE_SOURCE',
]);

export const CANONICAL_VERIFICATION_CATEGORIES: ReadonlySet<string> = new Set<VerificationCategory>([
  'VERIFIED_QUOTATION',
  'VERIFIED_PARAPHRASE',
  'UNVERIFIABLE',
]);

export interface SourceTypeBadge {
  label: string;
  tone: 'primary' | 'reporting' | 'scholarly' | 'reference';
  description: string;
}

/** Looks up a citation by id, returning null when it is not registered. */
export function resolveCitation(id: string): ChapterCitation | null {
  return CITATION_REGISTRY[id] ?? null;
}

/**
 * A citation may only be rendered as a verbatim quotation when it is explicitly
 * categorised as a verified quotation AND carries the exact source text.
 * Never fall back to the bibliographic `citation` string.
 */
export function isVerbatimQuotation(citation: ChapterCitation): boolean {
  return (
    citation.verificationCategory === 'VERIFIED_QUOTATION' &&
    Boolean(citation.exactQuotation?.trim())
  );
}

export function getSourceTypeBadge(type?: ChapterCitation['sourceType']): SourceTypeBadge {
  switch (type) {
    case 'PRIMARY_SOURCE':
    case 'archival':
    case 'declassified':
      return {
        label: 'Primary Archival Source',
        tone: 'primary',
        description: 'Contemporary government cable, resolution, treaty, or declassified record.',
      };
    case 'CONTEMPORARY_REPORTING':
      return {
        label: 'Contemporary Reporting',
        tone: 'reporting',
        description: 'Journalistic dispatch, broadcast news, or wire filed during the war.',
      };
    case 'SCHOLARLY_SECONDARY_SOURCE':
    case 'academic-monograph':
      return {
        label: 'Scholarly Secondary Source',
        tone: 'scholarly',
        description: 'Peer-reviewed academic monograph, university press publication, or archival study.',
      };
    default:
      return {
        label: 'Historical Reference',
        tone: 'reference',
        description: 'Historical monograph, official documentation, or archive.',
      };
  }
}
