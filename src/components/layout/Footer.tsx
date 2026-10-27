import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="mt-auto border-t border-rule bg-parchment-light text-ink transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Publication Identity */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-block">
              <span className="font-editorial-serif text-2xl font-bold tracking-tight text-ink block">
                America Unwrapped<span className="text-brand">.</span>
              </span>
            </Link>
            <p className="font-sans text-sm text-ink-muted max-w-sm leading-relaxed">
              American history for students who want the real story: what happened, why, and how we know. Built with the documents in plain sight.
            </p>
            <div className="pt-2 text-xs text-ink-soft space-y-1">
              <div>Primary Archives: U.S. National Archives (NARA) &bull; FRUS &bull; Wilson Center</div>
              <div>Same standard for every side &bull; Evidence first, conclusions second</div>
            </div>
          </div>

          {/* Explore History */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand mb-3">
              Explore History
            </h3>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>
                <Link href="/vietnam" className="hover:text-brand transition-colors">
                  The Vietnam War Hub
                </Link>
              </li>
              <li>
                <Link href="/vietnam/french-indochina-dien-bien-phu" className="hover:text-brand transition-colors">
                  Ch. 01: Dien Bien Phu
                </Link>
              </li>
              <li>
                <Link href="/vietnam/gulf-of-tonkin" className="hover:text-brand transition-colors">
                  Ch. 04: Gulf of Tonkin
                </Link>
              </li>
              <li>
                <Link href="/vietnam/tet-offensive" className="hover:text-brand transition-colors">
                  Ch. 07: Tet Offensive
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand transition-colors">
                  How We Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Study Tools */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand mb-3">
              Study Tools
            </h3>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>
                <Link href="/vietnam/study-guide" className="font-semibold text-brand hover:underline transition-colors">
                  Master Unit Study Guide &rarr;
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-brand transition-colors">
                  1-Page Unit Cheat Sheet
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-brand transition-colors">
                  Multi-Chapter Self-Quiz
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-brand transition-colors">
                  Key Terms &amp; Flashcards
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-brand transition-colors">
                  DBQ &amp; Essay Outlines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-12 pt-6 border-t border-rule flex flex-col sm:flex-row justify-between items-center text-xs text-ink-soft gap-3">
          <p>
            &copy; {new Date().getFullYear()} America Unwrapped. Made for high-school students, teachers, and anyone curious.
          </p>
          <p>
            No ads. No tracking.{' '}
            <a
              href="https://github.com/sverma2129-git/AmericaUnwrapped/issues"
              className="underline hover:text-brand transition-colors"
            >
              Found a mistake? Tell us.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
