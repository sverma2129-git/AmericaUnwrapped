import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/data';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="mt-auto border-t border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-900/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Publication Info */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-lg font-bold tracking-tight uppercase text-stone-900 dark:text-stone-100">
              America Unwrapped
            </h2>
            <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 max-w-md leading-relaxed">
              A digital history publication dedicated to making American history
              understandable, engaging, and intellectually serious.
            </p>
            <p className="mt-2 text-xs text-stone-500 dark:text-stone-500">
              Inaugural project currently in development: The Vietnam War.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
              Index
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-10 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 dark:text-stone-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} America Unwrapped. All rights
            reserved.
          </p>
          <p className="italic">
            Editorial Foundation · Built with Next.js, React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
