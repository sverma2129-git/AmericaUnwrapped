'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CHAPTER_PARTS } from '@/data/vietnam/chapters';

const NAV = [
  { label: 'Study guide', href: '/vietnam/study-guide' },
  { label: 'About', href: '/about' },
];

/**
 * The masthead. One menu, "Chapters", opens the table of contents in its four
 * parts; everything else is a plain link.
 */
export default function Header() {
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the menu when the page changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const inChapters = pathname === '/vietnam' || (pathname.startsWith('/vietnam/') && !pathname.startsWith('/vietnam/study-guide'));
  const linkClass = (active: boolean) =>
    `relative items-center whitespace-nowrap py-1 text-sm font-medium ${active ? 'text-ink' : 'text-ink-muted hover:text-ink'}`;

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-ink bg-paper">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="whitespace-nowrap font-display text-sm font-extrabold tracking-tight text-ink hover:text-brand sm:text-lg">
          America Unwrapped
        </Link>

        <nav aria-label="Main" className="flex items-center gap-3 sm:gap-7">
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="site-contents"
            onClick={() => setOpen((v) => !v)}
            className={`${linkClass(inChapters || open)} inline-flex cursor-pointer gap-1 sm:gap-1.5`}
          >
            Chapters
            <svg aria-hidden="true" viewBox="0 0 12 12" className={`h-3 w-3 ${open ? 'rotate-180' : ''}`}>
              <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`${linkClass(active)} ${item.href === '/about' ? 'hidden sm:inline-flex' : 'inline-flex'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div id="site-contents" hidden={!open} className="border-t border-rule bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="font-display text-base font-bold text-ink">The Vietnam War, 1945–1975</p>
            <Link href="/vietnam" className="text-sm font-medium text-brand underline decoration-brand-rule underline-offset-4 hover:decoration-brand">
              About this unit
            </Link>
          </div>
          <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHAPTER_PARTS.map((part) => (
              <section key={part.number} aria-labelledby={`menu-part-${part.number}`}>
                <h2 id={`menu-part-${part.number}`} className="border-t border-ink pt-2 text-sm font-bold text-ink">
                  {part.title} <span className="font-normal text-ink-soft">{part.years}</span>
                </h2>
                <ol className="mt-2 space-y-1.5">
                  {part.chapters.map((ch) => {
                    const here = pathname === `/vietnam/${ch.id}`;
                    return (
                      <li key={ch.id}>
                        <Link
                          href={`/vietnam/${ch.id}`}
                          aria-current={here ? 'page' : undefined}
                          className="grid grid-cols-[1.5rem_minmax(0,1fr)] text-sm leading-snug text-ink hover:text-brand aria-[current=page]:text-brand"
                        >
                          <span className="tabular-nums text-ink-soft">{ch.number}</span>
                          <span>{ch.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted sm:hidden">
            <Link href="/about" className="underline decoration-rule-strong underline-offset-4">About this site</Link>
          </p>
        </div>
      </div>
    </header>
  );
}
