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
 * Shared frame for every interactive or visual module: question, one-line
 * instruction, the figure, a takeaway, and a source line. Set like a newspaper
 * infographic: title above, caption below, and no box or rules around it.
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
    <figure className={className}>
      <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">{question}</h3>
      {instruction && <p className="mt-1 text-sm text-ink-muted">{instruction}</p>}
      <div className="mt-5">{children}</div>
      {(takeaway || caption) && (
        <figcaption className="mt-6 space-y-2 max-w-3xl">
          {takeaway && (
            <p className="border-l-2 border-brand pl-4 font-serif text-lg leading-snug text-ink">{takeaway}</p>
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
