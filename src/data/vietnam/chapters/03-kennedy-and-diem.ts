import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'kennedy-and-diem',
  number: 3,
  timeframe: '1961–1963',
  title: 'Kennedy, Counterinsurgency, & Diem',
  subtitle: 'Advisory expansion, the Strategic Hamlet Program, and the November 1963 coup',
  summary:
    'Determined to avoid a conventional land war that might draw in China, President Kennedy embraced counterinsurgency, expanding the American advisory presence from roughly 900 to over 16,000 personnel. However, the Strategic Hamlet Program alienated rural peasants, the Battle of Ap Bac revealed structural weaknesses in the South Vietnamese military, and Diem’s repression of the Buddhist majority led Washington to signal tacit approval for the November 1963 coup that ended Diem’s regime.',
  whatHappened: {
    narrative: [
      'Taking office in 1961 amidst crises in Laos, Berlin, and the Bay of Pigs, President John F. Kennedy sought to counter Soviet-backed "wars of national liberation" without deploying conventional ground combat divisions, mindful of the Korean War precedent. Kennedy favored flexible response and counterinsurgency, dispatching Green Beret Special Forces, combat helicopter units, and authorizing defoliant testing. By late 1963, U.S. military personnel in South Vietnam expanded from approximately 900 to over 16,300—an escalation that took place well before Diem’s death.[^c3-2]',
      'In 1962, South Vietnam and U.S. advisors launched the Strategic Hamlet Program, constructing over 8,000 fortified villages designed to isolate rural peasants from Viet Cong influence.[^c3-1] In practice, the program bred intense resentment: peasants were forcibly relocated from ancestral farmlands and burial grounds, and corruption among local administrators undermined loyalty to Saigon. In January 1963, the Battle of Ap Bac shattered American illusions about ARVN operational readiness: despite an 8-to-1 numerical advantage, armored personnel carriers, and close air support, an ARVN force was defeated by a 350-man Viet Cong battalion.[^c3-2]',
      'In May 1963, government troops opened fire on Buddhist demonstrators in Hue, sparking the Buddhist Crisis. On June 11, monk Thich Quang Duc publicly immolated himself in Saigon in protest; Malcolm Browne’s photograph galvanized world public opinion. When Diem’s brother and security chief, Ngo Dinh Nhu, raided sacred pagodas nationwide in August, Washington sent State Department Cable 243, drafted by Roger Hilsman, signaling to South Vietnamese generals that the U.S. would support a new government if Diem failed to remove Nhu.[^c3-3] On November 1–2, 1963, ARVN generals overthrew and executed Diem and Nhu with tacit U.S. knowledge; three weeks later, Kennedy himself was assassinated in Dallas.',
    ],
    keyEvents: [
      { date: 'Nov 1961', title: 'NSAM 111 (Advisory Surge)', detail: 'Kennedy authorizes expansion of U.S. advisors, aviation units, and combat support.' },
      { date: 'Feb 1962', title: 'MACV Established', detail: 'Military Assistance Command, Vietnam established under Gen. Paul Harkins.' },
      { date: 'March 1962', title: 'Strategic Hamlet Program Launched', detail: 'Nationwide relocation of rural villagers into fortified compounds begins.' },
      { date: 'Jan 2, 1963', title: 'Battle of Ap Bac', detail: 'Viet Cong battalion defeats superior ARVN force, exposing command dysfunction.' },
      { date: 'June 11, 1963', title: 'Self-Immolation of Thich Quang Duc', detail: 'Buddhist monk’s sacrifice in Saigon sparks global outrage against Diem’s religious repression.' },
      { date: 'Aug 24, 1963', title: 'State Department Cable 243', detail: 'Washington signals to South Vietnamese generals that it will not oppose Diem’s removal.' },
      { date: 'Nov 1–2, 1963', title: 'Saigon Coup & Death of Diem', detail: 'ARVN military junta overthrows and executes Diem and Nhu; U.S. inherits ownership of the political vacuum.' },
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
    title: 'The Advisory Trap: Kennedy’s Escalation Curve',
    prompt:
      'Trace the progression: from 900 military advisors in 1960 to over 16,000 in 1963, and explore how the definition of "advisory support" transformed into direct combat involvement.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['cable-243-diem']],
  nextQuestion: {
    question: 'What actually occurred in the Gulf of Tonkin in August 1964?',
    framing:
      'President Lyndon Johnson told the nation that American destroyers had been attacked without provocation in international waters. What do declassified naval logs and NSA intelligence records reveal about August 2 and August 4?',
  },
  citations: [
    CITATION_REGISTRY['c3-1'],
    CITATION_REGISTRY['c3-2'],
    CITATION_REGISTRY['c3-3'],
  ],
};

export default chapter;
