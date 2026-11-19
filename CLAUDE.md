# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

# America Unwrapped

Digital history publication for high-school U.S. History and APUSH students (currently: the Vietnam War, 1945–1975, in 12 chapters plus a study guide). Next.js 16 (App Router), React 19, Tailwind 4, TypeScript. Deployed as a static export to GitHub Pages: https://sverma2129-git.github.io/AmericaUnwrapped/ (page URLs have no trailing slash).

## Commands

- `npm run dev` — local dev server (http://localhost:3000)
- `npm run build` — static export to `./out`. Set `GITHUB_ACTIONS=true` to build exactly as CI does (adds the `/AmericaUnwrapped` basePath).
- `npm run lint` — ESLint
- `npm test` — Vitest, all `src/**/*.test.ts`
- `npx vitest run src/lib/__tests__/study.test.ts` — one test file; add `-t "name"` for one test
- `npm run validate` — source, citation and content integrity tests only (`src/data/__tests__/`)

## Architecture

- **Routes** (`src/app/`): `/`, `/about`, `/vietnam` (unit page and chapter index), `/vietnam/[slug]` (one static page per chapter via `generateStaticParams`), `/vietnam/study-guide`. `/vietnam-war` is a legacy meta-refresh redirect.
- **Two chapter layouts.** `src/app/vietnam/[slug]/page.tsx` renders `layered/LayeredChapter` when a chapter has `layout: 'layered'` and a `story` (scrollytelling beats, currently Chapters 1 and 4), otherwise `ChapterContent` (the standard layout: short version, narrative, sources, practice).
- **Data is the content.** Each chapter has three files, aggregated by top-level files that must stay thin:
  - `src/data/vietnam/chapters/NN-slug.ts` → `chapters.ts` (text, key events, module, layout)
  - `src/data/vietnam/registry/` → `sourceRegistry.ts` (sources and citations, with verification status)
  - `src/data/vietnam/study/` → `studyData.ts` (big question, takeaways, key terms, quiz)
  - Cross-chapter data: `studyGuide.ts` (presidencies, turning points, essay prompts), `timeline.ts`, `images.ts` (image registry).
- **Study tools are shared.** `src/components/study/guide/` (PracticeQuiz, FlashcardStudy, Glossary, …) power the study guide; `src/components/study/ChapterPractice.tsx` reuses them scoped to one chapter. Pure logic lives in `src/lib/` (`study.ts` collects quiz items and glossary entries, `citations.ts` decides what may be quoted, `readability.ts` scores reading level).
- **Images** appear only through `<Figure imageId>` / `<Thumb>` (`src/components/common/Figure.tsx`), backed by `IMAGE_REGISTRY`. Tests fail if a file in `public/images/vietnam` lacks an entry, or an entry lacks alt text, caption, creator or source.

## Rules

- **Never present a paraphrase as a primary-source quotation.** Only render quote marks via `isVerbatimQuotation()` in `src/lib/citations.ts` (requires `VERIFIED_QUOTATION` + `exactQuotation`). `landmarkMoment.quote` must match the registry exactly. Run `npm run validate` after touching any citation/source data.
- Source types and verification categories must use `CANONICAL_SOURCE_TYPES` / `CANONICAL_VERIFICATION_CATEGORIES` from `src/lib/citations.ts`.
- Never hardcode chapter counts or slugs — use `CHAPTER_COUNT`, `getChapter`, `getAdjacentChapters`, and the chapter `layout` field.
- **Writing follows `VOICE.md`** (plain, direct, sentence case, no ampersands in titles, one name per thing). `contentIntegrity.test.ts` enforces a banned-word list and a reading-level ceiling (grade 11 for summaries and takeaways, lower for layered stories). Quiz answer options are length-balanced by test; rewrite explanations, not options.
- Use theme color tokens (`brand`, `ink`, `ink-muted`, `rule`, `parchment`, …) from `src/app/globals.css`, not hex values. Fonts: `font-display`/`font-sans` (Bricolage Grotesque), `font-serif` (Source Serif 4); the `reading` utility sets long-form body text.
- `output: 'export'` — no server-only features (API routes, ISR, server actions, `next/image` optimization, config redirects).
- `basePath` is `/AmericaUnwrapped` only when `GITHUB_ACTIONS` is set; use `next/link` for internal links.
- Pushing to `main` triggers `.github/workflows/deploy.yml` (lint → test → build → publish to `gh-pages`).
