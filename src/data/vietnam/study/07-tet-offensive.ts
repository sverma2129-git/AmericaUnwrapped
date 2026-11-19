import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 7: THE TET OFFENSIVE ────────────────────────────────────────────
export const TET_OFFENSIVE_STUDY_DATA: ChapterStudyData = {
  chapterId: 'tet-offensive',
  bigQuestion:
    'How did a military defeat for the Viet Cong become the turning point of the war for the United States?',
  whyItMatters:
    'The 1968 Tet Offensive ended the Johnson administration’s claim that victory was close. It split Americans at home and pushed Washington to start winding the war down.',
  whatYouWillLearn: [
    'How communist forces launched surprise attacks on 36 of 44 provincial capitals during a holiday truce.',
    'Why Tet was a heavy battlefield defeat for the Viet Cong and a political victory in Washington.',
    'How Walter Cronkite’s broadcast and the advice of the “Wise Men” led Johnson to drop out of the 1968 presidential race.',
  ],
  briefing: {
    summary:
      'In late 1967, General Westmoreland told Americans the war was being won and that there was “light at the end of the tunnel.” Early on January 30–31, 1968, during the truce for Tet, the lunar new year, more than 84,000 North Vietnamese and Viet Cong troops attacked at the same time. They hit 36 of 44 provincial capitals, five major cities and dozens of bases across South Vietnam. In Saigon, a 19-man squad blew a hole in the wall of the U.S. Embassy, and morning television showed dead Americans on the grounds. In Hue, communist forces took the old Citadel and held it for 26 days. They executed nearly 3,000 civilians before U.S. Marines retook the city. As a battle, Tet was a defeat for Hanoi. The uprising it expected never came, and the Viet Cong lost more than 40,000 experienced fighters. As politics, it destroyed the administration’s credibility. CBS anchor Walter Cronkite told viewers the war was “mired in stalemate,” and Johnson is reported to have said that losing Cronkite meant losing Middle America. On March 31, 1968, Johnson announced a partial bombing halt and withdrew from the presidential race.',
    examTakeaways: [
      'The credibility gap: The government kept promising that victory was near. Then Americans watched fighting in Saigon on television. Many stopped believing what officials said.',
      'Lost the battle, won the argument: The Viet Cong took losses it never recovered from, and North Vietnamese draftees took over more of the fighting. But Tet broke American political will.',
      'A turn in U.S. policy: Johnson’s senior advisers, the “Wise Men,” told him to scale back. Peace talks opened in Paris, and Vietnamization came later.',
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
        'What was the primary military assumption made by Hanoi’s leadership (Le Duan faction) in planning the 1968 Tet Offensive that failed to materialize?',
      options: [
        'That the Soviet Union would send combat troops to defend North Vietnam',
        'That China would open a second front by sending troops into Laos and Thailand',
        'That U.S. forces at Khe Sanh would surrender within the first week',
        'That South Vietnam’s city dwellers would rise up against the Saigon government',
      ],
      correctIndex: 3,
      rationale:
        'Hanoi’s plan, Politburo Resolution 14, predicted that attacks on the cities would set off a nationwide “General Uprising” (Tong Khoi Nghia), with South Vietnamese civilians and soldiers joining the revolution. Most people stayed out of it or fled. That left Viet Cong units exposed, and U.S. and South Vietnamese firepower destroyed many of them.',
      citationRef: 'c7-1',
    },
    {
      id: 'c7-q2',
      question:
        'How did the Battle of Hue during the Tet Offensive illustrate the dual tragedy of urban combat in the Vietnam War?',
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
        'What dramatic announcement did President Lyndon B. Johnson make to the nation in his televised address on March 31, 1968?',
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
        'The address shown in the photograph came two months after which event?',
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
  ],
  flashcards: [
    {
      id: 'c7-fc1',
      term: 'The “Wise Men”',
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
        'President Johnson feared an “American Dien Bien Phu” and watched it closely. The siege pulled American air power away from the coastal cities just before Tet.',
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
      examTip: 'Exams often pair it with Nick Ut’s “Napalm Girl” photograph.',
    },
  ],
};
