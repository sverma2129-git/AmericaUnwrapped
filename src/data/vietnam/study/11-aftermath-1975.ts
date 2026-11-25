import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 11: CASUALTIES, THE BOAT PEOPLE & RECONCILIATION ─────────────────
export const AFTERMATH_STUDY_DATA: ChapterStudyData = {
  chapterId: 'aftermath-1975',
  bigQuestion:
    'What did thirty years of war cost Vietnam?',
  whyItMatters:
    'About 3 million Vietnamese died, and more than a million later fled by sea. Washington and Hanoi took twenty years after the fall of Saigon to restore normal relations.',
  whatYouWillLearn: [
    'How many Americans, North Vietnamese, South Vietnamese and civilians died.',
    'Why more than one million South Vietnamese were sent to re-education camps, and why hundreds of thousands fled by sea.',
    'How veterans such as John McCain and John Kerry helped restore relations between the U.S. and Vietnam in 1995.',
  ],
  briefing: {
    summary:
      'The 1954–1975 war cost a huge number of lives. 58,220 American service members were killed. Between 200,000 and 250,000 South Vietnamese (ARVN) soldiers died. Official Vietnamese figures put North Vietnamese and Viet Cong deaths at 1.1 million, and about 2 million civilians died on both sides. After the fall of Saigon, Hanoi forced a strict socialist system on the South. About one million former southern officers, officials and intellectuals were held in harsh re-education camps. Up to 165,000 died from hunger, disease and forced labor. From 1975 to the early 1990s, more than 1.5 million Vietnamese escaped in small wooden boats. These were the boat people, and an estimated 200,000 to 400,000 died at sea from drowning and pirate attacks. In the 1990s, Vietnam opened its economy with market reforms called Doi Moi. Two veteran senators, John McCain and John Kerry, worked across party lines to find out what happened to soldiers missing in action (MIA). In July 1995, President Bill Clinton restored normal diplomatic relations with Vietnam.',
    examTakeaways: [
      'More than 3 million Vietnamese soldiers and civilians died, about 8 to 10 percent of the population. 58,220 Americans died.',
      'The boat people’s escape was the largest refugee flight by sea in modern history. Hundreds of thousands of them settled in the United States, France, Canada and Australia.',
      'Veterans helped make peace. After years of joint work to account for missing soldiers and prisoners of war, the two countries restored normal relations in 1995.',
    ],
    keyTerms: [
      {
        id: 'boat-people',
        term: 'The Vietnamese Boat People',
        imageId: 'boat-people-1984',
        phonetic: 'BOHT PEE-pul',
        definition:
          'More than 1.5 million Vietnamese refugees who fled communist rule, re-education camps and poverty after the war. They crossed the sea in crowded, unsafe boats between 1975 and the 1990s.',
        significance:
          'Hundreds of thousands died at sea. Survivors built Vietnamese communities around the world, such as Little Saigon in California.',
        examTip: 'Shows up often in questions about modern immigration and human rights.',
      },
      {
        id: 're-education-camps',
        term: 'Re-Education Camps (Hoc Tap Cai Tao)',
        phonetic: 'REE-ed-yoo-KAY-shun KAMPS',
        definition:
          'Forced-labor prison camps in the countryside, set up by the communist government after 1975. About 1 million South Vietnamese officers, government workers and intellectuals were held there.',
        significance:
          'Their purpose was to crush political opposition and teach communist ideas. Tens of thousands died from hunger, untreated disease and hard labor.',
        examTip: 'They were a main reason so many people fled Vietnam.',
      },
      {
        id: 'diplomatic-normalization-1995',
        term: 'U.S.–Vietnam Normalization (July 1995)',
        phonetic: 'NOR-muh-luh-ZAY-shun',
        definition:
          'President Bill Clinton’s announcement that the United States and the Socialist Republic of Vietnam would restore full diplomatic and economic relations.',
        significance:
          'It ended twenty years of trade bans and hostility. Trade between the two countries grew, and so did cooperation on security.',
        examTip: 'Two Vietnam veterans in the Senate led the way: John McCain, a former POW, and John Kerry.',
      },
    ],
  },
  quiz: [
    {
      id: 'c11-q1',
      question:
        'In 1995 Vietnam’s government released its count of North Vietnamese and Viet Cong soldiers killed. What was it?',
      options: [
        'About 58,000 soldiers killed',
        'About 250,000 soldiers killed',
        'About 3 million soldiers killed',
        'About 1.1 million soldiers killed',
      ],
      correctIndex: 3,
      rationale:
        'In April 1995, on the 20th anniversary of Saigon’s fall, Hanoi broke twenty years of silence. It announced that 1.1 million North Vietnamese and Viet Cong fighters had died fighting American and South Vietnamese forces, along with about 2 million civilians.',
      citationRef: 'c11-1',
    },
    {
      id: 'c11-q2',
      question:
        'Why did hundreds of thousands of South Vietnamese families flee by sea after 1975?',
      options: [
        'A nationwide famine after drought destroyed the Mekong Delta’s rice harvest',
        'Political persecution, re-education camps, and forced moves to rural zones',
        'A Chinese invasion of southern Vietnam soon after the fall of Saigon in 1975',
        'A U.N. program that offered free passage to France for former officials',
      ],
      correctIndex: 1,
      rationale:
        'After 1975, the communist government took private property, imprisoned more than a million former South Vietnamese soldiers and officials in re-education camps, and forced city families onto barren land called New Economic Zones. Many families risked dangerous sea voyages to escape.',
      citationRef: 'c11-2',
    },
    {
      id: 'c11-q3',
      question:
        'Which two senators, both Vietnam veterans, led the push to restore relations with Vietnam in 1995?',
      options: [
        'Senators Bob Dole and Strom Thurmond',
        'James Baker and Senator Sam Nunn',
        'Senators John McCain and John Kerry',
        'Senators Daniel Inouye and Ted Stevens',
      ],
      correctIndex: 2,
      rationale:
        'Republican Senator John McCain spent five and a half years as a POW in the Hanoi Hilton, where he was tortured. Democratic Senator John Kerry was a decorated Navy swift boat commander who later opposed the war. Together they worked to find out what happened to missing soldiers. That gave President Clinton the political support to restore relations.',
      citationRef: 'c11-3',
    },
    {
      id: 'c11-q4',
      question: 'What was Doi Moi, which Vietnam’s Communist Party adopted in December 1986?',
      options: [
        'A plan to move northerners into the South',
        'A set of market reforms that ended collective farming',
        'A treaty restoring relations with the United States',
        'A program to send former officers to re-education camps',
      ],
      correctIndex: 1,
      rationale: 'Doi Moi, or Renovation, was adopted at the 6th Party Congress. With the economy failing, it ended collective farming and moved the country toward a market economy.',
      citationRef: 'c11-3',
    },
    {
      id: 'c11-q5',
      question: 'How long were officers and senior officials of the old South Vietnamese government held in re-education camps?',
      options: [
        'A few days of political lectures',
        'About six months',
        'From 3 to more than 10 years',
        'Exactly one year',
      ],
      correctIndex: 2,
      rationale: 'Former South Vietnamese military officers, government workers and religious leaders had been told to expect a few political lectures. Instead, officers and senior officials were held for 3 to more than 10 years of forced labor and political lessons.',
      citationRef: 'c11-1',
    },
    {
      id: 'c11-q6',
      question: 'Between 1975 and 1995, about how many refugees fled Indochina by sea?',
      options: [
        'Fewer than 100,000 people in all twenty years',
        'Between 100,000 and 200,000 people in total',
        'More than 20 million, almost all of them from the South',
        'Between 800,000 and nearly 2 million',
      ],
      correctIndex: 3,
      rationale: 'Estimates run from 800,000 to nearly 2 million, and the crisis peaked in 1978–1979. International agencies estimate that 200,000 to 500,000 people died at sea.',
      citationRef: 'c11-1',
    },
    {
      id: 'c11-q7',
      question: 'In 1978–1979, which group did Vietnam’s government seize property from and drive into boats on the South China Sea?',
      options: [
        'Its ethnic Chinese citizens, the Hoa',
        'Catholic priests and nuns from the old South',
        'Former North Vietnamese soldiers and their families',
        'Hmong fighters who had come over from Laos',
      ],
      correctIndex: 0,
      rationale: 'As relations with China broke down, the government turned on its ethnic Chinese citizens, the Hoa. In some months they made up 50 to 80 percent of new arrivals at refugee camps.',
      citationRef: 'c11-1',
    },
    {
      id: 'c11-q8',
      question: 'This 1979 photo shows a refugee being rescued from a boat in the South China Sea. About how many boat people are estimated to have died at sea?',
      imageId: 'cargo-net-rescue-1979',
      options: [
        'About 2,000 to 5,000',
        'About 20,000 to 50,000',
        '200,000 to 500,000',
        'More than 5 million',
      ],
      correctIndex: 2,
      rationale: 'International agencies estimate that 200,000 to 500,000 people died at sea from drowning, exposure and pirate attacks. This ship, the USS White Plains, picked up 29 refugees from a 35-foot wooden boat.',
      citationRef: 'c11-1',
    },
  ],
  flashcards: [
    {
      id: 'c11-fc1',
      term: 'Vietnam Veterans Memorial',
      imageId: 'vietnam-memorial-wall',
      phonetic: 'VET-er-unz muh-MOR-ee-ul',
      definition:
        'A national memorial in Washington, D.C., dedicated in November 1982. Maya Lin, a 21-year-old architecture student at Yale, designed it.',
      significance:
        'Its black granite wall, shaped like a V, lists more than 58,000 dead service members in the order they died. It changed how the country mourned and helped veterans and families heal.',
      examTip: 'It is the most visited memorial on the National Mall. It uses names for quiet reflection instead of heroic statues.',
    },
    {
      id: 'c11-fc2',
      term: 'Maya Lin',
      phonetic: 'MY-uh LIN',
      definition:
        'An American architect and artist. As a college student, she won the 1981 national contest to design the Vietnam Veterans Memorial, which was judged without names.',
      significance:
        'Many conservatives attacked her plain, nonpolitical design at first. It is now widely seen as one of the great American memorials.',
      examTip: 'She received the Presidential Medal of Freedom in 2016.',
    },
    {
      id: 'c11-fc3',
      term: 'Doi Moi (Renovation)',
      phonetic: 'DOY MOY',
      definition:
        'Economic reforms that Vietnam’s Communist Party began in 1986. They moved the country from a Soviet-style planned economy to what it called a socialist-oriented market economy.',
      significance:
        'Private businesses were allowed and foreign investment was welcomed. Vietnam became one of the fastest-growing economies in Southeast Asia.',
      examTip: 'Similar to China’s economic reforms under Deng Xiaoping.',
    },
  ],
};
