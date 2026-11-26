import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'kennedy-and-diem',
  number: 3,
  timeframe: '1961–1963',
  leadImageId: 'jfk-laos-1961',
  galleryImageIds: ['saigon-street-1961', 'madame-nhu-1963', 'pentagon-papers-diem'],
  title: 'Kennedy, Diem and the coup',
  subtitle: 'Kennedy sent 16,000 advisers to save Diem’s government. In November 1963, South Vietnamese generals killed Diem, and Washington knew the coup was coming.',
  summary:
    'President Kennedy wanted to avoid a big land war that might pull in China. He chose counterinsurgency instead and raised the number of American advisers from about 900 to more than 16,000. It went badly. The Strategic Hamlet Program turned farmers against the government, the Battle of Ap Bac showed how weak South Vietnam’s army was, and Diem cracked down on the Buddhist majority. In November 1963, Washington signaled that it would accept a coup, and Diem was overthrown.',
  featuredDocument: {
    citationId: 'Q004',
    kind: 'Telegram',
    stamp: 'FRUS 1961–1963, Vol. IV, Doc. 268',
    header: [['From', 'Department of State'], ['To', 'Embassy Saigon'], ['Number', '243'], ['Date', 'August 24, 1963']],
    note: 'Written by Roger Hilsman, Averell Harriman and George Ball, this cable told the embassy that Washington could live without Diem. On November 1–2, South Vietnamese generals overthrew him and killed him.',
  },
  whatHappened: {
    narrative: [
      'John F. Kennedy took office in 1961 in the middle of crises in Laos, Berlin and Cuba’s Bay of Pigs. He wanted to fight what Soviet leaders called wars of national liberation without sending large army units into combat, as in Korea. His answer was flexible response, with a focus on fighting guerrillas. He sent Green Beret Special Forces and helicopter units, and he approved tests of chemicals that kill plants. By late 1963, the number of U.S. military personnel in South Vietnam had grown from about 900 to more than 16,300. That buildup happened well before Diem was killed.[^c3-2]',
      'In 1962, South Vietnam and its American advisers started the Strategic Hamlet Program. They built more than 8,000 fortified villages to cut farmers off from the Viet Cong.[^c3-1] Many villagers hated it. They were forced off land where their families had farmed and were buried, and corrupt local officials made things worse. In January 1963, the Battle of Ap Bac showed how weak the South Vietnamese army still was. It outnumbered the enemy eight to one and had armored vehicles and air support. A Viet Cong battalion of 350 men beat it anyway.[^c3-2]',
      'In May 1963, government troops fired on Buddhist protesters in Hue, and the Buddhist Crisis began. On June 11, the monk Thich Quang Duc burned himself to death on a Saigon street in protest. Malcolm Browne’s photograph of it shocked people around the world. In August, Diem’s brother Ngo Dinh Nhu, who ran the security forces, raided Buddhist pagodas across the country. Washington answered with State Department Cable 243, drafted by Roger Hilsman. It signaled to South Vietnamese generals that the United States would back a new government if Diem did not get rid of Nhu.[^c3-3] On November 1–2, 1963, the generals overthrew Diem and killed him and Nhu. The United States knew the coup was coming and did not stop it. Three weeks later, Kennedy was assassinated in Dallas.'
    ],
    sections: [
      { date: '1961–1963', heading: 'Kennedy sends advisers instead of armies' },
      { date: '1962–1963', heading: 'Strategic hamlets and the defeat at Ap Bac' },
      { date: 'May–November 1963', heading: 'The Buddhist crisis and the coup' },
    ],
    keyEvents: [
      { date: 'Nov 1961', title: 'Kennedy sends more advisers (NSAM 111)', detail: 'Kennedy approves more U.S. advisers, aircraft units and combat support.' },
      { date: 'Feb 1962', title: 'MACV is set up', detail: 'The U.S. sets up Military Assistance Command, Vietnam, under General Paul Harkins.' },
      { date: 'March 1962', title: 'The Strategic Hamlet Program starts', detail: 'Farmers across the country begin to be moved into fortified villages.' },
      { date: 'Jan 2, 1963', title: 'The Battle of Ap Bac', detail: 'A Viet Cong battalion beats a much larger ARVN force and exposes weak leadership.' },
      { date: 'June 11, 1963', title: 'A monk burns himself in protest', detail: 'Thich Quang Duc’s death in Saigon sets off outrage around the world at Diem’s treatment of Buddhists.' },
      { date: 'Aug 24, 1963', title: 'Cable 243', detail: 'Washington signals to South Vietnamese generals that it will not stand in the way of removing Diem.' },
      { date: 'Nov 1–2, 1963', title: 'The coup and Diem’s death', detail: 'ARVN generals overthrow and kill Diem and Nhu. The U.S. is left responsible for the chaos that follows.' },
    ],
  },
  washington: {
    keyActors: ['John F. Kennedy', 'Robert S. McNamara', 'Henry Cabot Lodge Jr.', 'Roger Hilsman', 'McGeorge Bundy'],
    strategicObjective:
      'Beat the guerrillas with counterinsurgency while pushing Diem to reform his government and army.',
    underlyingAssumptions: [
      'Helicopters, chemical defoliants and Special Forces could solve what was really a political fight for the villages.',
      'A government led by South Vietnamese generals would win more support and fight better than Diem.',
    ],
    internalDebates: [
      'Averell Harriman, Roger Hilsman and Ambassador Henry Cabot Lodge argued that Diem had lost his people and could not win.',
      'Vice President Johnson, General Maxwell Taylor and CIA Director John McCone warned that removing Diem would bring chaos.',
    ],
    homeFrontConstraints: [
      'Reporters in Saigon, including David Halberstam, Neil Sheehan and Malcolm Browne, wrote that the war was going worse than officials said.',
    ],
    primaryDocumentRef: 'cable-243-diem',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Nguyen Chi Thanh', 'Ho Chi Minh', 'Vo Nguyen Giap'],
    strategicObjective:
      'Break up the strategic hamlets, beat South Vietnam’s army in the field and take advantage of the turmoil in Saigon.',
    underlyingAssumptions: [
      'Saigon’s government was held together mostly by American support, and Diem’s fall would leave it paralyzed.',
      'The United States would hesitate to send combat troops as long as the guerrillas kept up the pressure.',
    ],
    internalDebates: [
      'In December 1963 Le Duan won approval for Resolution 9, which sent regular North Vietnamese army regiments south to strike before the United States could step in.',
      'Party leaders who urged caution about fighting American forces lost influence.',
    ],
    homeFrontConstraints: [
      'China and the Soviet Union were quarreling with each other, but Hanoi still needed weapons from both.',
    ],
    primaryDocumentRef: 'cable-243-diem',
  },
  causalChain: {
    decision: {
      actor: 'The Kennedy administration and South Vietnamese generals',
      action: 'Washington signaled in Cable 243 that it would accept a coup. Generals overthrew Diem and killed him and his brother Nhu.',
      date: 'August–November 1963',
    },
    assumption: {
      premise: 'A new military government would pull the country together and fight harder.',
      blindSpot: 'Diem was the one leader holding Saigon’s quarreling generals together. Without him, they turned on each other.',
    },
    result: {
      immediate: 'Saigon went through a string of short-lived military governments. Desertions rose, and the Viet Cong took over more of the countryside.',
      counterAction: 'Hanoi passed Resolution 9 and started sending regular North Vietnamese army units south on the Ho Chi Minh Trail.',
    },
    unintendedConsequence:
      'By helping remove Diem, the United States made itself responsible for whatever came next in Saigon.',
    nextDecision:
      'With South Vietnam close to collapse in 1964, would Lyndon Johnson look for a way out, or go to war?',
  },
  interactiveModule: {
    id: 'escalation-timeline',
    type: 'escalation-timeline',
    title: 'From 900 advisers to 16,000',
    prompt:
      'Follow the numbers year by year, from 900 advisers in 1960 to more than 16,000 in 1963, and watch advising turn into fighting.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['cable-243-diem']],
  nextQuestion: {
    question: 'What really happened in the Gulf of Tonkin?',
    framing:
      'President Johnson told Americans that North Vietnam had attacked U.S. destroyers twice, in international waters, for no reason. The Navy’s own records tell a different story about the second night.',
  },
  citations: [
    CITATION_REGISTRY['c3-1'],
    CITATION_REGISTRY['c3-2'],
    CITATION_REGISTRY['c3-3'],
  ],
};

export default chapter;
