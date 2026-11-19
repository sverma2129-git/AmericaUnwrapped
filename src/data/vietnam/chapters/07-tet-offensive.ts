import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'tet-offensive',
  number: 7,
  timeframe: '1968',
  leadImageId: 'hue-1968',
  galleryImageIds: ['embassy-saigon-1968', 'cronkite-hue-1968', 'lbj-march-31-1968'],
  title: 'The Tet Offensive',
  subtitle: 'Attacks on 100 cities, the battle for Hue, and the loss of trust at home',
  summary:
    'During the Lunar New Year of 1968, more than 84,000 communist troops attacked over 100 cities and bases across South Vietnam at once. U.S. and South Vietnamese forces beat back the attacks and badly weakened the Viet Cong in the South. But the offensive wrecked the Johnson administration’s claim that the war was going well. After Tet, Americans stopped arguing about how to win and started arguing about how to leave.',
  isLandmark: true,
  landmarkMoment: {
    bannerTitle: 'The Tet Offensive and the credibility gap',
    dateline: 'January 31, 1968',
    location: 'Saigon, Hue, Khe Sanh, and 100+ Urban Centers',
    quote:
      'To say that we are closer to victory today is to believe, in the face of the evidence, the optimists who have been wrong in the past. To suggest we are on the edge of defeat is to yield to unreasonable pessimism. To say that we are mired in stalemate seems the only realistic, yet unsatisfactory, conclusion.',
    quoteCitationId: 'Q014',
    quoteSpeaker: 'Walter Cronkite',
    quoteContext: 'CBS News Special Report: Who, What, When, Where, Why? (February 27, 1968)',
  },
  featuredDocument: {
    citationId: 'Q014',
    kind: 'Broadcast transcript',
    stamp: 'CBS News, Feb. 27, 1968',
    header: [['Program', 'CBS News Special Report'], ['Speaker', 'Walter Cronkite'], ['Aired', 'February 27, 1968']],
    note: 'Cronkite closed his report from Vietnam with these words. A month later, President Johnson announced he would not run again.',
  },
  whatHappened: {
    narrative: [
      'In late 1967, North Vietnamese forces surrounded the Marine base at Khe Sanh, near the DMZ. Washington feared it could become an American Dien Bien Phu, and Westmoreland’s attention stayed fixed on it. Khe Sanh was partly a diversion. In the early hours of January 30–31, 1968, during a holiday truce for Tet, the lunar new year, communist forces attacked 36 of 44 provincial capitals, five major cities and dozens of military bases across South Vietnam.[^c7-1]',
      'In Saigon, a 19-man Viet Cong commando unit blew a hole in the wall around the U.S. Embassy. All of the attackers were killed or captured within hours, but live television showed dead Americans on the embassy grounds. In Hue, two North Vietnamese army regiments seized the old walled Citadel. U.S. Marines and South Vietnamese troops spent 26 days retaking it room by room, and more than 80 percent of the city was destroyed. While they held Hue, communist officials executed between 2,800 and 3,000 people, including government workers, teachers, Catholics and foreigners.[^c7-3]',
      'As a battle, Tet was a failure for Hanoi. The mass uprising its leaders expected, the *Tong Khoi Nghia*, never happened. The Viet Cong lost more than 40,000 experienced fighters, and from then on, soldiers drafted in the North did most of the fighting.[^c7-1] But in the United States, Tet shook the public’s belief that the war was being won. On February 27, 1968, CBS anchor Walter Cronkite told viewers the war was “mired in stalemate.”[^Q014] When the military asked for 206,000 more troops, Johnson’s senior civilian advisers, known as the Wise Men, told him to scale back.[^c7-2] On March 31, 1968, Johnson announced a partial halt to the bombing and said he would not run for reelection.[^c7-2]'
    ],
    keyEvents: [
      { date: 'Jan 21, 1968', title: 'The siege of Khe Sanh begins', detail: 'Two North Vietnamese divisions surround 6,000 Marines for a 77-day artillery battle.' },
      { date: 'Jan 30–31, 1968', title: 'The Tet Offensive begins', detail: 'Attacks hit cities across the country at once. Commandos break into the U.S. Embassy grounds in Saigon.' },
      { date: 'Jan 31 – March 2', title: 'The Battle of Hue', detail: '26 days of street fighting retake Hue. Mass graves of executed civilians are found.' },
      { date: 'Feb 27, 1968', title: 'Walter Cronkite’s broadcast', detail: 'Cronkite gives his own view that the war is stuck in a stalemate, and many Americans agree.' },
      { date: 'March 16, 1968', title: 'The My Lai massacre', detail: 'U.S. soldiers murder more than 500 unarmed civilians in Son My village. It stays secret until late 1969.' },
      { date: 'March 31, 1968', title: 'Johnson drops out', detail: 'Johnson stops bombing north of the 20th parallel and quits the presidential race.' },
    ],
  },
  washington: {
    keyActors: ['Lyndon B. Johnson', 'Clark Clifford', 'Gen. William Westmoreland', 'Walter Cronkite', 'Sen. Eugene McCarthy'],
    strategicObjective:
      'Restore civilian security in the cities, defeat the offensive militarily, and reassure an electorate stunned by the sudden violence.',
    underlyingAssumptions: [
      'Because the allied counteroffensive inflicted overwhelming tactical casualties on the enemy, Tet should have been recognized as an allied victory.',
      'The press coverage distorted a tactical military victory into a psychological defeat.',
    ],
    internalDebates: [
      'Westmoreland and Gen. Wheeler requested 206,000 additional troops to exploit enemy exhaustion and strike sanctuaries in Laos and Cambodia.',
      'Defense Secretary Clark Clifford convened the “Wise Men” (senior statesmen like Dean Acheson), who advised LBJ that military victory was unattainable within domestic political limits.',
    ],
    homeFrontConstraints: [
      'The anti-war movement surged into mainstream electoral politics; Eugene McCarthy and Robert Kennedy challenged LBJ in primary elections.',
      'Assassination of Martin Luther King Jr. in April 1968 ignited urban riots across more than 100 American cities.',
    ],
    primaryDocumentRef: 'tet-politburo-directive',
  },
  hanoi: {
    keyActors: ['Le Duan', 'General Vo Nguyen Giap', 'General Van Tien Dung', 'Tran Van Tra'],
    strategicObjective:
      'Achieve a decisive breakthrough through the “General Offensive and General Uprising” to collapse the Saigon administration and compel U.S. withdrawal.',
    underlyingAssumptions: [
      'The South Vietnamese urban population despised the Thieu government and would rise up in armed revolution when the cities were struck.',
      'ARVN units would mutiny, disintegrate, or defect to the revolutionary side.',
    ],
    internalDebates: [
      'Le Duan had overruled Giap’s warnings regarding the risks of premature urban exposure, insisting that a historic breakthrough was attainable.',
      'Field commanders faced severe recriminations over unrealistic planning, catastrophic cadre losses, and the failure of the general uprising to occur.',
    ],
    homeFrontConstraints: [
      'Decimation of indigenous southern Viet Cong networks, forcing Hanoi to fill southern units almost entirely with northern conscripts for the remainder of the war.',
    ],
    primaryDocumentRef: 'tet-politburo-directive',
  },
  causalChain: {
    decision: {
      actor: 'Hanoi Leadership (Le Duan) / Johnson Administration',
      action: 'Hanoi launched the nationwide urban offensive during the holiday truce; Johnson halted escalation and opened preliminary peace talks.',
      date: 'January–March 1968',
    },
    assumption: {
      premise: 'Hanoi assumed the urban population would rise; Washington assumed its battlefield victory would restore public confidence.',
      blindSpot: 'The southern population sought shelter rather than rising in revolt; the American public recognized that official claims of imminent victory were false.',
    },
    result: {
      immediate: 'Catastrophic losses for the Viet Cong; political collapse of Johnson’s presidency and the end of open-ended escalation.',
      counterAction: 'Richard Nixon won the 1968 presidential election promising “peace with honor” and troop withdrawals.',
    },
    unintendedConsequence:
      'The war’s decisive center of gravity shifted irreversibly to American domestic politics and the timeline of troop withdrawal.',
    nextDecision:
      'How would the newly elected Nixon administration extract half a million troops from Vietnam without appearing to abandon its ally?',
  },
  interactiveModule: {
    id: 'tet-offensive-map',
    type: 'tet-offensive-map',
    title: 'Tet 1968 on the map',
    prompt:
      'See where the attacks hit: Saigon, Hue, Da Nang and Khe Sanh. Then compare what Hanoi planned, what happened, and how Washington reacted.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['tet-politburo-directive']],
  nextQuestion: {
    question: 'What did “Vietnamization” mean in practice?',
    framing:
      'Richard Nixon promised to bring American troops home while training South Vietnam’s army to defend itself. Was that a real plan for South Vietnam to stand alone, or a way to buy time for an American exit?',
  },
  citations: [
    CITATION_REGISTRY['c7-1'],
    CITATION_REGISTRY['c7-2'],
    CITATION_REGISTRY['c7-3'],
  ],
};

export default chapter;
