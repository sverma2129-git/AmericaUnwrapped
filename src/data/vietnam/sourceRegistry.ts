import { ChapterCitation, SourceRegistryEntry } from '@/types/vietnam';
import * as ch01 from './registry/ch01';
import * as ch02 from './registry/ch02';
import * as ch03 from './registry/ch03';
import * as ch04 from './registry/ch04';
import * as ch05 from './registry/ch05';
import * as ch06 from './registry/ch06';
import * as ch07 from './registry/ch07';
import * as ch08 from './registry/ch08';
import * as ch09 from './registry/ch09';
import * as ch10 from './registry/ch10';
import * as ch11 from './registry/ch11';
import * as ch12 from './registry/ch12';
import { quoteAliases } from './registry/quoteAliases';

/**
 * ==============================================================================
 * CENTRAL HISTORICAL SOURCE & CITATION REGISTRY
 * America Unwrapped · Digital History Publication
 * 
 * ABSOLUTE RULE: Never present a paraphrase as a primary-source quotation.
 * If the exact wording has not been supplied from a verified archival source,
 * it MUST NOT appear inside quotation marks.
 * 
 * Every entry strictly classifies:
 * 1. Verification Category (VERIFIED_QUOTATION / VERIFIED_PARAPHRASE / UNVERIFIABLE)
 * 2. Source Classification (PRIMARY_SOURCE / CONTEMPORARY_REPORTING /
 *    SCHOLARLY_SECONDARY_SOURCE / LATER_HISTORICAL_ANALYSIS / REFERENCE_SOURCE)
 * 3. The 4-Stage Reader Journey:
 *    CLAIM → SOURCE → CONTEXT / LIMITATIONS → ORIGINAL ARCHIVE
 * ==============================================================================
 *
 * Entries live per chapter in ./registry/; this module aggregates them.
 */

const CHAPTER_REGISTRIES = [ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10, ch11, ch12];

function mergeCitations(groups: Record<string, ChapterCitation>[]): Record<string, ChapterCitation> {
  const merged: Record<string, ChapterCitation> = {};
  for (const group of groups) {
    for (const [id, citation] of Object.entries(group)) {
      if (id in merged) throw new Error(`Duplicate citation id "${id}" in CITATION_REGISTRY`);
      merged[id] = citation;
    }
  }
  return merged;
}

export const SOURCE_REGISTRY: SourceRegistryEntry[] = CHAPTER_REGISTRIES.flatMap((r) => r.sources);

/**
 * ─── CITATION REGISTRY: UNIFIED SOURCE LOOKUP ────────────────────────────────
 * Maps every citation ID to its full citation metadata adhering to:
 * CLAIM → SOURCE → CONTEXT / LIMITATIONS → ORIGINAL ARCHIVE
 */
export const CITATION_REGISTRY: Record<string, ChapterCitation> = mergeCitations([
  ...CHAPTER_REGISTRIES.map((r) => r.citations),
  quoteAliases,
]);

export * from './registry/editorialAudit';
