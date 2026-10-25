import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 8: NIXON, VIETNAMIZATION & CAMBODIA ──────────────────────────────
export const VIETNAMIZATION_STUDY_DATA: ChapterStudyData = {
  chapterId: 'nixon-and-vietnamization',
  bigQuestion:
    'Did Nixon’s policy of "Vietnamization" represent a genuine path to South Vietnamese independence or merely an attempt to secure a "decent interval"?',
  whyItMatters:
    'Examines the agonizing four-year withdrawal that expanded the war into Cambodia, triggered historic campus protests like Kent State, and resulted in unprecedented congressional limits on executive power.',
  whatYouWillLearn: [
    'How the Nixon Doctrine and "Vietnamization" withdrew 500,000 U.S. troops while expanding the air war.',
    'How the secret bombing of Cambodia (Operation Menu) and the 1970 incursion ignited nationwide campus uprisings.',
    'How Operation Lam Son 719 and the 1972 Easter Offensive proved ARVN’s total dependence on American airpower.',
  ],
  briefing: {
    summary:
      'Taking office in 1969, President Richard Nixon and National Security Advisor Henry Kissinger faced intense domestic pressure to end American casualties. Under "Vietnamization" and the Nixon Doctrine, the U.S. began withdrawing American ground troops (reducing numbers from 543,000 to 24,000 by late 1972) while transferring combat responsibilities and modern weaponry to the South Vietnamese army (ARVN). To destroy communist sanctuaries along the border, Nixon secretly ordered B-52 carpet bombing of neutral Cambodia (Operation Menu), concealed from Congress via dual record-keeping. In April 1970, Nixon announced an open ground incursion into Cambodia, triggering nationwide campus strikes; on May 4, Ohio National Guardsmen shot and killed four students at Kent State University. In response, Congress passed the Cooper-Church Amendment, legally prohibiting U.S. troops from operating in Cambodia or Laos—the first congressional restriction on troop deployments during an ongoing war. In 1971, the disastrous ARVN retreat during Operation Lam Son 719 in Laos, followed by Hanoi’s massive conventional 1972 Easter Offensive, demonstrated that South Vietnam could hold with massive U.S. air support (Operation Linebacker I), but could not survive on its own.',
    examTakeaways: [
      'Vietnamization Doctrine: Designed to reduce American casualties and quiet domestic protests by substituting South Vietnamese infantry for American soldiers while keeping U.S. air and logistical power in place.',
      'Expansion into Cambodia & Kent State: Expanding the war into Cambodia ignited unprecedented domestic unrest, leading to the Kent State shootings and nationwide university closures.',
      'Congressional War Powers Resurgence: Congress took historic steps to curtail executive war authority, passing the Cooper-Church Amendment and repealing the Gulf of Tonkin Resolution.',
    ],
    keyTerms: [
      {
        id: 'vietnamization',
        term: 'Vietnamization',
        phonetic: 'vyet-NAM-ih-ZAY-shun',
        definition:
          'President Nixon’s policy of equipping and training South Vietnamese armed forces to take over combat operations while systematically withdrawing American ground combat divisions.',
        significance:
          'Reduced U.S. troop levels from 543,000 in 1969 to under 25,000 by 1972, lowering American draft calls and casualty lists while intensifying aerial bombing.',
        examTip: 'High frequency. Paired with the Nixon Doctrine on AP exams.',
      },
      {
        id: 'kent-state-shootings',
        term: 'Kent State Shootings (May 4, 1970)',
        phonetic: 'KENT STAYT',
        definition:
          'The shooting of unarmed student protesters by Ohio National Guardsmen at Kent State University during anti-war demonstrations against the Cambodian Incursion, killing four students and wounding nine.',
        significance:
          'Triggered a nationwide student strike that shut down over 400 colleges and universities, polarizing American society and deepening anti-war sentiment.',
        examTip: 'Symbol of domestic polarization; immortalized in the Crosby, Stills, Nash & Young song "Ohio".',
      },
      {
        id: 'operation-menu',
        term: 'Operation Menu (1969–1970)',
        phonetic: 'OP-uh-RAY-shun MEN-yoo',
        definition:
          'The secret B-52 carpet-bombing campaign conducted against North Vietnamese base camps and sanctuaries inside neutral Cambodia, code-named Breakfast, Lunch, Snack, Dinner, and Dessert.',
        significance:
          'Concealed from Congress and the public through fraudulent military flight logs; destabilized rural Cambodia and contributed to the rise of the Khmer Rouge.',
        examTip: 'Became a specific article in the draft articles of impeachment against Nixon in 1974.',
      },
    ],
  },
  quiz: [
    {
      id: 'c8-q1',
      question:
        'What was the primary constitutional significance of the Cooper-Church Amendment passed by the Senate in 1970 following the Cambodian Incursion?',
      options: [
        'It marked the first time Congress legally barred the President from using funds to deploy ground combat troops and advisers to a foreign theater (Cambodia) during an active war.',
        'It granted the President permanent lifetime emergency powers to bomb any nation bordering Vietnam.',
        'It officially declared war on Cambodia and Laos.',
        'It mandated that all future presidential treaties be approved by popular referendum.',
      ],
      correctIndex: 0,
      rationale:
        'The Cooper-Church Amendment was a landmark resurgence of congressional constitutional authority, legally prohibiting the use of congressional funds for American ground troops, advisers, and air combat support in Cambodia after June 30, 1970.',
      citationRef: 'c8-1',
    },
    {
      id: 'c8-q2',
      question:
        'What major vulnerability of "Vietnamization" was exposed during Operation Lam Son 719 in February 1971?',
      options: [
        'The South Vietnamese air force ran out of jet fuel on the first day of fighting.',
        'When ARVN divisions crossed into Laos without American ground advisers or tactical commanders, they suffered disastrous casualties and fled in panic, clinging to helicopter skids.',
        'The North Vietnamese army surrendered all heavy artillery without firing a shot.',
        'The Chinese military sent three armies across the border to defend the Plain of Jars.',
      ],
      correctIndex: 1,
      rationale:
        'Lam Son 719 was designed to test whether ARVN could fight independently. Without American infantry advisers on the ground, three South Vietnamese divisions were badly mauled by North Vietnamese armor and heavy artillery, turning their withdrawal down Route 9 into a chaotic rout broadcast on television.',
      citationRef: 'c8-3',
    },
    {
      id: 'c8-q3',
      question:
        'What was the historiographical concept of the "Decent Interval" associated with Nixon and Kissinger’s exit strategy?',
      options: [
        'A plan to pause bombing every Christmas for ten days to conduct gift exchanges.',
        'The strategy of delaying South Vietnam’s eventual collapse until enough time had passed following American withdrawal so Washington would not be blamed for the defeat.',
        'A proposed 50-year joint economic agreement between Hanoi and Saigon.',
        'A diplomatic treaty signed between the U.S. and the Soviet Union in 1969.',
      ],
      correctIndex: 1,
      rationale:
        'Scholars (such as Jeffrey Kimball and Frank Snepp) argue that declassified tapes show Nixon and Kissinger privately recognized South Vietnam could not survive indefinitely. They sought a "decent interval"—a year or two between U.S. troop withdrawal and Saigon’s collapse—so the defeat would appear to be South Vietnam’s fault rather than America’s.',
      citationRef: 'c8-1',
    },
  ],
  flashcards: [
    {
      id: 'c8-fc1',
      term: 'The Nixon Doctrine',
      phonetic: 'NIK-sun DOK-trin',
      definition:
        'Foreign policy announcement by President Nixon in Guam (1969) stating that the U.S. would provide economic and military aid to Asian allies, but that allies must provide their own ground combat troops.',
      significance:
        'Shifted American grand strategy away from direct land troop interventions in the Third World toward proxy warfare and airpower.',
      examTip: 'The intellectual foundation for Vietnamization.',
    },
    {
      id: 'c8-fc2',
      term: 'The "Madman Theory"',
      phonetic: 'MAD-man THEE-uh-ree',
      definition:
        'Nixon’s calculated negotiating tactic of convincing communist leaders that he was volatile, unpredictable, and prepared to use nuclear weapons if the war continued.',
      significance:
        'Used to pressure Hanoi, Moscow, and Beijing into making diplomatic concessions in Paris.',
      examTip: 'Revealed in H.R. Haldeman’s White House diaries and memoirs.',
    },
    {
      id: 'c8-fc3',
      term: 'Operation Linebacker I (1972)',
      phonetic: 'LINE-bak-er ONE',
      definition:
        'Massive U.S. aerial bombardment campaign and mining of Haiphong harbor launched by Nixon to halt North Vietnam’s conventional Easter Offensive.',
      significance:
        'Used laser-guided "smart bombs" for the first time on a large scale, destroying vital rail lines and bridges and stopping Hanoi’s armored advance in the South.',
      examTip: 'Proved South Vietnam could survive conventional invasion only with overwhelming American airpower.',
    },
  ],
};
