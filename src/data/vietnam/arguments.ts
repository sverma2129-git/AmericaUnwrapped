import { HistoriographicalSchool } from '@/types/vietnam';

export const HISTORIOGRAPHICAL_SCHOOLS: HistoriographicalSchool[] = [
  {
    id: 'orthodox-liberal-realist',
    name: 'Orthodox / Liberal Realist School',
    era: '1960s – 1980s (Dominant early paradigm)',
    coreThesis:
      'The war was an unavoidable tragedy and an unwinnable quagmire. Blinded by rigid Cold War containment dogma, Washington misread a genuine post-colonial anti-colonial revolution as part of a monolithic Sino-Soviet conspiracy. Because the South Vietnamese government lacked indigenous political legitimacy, no amount of American military power could produce a lasting non-communist state.',
    keyHistorians: ['David Halberstam', 'Arthur Schlesinger Jr.', 'George C. Herring', 'Stanley Karnow', 'Frances FitzGerald'],
    strengths: [
      'Accurately predicted the failure of military attrition to overcome Vietnamese nationalist resolve.',
      'Documented the severe political corruption, religious persecution, and structural fragility of the Saigon regimes.',
      'Highlighted the domestic constitutional, social, and moral costs of fighting an undeclared war.',
    ],
    blindSpotsOrCritiques: [
      'Tended to treat Vietnamese actors—both North and South—as passive backdrops or virtuous peasants rather than political actors with their own agendas.',
      'Underestimated the extent to which Hanoi was an ideologically committed, militant Leninist police state rather than purely anti-colonial nationalist.',
      'Often dismissed the South Vietnamese Republic as merely a puppet, ignoring genuine non-communist nationalist currents.',
    ],
    primaryEvidenceEmphasized:
      'The Pentagon Papers; internal CIA intelligence warnings (like the 1966 memo); transcripts of Diem-era dysfunction; public protests and battlefield casualties.',
  },
  {
    id: 'revisionist-conservative',
    name: 'Revisionist / Conservative School',
    era: 'Late 1970s – 1990s',
    coreThesis:
      'The war was a noble and just cause to defend a developing ally against totalitarian communist aggression. The war was militarily winnable, but American victory was sabotaged by civilian micromanagement, sanctuary rules in Laos and Cambodia, biased media reporting, and ultimately the abandonment of South Vietnam by Congress when it cut military aid in 1974–1975.',
    keyHistorians: ['Harry G. Summers Jr.', 'Guenter Lewy', 'Lewis Sorley', 'Norman Podhoretz', 'Mark Moyar'],
    strengths: [
      'Demonstrated that the U.S. military never lost a major division-sized tactical battle during the war.',
      'Highlighted how General Creighton Abrams’ "One War" strategy after 1968 successfully pacified vast areas of the countryside and defeated the 1972 Easter Offensive.',
      'Detailed the devastating material impact of congressional aid cuts on ARVN operational readiness between 1973 and 1975.',
    ],
    blindSpotsOrCritiques: [
      'Minimizes the profound political alienation of South Vietnamese society and the endemic corruption of the Thieu military hierarchy.',
      'Downplays the risk that an invasion of North Vietnam or Laos could have triggered direct Chinese intervention (mirroring Korea in 1950).',
      'Struggles to explain how an American democracy could sustain an open-ended, indefinite military protectorate in Southeast Asia.',
    ],
    primaryEvidenceEmphasized:
      'Military records of the 1972 Easter Offensive and Linebacker campaigns; PACV pacification metrics; letters between Nixon and Thieu; congressional aid appropriation cuts.',
  },
  {
    id: 'post-revisionist-internationalist',
    name: 'Post-Revisionist / New Cold War School',
    era: '2000s – Present',
    coreThesis:
      'Moves beyond the "winnable vs unwinnable" binary by examining newly declassified archives in Vietnam, Russia, China, and Eastern Europe. Views the war as a complex multilateral tragedy where Hanoi, Saigon, Beijing, and Moscow pursued independent agendas and manipulated their superpower sponsors, while Washington was trapped by domestic political calculations and credibility commitments.',
    keyHistorians: ['Fredrik Logevall', 'Lien-Hang T. Nguyen', 'Pierre Asselin', 'Ken Hughes', 'Christian Lentz'],
    strengths: [
      'Draws on multilingual, multi-archival research rather than relying solely on American executive branch sources.',
      'Exposes the fierce internal factional battles inside Hanoi’s Politburo (e.g., Le Duan’s purges of moderates like Giap and Ho Chi Minh).',
      'Restores agency to South Vietnamese civil society, religious groups, and military leadership.',
    ],
    blindSpotsOrCritiques: [
      'Deep archival nuance sometimes resists simple, actionable policy takeaways.',
      'Access to top-level Hanoi Politburo archives remains restricted and selective compared to declassified American records.',
    ],
    primaryEvidenceEmphasized:
      'Wilson Center Cold War International History Project translations; Vietnamese Communist Party plenum resolutions (Res. 15, Res. 9); Soviet and Chinese diplomatic cables; White House tapes.',
  },
  {
    id: 'vietnamese-perspectives',
    name: 'Vietnamese Archival & Diaspora Perspectives',
    era: '1975 – Present',
    coreThesis:
      'Centers the war on the lived experience and political agency of the Vietnamese people themselves. Contrasts Hanoi’s official state orthodoxy ("The Great Patriotic War of National Liberation") against critical scholarship from the Vietnamese diaspora and dissident writers who document the immense human sacrifice, internal police-state repression, and the tragic erasure of South Vietnam’s independent history.',
    keyHistorians: ['Bao Ninh', 'Duong Thu Huong', 'Lam Quang Thi', 'Nathalie Huynh Chau Nguyen', 'Võ Phiến'],
    strengths: [
      'Breaks the American-centric frame where Vietnamese people are merely scenery or statistics in someone else’s drama.',
      'Captures the profound existential grief, psychological trauma, and generational cost of thirty years of total war on both sides of the 17th parallel.',
      'Preserves the history of the Republic of Vietnam (South Vietnam) and the one million refugees who fled post-1975.',
    ],
    blindSpotsOrCritiques: [
      'Often intensely polarized between strict Hanoi state orthodoxy and anti-communist diaspora memory.',
    ],
    primaryEvidenceEmphasized:
      'Vietnamese veterans’ memoirs (e.g., Bao Ninh’s "The Sorrow of War"); oral histories of ARVN veterans and "Boat People"; re-education camp testimonies; North Vietnamese provincial casualty registers.',
  },
];
