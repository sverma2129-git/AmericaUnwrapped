import { FlaggedClaimEntry, TonkinEditorialAudit } from '@/types/vietnam';

/**
 * ─── FLAGGED INTERPRETIVE & CONTESTED CLAIMS ─────────────────────────────────
 * DO NOT silently rewrite these claims yet.
 * Flagged for editorial review to be attributed, softened, or backed by evidence.
 */
export const FLAGGED_INTERPRETIVE_CLAIMS: FlaggedClaimEntry[] = [
  {
    id: 'CLAIM-01',
    chapter: 3,
    claimText: 'Diem was the only figure capable of stabilizing South Vietnam.',
    category: 'interpretive_narrative',
    context: 'Chapter 3 discussion of the Diem coup and its aftermath.',
    editorialConcern: 'Presents a contested counterfactual hypothesis as an established fact. Disregards substantial historical scholarship (e.g., Catton, Miller) detailing Diem’s severe political alienation of Buddhist majorities, rural populations, and military officers.',
    recommendedAction: 'Attribute to specific revisionist historians (e.g., Mark Moyar) while presenting the orthodox perspective that Diem had already rendered the southern state functionally unviable.',
  },
  {
    id: 'CLAIM-02',
    chapter: 8,
    claimText: 'Cambodia bombing setting in motion the rise of the Khmer Rouge.',
    category: 'causal_assertion',
    context: 'Chapter 8 discussion of Operation Menu and the 1970 Cambodian Incursion.',
    editorialConcern: 'Asserts a direct monocausal link between U.S. B-52 bombing (Operation Menu/Freedom Deal) and the Khmer Rouge genocide. While historians (Kiernan, Shawcross) argue bombing destabilized rural society, Cambodian historians (Chandler) emphasize indigenous party dynamics, Sihanouk’s coalition choices, and Vietnamese sanctuary politics.',
    recommendedAction: 'Frame as a major historiographical debate regarding the degrees of external destabilization versus internal Cambodian political radicalization.',
  },
  {
    id: 'CLAIM-03',
    chapter: 4,
    claimText: 'Pretext & Blank Check (Framing of the Gulf of Tonkin incident).',
    category: 'interpretive_narrative',
    context: 'Chapter 4 title and landmark moment banner heading.',
    editorialConcern: 'Reduces an immensely complex intelligence failure and political calculation into a predetermined "conspiracy/pretext" narrative. Obscures what decision-makers genuinely believed during the chaotic hours of August 4.',
    recommendedAction: 'Shift framing from "Pretext" to the analytical continuum: Reported Evidence → Contemporaneous Beliefs → Competing Interpretations → Legislative Authorization.',
  },
  {
    id: 'CLAIM-04',
    chapter: 1,
    claimText: 'Fatal Blind Spot (Universal terminology in causal chain diagrams).',
    category: 'causal_assertion',
    context: 'CausalStep interface across all 12 chapters (CausalChainViewer).',
    editorialConcern: 'Labeling every historical actor’s assumption as a "Blind Spot" creates a teleological hindsight bias, framing historical actors as universally myopic rather than constrained by contemporaneous information, domestic incentives, and bureaucratic structures.',
    recommendedAction: 'Relabel component fields from "Blind Spot" to "Contemporaneous Assumption / Strategic Calculation" with editorial review.',
  },
  {
    id: 'CLAIM-05',
    chapter: 1,
    claimText: 'Adversary Counter-Punch (Universal terminology in causal chain diagrams).',
    category: 'causal_assertion',
    context: 'CausalStep result modeling across all 12 chapters.',
    editorialConcern: 'Dramatizes complex international and domestic reactions using boxing/combat rhetoric ("Counter-Punch"), obscuring multi-actor agency (Saigon politics, Sino-Soviet competition, domestic public pressure).',
    recommendedAction: 'Relabel component fields to "Reaction & Counter-Action" or "Multilateral Response".',
  },
];

/**
 * ─── TONKIN EDITORIAL AUDIT & REQUIRED FRAMEWORK ─────────────────────────────
 * Tonkin must not be presented as a simple "Johnson lied" caricature.
 * Adheres strictly to the 6-stage progression:
 * 
 * REPORTED EVIDENCE
 *   → INFORMATION AVAILABLE AT THE TIME
 *   → COMPETING INTERPRETATIONS
 *   → DECISION
 *   → LATER EVIDENCE
 *   → HISTORICAL DEBATE
 */
