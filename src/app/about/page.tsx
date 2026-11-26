import type { Metadata } from 'next';
import Link from 'next/link';
import { Thumb } from '@/components/common/Figure';
import { IMAGE_REGISTRY, RIGHTS_LABEL } from '@/data/vietnam/images';
import { socialMeta } from '@/lib/social';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'How America Unwrapped is written: where the facts come from, when we use quotation marks, and how we handle questions historians still argue about.',
  ...socialMeta(
    'About Us',
    'How America Unwrapped is written: where the facts come from, when we use quotation marks, and how we handle questions historians still argue about.',
  ),
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mt-16">
      <h2 id={`${id}-title`} className="font-display text-2xl font-extrabold tracking-tight text-navy">
        {title}
      </h2>
      <div className="reading mt-5 space-y-5 text-ink">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  const images = Object.values(IMAGE_REGISTRY);

  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header>
        <h1 className="font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">About Us</h1>
        <p className="mt-4 max-w-[44ch] font-serif text-xl leading-snug text-ink">
          America Unwrapped is a history site for high school students. This page explains how it’s written and where it comes from,
          so you can decide how far to trust it.
        </p>
      </header>

      <Section id="facts" title="Where the facts come from">
        <p>
          Each chapter is built from the records of the time, such as cables, letters, treaties, speeches and
          photographs, and from books and articles by historians. A big claim has a small number after it. Click the
          number to see the source, what it supports, and what it doesn’t prove.
        </p>
        <p>
          Words in quotation marks are meant to be the exact words of the source. Where we paraphrase, we leave the
          quotation marks off and cite where the idea comes from. Footnotes name the source, so you can compare it with
          the original yourself.
        </p>
      </Section>

      <Section id="arguments" title="Settled facts and open arguments">
        <p>
          Some things are settled. On the night of August 4, 1964, no North Vietnamese boats attacked the American
          destroyers in the Gulf of Tonkin, and we say so plainly.
        </p>
        <p>
          Other questions are still argued by serious historians: whether the war could have been won, or whether
          Kennedy meant to pull out. For those, we show you the evidence each side uses and leave the judgment to you.
        </p>
        <p>
          Washington, Hanoi and Saigon get the same hard look. We judge people by what they knew at the time, not by
          what we know now, and we try not to sort them into heroes and villains.
        </p>
      </Section>

      <section id="image-credits" aria-labelledby="image-credits-title" className="mt-16">
        <h2 id="image-credits-title" className="font-display text-2xl font-extrabold tracking-tight text-navy">
          Where every image comes from
        </h2>
        <p className="mt-3 max-w-[62ch] text-base text-ink-muted">
          All {images.length} photographs and documents on the site, with who made each one, who holds the original, and
          why we can show it. Most are U.S. government works, which are in the public domain. We don’t use the famous
          news-agency photographs of the war, because those are still under copyright.
        </p>
        <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {images.map((image) => (
            <li key={image.id} className="flex gap-4">
              <Thumb imageId={image.id} size="sm" className="h-24 w-24 shrink-0 rounded-sm" />
              <div className="text-sm leading-relaxed text-ink-muted">
                <p className="leading-snug text-ink">{image.caption}</p>
                <p className="mt-1">
                  {image.creator}, {image.date}. {image.source}
                  {image.archiveId ? ` (${image.archiveId})` : ''}. {RIGHTS_LABEL[image.rights]}.{' '}
                  <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand">
                    Source record
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link href="/vietnam" className="rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover">
          Start reading
        </Link>
        <Link href="/" className="text-sm font-medium text-ink-muted hover:text-brand">
          Back to the home page
        </Link>
      </div>
    </div>
  );
}
