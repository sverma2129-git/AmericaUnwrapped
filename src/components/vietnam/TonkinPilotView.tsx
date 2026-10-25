'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChapterData } from '@/types/vietnam';
import { TONKIN_STUDY_DATA } from '@/data/vietnam/studyData';
import QuickBriefing from '@/components/study/QuickBriefing';
import ChapterQuiz from '@/components/study/ChapterQuiz';
import FlashcardDeck from '@/components/study/FlashcardDeck';
import VocabTooltip from '@/components/study/VocabTooltip';
import TonkinInvestigationModule from '@/components/vietnam/TonkinInvestigationModule';
import CausalFlowViewer from '@/components/vietnam/CausalFlowViewer';
import DualPerspectiveViewer from '@/components/vietnam/DualPerspectiveViewer';
import DocumentInspector from '@/components/vietnam/DocumentInspector';
import CitationMarker from '@/components/common/CitationMarker';
import { useCitation } from '@/components/common/CitationContext';

function FormattedParagraph({ text, className = '' }: { text: string; className?: string }) {
  const parts = text.split(/(\[\^[a-zA-Z0-9_-]+\])/g);
  return (
    <p className={className}>
      {parts.map((part, idx) => {
        const match = part.match(/^\[\^([a-zA-Z0-9_-]+)\]$/);
        if (match) {
          return <CitationMarker key={idx} id={match[1]} />;
        }
        if (part.includes('OPLAN 34A')) {
          const subparts = part.split(/(OPLAN 34A)/g);
          return (
            <React.Fragment key={idx}>
              {subparts.map((sp, sIdx) =>
                sp === 'OPLAN 34A' ? (
                  <VocabTooltip
                    key={sIdx}
                    term="OPLAN 34A"
                    definition="Covert South Vietnamese commando sabotage raids along North Vietnam's coastline."
                    significance="Prompted North Vietnam to treat the nearby USS Maddox as an active combat participant."
                  >
                    OPLAN 34A
                  </VocabTooltip>
                ) : (
                  sp
                )
              )}
            </React.Fragment>
          );
        }
        if (part.includes('DeSoto patrol')) {
          const subparts = part.split(/(DeSoto patrol)/g);
          return (
            <React.Fragment key={idx}>
              {subparts.map((sp, sIdx) =>
                sp === 'DeSoto patrol' ? (
                  <VocabTooltip
                    key={sIdx}
                    term="DeSoto Patrol"
                    definition="U.S. Navy electronic intelligence collection patrols cruising off the North Vietnamese coast."
                    significance="Operating in the same waters as OPLAN 34A commando raids."
                  >
                    DeSoto patrol
                  </VocabTooltip>
                ) : (
                  sp
                )
              )}
            </React.Fragment>
          );
        }
        if (part.includes('War Powers Act of 1973')) {
          const subparts = part.split(/(War Powers Act of 1973)/g);
          return (
            <React.Fragment key={idx}>
              {subparts.map((sp, sIdx) =>
                sp === 'War Powers Act of 1973' ? (
                  <VocabTooltip
                    key={sIdx}
                    term="War Powers Act of 1973"
                    definition="Federal law requiring the President to notify Congress within 48 hours of troop deployment and limit undeclared actions to 60 days."
                    significance="Passed over Nixon's veto in direct legislative reaction to Tonkin and the Pentagon Papers."
                  >
                    War Powers Act of 1973
                  </VocabTooltip>
                ) : (
                  sp
                )
              )}
            </React.Fragment>
          );
        }
        return part;
      })}
    </p>
  );
}

interface TonkinPilotViewProps {
  chapter: ChapterData;
  nextChapterId?: string;
  nextChapterTitle?: string;
}

