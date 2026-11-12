import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 1: FRENCH INDOCHINA & DIEN BIEN PHU ─────────────────────────────
export const DIEN_BIEN_PHU_STUDY_DATA: ChapterStudyData = {
  chapterId: 'french-indochina-dien-bien-phu',
  bigQuestion:
    'Why did the United States fund 80% of France’s colonial war in Indochina—and why did the French fortress at Dien Bien Phu collapse?',
  whyItMatters:
    'Marks the critical transition where the U.S. shifted from seeing Vietnam as a European colonial issue to an existential Cold War containment front, laying the direct foundation for American military entanglement.',
  whatYouWillLearn: [
    'How Ho Chi Minh used the American Declaration of Independence to claim sovereignty in 1945.',
    'How the Korean War and the "Domino Theory" persuaded Eisenhower and Truman to underwrite French forces.',
    'Why General Navarre’s entrenched valley trap at Dien Bien Phu was dismantled by Vo Nguyen Giap’s mountain artillery.',
  ],
  briefing: {
    summary:
      'Following WWII, Ho Chi Minh declared Vietnamese independence, but France launched a military campaign to reclaim its colony. With the 1949 communist victory in China and the Korean War, Washington reframed Ho as a Sino-Soviet proxy, eventually paying 80% of French military costs ($2 billion). In 1954, French General Navarre built a fortified base in the remote Dien Bien Phu valley, assuming surrounding mountains were impassable. Instead, General Giap mobilized 250,000 porters to haul heavy artillery up the mountain ridges, bombarding French airstrips and forcing the garrison’s surrender on May 7, 1954.',
    examTakeaways: [
      'The Domino Theory: Eisenhower warned that if Indochina fell to communism, neighboring Southeast Asian nations would topple like dominoes.',
      'Financial Underwriting: By 1954, the U.S. was paying roughly 80% of France’s war costs, yet held no command control over French operations.',
      'Tactical Turning Point: Dien Bien Phu ended French colonial rule in Indochina and forced the 1954 Geneva Conference that partitioned Vietnam at the 17th parallel.',
    ],
    keyTerms: [
      {
        id: 'domino-theory',
        term: 'Domino Theory',
        phonetic: 'DAH-mih-noh THEE-uh-ree',
        definition:
          'Cold War foreign policy theory popularized by President Eisenhower in 1954 positing that the fall of one nation to communism would trigger the fall of neighboring states.',
        significance:
          'Provided the foundational strategic rationale for American intervention in Vietnam across five successive presidencies.',
        examTip: 'High frequency. Frequently paired on DBQs with Eisenhower’s April 1954 press conference.',
      },
      {
        id: 'dien-bien-phu',
        term: 'Battle of Dien Bien Phu (1954)',
        phonetic: 'DYEN BYEN FOO',
        definition:
          'A decisive 55-day siege in northwestern Vietnam where Viet Minh forces surrounded and overwhelmed an entrenched French fortress in a valley basin.',
        significance:
          'Destroyed French political resolve to continue the First Indochina War, directly producing the Geneva Accords.',
        examTip: 'Remember the geographic trap: French commanders in the valley were encircled by Giap’s concealed mountain artillery.',
      },
      {
        id: 'geneva-accords-1954',
        term: 'Geneva Accords of 1954',
        phonetic: 'juh-NEE-vuh uh-KORDZ',
        definition:
          'International diplomatic agreement ending the First Indochina War, temporarily dividing Vietnam at the 17th parallel pending nationwide elections scheduled for 1956.',
        significance:
          'The partition created North and South Vietnam. When elections were cancelled, the provisional line hardened into a Cold War border.',
        examTip: 'Article 6 explicitly stated the 17th parallel was provisional and NOT a permanent territorial border.',
      },
    ],
  },
  quiz: [
    {
      id: 'c1-q1',
      question:
        'What major international development between 1949 and 1950 fundamentally changed Washington’s perspective on the French war in Indochina?',
      options: [
        'The signing of the Warsaw Pact and the Soviet invasion of Hungary',
        'France’s decision to grant Vietnam full independence in the French Union',
        'The communist victory in China and the outbreak of the Korean War',
        'Britain’s withdrawal from India and the partition of the subcontinent',
      ],
      correctIndex: 2,
      rationale:
        'The 1949 Chinese Communist victory under Mao Zedong and the June 1950 North Korean invasion of South Korea transformed Washington’s view of Indochina from a European colonial conflict into a vital Cold War containment frontier.',
      citationRef: 'c1-1',
    },
    {
      id: 'c1-q2',
      question:
        'What fatal tactical assumption did French Commander Henri Navarre make when fortifying Dien Bien Phu?',
      options: [
        'That heavy artillery could not be hauled over the mountains around the valley',
        'That the Viet Minh would refuse battle and retreat across the border into China',
        'That Chinese troops would join the Viet Minh in a direct assault on the base',
        'That the garrison could be resupplied overland along the road from Hanoi',
      ],
      correctIndex: 0,
      rationale:
        'Navarre and artillery chief Colonel Piroth believed the surrounding mountain ridges were impassable to heavy artillery. General Giap mobilized 250,000 civilian porters to hand-haul 105mm howitzers up the mountain slopes, digging them into camouflaged caves overlooking the valley airstrip.',
      citationRef: 'c1-2',
    },
    {
      id: 'c1-q3',
      question:
        'How did President Eisenhower respond to proposals for direct American military intervention (Operation Vulture) to relieve the French at Dien Bien Phu?',
      options: [
        'He approved carrier air strikes, but they failed to break the siege in time',
        'He sent U.S. Marines to hold the ridges until French reinforcements arrived',
        'He asked the United Nations to arrange a cease-fire around the fortress',
        'He declined to intervene without British support and approval from Congress',
      ],
      correctIndex: 3,
      rationale:
        'Mindful of the grueling Korean War, Eisenhower refused to intervene unilaterally without congressional sanction and British participation. British Prime Minister Churchill flatly declined, and congressional leaders like Lyndon B. Johnson rejected another Asian land commitment.',
      citationRef: 'c1-1',
    },
  ],
  flashcards: [
    {
      id: 'c1-fc1',
      term: 'Ho Chi Minh',
      phonetic: 'HOH CHEE MIN',
      definition:
        'Vietnamese nationalist and communist revolutionary leader who founded the Viet Minh in 1941 and declared the Democratic Republic of Vietnam in 1945.',
      significance:
        'The central revolutionary figure who combined anti-colonial nationalism with Marxist-Leninist organization to defeat both France and the United States.',
      examTip: 'Quoted the American Declaration of Independence in his 1945 independence speech.',
    },
    {
      id: 'c1-fc2',
      term: 'Vo Nguyen Giap',
      phonetic: 'VOH NWYEN ZHAHP',
      definition:
        'Brilliant self-taught North Vietnamese general who commanded Viet Minh and PAVN forces from 1946 through the 1970s.',
      significance:
        'Masterminded the siege of Dien Bien Phu (1954) and orchestrated the multi-theater Tet Offensive (1968).',
      examTip: 'Pioneered protracted "people’s war" strategy designed to exhaust Western political will.',
    },
    {
      id: 'c1-fc3',
      term: '17th Parallel',
      phonetic: 'SEV-en-TEENTH PAIR-uh-lel',
      definition:
        'The temporary military demarcation line established by the 1954 Geneva Accords dividing North and South Vietnam.',
      significance:
        'Intended as a provisional ceasefire boundary for two years, it hardened into a fortified Cold War border when 1956 reunification elections were cancelled.',
      examTip: 'Associated with the Demilitarized Zone (DMZ) along the Ben Hai River.',
    },
  ],
};
