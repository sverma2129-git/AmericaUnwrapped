import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'How America Unwrapped decides what is true: evidence first, the same standard for every side, and the original documents one click away.',
};

export default function AboutPage() {
  const editorialRules = [
    {
      number: '01',
      title: 'Evidence Before Conclusion',
      description:
        "We don't start with the answer and go looking for proof. We start with what the records from the time actually say, and let that lead.",
    },
    {
      number: '02',
      title: 'The Same Standard for Every Side',
      description:
        "Washington, Hanoi, and Saigon get the same hard look. American overconfidence and North Vietnam's purges and brutality are both examined with the same care.",
    },
    {
      number: '03',
      title: 'Facts Are Not Opinions',
      description:
        'Some things are settled, like the date and ship movements in the Gulf of Tonkin. Why they happened is often argued about. We tell you which is which.',
    },
    {
      number: '04',
      title: 'No Fake Balance',
      description:
        'When the evidence is overwhelming, like the fact that no North Vietnamese boats attacked on the night of August 4, 1964, we say so plainly. We don\'t invent a "debate" to look even-handed.',
    },
    {
      number: '05',
      title: 'Real Disagreements, Explained',
      description:
        'When serious historians disagree, like over whether the war was winnable or whether Kennedy planned to pull out, we show you the evidence each side uses and let you weigh it.',
    },
    {
      number: '06',
      title: 'Nobody Could See the Future',
      description:
        'People made decisions in confusion, with incomplete information. We judge them by what they knew at the time, not by what we know now.',
    },
    {
      number: '07',
      title: 'People, Not Cartoons',
      description:
        "Presidents, soldiers, and diplomats were real people under real pressure. We don't sort them into heroes and villains.",
    },
    {
      number: '08',
      title: 'Plain Words',
      description:
        'We avoid loaded language. Clear writing explains why things happened better than outrage does.',
    },
    {
      number: '09',
      title: 'Read It Yourself',
      description:
        "Big claims link to the original document: the cable, the treaty, the intelligence report, the Politburo resolution. You don't have to take our word for it.",
    },
    {
      number: '10',
      title: 'Historians, Not Algorithms',
      description:
        'We use AI to help build the site, never as a source of history. The history comes from published scholarship and archival records, and every quotation is checked against the original.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-ink-soft">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href="/"
              className="hover:text-brand transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">&bull;</li>
          <li className="text-brand font-bold" aria-current="page">
            How We Work
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="border-b border-rule pb-10">
        <span className="text-xs uppercase tracking-widest text-brand font-bold">
          About America Unwrapped
        </span>
        <h1 className="mt-3 font-editorial-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
          How we decide what&rsquo;s true
        </h1>
        <p className="mt-4 font-editorial-serif italic text-lg sm:text-2xl text-ink-muted leading-relaxed">
          History is more interesting when you can see the evidence and make up your own mind.
        </p>
      </header>

      {/* Core Philosophy */}
      <section className="py-6 border-b border-rule space-y-4">
        <h2 className="font-editorial-serif text-2xl font-bold text-ink">
          Why this site exists
        </h2>
        <p className="font-editorial-serif text-base sm:text-lg text-ink leading-relaxed">
          Most history online is one of two things: dense academic material that buries students, or opinion pieces that use the past to win today&rsquo;s arguments. Neither helps you understand what actually happened.
        </p>
        <p className="font-editorial-serif text-base sm:text-lg text-ink leading-relaxed">
          We try to do something simpler: tell the story clearly, show you the documents, and keep asking one question about every turning point. Who decided what, what were they assuming, and what happened next? <strong>Decision &rarr; Assumption &rarr; Result &rarr; Consequence</strong>.
        </p>
      </section>

      {/* The 10 Editorial Rules */}
      <section className="py-6 border-b border-rule">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-ink-soft block mb-1">
            Our Rules
          </span>
          <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-ink">
            Ten rules we hold ourselves to
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editorialRules.map((rule) => (
            <div
              key={rule.number}
              className="p-5 border border-rule rounded-xs bg-parchment space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand">
                  RULE {rule.number}
                </span>
              </div>
              <h3 className="font-editorial-serif text-lg font-bold text-ink">
                {rule.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy & Corrections */}
      <section className="py-6 space-y-4">
        <h2 className="font-editorial-serif text-2xl font-bold text-ink">
          No ads, no tracking
        </h2>
        <p className="text-base text-ink leading-relaxed">
          There are no ads, trackers, or accounts here. Nothing about you is collected. The pages are plain files, so they load fast even on a school Chromebook.
        </p>
        <p className="text-base text-ink leading-relaxed">
          If you spot a mistake, please{' '}
          <a
            href="https://github.com/sverma2129-git/AmericaUnwrapped/issues"
            className="text-brand font-semibold hover:underline"
          >
            tell us
          </a>
          . We. We fix errors and note what changed.rsquo;ll check it against the sources and fix it.
        </p>
      </section>

      {/* Return Links */}
      <div className="pt-8 border-t border-rule flex flex-wrap gap-4 items-center justify-between text-xs">
        <Link
          href="/"
          className="text-ink-muted hover:text-brand uppercase tracking-wider font-bold transition-colors"
        >
          &larr; Back to Home
        </Link>
        <Link
          href="/vietnam"
          className="px-5 py-2.5 bg-brand hover:bg-brand-hover text-white uppercase tracking-wider font-bold rounded-xs shadow-xs transition-colors"
        >
          Start Reading &rarr;
        </Link>
      </div>
    </div>
  );
}
