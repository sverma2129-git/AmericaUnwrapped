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
    name: 'Harry Truman and Dwight Eisenhower (1945–1961)',
    doctrine: 'Containment and the Domino Theory',
    keyActions:
      'Stopped seeing Ho Chi Minh as a nationalist and started seeing him as a tool of China and the Soviet Union. Paid 80% of France’s military costs ($2 billion). Turned down air strikes to save Dien Bien Phu (1954).',
    turningPoint:
      'The Geneva Accords (1954) split Vietnam at the 17th parallel. Eisenhower backed Ngo Dinh Diem in South Vietnam, and the 1956 elections to reunite the country were called off.',
    examPitfall:
      'The Geneva line was not meant to be a permanent border. Article 6 said the 17th parallel was temporary until elections were held.',
  },
  {
    id: 'kennedy',
    name: 'John F. Kennedy (1961–1963)',
    doctrine: 'Flexible Response and fighting guerrillas',
    keyActions:
      'Raised the number of military advisers from 900 to 16,000. Sent Special Forces (Green Berets) and approved spraying chemicals to kill jungle cover (Agent Orange, Operation Ranch Hand).',
    turningPoint:
      'The Strategic Hamlet Program failed because farmers resented it. In November 1963, the U.S. quietly approved the military coup in which President Diem was killed. Saigon’s government stayed unstable for years.',
    examPitfall:
      'Kennedy sent advisers and air support, but no ground combat divisions. Johnson sent the first combat troops in 1965.',
  },
  {
    id: 'johnson',
    name: 'Lyndon B. Johnson (1963–1969)',
    doctrine: 'Taking over the war and wearing down the enemy',
    keyActions:
      'The Gulf of Tonkin Resolution (1964) gave him a blank check from Congress. He started Operation Rolling Thunder and sent 540,000 ground troops by 1968, who fought with search-and-destroy missions.',
    turningPoint:
      'The Tet Offensive in January 1968 destroyed his claims of progress and widened the credibility gap. He dropped out of the 1968 presidential race.',
    examPitfall:
      'Tet was a military win for the U.S., and the Viet Cong lost huge numbers of fighters. But it was a political defeat for Washington.',
  },
  {
    id: 'nixon',
    name: 'Richard M. Nixon (1969–1974)',
    doctrine: 'Vietnamization and “Peace with Honor”',
    keyActions:
      'Pulled out U.S. ground troops while increasing bombing. Secretly bombed Cambodia (Operation Menu), then sent troops in, which set off the protests that led to the Kent State shootings (1970). The Pentagon Papers leaked in 1971.',
    turningPoint:
      'The Paris Peace Accords (January 1973) brought home all U.S. forces and POWs, but left 150,000 North Vietnamese troops inside South Vietnam. Congress passed the War Powers Act over Nixon’s veto.',
    examPitfall:
      'The Paris Peace Accords did not end the fighting between North and South Vietnam. They only ended America’s direct part in it.',
  },
  {
    id: 'ford',
    name: 'Gerald R. Ford (1974–1975)',
    doctrine: 'Aid cuts after Watergate, and the collapse',
    keyActions:
      'Congress sharply cut money and ammunition for Saigon. In March 1975, North Vietnam launched its Spring Offensive, and South Vietnam’s defenses fell apart in 55 days.',
    turningPoint:
      'Saigon fell on April 30, 1975. In Operation Frequent Wind, helicopters flew the last Americans and South Vietnamese at risk out of the city, some from the embassy roof.',
    examPitfall:
      'Saigon fell under President Ford, not Nixon. Ford asked Congress for emergency military aid, and Congress said no.',
  },
];

export const TURNING_POINTS: TurningPoint[] = [
  {
    date: 'May 1954',
    event: 'Fall of Dien Bien Phu',
    significance: 'Ended French colonial rule and led straight to the 1954 Geneva Accords, which split Vietnam.',
    chapterId: 'french-indochina-dien-bien-phu',
  },
  {
    date: 'July 1954',
    event: 'Geneva Accords',
    significance: 'A temporary split at the 17th parallel. Diem called off the 1956 elections with U.S. backing.',
    chapterId: 'geneva-south-vietnam',
  },
  {
    date: 'Nov 1963',
    event: 'Overthrow of Diem',
    significance: 'Diem’s killing left no one firmly in charge in Saigon, and the U.S. took on more responsibility.',
    chapterId: 'kennedy-and-diem',
  },
  {
    date: 'Aug 1964',
    event: 'Gulf of Tonkin Resolution',
    significance: 'Passed 504–2 after a reported attack that never happened. It let Johnson wage war without a declaration from Congress.',
    chapterId: 'gulf-of-tonkin',
    highlight: true,
  },
  {
    date: 'Mar 1965',
    event: 'Rolling Thunder and the first ground troops',
    significance: 'The war became American. 3,500 Marines landed at Da Nang, and a three-year bombing campaign began.',
    chapterId: 'americanization-attrition',
  },
  {
    date: 'Jan 1968',
    event: 'The Tet Offensive',
    significance: 'Surprise attacks on more than 100 cities and towns. Americans stopped believing victory was near, and Johnson’s presidency never recovered.',
    chapterId: 'tet-offensive',
    highlight: true,
  },
  {
    date: 'Nov 1969',
    event: 'Vietnamization and the Silent Majority',
    significance: 'Nixon handed more of the fighting to the ARVN and asked the quiet, conservative majority of Americans to back him.',
    chapterId: 'nixon-and-vietnamization',
  },
  {
    date: 'June 1971',
    event: 'The Pentagon Papers',
    significance: 'A leaked Defense Department study showed that four administrations had misled the public. The Supreme Court upheld press freedom in New York Times Co. v. United States.',
    chapterId: 'memory-and-the-argument',
  },
  {
    date: 'Jan 1973',
    event: 'Paris Peace Accords',
    significance: 'All U.S. combat troops left. Hanoi kept 150,000 troops in South Vietnam.',
    chapterId: 'paris-peace-accords',
  },
  {
    date: 'Nov 1973',
    event: 'War Powers Act of 1973',
    significance: 'Passed over Nixon’s veto to limit undeclared wars. Presidents must report within 48 hours and bring troops home within 60 days without approval.',
    chapterId: 'the-collapse',
    highlight: true,
  },
  {
    date: 'Apr 1975',
    event: 'Fall of Saigon',
    significance: 'North Vietnam’s army took Saigon and Vietnam was united under communist rule. The U.S. finished the Operation Frequent Wind evacuation.',
    chapterId: 'the-collapse',
  },
];

