import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CopyLinkButton from '@/components/common/CopyLinkButton';
import { CHAPTER_COUNT, VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import { collectQuizQuestions, storyMinutes } from '@/lib/study';
import { socialMeta } from '@/lib/social';

const DESCRIPTION =
  'The Vietnam War unit at a glance for teachers: what each chapter asks, how long the reading takes, and links to post for your class.';

export const metadata: Metadata = {
  title: 'For teachers',
  description: DESCRIPTION,
  ...socialMeta('For teachers: the Vietnam War unit', DESCRIPTION),
};

const textLink = 'font-medium text-brand underline decoration-brand-rule underline-offset-4 hover:decoration-brand';
const heading = 'font-display text-2xl font-bold text-navy';

const NOTES = [
  {
    title: 'The whole unit',
    message: `The Vietnam War, 1945–1975, in ${CHAPTER_COUNT} chapters told through the records of the time. Free, no account needed.`,
    path: '/vietnam',
    label: 'Copy the unit note',
  },
  {
    title: 'The study guide',
    message: 'Vietnam War study guide: practice questions, flashcards and a timeline. Free, no account needed.',
    path: '/vietnam/study-guide',
    label: 'Copy the study guide note',
  },
];

export default function TeachersPage() {
  const quizCount = collectQuizQuestions(VIETNAM_CHAPTERS, ALL_CHAPTERS_STUDY_DATA).length;

  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header>
        <h1 className="font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">For teachers</h1>
        <p className="mt-4 max-w-[46ch] font-serif text-xl leading-snug text-ink">
          The Vietnam War, 1945 to 1975, in {CHAPTER_COUNT} chapters with a study guide, for U.S. History and AP U.S.
          History classes.
        </p>
        <p className="mt-4 max-w-[62ch] text-base text-ink-muted">
          It’s free and runs in a web browser. There are no ads, accounts or tracking, so students can open a link and
          start.
        </p>
      </header>

      <section aria-labelledby="post-title" className="mt-12 rounded-sm bg-parchment px-5 py-8 sm:px-8">
        <h2 id="post-title" className={heading}>
          Post it for your class
        </h2>
        <p className="mt-2 max-w-[60ch] text-base text-ink-muted">
          Each button copies the note and its link. Paste it into Google Classroom or wherever your class looks.
        </p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {NOTES.map((note) => (
            <li key={note.path} className="flex flex-col rounded-sm border border-rule bg-surface p-5">
              <h3 className="font-display text-lg font-bold text-navy">{note.title}</h3>
              <p className="mt-2 flex-1 text-base text-ink">{note.message}</p>
              <CopyLinkButton path={note.path} message={note.message} label={note.label} className="mt-4" />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="chapters-title" className="mt-16">
        <h2 id="chapters-title" className={heading}>
          Chapter by chapter
        </h2>
        <p className="mt-2 max-w-[62ch] text-base text-ink-muted">
          Reading times are estimates for the story text alone, at a careful pace. Allow extra time for the sources, maps
          and practice questions.
        </p>
        <ol className="mt-8 divide-y divide-rule border-y border-rule">
          {VIETNAM_CHAPTERS.map((chapter) => {
            const study = ALL_CHAPTERS_STUDY_DATA[chapter.id];
            return (
              <li key={chapter.id} className="grid gap-x-8 gap-y-3 py-6 sm:grid-cols-[minmax(0,1fr)_auto]">
                <div>
                  <h3 className="font-display text-lg font-bold text-navy">
                    <Link href={`/vietnam/${chapter.id}`} className="hover:text-brand">
                      {chapter.number}. {chapter.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-base text-ink">{study?.bigQuestion ?? chapter.subtitle}</p>
                  <p className="mt-1 text-sm text-ink-muted">
                    {chapter.timeframe}. About {storyMinutes(chapter)} minutes of reading,{' '}
                    {study?.quiz.length ?? 0} practice questions.
                  </p>
                </div>
                <CopyLinkButton path={`/vietnam/${chapter.id}`} context={chapter.title} className="content-start self-start" />
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="know-title" className="mt-16">
        <h2 id="know-title" className={heading}>
          Before you assign it
        </h2>
        <ul className="reading mt-4 list-disc space-y-3 pl-5 text-ink marker:text-brand">
          <li>
            The unit covers war deaths, executions and the shooting of student protesters, and some photographs show the
            violence of war. Preview the chapters you plan to assign.
          </li>
          <li>Nothing is sent to you. To see how a student did, ask them to show you the results after the quiz.</li>
          <li>
            The study guide has {quizCount} practice questions. They aren’t your test, so tell students which chapters
            yours covers.
          </li>
          <li>
            Footnotes name the sources. Check any source you plan to teach from, and see{' '}
            <Link href="/about" className={textLink}>
              About Us
            </Link>{' '}
            for how the site handles quotations.
          </li>
        </ul>
      </section>
    </div>
  );
}
