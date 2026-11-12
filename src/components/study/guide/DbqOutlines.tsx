import React from 'react';
import Disclosure from './Disclosure';
import ExpandAllControls from './ExpandAllControls';
import { DBQ_PROMPTS } from '@/data/vietnam/studyGuide';

export default function DbqOutlines() {
  return (
    <section aria-label="DBQ and Essay Outlines" className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-4">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            High-Yield DBQ &amp; Long Essay Prompts
          </h2>
          <span className="text-xs font-bold text-brand block mb-1">
            Writing &amp; Free-Response Prep
          </span>
          <p className="font-sans text-sm text-ink-muted mt-1">
            Click any prompt to reveal recommended thesis formulas, primary source evidence, and common student errors.
          </p>
        </div>
        <ExpandAllControls targetId="dbq-prompts" />
      </div>

      <div id="dbq-prompts" className="space-y-6">
        {DBQ_PROMPTS.map((dbq) => (
          <Disclosure
            key={dbq.number}
            as="article"
            size="lg"
            summary={
              <>
                <h3 className="font-display text-lg sm:text-xl font-bold text-ink leading-snug">
                  &ldquo;{dbq.prompt}&rdquo;
                </h3>
                <span className="text-xs font-bold text-brand block">
                  Prompt {dbq.number} &middot; {dbq.theme}
                </span>
              </>
            }
          >
            <div className="p-4 bg-white border-l border-brand border-t border-r border-b border-rule rounded-r-xs mt-4">
              <strong className="font-semibold text-brand block mb-1 text-xs">
                Recommended Thesis Formula:
              </strong>
              <p className="text-ink leading-relaxed italic text-xs sm:text-sm">&ldquo;{dbq.thesis}&rdquo;</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-sans text-xs">
              <div className="p-4 bg-white border border-rule rounded-xs space-y-2">
                <strong className="text-xs font-bold text-ink block">
                  Key Evidence to Cite:
                </strong>
                <ul className="list-disc list-inside space-y-1.5 text-ink-muted">
                  {dbq.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-brand-tint border border-brand-rule rounded-xs space-y-2">
                <strong className="text-xs font-bold text-brand block">
                  Common Student Errors:
                </strong>
                <ul className="list-disc list-inside space-y-1.5 text-ink-muted">
                  {dbq.commonErrors.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
