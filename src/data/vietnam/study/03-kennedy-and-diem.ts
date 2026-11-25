import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 3: KENNEDY, COUNTERINSURGENCY & THE DIEM COUP ───────────────────
export const KENNEDY_DIEM_STUDY_DATA: ChapterStudyData = {
  chapterId: 'kennedy-and-diem',
  bigQuestion:
    'Why did the United States help remove the leader it had backed for nine years?',
  whyItMatters:
    'After the coup, one general after another tried to run South Vietnam. Having helped push Diem out, the United States now had to hold Saigon together itself.',
  whatYouWillLearn: [
    'How Kennedy raised the number of military advisers from 900 to more than 16,000 under Flexible Response.',
    'What the Strategic Hamlet Program and the 1963 Battle of Ap Bac showed about South Vietnam’s army.',
    'How the Buddhist Crisis and Cable 243 led to Diem’s overthrow, weeks before Kennedy himself was killed.',
  ],
  briefing: {
    summary:
      'President John F. Kennedy did not want to send large numbers of regular troops. He tried to beat the Viet Cong with Flexible Response: Green Berets, helicopters, chemical defoliants such as Agent Orange, and the Strategic Hamlet Program, which moved farmers into fortified villages. In January 1963, at the Battle of Ap Bac, 350 Viet Cong guerrillas beat 1,500 South Vietnamese (ARVN) troops who had American armored vehicles and helicopters. That spring, Diem’s government banned Buddhist flags and crushed protests. The monk Thich Quang Duc burned himself to death in Saigon in protest. The Kennedy administration decided Diem could not lead and sent Cable 243, which signaled support for a coup. On November 1–2, 1963, ARVN generals overthrew and killed Diem and his brother Nhu. A series of unstable military governments followed.',
    examTakeaways: [
      'Under Kennedy, American military advisers in South Vietnam went from about 900 to more than 16,000. Many of them fought in combat.',
      'In June 1963 the monk Thich Quang Duc burned himself to death on a Saigon street to protest Diem’s treatment of Buddhists. Photos of it turned world opinion against Diem.',
      'Generals killed Diem on November 2, 1963. Three weeks later Kennedy was assassinated, and Lyndon Johnson inherited a government in chaos.',
    ],
    keyTerms: [
      {
        id: 'flexible-response',
        term: 'Flexible Response',
        phonetic: 'FLEK-suh-bul rih-SPONS',
        definition:
          'Kennedy’s defense policy. It replaced Eisenhower’s nuclear Massive Retaliation with more options: counterinsurgency, Special Forces (Green Berets), and regular forces matched to the size of the threat.',
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
        'Why did the Battle of Ap Bac in January 1963 worry American advisers?',
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
        'Which event in June 1963 turned much of the world against Diem’s government?',
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
        'What happened in South Vietnam right after generals overthrew and killed Diem in November 1963?',
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
    {
      id: 'c3-q4',
      question: 'By late 1963, about how many U.S. military personnel were in South Vietnam?',
      options: [
        'About 900',
        'About 5,000',
        'More than 16,300',
        'More than 500,000',
      ],
      correctIndex: 2,
      rationale: 'Kennedy sent Green Berets and helicopter units, and the number of U.S. military personnel grew from about 900 to more than 16,300. That buildup happened well before Diem was killed.',
      citationRef: 'c3-2',
    },
    {
      id: 'c3-q5',
      question: 'What was the Strategic Hamlet Program, which began in 1962?',
      options: [
        'Moving farmers into fortified villages to cut them off from the Viet Cong',
        'Building new cities for refugees from the North who had fled after the Geneva Accords',
        'Training South Vietnamese pilots in the United States and then flying them home',
        'Giving land from large landlords to poor farmers in the Mekong Delta',
      ],
      correctIndex: 0,
      rationale: 'South Vietnam and its American advisers built more than 8,000 fortified villages. Many villagers hated it, because they were forced off land where their families had farmed and were buried, and corrupt local officials made things worse.',
      citationRef: 'c3-1',
    },
    {
      id: 'c3-q6',
      question: 'What did State Department Cable 243 signal to South Vietnamese generals in August 1963?',
      options: [
        'That the U.S. would pull out of Vietnam by 1965 unless Diem agreed to hold nationwide elections',
        'That the U.S. would back a new government if Diem did not get rid of his brother Nhu',
        'That the U.S. would send combat troops to protect Diem from his own generals',
        'That the generals would lose all American aid if they spoke with the press',
      ],
      correctIndex: 1,
      rationale: 'Drafted by Roger Hilsman, Cable 243 told the generals that Washington would not stand in the way of removing Diem. On November 1–2, the generals overthrew and killed him and Nhu.',
      citationRef: 'c3-3',
    },
    {
      id: 'c3-q7',
      question: 'Who ran Diem’s security forces and led the August 1963 raids on Buddhist pagodas?',
      options: [
        'General Paul Harkins, the American commander',
        'Roger Hilsman of the State Department',
        'Ngo Dinh Nhu, Diem’s brother',
        'Emperor Bao Dai, the former ruler',
      ],
      correctIndex: 2,
      rationale: 'Ngo Dinh Nhu, Diem’s brother, ran the security forces and raided Buddhist pagodas across the country. Washington’s Cable 243 aimed at getting Diem to get rid of Nhu.',
      citationRef: 'c3-1',
    },
    {
      id: 'c3-q8',
      question: 'This photo shows Madame Nhu in Washington on October 16, 1963. About two weeks later, what happened to Diem?',
      imageId: 'madame-nhu-1963',
      options: [
        'He was overthrown and killed by his own generals',
        'He resigned and moved to France after a long illness',
        'He won a second term in a rigged election in Saigon',
        'He ordered the Buddhist pagodas reopened and freed monks',
      ],
      correctIndex: 0,
      rationale: 'On November 1–2, 1963, South Vietnamese generals overthrew Diem and killed him and Nhu. The United States knew the coup was coming and did not stop it. Three weeks later, Kennedy was assassinated.',
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
