import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'geneva-south-vietnam',
  number: 2,
  timeframe: '1954–1960',
  leadImageId: 'diem-eisenhower-1957',
  galleryImageIds: ['passage-to-freedom-1954'],
  title: 'Geneva splits Vietnam in two',
  subtitle: 'The 17th parallel, Ngo Dinh Diem, and the start of the war in the South',
  summary:
    'The 1954 Geneva Accords divided Vietnam at the 17th parallel until nationwide elections in 1956. Those elections never happened. Ngo Dinh Diem took power in Saigon and refused them, the Cold War powers did not push, the North was busy rebuilding, and nobody enforced the deal. Diem’s land policies and his campaigns against communists angered many people in the countryside. With Hanoi’s backing, his opponents formed the National Liberation Front (NLF).',
  featuredDocument: {
    citationId: 'Q026',
    kind: 'Declaration',
    stamp: 'FRUS 1952–1954, Vol. XIII',
    header: [['From', 'The Geneva Conference'], ['Title', 'Final Declaration, paragraph 6'], ['Date', 'July 21, 1954']],
    note: 'The conference called the line at the 17th parallel temporary, not a border. The 1956 elections that were supposed to reunite Vietnam never took place.',
  },
  whatHappened: {
    narrative: [
      'The Geneva Conference ended in July 1954 with a ceasefire that split Vietnam at the 17th parallel. The split was supposed to be temporary. For 300 days, people could cross the line freely. With help from U.S. Navy ships, about 890,000 people moved south in Operation Passage to Freedom. Most were Catholics, government workers and families who opposed the communists. About 100,000 Viet Minh fighters from the South went north.[^c2-2]',
      'In Saigon, Ngo Dinh Diem became prime minister under Emperor Bao Dai. Diem was a strict Catholic and a nationalist. With American money and advisers, he defeated the Binh Xuyen crime syndicate and the armed religious sects. In 1955 he held a rigged vote that removed Bao Dai, and he declared the Republic of Vietnam. Geneva had set July 1956 as the deadline for elections across the whole country. When the deadline came, Diem refused to talk with Hanoi. He said a fair vote was impossible in the communist North. President Eisenhower later wrote in his memoirs that Ho Chi Minh would probably have won about 80 percent of the vote.[^c2-2]',
      'Diem’s refusal was not the only reason the split became permanent. Geneva was a compromise among many countries, and neither the United States nor the Soviet Union was willing to enforce a vote. Hanoi was busy rebuilding its economy and carrying out a harsh land reform campaign from 1953 to 1956. No neutral body existed to run a nationwide election. In the South, Diem gave land that the Viet Minh had handed out back to the old landlords, and many villagers were furious. His campaign against communists wiped out much of their network in the South. In January 1959, Hanoi’s leaders passed Resolution 15, which approved armed struggle in the South.[^c2-1] In December 1960, they created the National Liberation Front, which Americans called the Viet Cong.[^c2-3]'
    ],
    keyEvents: [
      { date: 'July 21, 1954', title: 'The Geneva Accords', detail: 'A ceasefire is signed. Vietnam is split at the 17th parallel for now, with elections due in 1956.' },
      { date: '1954–1955', title: 'Operation Passage to Freedom', detail: 'Nearly 900,000 refugees move from North to South. About 100,000 southern fighters move North.' },
      { date: 'Oct 26, 1955', title: 'Diem declares the Republic of Vietnam', detail: 'Ngo Dinh Diem becomes president after a rigged vote removes Bao Dai.' },
      { date: 'July 1956', title: 'The 1956 elections never happen', detail: 'The vote is never held. The temporary line hardens into a Cold War border.' },
      { date: 'Jan 1959', title: 'Hanoi approves armed struggle', detail: 'The Party approves armed revolution in the South. Group 559 starts building the Ho Chi Minh Trail.' },
      { date: 'Dec 20, 1960', title: 'The National Liberation Front forms', detail: 'Rebel groups in the South unite as the NLF in Tay Ninh province.' },
    ],
  },
  washington: {
    keyActors: ['Dwight D. Eisenhower', 'John Foster Dulles', 'Edward Lansdale', 'Ngo Dinh Diem'],
    strategicObjective:
      'Construct a stable, sovereign, non-communist nation-state in South Vietnam through nation-building and economic assistance, avoiding direct U.S. ground combat.',
    underlyingAssumptions: [
      'American financial aid and military training via MAAG (Military Assistance Advisory Group) could turn South Vietnam into a self-sustaining regional bulwark.',
      'A divided Vietnam was preferable to a unified nation under Ho Chi Minh, which Washington viewed as a net loss in the global Cold War.',
      'Ngo Dinh Diem was the only viable anti-communist, anti-French nationalist capable of consolidating authority in Saigon.',
    ],
    internalDebates: [
      'Ambassador J. Lawton Collins warned in 1955 that Diem’s nepotism and narrow political base would cause long-term instability, advising Washington to seek an alternative.',
      'CIA operative Edward Lansdale and Secretary of State Dulles persuaded Eisenhower to override Collins, committing the administration firmly to Diem.',
    ],
    homeFrontConstraints: [
      'Eisenhower’s “New Look” national security policy prioritized fiscal restraint, reliance on nuclear deterrence, and regional alliances, strictly avoiding major Asian ground troop commitments.',
    ],
    primaryDocumentRef: 'resolution-15-1959',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Ho Chi Minh', 'Truong Chinh', 'Pham Van Dong'],
    strategicObjective:
      'Consolidate the northern socialist base, heal war devastation, and pursue national reunification.',
    underlyingAssumptions: [
      'Hanoi initially anticipated that the 1954 Geneva Accords and diplomatic pressure would result in nationwide elections in 1956.',
      'Soviet and Chinese patrons urged moderation and peaceful political struggle, seeking to avoid provoking direct American military intervention.',
    ],
    internalDebates: [
      'North-First vs. South-First: Truong Chinh prioritized northern economic reconstruction and land reform; Le Duan, having led the southern resistance, argued that inaction while Diem hunted southern cadres was fatal.',
      'Le Duan’s faction successfully pushed through Resolution 15 in 1959, authorizing armed struggle and the reactivation of southern networks.',
    ],
    homeFrontConstraints: [
      'Severe rural disruption caused by the 1953–1956 northern land reform campaign, which resulted in widespread excesses, rural unrest in Nghe An, and public apologies from Ho Chi Minh.',
    ],
    primaryDocumentRef: 'resolution-15-1959',
  },
  causalChain: {
    decision: {
      actor: 'Diem Administration & Washington / Hanoi Politburo',
      action: 'Diem and Washington bypassed the 1956 elections to build an anti-communist state, while Hanoi authorized armed struggle in 1959 to preserve southern insurgent networks.',
      date: '1955–1959',
    },
    assumption: {
      premise: 'Washington assumed economic and police assistance could build a durable southern state; Hanoi assumed southern guerrilla warfare could topple Diem without triggering direct U.S. combat intervention.',
      blindSpot: 'Diem’s land reversal and religious favoritism generated deep rural resentment, while Washington and Hanoi both underestimated each other’s willingness to escalate.',
    },
    result: {
      immediate: 'Rural assassinations of Saigon village officials increased, security deteriorated, and the NLF formed in December 1960.',
      counterAction: 'Incoming President John F. Kennedy dramatically surged military advisors, special forces, and helicopter units to South Vietnam.',
    },
    unintendedConsequence:
      'An unresolved post-colonial political struggle transformed into a militarized insurgency and counterinsurgency contest.',
    nextDecision:
      'How would the Kennedy administration respond to an insurgency that modern military technology seemed unable to contain?',
  },
  interactiveModule: {
    id: 'geneva-division-map',
    type: 'geneva-division-map',
    title: 'The 17th parallel',
    prompt:
      'Look at the line that divided Vietnam: the DMZ, the Ben Hai River, the 300 days when people could move north or south, and why the line stayed.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['resolution-15-1959']],
  nextQuestion: {
    question: 'How did sending advisers lead to backing a coup?',
    framing:
      'President Kennedy raised the number of U.S. advisers from 900 to more than 16,000 to prop up Diem. So why did Washington signal that it would accept Diem’s overthrow in November 1963?',
  },
  citations: [
    CITATION_REGISTRY['c2-1'],
    CITATION_REGISTRY['c2-2'],
    CITATION_REGISTRY['c2-3'],
  ],
};

export default chapter;
