import React from 'react';
import Link from 'next/link';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import Icon from '@/components/common/Icon';

export default function ChapterIndex() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {VIETNAM_CHAPTERS.map((ch) => {
        const study = ALL_CHAPTERS_STUDY_DATA[ch.id];
        return (
          <article
            key={ch.id}
            className="card-surface card-interactive rounded-xl p-6 flex flex-col justify-between group"
          >
            <div>
              {/* Header / Meta */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="eyebrow text-ink-soft">
                  Chapter {ch.number.toString().padStart(2, '0')} &bull; {ch.timeframe}
                </span>
                {ch.isLandmark && (
                  <span className="eyebrow shrink-0 whitespace-nowrap px-2 py-0.5 bg-brand-tint text-brand border border-brand-rule rounded-full">
                    Turning Point
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-editorial-serif text-xl sm:text-2xl font-medium tracking-tight text-ink leading-snug group-hover:text-brand transition-colors">
                <Link href={`/vietnam/${ch.id}`}>
                  {ch.title}
                </Link>
              </h3>

              {/* Central Inquiry Question */}
              <div className="my-4 p-3 bg-parchment-light border-l-2 border-brand rounded-r-md">
                <span className="eyebrow text-brand block mb-1">
                  The Inquiry
                </span>
                <p className="font-editorial-serif text-sm text-ink italic leading-snug">
                  &ldquo;{study?.bigQuestion || ch.subtitle}&rdquo;
                </p>
              </div>

              {/* Analytical Summary */}
              <p className="font-sans text-xs text-ink-muted leading-relaxed mb-4 line-clamp-3">
                {ch.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-rule space-y-3">
              {/* Feature badges */}
              <div className="flex flex-wrap gap-1.5 text-[11px] text-ink-muted">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-parchment-light border border-rule rounded-full">
                  <Icon name="zap" className="w-3 h-3" />60s Briefing
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-parchment-light border border-rule rounded-full">
                  <Icon name="pen" className="w-3 h-3" />{study?.quiz?.length || 3} Quizzes
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-parchment-light border border-rule rounded-full">
                  <Icon name="layers" className="w-3 h-3" />{study?.flashcards?.length || 3} Cards
                </span>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span
                  className="inline-flex items-center gap-1.5 text-ink-soft min-w-0"
                  title={ch.interactiveModule.title}
                >
                  <Icon name="map" className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[150px]">{ch.interactiveModule.title.split(':')[0]}</span>
                </span>
                <Link
                  href={`/vietnam/${ch.id}`}
                  className="font-semibold text-brand hover:underline"
                >
                  Study Chapter &rarr;
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
