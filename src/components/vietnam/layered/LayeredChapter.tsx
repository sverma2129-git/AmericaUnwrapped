import React from 'react';
import Link from 'next/link';
import type { ChapterData, StoryBeat } from '@/types/vietnam';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import CitedParagraph from '@/components/common/CitedParagraph';
import CitationMarker from '@/components/common/CitationMarker';
import FlashcardDeck from '@/components/study/FlashcardDeck';
import Icon, { type IconName } from '@/components/common/Icon';
import DualPerspectiveViewer from '../DualPerspectiveViewer';
import DocumentInspector from '../DocumentInspector';
import CausalFlowViewer from '../CausalFlowViewer';
import InlineCheck from './InlineCheck';
import StoryVisualView from './StoryVisuals';

interface LayeredChapterProps {
  chapter: ChapterData;
  nextChapterId?: string;
  nextChapterTitle?: string;
}

const WORDS_PER_MINUTE = 200;

function countWords(beats: StoryBeat[]): number {
  const text = beats
    .flatMap((b) => [b.headline, ...b.body, ...(b.visual?.kind === 'siege' ? b.visual.steps.map((s) => s.body) : [])])
    .join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}

/** "Label: explanation" takeaways render with the label emphasized. */
function splitTakeaway(text: string): [string | null, string] {
  const idx = text.indexOf(':');
  return idx > 0 && idx < 40 ? [text.slice(0, idx), text.slice(idx + 1).trim()] : [null, text];
}

function SectionHeading({ id, kicker, title, children }: { id: string; kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-8 sm:mb-10 max-w-2xl">
      <span className="eyebrow text-brand block mb-2">{kicker}</span>
      <h2 id={id} className="font-editorial-serif text-3xl sm:text-4xl font-medium tracking-tight text-ink">
        {title}
      </h2>
      {children && <p className="mt-2 text-base text-ink-muted leading-relaxed">{children}</p>}
    </div>
  );
}

function DeeperPanel({ title, detail, icon, children }: { title: string; detail: string; icon: IconName; children: React.ReactNode }) {
  return (
    <details className="group card-surface rounded-xl overflow-clip">
      <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center gap-4 p-5 sm:p-6 hover:bg-parchment-light transition-colors">
        <span className="w-10 h-10 shrink-0 rounded-full bg-parchment border border-rule flex items-center justify-center text-ink-muted">
          <Icon name={icon} className="w-4.5 h-4.5" />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-editorial-serif text-lg font-medium text-ink">{title}</span>
          <span className="block text-sm text-ink-muted">{detail}</span>
        </span>
        <span
          aria-hidden="true"
          className="w-7 h-7 shrink-0 rounded-full border border-rule flex items-center justify-center text-ink-muted transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="border-t border-rule p-5 sm:p-8">{children}</div>
    </details>
  );
}

