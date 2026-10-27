import React from 'react';
import CitationMarker from './CitationMarker';

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
        return part;
      })}
    </p>
  );
}
