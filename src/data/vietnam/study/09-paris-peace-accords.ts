import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 9: THE PARIS PEACE ACCORDS ──────────────────────────────────────
export const PARIS_ACCORDS_STUDY_DATA: ChapterStudyData = {
  chapterId: 'paris-peace-accords',
  bigQuestion:
    'Why didn’t the Paris Peace Accords end the war?',
  whyItMatters:
    'The United States got its troops and prisoners of war out. About 150,000 North Vietnamese troops stayed inside South Vietnam, and they decided how the war would end.',
  whatYouWillLearn: [
    'How secret talks between Henry Kissinger and Le Duc Tho produced a draft deal in October 1972.',
    'Why South Vietnam’s president, Nguyen Van Thieu, refused the draft and saw it as a death sentence.',
    'Why Nixon ordered Operation Linebacker II, the Christmas Bombing, to pressure both Hanoi and Saigon.',
  ],
  briefing: {
    summary:
      'In October 1972, secret talks in Paris between Henry Kissinger and the North Vietnamese diplomat Le Duc Tho produced a breakthrough. Hanoi dropped its demand that South Vietnam’s president, Nguyen Van Thieu, be removed. In return, the U.S. agreed that 150,000 to 200,000 North Vietnamese troops could stay where they were inside South Vietnam. Weeks before the 1972 presidential election, Kissinger announced that peace was close. When Thieu saw the draft, he rejected it in anger. He said that leaving northern troops on southern soil meant surrender. Talks broke down. From December 18 to 29, 1972, Nixon ordered Operation Linebacker II, the Christmas Bombing. B-52s dropped more than 20,000 tons of bombs on Hanoi and Haiphong, the heaviest strikes of the war. When talks resumed, the final Paris Peace Accords, signed on January 27, 1973, were almost the same as the October draft. Nixon got Thieu to sign by secretly threatening to cut off all aid. In private letters, he also promised that the U.S. would hit back hard if Hanoi broke the ceasefire. The last American combat troops left by March 29, 1973, and 591 American POWs came home.',
    examTakeaways: [
      'The 1973 Accords let North Vietnamese troops stay inside South Vietnam, while every American combat soldier had to leave.',
      'The Christmas Bombing of December 1972 won few new terms from Hanoi. Its main purpose was to reassure Thieu and push him to sign.',
      'Nixon secretly promised Thieu that the United States would strike back if Hanoi attacked. The Case-Church Amendment of 1973 made that promise impossible to keep.',
    ],
    keyTerms: [
      {
        id: 'paris-peace-accords-term',
        term: 'Paris Peace Accords (January 27, 1973)',
        imageId: 'paris-signing-1973',
        phonetic: 'PAIR-is PEES uh-KORDZ',
        definition:
          'The Agreement on Ending the War and Restoring Peace in Viet-Nam. The United States, North Vietnam, South Vietnam and the Viet Cong all signed it.',
        significance:
          'It ended direct U.S. military involvement and freed 591 American prisoners of war (Operation Homecoming). It also let communist forces stay in the South.',
        examTip: 'Shows up often. It ended America’s part in the war, not the war between Vietnamese.',
      },
      {
        id: 'operation-linebacker-ii',
        term: 'Operation Linebacker II (Christmas Bombing)',
        imageId: 'b52-linebacker-1972',
        phonetic: 'LINE-bak-er TWO',
        definition:
          'An 11-day bombing campaign by U.S. B-52s and fighter-bombers against Hanoi and Haiphong, from December 18 to 29, 1972.',
        significance:
          'It was the heaviest bombing of the war. The U.S. lost 15 B-52s, and countries around the world condemned the raids before peace talks started again.',
        examTip: 'It did not change the main terms already agreed in October 1972.',
      },
      {
        id: 'case-church-amendment',
        term: 'Case-Church Amendment (June 1973)',
        phonetic: 'KAYS CHERCH',
        definition:
          'A law passed by Congress that banned all U.S. military action, including bombing, in Vietnam, Laos and Cambodia after August 15, 1973.',
        significance:
          'It passed by margins large enough to beat a veto. It took away the president’s power to keep Nixon’s secret promises of air support to South Vietnam.',
        examTip: 'It ended American military action in Indochina by law.',
      },
    ],
  },
  quiz: [
    {
      id: 'c9-q1',
      question:
        'What did the United States agree to in the 1973 Paris Peace Accords that Thieu called a death sentence for South Vietnam?',
      options: [
        'North Vietnamese troops could stay in the South while U.S. forces withdrew',
        'The U.S. would pay billions of dollars in war reparations to the Viet Cong',
        'Thieu had to resign and hand power to a neutral caretaker government',
        'South Vietnam had to give up its air force to an international commission',
      ],
      correctIndex: 0,
      rationale:
        'The treaty set a ceasefire in place. North Vietnamese troops could stay on the southern land they held. Thieu knew that once American air power left, the ARVN could not hold off a northern army already inside the country.',
      citationRef: 'c9-1',
    },
    {
      id: 'c9-q2',
      question:
        'How did Nixon get Thieu to sign the Paris Peace Accords in January 1973?',
      options: [
        'He promised to keep 50,000 U.S. troops in South Vietnam as a permanent guarantee',
        'He agreed to keep bombing Hanoi until North Vietnam’s top leaders resigned from power',
        'He threatened to cut aid but secretly promised a forceful U.S. response to violations',
        'He arranged for China to sign a separate treaty guaranteeing South Vietnam’s borders',
      ],
      correctIndex: 2,
      rationale:
        'In letters later published in The Palace File, Nixon warned Thieu that Congress would cut off all economic and military aid if he refused to sign. He also promised in writing to strike back quickly and hard if Hanoi broke the agreement.',
      citationRef: 'c9-2',
    },
    {
      id: 'c9-q3',
      question:
        'What made it impossible for Nixon to keep his promise to defend South Vietnam?',
      options: [
        'A Senate vote recognizing North Vietnam as the only Vietnamese government',
        'A Supreme Court ruling that the Vietnam War was unconstitutional',
        'The Senate’s refusal to confirm Henry Kissinger as secretary of state',
        'Congress’s Case-Church Amendment and the Watergate scandal',
      ],
      correctIndex: 3,
      rationale:
        'In June 1973, Congress passed the Case-Church Amendment, which barred all military action in Indochina. At the same time, the Watergate scandal weakened Nixon until he resigned in August 1974. President Gerald Ford had no legal power to send air support.',
      citationRef: 'c9-3',
    },
    {
      id: 'c9-q4',
      question: 'Who held secret talks with Henry Kissinger outside Paris starting in 1969?',
      options: [
        'Le Duan, First Secretary of the Vietnamese Workers’ Party',
        'Pham Van Dong, Hanoi’s prime minister and chief negotiator',
        'Le Duc Tho, a member of Hanoi’s Politburo',
        'Vo Nguyen Giap, Hanoi’s defense minister and top general',
      ],
      correctIndex: 2,
      rationale: 'Kissinger met Le Duc Tho in a house outside Paris. For three years the talks were stuck on two demands neither side would drop.',
      citationRef: 'c9-1',
    },
    {
      id: 'c9-q5',
      question: 'For three years the Paris talks were stuck. What did Hanoi insist on before any political deal?',
      options: [
        'That Thieu be removed as South Vietnam’s president',
        'That the United States pay for rebuilding North Vietnam first',
        'That all American prisoners be released at once',
        'That China take part in the talks as an equal',
      ],
      correctIndex: 0,
      rationale: 'Hanoi insisted that Nguyen Van Thieu be removed before any political deal, while Washington insisted that every North Vietnamese soldier leave the South. In October 1972, both sides gave ground.',
      citationRef: 'c9-1',
    },
    {
      id: 'c9-q6',
      question: 'In October 1972, both sides gave ground in Paris. What did the United States agree to?',
      options: [
        'To remove Thieu from power within a year of signing',
        'To pay for the rebuilding of North Vietnam after the war ended',
        'To end the draft in the United States before the election',
        'To let North Vietnamese troops stay in the South',
      ],
      correctIndex: 3,
      rationale: 'Hanoi dropped its demand that Thieu go right away, and the United States agreed that about 150,000 to 200,000 North Vietnamese combat troops could stay in South Vietnam. Thieu called this a death sentence for his country.',
      citationRef: 'c9-1',
    },
    {
      id: 'c9-q7',
      question: 'How did the Paris Peace Accords of January 1973 compare with the October 1972 draft, before the Christmas Bombing?',
      options: [
        'Hanoi gave up much more in the final deal',
        'They were almost the same',
        'The U.S. won every one of its demands',
        'Thieu got North Vietnamese troops removed from the South',
      ],
      correctIndex: 1,
      rationale: 'The signed accords were almost the same as the October draft, even though more than 20,000 tons of bombs fell on Hanoi and Haiphong in between. Historians argue about why, but the bombing’s main effect was on Thieu, who was pushed into signing.',
      citationRef: 'c9-3',
    },
    {
      id: 'c9-q8',
      question: 'This is page one of the Paris Peace Accords. How long did the agreement give the United States to pull out completely?',
      imageId: 'paris-accords-text-1973',
      options: [
        '10 days',
        '30 days',
        '60 days',
        'Six months',
      ],
      correctIndex: 2,
      rationale: 'All four sides signed on January 27, 1973, and the United States agreed to pull out completely within 60 days. The last U.S. combat troops left by March 29, 1973, and 591 American prisoners of war came home.',
      citationRef: 'c9-3',
    },
  ],
  flashcards: [
    {
      id: 'c9-fc1',
      term: 'Le Duc Tho',
      phonetic: 'LAY DOOK TOH',
      definition:
        'A senior member of North Vietnam’s Politburo. He led the secret talks with Henry Kissinger in Paris from 1969 to 1973.',
      significance:
        'He and Kissinger were awarded the 1973 Nobel Peace Prize. He turned it down, saying there was still no real peace in Vietnam.',
      examTip: 'He shaped North Vietnam’s plan for the negotiations.',
    },
    {
      id: 'c9-fc2',
      term: 'Operation Homecoming (1973)',
      imageId: 'homecoming-1973',
      phonetic: 'OHM-kuh-ming',
      definition:
        'The return of 591 American prisoners of war held by North Vietnam and the Viet Cong, between February and April 1973.',
      significance:
        'It was the most emotional moment of the withdrawal for Americans. Pilots such as John McCain and James Stockdale came home.',
      examTip: 'It was shown live on national television and marked the public end of America’s fighting role.',
    },
    {
      id: 'c9-fc3',
      term: 'The Palace File',
      phonetic: 'PAL-us FYLE',
      definition:
        'A collection of 27 private letters from Presidents Nixon and Ford to President Thieu. They promised American military action if North Vietnam broke the 1973 Accords.',
      significance:
        'Nguyen Tien Hung made them public in 1986. They showed that Thieu signed only because of promises that Congress later made impossible to keep.',
      examTip: 'It shows the gap between what a president can promise and what Congress will allow.',
    },
  ],
};
