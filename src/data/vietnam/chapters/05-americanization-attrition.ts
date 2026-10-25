import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'americanization-attrition',
  number: 5,
  timeframe: '1965–1967',
  title: 'Americanization, Attrition, & Hanoi’s Inner War',
  subtitle: 'Rolling Thunder, the crossover point fallacy, and the leadership struggle in Hanoi',
  summary:
    'In early 1965, Lyndon Johnson transformed Vietnam into an American war, launching Operation Rolling Thunder and deploying over 485,000 U.S. combat troops by late 1967. General William Westmoreland pursued an attrition strategy seeking a "crossover point," while in Hanoi, First Secretary Le Duan consolidated control over more cautious party leaders, pursuing large-unit offensive warfare and mobilizing the northern home front to absorb unprecedented aerial firepower.',
  whatHappened: {
    narrative: [
      'Following a Viet Cong attack on the U.S. base at Pleiku in February 1965, President Johnson ordered sustained aerial bombardment of North Vietnam under Operation Rolling Thunder. Built on a doctrine of "graduated pressure," the campaign incrementally escalated bombing to convince Hanoi to negotiate while carefully avoiding Chinese or Soviet intervention. On March 8, 1965, the first U.S. ground combat troops—two Marine battalions—landed at Da Nang, shifting the American presence from an advisory mission to direct combat.[^c5-3]',
      'General William Westmoreland implemented a strategy of attrition based on search-and-destroy sweeps and overwhelming firepower, measuring progress via enemy body counts.[^c5-2] In November 1965, the Battle of the Ia Drang Valley pitted the 1st Cavalry Division (Airmobile) against regular PAVN regiments; a better than 10-to-1 kill ratio convinced Westmoreland that his attrition doctrine could achieve a "crossover point"—the moment enemy losses would exceed replacement capacity. In reality, communist forces initiated roughly 75 to 80 percent of all firefights, allowing them to control engagement tempo and break contact into cross-border sanctuaries. With an estimated 200,000 young men reaching draft age annually in North Vietnam, replacement capacity outpaced attrition, leading MACV to quietly cease publishing infiltration estimates in 1967.[^c5-1]',
      'In Hanoi, a parallel power struggle unfolded that remained largely opaque to Washington. By the mid-1960s, Ho Chi Minh had assumed an increasingly ceremonial role, while First Secretary Le Duan directed strategy.[^c5-1] When General Vo Nguyen Giap and other "North-firsters" advocated for cautious, protracted guerrilla warfare, Le Duan consolidated his aggressive large-unit offensive doctrine by arresting hundreds of moderates in the "Anti-Party Affair." On the northern home front, society mobilized completely: thousands of individual concrete cylinder shelters lined Hanoi sidewalks, urban populations were evacuated to rural areas, and over 230,000 Youth Volunteers (more than half women) kept the Ho Chi Minh Trail open under relentless bombing.[^c5-1]',
    ],
    keyEvents: [
      { date: 'March 2, 1965', title: 'Operation Rolling Thunder Begins', detail: 'Three-year aerial bombardment of North Vietnam commences.' },
      { date: 'March 8, 1965', title: 'U.S. Marines Land at Da Nang', detail: '3,500 Marines arrive; marks the arrival of direct American ground combat forces.' },
      { date: 'July 28, 1965', title: 'Troop Increases Announced', detail: 'LBJ commits 125,000 troops and doubles monthly draft calls without declaring a national emergency.' },
      { date: 'Nov 14–18, 1965', title: 'Battle of the Ia Drang Valley', detail: 'First major clash between U.S. airmobile forces and PAVN regulars at LZ X-Ray and Albany.' },
      { date: '1967', title: 'The Anti-Party Affair in Hanoi', detail: 'Le Duan consolidates power, arresting hundreds of party moderates who questioned rapid escalation.' },
      { date: 'Nov 21, 1967', title: 'Westmoreland "Light at the End of the Tunnel"', detail: 'MACV commander assures the American public that the enemy is running out of men.' },
    ],
  },
  washington: {
    keyActors: ['Lyndon B. Johnson', 'Robert S. McNamara', 'Gen. William Westmoreland', 'Gen. Earle Wheeler'],
    strategicObjective:
      'Inflict casualties on communist forces at a rate exceeding their replacement capacity, forcing Hanoi to abandon the southern insurgency without pulling in China or the USSR.',
    underlyingAssumptions: [
      'Modern technological firepower, air mobility, and body-count metrics were reliable indicators of military success against an agrarian society.',
      'North Vietnam possessed a finite breaking point where human losses would compel a negotiated settlement.',
    ],
    internalDebates: [
      'Undersecretary of State George Ball warned in 1965 that once committed to ground combat, the U.S. would become trapped in an intractable conflict.',
      'By mid-1967, Robert McNamara privately concluded that Rolling Thunder was ineffective and that attrition could not succeed at acceptable cost.',
    ],
    homeFrontConstraints: [
      'Rising anti-war sentiment, draft card burnings, and the March on the Pentagon in October 1967.',
      'Budgetary strain: funding both the "Great Society" and the war without raising taxes ignited severe domestic inflation.',
    ],
    primaryDocumentRef: 'cia-memo-giap-thanh-1966',
  },
  hanoi: {
    keyActors: ['Le Duan', 'General Vo Nguyen Giap', 'Nguyen Chi Thanh', 'Ho Chi Minh'],
    strategicObjective:
      'Wage protracted revolutionary warfare, absorb American aerial bombardment, maintain infiltration lines, and erode American political endurance.',
    underlyingAssumptions: [
      'The democratic American home front would not tolerate an open-ended, high-casualty war for an ambiguous objective.',
      'Communist forces could neutralize American firepower by "grabbing the enemy by the belt"—engaging at close quarters to prevent air and artillery strikes.',
    ],
    internalDebates: [
      'The Giap–Nguyen Chi Thanh debate: Thanh favored large-unit conventional clashes to challenge U.S. forces directly; Giap favored guerrilla conservation of forces to minimize casualties.',
      'Le Duan’s faction overrode moderates, arresting dissenting officers and preparing for a decisive nationwide offensive.',
    ],
    homeFrontConstraints: [
      'Surviving Operation Rolling Thunder: dispersing factories and hospitals into caves and rural areas, and enduring severe civilian rationing.',
    ],
    primaryDocumentRef: 'mccarthy-hanoi-1968',
  },
  causalChain: {
    decision: {
      actor: 'Johnson Administration & Westmoreland / Le Duan',
      action: 'The U.S. committed nearly half a million troops to a war of attrition, while Le Duan mobilized North Vietnam for a massive decisive offensive.',
      date: '1965–1967',
    },
    assumption: {
      premise: 'Washington believed the enemy’s manpower would be exhausted; Hanoi believed a nationwide urban offensive would trigger a spontaneous civilian uprising.',
      blindSpot: 'Washington measured progress with body counts while the enemy controlled engagement tempo; Hanoi overestimated southern civilian willingness to rise in armed revolt.',
    },
    result: {
      immediate: 'Tremendous tactical devastation, but North Vietnamese infiltration continued and the Ho Chi Minh Trail remained operational.',
      counterAction: 'Hanoi finalized plans for the synchronized nationwide urban attacks of the Tet Offensive in early 1968.',
    },
    unintendedConsequence:
      'The administration’s public "progress campaign" created a profound credibility gap that primed the American public for shock when the enemy struck nationwide.',
    nextDecision:
      'How would the American public and political leadership react when communist forces attacked every major city in South Vietnam simultaneously?',
  },
  interactiveModule: {
    id: 'attrition-model',
    type: 'attrition-model',
    title: 'The Crossover Point: The Arithmetic of a Fallacy',
    prompt:
      'Compare MACV’s reported enemy body count against North Vietnam’s actual birth cohorts, recruitment rates, and battlefield tactical initiation ratios.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['cia-memo-giap-thanh-1966'], PRIMARY_DOCUMENTS['mccarthy-hanoi-1968']],
  nextQuestion: {
    question: 'How did unconventional and secret programs operate behind the conventional frontlines?',
    framing:
      'While conventional divisions clashed in the highlands, how did the Phoenix Program and Operation Ranch Hand target the civilian organizing infrastructure and rural ecosystem of South Vietnam?',
  },
  citations: [
    CITATION_REGISTRY['c5-1'],
    CITATION_REGISTRY['c5-2'],
    CITATION_REGISTRY['c5-3'],
  ],
};

export default chapter;
