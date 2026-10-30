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
  layout: 'layered',
  story: {
    beats: [
      {
        id: 'independence',
        kicker: '1945–1946',
        headline: 'Ho Chi Minh declares independence, and asks America for help',
        body: [
          'On September 2, 1945, Ho Chi Minh proclaimed an independent Vietnam in Hanoi, quoting the American Declaration of Independence. France wanted its colony back, and by late 1946 the two were at war.',
          'Ho wrote to President Truman more than once asking for support. Truman, focused on rebuilding France as a European ally, never answered.',
        ],
        visual: { kind: 'quote', citationId: 'Q001' },
      },
      {
        id: 'cold-war',
        kicker: '1949–1954',
        headline: 'China and Korea turn a colonial war into a Cold War front',
        body: [
          'The communist victory in China in 1949 and the Korean War in 1950 changed how Washington saw Vietnam. Ho was no longer a nationalist fighting a colonial power; he was the leading edge of Soviet and Chinese expansion.',
          'So the United States started paying for France’s war, without getting any say in how France fought it.[^c1-1]',
        ],
        visual: {
          kind: 'share',
          title: 'By 1954, Americans were paying for most of France’s war',
          label: 'United States',
          remainderLabel: 'France',
          low: 78,
          high: 80,
          note: 'Share of French war costs in 1954. U.S. aid totaled nearly $2 billion.',
          citationId: 'c1-1',
        },
        checkId: 'c1-q1',
      },
      {
        id: 'siege',
        kicker: 'November 1953 – May 1954',
        headline: 'Navarre’s bet: a fortress in a valley',
        body: [
          'French commander Henri Navarre wanted a decisive battle. He picked a remote valley near the Laos border, Dien Bien Phu, and dared the Viet Minh to attack it.',
        ],
        visual: {
          kind: 'siege',
          question: 'Why did a fortress built to win a battle become a trap?',
          instruction: 'Scroll to follow the 55-day siege.',
          takeaway:
            'The French held the valley, but Giap held the hills around it. Once the guns closed the airstrip, the garrison could not be resupplied or rescued.',
          caption: 'Schematic map. Positions are approximate and not to scale.',
          citationId: 'c1-2',
          steps: [
            {
              date: 'November 1953',
              headline: 'A base with no road in',
              state: 'valley',
              body: 'About 10,800 French troops dug into a ring of strongpoints around an airstrip. There were no roads to French territory, so every bullet, meal and replacement had to come in by air.',
            },
            {
              date: 'Winter 1953–54',
              headline: 'The hills nobody thought could hold guns',
              state: 'guns',
              body: 'French planners assumed heavy artillery could never be hauled through the jungle mountains. Giap mobilized over 250,000 civilian porters who took howitzers apart, carried them up the far side of the hills, and hid them in dug-in positions looking down on the valley.[^c1-2]',
            },
            {
              date: 'March 13, 1954',
              headline: 'The first strongpoints fall',
              state: 'outposts',
              body: 'Giap opened with a massed bombardment the French had said was impossible. The northern outposts, Beatrice and then Gabrielle, fell within days. The French artillery commander, unable to silence the guns, took his own life.[^c1-2]',
            },
            {
              date: 'Late March – April 1954',
              headline: 'Trenches close in and the airstrip dies',
              state: 'ring',
              body: 'Viet Minh soldiers dug trenches that crept closer to the French lines every night. Shelling closed the airstrip, so supplies could only be dropped by parachute, and many landed on the wrong side of the lines.[^c1-2]',
            },
            {
              date: 'May 7, 1954',
              headline: 'Fifty-five days',
              state: 'fall',
              body: 'With bunkers flooding in the monsoon rains, the central position was overrun on May 7, just as diplomats at Geneva turned to Indochina. The isolated southern outpost, Isabelle, fell the next day.[^c1-3]',
            },
          ],
        },
        checkId: 'c1-q2',
      },
      {
        id: 'vulture',
        kicker: 'April 1954',
        headline: 'Washington’s choice: bomb, or stay out?',
        body: [
          'As the siege tightened, France asked for American air strikes. Inside the Eisenhower administration, the request split the people around the president.[^c1-1]',
        ],
        visual: {
          kind: 'debate',
          question: 'Should the U.S. bomb the hills around Dien Bien Phu?',
          sides: [
            {
              stance: 'Strike',
              who: 'Secretary of State John Foster Dulles, Admiral Arthur Radford',
              argument: 'Carrier air strikes (Operation Vulture) could break the siege and keep Indochina from falling to communism.',
            },
            {
              stance: 'Not alone',
              who: 'President Eisenhower, Army Chief of Staff Matthew Ridgway',
              argument: 'Fresh from Korea, they would not act without British allies and approval from Congress.',
            },
          ],
          outcome: 'Britain said no, congressional leaders said no, and the U.S. stayed out.',
        },
        checkId: 'c1-q3',
      },
      {
        id: 'aftermath',
        kicker: 'Summer 1954',
        headline: 'What France lost, America inherited',
        body: [
          'At Geneva, Vietnam was split at the 17th parallel, supposedly until nationwide elections in 1956. Washington decided not to rescue France, but to replace it.',
        ],
        visual: { kind: 'consequence' },
      },
    ],
  },
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
