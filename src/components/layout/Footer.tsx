import Link from 'next/link';
import { CHAPTER_COUNT, VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';

const linkClass = 'text-ink-muted hover:text-brand';

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-24 bg-parchment text-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Link href="/" className="font-display text-lg font-bold tracking-tight text-ink">
              America Unwrapped
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              American history for high school students, told through the documents, with every quotation checked against the original.
            </p>
          </div>

          <nav aria-labelledby="footer-read">
            <h2 id="footer-read" className="text-sm font-bold text-ink">
              Read
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/vietnam" className={linkClass}>The Vietnam War, all {CHAPTER_COUNT} chapters</Link></li>
              <li><Link href={`/vietnam/${VIETNAM_CHAPTERS[0].id}`} className={linkClass}>Start at Chapter 1</Link></li>
              <li><Link href="/about" className={linkClass}>How we decide what’s true</Link></li>
              <li><Link href="/about#image-credits" className={linkClass}>Image credits</Link></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-study">
            <h2 id="footer-study" className="text-sm font-bold text-ink">
              Study
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/vietnam/study-guide" className={linkClass}>Study guide</Link></li>
              <li><Link href="/vietnam/study-guide#quiz" className={linkClass}>Practice quiz</Link></li>
              <li><Link href="/vietnam/study-guide#flashcards" className={linkClass}>Flashcards</Link></li>
              <li><Link href="/vietnam/study-guide#essays" className={linkClass}>Essay practice</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} America Unwrapped. No ads, no tracking, no accounts.</p>
          <a href="https://github.com/sverma2129-git/AmericaUnwrapped/issues" className="underline underline-offset-2 hover:text-brand">
            Found a mistake? Tell us.
          </a>
        </div>
      </div>
    </footer>
  );
}
