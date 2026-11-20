import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'nixon-and-vietnamization',
  number: 8,
  timeframe: '1969–1972',
  leadImageId: 'nixon-cambodia-1970',
  galleryImageIds: ['moratorium-vigil-1969', 'midway-1969', 'huey-handover-1970'],
  title: 'Nixon and Vietnamization',
  subtitle: 'Nixon brought American troops home over four years. Meanwhile he widened the war into Cambodia and Laos.',
  summary:
    'Richard Nixon won the presidency promising peace with honor. His plan, called Vietnamization, cut U.S. ground troops from 543,000 to under 25,000. South Vietnam’s army, the ARVN, took over the fighting. To cover the pullout, Nixon widened the war. He secretly bombed Cambodia, sent troops across the border, and opened talks with Moscow and Beijing. Two big battles, Lam Son 719 in Laos and the 1972 Easter Offensive, showed the same thing. The ARVN could not hold on the ground without U.S. air power.',
  whatHappened: {
    narrative: [
      'When Richard Nixon took office in 1969, Americans wanted the casualties to stop. Under the Nixon Doctrine and a policy called Vietnamization, he began bringing American ground troops home. Their number fell from a peak of 543,000 in 1969 to 24,000 by late 1972.[^c8-1] Historians still argue about what Nixon was really after. Revisionist scholars say General Creighton Abrams’ One War plan to secure the countryside was actually working.[^c8-2] Critics say Nixon and Henry Kissinger mainly wanted a decent interval: enough time between the American exit and South Vietnam’s fall that the fall would not look like an American defeat.[^c8-1]',
      'To hit communist supply bases across the border, Nixon started Operation Menu in March 1969. B-52s secretly carpet-bombed neutral Cambodia, and the raids were hidden from Congress with a second set of records. In April 1970, American and South Vietnamese troops openly invaded Cambodia. Protests broke out on campuses across the country. On May 4, Ohio National Guardsmen shot and killed four students at Kent State University, and ten days later students were shot and killed at Jackson State. Congress answered with the Cooper-Church Amendment, which banned U.S. ground troops and advisers from Cambodia and Laos. It was the first time Congress had limited where troops could go during a war against a president’s wishes.[^c8-1]',
      'In February 1971, Operation Lam Son 719 put Vietnamization to the test. Three South Vietnamese divisions crossed into Laos along Route 9 to cut the Ho Chi Minh Trail, with no American ground troops or advisers going along. North Vietnam struck back with masses of tanks and heavy artillery. The South Vietnamese pullback became a panicked retreat, with soldiers clinging to the skids of helicopters.[^c8-3] Washington said the raid slowed supplies from the North for a year. But it showed how exposed South Vietnam’s army was without American troops beside it. In March 1972, Hanoi launched the Easter Offensive, a full-scale invasion with hundreds of Soviet-supplied tanks. South Vietnamese forces held key cities like An Loc and Quang Tri only because of massive American bombing in Operation Linebacker I and the mining of Haiphong harbor. The South’s army could hold with American airpower. Without it, it could not.'
    ],
    sections: [
      { date: '1969', heading: 'Bringing the troops home' },
      { date: '1969–1970', heading: 'Cambodia, Kent State and Congress' },
      { date: '1971–1972', heading: 'Vietnamization is tested' },
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
      'Bring American troops home, reach peace with honor and use new ties with China and the Soviet Union to protect South Vietnam.',
    underlyingAssumptions: [
      'Historians disagree about whether Nixon and Kissinger thought South Vietnam’s army could survive alone, or only wanted a decent interval before it fell.',
      'Nixon’s 1972 visit to Beijing and his deals with Moscow would lead both to press Hanoi toward a compromise.',
    ],
    internalDebates: [
      'Defense Secretary Melvin Laird wanted fast troop withdrawals to calm the country and protect the army’s morale.',
      'Nixon and Kissinger preferred heavy bombing to keep the upper hand in the secret talks in Paris.',
    ],
    homeFrontConstraints: [
      'Epidemic disciplinary and morale issues among remaining U.S. troops: drug abuse, combat refusals, racial tensions, and fragging.',
      'Publication of the Pentagon Papers by Daniel Ellsberg in June 1971, exposing decades of government deception regarding the war.',
    ],
    primaryDocumentRef: 'mccarthy-hanoi-1968',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Le Duc Tho', 'General Vo Nguyen Giap', 'Pham Van Dong'],
    strategicObjective:
      'Survive the bombing, test South Vietnam’s army in big battles and keep North Vietnamese troops in the South.',
    underlyingAssumptions: [
      'Once American ground troops left, opposition at home would stop Washington from coming back.',
      'Over time, the military balance in the South would swing Hanoi’s way.',
    ],
    internalDebates: [
      'North Vietnamese leaders were furious that Soviet and Chinese leaders hosted Nixon in 1972 while American bombs were falling on the North.',
      'They argued over whether to launch a big tank offensive, which became the Easter Offensive, or save their forces for a longer war.',
    ],
    homeFrontConstraints: [
      'Severe logistical bottlenecks caused by the mining of Haiphong Harbor and destruction of northern transport networks under Linebacker I.',
    ],
    primaryDocumentRef: 'cia-memo-giap-thanh-1966',
  },
  causalChain: {
    decision: {
      actor: 'Richard Nixon; Hanoi’s Politburo',
      action: 'Nixon pulled out ground troops but bombed more heavily, including in Cambodia and Laos. In 1972 Hanoi invaded the South with tanks in the Easter Offensive.',
      date: '1969–1972',
    },
    assumption: {
      premise: 'Washington believed South Vietnam’s army could hold with American air support. Hanoi believed that army would break under a full tank assault.',
      blindSpot: 'South Vietnam came to depend on American air power it could not replace. Hanoi’s invasion lost huge numbers of men to B-52 strikes.',
    },
    result: {
      immediate: 'American deaths and draft calls fell while South Vietnamese losses rose. Both sides saw that the South could hold only with American planes overhead.',
      counterAction: 'In October 1972, Henry Kissinger and Le Duc Tho reached a secret deal in Paris.',
    },
    unintendedConsequence:
      'The secret bombing and the 1970 invasion destabilized Cambodia and helped the Khmer Rouge rise to power.',
    nextDecision:
      'What did each side give up to make a deal, and why did Thieu refuse to sign it?',
  },
  interactiveModule: {
    id: 'vietnamization-tracker',
    type: 'vietnamization-tracker',
    title: 'Could South Vietnam fight alone?',
    prompt:
      'Follow U.S. troop numbers, South Vietnamese combat deaths and American bombing from 1968 to 1972. Then weigh the argument over the decent interval.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['mccarthy-hanoi-1968']],
  nextQuestion: {
    question: 'Did the Paris Peace Accords end the war?',
    framing:
      'In late 1972 Henry Kissinger announced that peace was near. South Vietnam’s President Thieu read the draft and called it a death sentence for his country.',
  },
  citations: [
    CITATION_REGISTRY['c8-1'],
    CITATION_REGISTRY['c8-2'],
    CITATION_REGISTRY['c8-3'],
  ],
};

export default chapter;
