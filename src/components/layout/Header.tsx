'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '@/data';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-[#121110]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top utility bar */}
        <div className="py-2 text-center text-xs tracking-widest uppercase text-stone-500 border-b border-stone-200/60 dark:border-stone-800/60 dark:text-stone-400">
          A Digital History Publication · Independent &amp; Rigorous
        </div>

        {/* Masthead Branding */}
        <div className="py-6 sm:py-8 text-center">
          <Link
            href="/"
            className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-800 rounded-sm"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-stone-900 dark:text-stone-100 font-bold uppercase transition-colors group-hover:text-stone-700 dark:group-hover:text-stone-300">
              America Unwrapped
            </h1>
            <p className="mt-2 text-xs sm:text-sm tracking-widest uppercase text-stone-600 dark:text-stone-400 font-sans font-medium">
              Understandable · Engaging · Intellectually Serious
            </p>
          </Link>
        </div>

        {/* Navigation Bar */}
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-center border-t border-stone-200/80 dark:border-stone-800/80 py-3"
        >
          <ul className="flex items-center gap-6 sm:gap-10 text-sm font-medium tracking-wider uppercase">
            {NAVIGATION_LINKS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`transition-colors py-1 px-1 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-800 rounded-sm ${
                      isActive
                        ? 'text-stone-950 dark:text-stone-100 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-stone-900 dark:after:bg-stone-100'
                        : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
