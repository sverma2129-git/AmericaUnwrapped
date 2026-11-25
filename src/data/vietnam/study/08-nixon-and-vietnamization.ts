import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 8: NIXON, VIETNAMIZATION & CAMBODIA ──────────────────────────────
export const VIETNAMIZATION_STUDY_DATA: ChapterStudyData = {
  chapterId: 'nixon-and-vietnamization',
  bigQuestion:
    'Did Nixon believe South Vietnam could fight on its own?',
  whyItMatters:
    'Bringing the troops home took four years. During that time the war spread to Cambodia, and protest at home turned deadly at Kent State.',
  whatYouWillLearn: [
    'How the Nixon Doctrine and Vietnamization brought home 500,000 U.S. troops while the air war grew.',
    'How the secret bombing of Cambodia (Operation Menu) and the 1970 ground attack there set off protests on campuses across the country.',
    'How Operation Lam Son 719 and the 1972 Easter Offensive showed that South Vietnam’s army depended on American air power.',
  ],
  briefing: {
    summary:
      'When Richard Nixon took office in 1969, he and National Security Adviser Henry Kissinger were under heavy pressure to stop American casualties. Under Vietnamization and the Nixon Doctrine, the U.S. began pulling out ground troops. Their number fell from 543,000 to 24,000 by late 1972. The fighting, and modern weapons, were handed to South Vietnam’s army, the ARVN. To destroy communist bases along the border, Nixon secretly ordered B-52s to bomb neutral Cambodia in Operation Menu. False records hid it from Congress. In April 1970, Nixon announced that ground troops were entering Cambodia, and campuses across the country went on strike. On May 4, Ohio National Guardsmen shot and killed four students at Kent State University. Congress answered with the Cooper-Church Amendment, which barred U.S. troops from Cambodia and Laos. It was the first time Congress had restricted troop deployments during a war. In 1971, the ARVN’s retreat in Operation Lam Son 719 in Laos went badly. In 1972, Hanoi launched its Easter Offensive with tanks and regular divisions. South Vietnam held with massive U.S. air support, called Operation Linebacker I. It could not have held alone.',
    examTakeaways: [
      'Vietnamization meant handing the ground war to South Vietnam’s army while American planes and supplies kept supporting it. Nixon wanted fewer American deaths and quieter campuses.',
      'Sending troops into Cambodia in 1970 set off protests across the country. At Kent State, Ohio National Guardsmen shot and killed four students.',
      'Congress started taking back war powers. It passed the Cooper-Church Amendment and repealed the Gulf of Tonkin Resolution.',
    ],
    keyTerms: [
      {
        id: 'vietnamization',
        term: 'Vietnamization',
        phonetic: 'vyet-NAM-ih-ZAY-shun',
        definition:
          'President Nixon’s policy of training and equipping South Vietnam’s forces to take over the fighting while American ground troops were withdrawn step by step.',
        significance:
          'It cut U.S. troop levels from 543,000 in 1969 to under 25,000 by 1972. Draft calls and American casualties fell, while bombing increased.',
        examTip: 'Shows up often. AP exams pair it with the Nixon Doctrine.',
      },
      {
        id: 'kent-state-shootings',
        term: 'Kent State Shootings (May 4, 1970)',
        phonetic: 'KENT STAYT',
        definition:
          'Ohio National Guardsmen shot unarmed students at Kent State University during protests against the move into Cambodia. Four students were killed and nine were wounded.',
        significance:
          'It set off a nationwide student strike that closed more than 400 colleges and universities. It divided the country and deepened opposition to the war.',
        examTip: 'A symbol of how divided the country was. Crosby, Stills, Nash & Young wrote the song Ohio about it.',
      },
      {
        id: 'operation-menu',
        term: 'Operation Menu (1969–1970)',
        phonetic: 'OP-uh-RAY-shun MEN-yoo',
        definition:
          'The secret B-52 bombing of North Vietnamese bases inside neutral Cambodia. Its phases were code-named Breakfast, Lunch, Snack, Dinner and Dessert.',
        significance:
          'Falsified flight records hid it from Congress and the public. It unsettled rural Cambodia and, some historians argue, helped the Khmer Rouge rise.',
        examTip: 'A proposed article of impeachment against Nixon in 1974 was based on it.',
      },
    ],
  },
  quiz: [
    {
      id: 'c8-q1',
      question:
        'How did the Cooper-Church Amendment of 1970 limit the war?',
      options: [
        'It gave the president open-ended authority to bomb both Cambodia and Laos',
        'It used Congress’s power of the purse to bar U.S. ground troops from Cambodia',
        'It formally declared war on North Vietnam for the first time since 1964',
        'It required a public referendum before any new troops could be sent abroad',
      ],
      correctIndex: 1,
      rationale:
        'With the Cooper-Church Amendment, Congress used its control of spending to limit the president. It barred the use of funds for American ground troops, advisers and air combat support in Cambodia after June 30, 1970.',
      citationRef: 'c8-1',
    },
    {
      id: 'c8-q2',
      question:
        'What did Operation Lam Son 719 in February 1971 reveal about Vietnamization?',
      options: [
        'South Vietnam’s air force ran out of jet fuel before the operation could even start',
        'North Vietnamese units pulled out of Laos without fighting the ARVN invasion',
        'Chinese army units crossed into Laos and forced the ARVN invasion force to turn back',
        'Without U.S. ground advisers, ARVN units in Laos suffered heavy losses and retreated',
      ],
      correctIndex: 3,
      rationale:
        'Lam Son 719 was a test of whether the ARVN could fight on its own. With no American advisers on the ground, three South Vietnamese divisions were badly beaten by North Vietnamese tanks and heavy artillery. Their retreat down Route 9 turned into a rout that was shown on television.',
      citationRef: 'c8-3',
    },
    {
      id: 'c8-q3',
      question:
        'What do historians mean by the decent interval?',
      options: [
        'A planned pause in bombing to let Hanoi and Saigon hold national elections',
        'Delaying South Vietnam’s fall long enough after U.S. withdrawal to avoid blame',
        'A promise that U.S. troops would stay in South Vietnam for a decade after the war',
        'A Soviet-American agreement to stop shipping weapons to either side in Vietnam',
      ],
      correctIndex: 1,
      rationale:
        'Scholars such as Jeffrey Kimball and Frank Snepp argue that the White House tapes show Nixon and Kissinger knew South Vietnam could not survive for long. In this view, they wanted a decent interval of a year or two between the U.S. withdrawal and Saigon’s fall, so that the defeat would look like South Vietnam’s and not America’s.',
      citationRef: 'c8-1',
    },
    {
      id: 'c8-q4',
      imageId: 'nixon-cambodia-1970',
      question:
        'The announcement in the photograph most directly led to which of these?',
      options: [
        'The first U.S. combat troops landing at Da Nang',
        'Congress passing the Gulf of Tonkin Resolution',
        'A new wave of campus protests, including Kent State',
        'North Vietnam’s withdrawal from the Paris peace talks',
      ],
      correctIndex: 2,
      rationale:
        'Nixon announced the move into Cambodia on April 30, 1970. Protests spread across college campuses within days, and on May 4 National Guard troops shot and killed four students at Kent State.',
    },
    {
      id: 'c8-q5',
      question: 'Nixon began bringing American ground troops home. About how many were left in Vietnam by late 1972, down from a peak of 543,000 in 1969?',
      options: [
        'About 24,000',
        'About 124,000',
        'About 224,000',
        'About 324,000',
      ],
      correctIndex: 0,
      rationale: 'Under Vietnamization, the number of American ground troops fell from a peak of 543,000 in 1969 to about 24,000 by late 1972. The plan was to hand the fighting to South Vietnam’s army.',
      citationRef: 'c8-1',
    },
    {
      id: 'c8-q6',
      question: 'What was kept secret about Operation Menu, which began in March 1969?',
      options: [
        'U.S. ground troops fought inside North Vietnam for the first time in the war',
        'B-52s bombed neutral Cambodia, and Congress was given false records',
        'The CIA ran a Hmong army of 30,000 fighters in Laos',
        'South Vietnamese troops were trained in secret camps in Cambodia',
      ],
      correctIndex: 1,
      rationale: 'B-52s secretly carpet-bombed neutral Cambodia, and the raids were hidden from Congress with a second set of records. In April 1970, U.S. and South Vietnamese troops then invaded Cambodia openly.',
      citationRef: 'c8-1',
    },
    {
      id: 'c8-q7',
      question: 'After U.S. and South Vietnamese troops invaded Cambodia in April 1970, protests broke out. What happened at Kent State on May 4?',
      options: [
        'Students took over the campus and shut down all classes for weeks',
        'The National Guard arrested hundreds of protesters at the gates',
        'Congress held a hearing on the campus about the Cambodia invasion',
        'Ohio National Guardsmen shot and killed four students',
      ],
      correctIndex: 3,
      rationale: 'Ohio National Guardsmen shot and killed four students at Kent State. Ten days later students were shot and killed at Jackson State. Hundreds of colleges closed, and Congress passed the Cooper-Church Amendment.',
      citationRef: 'c8-1',
    },
    {
      id: 'c8-q8',
      question: 'What kept South Vietnamese forces in cities like An Loc and Quang Tri during the 1972 Easter Offensive?',
      options: [
        'New U.S. ground divisions sent back to Vietnam from Okinawa and Hawaii',
        'Heavy U.S. air power and the mining of Haiphong harbor',
        'A Chinese decision to pull out of the fight and recall its advisers',
        'A peace deal reached with Hanoi before the invasion began',
      ],
      correctIndex: 1,
      rationale: 'South Vietnam held key cities only because of massive American bombing in Operation Linebacker I and the mining of Haiphong harbor. The South’s army could hold with American air power, but not without it.',
      citationRef: 'c8-2',
    },
    {
      id: 'c8-q9',
      question: 'What did Nixon announce at this meeting with South Vietnam’s President Thieu on Midway Island in June 1969?',
      imageId: 'midway-1969',
      options: [
        'The first withdrawal of 25,000 U.S. troops',
        'An invasion of Cambodia by U.S. and South Vietnamese forces',
        'The end of the draft for the rest of the war',
        'A peace treaty with North Vietnam signed in Paris',
      ],
      correctIndex: 0,
      rationale: 'At Midway, Nixon announced the first withdrawal of 25,000 American troops. It was the start of Vietnamization.',
    },
  ],
  flashcards: [
    {
      id: 'c8-fc1',
      term: 'The Nixon Doctrine',
      phonetic: 'NIK-sun DOK-trin',
      definition:
        'A policy President Nixon announced on Guam in 1969. The U.S. would give Asian allies money and military aid, but the allies would have to supply their own ground troops.',
      significance:
        'It moved American policy away from sending its own armies into wars in poorer countries, and toward backing allies and using air power.',
      examTip: 'It is the idea behind Vietnamization.',
    },
    {
      id: 'c8-fc2',
      term: 'The Madman Theory',
      phonetic: 'MAD-man THEE-uh-ree',
      definition:
        'Nixon’s negotiating tactic. He wanted communist leaders to believe he was unpredictable and might use nuclear weapons if the war went on.',
      significance:
        'He used it to press Hanoi, Moscow and Beijing to give ground in the Paris talks.',
      examTip: 'It is described in the diaries and memoirs of his chief of staff, H.R. Haldeman.',
    },
    {
      id: 'c8-fc3',
      term: 'Operation Linebacker I (1972)',
      phonetic: 'LINE-bak-er ONE',
      definition:
        'A massive U.S. bombing campaign, along with the mining of Haiphong harbor. Nixon ordered it to stop North Vietnam’s Easter Offensive.',
      significance:
        'It was the first large-scale use of laser-guided smart bombs. They destroyed key rail lines and bridges and stopped Hanoi’s tanks in the South.',
      examTip: 'It showed that South Vietnam could survive an invasion only with overwhelming American air power.',
    },
  ],
};
