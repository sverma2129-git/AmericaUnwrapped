import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 7: THE TET OFFENSIVE ────────────────────────────────────────────
export const TET_OFFENSIVE_STUDY_DATA: ChapterStudyData = {
  chapterId: 'tet-offensive',
  bigQuestion:
    'Why did a battle Hanoi lost turn Americans against the war?',
  whyItMatters:
    'For two years Johnson’s officials had said victory was close. After Tet, many Americans stopped believing them, and Johnson began to pull back.',
  whatYouWillLearn: [
    'How communist forces launched surprise attacks on 36 of 44 provincial capitals during a holiday truce.',
    'Why Tet was a heavy battlefield defeat for the Viet Cong and a political victory in Washington.',
    'How Walter Cronkite’s broadcast and the advice of the Wise Men led Johnson to drop out of the 1968 presidential race.',
  ],
  briefing: {
    summary:
      'In late 1967, General Westmoreland told Americans the war was being won and that the end was in sight. Early on January 30–31, 1968, during the truce for Tet, the lunar new year, more than 84,000 North Vietnamese and Viet Cong troops attacked at the same time. They hit 36 of 44 provincial capitals, five major cities and dozens of bases across South Vietnam. In Saigon, a 19-man squad blew a hole in the wall of the U.S. Embassy, and morning television showed dead Americans on the grounds. In Hue, communist forces took the old Citadel and held it for 26 days. They executed nearly 3,000 civilians before U.S. Marines retook the city. As a battle, Tet was a defeat for Hanoi. The uprising it expected never came, and the Viet Cong lost more than 40,000 experienced fighters. As politics, it destroyed the administration’s credibility. CBS anchor Walter Cronkite told viewers the war was “mired in stalemate,” and Johnson is reported to have said that losing Cronkite meant losing Middle America. On March 31, 1968, Johnson announced a partial bombing halt and withdrew from the presidential race.',
    examTakeaways: [
      'Officials kept saying the war was being won. Then Americans saw fighting on the U.S. Embassy grounds on television, and many stopped trusting what they were told. People called this the credibility gap.',
      'Tet was a military disaster for the Viet Cong, which lost more than 40,000 experienced fighters. It still broke Americans’ willingness to keep escalating.',
      'Johnson’s senior advisers, the Wise Men, told him to scale back. Peace talks opened in Paris in 1968.',
    ],
    keyTerms: [
      {
        id: 'tet-offensive-term',
        term: 'Tet Offensive (January–February 1968)',
        imageId: 'hue-1968',
        phonetic: 'TET uh-FEN-siv',
        definition:
          'A huge surprise offensive by North Vietnamese and Viet Cong forces during the lunar new year. They attacked more than 100 cities, towns and bases across South Vietnam at once.',
        significance:
          'It was the war’s turning point in American opinion. It convinced many leaders and much of the public that the war could not be won at a cost they would accept.',
        examTip: 'Shows up often. A key turning point in AP U.S. History Period 8.',
      },
      {
        id: 'credibility-gap',
        term: 'The Credibility Gap',
        phonetic: 'KRED-ih-BIL-ih-tee GAP',
        definition:
          'The public’s growing doubt that President Johnson and the military were telling the truth about progress in Vietnam.',
        significance:
          'It wore down trust in the federal government and fed both antiwar protest and investigative reporting.',
        examTip: 'Television coverage of the Tet Offensive widened it, and the Pentagon Papers widened it again.',
      },
      {
        id: 'walter-cronkite-broadcast',
        term: 'Walter Cronkite’s Stalemate Broadcast (Feb 27, 1968)',
        imageId: 'cronkite-hue-1968',
        phonetic: 'WAWL-ter KRON-kyte',
        definition:
          'A special CBS News report. After a trip to Vietnam, the country’s most trusted news anchor gave his own view that the war was “mired in stalemate.”',
        significance:
          'It put into words what many middle-class Americans had come to feel. It also helped convince President Johnson that he had lost support at home.',
        examTip: 'DBQs often use it as evidence that mainstream news coverage had shifted.',
      },
    ],
  },
  quiz: [
    {
      id: 'c7-q1',
      question:
        'What did Hanoi’s leaders expect to happen during the Tet Offensive that never did?',
      options: [
        'That the Soviet Union would send combat troops to defend North Vietnam',
        'That China would open a second front by sending troops into Laos and Thailand',
        'That U.S. forces at Khe Sanh would surrender within the first week',
        'That South Vietnam’s city dwellers would rise up against the Saigon government',
      ],
      correctIndex: 3,
      rationale:
        'Hanoi’s plan, Politburo Resolution 14, predicted that attacks on the cities would set off a nationwide General Uprising (Tong Khoi Nghia), with South Vietnamese civilians and soldiers joining the revolution. Most people stayed out of it or fled. That left Viet Cong units exposed, and U.S. and South Vietnamese firepower destroyed many of them.',
      citationRef: 'c7-1',
    },
    {
      id: 'c7-q2',
      question:
        'What made the Battle of Hue so terrible for the city’s people?',
      options: [
        'The city surrendered without a fight and was later rebuilt with American aid money',
        'Foreign diplomats arranged a cease-fire that spared the old imperial citadel',
        'Communist forces executed civilians, and the counterattack wrecked much of Hue',
        'The fighting stayed in tunnels outside the city, so its civilians were evacuated',
      ],
      correctIndex: 2,
      rationale:
        'While they held Hue for a month, communist forces carried out organized killings of civil servants, teachers and Catholics. Retaking the city took 26 days of house-to-house fighting by U.S. Marines and ARVN troops. More than 80 percent of the old imperial capital was destroyed.',
      citationRef: 'c7-3',
    },
    {
      id: 'c7-q3',
      question:
        'What did Lyndon Johnson announce on television on March 31, 1968?',
      options: [
        'A partial bombing halt, a call for peace talks, and his exit from the 1968 race',
        'A full invasion of North Vietnam, backed by 200,000 additional U.S. troops',
        'That the draft would end and all U.S. combat troops would be home by Christmas',
        'That he would ask Congress to repeal the Gulf of Tonkin Resolution that spring',
      ],
      correctIndex: 0,
      rationale:
        'Tet had damaged Johnson politically, and he had done poorly in the New Hampshire primary against the antiwar candidate Eugene McCarthy. He announced that bombing would stop north of the 20th parallel, and said he would neither seek nor accept his party’s nomination for another term.',
      citationRef: 'c7-2',
    },
    {
      id: 'c7-q4',
      imageId: 'lbj-march-31-1968',
      question:
        'The address in the photograph came two months after which event?',
      options: [
        'The Gulf of Tonkin incident off North Vietnam’s coast',
        'The Tet Offensive across South Vietnam’s cities',
        'The signing of the Paris Peace Accords in France',
        'The fall of Saigon to North Vietnamese forces',
      ],
      correctIndex: 1,
      rationale:
        'The Tet Offensive began at the end of January 1968. On March 31, Johnson announced a partial bombing halt and said he would not seek reelection.',
    },
    {
      id: 'c7-q5',
      question: 'What did Washington fear the siege of Khe Sanh in early 1968 could become?',
      options: [
        'A site for peace talks with Hanoi',
        'An American Dien Bien Phu',
        'A second Ia Drang Valley victory',
        'The main base for B-52 raids',
      ],
      correctIndex: 1,
      rationale: 'Two North Vietnamese divisions surrounded about 6,000 Marines at Khe Sanh, and Washington feared an American Dien Bien Phu. Westmoreland’s attention stayed fixed on it, and it was partly a diversion before the Tet attacks.',
      citationRef: 'c7-1',
    },
    {
      id: 'c7-q6',
      question: 'All the Viet Cong attackers at the U.S. Embassy in Saigon were killed or captured within hours. Why did the attack still shock Americans?',
      options: [
        'The ambassador was taken hostage and held for several weeks by the attackers',
        'The embassy building was burned to the ground',
        'Live television showed dead Americans on the embassy grounds',
        'It proved that China had entered the war openly',
      ],
      correctIndex: 2,
      rationale: 'A 19-man Viet Cong commando unit blew a hole in the embassy wall. The fight was over quickly, but live television showed dead Americans on the grounds just after officials had been saying the war was being won.',
      citationRef: 'c7-2',
    },
    {
      id: 'c7-q7',
      question: 'As a battle, how did the Tet Offensive turn out for the Viet Cong?',
      options: [
        'It lost more than 40,000 experienced fighters',
        'It took control of Saigon and Hue for good',
        'It forced the Marines out of Khe Sanh',
        'It drove South Vietnam’s army out of the cities',
      ],
      correctIndex: 0,
      rationale: 'The mass uprising Hanoi expected never happened, and the Viet Cong lost more than 40,000 experienced fighters. From then on, soldiers drafted in the North did most of the fighting. Tet still changed how Americans saw the war.',
      citationRef: 'c7-3',
    },
    {
      id: 'c7-q8',
      question: 'What did CBS anchor Walter Cronkite tell viewers about the war on February 27, 1968?',
      options: [
        'That the United States was clearly winning',
        'That the United States should invade North Vietnam',
        'That it was stuck in a stalemate',
        'That all U.S. troops should come home at once',
      ],
      correctIndex: 2,
      rationale: 'Cronkite gave his own view that the war was stuck in a stalemate, and many Americans agreed. Tet shook the public’s belief that the war was being won.',
      citationRef: 'c7-2',
    },
    {
      id: 'c7-q9',
      question: 'The military asked for 206,000 more troops after Tet. What did Johnson’s senior civilian advisers, the Wise Men, tell him?',
      options: [
        'To send all 206,000 at once',
        'To scale back',
        'To ask Congress to declare war',
        'To invade North Vietnam',
      ],
      correctIndex: 1,
      rationale: 'The Wise Men told Johnson to scale back. On March 31, 1968, he announced a partial halt to the bombing and said he would not run for reelection.',
      citationRef: 'c7-2',
    },
  ],
  flashcards: [
    {
      id: 'c7-fc1',
      term: 'The Wise Men',
      phonetic: 'WYZE MEN',
      definition:
        'An informal group of senior former officials, including Dean Acheson, McGeorge Bundy and Omar Bradley. Johnson called them together in March 1968 to review the war.',
      significance:
        'They shocked Johnson. Most of them told him the war could not be won by force and that the U.S. should begin to pull back.',
      examTip: 'It shows that the foreign-policy establishment no longer agreed on the war.',
    },
    {
      id: 'c7-fc2',
      term: 'Battle of Khe Sanh',
      phonetic: 'KAY SAHN',
      definition:
        'A 77-day siege from January to April 1968. Two North Vietnamese divisions surrounded 6,000 U.S. Marines at an isolated base near the DMZ and the border with Laos.',
      significance:
        'President Johnson feared an American Dien Bien Phu and watched it closely. The siege pulled American air power away from the coastal cities just before Tet.',
      examTip: 'Heavy bombing, called Operation Niagara, held the base. The U.S. quietly abandoned it months later.',
    },
    {
      id: 'c7-fc3',
      term: 'Eddie Adams Photograph',
      phonetic: 'ED-ee AD-umz',
      definition:
        'An Associated Press photograph taken on a Saigon street on February 1, 1968. It shows South Vietnam’s national police chief, Nguyen Ngoc Loan, shooting a captured Viet Cong officer, Nguyen Van Lem.',
      significance:
        'It won the Pulitzer Prize and became one of the best-known antiwar images in the world. For many people it stood for the war’s brutality.',
      examTip: 'Exams often pair it with Nick Ut’s photograph known as Napalm Girl.',
    },
  ],
};
