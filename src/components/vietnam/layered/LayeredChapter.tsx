import React from 'react';
import Link from 'next/link';
import type { ChapterData, StoryBeat } from '@/types/vietnam';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import CitedParagraph from '@/components/common/CitedParagraph';
import CitationMarker from '@/components/common/CitationMarker';
import FlashcardDeck from '@/components/study/FlashcardDeck';
import Icon from '@/components/common/Icon';
import DualPerspectiveViewer from '../DualPerspectiveViewer';
import DocumentInspector from '../DocumentInspector';
import CausalFlowViewer from '../CausalFlowViewer';
import InlineCheck from './InlineCheck';
import StoryVisualView from './StoryVisuals';
import { CourseProvider, CourseToggle } from './CourseContext';
import CourseTasks, { CourseObjectives } from './CourseTasks';
import { EvidenceLocker, HistoriansDisagree } from './EvidenceParts';

interface LayeredChapterProps {
  chapter: ChapterData;
  nextChapterId?: string;
  nextChapterTitle?: string;
}

const WORDS_PER_MINUTE = 200;

function countWords(beats: StoryBeat[]): number {
  const text = beats
    .flatMap((b) => {
      const v = b.visual;
      const steps = v && (v.kind === 'siege' || v.kind === 'night') ? v.steps.map((s) => s.body) : [];
      return [b.headline, ...b.body, ...steps];
    })
    .join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}

/** "Label: explanation" takeaways render with the label emphasized. */
function splitTakeaway(text: string): [string | null, string] {
  const idx = text.indexOf(':');
  return idx > 0 && idx < 40 ? [text.slice(0, idx), text.slice(idx + 1).trim()] : [null, text];
}

/** A major section opens with the double rule and its heading; details go below the heading. */
function SectionOpener({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 id={id} className="font-display text-3xl sm:text-[2.5rem] font-bold text-ink">
        {title}
      </h2>
      {children && <p className="mt-2 text-base text-ink-muted leading-relaxed max-w-2xl">{children}</p>}
    </div>
  );
}

/** A plain disclosure row: title and one-line description, opened on demand. */
function DeeperPanel({ title, detail, children }: { title: string; detail: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-rule">
      <summary className="list-none [&::-webkit-details-marker]:hidden flex items-baseline gap-4 py-4 hover:text-brand transition-colors">
        <span className="flex-1 min-w-0">
          <span className="block font-display text-xl font-semibold text-ink group-hover:text-brand transition-colors">{title}</span>
          <span className="block mt-0.5 text-[0.9375rem] text-ink-muted">{detail}</span>
        </span>
        <Icon name="plus" className="w-5 h-5 self-center text-ink-muted transition-transform duration-200 group-open:rotate-45" />
      </summary>
      <div className="pt-2 pb-8">{children}</div>
    </details>
  );
}

