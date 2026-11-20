import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 1: FRENCH INDOCHINA & DIEN BIEN PHU ─────────────────────────────
export const DIEN_BIEN_PHU_STUDY_DATA: ChapterStudyData = {
  chapterId: 'french-indochina-dien-bien-phu',
  bigQuestion:
    'Why was the United States paying for France’s war in Vietnam?',
  whyItMatters:
    'Truman and Eisenhower decided Vietnam mattered in the Cold War. Every president after them inherited that decision.',
  whatYouWillLearn: [
    'How Ho Chi Minh used the American Declaration of Independence to claim independence in 1945.',
    'How the Korean War and the Domino Theory led Truman and Eisenhower to pay for France’s war.',
    'Why General Navarre’s fortress in the valley at Dien Bien Phu was beaten by Vo Nguyen Giap’s guns in the hills.',
  ],
  briefing: {
    summary:
      'After World War II, Ho Chi Minh declared Vietnam independent, but France went to war to take its colony back. After the communist victory in China in 1949 and the start of the Korean War, Washington came to see Ho as an agent of China and the Soviet Union. The U.S. ended up paying 80% of France’s military costs, about $2 billion. In 1954, the French general Navarre built a fortified base in the remote valley of Dien Bien Phu. He assumed heavy guns could not cross the mountains around it. General Giap used 250,000 porters to haul artillery up the ridges. The guns shelled the French airstrips, and the garrison surrendered on May 7, 1954.',
    examTakeaways: [
      'Eisenhower warned that if Indochina fell to communism, its neighbors would fall next, like a row of dominoes. This Domino Theory guided U.S. policy for years.',
      'By 1954 the United States was paying about 80% of France’s war costs. It still had no say in how France fought.',
      'France’s defeat at Dien Bien Phu in May 1954 ended its rule in Indochina. That summer, the Geneva Conference split Vietnam at the 17th parallel.',
    ],
    keyTerms: [
      {
        id: 'domino-theory',
        term: 'Domino Theory',
        phonetic: 'DAH-mih-noh THEE-uh-ree',
        definition:
          'A Cold War idea made popular by President Eisenhower in 1954. It held that if one country fell to communism, its neighbors would fall too.',
        significance:
          'Five presidents in a row used it to justify American involvement in Vietnam.',
        examTip: 'Shows up often. DBQs pair it with Eisenhower’s April 1954 press conference.',
      },
      {
        id: 'dien-bien-phu',
        term: 'Battle of Dien Bien Phu (1954)',
        phonetic: 'DYEN BYEN FOO',
        definition:
          'A 55-day siege in northwestern Vietnam. Viet Minh forces surrounded a French fortress in a valley and overran it.',
        significance:
          'It ended France’s will to keep fighting the First Indochina War and led straight to the Geneva Accords.',
        examTip: 'Remember the trap: the French were in the valley, and Giap’s hidden guns were in the hills around them.',
      },
      {
        id: 'geneva-accords-1954',
        term: 'Geneva Accords of 1954',
        imageId: 'geneva-conference-1954',
        phonetic: 'juh-NEE-vuh uh-KORDZ',
        definition:
          'The international agreement that ended the First Indochina War. It divided Vietnam at the 17th parallel for the time being, with nationwide elections set for 1956.',
        significance:
          'The division created North and South Vietnam. When the elections were called off, the temporary line became a Cold War border.',
        examTip: 'Article 6 said the 17th parallel was temporary and was not a permanent border.',
      },
    ],
  },
  quiz: [
    {
      id: 'c1-q1',
      question:
        'What happened in 1949 and 1950 that made Washington care about France’s war in Indochina?',
      options: [
        'The signing of the Warsaw Pact and the Soviet invasion of Hungary',
        'France’s decision to grant Vietnam full independence in the French Union',
        'The communist victory in China and the outbreak of the Korean War',
        'Britain’s withdrawal from India and the partition of the subcontinent',
      ],
      correctIndex: 2,
      rationale:
        'Mao Zedong’s communists won in China in 1949, and North Korea invaded South Korea in June 1950. After that, Washington stopped seeing Indochina as a European colonial war and saw it as a front line in the Cold War.',
      citationRef: 'c1-1',
    },
    {
      id: 'c1-q2',
      question:
        'What did French commander Henri Navarre get wrong when he built his base at Dien Bien Phu?',
      options: [
        'That heavy artillery could not be hauled over the mountains around the valley',
        'That the Viet Minh would refuse battle and retreat across the border into China',
        'That Chinese troops would join the Viet Minh in a direct assault on the base',
        'That the garrison could be resupplied overland along the road from Hanoi',
      ],
      correctIndex: 0,
      rationale:
        'Navarre and his artillery chief, Colonel Piroth, believed heavy guns could not cross the mountain ridges. General Giap used 250,000 civilian porters to drag 105mm howitzers up the slopes by hand. They dug the guns into hidden positions that looked down on the airstrip.',
      citationRef: 'c1-2',
    },
    {
      id: 'c1-q3',
      question:
        'When advisers proposed U.S. air strikes to save Dien Bien Phu, what did Eisenhower do?',
      options: [
        'He approved carrier air strikes, but they failed to break the siege in time',
        'He sent U.S. Marines to hold the ridges until French reinforcements arrived',
        'He asked the United Nations to arrange a cease-fire around the fortress',
        'He declined to intervene without British support and approval from Congress',
      ],
      correctIndex: 3,
      rationale:
        'With the Korean War fresh in mind, Eisenhower refused to act alone. He wanted approval from Congress and British troops alongside. British Prime Minister Churchill said no, and congressional leaders such as Lyndon B. Johnson rejected another land war in Asia.',
      citationRef: 'c1-1',
    },
  ],
  flashcards: [
    {
      id: 'c1-fc1',
      term: 'Ho Chi Minh',
      imageId: 'ho-telegram-1946',
      phonetic: 'HOH CHEE MIN',
      definition:
        'A Vietnamese nationalist and communist leader. He founded the Viet Minh in 1941 and declared the Democratic Republic of Vietnam in 1945.',
      significance:
        'He joined the fight against colonial rule to communist organization, and led the movement that defeated France and then outlasted the United States.',
      examTip: 'He quoted the American Declaration of Independence in his 1945 independence speech.',
    },
    {
      id: 'c1-fc2',
      term: 'Vo Nguyen Giap',
      phonetic: 'VOH NWYEN ZHAHP',
      definition:
        'A self-taught North Vietnamese general. He commanded Viet Minh forces, and later North Vietnam’s army, from 1946 into the 1970s.',
      significance:
        'He planned the siege of Dien Bien Phu (1954) and helped direct the Tet Offensive (1968).',
      examTip: 'He was a leading voice for a long people’s war meant to wear down an enemy’s will to keep fighting.',
    },
    {
      id: 'c1-fc3',
      term: '17th Parallel',
      phonetic: 'SEV-en-TEENTH PAIR-uh-lel',
      definition:
        'The temporary military line set by the 1954 Geneva Accords. It divided North and South Vietnam.',
      significance:
        'It was meant to last two years as a ceasefire line. It became a fortified Cold War border when the 1956 elections were called off.',
      examTip: 'Linked to the Demilitarized Zone (DMZ) along the Ben Hai River.',
    },
  ],
};