export default function LayeredChapter({ chapter, nextChapterId, nextChapterTitle }: LayeredChapterProps) {
  const study = ALL_CHAPTERS_STUDY_DATA[chapter.id];
  const beats = chapter.story?.beats ?? [];
  const minutes = Math.max(1, Math.ceil(countWords(beats) / WORDS_PER_MINUTE));
  const questions = new Map(study?.quiz.map((q) => [q.id, q]));
  const number = chapter.number.toString().padStart(2, '0');

  const depth = [
    { href: '#gist', label: 'The gist', time: '30 sec', icon: 'zap' as const },
    { href: '#story', label: 'The story', time: `${minutes} min`, icon: 'book' as const },
    { href: '#evidence', label: 'The evidence', time: 'Go deeper', icon: 'folder' as const },
    { href: '#review', label: 'Review', time: 'For the test', icon: 'layers' as const },
  ];

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Masthead */}
      <header className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="eyebrow text-ink-soft">
            Chapter {number} &middot; {chapter.timeframe}
          </span>
          {chapter.isLandmark && (
            <span className="eyebrow px-2 py-0.5 rounded-full bg-brand-tint text-brand border border-brand-rule">Turning point</span>
          )}
        </div>
        <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.05]">
          {chapter.title}
        </h1>
        <p className="mt-4 font-editorial-serif italic text-xl sm:text-2xl text-ink-muted leading-snug">{chapter.subtitle}</p>
      </header>

      {/* Depth picker: how far does the student want to go? */}
      <nav aria-label="How deep do you want to go?" className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {depth.map((d, i) => (
          <a
            key={d.href}
            href={d.href}
            className="group card-surface card-interactive rounded-xl p-4 flex items-center gap-3"
          >
            <span className="w-9 h-9 shrink-0 rounded-full bg-parchment border border-rule flex items-center justify-center text-ink-muted group-hover:text-brand transition-colors">
              <Icon name={d.icon} className="w-4 h-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-ink">
                <span className="text-ink-soft tabular-nums mr-1">{i + 1}.</span>
                {d.label}
              </span>
              <span className="block text-xs text-ink-soft">{d.time}</span>
            </span>
          </a>
        ))}
      </nav>

      {/* ── Layer 1: the gist ───────────────────────────────────────────── */}
      <section id="gist" aria-labelledby="gist-heading" className="scroll-mt-32 mt-14 sm:mt-20">
        <div className="rounded-2xl bg-ink text-paper p-6 sm:p-10 lg:p-12">
          <span className="eyebrow text-paper/60 block mb-3">In 30 seconds</span>
          <h2 id="gist-heading" className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-tight max-w-4xl">
            {study?.bigQuestion}
          </h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">
            {study?.briefing.examTakeaways.map((t, i) => {
              const [label, text] = splitTakeaway(t);
              return (
                <li key={i} className="border-t border-paper/20 pt-4">
                  <span className="font-editorial-serif text-2xl text-paper/50 tabular-nums">{i + 1}</span>
                  {label && <span className="block mt-1 text-sm font-semibold text-paper">{label}</span>}
                  <p className="mt-1 text-sm text-paper/75 leading-relaxed">{text}</p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Key dates at a glance */}
        <ol aria-label="Key dates" className="mt-6 grid sm:grid-cols-5 gap-px rounded-xl overflow-hidden border border-rule bg-rule">
          {chapter.whatHappened.keyEvents.map((e) => (
            <li key={e.title} className="bg-surface p-4">
              <span className="eyebrow text-brand block">{e.date}</span>
              <span className="block mt-1.5 text-sm font-medium text-ink leading-snug">{e.title}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Layer 2: the story ──────────────────────────────────────────── */}
      <section id="story" aria-labelledby="story-heading" className="scroll-mt-32 mt-20 sm:mt-28">
        <SectionHeading id="story-heading" kicker={`The story · ${minutes} min read`} title="How it happened">
          {beats.length} short parts. Each one ends with something to look at, and a few with a quick check.
        </SectionHeading>

        <div className="space-y-20 sm:space-y-28">
          {beats.map((beat, i) => {
            const check = beat.checkId ? questions.get(beat.checkId) : undefined;
            const wide = beat.visual?.kind === 'siege' || beat.visual?.kind === 'consequence';
            return (
              <section key={beat.id} id={`beat-${beat.id}`} aria-labelledby={`beat-${beat.id}-h`} className="scroll-mt-32">
                <div className="max-w-2xl">
                  <span className="eyebrow text-ink-soft flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full border border-rule-strong text-ink flex items-center justify-center tabular-nums">
                      {i + 1}
                    </span>
                    {beat.kicker}
                  </span>
                  <h3 id={`beat-${beat.id}-h`} className="font-editorial-serif text-2xl sm:text-3xl font-medium tracking-tight text-ink leading-tight">
                    {beat.headline}
                  </h3>
                  <div className="mt-4 space-y-4 text-base sm:text-lg text-ink leading-relaxed">
                    {beat.body.map((p, j) => (
                      <CitedParagraph key={j} text={p} />
                    ))}
                  </div>
                </div>

                {beat.visual && (
                  <div className={`mt-8 ${wide ? '' : 'max-w-3xl'}`}>
                    <StoryVisualView visual={beat.visual} causalChain={chapter.causalChain} />
                  </div>
                )}

                {check && (
                  <div className="mt-6 max-w-3xl">
                    <InlineCheck question={check} />
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </section>

      {/* ── Layer 3: the evidence ───────────────────────────────────────── */}
      <section id="evidence" aria-labelledby="evidence-heading" className="scroll-mt-32 mt-24 sm:mt-32 pt-12 border-t border-rule">
        <SectionHeading id="evidence-heading" kicker="Go deeper" title="The evidence">
          Everything above is backed by what is in here. Open whatever you are curious about.
        </SectionHeading>

        <div className="space-y-3">
          <DeeperPanel icon="link" title="How each side saw it" detail="What Washington and Hanoi each wanted, assumed, and argued about">
            <DualPerspectiveViewer
              timeframe={chapter.timeframe}
              washington={chapter.washington}
              hanoi={chapter.hanoi}
              ecosystem={chapter.strategicEcosystem}
            />
          </DeeperPanel>

          {chapter.primaryDocuments.length > 0 && (
            <DeeperPanel
              icon="fileText"
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

          <DeeperPanel icon="map" title="The full chain of cause and effect" detail="The decision, the assumption behind it, and what it led to">
            <CausalFlowViewer causalChain={chapter.causalChain} />
          </DeeperPanel>

          {chapter.citations.length > 0 && (
            <DeeperPanel icon="scroll" title="Every source we used" detail={`${chapter.citations.length} works cited in this chapter`}>
              <ol className="space-y-4">
                {chapter.citations.map((c) => (
                  <li key={c.id} className="flex gap-3 text-sm">
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

      {/* ── Layer 4: review ─────────────────────────────────────────────── */}
      <section id="review" aria-labelledby="review-heading" className="scroll-mt-32 mt-24 sm:mt-32">
        <SectionHeading id="review-heading" kicker="For the test" title="Review">
          Flip through the key terms, then take the full practice quiz in the study guide.
        </SectionHeading>
        {study?.flashcards && study.flashcards.length > 0 && (
          <FlashcardDeck cards={study.flashcards} title={`Key terms: Chapter ${number}`} />
        )}
        <Link
          href="/vietnam/study-guide"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-hover"
        >
          Open the unit study guide
          <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </section>

      {/* Bridge to the next chapter */}
      <footer className="mt-24 sm:mt-32 rounded-2xl border border-rule bg-parchment-light p-6 sm:p-10">
        <span className="eyebrow text-ink-soft block mb-2">The question this leaves</span>
        <h2 className="font-editorial-serif text-2xl sm:text-3xl font-medium tracking-tight text-ink max-w-3xl">
          {chapter.nextQuestion.question}
        </h2>
        <p className="mt-3 text-base text-ink-muted leading-relaxed max-w-2xl">{chapter.nextQuestion.framing}</p>
        {nextChapterId && (
          <Link
            href={`/vietnam/${nextChapterId}`}
            className="group mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand hover:bg-brand-hover text-white text-sm font-semibold transition-colors"
          >
            Chapter {(chapter.number + 1).toString().padStart(2, '0')}: {nextChapterTitle}
            <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </footer>
    </article>
  );
}