export default function LayeredChapter({ chapter, nextChapterId, nextChapterTitle }: LayeredChapterProps) {
  const study = ALL_CHAPTERS_STUDY_DATA[chapter.id];
  const story = chapter.story;
  const beats = story?.beats ?? [];
  const minutes = Math.max(1, Math.ceil(countWords(beats) / WORDS_PER_MINUTE));
  const questions = new Map(study?.quiz.map((q) => [q.id, q]));

  const contents = [
    { href: '#gist', label: 'The gist', time: '30 seconds' },
    { href: '#story', label: 'The story', time: `${minutes} minutes` },
    { href: '#evidence', label: 'The evidence', time: 'go deeper' },
    { href: '#review', label: 'Practice', time: 'for the test' },
  ];

  return (
    <CourseProvider>
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-24">
        {/* Title block: headline, deck, then the dateline */}
        <header className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-[3.25rem] font-bold text-ink leading-[1.05]">{chapter.title}</h1>
          <p className="mt-4 text-xl sm:text-2xl text-ink-muted leading-snug">{chapter.subtitle}</p>
          <p className="meta mt-4 text-ink-soft">
            Chapter {chapter.number} &middot; {chapter.timeframe}
            {chapter.isLandmark && <span className="text-brand"> &middot; Turning point</span>}
          </p>
          {story?.tasks && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-[0.9375rem] text-ink-muted">I&rsquo;m studying for</span>
              <CourseToggle />
            </div>
          )}
        </header>

        {/* On this page */}
        <nav aria-label="On this page" className="mt-8">
          <ol className="flex flex-wrap gap-x-8 gap-y-2 text-[0.9375rem]">
            {contents.map((c, i) => (
              <li key={c.href}>
                <a href={c.href} className="group">
                  <span className="text-ink-soft tabular-nums">{i + 1}. </span>
                  <span className="font-semibold text-ink underline decoration-rule-strong group-hover:decoration-brand group-hover:text-brand transition-colors">
                    {c.label}
                  </span>
                  <span className="text-ink-soft"> ({c.time})</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Layer 1: the gist ───────────────────────────────────────────── */}
        <section id="gist" aria-labelledby="gist-heading" className="scroll-mt-32 mt-12 sm:mt-16">
          <h2 id="gist-heading" className="font-display text-[1.75rem] sm:text-4xl font-semibold leading-tight text-ink max-w-4xl">
            {study?.bigQuestion}
          </h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-y-6 md:gap-x-10">
            {study?.briefing.examTakeaways.map((t, i) => {
              const [label, text] = splitTakeaway(t);
              return (
                <li key={i}>
                  <p className="font-semibold text-ink">
                    {i + 1}. {label}
                  </p>
                  <p className="mt-1.5 text-[0.9375rem] text-ink-muted leading-relaxed">{text}</p>
                </li>
              );
            })}
          </ol>

          {story?.objectives && (
            <div className="mt-10 bg-parchment rounded-xl p-5 sm:p-7">
              <CourseObjectives objectives={story.objectives} />
            </div>
          )}

          {/* Key dates at a glance */}
          <ol aria-label="Key dates" className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4">
            {chapter.whatHappened.keyEvents.map((e) => (
              <li key={e.title}>
                <span className="meta block text-brand tabular-nums">{e.date}</span>
                <span className="block mt-1 text-[0.9375rem] text-ink leading-snug">{e.title}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Layer 2: the story ──────────────────────────────────────────── */}
        <section id="story" aria-labelledby="story-heading" className="scroll-mt-32 mt-20 sm:mt-28">
          <SectionOpener id="story-heading" title="How it happened">
            {beats.length} short parts, about {minutes} minutes. A few end with a quick check.
          </SectionOpener>

          <div className="space-y-20 sm:space-y-24">
            {beats.map((beat) => {
              const check = beat.checkId ? questions.get(beat.checkId) : undefined;
              const wide = ['siege', 'night', 'consequence', 'compare'].includes(beat.visual?.kind ?? '');
              return (
                <section key={beat.id} id={`beat-${beat.id}`} aria-labelledby={`beat-${beat.id}-h`} className="scroll-mt-32">
                  <h3 id={`beat-${beat.id}-h`} className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-tight max-w-2xl">
                    {beat.headline}
                  </h3>
                  <p className="meta mt-1.5 text-ink-soft">{beat.kicker}</p>
                  <div className="reading mt-4 space-y-4 text-ink">
                    {beat.body.map((p, j) => (
                      <CitedParagraph key={j} text={p} />
                    ))}
                  </div>

                  {beat.visual && (
                    <div className={`mt-8 ${wide ? '' : 'max-w-3xl'}`}>
                      <StoryVisualView visual={beat.visual} causalChain={chapter.causalChain} />
                    </div>
                  )}

                  {check && (
                    <div className="mt-8 max-w-3xl">
                      <InlineCheck question={check} />
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </section>

        {/* ── Layer 3: the evidence ───────────────────────────────────────── */}
        <section id="evidence" aria-labelledby="evidence-heading" className="scroll-mt-32 mt-24 sm:mt-32">
          <SectionOpener id="evidence-heading" title="The evidence">
            Everything above is backed by what is in here. Open whatever you are curious about.
          </SectionOpener>

          {story?.debate && (
            <div className="mb-12">
              <HistoriansDisagree debate={story.debate} />
            </div>
          )}

          <div className="border-t border-rule">
            {story?.evidence && story.evidence.length > 0 && (
              <DeeperPanel
                title="Read the sources yourself"
                detail={`${story.evidence.length} verified quotations, each with a question to think about`}
              >
                <EvidenceLocker citationIds={story.evidence} />
              </DeeperPanel>
            )}

            <DeeperPanel title="How each side saw it" detail="What Washington and Hanoi each wanted, assumed, and argued about">
              <DualPerspectiveViewer
                timeframe={chapter.timeframe}
                washington={chapter.washington}
                hanoi={chapter.hanoi}
                ecosystem={chapter.strategicEcosystem}
              />
            </DeeperPanel>

            {chapter.primaryDocuments.length > 0 && (
              <DeeperPanel
                title="Read the documents"
                detail={`${chapter.primaryDocuments.length} primary sources, with context and limitations`}
              >
                <div className="space-y-8">
                  {chapter.primaryDocuments.map((doc) => (
                    <DocumentInspector key={doc.id} document={doc} />
                  ))}
                </div>
              </DeeperPanel>
            )}

            <DeeperPanel title="The full chain of cause and effect" detail="The decision, the assumption behind it, and what it led to">
              <CausalFlowViewer causalChain={chapter.causalChain} />
            </DeeperPanel>

            {chapter.citations.length > 0 && (
              <DeeperPanel title="Every source we used" detail={`${chapter.citations.length} works cited in this chapter`}>
                <ol className="space-y-4 max-w-3xl">
                  {chapter.citations.map((c) => (
                    <li key={c.id} className="flex gap-3 text-[0.9375rem]">
                      <CitationMarker id={c.id} label={c.marker} className="!align-baseline" />
                      <div>
                        <p className="text-ink">{c.citation}</p>
                        {c.supportsClaim && <p className="mt-1 text-ink-muted">Used for: {c.supportsClaim}</p>}
                        {c.limitations && <p className="mt-1 text-ink-soft">Limits: {c.limitations}</p>}
                      </div>
                    </li>
                  ))}
                </ol>
              </DeeperPanel>
            )}
          </div>
        </section>

        {/* ── Layer 4: practice ───────────────────────────────────────────── */}
        <section id="review" aria-labelledby="review-heading" className="scroll-mt-32 mt-24 sm:mt-32">
          <SectionOpener id="review-heading" title="Practice">
            {story?.tasks
              ? 'Activities built for your course, then the key terms. Nothing you type leaves this page.'
              : 'Flip through the key terms, then take the full practice quiz in the study guide.'}
          </SectionOpener>
          {story?.tasks && (
            <div className="mb-12">
              <CourseTasks tasks={story.tasks} />
            </div>
          )}
          {study?.flashcards && study.flashcards.length > 0 && (
            <FlashcardDeck cards={study.flashcards} title={`Key terms: Chapter ${chapter.number}`} />
          )}
          <Link
            href="/vietnam/study-guide"
            className="mt-6 inline-block font-semibold text-brand underline decoration-brand-rule hover:decoration-brand transition-colors"
          >
            Open the unit study guide
          </Link>
        </section>

        {/* Bridge to the next chapter */}
        <footer className="mt-24 sm:mt-32 bg-parchment rounded-xl p-6 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink max-w-3xl">
            {chapter.nextQuestion.question}
          </h2>
          <p className="reading mt-3 text-ink-muted">{chapter.nextQuestion.framing}</p>
          {nextChapterId && (
            <Link
              href={`/vietnam/${nextChapterId}`}
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand hover:bg-brand-hover text-white text-[0.9375rem] font-semibold transition-colors"
            >
              Next: Chapter {chapter.number + 1}, {nextChapterTitle}
              <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          )}
        </footer>
      </article>
    </CourseProvider>
  );
}
