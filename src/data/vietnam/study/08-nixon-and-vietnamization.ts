import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 8: NIXON, VIETNAMIZATION & CAMBODIA ──────────────────────────────
export const VIETNAMIZATION_STUDY_DATA: ChapterStudyData = {
  chapterId: 'nixon-and-vietnamization',
  bigQuestion:
    'Was Nixon’s “Vietnamization” a real plan for South Vietnam to stand alone, or a way to buy a “decent interval” before it fell?',
  whyItMatters:
    'The withdrawal took four years. Along the way the war spread into Cambodia, campus protests such as Kent State shook the country, and Congress put new limits on the president’s power.',
  whatYouWillLearn: [
    'How the Nixon Doctrine and “Vietnamization” brought home 500,000 U.S. troops while the air war grew.',
    'How the secret bombing of Cambodia (Operation Menu) and the 1970 ground attack there set off protests on campuses across the country.',
    'How Operation Lam Son 719 and the 1972 Easter Offensive showed that South Vietnam’s army depended on American air power.',
  ],
  briefing: {
    summary:
      'When Richard Nixon took office in 1969, he and National Security Adviser Henry Kissinger were under heavy pressure to stop American casualties. Under “Vietnamization” and the Nixon Doctrine, the U.S. began pulling out ground troops. Their number fell from 543,000 to 24,000 by late 1972. The fighting, and modern weapons, were handed to South Vietnam’s army, the ARVN. To destroy communist bases along the border, Nixon secretly ordered B-52s to bomb neutral Cambodia in Operation Menu. False records hid it from Congress. In April 1970, Nixon announced that ground troops were entering Cambodia, and campuses across the country went on strike. On May 4, Ohio National Guardsmen shot and killed four students at Kent State University. Congress answered with the Cooper-Church Amendment, which barred U.S. troops from Cambodia and Laos. It was the first time Congress had restricted troop deployments during a war. In 1971, the ARVN’s retreat in Operation Lam Son 719 in Laos went badly. In 1972, Hanoi launched its Easter Offensive with tanks and regular divisions. South Vietnam held with massive U.S. air support, called Operation Linebacker I. It could not have held alone.',
    examTakeaways: [
      'Vietnamization: The plan was to cut American casualties and calm protests at home. South Vietnamese infantry replaced American soldiers, while U.S. air power and supplies stayed.',
      'Cambodia and Kent State: Taking the war into Cambodia set off huge protests at home. They led to the Kent State shootings and closed universities across the country.',
      'Congress pushes back: Congress moved to limit the president’s war powers. It passed the Cooper-Church Amendment and repealed the Gulf of Tonkin Resolution.',
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
        examTip: 'A symbol of how divided the country was. Crosby, Stills, Nash & Young wrote the song “Ohio” about it.',
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
        'What was the primary constitutional significance of the Cooper-Church Amendment passed by the Senate in 1970 following the Cambodian Incursion?',
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
        'What major vulnerability of “Vietnamization” was exposed during Operation Lam Son 719 in February 1971?',
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
        'What was the historiographical concept of the “Decent Interval” associated with Nixon and Kissinger’s exit strategy?',
      options: [
        'A planned pause in bombing to let Hanoi and Saigon hold national elections',
        'Delaying South Vietnam’s fall long enough after U.S. withdrawal to avoid blame',
        'A promise that U.S. troops would stay in South Vietnam for a decade after the war',
        'A Soviet-American agreement to stop shipping weapons to either side in Vietnam',
      ],
      correctIndex: 1,
      rationale:
        'Scholars such as Jeffrey Kimball and Frank Snepp argue that the White House tapes show Nixon and Kissinger knew South Vietnam could not survive for long. In this view, they wanted a “decent interval” of a year or two between the U.S. withdrawal and Saigon’s fall, so that the defeat would look like South Vietnam’s and not America’s.',
      citationRef: 'c8-1',
    },
    {
      id: 'c8-q4',
      imageId: 'nixon-cambodia-1970',
      question:
        'The announcement shown in the photograph most directly led to which of the following?',
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
      term: 'The “Madman Theory”',
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
        'It was the first large-scale use of laser-guided “smart bombs.” They destroyed key rail lines and bridges and stopped Hanoi’s tanks in the South.',
      examTip: 'It showed that South Vietnam could survive an invasion only with overwhelming American air power.',
    },
  ],
};
