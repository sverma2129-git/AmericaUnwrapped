import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'nixon-and-vietnamization',
  number: 8,
  timeframe: '1969–1972',
  leadImageId: 'nixon-cambodia-1970',
  galleryImageIds: ['moratorium-vigil-1969'],
  title: 'Nixon and Vietnamization',
  subtitle: 'Troops come home while the war spreads to Cambodia and Laos',
  summary:
    'Richard Nixon won the presidency promising “peace with honor.” His plan, called Vietnamization, cut U.S. ground troops from 543,000 to under 25,000. South Vietnam’s army, the ARVN, took over the fighting. To cover the pullout, Nixon widened the war. He secretly bombed Cambodia, sent troops across the border, and opened talks with Moscow and Beijing. Two big battles, Lam Son 719 in Laos and the 1972 Easter Offensive, showed the same thing. The ARVN could not hold on the ground without U.S. air power.',
  whatHappened: {
    narrative: [
      'When Richard Nixon took office in 1969, Americans wanted the casualties to stop. Under the Nixon Doctrine and a policy called Vietnamization, he began bringing American ground troops home. Their number fell from a peak of 543,000 in 1969 to 24,000 by late 1972.[^c8-1] Historians still argue about what Nixon was really after. Revisionist scholars say General Creighton Abrams’ One War plan to secure the countryside was actually working.[^c8-2] Critics say Nixon and Henry Kissinger mainly wanted a decent interval: enough time between the American exit and South Vietnam’s fall that the fall would not look like an American defeat.[^c8-1]',
      'To hit communist supply bases across the border, Nixon started Operation Menu in March 1969. B-52s secretly carpet-bombed neutral Cambodia, and the raids were hidden from Congress with a second set of records. In April 1970, American and South Vietnamese troops openly invaded Cambodia. Protests broke out on campuses across the country. On May 4, Ohio National Guardsmen shot and killed four students at Kent State University, and ten days later students were shot and killed at Jackson State. Congress answered with the Cooper-Church Amendment, which banned U.S. ground troops and advisers from Cambodia and Laos. It was the first time Congress had limited where troops could go during a war against a president’s wishes.[^c8-1]',
      'In February 1971, Operation Lam Son 719 put Vietnamization to the test. Three South Vietnamese divisions crossed into Laos along Route 9 to cut the Ho Chi Minh Trail, with no American ground troops or advisers going along. North Vietnam struck back with masses of tanks and heavy artillery. The South Vietnamese pullback became a panicked retreat, with soldiers clinging to the skids of helicopters.[^c8-3] Washington said the raid slowed supplies from the North for a year. But it showed how exposed South Vietnam’s army was without American troops beside it. In March 1972, Hanoi launched the Easter Offensive, a full-scale invasion with hundreds of Soviet-supplied tanks. South Vietnamese forces held key cities like An Loc and Quang Tri only because of massive American bombing in Operation Linebacker I and the mining of Haiphong harbor. The South’s army could hold with American airpower. Without it, it could not.'
    ],
    keyEvents: [
      { date: 'March 1969', title: 'Operation Menu begins', detail: 'Secret B-52 bombing in Cambodia, hidden with false flight records.' },
      { date: 'June 1969', title: 'The first troops come home', detail: 'Meeting Thieu on Midway Island, Nixon announces the withdrawal of 25,000 U.S. troops.' },
      { date: 'April 30, 1970', title: 'Troops enter Cambodia', detail: 'U.S. and ARVN ground forces cross into Cambodia to destroy communist bases.' },
      { date: 'May 4, 1970', title: 'The Kent State shootings', detail: 'Ohio National Guardsmen kill four student protesters. Hundreds of colleges close.' },
      { date: 'Feb–March 1971', title: 'Lam Son 719 in Laos', detail: 'North Vietnamese tanks rout the ARVN’s push into Laos, showing the limits of Vietnamization.' },
      { date: 'March–Oct 1972', title: 'The Easter Offensive and Linebacker I', detail: 'A huge North Vietnamese invasion is beaten back by the ARVN with heavy U.S. air support.' },
    ],
  },
  washington: {
    keyActors: ['Richard M. Nixon', 'Henry Kissinger', 'Melvin Laird', 'Gen. Creighton Abrams', 'President Nguyen Van Thieu'],
    strategicObjective:
      'Withdraw U.S. combat forces, achieve “peace with honor,” and secure a sustainable position for South Vietnam through triangular diplomacy with China and the USSR.',
    underlyingAssumptions: [
      'Contested: Whether Nixon and Kissinger believed the ARVN could survive independently, or sought a “decent interval” to insulate American credibility from an eventual Saigon collapse.',
      'Triangular diplomacy (the 1972 opening to Beijing and détente with Moscow) would induce Hanoi’s superpower patrons to pressure North Vietnam toward compromise.',
    ],
    internalDebates: [
      'Defense Secretary Laird prioritized rapid troop withdrawals to ease domestic unrest and protect military morale.',
      'Nixon and Kissinger favored aggressive bombing escalations to preserve diplomatic leverage at the secret Paris negotiating table.',
    ],
    homeFrontConstraints: [
      'Epidemic disciplinary and morale issues among remaining U.S. troops: drug abuse, combat refusals, racial tensions, and “fragging.”',
      'Publication of the Pentagon Papers by Daniel Ellsberg in June 1971, exposing decades of government deception regarding the war.',
    ],
    primaryDocumentRef: 'mccarthy-hanoi-1968',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Le Duc Tho', 'General Vo Nguyen Giap', 'Pham Van Dong'],
    strategicObjective:
      'Withstand American aerial strikes, test the conventional capacity of the ARVN, and ensure North Vietnamese troops remained stationed in the South.',
    underlyingAssumptions: [
      'Once American ground combat forces departed, domestic political opposition would prevent Washington from re-intervening.',
      'The balance of military forces in South Vietnam would shift irreversibly in Hanoi’s favor over time.',
    ],
    internalDebates: [
      'Outrage over Soviet and Chinese leaders hosting Nixon in Moscow and Beijing in 1972 while American bombs struck North Vietnam.',
      'Tactical debates over whether to mount large-scale conventional armored operations (Easter Offensive) or husband forces for a longer struggle.',
    ],
    homeFrontConstraints: [
      'Severe logistical bottlenecks caused by the mining of Haiphong Harbor and destruction of northern transport networks under Linebacker I.',
    ],
    primaryDocumentRef: 'cia-memo-giap-thanh-1966',
  },
  causalChain: {
    decision: {
      actor: 'Nixon Administration / Hanoi Politburo',
      action: 'Nixon withdrew U.S. ground forces while escalating aerial bombardment into Cambodia and Laos; Hanoi launched the conventional 1972 Easter Offensive.',
      date: '1969–1972',
    },
    assumption: {
      premise: 'Washington believed ARVN could hold with air support; Hanoi believed the ARVN would collapse under conventional armored assault.',
      blindSpot: 'Washington’s strategy left South Vietnam addicted to external airpower it could not generate; Hanoi’s conventional blitzkrieg suffered massive casualties under U.S. B-52 strikes.',
    },
    result: {
      immediate: 'U.S. casualties declined and draft calls fell, but ARVN casualties rose sharply; both sides recognized ARVN could hold only with U.S. air support.',
      counterAction: 'In October 1972, Henry Kissinger and Le Duc Tho achieved a major secret breakthrough in Paris.',
    },
    unintendedConsequence:
      'The secret expansion of the war into Cambodia destabilized the country, setting in motion the rise of the Khmer Rouge.',
    nextDecision:
      'What mutual concessions would unlock the Paris peace talks, and why did South Vietnamese President Thieu adamantly refuse to sign?',
  },
  interactiveModule: {
    id: 'vietnamization-tracker',
    type: 'vietnamization-tracker',
    title: 'Could South Vietnam fight alone?',
    prompt:
      'Follow three lines from 1968 to 1972: U.S. troop numbers falling, South Vietnamese combat deaths rising, and bombing increasing. Then look at the argument over the “decent interval.”',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['mccarthy-hanoi-1968']],
  nextQuestion: {
    question: 'Did the 1973 Paris Peace Accords end the war, or only America’s part in it?',
    framing:
      'In late 1972, Henry Kissinger announced that “peace is at hand.” What did the agreement say about North Vietnamese troops inside South Vietnam, and why did President Thieu call it a death sentence?',
  },
  citations: [
    CITATION_REGISTRY['c8-1'],
    CITATION_REGISTRY['c8-2'],
    CITATION_REGISTRY['c8-3'],
  ],
};

export default chapter;
