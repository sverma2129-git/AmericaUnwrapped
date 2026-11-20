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
  subtitle: 'The Geneva deal promised elections in 1956. Ngo Dinh Diem refused to hold them, and the South slid toward civil war.',
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
    sections: [
      { date: '1954–1955', heading: 'Vietnam splits, and nearly a million people move south' },
      { date: '1955–1956', heading: 'Diem takes power and skips the vote' },
      { date: '1956–1960', heading: 'The South turns against Diem' },
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
      'Build a stable, independent, non-communist South Vietnam with money and advisers, and keep American troops out of combat.',
    underlyingAssumptions: [
      'Aid and training from the Military Assistance Advisory Group could make South Vietnam able to defend itself.',
      'A divided Vietnam was better than a united one under Ho Chi Minh, which Washington counted as a Cold War loss.',
      'Ngo Dinh Diem was the only nationalist who opposed both the communists and the French and could take charge in Saigon.',
    ],
    internalDebates: [
      'In 1955 Ambassador J. Lawton Collins warned that Diem’s favoritism toward his family and his narrow support would bring trouble. He urged Washington to find someone else.',
      'CIA officer Edward Lansdale and Secretary of State Dulles persuaded Eisenhower to stick with Diem.',
    ],
    homeFrontConstraints: [
      'Eisenhower’s New Look national security policy prioritized fiscal restraint, reliance on nuclear deterrence, and regional alliances, strictly avoiding major Asian ground troop commitments.',
    ],
    primaryDocumentRef: 'resolution-15-1959',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Ho Chi Minh', 'Truong Chinh', 'Pham Van Dong'],
    strategicObjective:
      'Rebuild the North after the war, strengthen socialism there and reunite the country.',
    underlyingAssumptions: [
      'At first Hanoi expected the Geneva Accords and diplomatic pressure to deliver nationwide elections in 1956.',
      'The Soviet Union and China urged patience and political struggle, because they did not want to draw American troops in.',
    ],
    internalDebates: [
      'Truong Chinh wanted to put the North’s economy and land reform first. Le Duan, who had led the fight in the South, said that waiting while Diem hunted down southern communists would destroy them.',
      'Le Duan’s side won in 1959 with Resolution 15, which approved armed struggle in the South.',
    ],
    homeFrontConstraints: [
      'Severe rural disruption caused by the 1953–1956 northern land reform campaign, which resulted in widespread excesses, rural unrest in Nghe An, and public apologies from Ho Chi Minh.',
    ],
    primaryDocumentRef: 'resolution-15-1959',
  },
  causalChain: {
    decision: {
      actor: 'Ngo Dinh Diem and Washington; Hanoi’s leaders',
      action: 'Diem skipped the 1956 elections and, with American money, built an anti-communist state. In 1959 Hanoi approved armed struggle in the South.',
      date: '1955–1959',
    },
    assumption: {
      premise: 'Washington thought aid and police training would make Diem’s government strong. Hanoi thought guerrillas could bring Diem down without drawing in American troops.',
      blindSpot: 'Diem’s land policy and his favoritism toward Catholics turned villagers against him. Each side also misjudged how far the other would go.',
    },
    result: {
      immediate: 'Guerrillas killed more of Diem’s village officials, the countryside grew less safe, and the NLF formed in December 1960.',
      counterAction: 'John F. Kennedy took office in 1961 and sent many more military advisers, Special Forces and helicopter units.',
    },
    unintendedConsequence:
      'An argument over who should rule Vietnam became a shooting war in the villages.',
    nextDecision:
      'How would Kennedy fight guerrillas that American weapons could not easily find?',
  },
  interactiveModule: {
    id: 'geneva-division-map',
    type: 'geneva-division-map',
    title: 'The 17th parallel',
    prompt:
      'Explore the line that split Vietnam, from the Ben Hai River to the 300 days when anyone could cross it. Then see why it stayed.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['resolution-15-1959']],
  nextQuestion: {
    question: 'Why did Washington turn against Diem?',
    framing:
      'John F. Kennedy sent more than 16,000 advisers to keep Diem in power. By November 1963, Washington was ready to see him go.',
  },
  citations: [
    CITATION_REGISTRY['c2-1'],
    CITATION_REGISTRY['c2-2'],
    CITATION_REGISTRY['c2-3'],
  ],
};

export default chapter;
