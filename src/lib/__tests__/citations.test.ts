import { describe, expect, it } from 'vitest';
import { getSourceTypeBadge, isVerbatimQuotation, resolveCitation } from '@/lib/citations';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { ChapterCitation } from '@/types/vietnam';

const base: ChapterCitation = {
  id: 'test-1',
  marker: 1,
  citation: 'Author. Title. Publisher, 1999.',
  sourceType: 'PRIMARY_SOURCE',
};

describe('isVerbatimQuotation', () => {
  it('requires both the VERIFIED_QUOTATION category and exact text', () => {
    expect(isVerbatimQuotation({ ...base, verificationCategory: 'VERIFIED_QUOTATION', exactQuotation: 'Exact words.' })).toBe(true);
  });

  it('rejects a verified quotation with no exact text (never falls back to the bibliography)', () => {
    expect(isVerbatimQuotation({ ...base, verificationCategory: 'VERIFIED_QUOTATION' })).toBe(false);
    expect(isVerbatimQuotation({ ...base, verificationCategory: 'VERIFIED_QUOTATION', exactQuotation: '   ' })).toBe(false);
  });

  it('rejects exact text that is not categorised as a verified quotation', () => {
    expect(isVerbatimQuotation({ ...base, verificationCategory: 'VERIFIED_PARAPHRASE', exactQuotation: 'Words.' })).toBe(false);
    expect(isVerbatimQuotation({ ...base, exactQuotation: 'Words.' })).toBe(false);
  });
});

describe('resolveCitation', () => {
  it('returns registered citations and null for unknown ids', () => {
    const [id, citation] = Object.entries(CITATION_REGISTRY)[0];
    expect(resolveCitation(id)).toBe(citation);
    expect(resolveCitation('does-not-exist')).toBeNull();
  });
});

describe('getSourceTypeBadge', () => {
  it('maps legacy and canonical source types to the same badge', () => {
    expect(getSourceTypeBadge('archival').tone).toBe('primary');
    expect(getSourceTypeBadge('PRIMARY_SOURCE').tone).toBe('primary');
    expect(getSourceTypeBadge('academic-monograph').tone).toBe('scholarly');
    expect(getSourceTypeBadge('REFERENCE_SOURCE').tone).toBe('reference');
  });
});
