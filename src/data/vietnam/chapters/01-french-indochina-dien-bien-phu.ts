import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'french-indochina-dien-bien-phu',
  number: 1,
  timeframe: '1945–1954',
  title: 'French Indochina & Dien Bien Phu',
  subtitle: 'From anti-colonial revolution to Cold War battleground',
  summary:
    'Following World War II, Ho Chi Minh declared Vietnamese independence, but France sought to restore its colonial empire. As the Cold War intensified in Asia, Washington transformed from an ambivalent spectator into France’s primary financier, culminating in the catastrophic French defeat at Dien Bien Phu and the temporary partition of Vietnam at Geneva.',
  isLandmark: true,
  landmarkMoment: {
    bannerTitle: 'The Cataclysmic Siege at Dien Bien Phu',
    dateline: 'March 13 – May 7, 1954',
    location: 'Muong Thanh Valley Basin, Northwestern Vietnam',
    quote: 'Navarre’s entrenched valley bastion was systematically overwhelmed by artillery assembled on surrounding heights, turning the French stronghold into an untenable siege position.',
    quoteSpeaker: 'Bernard B. Fall',
    quoteContext: 'Historical synthesis from Hell in a Very Small Place (1966)',
  },
  whatHappened: {
    narrative: [
      'On September 2, 1945, in Hanoi’s Ba Dinh Square, Ho Chi Minh proclaimed the establishment of the Democratic Republic of Vietnam (DRV), quoting directly from the American Declaration of Independence. French colonial authorities, determined to reassert sovereignty after wartime Japanese occupation, launched a military campaign to regain control, driving Ho’s Viet Minh into the northern mountains and initiating the First Indochina War in late 1946.',
      'Between 1945 and 1949, Washington largely viewed the conflict as a regional European colonial war. However, the communist victory in China in 1949 and the outbreak of the Korean War in 1950 fundamentally altered American strategic calculations. Reframing the Viet Minh not as nationalist insurgents but as the vanguard of Sino-Soviet expansion in Southeast Asia, President Truman authorized direct military aid. By 1954, the United States was underwriting roughly 78 to 80 percent of France’s war expenditures—having committed nearly $2 billion[^c1-1]—yet Washington exercised virtually no command authority over French battlefield strategy.',
      'In late 1953, French Commander Henri Navarre established a fortified base in the remote valley basin of Dien Bien Phu. Navarre’s operational premise was that superior French airpower, armor, and artillery in the valley would lure the Viet Minh into open ground and destroy them. French planners assumed the surrounding ring of jungle-covered mountains was impassable to heavy enemy artillery. Instead, General Vo Nguyen Giap mobilized over 250,000 civilian porters to dismantle heavy howitzers and haul them up the reverse slopes of the mountains, concealing them in dug-in caves overlooking the French garrison.[^c1-2] After a 55-day siege in which French airstrips were severed, the fortress fell on May 7, 1954, on the eve of the Geneva Conference.[^c1-3]',
    ],
    keyEvents: [
      { date: 'Sept 2, 1945', title: 'DRV Declaration of Independence', detail: 'Ho Chi Minh proclaims Vietnamese independence in Hanoi, appealing to the Atlantic Charter.' },
      { date: 'Dec 19, 1946', title: 'Outbreak of First Indochina War', detail: 'Clashes in Haiphong and Hanoi force the Viet Minh into northern mountain redoubts.' },
      { date: 'Jan–Feb 1950', title: 'Sino-Soviet Recognition & U.S. Aid', detail: 'Moscow and Beijing recognize the DRV; Truman approves initial direct military financing for France.' },
      { date: 'Nov 1953', title: 'Navarre Fortifies Dien Bien Phu', detail: 'French paratroopers occupy the remote valley basin to establish a fortified operational base.' },
      { date: 'March 13 – May 7, 1954', title: 'Siege & Fall of Dien Bien Phu', detail: 'Giap’s mountain artillery destroys French airfields and strongpoints, forcing garrison surrender.' },
    ],
  },
  washington: {
    keyActors: ['Harry S. Truman', 'Dwight D. Eisenhower', 'Dean Acheson', 'John Foster Dulles'],
    strategicObjective:
      'Contain communist expansion in Southeast Asia while preserving France as a vital NATO ally in European reconstruction.',
    underlyingAssumptions: [
      'The Domino Theory: Eisenhower argued that if Indochina fell to communism, neighboring nations—Thailand, Burma, Malaya, and Indonesia—would inevitably topple.',
      'Ho Chi Minh was viewed fundamentally as an agent of Moscow and Beijing rather than a nationalist revolutionary.',
      'Heavy American financial underwriting could secure a French military victory without requiring direct U.S. combat troop deployment.',
    ],
    internalDebates: [
      'Operation Vulture: Dulles and Admiral Radford advocated direct U.S. carrier airstrikes to relieve Dien Bien Phu.',
      'Eisenhower and Army Chief of Staff Matthew Ridgway resisted unilateral intervention without British support and congressional sanction, mindful of the Korean War experience.',
    ],
    homeFrontConstraints: [
      'Post-Korean War exhaustion: strong public and congressional reluctance to commit American ground divisions to another land conflict in Asia.',
      'McCarthyite domestic anti-communist pressure: political vulnerability to accusations of "losing" Southeast Asia as Truman was blamed for "losing" China.',
    ],
    primaryDocumentRef: 'nsc-68-indochina',
  },
  hanoi: {
    keyActors: ['Ho Chi Minh', 'Vo Nguyen Giap', 'Truong Chinh', 'Pham Van Dong'],
    strategicObjective:
      'Expel French colonial forces, achieve recognized national sovereignty, and establish an independent socialist Vietnam.',
    underlyingAssumptions: [
      'A protracted people’s war (Chien tranh nhan dan) would gradually exhaust French political will and domestic economic endurance.',
      'Chinese heavy artillery, anti-aircraft guns, and logistical assistance (secured after 1950) could neutralize French technological superiority.',
      'French domestic instability and mounting casualty lists would make an open-ended colonial war politically untenable in Paris.',
    ],
    internalDebates: [
      'Tactical debate at Dien Bien Phu: whether to mount a rapid "strike fast, win fast" human assault (advocated by Chinese advisers) or Giap’s deliberate "steady advance, steady strike" siege method.',
      'Tensions surrounding early radical land reform measures overseen by Truong Chinh in northern liberated zones.',
    ],
    homeFrontConstraints: [
      'Severe economic poverty and food scarcity while mobilizing a quarter-million civilian porters across trackless mountain trails under French aerial bombing.',
      'Heavy material dependence on Chinese munitions and Soviet military supplies.',
    ],
    primaryDocumentRef: 'ho-truman-1946',
  },
  causalChain: {
    decision: {
      actor: 'Eisenhower Administration',
      action: 'Declined direct military airstrikes to rescue Dien Bien Phu, but resolved to replace France as the external guarantor of an anti-communist zone in southern Vietnam.',
      date: 'May–July 1954',
    },
    assumption: {
      premise: 'With French colonial presence removed, the United States could build a durable, independent, non-communist ally in the South.',
      blindSpot: 'Underestimated the broad revolutionary prestige Ho Chi Minh and the Viet Minh had earned through eight years of anti-colonial victory.',
    },
    result: {
      immediate: 'The Geneva Accords temporarily partitioned Vietnam at the 17th parallel pending nationwide elections scheduled for July 1956.',
      counterAction: 'Washington organized the SEATO alliance and sponsored Ngo Dinh Diem in Saigon to prevent communist takeover.',
    },
    unintendedConsequence:
      'The United States inherited the external burden of sustaining an untested, politically fragmented southern regime without having resolved the underlying nationalist conflict.',
    nextDecision:
      'How would Washington and the Diem regime handle the Geneva mandate for nationwide elections in 1956?',
  },
  interactiveModule: {
    id: 'dien-bien-phu-map',
    type: 'dien-bien-phu-map',
    title: 'Battlefield Geometry: The Trap at Dien Bien Phu',
    prompt:
      'Explore the topographic terrain: inspect why French commanders believed the valley basin was defensible, and how Giap’s reverse-slope mountain artillery severed the airstrip.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['ho-truman-1946'], PRIMARY_DOCUMENTS['nsc-68-indochina']],
  nextQuestion: {
    question: 'Why did the temporary partition at the 17th parallel become permanent?',
    framing:
      'The 1954 Geneva declaration explicitly noted that the 17th parallel was provisional and not a territorial boundary. What combination of Cold War pressures, domestic politics, and regional decisions prevented reunification elections in 1956?',
  },
  citations: [
    CITATION_REGISTRY['c1-1'],
    CITATION_REGISTRY['c1-2'],
    CITATION_REGISTRY['c1-3'],
  ],
};

export default chapter;
