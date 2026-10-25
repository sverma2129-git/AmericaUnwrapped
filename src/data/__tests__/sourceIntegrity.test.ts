/**
 * SOURCE & CITATION INTEGRITY CHECKS
 *
 * Enforces the Absolute Rule: never present a paraphrase as a primary-source
 * quotation. Runs against the imported data (not regex over source text), so it
 * keeps working however the data files are organised. `npm run validate`.
 */
import fs from 'fs';
import path from 'path';
import { describe, expect, it } from 'vitest';
import {
  CITATION_REGISTRY,
  INTEGRITY_AUDIT_SUMMARY,
  SOURCE_REGISTRY,
} from '@/data/vietnam/sourceRegistry';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { CANONICAL_SOURCE_TYPES, CANONICAL_VERIFICATION_CATEGORIES } from '@/lib/citations';

const SRC_DIR = path.resolve(__dirname, '../..');

function listSourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return entry.name === '__tests__' ? [] : listSourceFiles(fullPath);
    }
    return /\.(ts|tsx|js)$/.test(entry.name) ? [fullPath] : [];
  });
}

const sourceFiles = listSourceFiles(SRC_DIR).map((file) => ({
  file: path.relative(SRC_DIR, file),
  content: fs.readFileSync(file, 'utf8'),
}));

describe('prohibited verification badges', () => {
  const banned = [/Verified Authentic/i, /Official Verbatim Excerpt/i, /Archival Facsimile/i];
  // Lines that explain the rule (e.g. comments) are allowed to mention the phrases.
  const exempt = /ban|prohibited|NEVER|Rule|Absolute|Removed/;

  it('never appear in the codebase', () => {
    const hits = sourceFiles.flatMap(({ file, content }) =>
      content.split('\n').flatMap((line, idx) =>
        banned.some((p) => p.test(line)) && !exempt.test(line) ? [`${file}:${idx + 1}`] : []
      )
    );
    expect(hits).toEqual([]);
  });
});

describe('SOURCE_REGISTRY', () => {
  it('has unique ids', () => {
    const ids = SOURCE_REGISTRY.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(SOURCE_REGISTRY.map((e) => [e.id, e] as const))('%s has valid metadata', (_id, entry) => {
    expect(CANONICAL_VERIFICATION_CATEGORIES).toContain(entry.verificationCategory);
    expect(CANONICAL_SOURCE_TYPES).toContain(entry.sourceType);
    expect(entry.supportsClaim.length).toBeGreaterThanOrEqual(15);

    if (entry.verified) {
      expect(entry.sourceUrl).toMatch(/^https?:\/\//);
      expect(entry.locator).not.toMatch(/unsupported|pending/i);
      expect(entry.verificationCategory).not.toBe('UNVERIFIABLE');
    }
    if (entry.verificationCategory === 'VERIFIED_QUOTATION') {
      expect(entry.exactQuotation?.trim()).toBeTruthy();
    }
  });
});

describe('CITATION_REGISTRY', () => {
  const citations = Object.entries(CITATION_REGISTRY);

  it.each(citations)('%s has valid metadata', (key, citation) => {
    expect(citation.id).toBe(key);
    expect(citation.citation.trim()).toBeTruthy();
    if (citation.verificationCategory) {
      expect(CANONICAL_VERIFICATION_CATEGORIES).toContain(citation.verificationCategory);
    }
    // A quotation must carry exact text, and exact text must be a verified quotation.
    if (citation.verificationCategory === 'VERIFIED_QUOTATION') {
      expect(citation.exactQuotation?.trim()).toBeTruthy();
    }
    if (citation.exactQuotation) {
      expect(citation.verificationCategory).toBe('VERIFIED_QUOTATION');
    }
  });

  it('resolves every inline [^id] marker in the codebase', () => {
    const missing = sourceFiles.flatMap(({ file, content }) =>
      [...content.matchAll(/\[\^([a-zA-Z0-9_-]+)\]/g)]
        .map((m) => m[1])
        .filter((id) => !(id in CITATION_REGISTRY))
        .map((id) => `${file}: [^${id}]`)
    );
    expect(missing).toEqual([]);
  });

  it('resolves every chapter citation reference', () => {
    for (const chapter of VIETNAM_CHAPTERS) {
      chapter.citations.forEach((citation, idx) => {
        expect(citation, `${chapter.id} citations[${idx}]`).toBeDefined();
      });
    }
  });
});

describe('INTEGRITY_AUDIT_SUMMARY', () => {
  const count = (category: string) =>
    SOURCE_REGISTRY.filter((e) => e.verificationCategory === category).length;

  it('matches the registry contents', () => {
    expect(INTEGRITY_AUDIT_SUMMARY.totalItemsTracked).toBe(SOURCE_REGISTRY.length);
    expect(INTEGRITY_AUDIT_SUMMARY.verifiedExactQuotations).toBe(count('VERIFIED_QUOTATION'));
    expect(INTEGRITY_AUDIT_SUMMARY.verifiedParaphrases).toBe(count('VERIFIED_PARAPHRASE'));
    expect(INTEGRITY_AUDIT_SUMMARY.unverifiableItems).toBe(count('UNVERIFIABLE'));
  });
});
