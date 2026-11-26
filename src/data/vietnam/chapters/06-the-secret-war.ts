import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'the-secret-war',
  number: 6,
  timeframe: '1961–1972',
  leadImageId: 'ranch-hand',
  galleryImageIds: ['korean-marines-rice-1966', 'vc-prisoner-1967', 'chieu-hoi-poster', 'long-my-poster-1967', 'hamlet-population-map-1972'],
  title: 'The Secret War',
  subtitle: 'Away from the big battles, the CIA ran an army in Laos and hunted the Viet Cong’s hidden government. Air Force planes sprayed the forests with Agent Orange.',
  summary:
    'Alongside the regular battles, the United States and South Vietnam fought a quieter war. The Phoenix Program went after the Viet Cong’s political network by identifying its members and capturing or killing them. Operation Ranch Hand sprayed millions of gallons of herbicide to strip away forest cover. The harm to people and to the land has lasted for decades.',
  whatHappened: {
    narrative: [
      'Army sweeps could not destroy the Viet Cong’s hidden government. It collected taxes, ran schools and recruited fighters. So in 1967–1968, the CIA and South Vietnamese security agencies created the Phoenix Program, *Phung Hoang* in Vietnamese. It was run by CORDS (Civil Operations and Revolutionary Development Support). Phoenix pooled what the military and police knew in order to find the members of this hidden network and remove them by capture, persuasion or killing. American figures for 1968 to 1972 counted 81,740 people removed: 33,358 captured, 22,013 who switched sides and 26,369 killed. But testimony showed that about 87 percent of those killed died in regular military operations and artillery fire, not in targeted police actions. Monthly quotas led officials to pad their reports with ordinary combat deaths.[^c6-3]',
      'From 1962 to 1971, the U.S. Air Force ran Operation Ranch Hand. Its planes sprayed about 19 million gallons of plant-killing chemicals over the South Vietnamese countryside to strip away the jungle cover and crops the guerrillas relied on.[^c6-2] About 11 million gallons were Agent Orange, which was contaminated with 2,3,7,8-TCDD, a dioxin that causes cancer and stays in the environment for years.[^c6-2] More than 5 million acres of forest and 500,000 acres of crops were stripped bare. The harm lasted for decades, with higher rates of cancer, birth defects and long-term illness among Vietnamese civilians and American veterans. Some of the contaminated UC-123 planes were later handed to the Air Force Reserve, which flew them inside the United States from 1972 to 1982.[^c6-6]',
      'At the same time, the CIA was running a large secret war in neighboring Laos. It organized an army of Hmong fighters under General Vang Pao. By the end of 1963, a reported 20,000 of them were armed, and they raided North Vietnamese supply depots and ambushed trucks.[^c6-4] With Air America transport planes and heavy secret B-52 raids, Laos became the most heavily bombed country per person in history.[^c6-5] Phoenix and the other pacification programs did damage the Viet Cong’s political network. But their rough methods and the civilians they killed turned many villagers against the government.'
    ],
    sections: [
      { date: '1967–1971', heading: 'The Phoenix Program' },
      { date: '1962–1971', heading: 'Operation Ranch Hand' },
      { date: '1961–1973', heading: 'The war in Laos' },
    ],
    keyEvents: [
      { date: 'Nov 1961', title: 'Kennedy approves chemical spraying', detail: 'Diem asks for spraying from the air. Kennedy approves it one mission at a time as a test.' },
      { date: 'Jan 1962', title: 'Operation Ranch Hand begins', detail: 'Planes start spraying plant-killing chemicals over South Vietnam.' },
      { date: 'May 1967', title: 'CORDS is set up', detail: 'Robert Komer brings the civilian and military pacification efforts together under MACV.' },
      { date: 'July 1968', title: 'The Phoenix Program starts', detail: 'President Thieu orders Phung Hoang to find and break up the Viet Cong’s civilian network.' },
      { date: 'July 1971', title: 'Congress holds hearings on Phoenix', detail: 'William Colby and former intelligence soldiers tell the House about quotas and abuses.' },
      { date: '1971', title: 'Ranch Hand ends', detail: 'Spraying stops after scientific studies on dioxin poisoning and protests at home.' },
    ],
  },
  washington: {
    keyActors: ['Robert Komer', 'William Colby', 'Richard Helms', 'Ngo Dinh Diem'],
    strategicObjective:
      'Destroy the Viet Cong’s hidden government and take away the jungle cover and crops the guerrillas lived on.',
    underlyingAssumptions: [
      'The guerrillas depended on a network of officials who ruled by fear, and police work guided by good intelligence could take that network apart.',
      'Herbicides were a cheap, efficient way to protect bases and convoys, with no lasting harm to the land.',
    ],
    internalDebates: [
      'Critics in Congress and the press called Phoenix a program for assassinating civilians. The CIA defended it and said ordinary combat deaths had padded its numbers.',
      'In 1961 State Department officials pushed back against spraying herbicides, because they feared the world would call it chemical warfare.',
    ],
    homeFrontConstraints: [
      'News of abuse during interrogations, the tiger cages on Con Son Island and chemical poisoning brought hard questions from the public and from Congress.',
    ],
    primaryDocumentRef: 'cia-memo-giap-thanh-1966',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Central Office for South Vietnam (COSVN)', 'Nguyen Van Linh'],
    strategicObjective:
      'Protect party members in the South, keep control of the villages and fight the pacification programs.',
    underlyingAssumptions: [
      'Villagers’ nationalism and anger over land would let the Viet Cong rebuild its network no matter how many people were arrested.',
      'American spraying would push villagers who had not taken sides toward the revolution.',
    ],
    internalDebates: [
      'Communist headquarters in the South saw Phoenix as a serious threat. Between 1968 and 1971 it wrecked the party’s network in many provinces and forced officials to retreat to remote bases.',
    ],
    homeFrontConstraints: [
      'The party lost many experienced organizers in the South, so Hanoi sent officials from the North to take their place.',
    ],
    primaryDocumentRef: 'resolution-15-1959',
  },
  causalChain: {
    decision: {
      actor: 'The CIA, the U.S. command and South Vietnam’s government',
      action: 'They set up the Phoenix Program to remove the Viet Cong’s hidden officials, and sprayed herbicides to strip away the jungle cover.',
      date: '1962–1971',
    },
    assumption: {
      premise: 'Take away the hidden government and the jungle cover, and the guerrillas would lose their hold on the villages.',
      blindSpot: 'Arrest quotas and chemical spraying hurt ordinary villagers, and many of them turned against the government.',
    },
    result: {
      immediate: 'Phoenix reported more than 80,000 people removed, and spraying stripped more than 5 million acres of forest.',
      counterAction: 'The guerrillas moved their bases across the borders and leaned more on regular troops from the North.',
    },
    unintendedConsequence:
      'Both programs hurt America’s standing around the world. Agent Orange left health damage that Vietnamese families and American veterans still live with.',
    nextDecision:
      'How would these quiet campaigns hold up when the Tet Offensive hit the cities in 1968?',
  },
  interactiveModule: {
    id: 'phoenix-analysis',
    type: 'phoenix-analysis',
    title: 'Phoenix and Ranch Hand in numbers',
    prompt:
      'Check the Phoenix Program’s official numbers, including what the word neutralized covered and why 87% of the deaths came from regular combat. Then see what Operation Ranch Hand left behind.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['cia-memo-giap-thanh-1966']],
  nextQuestion: {
    question: 'How did a battle Hanoi lost end a presidency?',
    framing:
      'In the 1968 Tet Offensive, communist forces were pushed out of every major city they attacked and lost more than 40,000 fighters. Two months later, Lyndon Johnson announced he would not run again.',
  },
  citations: [
    CITATION_REGISTRY['c6-4'],
    CITATION_REGISTRY['c6-2'],
    CITATION_REGISTRY['c6-3'],
    CITATION_REGISTRY['c6-5'],
    CITATION_REGISTRY['c6-6'],
  ],
};

export default chapter;
