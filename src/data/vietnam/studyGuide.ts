// Static content for the /vietnam/study-guide cheat sheet and DBQ outlines.

export interface PresidencySummary {
  id: string;
  name: string;
  doctrine: string;
  keyActions: string;
  turningPoint: string;
  examPitfall: string;
}

export interface TurningPoint {
  date: string;
  event: string;
  significance: string;
  chapterId: string;
  /** Rendered with emphasis as a landmark exam topic. */
  highlight?: boolean;
}

export interface DbqPrompt {
  number: number;
  theme: string;
  prompt: string;
  thesis: string;
  evidence: string[];
  commonErrors: string[];
}

export const PRESIDENCIES: PresidencySummary[] = [
  {
    id: 'truman-ike',
    name: 'Harry Truman & Dwight Eisenhower (1945–1961)',
    doctrine: 'Containment & Domino Theory',
    keyActions:
      'Reclassified Ho Chi Minh from nationalist ally to Sino-Soviet proxy. Funded 80% of France’s military costs ($2B). Declined direct airstrikes at Dien Bien Phu (1954).',
    turningPoint:
      'Geneva Accords (1954) partitioned Vietnam at the 17th parallel. Eisenhower backed Ngo Dinh Diem in South Vietnam and cancelled the nationwide 1956 reunification elections.',
    examPitfall:
      'Do not confuse Geneva partition with permanent borders: Article 6 explicitly stated the 17th parallel was provisional pending elections.',
  },
  {
    id: 'kennedy',
    name: 'John F. Kennedy (1961–1963)',
    doctrine: 'Flexible Response & Counterinsurgency',
    keyActions:
      'Expanded military advisors from 900 to 16,000. Deployed Special Forces (Green Berets) and authorized chemical defoliation (Agent Orange / Operation Ranch Hand).',
    turningPoint:
      'Strategic Hamlet Program failed by alienating peasants. In November 1963, U.S. tacitly approved the military coup executing President Diem, creating perpetual Saigon political instability.',
    examPitfall:
      'JFK sent advisors and air support, but NO conventional ground combat divisions. Combat troops were committed by LBJ in 1965.',
  },
  {
    id: 'johnson',
    name: 'Lyndon B. Johnson (1963–1969)',
    doctrine: 'Americanization & Attrition',
    keyActions:
      'Gulf of Tonkin Resolution (1964) provided legislative blank check. Launched Operation Rolling Thunder and deployed 540,000 ground troops by 1968 using search-and-destroy tactics.',
    turningPoint:
      'January 1968 Tet Offensive shattered claims of progress, created an irreversible “Credibility Gap,” and forced LBJ to withdraw from the 1968 presidential election.',
    examPitfall:
      'Tet was a U.S. military victory (Viet Cong suffered catastrophic casualties) but a decisive political and psychological defeat for Washington.',
  },
  {
    id: 'nixon',
    name: 'Richard M. Nixon (1969–1974)',
    doctrine: 'Vietnamization & “Peace with Honor”',
    keyActions:
      'Withdrew U.S. ground troops while expanding air campaigns. Secret bombing of Cambodia (Operation Menu) triggered Kent State shootings (1970). Pentagon Papers leak (1971).',
    turningPoint:
      'Paris Peace Accords (Jan 1973) withdrew all U.S. forces and returned POWs, but left 150,000 North Vietnamese troops inside South Vietnam. War Powers Act passed over Nixon’s veto.',
    examPitfall:
      'The Paris Peace Accords did NOT end the fighting between North and South Vietnam; it only ended direct American military involvement.',
  },
  {
    id: 'ford',
    name: 'Gerald R. Ford (1974–1975)',
    doctrine: 'Post-Watergate Aid Cuts & Collapse',
    keyActions:
      'Congress drastically slashed financial and military ammunition subsidies to Saigon. In March 1975, North Vietnam launched the Spring Offensive; South Vietnamese defenses collapsed in 55 days.',
    turningPoint:
      'April 30, 1975: Fall of Saigon. Operation Frequent Wind evacuated remaining Americans and at-risk South Vietnamese by helicopter from embassy rooftops.',
    examPitfall:
      'Saigon fell under President Ford, not Nixon. Ford requested emergency military aid from Congress, which was overwhelmingly refused.',
  },
];

