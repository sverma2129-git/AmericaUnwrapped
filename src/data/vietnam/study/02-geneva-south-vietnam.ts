import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 2: GENEVA & CREATION OF SOUTH VIETNAM ───────────────────────────
export const GENEVA_STUDY_DATA: ChapterStudyData = {
  chapterId: 'geneva-south-vietnam',
  bigQuestion:
    'Why were the nationwide elections promised by the 1954 Geneva Accords never held—and how was the southern insurgency born?',
  whyItMatters:
    'Explains how a temporary ceasefire line hardened into two hostile states, and why local southern opposition coalesced into the National Liberation Front (Viet Cong).',
  whatYouWillLearn: [
    'Why Ngo Dinh Diem and the United States refused to hold the 1956 reunification elections.',
    'How Diem consolidated power in Saigon while alienating Buddhist majorities and rural peasants.',
    'How southern guerrilla resistance organized into the National Liberation Front (NLF) with Hanoi’s backing.',
  ],
  briefing: {
    summary:
      'The 1954 Geneva Accords called for nationwide democratic elections in July 1956 to unify Vietnam. However, neither the United States nor the newly formed State of Vietnam signed the final declaration. Backed by American aid and CIA operative Edward Lansdale, Prime Minister Ngo Dinh Diem ousted Emperor Bao Dai in a rigged referendum, proclaimed the Republic of Vietnam, and refused to hold reunification elections—fearing Ho Chi Minh would win overwhelmingly. Diem’s aggressive land policies, Catholic favoritism, and harsh "Denounce the Communists" campaigns alienated rural villages, sparking indigenous armed resistance that organized as the National Liberation Front (Viet Cong) in December 1960.',
    examTakeaways: [
      'Cancellation of 1956 Elections: U.S. and South Vietnamese officials blocked nationwide elections because intelligence estimated Ho Chi Minh would win up to 80% of the popular vote.',
      'Diem’s Alienating Policies: Reversing Viet Minh land distribution and replacing elected village chiefs with Catholic loyalists created deep peasant resentment.',
      'Creation of the Viet Cong: The National Liberation Front (NLF) was formed in December 1960 as a southern political-military coalition backed by northern weapons and infiltration.',
    ],
    keyTerms: [
      {
        id: 'ngo-dinh-diem',
        term: 'Ngo Dinh Diem',
        phonetic: 'NOH DIN ZEE-em',
        definition:
          'Staunchly anti-communist Catholic politician who served as President of the Republic of Vietnam (South Vietnam) from 1955 until his assassination in a military coup in 1963.',
        significance:
          'America’s chosen ally to build an independent non-communist southern state, whose authoritarianism and nepotism ultimately crippled his regime.',
        examTip: 'High frequency. Central figure in discussions of early nation-building and the 1963 Buddhist Crisis.',
      },
      {
        id: 'viet-cong-nlf',
        term: 'National Liberation Front (NLF / Viet Cong)',
        phonetic: 'VYET KONG',
        definition:
          'The communist-led insurgent organization formed in South Vietnam in December 1960 to overthrow the Diem government and reunify the country.',
        significance:
          'Conducted guerrilla warfare across South Vietnamese villages and provinces, heavily supported by North Vietnam via the Ho Chi Minh Trail.',
        examTip: '"Viet Cong" was a derogatory label coined by Diem meaning "Vietnamese Communist"; members called themselves the NLF.',
      },
      {
        id: 'passage-to-freedom',
        term: 'Operation Passage to Freedom (1954–1955)',
        phonetic: 'PAS-ij too FREE-dum',
        definition:
          'The U.S. Navy-assisted migration of approximately 900,000 northern Vietnamese refugees—primarily Catholics—from North Vietnam to the South following the Geneva partition.',
        significance:
          'Provided Diem with a fiercely loyal Catholic political and military constituency in the South, while generating significant sectarian tension with the Buddhist majority.',
        examTip: 'Helped fuel Diem’s regime with anti-communist administrators and military officers.',
      },
    ],
  },
  quiz: [
    {
      id: 'c2-q1',
      question:
        'Why did South Vietnamese President Ngo Dinh Diem refuse to conduct the nationwide reunification elections scheduled for July 1956 by the Geneva Accords?',
      options: [
        'The Soviet Union vetoed the elections in the United Nations Security Council.',
        'Diem and his American advisers knew that Ho Chi Minh’s national prestige would lead to an overwhelming communist victory.',
        'North Vietnam had disbanded its government and refused to participate.',
        'The United States had already signed a formal mutual defense treaty barring elections.',
      ],
      correctIndex: 1,
      rationale:
        'President Eisenhower later acknowledged in his memoirs that had nationwide elections been held in 1956, Ho Chi Minh would have won an estimated 80% of the vote due to his status as the national liberator who defeated French colonialism.',
      citationRef: 'c2-1',
    },
    {
      id: 'c2-q2',
      question:
        'Which of Diem’s internal domestic policies generated the most intense resentment among rural South Vietnamese peasants?',
      options: [
        'Mandatory conversion to Buddhism for all government employees.',
        'Confiscating land distributed by the Viet Minh and restoring absentee landlords to collect rent.',
        'Abolishing the military draft in favor of private foreign mercenaries.',
        'Encouraging direct diplomatic alliances with the People’s Republic of China.',
      ],
      correctIndex: 1,
      rationale:
        'During the anti-colonial war, the Viet Minh had distributed French-held farmland to poor peasants. Diem’s land counter-reforms forced peasants to return land to wealthy absentee landlords and pay back-rent, driving thousands into the arms of the southern insurgency.',
      citationRef: 'c2-2',
    },
    {
      id: 'c2-q3',
      question:
        'What was the official name of the southern insurgent coalition established in December 1960, commonly referred to by American troops as the "Viet Cong"?',
      options: [
        'The National Liberation Front (NLF)',
        'The Provisional Revolutionary Alliance',
        'The Khmer Rouge People’s League',
        'The Southeast Asia Defense Pact',
      ],
      correctIndex: 0,
      rationale:
        'Formed on December 20, 1960, the National Liberation Front (NLF) brought together southern nationalists, communists, and peasant leagues under northern guidance to wage guerrilla warfare against the Saigon regime.',
      citationRef: 'c2-3',
    },
  ],
  flashcards: [
    {
      id: 'c2-fc1',
      term: 'Ngo Dinh Nhu',
      phonetic: 'NOH DIN NYOO',
      definition:
        'President Diem’s powerful younger brother and chief political adviser who headed the secret police and the Strategic Hamlet Program.',
      significance:
        'His brutal crackdowns on Buddhist monks and political dissidents in 1963 triggered the international crisis that led Washington to sanction the coup against Diem.',
      examTip: 'His wife, Madame Nhu, notoriously mocked Buddhist self-immolations as "barbecues".',
    },
    {
      id: 'c2-fc2',
      term: 'Law 10/59',
      phonetic: 'LAW TEN FIFTY-NINE',
      definition:
        'Repressive 1959 decree enacted by Diem establishing mobile military tribunals to execute anyone suspected of communist affiliation, often using guillotines.',
      significance:
        'Terrorized southern rural populations and convinced former Viet Minh cadres that peaceful political opposition was impossible, catalyzing armed guerrilla warfare.',
      examTip: 'Direct catalyst for Hanoi authorizing southern armed insurgency in 1959 (Resolution 15).',
    },
    {
      id: 'c2-fc3',
      term: 'SEATO',
      phonetic: 'SEE-toh',
      definition:
        'The Southeast Asia Treaty Organization, a regional collective defense alliance created by Secretary of State John Foster Dulles in September 1954.',
      significance:
        'Used by the U.S. government as the legal umbrella to justify military protection of South Vietnam, Laos, and Cambodia.',
      examTip: 'Frequently cited in the Gulf of Tonkin Resolution as the treaty obligation requiring U.S. intervention.',
    },
  ],
};
