import { ChapterStudyData } from '@/types/study';

export const TONKIN_STUDY_DATA: ChapterStudyData = {
  chapterId: 'gulf-of-tonkin',
  bigQuestion:
    'What really happened in the Gulf of Tonkin in August 1964, and how did it lead to a much larger American war?',
  whyItMatters:
    'Congress passed the Gulf of Tonkin Resolution almost unanimously, on evidence that was misleading. For nine years it worked like a declaration of war, and it changed the argument over who decides when America fights.',
  whatYouWillLearn: [
    'Why the August 2 battle was a real fight in daylight, while the August 4 “attack” came from false radar and sonar readings.',
    'How secret OPLAN 34A raids and DeSoto patrols put American destroyers in the middle of the fighting.',
    'How the resolution gave President Johnson a “blank check,” and how that led to the War Powers Act of 1973.',
  ],
  briefing: {
    summary:
      'On August 2, 1964, North Vietnamese torpedo boats attacked the USS Maddox in daylight. Secret South Vietnamese commando raids (OPLAN 34A) had hit the coast just before. Two nights later, on August 4, during a thunderstorm, sonar and radar operators reported dozens of torpedoes. The destroyers fired more than 650 shells into the night. Within hours, the commander at sea, Captain John Herrick, warned that freak weather and false radar readings explained the reports, and urged caution. President Johnson ordered 64 air strikes in response anyway. Congress then passed the Gulf of Tonkin Resolution, 416–0 in the House and 88–2 in the Senate. It gave the president broad power to use military force without a declaration of war.',
    examTakeaways: [
      'Two incidents: August 2 was a confirmed fight in daylight. The August 4 attack was reported from radar and sonar, and it did not happen.',
      'The blank check: The resolution let Johnson take all necessary measures to repel armed attack. Congress never declared war.',
      'War Powers Act of 1973: Congress passed it over Nixon’s veto in response to Tonkin. Presidents must report troop deployments within 48 hours and get approval within 60 days.',
    ],
    keyTerms: [
      {
        id: 'gulf-of-tonkin-resolution',
        term: 'Gulf of Tonkin Resolution (1964)',
        imageId: 'lbj-tonkin-signing-1964',
        phonetic: 'GULF uv TAHN-kin rez-uh-LOO-shun',
        definition:
          'A joint resolution of Congress. It authorized President Johnson to take all necessary measures to repel armed attack on U.S. forces and to prevent further aggression.',
        significance:
          'It was the legal basis for raising U.S. involvement from 23,000 advisers to more than 540,000 combat troops, with no declaration of war.',
        examTip:
          'A core AP U.S. History topic. It is often tested with the War Powers Act of 1973, which Congress passed to limit presidential war powers.',
      },
      {
        id: 'oplan-34a',
        term: 'OPLAN 34A',
        phonetic: 'OH-plan THUR-tee-for-AY',
        definition:
          'A secret operation run by the CIA and the U.S. military command. South Vietnamese commandos in unmarked boats raided North Vietnam’s coast.',
        significance:
          'Raids on the islands of Hon Me and Hon Ngu came just before North Vietnam attacked the nearby USS Maddox on August 2.',
        examTip:
          'Key evidence that U.S. ships were not simply bystanders in international waters.',
      },
      {
        id: 'desoto-patrol',
        term: 'DeSoto Patrols',
        phonetic: 'duh-SOH-toh puh-TROHLZ',
        definition:
          'Spy missions by U.S. Navy destroyers off communist coasts. The ships recorded radar sites and radio signals.',
        significance:
          'They put American warships close to North Vietnam’s waters while commando raids were under way.',
        examTip:
          'Often compared to Cold War spy flights near Soviet borders.',
      },
      {
        id: 'war-powers-act',
        term: 'War Powers Act of 1973',
        phonetic: 'WOR POW-erz AKT',
        definition:
          'A federal law passed over President Nixon’s veto. The president must tell Congress within 48 hours of sending troops into action, and must withdraw them after 60 days unless Congress approves.',
        significance:
          'It was Congress’s answer to the Tonkin Resolution and the Pentagon Papers. The goal was to restore its check on the president’s power to make war.',
        examTip:
          'A frequent DBQ and essay topic on presidential power and congressional oversight.',
      },
    ],
  },
  quiz: [
    {
      id: 'c4-q1',
      question:
        'What was the critical difference between the naval incidents in the Gulf of Tonkin on August 2 and August 4, 1964?',
      options: [
        'August 2 was a confirmed attack; August 4 was most likely a false alarm',
        'August 2 was a radar error; August 4 was a confirmed torpedo attack',
        'Both were confirmed attacks by North Vietnamese torpedo boats at night',
        'August 2 involved Chinese ships; August 4 involved North Vietnamese ships',
      ],
      correctIndex: 0,
      rationale:
        'On August 2, North Vietnamese P-4 torpedo boats fought the USS Maddox in daylight. On August 4, in a dark squall, false radar and sonar readings led crews to report torpedoes. Later NSA investigations confirmed there were none.',
      citationRef: 'Q024',
    },
    {
      id: 'c4-q2',
      question:
        'What did Task Group Commander Captain John Herrick report to Washington hours after the August 4 incident?',
      options: [
        'That he had sunk several torpedo boats and needed carrier air support at once',
        'That shore batteries had damaged the USS Turner Joy during the night',
        'That Chinese aircraft had joined the attack on the two U.S. destroyers',
        'That many contacts looked doubtful and the action should be fully evaluated',
      ],
      correctIndex: 3,
      rationale:
        'At 1:27 PM Washington time, Herrick cabled: “Review of action makes many reported contacts and torpedoes fired appear doubtful. Freak weather effects on radar and overeager sonarmen may have accounted for many reports... Suggest complete evaluation before any further action taken.”',
      citationRef: 'Q013',
    },
    {
      id: 'c4-q3',
      question:
        'How did Congress respond to President Johnson’s presentation of the Tonkin incident?',
      options: [
        'It delayed any vote until an independent investigation was completed',
        'It passed the Tonkin Resolution almost unanimously, 416–0 and 88–2',
        'It passed a formal declaration of war by a narrow margin in the Senate',
        'The House approved the resolution, but a Senate filibuster blocked it',
      ],
      correctIndex: 1,
      rationale:
        'The resolution passed 416–0 in the House and 88–2 in the Senate. Only Senators Wayne Morse and Ernest Gruening voted against it. Critics later called it a congressional “blank check.”',
      citationRef: 'c4-3',
    },
    {
      id: 'c4-q4',
      question:
        'Which 1973 law was enacted by Congress specifically to prevent future undeclared military interventions like the one authorized by the Tonkin Resolution?',
      options: [
        'The National Security Act amendments of 1973',
        'The Case-Church Amendment on Indochina',
        'The War Powers Resolution (War Powers Act)',
        'The Cooper-Church Amendment on Cambodia',
      ],
      correctIndex: 2,
      rationale:
        'Congress passed the War Powers Act of 1973 over President Nixon’s veto to limit a president’s power to make war. It requires notice within 48 hours and sets a 60-day limit on deployments Congress has not approved.',
      citationRef: 'c4-3',
    },
    {
      id: 'c4-q5',
      imageId: 'lbj-tonkin-signing-1964',
      question:
        'The signing shown in the photograph most directly made possible which development?',
      options: [
        'A formal declaration of war on North Vietnam by Congress',
        'Sustained bombing and U.S. combat troops in Vietnam in 1965',
        'The withdrawal of U.S. military advisers from South Vietnam',
        'A peace conference between Washington and Hanoi in Geneva',
      ],
      correctIndex: 1,
      rationale:
        'Johnson signed the Gulf of Tonkin Resolution on August 10, 1964. He used it as legal authority to begin sustained bombing and send combat troops in 1965, without a declaration of war.',
    },
  ],
  flashcards: [
    {
      id: 'c4-fc1',
      term: 'Gulf of Tonkin Resolution (1964)',
      imageId: 'lbj-tonkin-signing-1964',
      phonetic: 'GULF uv TAHN-kin rez-uh-LOO-shun',
      definition:
        'A joint resolution of Congress. It authorized President Johnson to take all necessary measures to repel armed attack on U.S. forces and to prevent further aggression.',
      significance:
        'It was the legal basis for raising U.S. involvement from 23,000 advisers to more than 540,000 combat troops, with no declaration of war.',
      examTip: 'A core AP U.S. History topic. It is often tested with the War Powers Act of 1973, which Congress passed to limit presidential war powers.',
    },
    {
      id: 'c4-fc2',
      term: 'OPLAN 34A',
      phonetic: 'OH-plan THUR-tee-for-AY',
      definition:
        'A secret operation run by the CIA and the U.S. military command. South Vietnamese commandos in unmarked boats raided North Vietnam’s coast.',
      significance:
        'Raids on the islands of Hon Me and Hon Ngu came just before North Vietnam attacked the nearby USS Maddox on August 2.',
      examTip: 'Key evidence that U.S. ships were not simply bystanders in international waters.',
    },
    {
      id: 'c4-fc3',
      term: 'War Powers Act of 1973',
      phonetic: 'WOR POW-erz AKT',
      definition:
        'A federal law passed over President Nixon’s veto. The president must tell Congress within 48 hours of sending troops into action, and must withdraw them after 60 days unless Congress approves.',
      significance:
        'It was Congress’s answer to the Tonkin Resolution and the Pentagon Papers. The goal was to restore its check on the president’s power to make war.',
      examTip: 'A frequent DBQ and essay topic on presidential power and congressional oversight.',
    },
  ],
};
