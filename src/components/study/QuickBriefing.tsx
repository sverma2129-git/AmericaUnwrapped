'use client';

import React, { useState } from 'react';
import { KeyTerm } from '@/types/study';

interface QuickBriefingProps {
  bigQuestion: string;
  whyItMatters: string;
  summary: string;
  examTakeaways: string[];
  keyTerms: KeyTerm[];
  onSelectTerm?: (term: KeyTerm) => void;
}

export default function QuickBriefing({
  bigQuestion,
  whyItMatters,
  summary,
  examTakeaways,
  keyTerms,
  onSelectTerm,
}: QuickBriefingProps) {
  const [activeTermModal, setActiveTermModal] = useState<KeyTerm | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleTermClick = (term: KeyTerm) => {
    if (onSelectTerm) {
      onSelectTerm(term);
    } else {
      setActiveTermModal(term);
    }
  };

  return (
    <section
      aria-label="Quick Exam Briefing"
      className="my-8 rounded-xs border border-rule bg-parchment p-6 sm:p-8 text-ink shadow-2xs transition-colors"
    >
      {/* Header kicker */}
      <div className={`flex flex-wrap items-center justify-between gap-2 ${isExpanded ? 'border-b border-rule pb-3 mb-5' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-xs text-xs font-bold uppercase tracking-wider bg-brand-tint text-brand border border-brand-rule">
            60-Second Briefing
          </span>
          <span className="text-xs text-ink-muted">
            Exam Essentials &bull; Fast-Read Study Layer
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold text-brand hover:text-brand-hover flex items-center gap-1 cursor-pointer bg-white px-2.5 py-1 rounded-xs border border-rule hover:border-brand transition-colors"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Collapse Briefing' : 'Expand Briefing'}</span>
          <span className="text-[10px]">{isExpanded ? '▲' : '▼'}</span>
        </button>
      </div>

      {!isExpanded && (
        <div className="pt-2 flex items-baseline justify-between gap-4">
          <p className="font-editorial-serif text-base text-ink italic">
            &ldquo;{bigQuestion}&rdquo;
          </p>
          <span className="text-xs text-brand font-medium shrink-0">
            {keyTerms.length} Key Terms &bull; 3 Takeaways
          </span>
        </div>
      )}

      {isExpanded && (
        <div className="animate-in fade-in duration-150">
          {/* The Big Question */}
          <div className="mb-6">
            <span className="block text-xs font-bold uppercase tracking-wider text-brand mb-1">
              The Central Inquiry
            </span>
            <h2 className="font-editorial-serif text-xl sm:text-2xl font-bold text-ink leading-snug">
              {bigQuestion}
            </h2>
            <p className="mt-2.5 font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
              <strong className="text-ink font-semibold">Why It Matters:</strong> {whyItMatters}
            </p>
          </div>

          {/* The 60-Second Summary */}
          <div className="p-4 sm:p-5 rounded-xs bg-paper border border-rule mb-6 space-y-1.5">
            <span className="block text-xs font-bold uppercase tracking-wider text-brand">
              What Happened in Brief
            </span>
            <p className="font-sans text-sm sm:text-base text-ink leading-relaxed">
              {summary}
            </p>
          </div>

          {/* Exam Takeaways & Key Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            {/* Left: 3 Essential Exam Takeaways */}
            <div className="md:col-span-7 space-y-3">
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-brand">
                Key Exam Takeaways (AP &bull; State Standards)
              </span>
              <ul className="space-y-2.5 text-sm font-sans text-ink-muted leading-relaxed">
                {examTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-xs font-bold text-brand mt-0.5 shrink-0">
                      {idx + 1}.
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Key Terms Cards */}
            <div className="md:col-span-5 space-y-3 border-t md:border-t-0 md:border-l border-rule pt-4 md:pt-0 md:pl-6">
              <span className="block text-xs uppercase tracking-wider font-bold text-brand">
                Essential Vocabulary ({keyTerms.length} Terms)
              </span>
              <div className="space-y-2">
                {keyTerms.map((term) => (
                  <button
                    key={term.id}
                    type="button"
                    onClick={() => handleTermClick(term)}
                    className="w-full text-left p-2.5 rounded-xs bg-paper hover:bg-parchment-light border border-rule hover:border-brand transition-all group cursor-pointer"
                  >
                    <div className="flex items-baseline justify-between gap-1">
                      <span className="font-editorial-serif font-bold text-sm text-ink group-hover:text-brand transition-colors">
                        {term.term}
                      </span>
                      {term.phonetic && (
                        <span className="font-mono text-[10px] text-brand italic">
                          [{term.phonetic}]
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-xs text-ink-muted line-clamp-1 mt-0.5">
                      {term.definition}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Term Detail Modal */}
      {activeTermModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-100"
          onClick={() => setActiveTermModal(null)}
        >
          <div
            className="bg-paper border border-rule text-ink max-w-lg w-full p-6 sm:p-7 rounded-xs shadow-xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-rule pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand block">
                  Vocabulary Dossier
                </span>
                <h3 className="font-editorial-serif text-2xl font-bold text-ink">
                  {activeTermModal.term}
                </h3>
                {activeTermModal.phonetic && (
                  <span className="font-mono text-xs text-brand italic">
                    Pronunciation: [{activeTermModal.phonetic}]
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveTermModal(null)}
                aria-label="Close term details"
                className="text-ink-muted hover:text-brand p-1 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3 font-sans text-sm text-ink">
              <div>
                <strong className="block text-xs uppercase text-ink-muted mb-0.5">Definition</strong>
                <p className="leading-relaxed">{activeTermModal.definition}</p>
              </div>

              <div>
                <strong className="block text-xs uppercase text-ink-muted mb-0.5">Historical Significance</strong>
                <p className="leading-relaxed text-ink-muted">{activeTermModal.significance}</p>
              </div>

              {activeTermModal.examTip && (
                <div className="p-3 bg-brand-tint border border-brand-rule rounded-xs text-xs text-brand">
                  <strong className="block uppercase tracking-wider mb-0.5">Exam Strategy Tip</strong>
                  <p>{activeTermModal.examTip}</p>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveTermModal(null)}
                className="px-4 py-2 bg-brand hover:bg-brand-hover text-white text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
