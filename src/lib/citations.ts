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
        label: 'Primary source',
        tone: 'primary',
        description: 'Made at the time by people involved: a document, cable, law, speech or letter.',
      };
    case 'CONTEMPORARY_REPORTING':
      return {
        label: 'News report',
        tone: 'reporting',
        description: 'Written by journalists at the time of the events it describes.',
      };
    case 'SCHOLARLY_SECONDARY_SOURCE':
    case 'academic-monograph':
      return {
        label: 'History book or study',
        tone: 'scholarly',
        description: 'Written later by a historian, journalist or researcher who studied the evidence.',
      };
    case 'LATER_HISTORICAL_ANALYSIS':
    case 'official-history':
      return {
        label: 'Later account',
        tone: 'reference',
        description: 'Written after the events by someone who took part, or by a government office looking back.',
      };
    default:
      return {
        label: 'Article or summary',
        tone: 'reference',
        description: 'A later article that sums up the history. Useful, but a step further from the evidence.',
      };
  }
}

/** What the source link opens, said plainly: a catalog record is not the original. */
export function getSourceLinkLabel(url: string): string {
  let host = '';
  try {
    host = new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'Open the source';
  }
  if (/openlibrary\.org|worldcat\.org/.test(host)) return 'Find the book in a library';
  if (/aljazeera\.com|army\.mil|history\.com|nybooks\.com|apnews\.com|cbsnews\.com/.test(host)) return 'Read the article';
  if (/nationalacademies\.org|jstor\.org/.test(host)) return 'Read the study';
  if (/\.pdf($|\?)/i.test(url)) return 'Open the PDF';
  return 'Read the original';
}
