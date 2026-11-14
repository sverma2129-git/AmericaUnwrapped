import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 3: KENNEDY, COUNTERINSURGENCY & THE DIEM COUP ───────────────────
export const KENNEDY_DIEM_STUDY_DATA: ChapterStudyData = {
  chapterId: 'kennedy-and-diem',
  bigQuestion:
    'How did Kennedy’s plan to fight guerrillas fail at Ap Bac, and why did Washington back the coup that killed Ngo Dinh Diem?',
  whyItMatters:
    'The 1963 coup broke South Vietnam’s government. After it, the United States was far more responsible for keeping Saigon standing.',
  whatYouWillLearn: [
    'How Kennedy raised the number of military advisers from 900 to more than 16,000 under "Flexible Response."',
    'What the Strategic Hamlet Program and the 1963 Battle of Ap Bac showed about South Vietnam’s army.',
    'How the Buddhist Crisis and Cable 243 led to Diem’s overthrow, weeks before Kennedy himself was killed.',
  ],
  briefing: {
    summary:
      'President John F. Kennedy did not want to send large numbers of regular troops. He tried to beat the Viet Cong with "Flexible Response": Green Berets, helicopters, chemical defoliants such as Agent Orange, and the Strategic Hamlet Program, which moved farmers into fortified villages. In January 1963, at the Battle of Ap Bac, 350 Viet Cong guerrillas beat 1,500 South Vietnamese (ARVN) troops who had American armored vehicles and helicopters. That spring, Diem’s government banned Buddhist flags and crushed protests. The monk Thich Quang Duc burned himself to death in Saigon in protest. The Kennedy administration decided Diem could not lead and sent Cable 243, which signaled support for a coup. On November 1–2, 1963, ARVN generals overthrew and killed Diem and his brother Nhu. A series of unstable military governments followed.',
    examTakeaways: [
      'More advisers: Under Kennedy, American military "advisers" grew from about 900 to more than 16,000, and many took part in combat.',
      'The Buddhist Crisis: The monk Thich Quang Duc burned himself to death in public. The outrage around the world cost Diem’s government its standing abroad.',
      'After the coup: Diem was killed on November 2, 1963, three weeks before Kennedy. South Vietnam lost its one steady leader, and the U.S. was tied more closely to its defense.',
    ],
    keyTerms: [
      {
        id: 'flexible-response',
        term: 'Flexible Response',
        phonetic: 'FLEK-suh-bul rih-SPONS',
        definition:
          'Kennedy’s defense policy. It replaced Eisenhower’s nuclear "Massive Retaliation" with more options: counterinsurgency, Special Forces (Green Berets), and regular forces matched to the size of the threat.',
        significance:
          'It set the United States up to step into guerrilla wars like Vietnam a little at a time.',
        examTip: 'Exams often contrast it with Eisenhower’s nuclear brinkmanship.',
      },
      {
        id: 'strategic-hamlets',
        term: 'Strategic Hamlet Program',
        phonetic: 'struh-TEE-jik HAM-let',
        definition:
          'A joint U.S. and South Vietnamese program that forced farmers to move into fortified villages. Barbed wire and sharpened bamboo stakes were meant to cut them off from the Viet Cong.',
        significance:
          'Farmers resented being taken from their family land and graves. The Viet Cong got inside the hamlets anyway.',
        examTip: 'A classic case of a program that produced the opposite of what it was meant to do.',
      },
      {
        id: 'cable-243',
        term: 'State Department Cable 243 (August 24, 1963)',
        phonetic: 'KAY-bul TOO FOR-TEE THREE',
        definition:
          'A top-secret telegram drafted by Roger Hilsman and approved by Kennedy. It told Ambassador Henry Cabot Lodge Jr. that the U.S. would no longer accept Diem’s brother Nhu in power, and would support a coup if Diem refused to remove him.',
        significance:
          'South Vietnamese generals who opposed Diem took it as a green light from Washington. The coup followed in November 1963.',
        examTip: 'It shows that the United States had a direct part in the overthrow of South Vietnam’s leader.',
      },
    ],
  },
  quiz: [
    {
      id: 'c3-q1',
      question:
        'What was the primary military significance of the January 1963 Battle of Ap Bac?',
      options: [
        'It was the first battle between U.S. ground troops and North Vietnamese regulars',
        'Viet Cong forces overran Saigon’s outer defenses and ended the hamlet program',
        'Outnumbered Viet Cong troops defeated a larger, U.S.-equipped ARVN force',
        'An ARVN victory there convinced Kennedy that advisers were no longer needed',
      ],
      correctIndex: 2,
      rationale:
        'At Ap Bac, 350 dug-in Viet Cong guerrillas held off 1,500 ARVN troops who had artillery, M113 armored vehicles and U.S. helicopters. The guerrillas shot down five helicopters and killed three American advisers. The battle undercut the U.S. command’s claim that the ARVN was winning.',
      citationRef: 'c3-1',
    },
    {
      id: 'c3-q2',
      question:
        'What event in June 1963 crystallized global opposition to the Diem regime and prompted President Kennedy to state that "no news picture in history has generated so much emotion around the world"?',
      options: [
        'The Battle of Ap Bac, filmed by American reporters in the Mekong Delta',
        'Buddhist monk Thich Quang Duc’s self-immolation on a Saigon street',
        'Police raids on Buddhist pagodas ordered by Ngo Dinh Nhu’s special forces',
        'The shooting of Buddhist protesters outside the Hue radio station',
      ],
      correctIndex: 1,
      rationale:
        'On June 11, 1963, the 66-year-old Buddhist monk Thich Quang Duc set himself on fire to protest Diem’s treatment of Buddhists. Malcolm Browne’s photograph, which won a Pulitzer Prize, shocked people around the world. It helped convince the White House that Diem could no longer lead.',
      citationRef: 'c3-2',
    },
    {
      id: 'c3-q3',
      question:
        'What immediate political consequence followed the November 1–2, 1963 coup and execution of President Ngo Dinh Diem?',
      options: [
        'A civilian government held nationwide elections within six months',
        'The Viet Cong agreed to a cease-fire and joined a coalition government',
        'The United States cut off aid until a new constitution was ratified',
        'A rapid series of coups and short-lived governments left Saigon unstable',
      ],
      correctIndex: 3,
      rationale:
        'Diem’s death did not steady South Vietnam. It left no one clearly in charge. Over the next eighteen months, rival generals overthrew one another again and again, and the Viet Cong spread through the countryside.',
      citationRef: 'c3-3',
    },
  ],
  flashcards: [
    {
      id: 'c3-fc1',
      term: 'Thich Quang Duc',
      phonetic: 'TIK KWAHNG DUK',
      definition:
        'A Buddhist monk who burned himself to death in Saigon on June 11, 1963. He was protesting the Diem government’s treatment of Buddhists.',
      significance:
        'His death set off the Buddhist Crisis. It ended American public support for Ngo Dinh Diem and led to the coup of November 1963.',
      examTip: 'Buddhists preserved his heart, which survived the cremation, as a relic.',
    },
    {
      id: 'c3-fc2',
      term: 'MACV',
      phonetic: 'MAK-vee',
      definition:
        'Military Assistance Command, Vietnam. It was the U.S. headquarters set up in Saigon in February 1962 to run all American military advising and fighting in the country.',
      significance:
        'Its commanders were General Paul Harkins, then General William Westmoreland, then General Creighton Abrams. MACV ran U.S. military strategy in the war.',
      examTip: 'Kennedy created it in 1962 as the advisory effort outgrew the older command, called MAAG.',
    },
    {
      id: 'c3-fc3',
      term: 'Agent Orange',
      imageId: 'ranch-hand',
      phonetic: 'AY-junt OR-inj',
      definition:
        'A chemical that kills plants. It contained toxic dioxin. U.S. Air Force planes sprayed it in Operation Ranch Hand to strip away jungle cover and destroy enemy food crops.',
      significance:
        'It caused serious health problems for decades, including birth defects and cancer, among Vietnamese civilians and American veterans.',
      examTip: 'Kennedy first approved spraying in late 1961.',
    },
  ],
};
