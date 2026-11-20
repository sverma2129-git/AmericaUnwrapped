import React from 'react';
import { DBQ_PROMPTS, PAST_AP_QUESTIONS, PAST_AP_QUESTIONS_URL } from '@/data/vietnam/studyGuide';

/**
 * AP-style writing practice. Outlines start closed so the student drafts a
 * thesis first and only then compares it with the sample.
 */
export default function DbqOutlines() {
  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
      <div>
        <h3 className="font-display text-lg font-bold text-navy">Practice prompts</h3>
        <p className="mt-1 max-w-[62ch] text-ink-muted">
          Write your own thesis and list your evidence first. Then open the outline and compare.
        </p>
        <ol className="mt-5 space-y-2">
          {DBQ_PROMPTS.map((dbq) => (
            <li key={dbq.number}>
              <details className="group py-5">
                <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] gap-x-4 gap-y-1 sm:flex sm:items-start [&::-webkit-details-marker]:hidden">
                  <span className="col-span-2 sm:col-span-1 sm:mt-0.5 shrink-0 font-display text-sm font-semibold tabular-nums text-brand">Prompt {dbq.number}</span>
                  <span className="flex-1">
                    <span className="block font-display text-base sm:text-lg font-semibold leading-snug text-ink">{dbq.prompt}</span>
                    <span className="mt-1 block text-sm text-ink-muted">{dbq.theme}</span>
                  </span>
                  <span className="mt-1 shrink-0 text-sm font-semibold text-ink-muted group-hover:text-brand">
                    <span className="group-open:hidden">Show outline</span>
                    <span className="hidden group-open:inline">Hide outline</span>
                  </span>
                </summary>

                <div className="mt-5 space-y-6 sm:pl-[5.25rem]">
                  <div className="border-l-[3px] border-brand pl-5">
                    <p className="font-display text-sm font-semibold text-brand">A sample thesis</p>
                    <p className="mt-1.5 max-w-[66ch] font-serif text-base italic leading-relaxed text-ink">{dbq.thesis}</p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="font-display text-sm font-semibold text-ink">Evidence to use</p>
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-muted marker:text-rule-strong">
                        {dbq.evidence.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-brand">Mistakes to avoid</p>
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-muted marker:text-brand-rule">
                        {dbq.commonErrors.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>

      <aside className="self-start rounded-sm bg-parchment p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold text-navy">Vietnam on past AP exams</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          These are real exam questions, described in our own words. College Board owns the exact wording and keeps older
          exams in AP Classroom, so ask your teacher for the originals and their scoring guidelines.
        </p>
        <ul className="mt-4 space-y-4">
          {PAST_AP_QUESTIONS.map((q) => (
            <li key={q.exam}>
              <p className="font-semibold text-ink">
                {q.exam}: {q.question}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{q.summary}</p>
            </li>
          ))}
        </ul>
        <a
          href={PAST_AP_QUESTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-brand underline decoration-brand-rule underline-offset-2 hover:decoration-brand"
        >
          College Board: past exam questions (recent years)
        </a>
      </aside>
    </div>
  );
}