export const DBQ_PROMPTS: DbqPrompt[] = [
  {
    number: 1,
    theme: 'Why the U.S. escalated',
    prompt:
      'Evaluate whether Cold War containment or politics at home did more to drive U.S. escalation in Vietnam between 1950 and 1965.',
    thesis:
      'Containment and the Domino Theory gave presidents their public reason to intervene. But politics at home mattered more. After the communist victory in China, Eisenhower, Kennedy and Johnson each feared being blamed for losing Vietnam, and that fear drove escalation.',
    evidence: [
      'Eisenhower’s April 1954 press conference (Domino Theory)',
      'Paying 80% of France’s military costs after the Korean War began',
      'OPLAN 34A secret commando raids',
      'The Gulf of Tonkin Resolution, passed just before the 1964 election against Barry Goldwater',
    ],
    commonErrors: [
      'Treating containment as the only motive and ignoring politics at home',
      'Leaving out the Korean War and the fear of another “loss of China”',
      'Assuming the Gulf of Tonkin incident came out of nowhere',
    ],
  },
  {
    number: 2,
    theme: 'The news, public opinion and trust',
    prompt:
      'Analyze how far news coverage and leaked government secrets created the credibility gap and changed American support for the war between 1965 and 1973.',
    thesis:
      'Uncensored television and leaked documents tore down the government’s upbeat claims. They made the 1968 Tet Offensive the turning point in public opinion and left a lasting loss of trust in the federal government.',
    evidence: [
      'War on the living-room TV: Morley Safer’s Cam Ne report (1965)',
      'Walter Cronkite’s February 1968 CBS broadcast (“mired in stalemate”)',
      'Daniel Ellsberg’s leak of the Pentagon Papers (1971)',
      'New York Times Co. v. United States, which barred the government from blocking publication',
    ],
    commonErrors: [
      'Mixing up Tet’s military result (a U.S. win) with its political result (a U.S. loss)',
      'Calling TV news biased instead of comparing official reports with what viewers saw',
      'Leaving out the Supreme Court’s Pentagon Papers ruling',
    ],
  },
  {
    number: 3,
    theme: 'Who decides on war',
    prompt:
      'Evaluate how far the Vietnam War shifted the power to make war between the president and Congress for the long term.',
    thesis:
      'Congress passed the War Powers Act of 1973 to take back control of undeclared wars after the Tonkin Resolution and the move into Cambodia. But later presidents have questioned whether the law is constitutional, so it has limited them only partly.',
    evidence: [
      'Article I, Sec. 8 (Congress declares war) vs. Article II (President as Commander-in-Chief)',
      'The Gulf of Tonkin Resolution, used as a declaration of war in practice',
      'The secret bombing of Cambodia, hidden from Congress',
      'Congress overriding Nixon’s veto of the War Powers Act in November 1973',
    ],
    commonErrors: [
      'Thinking the president signed the War Powers Act (Congress passed it over his veto)',
      'Leaving out the 48-hour notice and the 60-day deadline',
    ],
  },
];

/**
 * Real AP U.S. History exam questions about the Vietnam War. Each is described
 * in our own words, never quoted: College Board holds the copyright, and it
 * keeps exams older than three years in AP Classroom for teachers, so the
 * original wording could not be checked against a public official file.
 */
export interface PastExamQuestion {
  exam: string;
  question: string;
  summary: string;
}

export const PAST_AP_QUESTIONS: PastExamQuestion[] = [
  {
    exam: '2008 AP U.S. History Exam',
    question: 'Question 1, the document-based question',
    summary:
      'Asked students to analyze how the Vietnam War heightened social, political, and economic tensions in the United States, focusing on 1964 to 1975.',
  },
  {
    exam: '2010 AP U.S. History Exam (Form B)',
    question: 'Question 5, a long essay',
    summary:
      'Asked students to analyze the impact of the Vietnam War on areas including the presidency, Americans aged 18 to 35, and Cold War diplomacy.',
  },
];

export const PAST_AP_QUESTIONS_URL = 'https://apcentral.collegeboard.org/courses/ap-united-states-history/exam/past-exam-questions';
