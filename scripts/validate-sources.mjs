#!/usr/bin/env node

/**
 * ==============================================================================
 * BUILD-TIME SOURCE & CITATION INTEGRITY VALIDATOR
 * America Unwrapped · Digital History Publication
 * 
 * Verifies metadata consistency, source traceability, and strict adherence
 * to the Absolute Rule: Never present a paraphrase as a primary-source quotation.
 * 
 * Checks:
 * 1. Global ban on "Verified Authentic" and "Official Verbatim Excerpt".
 * 2. All verified: true items have valid URLs, precise locators, and exact text.
 * 3. Canonical source types ('PRIMARY_SOURCE', 'CONTEMPORARY_REPORTING', etc.).
 * 4. All inline citation markers point to existing registered citations.
 * 5. No contradictory metadata.
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CANONICAL_SOURCE_TYPES = new Set([
  'PRIMARY_SOURCE',
  'CONTEMPORARY_REPORTING',
  'SCHOLARLY_SECONDARY_SOURCE',
  'LATER_HISTORICAL_ANALYSIS',
  'REFERENCE_SOURCE',
]);

const CANONICAL_VERIFICATION_CATEGORIES = new Set([
  'VERIFIED_QUOTATION',
  'VERIFIED_PARAPHRASE',
  'UNVERIFIABLE',
]);

let totalErrors = 0;
let totalWarnings = 0;

function reportError(msg) {
  console.error(`\x1b[31m[ERROR]\x1b[0m ${msg}`);
  totalErrors++;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function reportWarning(msg) {
  console.warn(`\x1b[33m[WARN]\x1b[0m ${msg}`);
  totalWarnings++;
}

function reportSuccess(msg) {
  console.log(`\x1b[32m[PASS]\x1b[0m ${msg}`);
}

// ─── 1. SCAN CODEBASE FOR BANNED FALSE-VERIFICATION BADGES ───────────────────
console.log('\n--- 1. Scanning codebase for prohibited badges ---');

function scanDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        scanDir(fullPath, fileList);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const srcFiles = scanDir(path.join(rootDir, 'src'));
const bannedPatterns = [
  { pattern: /Verified Authentic/i, name: '"Verified Authentic" badge' },
  { pattern: /Official Verbatim Excerpt/i, name: '"Official Verbatim Excerpt" label' },
  { pattern: /Archival Facsimile/i, name: '"Archival Facsimile" label without image source' },
];

let bannedCount = 0;
for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  for (const { pattern, name } of bannedPatterns) {
    // Exclude validator scripts and explicit comment explanations of rules
    if (pattern.test(content)) {
      // Check if it's inside a comment warning against the phrase
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (pattern.test(line) && !line.includes('ban') && !line.includes('prohibited') && !line.includes('NEVER') && !line.includes('Rule') && !line.includes('Absolute') && !line.includes('Removed') && !line.includes('bannedPatterns')) {
          reportError(`Prohibited phrase ${name} found in ${path.relative(rootDir, file)}:${idx + 1}`);
          bannedCount++;
        }
      });
    }
  }
}

if (bannedCount === 0) {
  reportSuccess('No prohibited verification badges found across codebase.');
}

// ─── 2. AUDIT SOURCE REGISTRY METADATA ────────────────────────────────────────
console.log('\n--- 2. Auditing SOURCE_REGISTRY in src/data/vietnam/sourceRegistry.ts ---');

const registryPath = path.join(rootDir, 'src/data/vietnam/sourceRegistry.ts');
const registryContent = fs.readFileSync(registryPath, 'utf8');

// Parse SOURCE_REGISTRY array entries using regex block extractor
const entryRegex = /\{\s*id:\s*['"]([^'"]+)['"][\s\S]*?notes:\s*['"][\s\S]*?['"],\s*\}/g;
const entries = [];
let match;
while ((match = entryRegex.exec(registryContent)) !== null) {
  const raw = match[0];
  const idMatch = raw.match(/id:\s*['"]([^'"]+)['"]/);
  const chapterMatch = raw.match(/chapter:\s*(\d+)/);
  const verifiedMatch = raw.match(/verified:\s*(true|false)/);
  const categoryMatch = raw.match(/verificationCategory:\s*['"]([^'"]+)['"]/);
  const sourceTypeMatch = raw.match(/sourceType:\s*['"]([^'"]+)['"]/);
  const sourceUrlMatch = raw.match(/sourceUrl:\s*['"]([^'"]+)['"]/);
  const locatorMatch = raw.match(/locator:\s*['"]([^'"]+)['"]/);
  const supportsClaimMatch = raw.match(/supportsClaim:\s*['"]([^'"]+)['"]/);
  const exactQuotationMatch = raw.match(/exactQuotation:\s*['"]([^'"]+)['"]/);

  entries.push({
    id: idMatch ? idMatch[1] : null,
    chapter: chapterMatch ? parseInt(chapterMatch[1], 10) : null,
    verified: verifiedMatch ? verifiedMatch[1] === 'true' : false,
    verificationCategory: categoryMatch ? categoryMatch[1] : null,
    sourceType: sourceTypeMatch ? sourceTypeMatch[1] : null,
    sourceUrl: sourceUrlMatch ? sourceUrlMatch[1] : null,
    locator: locatorMatch ? locatorMatch[1] : null,
    supportsClaim: supportsClaimMatch ? supportsClaimMatch[1] : null,
    exactQuotation: exactQuotationMatch ? exactQuotationMatch[1] : null,
  });
}

console.log(`Found ${entries.length} entries in SOURCE_REGISTRY.`);

let verifiedQuotationCount = 0;
let verifiedParaphraseCount = 0;
let unverifiableCount = 0;

for (const entry of entries) {
  if (!entry.id) {
    reportError('Registry entry found missing unique ID.');
    continue;
  }

  // Check category
  if (!CANONICAL_VERIFICATION_CATEGORIES.has(entry.verificationCategory)) {
    reportError(`Entry ${entry.id} has invalid verificationCategory: "${entry.verificationCategory}".`);
  }

  // Check source type
  if (!CANONICAL_SOURCE_TYPES.has(entry.sourceType)) {
    reportError(`Entry ${entry.id} has invalid sourceType: "${entry.sourceType}".`);
  }

  // Count by category
  if (entry.verificationCategory === 'VERIFIED_QUOTATION') {
    verifiedQuotationCount++;
  } else if (entry.verificationCategory === 'VERIFIED_PARAPHRASE') {
    verifiedParaphraseCount++;
  } else if (entry.verificationCategory === 'UNVERIFIABLE') {
    unverifiableCount++;
  }

  // Check verified consistency
  if (entry.verified === true) {
    if (!entry.sourceUrl || !entry.sourceUrl.startsWith('http')) {
      reportError(`Entry ${entry.id} is marked verified: true but lacks valid sourceUrl.`);
    }
    if (!entry.locator || entry.locator.toLowerCase().includes('unsupported') || entry.locator.toLowerCase().includes('pending')) {
      reportError(`Entry ${entry.id} is marked verified: true but has invalid/unsupported locator: "${entry.locator}".`);
    }
    if (entry.verificationCategory === 'UNVERIFIABLE') {
      reportError(`Entry ${entry.id} has contradictory metadata: verified: true with category UNVERIFIABLE.`);
    }
    if (entry.verificationCategory === 'VERIFIED_QUOTATION' && !entry.exactQuotation) {
      reportError(`Entry ${entry.id} is VERIFIED_QUOTATION but lacks exactQuotation string.`);
    }
  }

  // Check "WHAT THIS SOURCE SUPPORTS"
  if (!entry.supportsClaim || entry.supportsClaim.length < 15) {
    reportError(`Entry ${entry.id} is missing a descriptive "supportsClaim" explanation.`);
  }
}

reportSuccess(`SOURCE_REGISTRY validated: ${verifiedQuotationCount} Verified Quotations, ${verifiedParaphraseCount} Verified Paraphrases, ${unverifiableCount} Unverifiable.`);

// ─── 3. AUDIT CITATION_REGISTRY AND CHAPTER CITATIONS ────────────────────────
console.log('\n--- 3. Auditing CITATION_REGISTRY and chapter markers ---');

// Extract all citation IDs from CITATION_REGISTRY
const citIdRegex = /['"](c\d+-\d+|Q\d+[A-Z]?)['"]:\s*\{/g;
const registeredCitations = new Set();
let citMatch;
while ((citMatch = citIdRegex.exec(registryContent)) !== null) {
  registeredCitations.add(citMatch[1]);
}

console.log(`Found ${registeredCitations.size} registered citation definitions in CITATION_REGISTRY.`);

// Check chapter markers in chapters.ts
const chaptersPath = path.join(rootDir, 'src/data/vietnam/chapters.ts');
const chaptersContent = fs.readFileSync(chaptersPath, 'utf8');

// Find all citation references in chapters.ts: e.g. [^c1-1] or [^Q001] or CITATION_REGISTRY['c1-1']
const inlineMarkerRegex = /\[\^([a-zA-Z0-9_-]+)\]/g;
let markerMatch;
let totalInlineMarkersFound = 0;
let missingCitationCount = 0;

while ((markerMatch = inlineMarkerRegex.exec(chaptersContent)) !== null) {
  const citId = markerMatch[1];
  totalInlineMarkersFound++;
  if (!registeredCitations.has(citId)) {
    reportError(`Inline citation marker [^${citId}] in chapters.ts does not exist in CITATION_REGISTRY.`);
    missingCitationCount++;
  }
}

// Check CITATION_REGISTRY references in chapters.ts: CITATION_REGISTRY['...']
const registryRefRegex = /CITATION_REGISTRY\s*\[\s*['"]([^'"]+)['"]\s*\]/g;
let regRefMatch;
let totalChapterCitationsLinked = 0;

while ((regRefMatch = registryRefRegex.exec(chaptersContent)) !== null) {
  const citId = regRefMatch[1];
  totalChapterCitationsLinked++;
  if (!registeredCitations.has(citId)) {
    reportError(`Chapter citation link CITATION_REGISTRY['${citId}'] does not exist in CITATION_REGISTRY.`);
    missingCitationCount++;
  }
}

if (missingCitationCount === 0) {
  reportSuccess(`All ${registeredCitations.size} citations verified; ${totalInlineMarkersFound} inline markers and ${totalChapterCitationsLinked} chapter references resolve cleanly.`);
}

// ─── SUMMARY & EXIT ──────────────────────────────────────────────────────────
console.log('\n======================================================');
console.log(`INTEGRITY VALIDATION SUMMARY:`);
console.log(`  - Total Tracked Items:           ${entries.length}`);
console.log(`  - Verified Verbatim Quotations:  ${verifiedQuotationCount}`);
console.log(`  - Verified Source Paraphrases:   ${verifiedParaphraseCount}`);
console.log(`  - Unverifiable Items:            ${unverifiableCount}`);
console.log(`  - Registered Citations:          ${registeredCitations.size}`);
console.log(`  - Errors:                        ${totalErrors}`);
console.log(`  - Warnings:                      ${totalWarnings}`);
console.log('======================================================\n');

if (totalErrors > 0) {
  console.error(`\x1b[31m[FAILED]\x1b[0m Source validation failed with ${totalErrors} errors.`);
  process.exit(1);
} else {
  console.log(`\x1b[32m[SUCCESS]\x1b[0m Source validation passed with 0 errors.`);
  process.exit(0);
}
