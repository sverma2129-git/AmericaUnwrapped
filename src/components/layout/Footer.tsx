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
              <span className="font-display text-2xl font-bold tracking-tight text-ink block">
                America Unwrapped
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
            <h3 className="text-xs font-bold text-brand mb-3">
              Explore history
            </h3>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>
                <Link href="/vietnam" className="hover:text-brand transition-colors">
                  Unit overview
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
                  How we work
                </Link>
              </li>
              <li>
                <Link href="/about#image-credits" className="hover:text-brand transition-colors">
                  Image credits
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Study Tools */}
          <div>
            <h3 className="text-xs font-bold text-brand mb-3">
              Study tools
            </h3>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>
                <Link href="/vietnam/study-guide" className="font-semibold text-brand hover:underline transition-colors">
                  Study guide
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-brand transition-colors">
                  Cheat sheet
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-brand transition-colors">
                  Practice quiz
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-brand transition-colors">
                  Key terms
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-brand transition-colors">
                  Essay outlines
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
