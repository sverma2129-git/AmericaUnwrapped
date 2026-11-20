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
  subtitle: 'In 1965 Lyndon Johnson sent combat troops and started bombing the North. By the end of 1967, about 485,000 Americans were in Vietnam.',
  summary:
    'In early 1965, Lyndon Johnson made Vietnam an American war. He launched the bombing campaign Operation Rolling Thunder, and by late 1967 more than 485,000 U.S. troops were in Vietnam. General William Westmoreland fought a war of attrition, trying to reach a crossover point. In Hanoi, First Secretary Le Duan took control from more cautious leaders. He pushed for big offensives and prepared the North to live through heavy bombing.',
  whatHappened: {
    narrative: [
      'In February 1965, the Viet Cong attacked the U.S. base at Pleiku. President Johnson answered with Operation Rolling Thunder, a long bombing campaign against North Vietnam. The idea was called graduated pressure: raise the bombing step by step until Hanoi agreed to talk, without pulling China or the Soviet Union into the war. On March 8, 1965, two battalions of Marines landed at Da Nang. They were the first U.S. ground combat troops in Vietnam, and the American role changed from advising to fighting.[^c5-3]',
      'General William Westmoreland’s plan was attrition: kill enemy soldiers faster than they could be replaced. His troops went on search-and-destroy missions backed by heavy firepower, and progress was measured in body counts.[^c5-2] In November 1965, the 1st Cavalry Division fought North Vietnamese army regiments in the Ia Drang Valley. The Americans killed more than ten enemy soldiers for every one they lost. Westmoreland took this as proof that he could reach the crossover point, when the enemy would lose men faster than it could replace them. But the communist side started about 75 to 80 percent of the firefights. That let them choose when to fight and when to slip back across the border to safety. About 200,000 young men came of draft age in North Vietnam every year, more than enough to replace the losses. In 1967, the U.S. command in Saigon quietly stopped publishing its estimates of how many enemy troops were coming south.[^c5-1]',
      'In Hanoi, a power struggle was going on that Washington barely saw. By the mid-1960s, Ho Chi Minh’s role was mostly ceremonial, and First Secretary Le Duan made the big decisions.[^c5-1] General Vo Nguyen Giap and others wanted a slow guerrilla war. Le Duan wanted big offensives, and he won by arresting hundreds of moderates in what became known as the Anti-Party Affair. At home, all of North Vietnam was organized for war. Concrete one-person shelters lined Hanoi’s sidewalks, and city people were moved to the countryside. More than 230,000 Youth Volunteers, over half of them women, kept the Ho Chi Minh Trail open under constant bombing.[^c5-1]'
    ],
    sections: [
      { date: 'February–March 1965', heading: 'Johnson sends in the Marines' },
      { date: '1965–1967', heading: 'Counting bodies' },
      { date: '1965–1967', heading: 'Meanwhile, in Hanoi' },
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
      'Kill communist soldiers faster than Hanoi could replace them, so it would give up the war in the South, without drawing in China or the Soviet Union.',
    underlyingAssumptions: [
      'Firepower, helicopters and body counts could show whether America was winning against a country of farmers.',
      'North Vietnam had a breaking point, and enough losses would push it to negotiate.',
    ],
    internalDebates: [
      'In 1965 Undersecretary of State George Ball warned that once American troops entered combat, the country would be stuck in a war it could not finish.',
      'By mid-1967 Robert McNamara had privately decided that Rolling Thunder was not working and that attrition would cost too much.',
    ],
    homeFrontConstraints: [
      'Rising anti-war sentiment, draft card burnings, and the March on the Pentagon in October 1967.',
      'Budgetary strain: funding both the Great Society and the war without raising taxes ignited severe domestic inflation.',
    ],
    primaryDocumentRef: 'cia-memo-giap-thanh-1966',
  },
  hanoi: {
    keyActors: ['Le Duan', 'General Vo Nguyen Giap', 'Nguyen Chi Thanh', 'Ho Chi Minh'],
    strategicObjective:
      'Fight a long war, take the bombing, keep the trail open and outlast America’s patience.',
    underlyingAssumptions: [
      'American voters would not put up with a long, bloody war for a goal they did not understand.',
      'By grabbing the enemy by the belt and fighting at close range, communist troops could keep American planes and artillery from firing.',
    ],
    internalDebates: [
      'General Nguyen Chi Thanh wanted big battles against American units. Giap wanted to save his forces and fight as guerrillas.',
      'Le Duan’s side overruled the moderates, arrested officers who disagreed and began planning a nationwide offensive.',
    ],
    homeFrontConstraints: [
      'Surviving Operation Rolling Thunder: dispersing factories and hospitals into caves and rural areas, and enduring severe civilian rationing.',
    ],
    primaryDocumentRef: 'mccarthy-hanoi-1968',
  },
  causalChain: {
    decision: {
      actor: 'Johnson and Westmoreland; Le Duan in Hanoi',
      action: 'Johnson sent nearly half a million troops to fight a war of attrition. Le Duan readied North Vietnam for one huge offensive.',
      date: '1965–1967',
    },
    assumption: {
      premise: 'Washington thought Hanoi would run out of soldiers. Hanoi thought a nationwide attack on the cities would set off an uprising in the South.',
      blindSpot: 'Washington counted bodies while the enemy chose when and where to fight. Hanoi overestimated how many southerners would rise up.',
    },
    result: {
      immediate: 'American firepower killed huge numbers of enemy soldiers, but men and supplies kept coming down the Ho Chi Minh Trail.',
      counterAction: 'Hanoi finished its plans to attack South Vietnam’s cities all at once in early 1968.',
    },
    unintendedConsequence:
      'Johnson’s officials kept telling Americans the war was being won. When the attack came, much of the public stopped believing them.',
    nextDecision:
      'How would Americans react when communist forces hit dozens of South Vietnamese cities on the same night?',
  },
  interactiveModule: {
    id: 'attrition-model',
    type: 'attrition-model',
    title: 'The crossover point',
    prompt:
      'Set the enemy deaths the U.S. command reported against the number of soldiers North Vietnam could add each year. Then check who started most of the firefights.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['cia-memo-giap-thanh-1966'], PRIMARY_DOCUMENTS['mccarthy-hanoi-1968']],
  nextQuestion: {
    question: 'What was the secret war behind the front lines?',
    framing:
      'While big American units fought in the highlands, the CIA went after the Viet Cong’s hidden government, and Air Force planes sprayed the jungle with chemicals.',
  },
  citations: [
    CITATION_REGISTRY['c5-1'],
    CITATION_REGISTRY['c5-2'],
    CITATION_REGISTRY['c5-3'],
  ],
};

export default chapter;
