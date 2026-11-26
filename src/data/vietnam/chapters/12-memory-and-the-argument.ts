import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';

const chapter: ChapterData = {
  id: 'memory-and-the-argument',
  number: 12,
  timeframe: '1975 to today',
  leadImageId: 'mcnamara-map-1965',
  galleryImageIds: ['memorial-dedication-1982', 'reagan-wall-1988', 'remembering-vietnam-exhibit-2017'],
  title: 'How historians argue about the war',
  subtitle: 'Was the war unwinnable, or lost at home? Four groups of historians answer differently, using different evidence.',
  summary:
    'Fifty years after the war ended, historians and citizens still argue about why it happened, how it was fought, and what it means. There are four main schools of thought: Orthodox, Revisionist, Post-Revisionist, and one built on Vietnamese archives. Learning them shows how the same evidence can be read in different ways, and why no single account of the war is accepted by everyone.',
  whatHappened: {
    narrative: [
      'World War II left most Americans agreed on why it was fought and that it was right. Vietnam left them divided, and historians still disagree about it. Their arguments come from reading the same documents in different ways, from different views of what each army could do, and from different answers to one question: did the government in Saigon have its people’s support?',
      'The Orthodox school, also called the liberal realist school, includes David Halberstam, Arthur Schlesinger Jr. and George Herring. These historians see the war as a quagmire that could never be won. In their view, American leaders were blinded by a rigid belief in containing communism. They mistook a real nationalist revolution against colonial rule for part of a single Soviet and Chinese plot. Because South Vietnam’s government never won the loyalty of its own people, no amount of American military power could build a lasting non-communist state.',
      'The Revisionist school, also called the conservative school, includes Guenter Lewy, Harry Summers and Lewis Sorley. These historians argue that defending South Vietnam from communist attack was a noble cause, and that the war could have been won. They say General Creighton Abrams’ One War strategy had made the countryside largely secure after 1968. In their view, South Vietnam fell in 1975 because Congress cut aid, the press was biased and the United States walked away, and not because its army was beaten.',
      'In the past twenty years, archives in Vietnam, the former Soviet Union and China have opened. That has produced a Post-Revisionist or international school, including Fredrik Logevall, Lien-Hang Nguyen and Pierre Asselin. These historians move past the question of whether the war was winnable. They treat the Vietnamese on every side as people who made their own choices and played their big-power backers against each other. Their work shows Hanoi under Le Duan as a hard-line government that crushed moderates at home, and it gives South Vietnamese society back its own voice. Vietnamese writers have challenged the official heroic story too, among them the North Vietnamese veterans Bao Ninh, author of *The Sorrow of War*, and Duong Thu Huong. Even the war museum in Ho Chi Minh City has changed its name three times, from *Exhibition House for US and Puppet Crimes* to *War Crimes Museum* to *War Remnants Museum*, as relations with the United States returned to normal in 1995.'
    ],
    sections: [
      { heading: 'Why historians still disagree' },
      { heading: 'The Orthodox school' },
      { heading: 'The Revisionist school' },
      { date: 'Since the 1990s', heading: 'The Post-Revisionist school' },
    ],
    keyEvents: [
      { date: '1972', title: 'Halberstam publishes The Best and the Brightest', detail: 'A founding orthodox book about how smart, confident officials led the country into war.' },
      { date: '1982', title: 'Summers publishes On Strategy', detail: 'A revisionist book arguing the military should have focused on blocking invasion routes from the North.' },
      { date: '1990', title: 'Bao Ninh publishes The Sorrow of War', detail: 'A North Vietnamese veteran’s novel shows the war as grief and trauma, not the heroic story the state told.' },
      { date: '1995', title: 'The U.S. and Vietnam restore relations', detail: 'President Bill Clinton and Prime Minister Vo Van Kiet restore full relations between the two countries.' },
      { date: '2012', title: 'Lien-Hang Nguyen publishes Hanoi’s War', detail: 'A study based on Vietnamese records of Le Duan’s police state, his purges and his wartime diplomacy.' },
    ],
  },
  washington: {
    keyActors: ['Historians, veterans and citizens'],
    strategicObjective:
      'Learn from the war in ways that guide how the United States uses force today.',
    underlyingAssumptions: [
      'Orthodox historians: military power cannot make up for a government its own people will not support.',
      'Revisionist historians: politicians tied the military’s hands and kept it from winning.',
    ],
    internalDebates: [
      'Would Kennedy have pulled out of Vietnam if he had lived past 1963?',
      'Did Nixon plan the decent interval on purpose, or is that an idea critics came up with later?',
    ],
    homeFrontConstraints: [
      'Memories of Vietnam shaped how Americans argued about sending troops to the Persian Gulf, the Balkans, Afghanistan and Iraq.',
    ],
    primaryDocumentRef: 'ap-casualty-disclosure-1995',
  },
  hanoi: {
    keyActors: ['Official State Historians vs Independent Researchers & Diaspora Voices'],
    strategicObjective:
      'Square the party’s official story of a great patriotic victory with what the archives and the refugees have to say.',
    underlyingAssumptions: [
      'The party’s official history calls victory the certain result of Marxism-Leninism and national unity under the Communist Party.',
      'Scholars working from archives and from refugee accounts stress the huge human cost, repression inside the North and South Vietnam’s separate, non-communist identity.',
    ],
    internalDebates: [
      'Some topics are still sensitive in Vietnam today, among them the killings of civilians at Hue in 1968, the 1979 war with China and conditions in the re-education camps.',
    ],
    homeFrontConstraints: [
      'Most Vietnamese are now too young to remember the war. They care more about jobs and trade with the world than about wartime politics.',
    ],
    primaryDocumentRef: 'ap-casualty-disclosure-1995',
  },
  causalChain: {
    decision: {
      actor: 'Congress and later presidents',
      action: 'Congress passed the War Powers Act in 1973, and American leaders grew wary of long wars abroad.',
      date: '1973–1991',
    },
    assumption: {
      premise: 'Limits on presidential power and a cautious public would keep the country out of another Vietnam.',
      blindSpot: 'One war’s lessons do not fit every war, and leaders argued for decades over what Vietnam had taught.',
    },
    result: {
      immediate: 'For almost twenty years, the United States avoided large ground wars abroad.',
      counterAction: 'In 1984 Defense Secretary Caspar Weinberger set out conditions for using force, and Colin Powell later built on them.',
    },
    unintendedConsequence:
      'After the 1991 Gulf War, President George H.W. Bush declared that the country had put the Vietnam Syndrome behind it. The argument over Vietnam’s lessons came back with the wars after 9/11.',
    nextDecision:
      'Which lesson of Vietnam holds up best, and what evidence would you use to prove it?',
  },
  interactiveModule: {
    id: 'competing-arguments',
    type: 'competing-arguments',
    title: 'Four schools of thought',
    prompt:
      'Compare the four schools: what each one claims, the evidence it leans on and how other historians push back.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['ap-casualty-disclosure-1995']],
  nextQuestion: {
    question: 'What would you have decided?',
    framing:
      'You have followed thirty years of decisions. Pick a turning point, read its documents again and test your answer in the study guide.',
  },
  citations: [
    { id: 'c12-1', marker: 1, citation: 'Halberstam, David. The Best and the Brightest. Random House, 1972.', sourceType: 'academic-monograph' },
    { id: 'c12-2', marker: 2, citation: 'Summers, Harry G. On Strategy: A Critical Analysis of the Vietnam War. Presidio Press, 1982.', sourceType: 'academic-monograph' },
    { id: 'c12-3', marker: 3, citation: 'Logevall, Fredrik. Choosing War: The Lost Chance for Peace and the Escalation of War in Vietnam. University of California Press, 1999.', sourceType: 'academic-monograph' },
    { id: 'c12-4', marker: 4, citation: 'Nguyen, Lien-Hang T. Hanoi’s War: An International History of the War for Peace in Vietnam. University of North Carolina Press, 2012.', sourceType: 'academic-monograph' },
  ],
};

export default chapter;
