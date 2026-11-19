import type { Metadata } from 'next';
import Link from 'next/link';
import { Thumb } from '@/components/common/Figure';
import { IMAGE_REGISTRY, RIGHTS_LABEL } from '@/data/vietnam/images';

export const metadata: Metadata = {
  title: 'How we work',
  description:
    'How America Unwrapped decides what is true: evidence first, the same standard for every side, and the original documents one click away.',
};

export default function AboutPage() {
  const editorialRules = [
    {
      number: '01',
      title: 'Evidence before conclusions',
      description:
        "We don't start with the answer and go looking for proof. We start with what the records from the time actually say, and let that lead.",
    },
    {
      number: '02',
      title: 'The same standard for every side',
      description:
        "Washington, Hanoi, and Saigon get the same hard look. American overconfidence and North Vietnam's purges and brutality are both examined with the same care.",
    },
    {
      number: '03',
      title: 'Facts are not opinions',
      description:
        'Some things are settled, like the date and ship movements in the Gulf of Tonkin. Why they happened is often argued about. We tell you which is which.',
    },
    {
      number: '04',
      title: 'No fake balance',
      description:
        'When the evidence is overwhelming, like the fact that no North Vietnamese boats attacked on the night of August 4, 1964, we say so plainly. We don\'t invent a "debate" to look even-handed.',
    },
    {
      number: '05',
      title: 'Real disagreements, explained',
      description:
        'When serious historians disagree, like over whether the war was winnable or whether Kennedy planned to pull out, we show you the evidence each side uses and let you weigh it.',
    },
    {
      number: '06',
      title: 'Nobody could see the future',
      description:
        'People made decisions in confusion, with incomplete information. We judge them by what they knew at the time, not by what we know now.',
    },
    {
      number: '07',
      title: 'People, not cartoons',
      description:
        "Presidents, soldiers, and diplomats were real people under real pressure. We don't sort them into heroes and villains.",
    },
    {
      number: '08',
      title: 'Plain words',
      description:
        'We avoid loaded language. Clear writing explains why things happened better than outrage does.',
    },
    {
      number: '09',
      title: 'Read it yourself',
      description:
        "Big claims link to the original document: the cable, the treaty, the intelligence report, the Politburo resolution. You don't have to take our word for it.",
    },
    {
      number: '10',
      title: 'Historians, not algorithms',
      description:
        'We use AI to help build the site, never as a source of history. The history comes from published scholarship and archival records, and every quotation is checked against the original.',
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header>
        <h1 className="font-display text-[2.375rem] font-bold leading-[1.06] tracking-tight text-ink sm:text-[3.25rem]">
          How we decide what’s true
        </h1>
        <p className="mt-4 max-w-[40ch] font-serif text-xl leading-snug text-ink sm:text-[1.4375rem]">
          History is more interesting when you can see the evidence and make up your own mind.
        </p>
      </header>

      <section aria-labelledby="why-title" className="mt-14">
        <h2 id="why-title" className="font-display text-[1.75rem] font-bold tracking-tight text-ink">
          Why this site exists
        </h2>
        <div className="reading mt-4 space-y-5 text-ink">
          <p>
            Most history online is one of two things: dense academic material that buries students, or opinion pieces
            that use the past to win today’s arguments. Neither helps you understand what actually happened.
          </p>
          <p>
            We try to do something simpler: tell the story clearly, show you the documents, and keep asking the same
            questions about every turning point. Who decided what? What were they assuming? What happened next, and what
            did it lead to?
          </p>
        </div>
      </section>

      <section aria-labelledby="rules-title" className="mt-16">
        <h2 id="rules-title" className="font-display text-[1.75rem] font-bold tracking-tight text-ink">
          Ten rules we hold ourselves to
        </h2>
        <ol className="mt-6 divide-y divide-rule border-y border-rule">
          {editorialRules.map((rule, i) => (
            <li key={rule.number} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 py-5 sm:grid-cols-[3rem_minmax(0,1fr)]">
              <span className="font-display text-xl font-bold tabular-nums text-brand">{i + 1}</span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{rule.title}</h3>
                <p className="mt-1 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-muted">{rule.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="privacy-title" className="mt-16">
        <h2 id="privacy-title" className="font-display text-[1.75rem] font-bold tracking-tight text-ink">
          No ads, no tracking
        </h2>
        <div className="mt-4 max-w-[62ch] space-y-4 text-[1.0625rem] leading-relaxed text-ink">
          <p>
            There are no ads, trackers, or accounts here. Nothing about you is collected. The pages are plain files, so
            they load fast even on a school Chromebook.
          </p>
          <p>
            If you spot a mistake, please{' '}
            <a
              href="https://github.com/sverma2129-git/AmericaUnwrapped/issues"
              className="font-semibold text-brand underline decoration-brand-rule underline-offset-2 hover:decoration-brand"
            >
              tell us
            </a>
            . We’ll check it against the sources, fix it, and note what changed.
          </p>
        </div>
      </section>

      <section id="image-credits" aria-labelledby="image-credits-heading" className="mt-16 scroll-mt-28">
        <h2 id="image-credits-heading" className="font-display text-[1.75rem] font-bold tracking-tight text-ink">
          Where every image comes from
        </h2>
        <p className="mt-3 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          Every photograph and document on this site is listed here with who made it, who holds the original, and why we
          are allowed to show it. Most are works of the U.S. government, which are in the public domain. We do not use the
          famous news-agency photographs of the war, because those are still under copyright.
        </p>
        <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {Object.values(IMAGE_REGISTRY).map((image) => (
            <li key={image.id} className="flex gap-4">
              <Thumb imageId={image.id} className="h-24 w-24 shrink-0 rounded-md" />
              <div className="text-sm leading-relaxed text-ink-muted">
                <p className="text-[0.9375rem] leading-snug text-ink">{image.caption}</p>
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

      <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-8">
        <Link href="/vietnam" className="rounded-md bg-brand px-5 py-3 text-[0.9375rem] font-semibold text-white hover:bg-brand-hover">
          Start reading
        </Link>
        <Link href="/" className="text-[0.9375rem] font-semibold text-ink-muted hover:text-brand">
          Back to the home page
        </Link>
      </div>
    </div>
  );
}
