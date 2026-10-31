import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 6: THE SECRET WAR & THE HO CHI MINH TRAIL ───────────────────────
export const SECRET_WAR_STUDY_DATA: ChapterStudyData = {
  chapterId: 'the-secret-war',
  bigQuestion:
    'What did America’s hidden war—secret bombing in Laos, the Phoenix Program, and herbicide spraying—achieve, and what did it cost?',
  whyItMatters:
    'Reveals the secret regional expansion of the war into neutral neighboring countries, the CIA’s covert warfare in Laos, and the controversial Phoenix Program.',
  whatYouWillLearn: [
    'How North Vietnam built an indestructible logistics network through Laos and Cambodia (the Ho Chi Minh Trail).',
    'Why Laos became the most heavily bombed country per capita in human history.',
    'How the CIA’s Phoenix Program targeted the civilian political infrastructure of the Viet Cong.',
  ],
  briefing: {
    summary:
      'To sustain the insurgency in the South, Hanoi built the Truong Son Strategic Logistics Network—known as the Ho Chi Minh Trail—running through the jungle mountains of sovereign, neutral Laos and Cambodia. Over 16 years, the trail expanded from a foot trail into a 12,000-mile network of paved roads, truck parks, underground fuel pipelines, and repair depots. To sever this logistical lifeline without openly violating the 1962 Geneva Accords guaranteeing Laotian neutrality, the U.S. launched the "Secret War": flying over 580,000 bombing missions and dropping over 2 million tons of ordnance on Laos—equivalent to a planeload of bombs every eight minutes for nine years. Concurrently, the CIA mobilized a 30,000-man guerrilla army of indigenous Hmong tribesmen under General Vang Pao. In South Vietnam, the CIA initiated the Phoenix Program, neutralizing over 81,000 suspected Viet Cong civilian infrastructure cadres through intelligence identification, interrogation, and assassination.',
    examTakeaways: [
      'The Ho Chi Minh Trail: The indispensable logistical artery that kept the southern communist insurgency armed and replenished despite massive American bombing.',
      'Laos as Most Bombed Nation: To cut the Ho Chi Minh Trail, the U.S. bombed neutral Laos on a massive scale without publicly acknowledging it, leaving tens of millions of unexploded cluster bomblets.',
      'The Phoenix Program (Phung Hoang): Targeted the Viet Cong civilian political shadow government; highly controversial due to widespread corruption, arbitrary arrests, and targeted assassinations.',
    ],
    keyTerms: [
      {
        id: 'ho-chi-minh-trail',
        term: 'Ho Chi Minh Trail (Truong Son Network)',
        phonetic: 'HOH CHEE MIN TRAYL',
        definition:
          'A complex 12,000-mile network of camouflaged roads, jungle paths, river crossings, and fuel pipelines through Laos and Cambodia used by North Vietnam to transport troops and supplies to South Vietnam.',
        significance:
          'The decisive logistical backbone of Hanoi’s war effort, which American airpower repeatedly bombed but could never permanently sever.',
        examTip: 'Remember that it traversed neutral countries, leading the U.S. to wage secret, undeclared air wars.',
      },
      {
        id: 'phoenix-program',
        term: 'Phoenix Program (Phung Hoang)',
        phonetic: 'FEE-niks PROH-gram',
        definition:
          'Joint CIA-South Vietnamese counterinsurgency intelligence program (1967–1972) designed to identify and dismantle the Viet Cong Infrastructure (VCI)—the civilian shadow government in southern villages.',
        significance:
          'Neutralized over 81,000 suspected cadres (killing ~26,000), severely damaging rural guerrilla networks but drawing intense congressional condemnation for torture and extrajudicial killings.',
        examTip: 'Frequently cited in discussions of covert warfare, ethics, and counterinsurgency.',
      },
      {
        id: 'secret-war-laos',
        term: 'The Secret War in Laos (1964–1973)',
        phonetic: 'SEE-krit WOR in LAH-ohs',
        definition:
          'Covert U.S. military and CIA campaign supporting the Royal Lao Government and Hmong guerrillas against the communist Pathet Lao and North Vietnamese transport corridors.',
        significance:
          'Conducted in secret without congressional authorization, making Laos the most heavily bombed country per capita on Earth.',
        examTip: 'Over 80 million unexploded cluster submunitions ("bombies") still contaminate Laotian agricultural land today.',
      },
    ],
  },
  quiz: [
    {
      id: 'c6-q1',
      question:
        'Why did the United States keep its extensive military air campaigns in Laos (Operation Barrel Roll and Operation Steel Tiger) secret from the American public and Congress?',
      options: [
        'Congress had passed a law banning all U.S. military action inside Laos',
        'The U.S. had signed the 1962 Geneva agreement guaranteeing Laos’s neutrality',
        'The missions dropped only leaflets and supplies, not explosives',
        'The Soviet Union had warned it would treat any strike on Laos as an act of war',
      ],
      correctIndex: 1,
      rationale:
        'In 1962, the U.S. signed the Declaration on the Neutrality of Laos in Geneva. Because North Vietnam violated the treaty by running the Ho Chi Minh Trail through Laos, the U.S. responded with massive covert air strikes concealed from the public through dual bookkeeping and CIA cover.',
      citationRef: 'c6-1',
    },
    {
      id: 'c6-q2',
      question:
        'What was the primary target of the CIA-directed Phoenix Program (Phung Hoang) in South Vietnam?',
      options: [
        'North Vietnamese army divisions crossing the DMZ into South Vietnam',
        'Soviet supply ships unloading weapons in North Vietnam’s harbors',
        'The Viet Cong’s civilian political network of cadres and organizers',
        'South Vietnamese student protesters opposing the Saigon government',
      ],
      correctIndex: 2,
      rationale:
        'The Phoenix Program was not aimed at enemy military soldiers in the jungle, but at the civilian administrative apparatus (the Viet Cong Infrastructure) that collected taxes, recruited youth, distributed propaganda, and governed villages at night.',
      citationRef: 'c6-2',
    },
    {
      id: 'c6-q3',
      question:
        'Which indigenous ethnic minority in the mountains of Laos was recruited, trained, and financed by the CIA to fight North Vietnamese regulars along the Plain of Jars?',
      options: [
        'The Hmong, led by General Vang Pao',
        'The Montagnards of the Central Highlands',
        'The Khmer Krom of the Mekong Delta',
        'The Karen people of eastern Burma',
      ],
      correctIndex: 0,
      rationale:
        'The CIA recruited over 30,000 Hmong hill tribesmen led by General Vang Pao. Known as the "Secret Army," Hmong guerrillas fought pitched battles against North Vietnamese regular divisions, rescued downed American pilots, and suffered staggering casualty rates.',
      citationRef: 'c6-3',
    },
  ],
  flashcards: [
    {
      id: 'c6-fc1',
      term: 'General Vang Pao',
      phonetic: 'VAHNG POW',
      definition:
        'Major General in the Royal Lao Army and military leader of the Hmong community who commanded the CIA-funded Secret Army in Laos.',
      significance:
        'Led the Hmong resistance against North Vietnamese forces for over a decade; after the 1975 communist takeover, he assisted the resettlement of tens of thousands of Hmong refugees in the United States.',
      examTip: 'Central figure in the history of the Hmong-American diaspora (particularly in Minnesota and California).',
    },
    {
      id: 'c6-fc2',
      term: 'Cluster Bombs (UXO)',
      phonetic: 'KLUS-ter BOMZ',
      definition:
        'CBU munitions dropped over Laos and Vietnam containing hundreds of baseball-sized explosive submunitions designed to detonate on impact.',
      significance:
        'Up to 30% failed to detonate upon impact, leaving an estimated 80 million active unexploded bomblets in Laotian soil that have killed or maimed over 20,000 civilians since 1973.',
      examTip: 'Major topic in post-war humanitarian demining and reconciliation efforts.',
    },
    {
      id: 'c6-fc3',
      term: 'William Colby',
      phonetic: 'KOL-bee',
      definition:
        'Senior CIA official who directed the civilian pacification effort (CORDS) and the Phoenix Program in South Vietnam, later serving as Director of Central Intelligence.',
      significance:
        'Defended the Phoenix Program before Congress in 1971, admitting to abuses while insisting it was the single most effective counterinsurgency program of the war.',
      examTip: 'Key figure in congressional Church Committee investigations into CIA covert actions.',
    },
  ],
};
