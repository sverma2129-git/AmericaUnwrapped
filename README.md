# America Unwrapped

A digital history publication designed to make American history understandable, engaging, and intellectually serious. The first project is an interactive history of **the Vietnam War (1945–1975)**: twelve chapters with primary-source citations, interactive maps and models, and a high-school study guide (cheat sheet, practice quizzes, flashcards, DBQ outlines).

Live site: https://sverma2129-git.github.io/AmericaUnwrapped/

## Editorial rule

**Never present a paraphrase as a primary-source quotation.** Every citation is classified as a verified quotation, verified paraphrase, or unverifiable, and only verified quotations with exact source text are shown in quotation marks. `npm run validate` enforces this; CI blocks deploys that fail it.

## Development

Requires Node 22+ (see `.nvmrc`).

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npm test           # unit tests + source/citation integrity checks
npm run validate   # integrity checks only
npm run build      # static export to ./out
```

## Project layout

| Path | Contents |
|---|---|
| `src/app/` | Routes: `/`, `/about`, `/vietnam`, `/vietnam/[slug]`, `/vietnam/study-guide` |
| `src/components/` | `common/` citations, `layout/`, `study/` quiz/flashcards/study guide, `vietnam/` chapter views and interactive `modules/` |
| `src/data/vietnam/chapters/` | One file per chapter (aggregated by `chapters.ts`) |
| `src/data/vietnam/registry/` | Per-chapter source and citation registry entries (aggregated by `sourceRegistry.ts`) |
| `src/data/vietnam/study/` | Per-chapter briefings, quizzes, flashcards (aggregated by `studyData.ts`) |
| `src/lib/` | Pure helpers (citation display rules, quiz scoring, glossary) |
| `src/types/` | Shared TypeScript types |

Colors come from the design tokens in `src/app/globals.css` (`bg-brand`, `text-ink`, `border-rule`, …). Use those instead of hex values.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: lint → test → static build → publish to the `gh-pages` branch. Pull requests run the same checks without deploying.
