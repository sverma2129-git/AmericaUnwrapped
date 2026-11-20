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
  /** The presidency the event falls under (an id from PRESIDENCIES). */
  presidencyId: string;
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
    doctrine: 'Vietnamization and Peace with Honor',
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
    presidencyId: 'truman-ike',
  },
  {
    date: 'July 1954',
    event: 'Geneva Accords',
    significance: 'A temporary split at the 17th parallel. Diem called off the 1956 elections with U.S. backing.',
    chapterId: 'geneva-south-vietnam',
    presidencyId: 'truman-ike',
  },
  {
    date: 'Nov 1963',
    event: 'Overthrow of Diem',
    significance: 'Diem’s killing left no one firmly in charge in Saigon, and the U.S. took on more responsibility.',
    chapterId: 'kennedy-and-diem',
    presidencyId: 'kennedy',
  },
  {
    date: 'Aug 1964',
    event: 'Gulf of Tonkin Resolution',
    significance: 'Passed 504–2 after a reported attack that never happened. It let Johnson wage war without a declaration from Congress.',
    chapterId: 'gulf-of-tonkin',
    presidencyId: 'johnson',
    highlight: true,
  },
  {
    date: 'Mar 1965',
    event: 'Rolling Thunder and the first ground troops',
    significance: 'The war became American. 3,500 Marines landed at Da Nang, and a three-year bombing campaign began.',
    chapterId: 'americanization-attrition',
    presidencyId: 'johnson',
  },
  {
    date: 'Jan 1968',
    event: 'The Tet Offensive',
    significance: 'Surprise attacks on more than 100 cities and towns. Americans stopped believing victory was near, and Johnson’s presidency never recovered.',
    chapterId: 'tet-offensive',
    presidencyId: 'johnson',
    highlight: true,
  },
  {
    date: 'Nov 1969',
    event: 'Vietnamization and the Silent Majority',
    significance: 'Nixon handed more of the fighting to the ARVN and asked the quiet, conservative majority of Americans to back him.',
    chapterId: 'nixon-and-vietnamization',
    presidencyId: 'nixon',
  },
  {
    date: 'June 1971',
    event: 'The Pentagon Papers',
    significance: 'A leaked Defense Department study showed that four administrations had misled the public. The Supreme Court upheld press freedom in New York Times Co. v. United States.',
    chapterId: 'memory-and-the-argument',
    presidencyId: 'nixon',
  },
  {
    date: 'Jan 1973',
    event: 'Paris Peace Accords',
    significance: 'All U.S. combat troops left. Hanoi kept 150,000 troops in South Vietnam.',
    chapterId: 'paris-peace-accords',
    presidencyId: 'nixon',
  },
  {
    date: 'Nov 1973',
    event: 'War Powers Act of 1973',
    significance: 'Passed over Nixon’s veto to limit undeclared wars. Presidents must report within 48 hours and bring troops home within 60 days without approval.',
    chapterId: 'the-collapse',
    presidencyId: 'nixon',
    highlight: true,
  },
  {
    date: 'Apr 1975',
    event: 'Fall of Saigon',
    significance: 'North Vietnam’s army took Saigon and Vietnam was united under communist rule. The U.S. finished the Operation Frequent Wind evacuation.',
    chapterId: 'the-collapse',
    presidencyId: 'ford',
  },
];

export const DBQ_PROMPTS: DbqPrompt[] = [
  {
    number: 1,
    theme: 'Tensions at home, 1964–1975',
    prompt:
      'Analyze the ways in which the Vietnam War heightened social, political, and economic tensions in the United States. Focus your answer on the period 1964 to 1975.',
    thesis:
      'The war strained the country on all three fronts. Socially, the draft and televised combat split Americans by age and class and filled campuses with protest. Politically, the credibility gap and the Pentagon Papers destroyed trust in the president and pushed Congress to take back its war powers. Economically, paying for the war and the Great Society at the same time, without raising taxes, fed inflation.',
    evidence: [
      'The draft, whose burden fell hardest on working-class Americans',
      'The Tet Offensive (1968) and Walter Cronkite’s “mired in stalemate” broadcast',
      'The move into Cambodia and the Kent State shootings (1970)',
      'The Pentagon Papers (1971) and New York Times Co. v. United States',
      'Funding the war and the Great Society without raising taxes, which fed inflation',
      'The War Powers Act, passed over Nixon’s veto in November 1973',
    ],
    commonErrors: [
      'Covering only social tension and skipping the political and economic parts of the prompt',
      'Listing protests without explaining what tension each one shows',
      'Stopping in 1968 instead of following the prompt through 1975',
    ],
  },
  {
    number: 2,
    theme: 'Nixon’s challenges, 1968–1974',
    prompt:
      'Analyze the international and domestic challenges the United States faced between 1968 and 1974, and evaluate how President Richard Nixon’s administration responded to them.',
    thesis:
      'Nixon faced a war Americans no longer supported and a country divided over it. Abroad, he answered with Vietnamization, the Nixon Doctrine and wider bombing, and he used talks with Moscow and Beijing to press Hanoi. At home, he appealed to the Silent Majority, but the secret bombing of Cambodia, Kent State and the Pentagon Papers deepened distrust, and Congress answered by limiting his power.',
    evidence: [
      'Vietnamization: U.S. troops cut from 543,000 to about 24,000 by late 1972',
      'The Nixon Doctrine (Guam, 1969)',
      'Operation Menu and the 1970 move into Cambodia',
      'The Kent State shootings and the Cooper-Church Amendment (1970)',
      'The Christmas Bombing (1972) and the Paris Peace Accords (January 1973)',
      'The War Powers Act (1973) and Nixon’s resignation over Watergate (1974)',
    ],
    commonErrors: [
      'Answering only half the prompt: describe the challenges and also evaluate the responses',
      'Treating Vietnamization as a quick end to the war: the U.S. withdrawal took four years',
      'Leaving out the domestic side: protest, the Pentagon Papers and Congress pushing back',
    ],
  },
  {
    number: 3,
    theme: 'How much did the war change America? 1960–1975',
    prompt: 'Evaluate the extent to which the Vietnam War fostered change in the United States between 1960 and 1975.',
    thesis:
      'The war changed how far Americans trusted their government and how much power Congress gave the president to make war. It changed far less about the goal of U.S. foreign policy: containment of communism guided every president from Kennedy to Ford.',
    evidence: [
      'The Gulf of Tonkin Resolution (1964) and the War Powers Act (1973)',
      'The credibility gap after the Tet Offensive (1968)',
      'The Pentagon Papers (1971) and the Supreme Court ruling on press freedom',
      'Campus protest, the move into Cambodia and Kent State (1970)',
      'Continuity: the Domino Theory and containment, from Kennedy to Nixon’s promises to Thieu',
    ],
    commonErrors: [
      'Only listing changes: a prompt that asks to what extent wants you to weigh change against continuity',
      'Ignoring the dates: the prompt starts in 1960, before American combat troops arrived',
      'Describing events without saying what changed because of them',
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
