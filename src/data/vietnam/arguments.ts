import { HistoriographicalSchool } from '@/types/vietnam';

export const HISTORIOGRAPHICAL_SCHOOLS: HistoriographicalSchool[] = [
  {
    id: 'orthodox-liberal-realist',
    name: 'Orthodox school',
    era: '1960s to 1980s, the first view to take hold',
    coreThesis:
      'The war was a tragedy that could never have been won. American leaders were blinded by a rigid belief in containing communism and mistook a real revolution against colonial rule for part of a single Soviet and Chinese plot. Because South Vietnam’s government never won its own people’s loyalty, no amount of American military power could build a lasting non-communist state.',
    keyHistorians: ['David Halberstam', 'Arthur Schlesinger Jr.', 'George C. Herring', 'Stanley Karnow', 'Frances FitzGerald'],
    strengths: [
      'Correctly predicted that wearing down the enemy would not break Vietnamese nationalism.',
      'Documented the corruption, religious persecution and weakness of the governments in Saigon.',
      'Showed what fighting an undeclared war cost Americans at home, in law, in society and in trust.',
    ],
    blindSpotsOrCritiques: [
      'Often treated the Vietnamese on both sides as background or as innocent farmers, not as people with their own political goals.',
      'Underplayed how much Hanoi was a hard-line communist police state, not only a nationalist movement.',
      'Often waved off South Vietnam as a puppet and ignored the non-communist nationalists who lived there.',
    ],
    primaryEvidenceEmphasized:
      'The Pentagon Papers, internal CIA warnings such as a 1966 memo, records of the dysfunction under Diem, and the protests and casualty lists at home.',
  },
  {
    id: 'revisionist-conservative',
    name: 'Revisionist school',
    era: 'Late 1970s to 1990s',
    coreThesis:
      'Defending South Vietnam from communist attack was a noble cause, and the war could have been won. Victory was thrown away by civilian leaders who micromanaged the fighting, rules that kept troops out of enemy bases in Laos and Cambodia, biased news coverage and, in the end, a Congress that cut South Vietnam’s military aid in 1974 and 1975.',
    keyHistorians: ['Harry G. Summers Jr.', 'Guenter Lewy', 'Lewis Sorley', 'Norman Podhoretz', 'Mark Moyar'],
    strengths: [
      'Showed that the U.S. military never lost a major battle at the scale of a division.',
      'Argued that General Creighton Abrams’ One War strategy secured much of the countryside after 1968 and helped stop the 1972 Easter Offensive.',
      'Documented how badly the aid cuts of 1973 to 1975 hurt South Vietnam’s army.',
    ],
    blindSpotsOrCritiques: [
      'Plays down how many South Vietnamese had turned against their government, and the corruption at the top of Thieu’s army.',
      'Plays down the risk that invading North Vietnam or Laos could have brought China into the war, as happened in Korea in 1950.',
      'Has trouble explaining how a democracy could keep protecting South Vietnam with no end date.',
    ],
    primaryEvidenceEmphasized:
      'Military records of the 1972 Easter Offensive and the Linebacker bombing, pacification statistics, the letters between Nixon and Thieu, and the record of the aid cuts in Congress.',
  },
  {
    id: 'post-revisionist-internationalist',
    name: 'Post-Revisionist school',
    era: '2000s to today',
    coreThesis:
      'Asking whether the war was winnable misses the point. Using archives opened in Vietnam, Russia, China and Eastern Europe, these historians show Hanoi, Saigon, Beijing and Moscow each pursuing their own goals and playing their big-power backers against each other. Washington, meanwhile, was boxed in by politics at home and by its promises abroad.',
    keyHistorians: ['Fredrik Logevall', 'Lien-Hang T. Nguyen', 'Pierre Asselin', 'Ken Hughes', 'Christian Lentz'],
    strengths: [
      'Uses records in many languages and countries, not just American government files.',
      'Shows the fierce power struggles inside Hanoi’s Politburo, such as Le Duan’s campaign against moderates allied with Giap.',
      'Gives South Vietnamese society, its religious groups and its military leaders their own voice.',
    ],
    blindSpotsOrCritiques: [
      'Its detailed picture rarely offers simple lessons for policy.',
      'Hanoi still keeps its top-level Politburo records closed, so the record is far thinner than the American one.',
    ],
    primaryEvidenceEmphasized:
      'Translated documents from the Wilson Center’s Cold War International History Project, Vietnamese Communist Party resolutions such as Resolutions 15 and 9, Soviet and Chinese diplomatic cables, and the White House tapes.',
  },
  {
    id: 'vietnamese-perspectives',
    name: 'Vietnamese voices',
    era: '1975 to today',
    coreThesis:
      'Puts the Vietnamese people at the center of their own war. It sets Hanoi’s official story, The Great Patriotic War of National Liberation, against writers in the refugee community and dissidents inside Vietnam, who record the huge loss of life, the repression at home and the way South Vietnam’s history was erased.',
    keyHistorians: ['Bao Ninh', 'Duong Thu Huong', 'Lam Quang Thi', 'Nathalie Huynh Chau Nguyen', 'Võ Phiến'],
    strengths: [
      'Breaks out of the American-centered story, where Vietnamese people appear only as scenery or statistics.',
      'Captures the grief, trauma and lasting cost of thirty years of war on both sides of the 17th parallel.',
      'Keeps alive the history of South Vietnam and of the refugees who fled after 1975.',
    ],
    blindSpotsOrCritiques: ['Often split sharply between Hanoi’s official version and the anti-communist memory of the refugee community.'],
    primaryEvidenceEmphasized:
      'Memoirs by Vietnamese veterans, such as Bao Ninh’s The Sorrow of War, oral histories of South Vietnamese veterans and boat people, accounts from re-education camps, and North Vietnamese provincial casualty records.',
  },
];
