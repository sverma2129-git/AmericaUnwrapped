import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="mt-auto border-t border-[#E8DDC8] bg-[#F7F3EB] text-[#2C2523] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Publication Identity */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-block">
              <span className="font-editorial-serif text-2xl font-bold tracking-tight text-[#2C2523] block">
                America Unwrapped<span className="text-[#8B252D]">.</span>
              </span>
            </Link>
            <p className="font-sans text-sm text-[#5C524E] max-w-sm leading-relaxed">
              A history-learning platform designed for students, combining museum-quality visual storytelling, authentic primary sources, and practical exam study tools.
            </p>
            <div className="pt-2 text-xs text-[#6B5E59] space-y-1">
              <div>Primary Archives: U.S. National Archives (NARA) &bull; FRUS &bull; Wilson Center</div>
              <div>Editorial Rigor: Symmetrical scrutiny &bull; Evidence before conclusions</div>
            </div>
          </div>

          {/* Explore History */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8B252D] mb-3">
              Explore History
            </h3>
            <ul className="space-y-2 text-sm text-[#5C524E]">
              <li>
                <Link href="/vietnam" className="hover:text-[#8B252D] transition-colors">
                  The Vietnam War Hub
                </Link>
              </li>
              <li>
                <Link href="/vietnam/french-indochina-dien-bien-phu" className="hover:text-[#8B252D] transition-colors">
                  Ch. 01: Dien Bien Phu
                </Link>
              </li>
              <li>
                <Link href="/vietnam/gulf-of-tonkin" className="hover:text-[#8B252D] transition-colors">
                  Ch. 04: Gulf of Tonkin
                </Link>
              </li>
              <li>
                <Link href="/vietnam/tet-offensive" className="hover:text-[#8B252D] transition-colors">
                  Ch. 07: Tet Offensive
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#8B252D] transition-colors">
                  Editorial Charter
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Study Tools */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8B252D] mb-3">
              Study Tools
            </h3>
            <ul className="space-y-2 text-sm text-[#5C524E]">
              <li>
                <Link href="/vietnam/study-guide" className="font-semibold text-[#8B252D] hover:underline transition-colors">
                  Master Unit Study Guide &rarr;
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-[#8B252D] transition-colors">
                  1-Page Unit Cheat Sheet
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-[#8B252D] transition-colors">
                  Multi-Chapter Self-Quiz
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-[#8B252D] transition-colors">
                  Key Terms &amp; Flashcards
                </Link>
              </li>
              <li>
                <Link href="/vietnam/study-guide" className="hover:text-[#8B252D] transition-colors">
                  DBQ &amp; Essay Outlines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-12 pt-6 border-t border-[#E8DDC8] flex flex-col sm:flex-row justify-between items-center text-xs text-[#6B5E59] gap-3">
          <p>
            &copy; {new Date().getFullYear()} America Unwrapped. Built for high-school students, educators, and curious minds.
          </p>
          <p className="italic">
            Evidence-First Digital History &bull; Static Archival Edition
          </p>
        </div>
      </div>
    </footer>
  );
}
