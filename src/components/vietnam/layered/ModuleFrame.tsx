import React from 'react';
import CitationMarker from '@/components/common/CitationMarker';

interface ModuleFrameProps {
  /** Phrased as the question the module answers. */
  question: string;
  instruction?: string;
  children: React.ReactNode;
  takeaway?: string;
  caption?: string;
  citationId?: string;
  className?: string;
}

/**
 * Shared shell for every interactive or visual module: question, one-line
 * instruction, the figure, a takeaway, and a source line. Keeps modules
 * looking like one product instead of twelve.
 */
export default function ModuleFrame({
  question,
  instruction,
  children,
  takeaway,
  caption,
  citationId,
  className = '',
}: ModuleFrameProps) {
  return (
    // overflow-clip (not hidden) so position: sticky children still pin to the viewport
    <figure className={`card-surface rounded-xl overflow-clip ${className}`}>
      <div className="px-5 sm:px-8 pt-5 sm:pt-7 pb-4 border-b border-rule">
        <h3 className="font-editorial-serif text-xl sm:text-2xl font-medium tracking-tight text-ink">{question}</h3>
        {instruction && <p className="mt-1 text-sm text-ink-muted">{instruction}</p>}
      </div>
      {children}
      {(takeaway || caption) && (
        <figcaption className="px-5 sm:px-8 py-4 sm:py-5 border-t border-rule bg-parchment-light space-y-2">
          {takeaway && (
            <p className="text-sm sm:text-base text-ink leading-relaxed">
              <span className="eyebrow text-brand mr-2">Takeaway</span>
              {takeaway}
            </p>
          )}
          {caption && (
            <p className="text-xs text-ink-soft">
              {caption}
              {citationId && (
                <>
                  {' '}Source: <CitationMarker id={citationId} />
                </>
              )}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
