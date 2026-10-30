'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '@/data';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExploreDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setExploreDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Close dropdown and mobile menu when pathname changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setExploreDropdownOpen(false);
    setMobileMenuOpen(false);
  }

  // Group chapters into 4 chronological eras
  const chapterEras = [
    {
      title: 'I. Origins & Division',
      dates: '1945–1963',
      chapters: VIETNAM_CHAPTERS.slice(0, 3),
    },
    {
      title: 'II. Escalation & Air War',
      dates: '1964–1967',
      chapters: VIETNAM_CHAPTERS.slice(3, 6),
    },
    {
      title: 'III. The Crisis of 1968',
      dates: '1968–1971',
      chapters: VIETNAM_CHAPTERS.slice(6, 9),
    },
    {
      title: 'IV. Withdrawal & Fall',
      dates: '1972–1975',
      chapters: VIETNAM_CHAPTERS.slice(9, 12),
    },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-6">
          {/* Masthead Brand */}
          <Link
            href="/"
            className="flex items-baseline gap-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xs"
          >
            <span className="font-editorial-serif text-[1.375rem] font-semibold tracking-tight text-ink group-hover:text-brand transition-colors">
              America Unwrapped
            </span>
            <span className="text-brand font-bold text-xl leading-none">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex self-stretch items-stretch gap-7 text-xs font-semibold uppercase tracking-wider">
            {NAVIGATION_LINKS.map((item) => {
              const isExplore = item.href === '/vietnam';
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(item.href);

              if (isExplore) {
                return (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative flex"
                    onMouseEnter={() => setExploreDropdownOpen(true)}
                    onMouseLeave={() => setExploreDropdownOpen(false)}
                  >
                    <div className="flex items-stretch gap-1">
                      <Link
                        href={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`transition-colors inline-flex items-center relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xs ${
                          isActive
                            ? 'text-ink after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand'
                            : 'text-ink-muted hover:text-ink'
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setExploreDropdownOpen(!exploreDropdownOpen)}
                        aria-expanded={exploreDropdownOpen}
                        aria-haspopup="true"
                        aria-label="Toggle chapters menu"
                        className="self-center text-ink-muted hover:text-ink p-1 cursor-pointer transition-colors"
                      >
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-150 ${exploreDropdownOpen ? 'rotate-180 text-ink' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Explore History Mega-Dropdown */}
                    {exploreDropdownOpen && (
                      <div
                        role="menu"
                        aria-label="Explore History Chapters"
                        className="absolute left-1/2 -translate-x-1/2 top-full w-[720px] bg-surface border border-rule rounded-xl shadow-lg p-6 z-50 text-ink normal-case tracking-normal font-normal"
                      >
                        {/* Top Bar inside Dropdown */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-rule text-xs">
                          <span className="font-editorial-serif text-base font-semibold text-ink">
                            The Vietnam War: 12 Historical Inquiries (1945–1975)
                          </span>
                          <Link
                            href="/vietnam"
                            onClick={() => setExploreDropdownOpen(false)}
                            className="text-brand hover:underline font-semibold"
                          >
                            Explore Overview &rarr;
                          </Link>
                        </div>

                        {/* 4-Column Era Grid */}
                        <div className="grid grid-cols-4 gap-4 text-xs">
                          {chapterEras.map((era, eIdx) => (
                            <div key={eIdx} className="space-y-2.5">
                              <div>
                                <h4 className="eyebrow text-brand">
                                  {era.title}
                                </h4>
                                <span className="text-[10px] text-ink-soft block">
                                  {era.dates}
                                </span>
                              </div>

                              <ul className="space-y-2">
                                {era.chapters.map((ch) => (
                                  <li key={ch.id}>
                                    <Link
                                      href={`/vietnam/${ch.id}`}
                                      onClick={() => setExploreDropdownOpen(false)}
                                      className="block p-2 -mx-2 rounded-md hover:bg-parchment transition-colors group/item"
                                    >
                                      <div className="flex items-center justify-between gap-1 text-[10px] text-ink-soft mb-0.5">
                                        <span>Ch {ch.number.toString().padStart(2, '0')}</span>
                                        {ch.isLandmark && (
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand" title="Key Turning Point" />
                                        )}
                                      </div>
                                      <div className="font-medium text-ink group-hover/item:text-brand transition-colors leading-snug line-clamp-2">
                                        {ch.title.split(':')[0]}
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Quick-Bar inside Dropdown */}
                        <div className="mt-5 pt-3 border-t border-rule flex items-center justify-between text-xs text-ink-muted">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand inline-block" />
                            <span>Indicates pivotal turning point chapters</span>
                          </span>
                          <Link
                            href="/vietnam/study-guide"
                            onClick={() => setExploreDropdownOpen(false)}
                            className="text-brand hover:underline font-semibold"
                          >
                            Unit Cheat Sheet &amp; Quizzes &rarr;
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition-colors inline-flex items-center relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xs ${
                    isActive
                      ? 'text-ink after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-ink hover:text-brand rounded-xs focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="md:hidden border-t border-rule py-4 space-y-1 text-sm font-medium max-h-[80vh] overflow-y-auto"
          >
            {NAVIGATION_LINKS.map((item) => {
              const isExplore = item.href === '/vietnam';
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(item.href);

              if (isExplore) {
                return (
                  <div key={item.href} className="space-y-1">
                    <div className="flex items-center justify-between pr-2">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex-1 py-2.5 px-3 rounded-md transition-colors ${
                          isActive
                            ? 'bg-parchment-light text-brand font-bold'
                            : 'text-ink hover:bg-parchment hover:text-brand'
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                        aria-expanded={mobileExploreOpen}
                        className="p-2 text-ink-muted hover:text-brand cursor-pointer"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-150 ${mobileExploreOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Mobile Chapters Accordion */}
                    {mobileExploreOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-1.5 bg-parchment border-l-2 border-brand ml-3 rounded-r-xs text-xs">
                        {VIETNAM_CHAPTERS.map((ch) => (
                          <Link
                            key={ch.id}
                            href={`/vietnam/${ch.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 px-2 text-ink hover:text-brand transition-colors"
                          >
                            <span className="font-semibold text-brand mr-2">
                              {ch.number.toString().padStart(2, '0')}.
                            </span>
                            {ch.title.split(':')[0]}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-parchment-light text-brand font-bold'
                      : 'text-ink hover:bg-parchment hover:text-brand'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
