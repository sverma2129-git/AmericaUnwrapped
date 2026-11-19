import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 2: GENEVA & CREATION OF SOUTH VIETNAM ───────────────────────────
export const GENEVA_STUDY_DATA: ChapterStudyData = {
  chapterId: 'geneva-south-vietnam',
  bigQuestion:
    'Why were the elections promised at Geneva never held, and how did the war in the South begin?',
  whyItMatters:
    'This is how a temporary ceasefire line became two hostile countries, and how opposition in the South grew into the National Liberation Front (the Viet Cong).',
  whatYouWillLearn: [
    'Why Ngo Dinh Diem and the United States refused to hold the 1956 elections.',
    'How Diem took control in Saigon while turning Buddhists and farmers against him.',
    'How guerrillas in the South formed the National Liberation Front (NLF) with Hanoi’s backing.',
  ],
  briefing: {
    summary:
      'The 1954 Geneva Accords called for nationwide elections in July 1956 to reunite Vietnam. But neither the United States nor the new State of Vietnam signed the final statement. Prime Minister Ngo Dinh Diem had American money and help from CIA officer Edward Lansdale. He removed Emperor Bao Dai in a rigged vote and declared the Republic of Vietnam. He refused to hold the elections because he expected Ho Chi Minh to win easily. Diem’s land rules, his favoring of Catholics, and his harsh “Denounce the Communists” campaigns turned villages against him. Armed resistance grew in the South and organized as the National Liberation Front (the Viet Cong) in December 1960.',
    examTakeaways: [
      'No elections in 1956: U.S. and South Vietnamese officials blocked the vote because they expected Ho Chi Minh to win as much as 80% of it.',
      'Diem loses the countryside: He reversed the Viet Minh’s land handouts and replaced elected village chiefs with Catholic loyalists. Farmers resented both.',
      'The Viet Cong forms: The National Liberation Front (NLF) was created in December 1960. It was a southern coalition, armed and reinforced from the North.',
    ],
    keyTerms: [
      {
        id: 'ngo-dinh-diem',
        term: 'Ngo Dinh Diem',
        imageId: 'diem-eisenhower-1957',
        phonetic: 'NOH DIN ZEE-em',
        definition:
          'A strongly anti-communist Catholic politician. He was president of the Republic of Vietnam (South Vietnam) from 1955 until he was killed in a military coup in 1963.',
        significance:
          'He was the leader America chose to build a non-communist South. His harsh rule and his reliance on his own family weakened his government.',
        examTip: 'Shows up often. He is central to questions about building South Vietnam and about the 1963 Buddhist Crisis.',
      },
      {
        id: 'viet-cong-nlf',
        term: 'National Liberation Front (NLF / Viet Cong)',
        phonetic: 'VYET KONG',
        definition:
          'The communist-led rebel organization formed in South Vietnam in December 1960. Its goals were to overthrow Diem’s government and reunite the country.',
        significance:
          'It fought a guerrilla war in villages across South Vietnam, with heavy support from North Vietnam down the Ho Chi Minh Trail.',
        examTip: '“Viet Cong” was an insulting label from Diem’s government that meant “Vietnamese Communist.” Members called themselves the NLF.',
      },
      {
        id: 'passage-to-freedom',
        term: 'Operation Passage to Freedom (1954–1955)',
        imageId: 'passage-to-freedom-1954',
        phonetic: 'PAS-ij too FREE-dum',
        definition:
          'The move of about 900,000 refugees, most of them Catholic, from North Vietnam to the South after the Geneva partition. The U.S. Navy helped carry them.',
        significance:
          'It gave Diem a loyal Catholic base of support in the South. It also raised tension with the Buddhist majority.',
        examTip: 'Many of these refugees became officials and army officers in Diem’s government.',
      },
    ],
  },
  quiz: [
    {
      id: 'c2-q1',
      question:
        'Why did South Vietnamese President Ngo Dinh Diem refuse to conduct the nationwide reunification elections scheduled for July 1956 by the Geneva Accords?',
      options: [
        'The Soviet Union blocked the vote in the United Nations Security Council',
        'He and his U.S. backers expected Ho Chi Minh to win a nationwide vote',
        'North Vietnam announced it would boycott any election held in the South',
        'The Geneva Accords had been cancelled when France left the conference',
      ],
      correctIndex: 1,
      rationale:
        'President Eisenhower later wrote in his memoirs that if elections had been held in 1956, Ho Chi Minh might have won about 80% of the vote. Ho was seen as the leader who had beaten the French.',
      citationRef: 'c2-1',
    },
    {
      id: 'c2-q2',
      question:
        'Which of Diem’s internal domestic policies generated the most intense resentment among rural South Vietnamese peasants?',
      options: [
        'Forcing rural families to hand over most of their rice harvest to the national army',
        'Opening South Vietnam’s villages to Chinese merchants and military advisers',
        'Banning traditional village festivals and ancestor worship in the countryside',
        'Taking back land the Viet Minh had given peasants and restoring landlords’ rents',
      ],
      correctIndex: 3,
      rationale:
        'During the war against France, the Viet Minh gave French-held farmland to poor farmers. Diem’s policy made them give the land back to wealthy absentee landlords and pay rent they had missed. That drove thousands to join the rebels.',
      citationRef: 'c2-2',
    },
    {
      id: 'c2-q3',
      question:
        'What was the official name of the southern insurgent coalition established in December 1960, commonly referred to by American troops as the “Viet Cong”?',
      options: [
        'The National Liberation Front (NLF)',
        'The Provisional Revolutionary Government',
        'The Vietnam Workers’ Party (Lao Dong)',
        'The Viet Minh League for Independence',
      ],
      correctIndex: 0,
      rationale:
        'The National Liberation Front (NLF) was formed on December 20, 1960. It brought together southern nationalists, communists and farmers’ groups, with guidance from the North, to fight a guerrilla war against the Saigon government.',
      citationRef: 'c2-3',
    },
    {
      id: 'c2-q4',
      imageId: 'diem-eisenhower-1957',
      question:
        'The 1957 welcome shown in the photograph best illustrates which U.S. policy?',
      options: [
        'Backing an anticommunist government in South Vietnam',
        'Supporting the nationwide elections promised at Geneva',
        'Withdrawing American aid and advisers from Southeast Asia',
        'Recognizing Ho Chi Minh’s government as Vietnam’s only one',
      ],
      correctIndex: 0,
      rationale:
        'President Eisenhower welcomed Ngo Dinh Diem to Washington in person in May 1957. The United States had backed Diem’s government in South Vietnam since 1954 as a barrier to communism.',
    },
  ],
  flashcards: [
    {
      id: 'c2-fc1',
      term: 'Ngo Dinh Nhu',
      phonetic: 'NOH DIN NYOO',
      definition:
        'President Diem’s younger brother and closest adviser. He ran the secret police and the Strategic Hamlet Program.',
      significance:
        'His crackdowns on Buddhist monks and on critics in 1963 set off the crisis that led Washington to accept a coup against Diem.',
      examTip: 'His wife, Madame Nhu, mocked the monks who burned themselves in protest, calling the deaths “barbecues.”',
    },
    {
      id: 'c2-fc2',
      term: 'Law 10/59',
      phonetic: 'LAW TEN FIFTY-NINE',
      definition:
        'A 1959 decree from Diem that set up traveling military courts. They could execute anyone suspected of communist ties, sometimes by guillotine.',
      significance:
        'It spread fear in the countryside. It also convinced former Viet Minh members that peaceful opposition was impossible, which pushed them toward armed struggle.',
      examTip: 'It helped lead Hanoi to approve armed struggle in the South in 1959 (Resolution 15).',
    },
    {
      id: 'c2-fc3',
      term: 'SEATO',
      phonetic: 'SEE-toh',
      definition:
        'The Southeast Asia Treaty Organization. Secretary of State John Foster Dulles created this defense alliance in September 1954.',
      significance:
        'The U.S. government used it as the legal basis for protecting South Vietnam, Laos and Cambodia.',
      examTip: 'The Gulf of Tonkin Resolution cites SEATO as a treaty duty that required the U.S. to act.',
    },
  ],
};
