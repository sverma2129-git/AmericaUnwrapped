import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 7: THE TET OFFENSIVE ────────────────────────────────────────────
export const TET_OFFENSIVE_STUDY_DATA: ChapterStudyData = {
  chapterId: 'tet-offensive',
  bigQuestion:
    'How could a military disaster for the Viet Cong become the decisive psychological turning point of the war against the United States?',
  whyItMatters:
    'The 1968 Tet Offensive shattered the Johnson administration’s claims of imminent victory, fractured the American home front, and forced Washington to reverse course toward de-escalation.',
  whatYouWillLearn: [
    'How communist forces coordinated surprise attacks on 36 of 44 provincial capitals during a sacred holiday truce.',
    'Why Tet was a catastrophic battlefield defeat for the Viet Cong, but an overwhelming political victory in Washington.',
    'How Walter Cronkite’s broadcast and the rebellion of the "Wise Men" compelled LBJ to withdraw from the 1968 presidential race.',
  ],
  briefing: {
    summary:
      'In late 1967, General Westmoreland assured the American public that the war was being won and there was "light at the end of the tunnel." In the early morning hours of January 30–31, 1968, during the sacred Tet lunar new year truce, over 84,000 North Vietnamese and Viet Cong troops launched synchronized surprise assaults on 36 of 44 provincial capitals, five autonomous cities, and dozens of military installations across South Vietnam. In Saigon, a 19-man sapper squad blew a hole in the U.S. Embassy wall, with morning television broadcasting dead Americans on embassy grounds. In Hue, communist forces seized the ancient Citadel and held it for 26 days of brutal urban warfare, executing nearly 3,000 civilians before U.S. Marines retook the city. Militarily, Tet was an asymmetric defeat for Hanoi: the anticipated civilian uprising never occurred, and the Viet Cong lost over 40,000 veteran fighters. However, psychologically, it demolished the administration’s credibility. When CBS anchor Walter Cronkite concluded the war was "mired in stalemate," Johnson famously remarked, "If I’ve lost Cronkite, I’ve lost Middle America." On March 31, 1968, Johnson announced a partial bombing halt and withdrew from the 1968 presidential election.',
    examTakeaways: [
      'The Credibility Gap: The stark contradiction between administration promises of imminent victory and the reality of combat in Saigon created an unbridgeable trust deficit with the public.',
      'Military vs. Political Asymmetry: The Viet Cong suffered fatal tactical casualties, shifting the fighting burden to regular North Vietnamese conscripts, yet achieved a decisive strategic victory by breaking American political will.',
      'The Turning Point of American Policy: Forced LBJ’s senior civilian advisers (the "Wise Men") to recommend de-escalation, leading to the initiation of peace talks in Paris and the eventual policy of Vietnamization.',
    ],
    keyTerms: [
      {
        id: 'tet-offensive-term',
        term: 'Tet Offensive (January–February 1968)',
        phonetic: 'TET uh-FEN-siv',
        definition:
          'Massive, synchronized surprise offensive launched by PAVN and Viet Cong forces against over 100 cities, towns, and military bases throughout South Vietnam during the lunar new year.',
        significance:
          'The psychological turning point of the Vietnam War; convinced American leaders and the public that the war was unwinnable at acceptable cost.',
        examTip: 'High frequency. Essential turning point for APUSH Unit 8 (Cold War).',
      },
      {
        id: 'credibility-gap',
        term: 'The Credibility Gap',
        phonetic: 'KRED-ih-BIL-ih-tee GAP',
        definition:
          'The widespread public skepticism regarding the accuracy of official statements made by President Johnson and the military regarding progress in the Vietnam War.',
        significance:
          'Eroded national trust in the federal government, fueling nationwide anti-war protests and investigative journalism.',
        examTip: 'Directly accelerated by live television coverage of the Tet Offensive and later the Pentagon Papers.',
      },
      {
        id: 'walter-cronkite-broadcast',
        term: 'Walter Cronkite’s Stalemate Broadcast (Feb 27, 1968)',
        phonetic: 'WAWL-ter KRON-kyte',
        definition:
          'Special CBS News editorial broadcast in which America’s most trusted news anchor delivered his personal assessment from Vietnam that the war was "mired in stalemate."',
        significance:
          'Crystallized mainstream middle-class disillusionment with the war and convinced President Johnson that his domestic political support had collapsed.',
        examTip: 'Frequently quoted on DBQs as evidence of the shift in mainstream media coverage.',
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
        'Hanoi’s Politburo Resolution 14 predicted that assaults on urban centers would trigger a nationwide "General Uprising" (*Tong Khoi Nghia*) where South Vietnamese citizens and soldiers would rise up in revolution. The population remained largely passive or fled, leaving exposed Viet Cong units to be annihilated by allied firepower.',
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
        'During their month-long occupation of Hue, communist cadres conducted systematic purges, executing civil servants, teachers, and Catholics. Retaking the city required 26 days of brutal house-to-house fighting by U.S. Marines and ARVN troops that destroyed over 80 percent of the historic imperial capital.',
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
        'Shattered by the political fallout of Tet and a poor showing in the New Hampshire primary against anti-war candidate Eugene McCarthy, LBJ announced a unilateral bombing restriction north of the 20th parallel and declared: "I shall not seek, and I will not accept, the nomination of my party for another term as your President."',
      citationRef: 'c7-2',
    },
  ],
  flashcards: [
    {
      id: 'c7-fc1',
      term: 'The "Wise Men"',
      phonetic: 'WYZE MEN',
      definition:
        'Informal group of senior elder statesmen (including Dean Acheson, McGeorge Bundy, and Omar Bradley) summoned by LBJ in March 1968 to review war policy.',
      significance:
        'Shocked Johnson by unanimously advising him that the war could not be won militarily and that the U.S. must begin disengagement and de-escalation.',
      examTip: 'Demonstrates the loss of elite establishment consensus behind the Cold War intervention.',
    },
    {
      id: 'c7-fc2',
      term: 'Battle of Khe Sanh',
      phonetic: 'KAY SAHN',
      definition:
        'A 77-day siege of 6,000 U.S. Marines at an isolated mountain outpost near the DMZ and Laotian border by two North Vietnamese divisions (Jan–April 1968).',
      significance:
        'Fixated President Johnson’s attention (who feared an "American Dien Bien Phu"), drawing American airpower away from the coastal cities on the eve of the Tet Offensive.',
      examTip: 'Though held successfully through Operation Niagara bombing, the U.S. quietly abandoned the base months later.',
    },
    {
      id: 'c7-fc3',
      term: 'Eddie Adams Photograph',
      phonetic: 'ED-ee AD-umz',
      definition:
        'Iconic Associated Press photograph showing South Vietnamese National Police Chief Nguyen Ngoc Loan executing a captured Viet Cong officer (Nguyen Van Lem) on a Saigon street on Feb 1, 1968.',
      significance:
        'Won the Pulitzer Prize and became one of the most famous anti-war images in world history, symbolizing the brutality and moral ambiguity of the conflict.',
      examTip: 'Frequently analyzed on historical document exams alongside Nick Ut’s "Napalm Girl" photo.',
    },
  ],
};
