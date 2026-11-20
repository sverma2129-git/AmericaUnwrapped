import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 5: AMERICANIZATION & THE WAR OF ATTRITION ───────────────────────
export const ATTRITION_STUDY_DATA: ChapterStudyData = {
  chapterId: 'americanization-attrition',
  bigQuestion:
    'Why couldn’t half a million American troops wear North Vietnam down?',
  whyItMatters:
    'Westmoreland measured success in enemy dead. The count kept climbing, and the war kept going.',
  whatYouWillLearn: [
    'How the Marines’ landing at Da Nang in March 1965 and Operation Rolling Thunder made the war an American one.',
    'What the Battle of Ia Drang (1965) taught each side: helicopters for the U.S., close-range ambush for the North Vietnamese.',
    'Why a Pentagon study led by Alain Enthoven found that communist forces, not the U.S. command, controlled how many soldiers they lost.',
  ],
  briefing: {
    summary:
      'In March 1965, President Johnson sent the first American ground combat troops, 3,500 Marines, to Da Nang. He also launched Operation Rolling Thunder, a three-year bombing campaign against North Vietnam. General William Westmoreland fought a war of attrition. He used heavy firepower, B-52 strikes and helicopter-borne troops to try to kill enemy soldiers faster than North Vietnam could replace them. That was the crossover point. In November 1965, the Battle of the Ia Drang Valley showed that American helicopters and firepower could cause huge losses. It also taught North Vietnamese commanders to grab them by the belt buckle, fighting so close that American air power could not be used without killing Americans. A Pentagon study found that communist forces started more than 75% of firefights. They could control their own losses, which broke the logic of attrition.',
    examTakeaways: [
      'In 1965 Johnson turned an advisory mission into an American war. U.S. troops in Vietnam went from 23,000 to more than 184,000 in a year, and peaked at 543,000 in 1969.',
      'With no front line to measure, the U.S. command counted enemy dead. Officers felt pressure to inflate the count, and some counted dead civilians as enemy fighters.',
      'About 200,000 young men in North Vietnam turned 18 every year. The United States could not kill soldiers faster than Hanoi could replace them.',
    ],
    keyTerms: [
      {
        id: 'search-and-destroy',
        term: 'Search and Destroy',
        phonetic: 'SERCH and dih-STROY',
        definition:
          'The U.S. command’s main ground tactic. Helicopters dropped American infantry into hostile countryside to find enemy units, hit them with artillery and air strikes, and then leave.',
        significance:
          'The troops did not stay to hold the ground. Communist forces moved back into villages as soon as the helicopters left, and farmers paid the price.',
        examTip: 'Contrast it with the enclave and clear-and-hold approaches.',
      },
      {
        id: 'operation-rolling-thunder',
        term: 'Operation Rolling Thunder (1965–1968)',
        imageId: 'rolling-thunder-1966',
        phonetic: 'ROH-ling THUN-der',
        definition:
          'The long bombing campaign by the U.S. Air Force and Navy against North Vietnam. It was stepped up gradually and dropped more than 864,000 tons of bombs.',
        significance:
          'It did not make Hanoi stop sending men and supplies south, and it did not wreck the North’s farm-based economy. It hardened North Vietnamese resolve and brought in Soviet air-defense aid.',
        examTip: 'It dropped more bomb tonnage on North Vietnam than fell on the whole Pacific theater in World War II.',
      },
      {
        id: 'ia-drang-valley',
        term: 'Battle of the Ia Drang Valley (Nov 1965)',
        imageId: 'ia-drang-1965',
        phonetic: 'EE-uh DRAHNG',
        definition:
          'The first major battle between American soldiers (the 1st Cavalry Division) and North Vietnamese regular troops, fought in the Central Highlands.',
        significance:
          'Both sides claimed victory. The U.S. decided its helicopters and firepower worked. The North Vietnamese learned to fight at close range.',
        examTip: 'The subject of the memoir and film We Were Soldiers Once... and Young.',
      },
    ],
  },
  quiz: [
    {
      id: 'c5-q1',
      question:
        'What was the main goal of Westmoreland’s strategy of attrition?',
      options: [
        'To capture and hold North Vietnamese territory up to the Chinese border',
        'To seal the 17th parallel and the Laos border with a fortified barrier',
        'To hand all ground fighting to South Vietnamese troops within one year',
        'To kill enemy soldiers faster than North Vietnam could replace them',
      ],
      correctIndex: 3,
      rationale:
        'Westmoreland measured victory by the crossover point, not by ground taken. The goal was to kill enemy soldiers faster than North Vietnam could recruit and send replacements, so that Hanoi would give up the fight.',
      citationRef: 'c5-1',
    },
    {
      id: 'c5-q2',
      question:
        'After the fighting at LZ X-Ray in the Ia Drang Valley in November 1965, what did North Vietnamese commanders change?',
      options: [
        'To fight at very close range so U.S. artillery and air strikes could not be used',
        'To avoid U.S. troops entirely and attack only South Vietnamese army units',
        'To mass tanks in open terrain, where U.S. helicopters could not safely land troops',
        'To attack only at night, when U.S. helicopters could not fly at all',
      ],
      correctIndex: 0,
      rationale:
        'General Vo Nguyen Giap and the battlefield commander Chu Huy Man saw that American artillery and air power were deadliest at long range. By fighting at point-blank range (grabbing the belt buckle), their units took away that advantage.',
      citationRef: 'c5-2',
    },
    {
      id: 'c5-q3',
      question:
        'What flaw in the attrition strategy did Alain Enthoven’s analysts at the Pentagon find?',
      options: [
        'U.S. factories could not produce enough artillery shells to sustain the effort',
        'Body counts were too low to justify sending any more American troops',
        'Communist forces started most firefights, so they controlled their own losses',
        'North Vietnam’s population was too small to replace its battlefield losses',
      ],
      correctIndex: 2,
      rationale:
        'The Pentagon study found that communist forces decided when, where and for how long more than 75% of battles were fought. Because they chose the fights, they could break off when losses got too high.',
      citationRef: 'c5-3',
    },
    {
      id: 'c5-q4',
      imageId: 'pentagon-flower-1967',
      question:
        'The 1967 scene in the photograph best reflects which development?',
      options: [
        'Public support for the war rose as more troops were sent',
        'Congress cut off all funding for the war in South Vietnam',
        'Antiwar protest grew as the United States escalated the war',
        'Military police were sent to guard Saigon’s American embassy',
      ],
      correctIndex: 2,
      rationale:
        'By October 1967, with nearly half a million U.S. troops in Vietnam, tens of thousands of demonstrators marched on the Pentagon. Protest grew as the war escalated.',
    },
  ],
  flashcards: [
    {
      id: 'c5-fc1',
      term: 'General William Westmoreland',
      imageId: 'lbj-cam-ranh-1966',
      phonetic: 'WEST-mor-lund',
      definition:
        'A four-star U.S. Army general who commanded U.S. forces in Vietnam from 1964 to 1968. He backed search-and-destroy tactics, body counts and attrition.',
      significance:
        'He assumed American technology and resources would force North Vietnam to give up. He was replaced after the 1968 Tet Offensive.',
      examTip: 'In November 1967, shortly before Tet, he told Americans he could see light at the end of the tunnel.',
    },
    {
      id: 'c5-fc2',
      term: 'The Crossover Point',
      phonetic: 'KROS-oh-ver POYNT',
      definition:
        'The point at which, by the U.S. command’s math, enemy losses would be greater than North Vietnam’s ability to replace troops through the draft and recruiting.',
      significance:
        'It was the reasoning behind Westmoreland’s war of attrition. It failed because North Vietnam had far more people, and far more staying power, than the U.S. estimated.',
      examTip: 'A key term for explaining why the war’s measures of progress were flawed.',
    },
    {
      id: 'c5-fc3',
      term: 'Free-Fire Zone',
      phonetic: 'FREE FYRE ZOHN',
      definition:
        'A rural area that civilians had been ordered to leave. American and South Vietnamese forces could then shell or bomb anyone moving there without asking for clearance.',
      significance:
        'The result was heavy civilian casualties. Millions of farmers were driven into crowded refugee slums around Saigon and Da Nang.',
      examTip: 'It turned many rural people against the South Vietnamese government and the U.S. military.',
    },
  ],
};
