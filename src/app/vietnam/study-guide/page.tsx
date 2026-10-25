import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { QUIZ_RANGES, buildGlossary, collectQuizQuestions } from '@/lib/study';
import StudyGuideTabs from '@/components/study/guide/StudyGuideTabs';
import CheatSheet from '@/components/study/guide/CheatSheet';
import MasterQuiz from '@/components/study/guide/MasterQuiz';
import GlossaryPanel from '@/components/study/guide/GlossaryPanel';
import DbqOutlines from '@/components/study/guide/DbqOutlines';

export const metadata: Metadata = {
  title: 'Vietnam War Study Guide & Exam Review',
  description:
    'A 1-page unit cheat sheet, self-grading practice quizzes with historical rationales, vocabulary flashcards, and DBQ essay outlines for AP, Honors, and Regular U.S. History.',
};

export default function StudyGuidePage() {
  const allQuestions = collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA);
  const quizGroups = QUIZ_RANGES.map((range) => ({
    id: range.id,
    label: range.label,
    questions: collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA, range),
  }));
  const glossary = buildGlossary(ALL_CHAPTERS_STUDY_DATA);
  const firstChapter = VIETNAM_CHAPTERS[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 text-ink">
      {/* 1. Header & Curriculum Framing */}
      <header>
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-ink-muted">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-brand transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">&bull;</li>
            <li>
              <Link href="/vietnam" className="hover:text-brand transition-colors">
                Explore History
              </Link>
            </li>
            <li aria-hidden="true">&bull;</li>
            <li className="text-brand font-bold" aria-current="page">
              Study Guide
            </li>
          </ol>
        </nav>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-brand-tint text-brand border border-brand-rule text-xs font-bold uppercase rounded-xs">
            AP &bull; Honors &bull; Regular U.S. History Curriculum
          </span>
          <span className="text-xs text-ink-muted">AP Period 8 (1945–1980)</span>
        </div>

        <h1 className="font-editorial-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.12]">
          Vietnam War Master Study Guide &amp; Exam Review
        </h1>

        <p className="mt-4 font-editorial-serif italic text-lg sm:text-2xl text-ink-muted max-w-3xl leading-relaxed">
          The definitive 1-page unit cheat sheet, interactive practice quizzes with historical rationales, master vocabulary flashcards, and high-yield DBQ essay outlines.
        </p>
      </header>

      {/* 2. Interactive Modes */}
      <div className="space-y-12">
        <StudyGuideTabs
          tabs={[
            { id: 'cheatsheet', label: '📋 1-Page Unit Cheat Sheet', content: <CheatSheet /> },
            {
              id: 'quiz',
              label: `✍️ Master Practice Quiz (${allQuestions.length} Questions)`,
              content: <MasterQuiz allQuestions={allQuestions} groups={quizGroups} />,
            },
            {
              id: 'flashcards',
              label: `🃏 Flashcards & Glossary (${glossary.length} Terms)`,
              content: <GlossaryPanel terms={glossary} />,
            },
            { id: 'dbq', label: '📝 DBQ & Long Essay Outlines', content: <DbqOutlines /> },
          ]}
        />
      </div>

      {/* 3. Bottom Navigation Footer */}
      <footer className="border-t border-rule pt-8 flex flex-wrap items-center justify-between gap-4 text-xs">
        <Link href="/vietnam" className="text-ink-muted hover:text-brand uppercase tracking-wider font-semibold">
          &larr; Back to Explore History
        </Link>
        <Link
          href={`/vietnam/${firstChapter.id}`}
          className="px-5 py-2.5 bg-brand hover:bg-brand-hover text-white uppercase tracking-wider font-semibold rounded-xs shadow-xs transition-colors"
        >
          Begin Chapter 01: Dien Bien Phu &rarr;
        </Link>
      </footer>
    </div>
  );
}
