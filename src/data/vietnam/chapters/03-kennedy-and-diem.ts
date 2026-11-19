import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'kennedy-and-diem',
  number: 3,
  timeframe: '1961–1963',
  leadImageId: 'jfk-laos-1961',
  title: 'Kennedy, Diem and the coup',
  subtitle: 'More advisers, the Strategic Hamlet Program, and the coup of November 1963',
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
      'Defeat communist insurgency via counterinsurgency techniques while pressuring Diem into administrative and military reforms.',
    underlyingAssumptions: [
      'Modern American military techniques (helicopters, defoliants, special forces) could solve the political challenge of rural guerrilla warfare.',
      'A military government led by ARVN generals would enjoy broader popular support and prosecute the war more effectively than Diem.',
    ],
    internalDebates: [
      'The anti-Diem faction (Harriman, Hilsman, Ambassador Lodge) argued that Diem was hopelessly alienated from the population and made victory impossible.',
      'The pro-Diem faction (Vice President Johnson, Gen. Maxwell Taylor, CIA Director John McCone) warned that ousting Diem would produce chronic political chaos.',
    ],
    homeFrontConstraints: [
      'Emergence of critical investigative reporting from Saigon correspondents (David Halberstam, Neil Sheehan, Malcolm Browne) challenging official military optimism.',
    ],
    primaryDocumentRef: 'cable-243-diem',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Nguyen Chi Thanh', 'Ho Chi Minh', 'Vo Nguyen Giap'],
    strategicObjective:
      'Dismantle the Strategic Hamlet network, defeat ARVN forces in the field, and exploit the political instability in Saigon.',
    underlyingAssumptions: [
      'The Saigon regime was an unstable coalition held together primarily by American backing; Diem’s fall would paralyze the southern administration.',
      'The United States would hesitate to commit regular conventional ground combat forces if the insurgency maintained high operational tempo.',
    ],
    internalDebates: [
      'In December 1963, at the 9th Party Plenum, Le Duan pushed through Resolution 9, committing regular North Vietnamese Army (PAVN) regiments to infiltrate south and deliver a decisive blow before the U.S. could intervene directly.',
      'Moderate party figures who urged caution regarding direct confrontation with American forces were sidelined.',
    ],
    homeFrontConstraints: [
      'Managing escalating Sino-Soviet ideological friction while ensuring steady logistical deliveries of weapons from both communist powers.',
    ],
    primaryDocumentRef: 'cable-243-diem',
  },
  causalChain: {
    decision: {
      actor: 'Kennedy Administration & ARVN Plotters',
      action: 'Tacitly green-lit the overthrow of Ngo Dinh Diem via Cable 243, leading to the assassination of Diem and Nhu.',
      date: 'August–November 1963',
    },
    assumption: {
      premise: 'A new military junta would unify the country and wage the war more aggressively.',
      blindSpot: 'Failed to recognize that Diem was the only figure capable of holding Saigon’s factionalized military together; his removal created chronic coups and political paralysis.',
    },
    result: {
      immediate: 'A succession of unstable military juntas in Saigon, widespread desertions in the ARVN, and rapid expansion of Viet Cong control in the countryside.',
      counterAction: 'Hanoi passed Resolution 9 and began infiltrating regular North Vietnamese Army (PAVN) combat units south down the Ho Chi Minh Trail.',
    },
    unintendedConsequence:
      'By complicity in the coup, Washington transformed a client relationship into direct moral and operational responsibility for the Saigon government.',
    nextDecision:
      'With South Vietnam nearing total military collapse in 1964, would the Johnson administration seek a negotiated exit or engineer an opening for open warfare?',
  },
  interactiveModule: {
    id: 'escalation-timeline',
    type: 'escalation-timeline',
    title: 'From 900 advisers to 16,000',
    prompt:
      'Follow the numbers from 900 military advisers in 1960 to more than 16,000 in 1963, and see how “advising” turned into fighting.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['cable-243-diem']],
  nextQuestion: {
    question: 'What really happened in the Gulf of Tonkin in August 1964?',
    framing:
      'President Johnson told the country that American destroyers had been attacked for no reason in international waters. What do the Navy’s logs and the NSA’s records show about August 2 and August 4?',
  },
  citations: [
    CITATION_REGISTRY['c3-1'],
    CITATION_REGISTRY['c3-2'],
    CITATION_REGISTRY['c3-3'],
  ],
};

export default chapter;
