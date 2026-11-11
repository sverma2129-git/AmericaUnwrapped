import { PersonalStory } from '@/types/vietnam';
import { isVerbatimQuotation, resolveCitation } from '@/lib/citations';
import CitationMarker from '@/components/common/CitationMarker';
import CitedParagraph from '@/components/common/CitedParagraph';

export default function PersonalStoryCard({ story }: { story: PersonalStory }) {
  const quote = story.quoteCitationId ? resolveCitation(story.quoteCitationId) : null;
  const showQuote = quote !== null && isVerbatimQuotation(quote);

  return (
    <aside
      aria-label={`One person's war: ${story.name}`}
      className="max-w-3xl mx-auto rounded-xl border border-brand-rule bg-brand-tint p-6 sm:p-8 space-y-5"
    >
      <div className="space-y-1">
        <h3 className="font-editorial-serif text-2xl font-bold text-ink">{story.name}</h3>
        <p className="text-sm text-ink-muted">One person&rsquo;s war &middot; {story.role}</p>
      </div>

      <div className="space-y-4 font-sans text-base text-ink leading-relaxed">
        {story.paragraphs.map((p, idx) => (
          <CitedParagraph key={idx} text={p} />
        ))}
      </div>

      {showQuote && (
        <blockquote className="border-l border-brand pl-4 font-editorial-serif text-lg text-ink leading-relaxed">
          &ldquo;{quote.exactQuotation}&rdquo;
          <footer className="mt-2 not-italic text-xs text-ink-muted">
            &mdash; {story.name} <CitationMarker id={quote.id} />
          </footer>
        </blockquote>
      )}

      {story.afterward && (
        <p className="pt-4 border-t border-brand-rule text-sm text-ink-muted leading-relaxed">
          <strong className="text-ink">Afterward:</strong> {story.afterward}
        </p>
      )}
    </aside>
  );
}
