import { ChapterStudyData } from '@/types/study';

export const TONKIN_STUDY_DATA: ChapterStudyData = {
  chapterId: 'gulf-of-tonkin',
  bigQuestion:
    'What really happened in the Gulf of Tonkin on August 4, 1964—and how did a phantom battle lead to full-scale American war?',
  whyItMatters:
    'The Gulf of Tonkin Resolution passed almost unanimously based on misleading evidence, serving as the functional equivalent of a declaration of war for nine years and fundamentally shifting congressional war powers.',
  whatYouWillLearn: [
    'Why the August 2 battle was a real daylight exchange, while August 4 was a phantom radar echo.',
    'How covert OPLAN 34A commando raids and DeSoto patrols placed American destroyers in active combat zones.',
    'How the resulting Tonkin Gulf Resolution handed President Johnson a "blank check" that ultimately produced the War Powers Act of 1973.',
  ],
  briefing: {
    summary:
      'On August 2, 1964, North Vietnamese torpedo boats attacked the USS Maddox in broad daylight following covert South Vietnamese commando raids (OPLAN 34A). Two nights later, on August 4, during a violent thunderstorm, sonar operators and radar scopes reported dozens of incoming torpedoes. Destroyers fired over 650 shells into the night. Within hours, Task Group Commander Captain John Herrick warned that radar ghosts and freak weather accounted for the blips, urging caution. Nevertheless, President Johnson ordered 64 retaliatory air strikes and secured the Gulf of Tonkin Resolution from Congress (416-0 in House, 88-2 in Senate), granting broad authority to use military force without an official declaration of war.',
    examTakeaways: [
      'Dual Incidents: August 2 was a confirmed daylight firefight; August 4 was a phantom radar battle that never occurred.',
      'Blank Check Resolution: The Tonkin Gulf Resolution granted LBJ all necessary measures to repel armed attack, bypassing the constitutional requirement for Congress to declare war.',
      'War Powers Act of 1973: Passed over Nixon’s veto in direct legislative reaction to Tonkin, requiring presidents to report troop deployments within 48 hours and obtain approval within 60 days.',
    ],
    keyTerms: [
      {
        id: 'gulf-of-tonkin-resolution',
        term: 'Gulf of Tonkin Resolution (1964)',
        phonetic: 'GULF uv TAHN-kin rez-uh-LOO-shun',
        definition:
          'Joint resolution passed by Congress authorizing President Johnson to take all necessary measures to repel armed attack against U.S. forces and prevent further aggression.',
        significance:
          'Served as the legal justification for escalating U.S. involvement from 23,000 advisors to over 540,000 combat troops without an official declaration of war.',
        examTip:
          'Essential AP U.S. History concept. Frequently tested alongside the War Powers Act of 1973 as the catalyst for limiting executive war powers.',
      },
      {
        id: 'oplan-34a',
        term: 'OPLAN 34A',
        phonetic: 'OH-plan THUR-tee-for-AY',
        definition:
          'A covert CIA/MACV operation conducting maritime sabotage raids against North Vietnamese coastal facilities using South Vietnamese commandos and unmarked patrol boats.',
        significance:
          'Raids on Hon Me and Hon Ngu islands directly preceded North Vietnam’s decision to attack the nearby USS Maddox on August 2.',
        examTip:
          'Key evidence that U.S. patrols were not innocent observers in international waters.',
      },
      {
        id: 'desoto-patrol',
        term: 'DeSoto Patrols',
        phonetic: 'duh-SOH-toh puh-TROHLZ',
        definition:
          'Electronic intelligence collection missions by U.S. Navy destroyers off communist coastlines designed to map radar installations and signal frequencies.',
        significance:
          'Brought American warships into close proximity with North Vietnamese territorial waters amid covert commando strikes.',
        examTip:
          'Often compared to Cold War reconnaissance flights near Soviet borders.',
      },
      {
        id: 'war-powers-act',
        term: 'War Powers Act of 1973',
        phonetic: 'WOR POW-erz AKT',
        definition:
          'Federal law enacted over President Nixon’s veto requiring the President to notify Congress within 48 hours of deploying military forces and limiting deployment to 60 days unless Congress approves.',
        significance:
          'Direct legislative response to the Tonkin Resolution and the Pentagon Papers, aiming to restore constitutional checks and balances over warmaking.',
        examTip:
          'High yield DBQ/FRQ topic on executive power versus congressional oversight.',
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
        'On August 2, North Vietnamese P-4 torpedo boats engaged the USS Maddox in broad daylight. On August 4, in pitch-black squall conditions, radar ghosts and acoustic echoes led sonarmen to report incoming torpedoes that post-war NSA investigations confirmed never existed.',
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
        'At 1:27 PM Washington time, Herrick cabled: "Review of action makes many reported contacts and torpedoes fired appear doubtful. Freak weather effects on radar and overeager sonarmen may have accounted for many reports... Suggest complete evaluation before any further action taken."',
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
        'The resolution passed 416-0 in the House and 88-2 in the Senate (with only Senators Wayne Morse and Ernest Gruening voting against it), handing LBJ a congressional "blank check."',
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
        'The War Powers Act of 1973 was passed over President Nixon’s veto to curtail executive warmaking by mandating a 48-hour notification and a 60-day limit on unapproved foreign troop deployments.',
      citationRef: 'c4-3',
    },
  ],
  flashcards: [
    {
      id: 'c4-fc1',
      term: 'Gulf of Tonkin Resolution (1964)',
      phonetic: 'GULF uv TAHN-kin rez-uh-LOO-shun',
      definition:
        'Joint congressional resolution authorizing LBJ to take all necessary measures to repel armed attacks against U.S. forces.',
      significance:
        'Allowed 9 years of undeclared presidential war in Southeast Asia.',
      examTip: 'Catalyst for the 1973 War Powers Act.',
    },
    {
      id: 'c4-fc2',
      term: 'OPLAN 34A',
      phonetic: 'OH-plan THUR-tee-for-AY',
      definition:
        'Covert maritime sabotage raids by South Vietnamese commandos along North Vietnam’s coast.',
      significance:
        'Provoked North Vietnam to engage the nearby USS Maddox.',
      examTip: 'Disproved the narrative of an unprovoked attack in open waters.',
    },
    {
      id: 'c4-fc3',
      term: 'War Powers Act of 1973',
      phonetic: 'WOR POW-erz AKT',
      definition:
        'Federal law requiring 48-hour presidential reporting and a 60-day limit on unauthorized foreign combat deployments.',
      significance:
        'Historic reassertion of congressional constitutional authority over military conflicts.',
      examTip: 'Passed over President Nixon’s veto; core DBQ concept.',
    },
  ],
};
