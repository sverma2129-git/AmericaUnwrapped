import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { DBQ_PROMPTS, PRESIDENCIES, TURNING_POINTS } from '@/data/vietnam/studyGuide';
import { buildGlossaryEntries, collectQuizItems } from '@/lib/study';
import Figure from '@/components/common/Figure';
import { StudyFocusProvider } from '@/components/study/guide/StudyFocus';
import SectionBar from '@/components/study/guide/SectionBar';
import StartHere from '@/components/study/guide/StartHere';
import PresidentsExplorer from '@/components/study/guide/PresidentsExplorer';
import TurningPointsTimeline from '@/components/study/guide/TurningPointsTimeline';
import FlashcardStudy from '@/components/study/guide/FlashcardStudy';
import PracticeQuiz from '@/components/study/guide/PracticeQuiz';
import DbqOutlines from '@/components/study/guide/DbqOutlines';
import Glossary from '@/components/study/guide/Glossary';

export const metadata: Metadata = {
  title: 'Vietnam War study guide',
  description:
    'Review the Vietnam War unit from 1945 to 1975: the six presidents, the turning points, 70 flashcards, a 44-question practice quiz with explanations, essay outlines and a searchable glossary.',
};

const SECTIONS = [
  { id: 'presidents', label: 'Presidents' },
  { id: 'turning-points', label: 'Turning points' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'quiz', label: 'Practice quiz' },
  { id: 'essays', label: 'Essays' },
  { id: 'glossary', label: 'Glossary' },
];

/** The four questions the unit test keeps coming back to, with where each is taught. */
const BIG_IDEAS: { question: string; topics: { label: string; chapterId: string }[] }[] = [
  {
    question: 'Why did the U.S. escalate?',
    topics: [
      { label: 'Domino Theory', chapterId: 'french-indochina-dien-bien-phu' },
      { label: 'Gulf of Tonkin', chapterId: 'gulf-of-tonkin' },
    ],
  },
  {
    question: 'Why did the war stall?',
    topics: [{ label: 'Guerrilla war and body counts', chapterId: 'americanization-attrition' }],
  },
  {
    question: 'Why did support at home fall apart?',
    topics: [{ label: 'Tet and the credibility gap', chapterId: 'tet-offensive' }],
  },
  {
    question: 'What changed afterward?',
    topics: [
      { label: 'Pentagon Papers', chapterId: 'memory-and-the-argument' },
      { label: 'War Powers Act', chapterId: 'gulf-of-tonkin' },
    ],
  },
];

function SectionHeader({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <header className="border-t border-ink pt-4">
      <h2 id={`${id}-title`} className="font-display text-2xl font-bold tracking-tight text-ink">
        {title}
      </h2>
      <p className="mt-2 max-w-[62ch] text-base text-ink-muted">{children}</p>
    </header>
  );
}

