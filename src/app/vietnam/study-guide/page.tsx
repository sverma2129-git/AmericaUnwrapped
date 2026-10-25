'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ALL_CHAPTERS_STUDY_DATA } from '@/data/vietnam/studyData';
import ChapterQuiz from '@/components/study/ChapterQuiz';
import FlashcardDeck from '@/components/study/FlashcardDeck';
import { KeyTerm, QuizQuestion } from '@/types/study';

type ActiveTab = 'cheatsheet' | 'quiz' | 'flashcards' | 'dbq';

export default function StudyGuidePage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('cheatsheet');
  const [quizFilter, setQuizFilter] = useState<'all' | 'early' | 'escalation' | 'collapse'>('all');
  const [glossarySearch, setGlossarySearch] = useState('');
  const [expandedPresidencies, setExpandedPresidencies] = useState<Record<string, boolean>>({
    'truman-ike': true,
    'kennedy': true,
    'johnson': true,
    'nixon': true,
    'ford': true,
  });
  const [expandedDbq, setExpandedDbq] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  });

  const togglePresidency = (id: string) => {
    setExpandedPresidencies((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const setAllPresidencies = (expanded: boolean) => {
    setExpandedPresidencies({
      'truman-ike': expanded,
      'kennedy': expanded,
      'johnson': expanded,
      'nixon': expanded,
      'ford': expanded,
    });
  };

  const toggleDbq = (id: number) => {
    setExpandedDbq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const setAllDbq = (expanded: boolean) => {
    setExpandedDbq({
      1: expanded,
      2: expanded,
      3: expanded,
    });
  };

  // Collect all questions across all chapters
  const allQuestions = useMemo<QuizQuestion[]>(() => {
    return Object.values(ALL_CHAPTERS_STUDY_DATA).flatMap((c) => c.quiz);
  }, []);

  // Filtered quiz questions
  const filteredQuestions = useMemo<QuizQuestion[]>(() => {
    if (quizFilter === 'early') {
      const earlyIds = ['french-indochina-dien-bien-phu', 'geneva-south-vietnam', 'kennedy-and-diem', 'gulf-of-tonkin'];
      return Object.entries(ALL_CHAPTERS_STUDY_DATA)
        .filter(([id]) => earlyIds.includes(id))
        .flatMap(([, c]) => c.quiz);
    }
    if (quizFilter === 'escalation') {
      const escIds = ['americanization-attrition', 'the-secret-war', 'tet-offensive', 'nixon-and-vietnamization'];
      return Object.entries(ALL_CHAPTERS_STUDY_DATA)
        .filter(([id]) => escIds.includes(id))
        .flatMap(([, c]) => c.quiz);
    }
    if (quizFilter === 'collapse') {
      const colIds = ['paris-peace-accords', 'the-collapse', 'aftermath-1975', 'memory-and-the-argument'];
      return Object.entries(ALL_CHAPTERS_STUDY_DATA)
        .filter(([id]) => colIds.includes(id))
        .flatMap(([, c]) => c.quiz);
    }
    return allQuestions;
  }, [quizFilter, allQuestions]);

  // Collect all flashcards across all chapters
  const allFlashcards = useMemo<KeyTerm[]>(() => {
    const map = new Map<string, KeyTerm>();
    Object.values(ALL_CHAPTERS_STUDY_DATA).forEach((c) => {
      c.flashcards.forEach((fc) => {
        if (!map.has(fc.term)) {
          map.set(fc.term, fc);
        }
      });
      c.briefing.keyTerms.forEach((kt) => {
        if (!map.has(kt.term)) {
          map.set(kt.term, kt);
        }
      });
    });
    return Array.from(map.values());
  }, []);

  // Filtered glossary for search
  const filteredGlossary = useMemo(() => {
    if (!glossarySearch.trim()) return allFlashcards;
    const query = glossarySearch.toLowerCase();
    return allFlashcards.filter(
      (item) =>
        item.term.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query) ||
        (item.significance && item.significance.toLowerCase().includes(query))
    );
  }, [allFlashcards, glossarySearch]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 text-[#2C2523]">
      {/* 1. Header & Curriculum Framing */}
      <header className="border-b border-[#E8DDC8] pb-8 sm:pb-12">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-[#5C524E]">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-[#8B252D] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">&bull;</li>
            <li>
              <Link href="/vietnam" className="hover:text-[#8B252D] transition-colors">
                Explore History
              </Link>
            </li>
            <li aria-hidden="true">&bull;</li>
            <li className="text-[#8B252D] font-bold" aria-current="page">
              Study Guide
            </li>
          </ol>
        </nav>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-[#FDF3F3] text-[#8B252D] border border-[#F0C4C7] text-xs font-bold uppercase rounded-xs">
            AP &bull; Honors &bull; Regular U.S. History Curriculum
          </span>
          <span className="text-xs text-[#5C524E]">
            AP Period 8 (1945–1980)
          </span>
        </div>

        <h1 className="font-editorial-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C2523] leading-[1.12]">
          Vietnam War Master Study Guide &amp; Exam Review
        </h1>

        <p className="mt-4 font-editorial-serif italic text-lg sm:text-2xl text-[#5C524E] max-w-3xl leading-relaxed">
          The definitive 1-page unit cheat sheet, interactive practice quizzes with historical rationales, master vocabulary flashcards, and high-yield DBQ essay outlines.
        </p>

        {/* Interactive Mode Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs border-b border-[#E8DDC8] pb-2">
          <button
            onClick={() => setActiveTab('cheatsheet')}
            className={`px-4 py-2.5 rounded-xs border transition-colors cursor-pointer font-semibold ${
              activeTab === 'cheatsheet'
                ? 'bg-[#8B252D] text-white border-[#8B252D]'
                : 'bg-white text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
            }`}
          >
            📋 1-Page Unit Cheat Sheet
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2.5 rounded-xs border transition-colors cursor-pointer font-semibold ${
              activeTab === 'quiz'
                ? 'bg-[#8B252D] text-white border-[#8B252D]'
                : 'bg-white text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
            }`}
          >
            ✍️ Master Practice Quiz ({allQuestions.length} Questions)
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-4 py-2.5 rounded-xs border transition-colors cursor-pointer font-semibold ${
              activeTab === 'flashcards'
                ? 'bg-[#8B252D] text-white border-[#8B252D]'
                : 'bg-white text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
            }`}
          >
            🃏 Flashcards &amp; Glossary ({allFlashcards.length} Terms)
          </button>
          <button
            onClick={() => setActiveTab('dbq')}
            className={`px-4 py-2.5 rounded-xs border transition-colors cursor-pointer font-semibold ${
              activeTab === 'dbq'
                ? 'bg-[#8B252D] text-white border-[#8B252D]'
                : 'bg-white text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
            }`}
          >
            📝 DBQ &amp; Long Essay Outlines
          </button>
        </div>
      </header>

      {/* TAB 1: 1-PAGE UNIT CHEAT SHEET */}
      {activeTab === 'cheatsheet' && (
        <section aria-label="1-Page Cheat Sheet" className="space-y-12">
          {/* Quick Exam Overview Banner */}
          <div className="bg-[#FAF7F2] border-l-4 border-[#8B252D] border-t border-r border-b border-[#E8DDC8] p-6 rounded-r-xs shadow-2xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block mb-1">
              Unit At A Glance &bull; AP U.S. History Period 8 Focus
            </span>
            <h2 className="font-editorial-serif text-2xl font-bold text-[#2C2523]">
              The Essential Core: 30 Years Across 5 Presidencies
            </h2>
            <p className="mt-2 font-sans text-sm sm:text-base text-[#5C524E] leading-relaxed">
              Vietnam is the primary Cold War conflict testing American containment doctrine, executive war powers, and public trust in government. On exams, questions consistently center on <strong>the causes of escalation</strong> (Domino Theory, Tonkin), <strong>the reasons for stalemate</strong> (guerilla warfare, flawed body counts), <strong>the erosion of the home front</strong> (Tet, Credibility Gap), and <strong>the constitutional aftermath</strong> (Pentagon Papers, War Powers Act).
            </p>
          </div>

          {/* 5-Presidency Master Matrix */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8DDC8] pb-3">
              <div>
                <h3 className="font-editorial-serif text-2xl font-bold text-[#2C2523]">
                  1. The Five Presidencies Decision Matrix
                </h3>
                <p className="text-xs text-[#5C524E] mt-0.5">
                  Click any presidency to toggle strategic actions, turning points, and high-yield exam pitfalls.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setAllPresidencies(true)}
                  className="px-2.5 py-1 bg-white hover:bg-[#F7F3EB] border border-[#E8DDC8] text-[#5C524E] rounded-xs font-semibold cursor-pointer transition-colors"
                >
                  Expand All
                </button>
                <button
                  type="button"
                  onClick={() => setAllPresidencies(false)}
                  className="px-2.5 py-1 bg-white hover:bg-[#F7F3EB] border border-[#E8DDC8] text-[#5C524E] rounded-xs font-semibold cursor-pointer transition-colors"
                >
                  Collapse All
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* Truman & Eisenhower */}
              <div className="bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => togglePresidency('truman-ike')}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F3EB] cursor-pointer transition-colors"
                  aria-expanded={expandedPresidencies['truman-ike']}
                >
                  <div className="space-y-1">
                    <div className="font-editorial-serif font-bold text-lg sm:text-xl text-[#2C2523]">
                      Harry Truman &amp; Dwight Eisenhower (1945–1961)
                    </div>
                    <span className="text-xs text-[#8B252D] font-bold block">
                      Doctrine: Containment &amp; Domino Theory
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-[#5C524E] hidden sm:inline">
                      {expandedPresidencies['truman-ike'] ? 'Collapse' : 'Expand'}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-[#E8DDC8] bg-white flex items-center justify-center text-sm font-bold text-[#8B252D]">
                      {expandedPresidencies['truman-ike'] ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {expandedPresidencies['truman-ike'] && (
                  <div className="p-5 pt-0 border-t border-[#E8DDC8]/60 animate-in fade-in duration-150">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans mt-3">
                      <div className="p-3 bg-white border border-[#E8DDC8] rounded-xs">
                        <strong className="font-semibold text-[#2C2523] block mb-1">
                          Key Actions:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Reclassified Ho Chi Minh from nationalist ally to Sino-Soviet proxy. Funded 80% of France’s military costs ($2B). Declined direct airstrikes at Dien Bien Phu (1954).
                        </p>
                      </div>
                      <div className="p-3 bg-white border border-[#E8DDC8] rounded-xs">
                        <strong className="font-semibold text-[#2C2523] block mb-1">
                          Turning Point:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Geneva Accords (1954) partitioned Vietnam at the 17th parallel. Eisenhower backed Ngo Dinh Diem in South Vietnam and cancelled the nationwide 1956 reunification elections.
                        </p>
                      </div>
                      <div className="p-3 bg-[#FDF3F3] border border-[#F0C4C7] rounded-xs">
                        <strong className="font-semibold text-[#8B252D] block mb-1">
                          ⚠️ Exam Pitfall:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Do not confuse Geneva partition with permanent borders: Article 6 explicitly stated the 17th parallel was provisional pending elections.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Kennedy */}
              <div className="bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => togglePresidency('kennedy')}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F3EB] cursor-pointer transition-colors"
                  aria-expanded={expandedPresidencies['kennedy']}
                >
                  <div className="space-y-1">
                    <div className="font-editorial-serif font-bold text-lg sm:text-xl text-[#2C2523]">
                      John F. Kennedy (1961–1963)
                    </div>
                    <span className="text-xs text-[#8B252D] font-bold block">
                      Doctrine: Flexible Response &amp; Counterinsurgency
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-[#5C524E] hidden sm:inline">
                      {expandedPresidencies['kennedy'] ? 'Collapse' : 'Expand'}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-[#E8DDC8] bg-white flex items-center justify-center text-sm font-bold text-[#8B252D]">
                      {expandedPresidencies['kennedy'] ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {expandedPresidencies['kennedy'] && (
                  <div className="p-5 pt-0 border-t border-[#E8DDC8]/60 animate-in fade-in duration-150">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans mt-3">
                      <div className="p-3 bg-white border border-[#E8DDC8] rounded-xs">
                        <strong className="font-semibold text-[#2C2523] block mb-1">
                          Key Actions:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Expanded military advisors from 900 to 16,000. Deployed Special Forces (Green Berets) and authorized chemical defoliation (Agent Orange / Operation Ranch Hand).
                        </p>
                      </div>
                      <div className="p-3 bg-white border border-[#E8DDC8] rounded-xs">
                        <strong className="font-semibold text-[#2C2523] block mb-1">
                          Turning Point:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Strategic Hamlet Program failed by alienating peasants. In November 1963, U.S. tacitly approved the military coup executing President Diem, creating perpetual Saigon political instability.
                        </p>
                      </div>
                      <div className="p-3 bg-[#FDF3F3] border border-[#F0C4C7] rounded-xs">
                        <strong className="font-semibold text-[#8B252D] block mb-1">
                          ⚠️ Exam Pitfall:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          JFK sent advisors and air support, but NO conventional ground combat divisions. Combat troops were committed by LBJ in 1965.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Johnson */}
              <div className="bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => togglePresidency('johnson')}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F3EB] cursor-pointer transition-colors"
                  aria-expanded={expandedPresidencies['johnson']}
                >
                  <div className="space-y-1">
                    <div className="font-editorial-serif font-bold text-lg sm:text-xl text-[#2C2523]">
                      Lyndon B. Johnson (1963–1969)
                    </div>
                    <span className="text-xs text-[#8B252D] font-bold block">
                      Doctrine: Americanization &amp; Attrition
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-[#5C524E] hidden sm:inline">
                      {expandedPresidencies['johnson'] ? 'Collapse' : 'Expand'}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-[#E8DDC8] bg-white flex items-center justify-center text-sm font-bold text-[#8B252D]">
                      {expandedPresidencies['johnson'] ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {expandedPresidencies['johnson'] && (
                  <div className="p-5 pt-0 border-t border-[#E8DDC8]/60 animate-in fade-in duration-150">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans mt-3">
                      <div className="p-3 bg-white border border-[#E8DDC8] rounded-xs">
                        <strong className="font-semibold text-[#2C2523] block mb-1">
                          Key Actions:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Gulf of Tonkin Resolution (1964) provided legislative blank check. Launched Operation Rolling Thunder and deployed 540,000 ground troops by 1968 using search-and-destroy tactics.
                        </p>
                      </div>
                      <div className="p-3 bg-white border border-[#E8DDC8] rounded-xs">
                        <strong className="font-semibold text-[#2C2523] block mb-1">
                          Turning Point:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          January 1968 Tet Offensive shattered claims of progress, created an irreversible &ldquo;Credibility Gap,&rdquo; and forced LBJ to withdraw from the 1968 presidential election.
                        </p>
                      </div>
                      <div className="p-3 bg-[#FDF3F3] border border-[#F0C4C7] rounded-xs">
                        <strong className="font-semibold text-[#8B252D] block mb-1">
                          ⚠️ Exam Pitfall:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Tet was a U.S. military victory (Viet Cong suffered catastrophic casualties) but a decisive political and psychological defeat for Washington.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Nixon */}
              <div className="bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => togglePresidency('nixon')}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F3EB] cursor-pointer transition-colors"
                  aria-expanded={expandedPresidencies['nixon']}
                >
                  <div className="space-y-1">
                    <div className="font-editorial-serif font-bold text-lg sm:text-xl text-[#2C2523]">
                      Richard M. Nixon (1969–1974)
                    </div>
                    <span className="text-xs text-[#8B252D] font-bold block">
                      Doctrine: Vietnamization &amp; &ldquo;Peace with Honor&rdquo;
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-[#5C524E] hidden sm:inline">
                      {expandedPresidencies['nixon'] ? 'Collapse' : 'Expand'}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-[#E8DDC8] bg-white flex items-center justify-center text-sm font-bold text-[#8B252D]">
                      {expandedPresidencies['nixon'] ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {expandedPresidencies['nixon'] && (
                  <div className="p-5 pt-0 border-t border-[#E8DDC8]/60 animate-in fade-in duration-150">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans mt-3">
                      <div className="p-3 bg-white border border-[#E8DDC8] rounded-xs">
                        <strong className="font-semibold text-[#2C2523] block mb-1">
                          Key Actions:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Withdrew U.S. ground troops while expanding air campaigns. Secret bombing of Cambodia (Operation Menu) triggered Kent State shootings (1970). Pentagon Papers leak (1971).
                        </p>
                      </div>
                      <div className="p-3 bg-white border border-[#E8DDC8] rounded-xs">
                        <strong className="font-semibold text-[#2C2523] block mb-1">
                          Turning Point:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Paris Peace Accords (Jan 1973) withdrew all U.S. forces and returned POWs, but left 150,000 North Vietnamese troops inside South Vietnam. War Powers Act passed over Nixon’s veto.
                        </p>
                      </div>
                      <div className="p-3 bg-[#FDF3F3] border border-[#F0C4C7] rounded-xs">
                        <strong className="font-semibold text-[#8B252D] block mb-1">
                          ⚠️ Exam Pitfall:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          The Paris Peace Accords did NOT end the fighting between North and South Vietnam; it only ended direct American military involvement.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Ford */}
              <div className="bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => togglePresidency('ford')}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F3EB] cursor-pointer transition-colors"
                  aria-expanded={expandedPresidencies['ford']}
                >
                  <div className="space-y-1">
                    <div className="font-editorial-serif font-bold text-lg sm:text-xl text-[#2C2523]">
                      Gerald R. Ford (1974–1975)
                    </div>
                    <span className="text-xs text-[#8B252D] font-bold block">
                      Doctrine: Post-Watergate Aid Cuts &amp; Collapse
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-[#5C524E] hidden sm:inline">
                      {expandedPresidencies['ford'] ? 'Collapse' : 'Expand'}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-[#E8DDC8] bg-white flex items-center justify-center text-sm font-bold text-[#8B252D]">
                      {expandedPresidencies['ford'] ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {expandedPresidencies['ford'] && (
                  <div className="p-5 pt-0 border-t border-[#E8DDC8]/60 animate-in fade-in duration-150">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans mt-3">
                      <div className="p-3 bg-white border border-[#E8DDC8] rounded-xs">
                        <strong className="font-semibold text-[#2C2523] block mb-1">
                          Key Actions:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Congress drastically slashed financial and military ammunition subsidies to Saigon. In March 1975, North Vietnam launched the Spring Offensive; South Vietnamese defenses collapsed in 55 days.
                        </p>
                      </div>
                      <div className="p-3 bg-white border border-[#E8DDC8] rounded-xs">
                        <strong className="font-semibold text-[#2C2523] block mb-1">
                          Turning Point:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          April 30, 1975: Fall of Saigon. Operation Frequent Wind evacuated remaining Americans and at-risk South Vietnamese by helicopter from embassy rooftops.
                        </p>
                      </div>
                      <div className="p-3 bg-[#FDF3F3] border border-[#F0C4C7] rounded-xs">
                        <strong className="font-semibold text-[#8B252D] block mb-1">
                          ⚠️ Exam Pitfall:
                        </strong>
                        <p className="text-[#5C524E] leading-relaxed">
                          Saigon fell under President Ford, not Nixon. Ford requested emergency military aid from Congress, which was overwhelmingly refused.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Master Chronology & Landmark Turning Points Table */}
          <div className="space-y-4 pt-6">
            <h3 className="font-editorial-serif text-2xl font-bold text-[#2C2523]">
              2. Landmark Turning Points Timeline
            </h3>

            <div className="overflow-x-auto border border-[#E8DDC8] rounded-xs">
              <table className="w-full text-left font-sans text-xs sm:text-sm">
                <thead className="bg-[#F7F3EB] border-b border-[#E8DDC8] text-xs font-bold uppercase tracking-wider text-[#2C2523]">
                  <tr>
                    <th className="p-3 sm:p-4">Date</th>
                    <th className="p-3 sm:p-4">Event</th>
                    <th className="p-3 sm:p-4">Historical Significance</th>
                    <th className="p-3 sm:p-4">Inquiry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DDC8] bg-white">
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">May 1954</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">Fall of Dien Bien Phu</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">Ended French colonial rule; led directly to 1954 Geneva Accords partitioning Vietnam.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/french-indochina-dien-bien-phu" className="text-[#8B252D] underline">Ch. 01</Link></td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">July 1954</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">Geneva Accords</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">Provisional partition at 17th parallel; 1956 nationwide elections cancelled by Diem with U.S. backing.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/geneva-south-vietnam" className="text-[#8B252D] underline">Ch. 02</Link></td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">Nov 1963</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">Overthrow of Diem</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">Assassination of Ngo Dinh Diem created political vacuum in Saigon, deepening U.S. responsibility.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/kennedy-and-diem" className="text-[#8B252D] underline">Ch. 03</Link></td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2] bg-[#FDF3F3]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">Aug 1964</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">Gulf of Tonkin Resolution</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">Passed 504–2 after phantom radar battle; gave LBJ legal blank check to wage war without congressional declaration.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/gulf-of-tonkin" className="text-[#8B252D] underline font-bold">Ch. 04</Link></td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">Mar 1965</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">Operation Rolling Thunder &amp; Ground Troops</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">Americanized the war: 3,500 Marines landed at Da Nang; 3-year sustained bombing campaign began.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/americanization-attrition" className="text-[#8B252D] underline">Ch. 05</Link></td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2] bg-[#FDF3F3]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">Jan 1968</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">The Tet Offensive</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">Coordinated surprise strikes on 100+ cities; destroyed U.S. public belief that victory was near; broke LBJ presidency.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/tet-offensive" className="text-[#8B252D] underline font-bold">Ch. 07</Link></td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">Nov 1969</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">Vietnamization &amp; Silent Majority</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">Nixon shifted combat burden to ARVN while appealing to the conservative Silent Majority.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/nixon-and-vietnamization" className="text-[#8B252D] underline">Ch. 08</Link></td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">June 1971</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">The Pentagon Papers</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">Leaked DoD study revealed systematic government deception across four administrations; affirmed press freedom in NYT v. US.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/memory-and-the-argument" className="text-[#8B252D] underline">Ch. 12</Link></td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">Jan 1973</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">Paris Peace Accords</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">All U.S. combat troops withdrew; Hanoi retained 150,000 troops in South Vietnam.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/paris-peace-accords" className="text-[#8B252D] underline">Ch. 09</Link></td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2] bg-[#FDF3F3]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">Nov 1973</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">War Powers Act of 1973</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">Enacted over Nixon’s veto to curtail undeclared presidential wars; mandates 48-hr reporting and 60-day troop deployment limit.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/aftermath-1975" className="text-[#8B252D] underline font-bold">Ch. 11</Link></td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F2]">
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#8B252D] whitespace-nowrap">Apr 1975</td>
                    <td className="p-3 sm:p-4 font-semibold text-[#2C2523]">Fall of Saigon</td>
                    <td className="p-3 sm:p-4 text-[#5C524E]">NVA captured Saigon; Vietnam reunified under communist rule; U.S. completed Operation Frequent Wind evacuation.</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs"><Link href="/vietnam/the-collapse" className="text-[#8B252D] underline">Ch. 10</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* TAB 2: MASTER PRACTICE QUIZ */}
      {activeTab === 'quiz' && (
        <section aria-label="Master Practice Quiz" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DDC8] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block mb-1">
                Self-Grading Assessment Mode
              </span>
              <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#2C2523]">
                Multi-Chapter Master Practice Quiz
              </h2>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-1.5 text-xs">
              <button
                onClick={() => setQuizFilter('all')}
                className={`px-3 py-1.5 rounded-xs border cursor-pointer font-medium ${
                  quizFilter === 'all'
                    ? 'bg-[#8B252D] text-white border-[#8B252D] font-bold'
                    : 'bg-white text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
                }`}
              >
                All Chapters ({allQuestions.length})
              </button>
              <button
                onClick={() => setQuizFilter('early')}
                className={`px-3 py-1.5 rounded-xs border cursor-pointer font-medium ${
                  quizFilter === 'early'
                    ? 'bg-[#8B252D] text-white border-[#8B252D] font-bold'
                    : 'bg-white text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
                }`}
              >
                Ch. 1–4: Origins &amp; Tonkin
              </button>
              <button
                onClick={() => setQuizFilter('escalation')}
                className={`px-3 py-1.5 rounded-xs border cursor-pointer font-medium ${
                  quizFilter === 'escalation'
                    ? 'bg-[#8B252D] text-white border-[#8B252D] font-bold'
                    : 'bg-white text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
                }`}
              >
                Ch. 5–8: Escalation &amp; Tet
              </button>
              <button
                onClick={() => setQuizFilter('collapse')}
                className={`px-3 py-1.5 rounded-xs border cursor-pointer font-medium ${
                  quizFilter === 'collapse'
                    ? 'bg-[#8B252D] text-white border-[#8B252D] font-bold'
                    : 'bg-white text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
                }`}
              >
                Ch. 9–12: Withdrawal &amp; Legacy
              </button>
            </div>
          </div>

          <ChapterQuiz
            key={quizFilter}
            questions={filteredQuestions}
            title={`Vietnam War Practice Test (${filteredQuestions.length} Questions)`}
          />
        </section>
      )}

      {/* TAB 3: MASTER FLASHCARDS & GLOSSARY */}
      {activeTab === 'flashcards' && (
        <section aria-label="Flashcards and Glossary" className="space-y-12">
          {/* Interactive Card Deck */}
          <div>
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block mb-1">
                Interactive Vocabulary Deck
              </span>
              <h2 className="font-editorial-serif text-2xl font-bold text-[#2C2523]">
                Flip Cards: High-Yield Terms ({allFlashcards.length} Total)
              </h2>
            </div>
            <FlashcardDeck
              cards={allFlashcards}
              title="Unit Key Terms &amp; Concepts"
            />
          </div>

          {/* Master Searchable Glossary Table */}
          <div className="space-y-4 pt-8 border-t border-[#E8DDC8]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h3 className="font-editorial-serif text-2xl font-bold text-[#2C2523]">
                  Searchable Unit Glossary
                </h3>
                <p className="font-sans text-xs text-[#5C524E] mt-0.5">
                  Complete alphabetical index with definitions, historical significance, and exam tips.
                </p>
              </div>

              {/* Search Bar */}
              <input
                type="text"
                placeholder="Search vocabulary or concept..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="px-3.5 py-2 text-xs border border-[#E8DDC8] bg-white text-[#2C2523] rounded-xs w-full sm:w-72 focus:outline-hidden focus:border-[#8B252D]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="p-4 bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs space-y-2"
                >
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#E8DDC8] pb-1.5">
                    <span className="font-editorial-serif font-bold text-base text-[#2C2523]">
                      {item.term}
                    </span>
                    {item.phonetic && (
                      <span className="font-mono text-xs text-[#8B252D] italic">
                        [{item.phonetic}]
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-xs text-[#2C2523] leading-relaxed">
                    <strong>Definition:</strong> {item.definition}
                  </p>
                  {item.significance && (
                    <p className="font-sans text-xs text-[#5C524E] leading-relaxed">
                      <strong>Significance:</strong> {item.significance}
                    </p>
                  )}
                  {item.examTip && (
                    <div className="pt-1 text-xs text-[#8B252D]">
                      💡 <strong>Exam Tip:</strong> {item.examTip}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TAB 4: DBQ & ESSAY OUTLINES */}
      {activeTab === 'dbq' && (
        <section aria-label="DBQ and Essay Outlines" className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8DDC8] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block mb-1">
                Writing &amp; Free-Response Prep
              </span>
              <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#2C2523]">
                High-Yield DBQ &amp; Long Essay Prompts
              </h2>
              <p className="font-sans text-sm text-[#5C524E] mt-1">
                Click any prompt to reveal recommended thesis formulas, primary source evidence, and common student errors.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={() => setAllDbq(true)}
                className="px-2.5 py-1 bg-white hover:bg-[#F7F3EB] border border-[#E8DDC8] text-[#5C524E] rounded-xs font-semibold cursor-pointer transition-colors"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={() => setAllDbq(false)}
                className="px-2.5 py-1 bg-white hover:bg-[#F7F3EB] border border-[#E8DDC8] text-[#5C524E] rounded-xs font-semibold cursor-pointer transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Prompt 1 */}
            <article className="bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs overflow-hidden transition-all">
              <button
                type="button"
                onClick={() => toggleDbq(1)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#F7F3EB] cursor-pointer transition-colors"
                aria-expanded={expandedDbq[1]}
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                    Prompt No. 01 &bull; Escalation &amp; Foreign Policy
                  </span>
                  <h3 className="font-editorial-serif text-lg sm:text-xl font-bold text-[#2C2523] leading-snug">
                    &ldquo;Evaluate the relative importance of Cold War containment ideology versus domestic political calculations in driving U.S. escalation in Vietnam between 1950 and 1965.&rdquo;
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-1">
                  <span className="text-xs text-[#5C524E] hidden sm:inline">
                    {expandedDbq[1] ? 'Collapse' : 'Expand'}
                  </span>
                  <span className="w-6 h-6 rounded-full border border-[#E8DDC8] bg-white flex items-center justify-center text-sm font-bold text-[#8B252D]">
                    {expandedDbq[1] ? '−' : '+'}
                  </span>
                </div>
              </button>

              {expandedDbq[1] && (
                <div className="p-6 pt-0 border-t border-[#E8DDC8]/60 space-y-4 animate-in fade-in duration-150">
                  <div className="p-4 bg-white border-l-4 border-[#8B252D] border-t border-r border-b border-[#E8DDC8] rounded-r-xs mt-4">
                    <strong className="font-semibold text-[#8B252D] block mb-1 uppercase text-xs">
                      Recommended Thesis Formula:
                    </strong>
                    <p className="text-[#2C2523] leading-relaxed italic text-xs sm:text-sm">
                      &ldquo;Although the ideological doctrine of Cold War containment (the Domino Theory) provided the public justification for intervention, domestic political imperatives—specifically presidential fear of being accused of &lsquo;losing Vietnam&rsquo; following the fall of China—were the decisive factor driving escalation under Eisenhower, Kennedy, and Johnson.&rdquo;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-sans text-xs">
                    <div className="p-4 bg-white border border-[#E8DDC8] rounded-xs space-y-2">
                      <strong className="text-xs font-bold uppercase tracking-wider text-[#2C2523] block">
                        Key Evidence to Cite:
                      </strong>
                      <ul className="list-disc list-inside space-y-1.5 text-[#5C524E]">
                        <li>Eisenhower’s April 1954 press conference (Domino Theory)</li>
                        <li>Funding 80% of French military costs post-Korean War</li>
                        <li>OPLAN 34A covert commando operations</li>
                        <li>Gulf of Tonkin Resolution passed right before 1964 election against Barry Goldwater</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-[#FDF3F3] border border-[#F0C4C7] rounded-xs space-y-2">
                      <strong className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                        ⚠️ Common Student Errors:
                      </strong>
                      <ul className="list-disc list-inside space-y-1.5 text-[#5C524E]">
                        <li>Treating containment as the only motive without exploring domestic political pressures</li>
                        <li>Failing to mention the Korean War context and &ldquo;loss of China&rdquo; syndrome</li>
                        <li>Assuming the Gulf of Tonkin incident was an unprovoked surprise</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </article>

            {/* Prompt 2 */}
            <article className="bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs overflow-hidden transition-all">
              <button
                type="button"
                onClick={() => toggleDbq(2)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#F7F3EB] cursor-pointer transition-colors"
                aria-expanded={expandedDbq[2]}
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                    Prompt No. 02 &bull; Media, Public Opinion &amp; Credibility
                  </span>
                  <h3 className="font-editorial-serif text-lg sm:text-xl font-bold text-[#2C2523] leading-snug">
                    &ldquo;Analyze the extent to which media coverage and declassified revelations created the &lsquo;Credibility Gap&rsquo; and transformed American public support for the war between 1965 and 1973.&rdquo;
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-1">
                  <span className="text-xs text-[#5C524E] hidden sm:inline">
                    {expandedDbq[2] ? 'Collapse' : 'Expand'}
                  </span>
                  <span className="w-6 h-6 rounded-full border border-[#E8DDC8] bg-white flex items-center justify-center text-sm font-bold text-[#8B252D]">
                    {expandedDbq[2] ? '−' : '+'}
                  </span>
                </div>
              </button>

              {expandedDbq[2] && (
                <div className="p-6 pt-0 border-t border-[#E8DDC8]/60 space-y-4 animate-in fade-in duration-150">
                  <div className="p-4 bg-white border-l-4 border-[#8B252D] border-t border-r border-b border-[#E8DDC8] rounded-r-xs mt-4">
                    <strong className="font-semibold text-[#8B252D] block mb-1 uppercase text-xs">
                      Recommended Thesis Formula:
                    </strong>
                    <p className="text-[#2C2523] leading-relaxed italic text-xs sm:text-sm">
                      &ldquo;Uncensored television broadcasting and investigative leaks fundamentally dismantled official government optimism, turning the 1968 Tet Offensive into a decisive psychological turning point and cementing a permanent crisis of public trust in federal institutions.&rdquo;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-sans text-xs">
                    <div className="p-4 bg-white border border-[#E8DDC8] rounded-xs space-y-2">
                      <strong className="text-xs font-bold uppercase tracking-wider text-[#2C2523] block">
                        Key Evidence to Cite:
                      </strong>
                      <ul className="list-disc list-inside space-y-1.5 text-[#5C524E]">
                        <li>The living-room war: Morley Safer’s Cam Ne report (1965)</li>
                        <li>Walter Cronkite’s February 1968 CBS broadcast (&ldquo;mired in stalemate&rdquo;)</li>
                        <li>Daniel Ellsberg’s leak of the Pentagon Papers (1971)</li>
                        <li>New York Times Co. v. United States affirming First Amendment prior restraint bans</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-[#FDF3F3] border border-[#F0C4C7] rounded-xs space-y-2">
                      <strong className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                        ⚠️ Common Student Errors:
                      </strong>
                      <ul className="list-disc list-inside space-y-1.5 text-[#5C524E]">
                        <li>Failing to distinguish between military victory and psychological defeat during Tet</li>
                        <li>Calling television news biased rather than contrasting official casualty reports with televised combat</li>
                        <li>Omitting the Supreme Court precedent set by the Pentagon Papers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </article>

            {/* Prompt 3 */}
            <article className="bg-[#FAF7F2] border border-[#E8DDC8] rounded-xs overflow-hidden transition-all">
              <button
                type="button"
                onClick={() => toggleDbq(3)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#F7F3EB] cursor-pointer transition-colors"
                aria-expanded={expandedDbq[3]}
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                    Prompt No. 03 &bull; Constitutional War Powers
                  </span>
                  <h3 className="font-editorial-serif text-lg sm:text-xl font-bold text-[#2C2523] leading-snug">
                    &ldquo;Evaluate the extent to which the Vietnam War produced a lasting constitutional rebalancing between executive and legislative war powers.&rdquo;
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-1">
                  <span className="text-xs text-[#5C524E] hidden sm:inline">
                    {expandedDbq[3] ? 'Collapse' : 'Expand'}
                  </span>
                  <span className="w-6 h-6 rounded-full border border-[#E8DDC8] bg-white flex items-center justify-center text-sm font-bold text-[#8B252D]">
                    {expandedDbq[3] ? '−' : '+'}
                  </span>
                </div>
              </button>

              {expandedDbq[3] && (
                <div className="p-6 pt-0 border-t border-[#E8DDC8]/60 space-y-4 animate-in fade-in duration-150">
                  <div className="p-4 bg-white border-l-4 border-[#8B252D] border-t border-r border-b border-[#E8DDC8] rounded-r-xs mt-4">
                    <strong className="font-semibold text-[#8B252D] block mb-1 uppercase text-xs">
                      Recommended Thesis Formula:
                    </strong>
                    <p className="text-[#2C2523] leading-relaxed italic text-xs sm:text-sm">
                      &ldquo;While the War Powers Act of 1973 formally asserted congressional authority over undeclared warfare in reaction to the Tonkin Resolution and Cambodia incursions, subsequent presidential practice has consistently questioned its constitutionality, resulting in only partial and contested executive restraint.&rdquo;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-sans text-xs">
                    <div className="p-4 bg-white border border-[#E8DDC8] rounded-xs space-y-2">
                      <strong className="text-xs font-bold uppercase tracking-wider text-[#2C2523] block">
                        Key Evidence to Cite:
                      </strong>
                      <ul className="list-disc list-inside space-y-1.5 text-[#5C524E]">
                        <li>Article I, Sec. 8 (Congress declares war) vs. Article II (President as Commander-in-Chief)</li>
                        <li>Gulf of Tonkin Resolution as functional declaration of war</li>
                        <li>Secret bombing of Cambodia conducted without congressional notification</li>
                        <li>Congressional veto override of Nixon’s War Powers Act veto in November 1973</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-[#FDF3F3] border border-[#F0C4C7] rounded-xs space-y-2">
                      <strong className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
                        ⚠️ Common Student Errors:
                      </strong>
                      <ul className="list-disc list-inside space-y-1.5 text-[#5C524E]">
                        <li>Thinking the War Powers Act was signed into law willingly by the President (it was passed over veto)</li>
                        <li>Failing to mention the 48-hour notification and 60-day deadline specifics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </article>
          </div>
        </section>
      )}

      {/* 5. Bottom Navigation Footer */}
      <footer className="border-t border-[#E8DDC8] pt-8 flex flex-wrap items-center justify-between gap-4 text-xs">
        <Link
          href="/vietnam"
          className="text-[#5C524E] hover:text-[#8B252D] uppercase tracking-wider font-semibold"
        >
          &larr; Back to Explore History
        </Link>
        <Link
          href="/vietnam/french-indochina-dien-bien-phu"
          className="px-5 py-2.5 bg-[#8B252D] hover:bg-[#731E25] text-white uppercase tracking-wider font-semibold rounded-xs shadow-xs transition-colors"
        >
          Begin Chapter 01: Dien Bien Phu &rarr;
        </Link>
      </footer>
    </div>
  );
}
