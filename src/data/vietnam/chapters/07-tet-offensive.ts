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
  subtitle: 'In January 1968, communist forces attacked more than 100 cities and towns across South Vietnam at once. Americans watched the fighting on the evening news.',
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
    sections: [
      { date: 'Late 1967 – January 1968', heading: 'Khe Sanh, and then the cities' },
      { date: 'January–February 1968', heading: 'The embassy and Hue' },
      { date: 'February–March 1968', heading: 'Losing the argument at home' },
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
      'Make the cities safe again, defeat the offensive and calm voters shocked by the violence.',
    underlyingAssumptions: [
      'The enemy had suffered huge losses, so Americans should see Tet as a win.',
      'News coverage had turned a battlefield win into a defeat in people’s minds.',
    ],
    internalDebates: [
      'Westmoreland and General Earle Wheeler asked for 206,000 more troops to strike while the enemy was weak, including bases in Laos and Cambodia.',
      'Defense Secretary Clark Clifford called together the Wise Men, senior statesmen such as Dean Acheson. They told Johnson that Americans would not support what victory would take.',
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
      'Break Saigon’s government with a general offensive and uprising, and force the United States out.',
    underlyingAssumptions: [
      'People in South Vietnam’s cities hated Thieu’s government and would rise up once the attacks began.',
      'South Vietnamese army units would mutiny, fall apart or switch sides.',
    ],
    internalDebates: [
      'Le Duan overruled Giap, who had warned that attacking the cities would expose their forces.',
      'Afterward, field commanders were blamed for the unrealistic plan, the heavy losses and the uprising that never came.',
    ],
    homeFrontConstraints: [
      'Decimation of indigenous southern Viet Cong networks, forcing Hanoi to fill southern units almost entirely with northern conscripts for the remainder of the war.',
    ],
    primaryDocumentRef: 'tet-politburo-directive',
  },
  causalChain: {
    decision: {
      actor: 'Le Duan in Hanoi; Lyndon Johnson',
      action: 'Hanoi attacked the cities during the Tet holiday truce. Afterward, Johnson stopped sending more troops and opened peace talks.',
      date: 'January–March 1968',
    },
    assumption: {
      premise: 'Hanoi expected the people of the cities to rise up. Washington expected its battlefield win to restore Americans’ faith in the war.',
      blindSpot: 'City people in the South hid instead of joining a revolt. Americans decided their leaders had misled them about how close victory was.',
    },
    result: {
      immediate: 'The Viet Cong lost more than 40,000 fighters. Johnson’s presidency fell apart, and American escalation stopped.',
      counterAction: 'Richard Nixon won the 1968 election promising peace with honor and troop withdrawals.',
    },
    unintendedConsequence:
      'From then on, the war’s outcome depended less on battles in Vietnam than on politics in the United States.',
    nextDecision:
      'How would Nixon bring half a million troops home without seeming to abandon South Vietnam?',
  },
  interactiveModule: {
    id: 'tet-offensive-map',
    type: 'tet-offensive-map',
    title: 'Tet 1968 on the map',
    prompt:
      'Find where the attacks hit, from Saigon to Hue to Khe Sanh. Then compare Hanoi’s plan with what happened and with Washington’s response.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['tet-politburo-directive']],
  nextQuestion: {
    question: 'What did Vietnamization mean in practice?',
    framing:
      'Richard Nixon promised to bring American troops home and hand the fighting to South Vietnam’s army. Historians still argue over whether he expected that army to survive.',
  },
  citations: [
    CITATION_REGISTRY['c7-1'],
    CITATION_REGISTRY['c7-2'],
    CITATION_REGISTRY['c7-3'],
  ],
};

export default chapter;
