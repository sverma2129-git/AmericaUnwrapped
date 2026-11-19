import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'the-secret-war',
  number: 6,
  timeframe: '1961–1972',
  leadImageId: 'ranch-hand',
  title: 'The secret war',
  subtitle: 'The Phoenix Program, herbicide spraying, and the hidden war in Laos',
  summary:
    'Alongside the regular battles, the United States and South Vietnam fought a quieter war. The Phoenix Program went after the Viet Cong’s political network by identifying its members and capturing or killing them. Operation Ranch Hand sprayed millions of gallons of herbicide to strip away forest cover. The harm to people and to the land has lasted for decades.',
  whatHappened: {
    narrative: [
      'Army sweeps could not destroy the Viet Cong’s hidden government. It collected taxes, ran schools and recruited fighters. So in 1967–1968, the CIA and South Vietnamese security agencies created the Phoenix Program, *Phung Hoang* in Vietnamese. It was run by CORDS (Civil Operations and Revolutionary Development Support). Phoenix pooled what the military and police knew in order to find the members of this hidden network and remove them by capture, persuasion or killing. Official figures given to Congress in 1971 counted 81,740 people removed: 33,358 captured, 22,013 who switched sides and 26,369 killed.[^c6-3] But testimony showed that about 87 percent of those killed died in regular military operations and artillery fire, not in targeted police actions. Monthly quotas led officials to pad their reports with ordinary combat deaths.[^c6-3]',
      'From 1962 to 1971, the U.S. Air Force ran Operation Ranch Hand. Its planes sprayed about 19 million gallons of plant-killing chemicals over the South Vietnamese countryside to strip away the jungle cover and crops the guerrillas relied on.[^c6-2] About 11 million gallons were Agent Orange, which was contaminated with 2,3,7,8-TCDD, a dioxin that causes cancer and stays in the environment for years.[^c6-2] More than 5 million acres of forest and 500,000 acres of crops were stripped bare. The harm lasted for decades, with higher rates of cancer, birth defects and long-term illness among Vietnamese civilians and American veterans. Few people know that the contaminated UC-123 planes were later handed to the Air Force Reserve, which flew them on cargo missions inside the United States from 1972 to 1982.',
      'At the same time, the CIA was running a large secret war in neighboring Laos. It organized an army of about 30,000 Hmong fighters under General Vang Pao to cut the Ho Chi Minh Trail.[^c6-1] With Air America transport planes and heavy secret B-52 raids, Laos became the most heavily bombed country per person in history.[^c6-2] Phoenix and the other pacification programs did damage the Viet Cong’s political network. But their rough methods and the civilians they killed turned many villagers against the government.'
    ],
    keyEvents: [
      { date: 'Nov 1961', title: 'Kennedy approves chemical spraying', detail: 'Diem asks for spraying from the air. Kennedy approves it one mission at a time as a test.' },
      { date: 'Jan 1962', title: 'Operation Ranch Hand begins', detail: 'Planes start spraying plant-killing chemicals over South Vietnam.' },
      { date: 'May 1967', title: 'CORDS is set up', detail: 'Robert Komer brings the civilian and military pacification efforts together under MACV.' },
      { date: 'July 1968', title: 'The Phoenix Program starts', detail: 'President Thieu orders Phung Hoang to find and break up the Viet Cong’s civilian network.' },
      { date: 'July 1971', title: 'Congress holds hearings on Phoenix', detail: 'William Colby and former intelligence soldiers tell the House about quotas and abuses.' },
      { date: '1971–1972', title: 'Ranch Hand ends', detail: 'Spraying stops after scientific studies on dioxin poisoning and protests at home.' },
    ],
  },
  washington: {
    keyActors: ['Robert Komer', 'William Colby', 'Richard Helms', 'Ngo Dinh Diem'],
    strategicObjective:
      'Eradicate the political shadow government of the Viet Cong and deny insurgents forest concealment and agricultural sustenance.',
    underlyingAssumptions: [
      'The insurgency was sustained primarily by a coercive political infrastructure that could be dismantled through centralized intelligence collection and police action.',
      'Herbicides were an efficient, economical weapon to protect American patrol bases and convoys without long-term ecological consequences.',
    ],
    internalDebates: [
      'Controversy erupted in Congress and the media labeling Phoenix a “civilian assassination program,” leading the CIA to defend it as an essential counterinsurgency program padded by conventional combat reporting.',
      'State Department officials initially resisted herbicide defoliation in 1961, fearing international condemnation for chemical warfare.',
    ],
    homeFrontConstraints: [
      'Intense public and congressional scrutiny following revelations of interrogation abuses, tiger cages at Con Son Island, and chemical contamination.',
    ],
    primaryDocumentRef: 'cia-memo-giap-thanh-1966',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Central Office for South Vietnam (COSVN)', 'Nguyen Van Linh'],
    strategicObjective:
      'Protect underground party cadres, maintain rural political control, and counter pacification programs.',
    underlyingAssumptions: [
      'The rural population’s nationalist sentiment and land grievances would enable the Viet Cong infrastructure to regenerate despite government arrests.',
      'American chemical defoliation would reinforce anti-imperialist propaganda and drive uncommitted peasants into the revolutionary camp.',
    ],
    internalDebates: [
      'COSVN recognized Phoenix as a severe operational threat that decimated southern party apparatus in many provinces between 1968 and 1971, forcing cadres to operate from remote base areas.',
    ],
    homeFrontConstraints: [
      'Managing heavy loss of seasoned southern organizers, requiring northern administrative cadres to be dispatched south to replace fallen personnel.',
    ],
    primaryDocumentRef: 'resolution-15-1959',
  },
  causalChain: {
    decision: {
      actor: 'MACV, CIA, & South Vietnamese Authorities',
      action: 'Institutionalized the Phoenix Program to eliminate insurgent cadres and conducted Operation Ranch Hand to defoliate rural sanctuaries.',
      date: '1962–1971',
    },
    assumption: {
      premise: 'Dismantling the political infrastructure and stripping vegetative cover would break the insurgency’s hold on the rural population.',
      blindSpot: 'Quota-driven arrests and widespread chemical devastation generated substantial civilian alienation, reinforcing the grievances that fueled insurgency.',
    },
    result: {
      immediate: 'Over 80,000 individuals were neutralized under Phoenix, and millions of forest acres were destroyed.',
      counterAction: 'Insurgent networks adapted by shifting base areas across borders and relying increasingly on conventional northern regular units.',
    },
    unintendedConsequence:
      'The programs damaged the moral standing of the allied effort internationally and produced an enduring ecological and health crisis spanning generations.',
    nextDecision:
      'How would the sudden urban shock of the 1968 Tet Offensive intersect with these ongoing pacification and attrition efforts?',
  },
  interactiveModule: {
    id: 'phoenix-analysis',
    type: 'phoenix-analysis',
    title: 'Phoenix and Ranch Hand in numbers',
    prompt:
      'Look at the Phoenix Program’s numbers, including what “neutralized” meant and the 87% of cases that came from regular combat, then at what Operation Ranch Hand left behind.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['cia-memo-giap-thanh-1966']],
  nextQuestion: {
    question: 'How did a military defeat for the Viet Cong end a presidency?',
    framing:
      'In the 1968 Tet Offensive, communist forces were pushed out of every major city and lost huge numbers of fighters. So why did Tet break American support for the war and change U.S. policy?',
  },
  citations: [
    CITATION_REGISTRY['c6-1'],
    CITATION_REGISTRY['c6-2'],
    CITATION_REGISTRY['c6-3'],
  ],
};

export default chapter;
