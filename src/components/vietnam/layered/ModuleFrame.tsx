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
 * infographic: opened by a heavy rule and closed by a hairline, with no box.
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
    <figure className={`border-t-2 border-ink pt-4 ${className}`}>
      <h3 className="font-editorial-serif text-xl sm:text-2xl font-semibold text-ink">{question}</h3>
      {instruction && <p className="mt-1 text-[0.9375rem] text-ink-muted">{instruction}</p>}
      <div className="mt-5">{children}</div>
      {(takeaway || caption) && (
        <figcaption className="mt-5 border-t border-rule pt-4 space-y-2 max-w-3xl">
          {takeaway && (
            <p className="text-base text-ink leading-relaxed">
              <strong className="font-semibold">Takeaway:</strong> {takeaway}
            </p>
          )}
          {caption && (
            <p className="text-[0.8125rem] text-ink-soft">
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
