import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 12: MEMORY, LESSONS & HISTORIOGRAPHY ────────────────────────────
export const MEMORY_ARGUMENT_STUDY_DATA: ChapterStudyData = {
  chapterId: 'memory-and-the-argument',
  bigQuestion:
    'Was the Vietnam War a quagmire that could never be won, or a war the U.S. could have won if politicians and the press had not gotten in the way?',
  whyItMatters:
    'Historians still argue about this, and the two sides are called “orthodox” and “revisionist.” Their answers still shape how Americans think about going to war.',
  whatYouWillLearn: [
    'What orthodox historians (Halberstam, Sheehan, Herring) argue: the war was a nationalist struggle the U.S. could not win.',
    'What revisionist historians (Summers, Moyar, Lewy) argue: the war could have been won if Washington had let the military fight it.',
    'How the “Vietnam Syndrome” shaped later U.S. military rules (the Weinberger-Powell Doctrine), from the Gulf War to the wars after 9/11.',
  ],
  briefing: {
    summary:
      'Fifty years after the fall of Saigon, historians and leaders still disagree about what the Vietnam War meant. The orthodox school includes historians such as David Halberstam, Neil Sheehan and George Herring. They argue the war could never have been won. American leaders mistook a long nationalist revolution against colonial rule for a Cold War fight with the Soviet Union and China. No amount of firepower could make an unpopular, corrupt government in Saigon legitimate. The revisionist school includes the military writer Harry Summers and historians such as Mark Moyar and Guenter Lewy. They argue the war was a just cause that could have been won. In their view, civilian politicians kept too tight a grip on the military and banned ground attacks on North Vietnamese bases across the border. They also say General Creighton Abrams’ pacification effort was working before Congress cut off South Vietnam. The debate left behind the “Vietnam Syndrome.” Americans and military leaders became unwilling to send troops abroad without strong public support, a clear way out and overwhelming force. The Weinberger-Powell Doctrine put those rules in writing.',
    examTakeaways: [
      'Orthodox vs. revisionist: The main debate to know for AP essays and DBQs about U.S. foreign policy.',
      'The Vietnam Syndrome: After the war, the public and Congress did not want to back open-ended military action abroad.',
      'The Powell Doctrine: General Colin Powell’s rules for sending troops. Use overwhelming force, protect a vital national interest, and have a clear way out.',
    ],
    keyTerms: [
      {
        id: 'orthodox-school',
        term: 'Orthodox Historiographical School',
        phonetic: 'OR-thuh-doks SKOOL',
        definition:
          'Historians who argue that the U.S. was wrong to fight in Vietnam and could not have won, because foreign military power could not break Vietnamese nationalism and the revolution’s staying power.',
        significance:
          'It is the most common view among university historians. It stresses that the U.S. backed a corrupt government in the South that most Vietnamese did not see as their own.',
        examTip: 'Key historians: George Herring, David Halberstam, Neil Sheehan, Stanley Karnow.',
      },
      {
        id: 'revisionist-school',
        term: 'Revisionist Historiographical School',
        phonetic: 'rih-VIZH-un-ist SKOOL',
        definition:
          'Historians who argue the war was a just cause that could have been won. They say politicians held the military back, and that Creighton Abrams’ pacification effort deserved more support.',
        significance:
          'It is popular at military colleges and among conservatives. It argues that aid cuts by Congress and negative news coverage threw away a war that could have been won.',
        examTip: 'Key scholars: Harry Summers (On Strategy), Mark Moyar (Triumph Forsaken), Guenter Lewy.',
      },
      {
        id: 'powell-doctrine',
        term: 'The Powell Doctrine',
        phonetic: 'POW-ul DOK-trin',
        definition:
          'Rules set out by General Colin Powell. The U.S. should send combat troops only when a vital national interest is at stake, and then with overwhelming force, clear goals, public support and a plan for getting out.',
        significance:
          'It turned the lessons of Vietnam into military rules. The U.S. followed it in the 1991 Persian Gulf War.',
        examTip: 'Shows up often in questions about foreign policy after the Cold War.',
      },
    ],
  },
  quiz: [
    {
      id: 'c12-q1',
      question:
        'What is the central historical argument of the “Orthodox School” of Vietnam War historiography?',
      options: [
        'The war was unwinnable: Washington mistook nationalism for Soviet expansion',
        'The war was winnable if civilian leaders had let the military fight freely',
        'The war was lost mainly because U.S. television turned the public against it',
        'The war was a success because it delayed communist gains elsewhere in Asia',
      ],
      correctIndex: 0,
      rationale:
        'Orthodox historians argue the war was driven by Vietnamese nationalism and the fight against colonial rule. Many Vietnamese saw the Saigon government as a puppet built with Western money. No amount of American firepower could make it legitimate.',
      citationRef: 'c12-1',
    },
    {
      id: 'c12-q2',
      question:
        'What core thesis was advanced by Colonel Harry Summers in his influential 1982 revisionist monograph “On Strategy”?',
      options: [
        'Television coverage, not battlefield events, cost the United States the war',
        'The war was a nationalist revolution that no outside military power could have defeated',
        'South Vietnam’s corrupt government made any U.S. strategy impossible to win',
        'U.S. forces won in battle but lost because policy kept them from attacking the North',
      ],
      correctIndex: 3,
      rationale:
        'Summers later described telling a North Vietnamese colonel in 1975 that his side had never beaten the Americans in battle. The colonel answered that this did not matter. Summers argued that civilian control pushed the military into fighting guerrillas instead of cutting North Vietnam’s main supply lines.',
      citationRef: 'c12-2',
    },
    {
      id: 'c12-q3',
      question:
        'What was the primary foreign policy impact of the so-called “Vietnam Syndrome” on American grand strategy during the late 1970s and 1980s?',
      options: [
        'A push to expand U.S. bases across Southeast Asia to prevent new dominoes',
        'Reluctance to commit U.S. troops to long, uncertain wars overseas',
        'Renewed support for a peacetime draft to rebuild American combat power',
        'A belief that air power alone could win any future war without ground troops',
      ],
      correctIndex: 1,
      rationale:
        'The “Vietnam Syndrome” is the deep reluctance that kept Americans wary of foreign wars for two decades. After the 1991 Gulf War, President George H.W. Bush declared that the country had finally put the Vietnam Syndrome behind it.',
      citationRef: 'c12-3',
    },
  ],
  flashcards: [
    {
      id: 'c12-fc1',
      term: 'The “Vietnam Syndrome”',
      phonetic: 'vyet-NAM SIN-drohm',
      definition:
        'Americans’ unwillingness, after the defeat in Vietnam, to send U.S. forces into wars abroad.',
      significance:
        'It held back American military action through the late 1970s and 1980s, until the 1991 Persian Gulf War.',
      examTip: 'Shows up often. Exams pair it with Ronald Reagan calling Vietnam a noble cause.',
    },
    {
      id: 'c12-fc2',
      term: 'The Pentagon Papers (1971)',
      phonetic: 'PEN-tuh-gahn PAY-perz',
      definition:
        'A secret 7,000-page Defense Department history of the war. Military analyst Daniel Ellsberg leaked it to the New York Times.',
      significance:
        'It showed that four presidents’ administrations had misled the public and Congress about the war’s goals and progress. In New York Times Co. v. United States, the Supreme Court let the papers be published.',
      examTip: 'A key case on freedom of the press and holding presidents to account.',
    },
    {
      id: 'c12-fc3',
      term: 'The Weinberger Doctrine (1984)',
      phonetic: 'WYN-ber-ger DOK-trin',
      definition:
        'Six tests that Defense Secretary Caspar Weinberger said must be met before sending U.S. troops into combat abroad. They included a vital interest, a plan to win, and support from the public and Congress.',
      significance:
        'It led directly to the Powell Doctrine. It reflected the military’s resolve never again to slide into a war step by step, as in Vietnam.',
      examTip: 'It sums up what U.S. military leaders agreed on after Vietnam.',
    },
  ],
};
