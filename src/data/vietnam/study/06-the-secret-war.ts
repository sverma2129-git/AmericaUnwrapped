import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 6: THE SECRET WAR & THE HO CHI MINH TRAIL ───────────────────────
export const SECRET_WAR_STUDY_DATA: ChapterStudyData = {
  chapterId: 'the-secret-war',
  bigQuestion:
    'What did America’s secret war in Laos and South Vietnam cost?',
  whyItMatters:
    'The fighting spread into Laos, a neutral country, without most Americans knowing. Unexploded American bombs still lie in Laotian farmland.',
  whatYouWillLearn: [
    'How North Vietnam built a supply route through Laos and Cambodia, the Ho Chi Minh Trail, that bombing could not close.',
    'Why Laos became the most heavily bombed country per person in history.',
    'How the CIA’s Phoenix Program went after the Viet Cong’s civilian political network.',
  ],
  briefing: {
    summary:
      'To keep the war in the South going, Hanoi built the Truong Son supply network, known as the Ho Chi Minh Trail. It ran through the jungle mountains of Laos and Cambodia, both neutral countries. Over 16 years it grew from a footpath into 12,000 miles of roads, truck parks, underground fuel pipelines and repair depots. The U.S. wanted to cut it without openly breaking the 1962 Geneva Accords, which guaranteed Laos’s neutrality. So it fought a Secret War. American planes flew more than 580,000 bombing missions and dropped more than 2 million tons of bombs on Laos. That equals one planeload every eight minutes for nine years. The CIA also raised a guerrilla army of 30,000 Hmong fighters under General Vang Pao. In South Vietnam, the CIA started the Phoenix Program. It neutralized more than 81,000 suspected members of the Viet Cong’s civilian network by identifying, interrogating and killing them.',
    examTakeaways: [
      'The Ho Chi Minh Trail carried soldiers and supplies from North Vietnam to the South through Laos and Cambodia. Years of American bombing never shut it down.',
      'To cut the trail, the United States bombed neutral Laos on a huge scale and did not admit it. Tens of millions of unexploded cluster bomblets were left behind.',
      'The Phoenix Program went after the Viet Cong’s hidden government. Arrest quotas and killings without trial made it one of the most disputed programs of the war.',
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
          'It neutralized more than 81,000 suspects and killed about 26,000 of them. It badly damaged guerrilla networks in the countryside, and Congress condemned it for torture and killings without trial.',
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
        examTip: 'More than 80 million unexploded cluster bomblets, called bombies, still lie in Laotian farmland.',
      },
    ],
  },
  quiz: [
    {
      id: 'c6-q1',
      question:
        'Why did the United States keep its bombing campaigns in Laos, such as Barrel Roll and Steel Tiger, secret from the public and Congress?',
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
        'Who was the main target of the Phoenix Program?',
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
        'Which group in the mountains of Laos did the CIA recruit, train and pay to fight North Vietnamese troops?',
      options: [
        'The Hmong, led by General Vang Pao',
        'The Montagnards of the Central Highlands',
        'The Khmer Krom of the Mekong Delta',
        'The Karen people of eastern Burma',
      ],
      correctIndex: 0,
      rationale:
        'The CIA recruited more than 30,000 Hmong fighters led by General Vang Pao. This Secret Army fought North Vietnamese regular divisions, rescued American pilots who had been shot down, and took very heavy losses.',
      citationRef: 'c6-3',
    },
    {
      id: 'c6-q4',
      imageId: 'ranch-hand',
      question:
        'What was the operation in the photograph mainly meant to do?',
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
    {
      id: 'c6-q5',
      question: 'Testimony in Congress showed how most of the people counted as killed by the Phoenix Program actually died?',
      options: [
        'In regular military operations and artillery fire',
        'In secret prisons run by the CIA and its allies',
        'In Viet Cong ambushes on Phoenix teams',
        'During targeted police arrests carried out at night',
      ],
      correctIndex: 0,
      rationale: 'About 87 percent of those killed died in regular military operations and artillery fire, not in targeted police actions. Monthly quotas led officials to pad their reports with ordinary combat deaths.',
      citationRef: 'c6-3',
    },
    {
      id: 'c6-q6',
      question: 'Agent Orange, sprayed in Operation Ranch Hand, was contaminated with what?',
      options: [
        'Radioactive waste from American nuclear tests in the Pacific',
        'A nerve agent also used in bombs and artillery shells',
        'A dioxin that causes cancer and lingers in the soil',
        'Napalm left over from earlier burning missions',
      ],
      correctIndex: 2,
      rationale: 'Agent Orange was contaminated with a dioxin called 2,3,7,8-TCDD. About 11 million gallons were sprayed, and the harm lasted for decades, with higher rates of cancer and birth defects among Vietnamese civilians and American veterans.',
      citationRef: 'c6-2',
    },
    {
      id: 'c6-q7',
      question: 'What did CORDS, set up under Robert Komer in May 1967, do?',
      options: [
        'Moved farmers into fortified villages across the countryside',
        'Began spraying plant-killing chemicals over South Vietnamese crops',
        'Trained and paid Hmong fighters in the mountains of Laos',
        'Merged civilian and military pacification work under MACV',
      ],
      correctIndex: 3,
      rationale: 'CORDS brought the civilian and military pacification efforts together under MACV. The Phoenix Program, which went after the Viet Cong’s hidden network, was run through it.',
      citationRef: 'c6-3',
    },
    {
      id: 'c6-q8',
      question: 'Who led the army of about 30,000 Hmong fighters that the CIA organized in Laos?',
      options: [
        'Nguyen Van Thieu',
        'General Vang Pao',
        'Le Duan',
        'William Colby',
      ],
      correctIndex: 1,
      rationale: 'General Vang Pao led the Hmong army, which the CIA organized to cut the Ho Chi Minh Trail. With Air America planes and secret B-52 raids, Laos became the most heavily bombed country per person in history.',
      citationRef: 'c6-1',
    },
    {
      id: 'c6-q9',
      question: 'This CIA map of South Vietnam uses figures from the Hamlet Evaluation System. What did U.S. officials use that system for?',
      imageId: 'hamlet-population-map-1972',
      options: [
        'To count enemy soldiers killed each month',
        'To track the number of U.S. troops',
        'To rate how secure each village was',
        'To plan bombing runs in Laos',
      ],
      correctIndex: 2,
      rationale: 'The Hamlet Evaluation System was how U.S. officials rated how secure each village was. Its ratings, like body counts, were used to show progress in the war, and historians debate how reliable they were.',
    },
  ],
  flashcards: [
    {
      id: 'c6-fc1',
      term: 'General Vang Pao',
      phonetic: 'VAHNG POW',
      definition:
        'A major general in the Royal Lao Army and the military leader of the Hmong. He commanded the CIA-funded Secret Army in Laos.',
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