export const TONKIN_EDITORIAL_AUDIT: TonkinEditorialAudit[] = [
  {
    id: 'TONKIN-01',
    issue: 'August 4 Chronology & Timezone Inconsistency',
    currentPresentation: 'Displays Washington times and local Tonkin times without explicit synchronization, obscuring the 12-hour offset between local midnight sea action and daytime Washington decision-making.',
    requiredFramework: 'Dual-Clock Synchronization: Establish local Gulf of Tonkin Indochina Time (ICT, UTC+7) side-by-side with Washington Eastern Daylight Time (EDT, UTC-4) so users understand that when Herrick cabled doubts at 1:27 PM Washington time, it was already 1:27 AM the following morning at sea.',
    actionItems: [
      'Flag for editorial review: map every cable and radar log to both ICT and EDT.',
      'Clarify that retaliatory orders were being drafted while destroyers were still actively maneuvering in darkness.',
    ],
  },
  {
    id: 'TONKIN-02',
    issue: 'Distinction Between Contemporaneous Belief vs. Later Declassified Findings',
    currentPresentation: 'Blends 2001 Hanyok conclusions directly into 1964 decision timelines, making officials look like deliberate conspirators rather than actors operating under flawed, ambiguous signals intelligence.',
    requiredFramework: 'Epistemological Separation: Show what Johnson, McNamara, and Admiral Sharp actually had on their desks on August 4 (Herrick’s early flashes of 22 torpedoes, sonar contacts, and raw SIGINT summaries) before presenting later post-war reconstructions (Moise 1996, Hanyok 2001).',
    actionItems: [
      'Separate "What Was Known on Aug 4, 1964" from "What Declassified Records Revealed (1996–2005)".',
      'Remove teleological hindsight that portrays contemporaneous confusion as calculated fabrication.',
    ],
  },
  {
    id: 'TONKIN-03',
    issue: 'The Intelligence & Intercepts Believed to Support the Attack',
    currentPresentation: 'Dismisses the intelligence wholesale as nonexistent rather than explaining which specific intercepts misled officials.',
    requiredFramework: 'Analyze the Actual SIGINT Intercepts: Present intercepted North Vietnamese radio messages T-162 and T-163 (which referenced having "sacrificed two comrades") and show how naval intelligence in Hawaii misinterpreted them as referencing the August 4 clash when they actually described August 2 salvage operations.',
    actionItems: [
      'Document NSA translations and naval interpretation errors objectively.',
      'Show the institutional pressure to confirm attacks before confirming intelligence provenance.',
    ],
  },
  {
    id: 'TONKIN-04',
    issue: 'Imbalance Between Washington, Hanoi, and South Vietnam',
    currentPresentation: 'Centers the incident almost exclusively on Washington and the U.S. Navy destroyers, omitting South Vietnamese operations and North Vietnamese command perspectives.',
    requiredFramework: 'Triangular Context: Detail South Vietnam’s OPLAN 34A commando raids on Hon Me and Hon Ngu islands on July 30–31, showing why North Vietnamese coastal forces reasonably concluded the USS Maddox was directing the South Vietnamese attack.',
    actionItems: [
      'Incorporate North Vietnamese naval patrol orders and South Vietnamese coastal commando raids into the primary chronology.',
      'Restore full agency and regional friction to Hanoi and Saigon.',
    ],
  },
];

/**
 * ─── AUDIT SUMMARY METRICS ───────────────────────────────────────────────────
 */
export const INTEGRITY_AUDIT_SUMMARY = {
  totalItemsTracked: 30, // 26 base items + 4 separated conflations
  totalQuotations: 21,
  verifiedExactQuotations: 21,
  verifiedParaphrases: 8,
  unverifiableItems: 1,
  correctedConflations: 4, // Ho-Truman (Q001/Q001B), NSC 64/68 (Q002/Q002B), Cronkite on-air/oral (Q014/Q014B), JFK Washington/Inaugural (Q017/Q017B)
  unresolvedSources: 0,
  importantClaimsCited: 38, // 38 chapter-level citations + inline markers
  chaptersWithCitationCoverage: 12,
  chaptersWithIntegrityConcerns: [
    { chapter: 4, name: 'The Gulf of Tonkin', severity: 'Critical', issue: 'Stitched Hanyok quote, Herrick cable cleanup, Morse quote, teleological pretext framing' },
    { chapter: 7, name: 'The Tet Offensive', severity: 'High', issue: 'Invented Cronkite newsroom quote, synthetic Politburo directive, Arnett quote debate' },
    { chapter: 1, name: 'Dien Bien Phu & Roots', severity: 'High', issue: 'Invented Bernard Fall quote, unverified Ho-Truman cable citation (RG 226/Box 39), NSC 64/68 conflation' },
    { chapter: 3, name: 'Advisors & The Diem Coup', severity: 'High', issue: 'Conflated JFK quotes, Cable 243 composite text, contested "Diem only figure" claim' },
    { chapter: 9, name: 'The Paris Peace Accords', severity: 'High', issue: 'Synthetic Asselin quote, stitched treaty articles' },
    { chapter: 10, name: 'The 1975 Collapse', severity: 'Medium', issue: 'Synthetic Veith quote, dramatic Tank 843 text' },
    { chapter: 8, name: 'Vietnamization & Cambodia', severity: 'Medium', issue: 'Contested monocausal Khmer Rouge claim' },
    { chapter: 5, name: 'Escalation & Air War', severity: 'Medium', issue: 'Synthetic CIA memo, stitched Mary McCarthy dispatch' },
    { chapter: 11, name: 'Casualties & Reconciliation', severity: 'Medium', issue: 'Synthetic AP wire text with internal editorializing' },
  ],
};