export default function StudyGuidePage() {
  const quizItems = collectQuizItems(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA);
  const glossary = buildGlossaryEntries(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA);
  const chapterRefs = VIETNAM_CHAPTERS.map((c) => ({ id: c.id, number: c.number, title: c.title }));
  const sourceBased = quizItems.filter((i) => i.question.imageId).length;

  const counts = {
    chapters: VIETNAM_CHAPTERS.length,
    turningPoints: TURNING_POINTS.length,
    terms: glossary.length,
    questions: quizItems.length,
    essays: DBQ_PROMPTS.length,
  };

  return (
    <StudyFocusProvider chapters={chapterRefs}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-ink">
        {/* Orient: what the unit is, what the test asks, where to begin */}
        <header className="pt-8 pb-12 sm:pt-12 sm:pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li>
                <Link href="/vietnam" className="hover:text-brand">
                  Vietnam War
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                Study guide
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
            <div>
              <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Vietnam War study guide
              </h1>
              <p className="mt-4 max-w-[34ch] font-serif text-lg sm:text-xl leading-snug text-ink">
                Thirty years and six presidents, from Ho Chi Minh’s declaration of independence in 1945 to the fall of Saigon in 1975.
              </p>
              <p className="mt-4 max-w-[60ch] text-ink-muted">
                Built for U.S. History and AP U.S. History (Period 8). Everything here comes from the {counts.chapters}{' '}
                chapters, so any answer can be traced back to where it is taught.
              </p>

              <h2 className="mt-10 font-display text-lg font-bold text-ink">What the test keeps asking</h2>
              <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
                {BIG_IDEAS.map((idea) => (
                  <li key={idea.question} className="border-t border-rule py-3">
                    <p className="font-display font-semibold text-ink">{idea.question}</p>
                    <p className="mt-0.5 text-sm text-ink-muted">
                      {idea.topics.map((t, i) => (
                        <React.Fragment key={t.label}>
                          {i > 0 && ', '}
                          <Link
                            href={`/vietnam/${t.chapterId}`}
                            className="underline decoration-rule-strong underline-offset-4 hover:text-brand hover:decoration-brand"
                          >
                            {t.label}
                          </Link>
                        </React.Fragment>
                      ))}
                    </p>
                  </li>
                ))}
              </ul>
              <StartHere counts={counts} />
            </div>

            {/* After the start list on small screens, beside the intro on wide ones */}
            <div className="max-w-md lg:max-w-none lg:mt-2">
              <Figure imageId="paris-signing-1973" />
            </div>
          </div>
        </header>

        <SectionBar sections={SECTIONS} />

        {/* Understand */}
        <section id="presidents" aria-labelledby="presidents-title" className="pt-14 sm:pt-20">
          <SectionHeader id="presidents" title="The presidents">
            Six presidents owned the war in turn; Truman and Eisenhower are paired here. Pick one to see what each did, the turning point of those years, and the mistake students most often make.
          </SectionHeader>
          <div className="mt-8">
            <PresidentsExplorer presidencies={PRESIDENCIES} />
          </div>
        </section>

        <section id="turning-points" aria-labelledby="turning-points-title" className="pt-16 sm:pt-24">
          <SectionHeader id="turning-points" title="Turning points">
            The {counts.turningPoints} events that changed the war’s direction, in order and grouped by who was president.
            Filled dots mark the ones that come up most on tests.
          </SectionHeader>
          <div className="mt-10">
            <TurningPointsTimeline />
          </div>
        </section>

        {/* Remember */}
        <section id="flashcards" aria-labelledby="flashcards-title" className="pt-16 sm:pt-24">
          <SectionHeader id="flashcards" title="Flashcards">
            {counts.terms} key terms. Look at the term, say what it means out loud, then flip the card to check yourself.
          </SectionHeader>
          <div className="mt-6">
            <FlashcardStudy entries={glossary} />
          </div>
        </section>

        {/* Practice */}
        <section id="quiz" aria-labelledby="quiz-title" className="pt-16 sm:pt-24">
          <div className="-mx-4 sm:mx-0 bg-parchment px-4 py-10 sm:rounded-sm sm:px-10 sm:py-12">
            <SectionHeader id="quiz" title="Practice quiz">
              {counts.questions} multiple-choice questions, each with an explanation after you answer. {sourceBased} are
              source-based, like the AP exam: you read a photo or document first.
            </SectionHeader>
            <div className="mt-8">
              <PracticeQuiz items={quizItems} />
            </div>
          </div>
        </section>

        <section id="essays" aria-labelledby="essays-title" className="pt-16 sm:pt-24">
          <SectionHeader id="essays" title="Essay practice">
            For AP U.S. History. Three practice prompts with sample outlines, and the Vietnam questions from past AP exams.
          </SectionHeader>
          <div className="mt-8">
            <DbqOutlines />
          </div>
        </section>

        {/* Look up */}
        <section id="glossary" aria-labelledby="glossary-title" className="pt-16 sm:pt-24 pb-20">
          <SectionHeader id="glossary" title="Glossary">
            Every key term in the unit, grouped by chapter. Search it when you just need a quick answer.
          </SectionHeader>
          <div className="mt-6">
            <Glossary entries={glossary} />
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-rule py-8 text-sm">
          <Link href="/vietnam" className="font-semibold text-ink-muted hover:text-brand">
            Back to the Vietnam War unit
          </Link>
          <Link href={`/vietnam/${VIETNAM_CHAPTERS[0].id}`} className="rounded-sm bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-hover">
            Start Chapter 1
          </Link>
        </footer>
      </div>
    </StudyFocusProvider>
  );
}
