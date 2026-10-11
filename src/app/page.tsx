import Link from 'next/link';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Editorial Mission Statement */}
      <section className="text-center border-b border-stone-300 dark:border-stone-800 pb-16 sm:pb-20">
        <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 block mb-4">
          A Digital History Publication &bull; Rigorous &bull; Understandable
        </span>
        <h2 className="font-editorial-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
          History made genuinely understandable through deeply researched, interactive experiences.
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-stone-700 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed font-editorial-serif">
          America Unwrapped exists to explain <em>how</em> history happened, not merely what facts to memorize or what moral conclusion to reach. By revealing the causal chain of decisions, assumptions, and unintended consequences, we bridge the gap between academic depth and digital clarity.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/vietnam"
            className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-archival-mono uppercase tracking-wider font-bold text-stone-100 bg-stone-900 hover:bg-stone-800 dark:text-stone-900 dark:bg-stone-100 dark:hover:bg-stone-200 transition-colors"
          >
            Enter Flagship Experience: The Vietnam War &rarr;
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-archival-mono uppercase tracking-wider font-semibold text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 hover:border-stone-900 transition-colors"
          >
            Editorial Charter &amp; Ten Standards
          </Link>
        </div>
      </section>

      {/* Featured Flagship Project */}
      <section className="py-16 sm:py-20 border-b border-stone-300 dark:border-stone-800">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-2">
          <div>
            <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 block mb-1">
              Flagship Project No. 01
            </span>
            <h3 className="font-editorial-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              The Vietnam War: 1945–1975
            </h3>
          </div>
          <Link
            href="/vietnam"
            className="font-archival-mono text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 underline underline-offset-4 hover:text-stone-950 dark:hover:text-stone-100"
          >
            Explore Interactive Experience &rarr;
          </Link>
        </div>

        {/* Feature Narrative Card */}
        <article className="border border-stone-300 dark:border-stone-800 p-8 sm:p-10 bg-[#f9f7f2] dark:bg-[#161514]">
          <div className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 mb-2">
            12 Chronological Chapters &bull; Archival Facsimiles &bull; Strategic Chessboard
          </div>

          <h4 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
            A Causal Journey Through Thirty Years of Escalation &amp; Collapse
          </h4>

          <p className="mt-4 font-editorial-serif text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
            By the end of this experience, you will understand how the conflict developed from 1945 to 1975, why the U.S. became increasingly involved, what Hanoi believed and wanted, what Washington believed and wanted, why strategies repeatedly failed, and why historians still disagree about its meaning.
          </p>

          {/* Chronological Chapters Index Preview */}
          <div className="mt-10 pt-8 border-t border-stone-300 dark:border-stone-800">
            <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 font-bold block mb-4">
              Table of Contents &bull; 12 Narrative Turning Points
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              {VIETNAM_CHAPTERS.map((ch) => (
                <Link
                  key={ch.id}
                  href={`/vietnam/${ch.id}`}
                  className="p-3.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-900 dark:hover:border-stone-100 transition-colors group flex flex-col justify-between"
                >
                  <div className="font-archival-mono text-[10px] text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
                    {ch.number.toString().padStart(2, '0')} &bull; {ch.timeframe}
                  </div>
                  <div className="font-editorial-serif font-bold text-stone-800 dark:text-stone-200 mt-1 line-clamp-1">
                    {ch.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </section>

      {/* Ten Editorial Principles */}
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mb-8">
          <span className="font-archival-mono text-xs uppercase tracking-widest text-stone-500 block mb-1">
            Our Commitment to Rigor
          </span>
          <h3 className="font-editorial-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            The America Unwrapped Standard
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-stone-700 dark:text-stone-300 text-sm font-sans">
          <div className="space-y-1">
            <div className="font-editorial-serif font-bold text-base text-stone-900 dark:text-stone-100">
              1. Causal Logic Over Memorization
            </div>
            <p className="font-editorial-serif text-stone-600 dark:text-stone-400 leading-relaxed">
              We never present history as a disconnected list of names and dates. Every event was caused by decisions made on specific assumptions.
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-editorial-serif font-bold text-base text-stone-900 dark:text-stone-100">
              2. Symmetrical Scrutiny
            </div>
            <p className="font-editorial-serif text-stone-600 dark:text-stone-400 leading-relaxed">
              We apply the same intellectual standards to Hanoi and Saigon that we apply to Washington: explaining what each actor wanted, believed, knew, and misjudged.
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-editorial-serif font-bold text-base text-stone-900 dark:text-stone-100">
              3. Evidence Before Conclusions
            </div>
            <p className="font-editorial-serif text-stone-600 dark:text-stone-400 leading-relaxed">
              We present primary source documents as authentic artifacts and let the reader inspect the evidence before drawing historical conclusions.
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-editorial-serif font-bold text-base text-stone-900 dark:text-stone-100">
              4. Separate Fact From Interpretation
            </div>
            <p className="font-editorial-serif text-stone-600 dark:text-stone-400 leading-relaxed">
              Where historical consensus exists, we state it clearly. Where historians remain divided, we present the competing schools with scholarly fairness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
