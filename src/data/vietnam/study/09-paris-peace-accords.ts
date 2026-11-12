import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 9: THE PARIS PEACE ACCORDS ──────────────────────────────────────
export const PARIS_ACCORDS_STUDY_DATA: ChapterStudyData = {
  chapterId: 'paris-peace-accords',
  bigQuestion:
    'Why did President Nixon order the brutal "Christmas Bombing" of 1972—and why did the 1973 Paris Peace Accords fail to end the war?',
  whyItMatters:
    'Reveals how the United States secured an exit for its troops and POWs while leaving 150,000 North Vietnamese troops inside South Vietnam, sealing Saigon’s eventual fate.',
  whatYouWillLearn: [
    'How secret negotiations between Henry Kissinger and Le Duc Tho produced the October 1972 breakthrough.',
    'Why South Vietnamese President Nguyen Van Thieu vehemently rejected the draft treaty as a death sentence.',
    'Why Nixon unleashed Operation Linebacker II (the Christmas Bombing) to coerce both Hanoi and Saigon.',
  ],
  briefing: {
    summary:
      'In October 1972, secret negotiations in Paris between Henry Kissinger and North Vietnamese diplomat Le Duc Tho produced a breakthrough: Hanoi dropped its demand that South Vietnamese President Nguyen Van Thieu be removed from power, while the U.S. conceded that approximately 150,000 to 200,000 North Vietnamese regular troops (PAVN) could remain in place inside South Vietnam. Weeks before the 1972 U.S. presidential election, Kissinger announced "peace is at hand." However, when presented with the draft, President Thieu furiously rejected it, calling foreign troops on southern soil a fatal capitulation. Talks broke down, and from December 18 to 29, 1972, Nixon unleashed Operation Linebacker II—the "Christmas Bombing"—dropping over 20,000 tons of explosives on Hanoi and Haiphong in the heaviest B-52 strikes of the war. When negotiations resumed, the final Paris Peace Accords signed on January 27, 1973 were essentially identical to the October draft. Nixon coerced Thieu into signing by secretly threatening to cut off all aid and privately promising in personal letters that the U.S. would "respond with full force" if Hanoi violated the ceasefire. All remaining American combat troops departed by March 29, 1973, and 591 American POWs returned home.',
    examTakeaways: [
      'The Fatal Concession: The 1973 Accords permitted North Vietnamese Army (PAVN) regular troops to remain permanently stationed inside South Vietnam while requiring all American combat forces to leave.',
      'The Christmas Bombing Purpose: Operation Linebacker II was aimed not at winning major new concessions from Hanoi, but at reassuring Thieu and demonstrating violent American resolve before departing.',
      'Nixon’s Empty Secret Commitments: Nixon secretly promised Thieu that the U.S. would retaliate if Hanoi attacked, but Congress legally voided this promise through the Case-Church Amendment and the War Powers Act.',
    ],
    keyTerms: [
      {
        id: 'paris-peace-accords-term',
        term: 'Paris Peace Accords (January 27, 1973)',
        phonetic: 'PAIR-is PEES uh-KORDZ',
        definition:
          'Agreement on Ending the War and Restoring Peace in Viet-Nam, signed by the United States, North Vietnam, South Vietnam, and the Viet Cong.',
        significance:
          'Ended direct U.S. military participation in the war, secured the release of 591 American prisoners of war (Operation Homecoming), and permitted communist forces to remain in the South.',
        examTip: 'High frequency. Note that it ended American participation, NOT the Vietnamese civil war.',
      },
      {
        id: 'operation-linebacker-ii',
        term: 'Operation Linebacker II ("Christmas Bombing")',
        phonetic: 'LINE-bak-er TWO',
        definition:
          'Intense 11-day aerial bombardment campaign conducted by U.S. B-52s and fighter-bombers against Hanoi and Haiphong from December 18 to 29, 1972.',
        significance:
          'The heaviest aerial bombardment of the war; resulted in the loss of 15 B-52 bombers and widespread international condemnation before peace talks resumed.',
        examTip: 'Did not alter the core terms of the draft treaty already negotiated in October 1972.',
      },
      {
        id: 'case-church-amendment',
        term: 'Case-Church Amendment (June 1973)',
        phonetic: 'KAYS CHERCH',
        definition:
          'Congressional legislation prohibiting all U.S. military activity (including aerial bombing) in Vietnam, Laos, and Cambodia past August 15, 1973.',
        significance:
          'Passed by veto-proof majorities, it legally stripped the President of the authority to fulfill Nixon’s secret pledges of air support to South Vietnam.',
        examTip: 'The definitive legislative end to American military intervention in Indochina.',
      },
    ],
  },
  quiz: [
    {
      id: 'c9-q1',
      question:
        'What major concession did the United States make in the 1973 Paris Peace Accords that South Vietnamese President Thieu viewed as a "death sentence" for his country?',
      options: [
        'North Vietnamese troops could stay in the South while U.S. forces withdrew',
        'The U.S. would pay billions of dollars in war reparations to the Viet Cong',
        'Thieu had to resign and hand power to a neutral caretaker government',
        'South Vietnam had to give up its air force to an international commission',
      ],
      correctIndex: 0,
      rationale:
        'The treaty established a "ceasefire-in-place," permitting North Vietnamese regular troops to remain in occupation of southern territory they held. Thieu recognized that once American combat airpower left, an isolated ARVN could never hold off a fortified northern army already inside its borders.',
      citationRef: 'c9-1',
    },
    {
      id: 'c9-q2',
      question:
        'How did President Nixon convince South Vietnamese President Nguyen Van Thieu to sign the Paris Peace Accords in January 1973 despite Thieu’s fierce objections?',
      options: [
        'He promised to keep 50,000 U.S. troops in South Vietnam as a permanent guarantee',
        'He agreed to keep bombing Hanoi until North Vietnam’s top leaders resigned from power',
        'He threatened to cut aid but secretly promised a forceful U.S. response to violations',
        'He arranged for China to sign a separate treaty guaranteeing South Vietnam’s borders',
      ],
      correctIndex: 2,
      rationale:
        'In declassified letters published in The Palace File, Nixon warned Thieu that Congress would terminate all economic and military aid if he refused to sign, but promised: "You have my absolute assurance that if Hanoi fails to abide by the terms of this agreement, it is my intention to take swift and severe retaliatory action."',
      citationRef: 'c9-2',
    },
    {
      id: 'c9-q3',
      question:
        'What event in Washington during 1973–1974 permanently destroyed the executive branch’s ability to intervene militarily to defend South Vietnam as Nixon had promised?',
      options: [
        'A Senate vote recognizing North Vietnam as the only Vietnamese government',
        'A Supreme Court ruling that the Vietnam War was unconstitutional',
        'The Senate’s refusal to confirm Henry Kissinger as secretary of state',
        'Congress’s Case-Church Amendment and the Watergate scandal',
      ],
      correctIndex: 3,
      rationale:
        'In June 1973, Congress passed the Case-Church Amendment barring all military actions in Indochina. Simultaneously, the Watergate scandal eroded Nixon’s political authority until his resignation in August 1974, leaving President Gerald Ford with zero legal power to send air support.',
      citationRef: 'c9-3',
    },
  ],
  flashcards: [
    {
      id: 'c9-fc1',
      term: 'Le Duc Tho',
      phonetic: 'LAY DOOK TOH',
      definition:
        'Senior North Vietnamese Politburo diplomat who conducted secret negotiations in Paris with Henry Kissinger from 1969 to 1973.',
      significance:
        'Jointly awarded the 1973 Nobel Peace Prize with Kissinger; famously declined the award, stating that true peace had not been established in Vietnam.',
      examTip: 'The primary architect of North Vietnam’s diplomatic negotiating strategy.',
    },
    {
      id: 'c9-fc2',
      term: 'Operation Homecoming (1973)',
      phonetic: 'OHM-kuh-ming',
      definition:
        'The repatriation of 591 American prisoners of war (POWs) held by North Vietnam and the Viet Cong, conducted between February and April 1973.',
      significance:
        'The most emotional public milestone of the American withdrawal, bringing home pilots like John McCain and James Stockdale.',
      examTip: 'Covered live on national television; marked the public end of active U.S. troop deployment.',
    },
    {
      id: 'c9-fc3',
      term: 'The "Palace File"',
      phonetic: 'PAL-us FYLE',
      definition:
        'The secret archive of 27 personal letters written by Presidents Nixon and Ford to President Thieu pledging American military retaliation if North Vietnam broke the 1973 Accords.',
      significance:
        'Revealed in 1986 by Nguyen Tien Hung; proved that Thieu only signed the treaty because of executive promises that Congress subsequently rendered legally void.',
      examTip: 'Demonstrates the sharp disconnect between presidential executive promises and constitutional congressional reality.',
    },
  ],
};
