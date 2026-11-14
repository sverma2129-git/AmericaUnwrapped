import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 6: THE SECRET WAR & THE HO CHI MINH TRAIL ───────────────────────
export const SECRET_WAR_STUDY_DATA: ChapterStudyData = {
  chapterId: 'the-secret-war',
  bigQuestion:
    'What did America’s hidden war in Laos and South Vietnam achieve, and what did it cost?',
  whyItMatters:
    'The war spread in secret into neutral countries next door. This chapter covers the CIA’s war in Laos and the disputed Phoenix Program.',
  whatYouWillLearn: [
    'How North Vietnam built a supply route through Laos and Cambodia, the Ho Chi Minh Trail, that bombing could not close.',
    'Why Laos became the most heavily bombed country per person in history.',
    'How the CIA’s Phoenix Program went after the Viet Cong’s civilian political network.',
  ],
  briefing: {
    summary:
      'To keep the war in the South going, Hanoi built the Truong Son supply network, known as the Ho Chi Minh Trail. It ran through the jungle mountains of Laos and Cambodia, both neutral countries. Over 16 years it grew from a footpath into 12,000 miles of roads, truck parks, underground fuel pipelines and repair depots. The U.S. wanted to cut it without openly breaking the 1962 Geneva Accords, which guaranteed Laos’s neutrality. So it fought a "Secret War." American planes flew more than 580,000 bombing missions and dropped more than 2 million tons of bombs on Laos. That equals one planeload every eight minutes for nine years. The CIA also raised a guerrilla army of 30,000 Hmong fighters under General Vang Pao. In South Vietnam, the CIA started the Phoenix Program. It "neutralized" more than 81,000 suspected members of the Viet Cong’s civilian network by identifying, interrogating and killing them.',
    examTakeaways: [
      'The Ho Chi Minh Trail: The supply route that kept communist forces in the South armed and reinforced through years of American bombing.',
      'Laos, the most bombed nation: To cut the trail, the U.S. bombed neutral Laos on a massive scale and did not admit it. Tens of millions of unexploded cluster bomblets were left behind.',
      'The Phoenix Program (Phung Hoang): It targeted the Viet Cong’s civilian shadow government. Corruption, arbitrary arrests and targeted killings made it one of the most disputed programs of the war.',
    ],
    keyTerms: [
      {
        id: 'ho-chi-minh-trail',
        term: 'Ho Chi Minh Trail (Truong Son Network)',
        phonetic: 'HOH CHEE MIN TRAYL',
        definition:
          'A 12,000-mile web of hidden roads, jungle paths, river crossings and fuel pipelines through Laos and Cambodia. North Vietnam used it to move troops and supplies to South Vietnam.',
        significance:
          'It was the supply line Hanoi’s war depended on. American planes bombed it again and again and never closed it for good.',
        examTip: 'It ran through neutral countries, which is why the U.S. fought secret, undeclared air wars there.',
      },
      {
        id: 'phoenix-program',
        term: 'Phoenix Program (Phung Hoang)',
        phonetic: 'FEE-niks PROH-gram',
        definition:
          'A joint CIA and South Vietnamese intelligence program (1967–1972). Its aim was to find and break up the Viet Cong’s civilian shadow government in southern villages.',
        significance:
          'It "neutralized" more than 81,000 suspects and killed about 26,000 of them. It badly damaged guerrilla networks in the countryside, and Congress condemned it for torture and killings without trial.',
        examTip: 'Often cited in questions about secret warfare, ethics and counterinsurgency.',
      },
      {
        id: 'secret-war-laos',
        term: 'The Secret War in Laos (1964–1973)',
        phonetic: 'SEE-krit WOR in LAH-ohs',
        definition:
          'A hidden U.S. military and CIA campaign. It backed the Royal Lao Government and Hmong guerrillas against the communist Pathet Lao and North Vietnam’s supply routes.',
        significance:
          'It was fought in secret, without approval from Congress, and made Laos the most heavily bombed country per person on Earth.',
        examTip: 'More than 80 million unexploded cluster bomblets, called "bombies," still lie in Laotian farmland.',
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
        'In 1962, the U.S. signed the Declaration on the Neutrality of Laos in Geneva. North Vietnam broke the agreement by running the Ho Chi Minh Trail through Laos. The U.S. answered with massive air strikes that it hid from the public through false record-keeping and CIA cover.',
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
        'The Phoenix Program went after the Viet Cong’s civilian network, not its soldiers in the jungle. These were the people who collected taxes, recruited young people, spread propaganda and ran villages at night.',
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
        'The CIA recruited more than 30,000 Hmong fighters led by General Vang Pao. This "Secret Army" fought North Vietnamese regular divisions, rescued American pilots who had been shot down, and took very heavy losses.',
      citationRef: 'c6-3',
    },
    {
      id: 'c6-q4',
      imageId: 'ranch-hand',
      question:
        'The operation shown in the photograph was mainly intended to do which of the following?',
      options: [
        'Strip away forest cover and crops used by enemy forces',
        'Drop leaflets urging North Vietnamese soldiers to surrender',
        'Deliver food and medicine to isolated South Vietnamese villages',
        'Mark bombing targets along the border with North Vietnam',
      ],
      correctIndex: 0,
      rationale:
        'Operation Ranch Hand sprayed herbicides over South Vietnam from 1962 to 1971 to remove the forest cover that hid enemy forces and to destroy crops that fed them.',
    },
  ],
  flashcards: [
    {
      id: 'c6-fc1',
      term: 'General Vang Pao',
      phonetic: 'VAHNG POW',
      definition:
        'A major general in the Royal Lao Army and the military leader of the Hmong. He commanded the CIA-funded "Secret Army" in Laos.',
      significance:
        'He led Hmong forces against the North Vietnamese for more than ten years. After the communists took power in 1975, he helped tens of thousands of Hmong refugees resettle in the United States.',
      examTip: 'A central figure in the history of Hmong Americans, especially in Minnesota and California.',
    },
    {
      id: 'c6-fc2',
      term: 'Cluster Bombs (UXO)',
      phonetic: 'KLUS-ter BOMZ',
      definition:
        'Bombs dropped over Laos and Vietnam that scatter hundreds of baseball-sized bomblets, each meant to explode when it hits.',
      significance:
        'Up to 30% did not explode. An estimated 80 million live bomblets were left in Laotian soil, and they have killed or injured more than 20,000 civilians since 1973.',
      examTip: 'A major topic in postwar bomb-clearing and reconciliation work.',
    },
    {
      id: 'c6-fc3',
      term: 'William Colby',
      phonetic: 'KOL-bee',
      definition:
        'A senior CIA official who ran the civilian pacification effort (CORDS) and the Phoenix Program in South Vietnam. He later became Director of Central Intelligence.',
      significance:
        'He defended the Phoenix Program before Congress in 1971. He admitted to abuses and insisted it was the most effective counterinsurgency program of the war.',
      examTip: 'A key figure in the Church Committee’s investigations of CIA secret operations.',
    },
  ],
};
