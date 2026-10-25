@AGENTS.md

# America Unwrapped

Digital history publication (currently: Vietnam War study guide) built with Next.js 16 (App Router), React 19, Tailwind 4, TypeScript. Deployed as a static export to GitHub Pages. See README.md for layout.

## Commands

- `npm run dev` — local dev server (http://localhost:3000)
- `npm run build` — static export to `./out`
- `npm run lint` — ESLint
- `npm test` — Vitest (unit tests + data integrity)
- `npm run validate` — source & citation integrity tests only (`src/data/__tests__/`)

## Rules

- **Never present a paraphrase as a primary-source quotation.** Only render quote marks via `isVerbatimQuotation()` in `src/lib/citations.ts` (requires `VERIFIED_QUOTATION` + `exactQuotation`). Run `npm run validate` after touching any citation/source data.
- Source types and verification categories must use `CANONICAL_SOURCE_TYPES` / `CANONICAL_VERIFICATION_CATEGORIES` from `src/lib/citations.ts`.
- Chapter content, registry entries, and study data live one-file-per-chapter under `src/data/vietnam/{chapters,registry,study}/`; the top-level `chapters.ts` / `sourceRegistry.ts` / `studyData.ts` only aggregate. Never hardcode chapter counts or slugs — use `CHAPTER_COUNT`, `getChapter`, `getAdjacentChapters`, and the chapter `layout` field.
- Use theme color tokens (`brand`, `ink`, `ink-muted`, `rule`, `parchment`, …) from `src/app/globals.css`, not hex values.
- `output: 'export'` — no server-only features (API routes, ISR, server actions, `next/image` optimization, config redirects).
- `basePath` is set to `/AmericaUnwrapped` only when `GITHUB_ACTIONS` is set; use `next/link` for internal links.
- Pushing to `main` triggers `.github/workflows/deploy.yml` (lint → test → build → publish to `gh-pages`).