export default function TonkinPilotView({
  chapter,
  nextChapterId,
  nextChapterTitle,
}: TonkinPilotViewProps) {
  const { openCitation } = useCitation();
  const [showDeepResearch, setShowDeepResearch] = useState(false);

  // Subheaded story paragraphs from research
  const storySections = [
    {
      title: 'I. Covert Raids & The August 2 Daylight Clash',
      subtitle: 'Why U.S. destroyers were operating off North Vietnam’s coast',
      paragraphs: [
        'Throughout early 1964, South Vietnam’s military situation worsened rapidly following the assassination of President Ngo Dinh Diem. In response, the Johnson administration authorized OPLAN 34A—covert South Vietnamese naval commando raids carrying out sabotage against North Vietnamese coastal radar installations and communication centers.[^c4-1]',
        'Operating in the same waters was the USS Maddox on a DeSoto patrol—a high-tech electronic intelligence gathering mission intercepting coastal radio communications. On the night of July 30–31, South Vietnamese gunboats shelled radar towers on the islands of Hon Me and Hon Ngu. North Vietnamese naval commanders reasonably concluded that the U.S. destroyer cruising just offshore was actively directing the commando assault.',
        'On the afternoon of August 2, 1964, three North Vietnamese P-4 torpedo boats engaged the USS Maddox in broad daylight in international waters.[^Q024] In the ensuing firefight, carrier aircraft from the USS Ticonderoga damaged the patrol boats, while the Maddox was struck by a single 14.5mm machine-gun bullet. This August 2 clash was a confirmed, real battle—prompting President Johnson to send a second destroyer, the USS Turner Joy, back into the Gulf to assert American naval presence.',
      ],
    },
    {
      title: 'II. The Stormy Night of August 4: Radar Ghosts & Panic at Sea',
      subtitle: 'How freak weather and acoustic echoes generated false combat reports',
      paragraphs: [
        'Two nights later, on August 4, 1964, the Maddox and the Turner Joy patrolled during a pitch-black tropical squall with heavy thunderstorms, driving rain, and six-foot swells. At 21:30 local time, radar operators reported intermittent blips thirty miles away. Under heavy tension, crewmen believed high-speed torpedo boats were closing in.[^c4-1]',
        'For over two continuous hours, the destroyers conducted violent evasive maneuvers at 20 knots, firing 652 artillery shells and dropping depth charges into empty, rain-swept waves. Sonar operators reported hearing dozens of incoming torpedoes. However, post-war technical investigations proved that young sonar operators were registering acoustic cavitation noise produced by their own ships’ high-speed rudder movements.',
        'High above the destroyers, Navy pilot Commander James Stockdale circled for two hours in an F-8 Crusader jet illuminating the waters with flares. Flying at 1,000 feet, Stockdale had an unobstructed view and reported seeing zero North Vietnamese patrol boats, zero wakes, and zero enemy gunfire. Decades later, declassified NSA cryptologic studies confirmed that no North Vietnamese vessels were present in the area that night.[^c4-2]',
      ],
    },
    {
      title: 'III. Captain Herrick’s Warning vs. The Washington Rush to Strike',
      subtitle: 'The 12-hour timezone gap between naval doubts and White House orders',
      paragraphs: [
        'At 1:27 PM Washington time on August 4 (1:27 AM the following morning in the Gulf), Task Group Commander Captain John J. Herrick sent an urgent flash cable to Washington warning that many reported contacts appeared doubtful:[^Q013]',
        'Review of action makes many reported contacts and torpedoes fired appear doubtful. Freak weather effects on radar and overeager sonarmen may have accounted for many reports. No actual visual sightings by Maddox. Suggest complete evaluation before any further action taken.',
        'Despite Herrick’s warning, Defense Secretary Robert McNamara and President Johnson were determined to project strength. Facing a November presidential election against conservative Republican Barry Goldwater—who accused Johnson of being "soft on communism"—Johnson ordered Operation Pierce Arrow: 64 retaliatory bombing sorties against North Vietnamese naval bases. At 11:34 PM that evening, Johnson announced on live national television that American ships had been the targets of "unprovoked open aggression on the high seas."',
      ],
    },
    {
      title: 'IV. The "Blank Check" Resolution & Constitutional Legacy',
      subtitle: 'How Congress surrendered its war-making powers—and the 1973 backlash',
      paragraphs: [
        'On August 7, 1964, President Johnson submitted the Gulf of Tonkin Resolution to Congress. Assured by administration officials that an unprovoked attack had occurred and that no wider war was planned, Congress passed the resolution near-unanimously: 416–0 in the House of Representatives, and 88–2 in the Senate.[^c4-3]',
        'Only two senators voted against the resolution: Senator Wayne Morse of Oregon and Senator Ernest Gruening of Alaska. Morse presciently warned on the Senate floor that Congress was making a historic constitutional mistake by unconstitutionally transferring war powers to the President without a formal declaration of war.',
        'The Gulf of Tonkin Resolution functioned as a statutory "blank check." Over the next four years, Johnson used this single resolution to deploy over 500,000 American combat troops and drop millions of tons of bombs across Southeast Asia. Seven years later, when the Pentagon Papers leaked in 1971 revealing that the administration had drafted the resolution months in advance and misled Congress about the August 4 clash, public outrage prompted Congress to repeal the resolution and eventually pass the War Powers Act of 1973 over President Nixon’s veto.',
      ],
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 text-ink transition-colors">
      {/* ─────────────────────────────────────────────────────────────
          1. COMPELLING OPENING HERO
      ───────────────────────────────────────────────────────────── */}
      <header className="border-b border-rule pb-8 sm:pb-12">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted mb-3">
          <span className="font-semibold text-brand">Chapter 04</span>
          <span>&bull;</span>
          <span>August 1964</span>
          <span>&bull;</span>
          <span className="text-brand font-bold bg-brand-tint border border-brand-rule px-2 py-0.5 rounded-xs">
            Turning Point
          </span>
        </div>

        <h1 className="font-editorial-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.12]">
          The Gulf of Tonkin: Incident, Resolution, and Escalation
        </h1>

        <p className="mt-3 font-editorial-serif italic text-lg sm:text-2xl text-ink-muted">
          How two reported naval clashes and ambiguous radar returns launched a ten-year undeclared war.
        </p>

        {/* Student Quick Anchor Bar */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          <a
            href="#quick-briefing"
            className="px-3 py-1.5 rounded-xs bg-brand-tint text-brand border border-brand-rule font-semibold hover:bg-[#FBE8EA] transition-colors"
          >
            ⚡ 60-Second Briefing
          </a>
          <a
            href="#interactive-evidence"
            className="px-3 py-1.5 rounded-xs bg-parchment text-ink border border-rule font-medium hover:border-brand transition-colors"
          >
            🗺️ Radar Investigation
          </a>
          <a
            href="#the-story"
            className="px-3 py-1.5 rounded-xs bg-parchment text-ink border border-rule font-medium hover:border-brand transition-colors"
          >
            📖 The Core Story
          </a>
          <a
            href="#chapter-quiz"
            className="px-3 py-1.5 rounded-xs bg-brand text-white font-semibold hover:bg-brand-hover transition-colors shadow-xs"
          >
            ✍️ Practice Quiz (4 Qs)
          </a>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. QUICK BRIEFING (60-SECOND STUDY LAYER)
      ───────────────────────────────────────────────────────────── */}
      <div id="quick-briefing" className="scroll-mt-16">
        <QuickBriefing
          bigQuestion={TONKIN_STUDY_DATA.bigQuestion}
          whyItMatters={TONKIN_STUDY_DATA.whyItMatters}
          summary={TONKIN_STUDY_DATA.briefing.summary}
          examTakeaways={TONKIN_STUDY_DATA.briefing.examTakeaways}
          keyTerms={TONKIN_STUDY_DATA.briefing.keyTerms}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. THE READABLE CORE STORY (SUBHEADED, UNBURIED)
      ───────────────────────────────────────────────────────────── */}
      <section id="the-story" aria-label="Historical Narrative" className="my-12 scroll-mt-24 space-y-12">
        <div className="border-b border-rule pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
            Historical Narrative &bull; The Full Account
          </span>
          <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-ink">
            The Road to the Resolution
          </h2>
        </div>

        {storySections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-4">
            <div>
              <h3 className="font-editorial-serif text-xl sm:text-2xl font-bold text-ink">
                {section.title}
              </h3>
              <p className="font-editorial-serif italic text-sm text-ink-muted mt-0.5">
                {section.subtitle}
              </p>
            </div>

            <div className="space-y-5 font-sans text-base sm:text-lg text-ink leading-[1.8]">
              {section.paragraphs.map((p, pIdx) => {
                // If it's the famous Herrick cable text, format as archival quote block
                if (p.startsWith('Review of action makes many reported contacts')) {
                  return (
                    <div
                      key={pIdx}
                      className="my-5 p-5 bg-parchment border-l-4 border-brand border-t border-r border-b border-rule rounded-r-xs font-editorial-serif text-base sm:text-lg italic text-ink leading-relaxed shadow-xs"
                    >
                      <div className="font-mono text-xs uppercase tracking-wider text-brand font-bold mb-2 not-italic">
                        CAPTAIN HERRICK FLASH CABLE DTG 041727Z AUG 64 (FRUS VOL. I, DOC 117)
                      </div>
                      &ldquo;{p}&rdquo;
                      <div className="mt-2 text-right">
                        <CitationMarker id="Q013" />
                      </div>
                    </div>
                  );
                }
                return <FormattedParagraph key={pIdx} text={p} />;
              })}
            </div>
          </div>
        ))}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. INTERACTIVE EVIDENCE: THE DUAL-CLOCK RADAR INVESTIGATION
      ───────────────────────────────────────────────────────────── */}
      <section id="interactive-evidence" aria-label="Interactive Radar Evidence" className="my-16 scroll-mt-24">
        <TonkinInvestigationModule />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CAUSAL FLOW LEDGER
      ───────────────────────────────────────────────────────────── */}
      <section aria-label="Causal Structure of Tonkin Decision" className="my-14">
        <CausalFlowViewer causalChain={chapter.causalChain} />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. TEST YOUR UNDERSTANDING: INTERACTIVE CHAPTER QUIZ
      ───────────────────────────────────────────────────────────── */}
      <div id="chapter-quiz" className="scroll-mt-24">
        <ChapterQuiz
          title="Gulf of Tonkin Exam Check (4 Questions)"
          questions={TONKIN_STUDY_DATA.quiz}
          chapterNumber={4}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          7. KEY-TERM FLASHCARDS DECK
      ───────────────────────────────────────────────────────────── */}
      <div id="flashcards" className="scroll-mt-24">
        <FlashcardDeck
          cards={TONKIN_STUDY_DATA.flashcards}
          title="Essential Vocabulary Flashcards"
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          8. DEEPER INVESTIGATION & PRIMARY SOURCE DOSSIER
      ───────────────────────────────────────────────────────────── */}
      <section aria-label="Primary Source Evidence" className="my-16 pt-8 border-t border-rule">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-rule gap-2 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
              Scholarly Evidence &bull; DBQ Research Layer
            </span>
            <h2 className="font-editorial-serif text-2xl font-bold text-ink">
              Primary Sources &amp; Archival Records
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowDeepResearch(!showDeepResearch)}
            className="px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-xs border border-rule bg-parchment hover:bg-rule text-ink transition-colors cursor-pointer"
          >
            {showDeepResearch ? 'Collapse Research Layer ▲' : 'Expand Research Layer ▼'}
          </button>
        </div>

        {/* Primary Documents Cards */}
        <div className="space-y-6">
          {chapter.primaryDocuments && chapter.primaryDocuments.length > 0 && (
            <div className="space-y-6">
              {chapter.primaryDocuments.map((doc) => (
                <DocumentInspector key={doc.id} document={doc} />
              ))}
            </div>
          )}

          {/* Collapsible Deep Historiography & Bilateral Strategy */}
          {showDeepResearch && (
            <div className="mt-8 pt-6 border-t border-rule space-y-8 animate-in fade-in duration-200">
              <DualPerspectiveViewer
                timeframe={chapter.timeframe}
                washington={chapter.washington}
                hanoi={chapter.hanoi}
                ecosystem={chapter.strategicEcosystem}
              />
            </div>
          )}

          {/* Complete Scholarly References List */}
          {chapter.citations && chapter.citations.length > 0 && (
            <div className="pt-6 border-t border-rule">
              <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-3">
                Registered Scholarly Citations &bull; Verified References
              </span>
              <ul className="space-y-2.5 text-xs text-ink-muted">
                {chapter.citations.map((c) => (
                  <li
                    key={c.id}
                    className="flex items-start justify-between gap-3 p-3 rounded-xs border border-rule bg-parchment hover:border-brand transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <CitationMarker id={c.id} label={c.marker} />
                      <div>
                        <span className="text-ink font-medium">
                          {c.citation}
                        </span>
                        {c.supportsClaim && (
                          <p className="font-sans text-xs text-ink-muted mt-0.5">
                            Supports: {c.supportsClaim}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => openCitation(c)}
                      className="text-xs font-semibold text-brand hover:underline uppercase whitespace-nowrap cursor-pointer px-2 py-0.5 bg-white border border-rule rounded-xs"
                    >
                      Dossier &rarr;
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. FORWARD CHAPTER BRIDGE
      ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-rule pt-8 pb-12 mt-12">
        <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-2">
          The Next Dilemma &rarr;
        </span>
        <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-ink mb-3">
          {chapter.nextQuestion.question}
        </h3>
        <p className="font-sans text-base text-ink-muted leading-relaxed mb-6 max-w-2xl">
          {chapter.nextQuestion.framing}
        </p>

        {nextChapterId ? (
          <Link
            href={`/vietnam/${nextChapterId}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-xs"
          >
            <span>Proceed to Chapter 05: {nextChapterTitle || 'Americanization & Attrition'} &rarr;</span>
          </Link>
        ) : (
          <Link
            href="/vietnam"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-xs"
          >
            <span>Return to Vietnam Overview &rarr;</span>
          </Link>
        )}
      </footer>
    </article>
  );
}
