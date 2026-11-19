import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'americanization-attrition',
  number: 5,
  timeframe: '1965–1967',
  leadImageId: 'da-nang-1965',
  galleryImageIds: ['rolling-thunder-1966', 'lbj-cam-ranh-1966', 'ia-drang-1965', 'pentagon-flower-1967'],
  title: 'America takes over the war',
  subtitle: 'Rolling Thunder, the search for a “crossover point,” and the power struggle in Hanoi',
  summary:
    'In early 1965, Lyndon Johnson made Vietnam an American war. He launched the bombing campaign Operation Rolling Thunder, and by late 1967 more than 485,000 U.S. troops were in Vietnam. General William Westmoreland fought a war of attrition, trying to reach a “crossover point.” In Hanoi, First Secretary Le Duan took control from more cautious leaders. He pushed for big offensives and prepared the North to live through heavy bombing.',
  whatHappened: {
    narrative: [
      'In February 1965, the Viet Cong attacked the U.S. base at Pleiku. President Johnson answered with Operation Rolling Thunder, a long bombing campaign against North Vietnam. The idea was called graduated pressure: raise the bombing step by step until Hanoi agreed to talk, without pulling China or the Soviet Union into the war. On March 8, 1965, two battalions of Marines landed at Da Nang. They were the first U.S. ground combat troops in Vietnam, and the American role changed from advising to fighting.[^c5-3]',
      'General William Westmoreland’s plan was attrition: kill enemy soldiers faster than they could be replaced. His troops went on search-and-destroy missions backed by heavy firepower, and progress was measured in body counts.[^c5-2] In November 1965, the 1st Cavalry Division fought North Vietnamese army regiments in the Ia Drang Valley. The Americans killed more than ten enemy soldiers for every one they lost. Westmoreland took this as proof that he could reach the crossover point, when the enemy would lose men faster than it could replace them. But the communist side started about 75 to 80 percent of the firefights. That let them choose when to fight and when to slip back across the border to safety. About 200,000 young men came of draft age in North Vietnam every year, more than enough to replace the losses. In 1967, the U.S. command in Saigon quietly stopped publishing its estimates of how many enemy troops were coming south.[^c5-1]',
      'In Hanoi, a power struggle was going on that Washington barely saw. By the mid-1960s, Ho Chi Minh’s role was mostly ceremonial, and First Secretary Le Duan made the big decisions.[^c5-1] General Vo Nguyen Giap and others wanted a slow guerrilla war. Le Duan wanted big offensives, and he won by arresting hundreds of moderates in what became known as the Anti-Party Affair. At home, all of North Vietnam was organized for war. Concrete one-person shelters lined Hanoi’s sidewalks, and city people were moved to the countryside. More than 230,000 Youth Volunteers, over half of them women, kept the Ho Chi Minh Trail open under constant bombing.[^c5-1]'
    ],
    keyEvents: [
      { date: 'March 2, 1965', title: 'Rolling Thunder begins', detail: 'A three-year bombing campaign against North Vietnam starts.' },
      { date: 'March 8, 1965', title: 'Marines land at Da Nang', detail: '3,500 Marines arrive, the first American ground combat troops.' },
      { date: 'July 28, 1965', title: 'Johnson sends 125,000 troops', detail: 'Johnson commits 125,000 troops and doubles the monthly draft, without declaring a national emergency.' },
      { date: 'Nov 14–18, 1965', title: 'The Battle of the Ia Drang Valley', detail: 'The first big clash between U.S. helicopter troops and North Vietnamese regulars, at landing zones X-Ray and Albany.' },
      { date: '1967', title: 'The purge in Hanoi', detail: 'Le Duan tightens his grip on power and arrests hundreds of party moderates who doubted a fast escalation.' },
      { date: 'Nov 21, 1967', title: 'Westmoreland says the end is in sight', detail: 'The U.S. commander tells Americans the enemy is running out of men.' },
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
      'Budgetary strain: funding both the “Great Society” and the war without raising taxes ignited severe domestic inflation.',
    ],
    primaryDocumentRef: 'cia-memo-giap-thanh-1966',
  },
  hanoi: {
    keyActors: ['Le Duan', 'General Vo Nguyen Giap', 'Nguyen Chi Thanh', 'Ho Chi Minh'],
    strategicObjective:
      'Wage protracted revolutionary warfare, absorb American aerial bombardment, maintain infiltration lines, and erode American political endurance.',
    underlyingAssumptions: [
      'The democratic American home front would not tolerate an open-ended, high-casualty war for an ambiguous objective.',
      'Communist forces could neutralize American firepower by “grabbing the enemy by the belt”: fighting at close quarters to prevent air and artillery strikes.',
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
      'The administration’s public “progress campaign” created a profound credibility gap that primed the American public for shock when the enemy struck nationwide.',
    nextDecision:
      'How would the American public and political leadership react when communist forces attacked every major city in South Vietnam simultaneously?',
  },
  interactiveModule: {
    id: 'attrition-model',
    type: 'attrition-model',
    title: 'The crossover point',
    prompt:
      'Compare the enemy deaths the U.S. command reported with how many soldiers North Vietnam could add each year, and with who started most firefights.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['cia-memo-giap-thanh-1966'], PRIMARY_DOCUMENTS['mccarthy-hanoi-1968']],
  nextQuestion: {
    question: 'What was the secret war behind the front lines?',
    framing:
      'While big units fought in the highlands, the Phoenix Program and Operation Ranch Hand went after the people and the land that supported the Viet Cong. How did they work?',
  },
  citations: [
    CITATION_REGISTRY['c5-1'],
    CITATION_REGISTRY['c5-2'],
    CITATION_REGISTRY['c5-3'],
  ],
};

export default chapter;
