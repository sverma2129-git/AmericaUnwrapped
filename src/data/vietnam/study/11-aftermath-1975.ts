import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 11: CASUALTIES, THE BOAT PEOPLE & RECONCILIATION ─────────────────
export const AFTERMATH_STUDY_DATA: ChapterStudyData = {
  chapterId: 'aftermath-1975',
  bigQuestion:
    'What was the human and environmental toll of thirty years of war—and how did former enemies achieve diplomatic reconciliation?',
  whyItMatters:
    'Examines the profound human consequences of the war: 3 million dead, the mass exodus of 1.5 million "boat people", re-education camps, Agent Orange contamination, and the 1995 normalization of diplomatic ties.',
  whatYouWillLearn: [
    'The complete casualty breakdown across American, North Vietnamese, South Vietnamese, and civilian populations.',
    'Why over one million South Vietnamese were sent to re-education camps and hundreds of thousands fled by sea.',
    'How veterans like John McCain and John Kerry led the diplomatic effort to normalize U.S.-Vietnamese relations in 1995.',
  ],
  briefing: {
    summary:
      'The human toll of the 1954–1975 Vietnam War was catastrophic: 58,220 American military personnel were killed; between 200,000 and 250,000 South Vietnamese (ARVN) soldiers died; official Vietnamese figures estimate 1.1 million North Vietnamese Army (PAVN) and Viet Cong combatants were killed; and approximately 2 million civilians died on both sides. Following the fall of Saigon, Hanoi imposed strict socialist collectivism: an estimated one million former southern military officers, officials, and intellectuals were detained in harsh "re-education camps," with up to 165,000 dying from starvation, disease, and forced labor. Between 1975 and the early 1990s, over 1.5 million Vietnamese fled the country in rickety wooden vessels—the "Boat People"—with an estimated 200,000 to 400,000 perishing at sea from drownings and pirate attacks. In the 1990s, Vietnam’s market reforms (Doi Moi), combined with bipartisan leadership from American veteran-senators John McCain and John Kerry resolving the fate of soldiers Missing in Action (MIA), culminated in President Bill Clinton normalizing diplomatic relations in July 1995.',
    examTakeaways: [
      'Asymmetric Demographic Loss: Vietnamese military and civilian deaths (totaling over 3 million) represented nearly 8–10% of Vietnam’s entire population, compared to 58,220 American deaths.',
      'The "Boat People" Refugee Crisis: Triggered the largest maritime refugee exodus in modern history, resulting in the resettlement of hundreds of thousands of Vietnamese refugees across the United States, France, Canada, and Australia.',
      'Reconciliation through Veteran Diplomacy: Diplomatic normalization in 1995 was driven by joint military accounting for MIAs and POWs, transforming former mortal adversaries into comprehensive strategic partners.',
    ],
    keyTerms: [
      {
        id: 'boat-people',
        term: 'The Vietnamese "Boat People"',
        phonetic: 'BOHT PEE-pul',
        definition:
          'Over 1.5 million Vietnamese refugees who fled post-war communist repression, re-education camps, and poverty in overcrowded, unseaworthy boats between 1975 and the 1990s.',
        significance:
          'Hundreds of thousands perished at sea, while survivors established vibrant overseas Vietnamese diaspora communities (such as Little Saigon in California).',
        examTip: 'High frequency on modern immigration and human rights history topics.',
      },
      {
        id: 're-education-camps',
        term: 'Re-Education Camps (Hoc Tap Cai Tao)',
        phonetic: 'REE-ed-yoo-KAY-shun KAMPS',
        definition:
          'Network of rural forced-labor prison camps established by the communist government after 1975 where an estimated 1 million South Vietnamese military officers, civil servants, and intellectuals were detained.',
        significance:
          'Intended to eliminate political dissent and enforce ideological indoctrination; resulted in tens of thousands of deaths from malnutrition, untreated disease, and hard labor.',
        examTip: 'Primary domestic catalyst for the mass refugee flight from Vietnam.',
      },
      {
        id: 'diplomatic-normalization-1995',
        term: 'U.S.–Vietnam Normalization (July 1995)',
        phonetic: 'NOR-muh-luh-ZAY-shun',
        definition:
          'The formal re-establishment of diplomatic and economic relations between the United States and the Socialist Republic of Vietnam announced by President Bill Clinton.',
        significance:
          'Ended two decades of trade embargoes and hostility, leading to comprehensive bilateral trade and growing security cooperation.',
        examTip: 'Pioneered by Vietnam veteran senators John McCain (former POW) and John Kerry.',
      },
    ],
  },
  quiz: [
    {
      id: 'c11-q1',
      question:
        'What was the official casualty figure disclosed by the Vietnamese government in 1995 regarding the total number of North Vietnamese and Viet Cong combatants killed during the war against the United States?',
      options: [
        'About 58,000 soldiers killed',
        'About 250,000 soldiers killed',
        'About 3 million soldiers killed',
        'About 1.1 million soldiers killed',
      ],
      correctIndex: 3,
      rationale:
        'Breaking twenty years of official silence on the 20th anniversary of Saigon’s fall, Hanoi officially announced in April 1995 that 1.1 million North Vietnamese and Viet Cong combatants died fighting American and South Vietnamese forces, alongside an estimated 2 million civilian deaths.',
      citationRef: 'c11-1',
    },
    {
      id: 'c11-q2',
      question:
        'What was the primary human rights crisis that prompted hundreds of thousands of South Vietnamese families to flee into the South China Sea as "Boat People" after 1975?',
      options: [
        'A nationwide famine after drought destroyed the Mekong Delta’s rice harvest',
        'Political persecution, re-education camps, and forced moves to rural zones',
        'A Chinese invasion of southern Vietnam soon after the fall of Saigon in 1975',
        'A U.N. program that offered free passage to France for former officials',
      ],
      correctIndex: 1,
      rationale:
        'After 1975, the victorious communist regime confiscated private property, imprisoned over a million former South Vietnamese personnel in re-education camps, and forcibly relocated urban residents to barren "New Economic Zones," prompting families to risk dangerous sea voyages to escape.',
      citationRef: 'c11-2',
    },
    {
      id: 'c11-q3',
      question:
        'Which two prominent American political leaders—both decorated Vietnam War veterans—played the decisive bipartisan role in persuading Congress and President Clinton to normalize diplomatic relations with Vietnam in 1995?',
      options: [
        'Senators Bob Dole and Strom Thurmond',
        'James Baker and Senator Sam Nunn',
        'Senators John McCain and John Kerry',
        'Senators Daniel Inouye and Ted Stevens',
      ],
      correctIndex: 2,
      rationale:
        'Republican Senator John McCain (who spent five and a half years as a tortured POW in the "Hanoi Hilton") and Democratic Senator John Kerry (decorated Navy swift boat commander and anti-war veteran) formed a historic partnership to resolve the fate of MIAs, giving President Clinton the political cover to restore relations.',
      citationRef: 'c11-3',
    },
  ],
  flashcards: [
    {
      id: 'c11-fc1',
      term: 'Vietnam Veterans Memorial',
      phonetic: 'VET-er-unz muh-MOR-ee-ul',
      definition:
        'National memorial in Washington, D.C. designed by 21-year-old Yale architecture student Maya Lin, dedicated in November 1982.',
      significance:
        'Its black granite V-shaped wall inscribed chronologically with the names of over 58,000 fallen service members transformed national mourning and helped heal domestic war trauma.',
      examTip: 'The most visited memorial on the National Mall; rejected heroic martial statuary in favor of personal reflection.',
    },
    {
      id: 'c11-fc2',
      term: 'Maya Lin',
      phonetic: 'MY-uh LIN',
      definition:
        'American architect and artist who won the blind national public design competition for the Vietnam Veterans Memorial in 1981 while an undergraduate.',
      significance:
        'Faced fierce initial conservative opposition to her abstract, non-political design, which subsequently became universally recognized as a masterpiece of commemorative art.',
      examTip: 'Awarded the Presidential Medal of Freedom in 2016 for her architectural vision.',
    },
    {
      id: 'c11-fc3',
      term: 'Doi Moi ("Renovation")',
      phonetic: 'DOY MOY',
      definition:
        'Economic reform program initiated by the Communist Party of Vietnam in 1986 shifting the country from a Soviet-style centrally planned economy to a "socialist-oriented market economy."',
      significance:
        'Allowed private enterprise, encouraged foreign investment, and propelled Vietnam to become one of the fastest-growing economies in Southeast Asia.',
      examTip: 'Analogous to China’s economic reforms under Deng Xiaoping.',
    },
  ],
};