export const TURNING_POINTS: TurningPoint[] = [
  {
    date: 'May 1954',
    event: 'Fall of Dien Bien Phu',
    significance: 'Ended French colonial rule; led directly to 1954 Geneva Accords partitioning Vietnam.',
    chapterId: 'french-indochina-dien-bien-phu',
  },
  {
    date: 'July 1954',
    event: 'Geneva Accords',
    significance: 'Provisional partition at 17th parallel; 1956 nationwide elections cancelled by Diem with U.S. backing.',
    chapterId: 'geneva-south-vietnam',
  },
  {
    date: 'Nov 1963',
    event: 'Overthrow of Diem',
    significance: 'Assassination of Ngo Dinh Diem created political vacuum in Saigon, deepening U.S. responsibility.',
    chapterId: 'kennedy-and-diem',
  },
  {
    date: 'Aug 1964',
    event: 'Gulf of Tonkin Resolution',
    significance: 'Passed 504–2 after phantom radar battle; gave LBJ legal blank check to wage war without congressional declaration.',
    chapterId: 'gulf-of-tonkin',
    highlight: true,
  },
  {
    date: 'Mar 1965',
    event: 'Operation Rolling Thunder & Ground Troops',
    significance: 'Americanized the war: 3,500 Marines landed at Da Nang; 3-year sustained bombing campaign began.',
    chapterId: 'americanization-attrition',
  },
  {
    date: 'Jan 1968',
    event: 'The Tet Offensive',
    significance: 'Coordinated surprise strikes on 100+ cities; destroyed U.S. public belief that victory was near; broke LBJ presidency.',
    chapterId: 'tet-offensive',
    highlight: true,
  },
  {
    date: 'Nov 1969',
    event: 'Vietnamization & Silent Majority',
    significance: 'Nixon shifted combat burden to ARVN while appealing to the conservative Silent Majority.',
    chapterId: 'nixon-and-vietnamization',
  },
  {
    date: 'June 1971',
    event: 'The Pentagon Papers',
    significance: 'Leaked DoD study revealed systematic government deception across four administrations; affirmed press freedom in NYT v. US.',
    chapterId: 'memory-and-the-argument',
  },
  {
    date: 'Jan 1973',
    event: 'Paris Peace Accords',
    significance: 'All U.S. combat troops withdrew; Hanoi retained 150,000 troops in South Vietnam.',
    chapterId: 'paris-peace-accords',
  },
  {
    date: 'Nov 1973',
    event: 'War Powers Act of 1973',
    significance: 'Enacted over Nixon’s veto to curtail undeclared presidential wars; mandates 48-hr reporting and 60-day troop deployment limit.',
    chapterId: 'the-collapse',
    highlight: true,
  },
  {
    date: 'Apr 1975',
    event: 'Fall of Saigon',
    significance: 'NVA captured Saigon; Vietnam reunified under communist rule; U.S. completed Operation Frequent Wind evacuation.',
    chapterId: 'the-collapse',
  },
];

export const DBQ_PROMPTS: DbqPrompt[] = [
  {
    number: 1,
    theme: 'Escalation & Foreign Policy',
    prompt:
      'Evaluate the relative importance of Cold War containment ideology versus domestic political calculations in driving U.S. escalation in Vietnam between 1950 and 1965.',
    thesis:
      'Although the ideological doctrine of Cold War containment (the Domino Theory) provided the public justification for intervention, domestic political imperatives—specifically presidential fear of being accused of ‘losing Vietnam’ following the fall of China—were the decisive factor driving escalation under Eisenhower, Kennedy, and Johnson.',
    evidence: [
      'Eisenhower’s April 1954 press conference (Domino Theory)',
      'Funding 80% of French military costs post-Korean War',
      'OPLAN 34A covert commando operations',
      'Gulf of Tonkin Resolution passed right before 1964 election against Barry Goldwater',
    ],
    commonErrors: [
      'Treating containment as the only motive without exploring domestic political pressures',
      'Failing to mention the Korean War context and “loss of China” syndrome',
      'Assuming the Gulf of Tonkin incident was an unprovoked surprise',
    ],
  },
  {
    number: 2,
    theme: 'Media, Public Opinion & Credibility',
    prompt:
      'Analyze the extent to which media coverage and declassified revelations created the ‘Credibility Gap’ and transformed American public support for the war between 1965 and 1973.',
    thesis:
      'Uncensored television broadcasting and investigative leaks fundamentally dismantled official government optimism, turning the 1968 Tet Offensive into a decisive psychological turning point and cementing a permanent crisis of public trust in federal institutions.',
    evidence: [
      'The living-room war: Morley Safer’s Cam Ne report (1965)',
      'Walter Cronkite’s February 1968 CBS broadcast (“mired in stalemate”)',
      'Daniel Ellsberg’s leak of the Pentagon Papers (1971)',
      'New York Times Co. v. United States affirming First Amendment prior restraint bans',
    ],
    commonErrors: [
      'Failing to distinguish between military victory and psychological defeat during Tet',
      'Calling television news biased rather than contrasting official casualty reports with televised combat',
      'Omitting the Supreme Court precedent set by the Pentagon Papers',
    ],
  },
  {
    number: 3,
    theme: 'Constitutional War Powers',
    prompt:
      'Evaluate the extent to which the Vietnam War produced a lasting constitutional rebalancing between executive and legislative war powers.',
    thesis:
      'While the War Powers Act of 1973 formally asserted congressional authority over undeclared warfare in reaction to the Tonkin Resolution and Cambodia incursions, subsequent presidential practice has consistently questioned its constitutionality, resulting in only partial and contested executive restraint.',
    evidence: [
      'Article I, Sec. 8 (Congress declares war) vs. Article II (President as Commander-in-Chief)',
      'Gulf of Tonkin Resolution as functional declaration of war',
      'Secret bombing of Cambodia conducted without congressional notification',
      'Congressional veto override of Nixon’s War Powers Act veto in November 1973',
    ],
    commonErrors: [
      'Thinking the War Powers Act was signed into law willingly by the President (it was passed over veto)',
      'Failing to mention the 48-hour notification and 60-day deadline specifics',
    ],
  },
];
