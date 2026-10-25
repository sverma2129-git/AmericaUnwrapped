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
    <header className="sticky top-0 z-40 border-b border-[#E8DDC8] bg-[#FFFEFA]/95 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-6">
          {/* Masthead Brand */}
          <Link
            href="/"
            className="flex items-baseline gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B252D] rounded-xs"
          >
            <span className="font-editorial-serif text-2xl font-bold tracking-tight text-[#2C2523] group-hover:text-[#8B252D] transition-colors">
              America Unwrapped
            </span>
            <span className="text-[#8B252D] font-bold text-xl leading-none">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 text-sm">
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
                    className="relative"
                    onMouseEnter={() => setExploreDropdownOpen(true)}
                    onMouseLeave={() => setExploreDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`transition-colors py-1 relative font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B252D] rounded-xs ${
                          isActive
                            ? 'text-[#8B252D] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8B252D]'
                            : 'text-[#5C524E] hover:text-[#8B252D]'
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
                        className="text-[#5C524E] hover:text-[#8B252D] p-1 cursor-pointer transition-colors"
                      >
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-150 ${exploreDropdownOpen ? 'rotate-180 text-[#8B252D]' : ''}`}
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
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] bg-[#FFFEFA] border border-[#E8DDC8] rounded-xs shadow-xl p-6 z-50 text-[#2C2523] animate-in fade-in duration-150"
                      >
                        {/* Top Bar inside Dropdown */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8DDC8] text-xs">
                          <span className="font-editorial-serif text-sm font-bold text-[#2C2523]">
                            The Vietnam War: 12 Historical Inquiries (1945–1975)
                          </span>
                          <Link
                            href="/vietnam"
                            onClick={() => setExploreDropdownOpen(false)}
                            className="text-[#8B252D] hover:underline font-semibold"
                          >
                            Explore Overview &rarr;
                          </Link>
                        </div>

                        {/* 4-Column Era Grid */}
                        <div className="grid grid-cols-4 gap-4 text-xs">
                          {chapterEras.map((era, eIdx) => (
                            <div key={eIdx} className="space-y-2.5">
                              <div>
                                <h4 className="font-semibold text-[#8B252D] text-[11px] uppercase tracking-wider">
                                  {era.title}
                                </h4>
                                <span className="text-[10px] text-[#6B5E59] block">
                                  {era.dates}
                                </span>
                              </div>

                              <ul className="space-y-2">
                                {era.chapters.map((ch) => (
                                  <li key={ch.id}>
                                    <Link
                                      href={`/vietnam/${ch.id}`}
                                      onClick={() => setExploreDropdownOpen(false)}
                                      className="block p-1.5 -mx-1.5 rounded-xs hover:bg-[#FAF7F2] transition-colors group/item"
                                    >
                                      <div className="flex items-center justify-between gap-1 text-[10px] text-[#6B5E59] mb-0.5">
                                        <span>Ch {ch.number.toString().padStart(2, '0')}</span>
                                        {ch.isLandmark && (
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B252D]" title="Key Turning Point" />
                                        )}
                                      </div>
                                      <div className="font-medium text-[#2C2523] group-hover/item:text-[#8B252D] transition-colors leading-snug line-clamp-2">
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
                        <div className="mt-5 pt-3 border-t border-[#E8DDC8] flex items-center justify-between text-xs text-[#5C524E]">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#8B252D] inline-block" />
                            <span>Indicates pivotal turning point chapters</span>
                          </span>
                          <Link
                            href="/vietnam/study-guide"
                            onClick={() => setExploreDropdownOpen(false)}
                            className="text-[#8B252D] hover:underline font-semibold"
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
                  className={`transition-colors py-1 relative font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B252D] rounded-xs ${
                    isActive
                      ? 'text-[#8B252D] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8B252D]'
                      : 'text-[#5C524E] hover:text-[#8B252D]'
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
            className="md:hidden p-2 text-[#2C2523] hover:text-[#8B252D] rounded-xs focus-visible:ring-2 focus-visible:ring-[#8B252D] cursor-pointer"
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
            className="md:hidden border-t border-[#E8DDC8] py-4 space-y-1 text-base bg-[#FFFEFA] max-h-[80vh] overflow-y-auto"
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
                        className={`flex-1 py-2.5 px-3 rounded-xs transition-colors ${
                          isActive
                            ? 'bg-[#F7F3EB] text-[#8B252D] font-bold'
                            : 'text-[#2C2523] hover:bg-[#FAF7F2] hover:text-[#8B252D]'
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                        aria-expanded={mobileExploreOpen}
                        className="p-2 text-[#5C524E] hover:text-[#8B252D] cursor-pointer"
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
                      <div className="pl-4 pr-2 py-2 space-y-1.5 bg-[#FAF7F2] border-l-2 border-[#8B252D] ml-3 rounded-r-xs text-xs">
                        {VIETNAM_CHAPTERS.map((ch) => (
                          <Link
                            key={ch.id}
                            href={`/vietnam/${ch.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 px-2 text-[#2C2523] hover:text-[#8B252D] transition-colors"
                          >
                            <span className="font-semibold text-[#8B252D] mr-2">
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
                  className={`block py-2.5 px-3 rounded-xs transition-colors ${
                    isActive
                      ? 'bg-[#F7F3EB] text-[#8B252D] font-bold'
                      : 'text-[#2C2523] hover:bg-[#FAF7F2] hover:text-[#8B252D]'
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
