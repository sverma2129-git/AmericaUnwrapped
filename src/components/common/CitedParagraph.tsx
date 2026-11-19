import React from 'react';
import CitationMarker from './CitationMarker';

/** Turns *words* into italics: used for titles of books and words in another language. */
function withItalics(text: string, keyPrefix: string): React.ReactNode[] {
  return text.split(/(\*[^*\n]+\*)/g).map((piece, i) =>
    /^\*[^*\n]+\*$/.test(piece) ? <em key={`${keyPrefix}-${i}`}>{piece.slice(1, -1)}</em> : piece,
  );
}

/** Renders a paragraph, turning inline citation markers into citation buttons. */
export default function CitedParagraph({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\[\^[a-zA-Z0-9_-]+\])/g);
  return (
    <p className={className}>
      {parts.map((part, idx) => {
        const match = part.match(/^\[\^([a-zA-Z0-9_-]+)\]$/);
        if (match) {
          return <CitationMarker key={idx} id={match[1]} />;
        }
        return <React.Fragment key={idx}>{withItalics(part, String(idx))}</React.Fragment>;
      })}
    </p>
  );
}
