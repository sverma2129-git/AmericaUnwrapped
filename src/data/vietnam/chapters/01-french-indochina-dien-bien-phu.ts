import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'french-indochina-dien-bien-phu',
  number: 1,
  timeframe: '1945–1954',
  leadImageId: 'ho-telegram-1946',
  title: 'Dien Bien Phu and the end of French rule',
  subtitle: 'America paid for most of France’s war in Indochina. In 1954 France lost it anyway.',
  summary:
    'After World War II, Ho Chi Minh declared Vietnam independent, but France wanted its colony back. As the Cold War spread to Asia, the United States went from watching to paying for most of France’s war. France lost at Dien Bien Phu in 1954, and the Geneva talks split Vietnam in two for what was meant to be a short time.',
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
        headline: 'General Navarre builds a fortress in a valley',
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
        headline: 'Eisenhower weighs an air strike',
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
        imageId: 'geneva-conference-1954',
        moreImageIds: ['dien-bien-phu-wounded-1954'],
        kicker: 'Summer 1954',
        headline: 'France leaves and America steps in',
        body: [
          'At Geneva, Vietnam was split at the 17th parallel, supposedly until nationwide elections in 1956. Washington decided not to rescue France, but to replace it.',
        ],
        visual: { kind: 'consequence' },
      },
    ],
  },
  landmarkMoment: {
    bannerTitle: 'The siege of Dien Bien Phu',
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
      { date: 'Sept 2, 1945', title: 'Ho Chi Minh declares independence', detail: 'In Hanoi, Ho Chi Minh declares Vietnam independent and appeals to the Atlantic Charter.' },
      { date: 'Dec 19, 1946', title: 'The First Indochina War begins', detail: 'Fighting in Haiphong and Hanoi drives the Viet Minh back to bases in the northern mountains.' },
      { date: 'Jan–Feb 1950', title: 'China and the Soviets back Hanoi', detail: 'Moscow and Beijing recognize Ho’s government. Truman approves the first direct military aid for France.' },
      { date: 'Nov 1953', title: 'Navarre builds a base at Dien Bien Phu', detail: 'French paratroopers take the remote valley and start building a fortified base.' },
      { date: 'March 13 – May 7, 1954', title: 'The siege and fall of Dien Bien Phu', detail: 'Giap’s guns in the hills wreck the French airstrips and strongpoints, and the garrison surrenders.' },
    ],
  },
  washington: {
    keyActors: ['Harry S. Truman', 'Dwight D. Eisenhower', 'Dean Acheson', 'John Foster Dulles'],
    strategicObjective:
      'Stop communism from spreading in Southeast Asia, and keep France, a NATO ally, strong enough to help rebuild Europe.',
    underlyingAssumptions: [
      'Eisenhower argued that if Indochina fell to communism, Thailand, Burma, Malaya and Indonesia would follow, one after another.',
      'Washington saw Ho Chi Minh as an agent of Moscow and Beijing more than as a nationalist.',
      'American money could buy a French victory, so no U.S. troops would be needed.',
    ],
    internalDebates: [
      'Secretary of State Dulles and Admiral Radford wanted carrier air strikes to save Dien Bien Phu, a plan called Operation Vulture.',
      'Eisenhower and Army Chief of Staff Matthew Ridgway refused to act without Britain and Congress. Both remembered Korea.',
    ],
    homeFrontConstraints: [
      'Post-Korean War exhaustion: strong public and congressional reluctance to commit American ground divisions to another land conflict in Asia.',
      'McCarthyite domestic anti-communist pressure: political vulnerability to accusations that it had lost Southeast Asia, as Truman had been blamed for losing China.',
    ],
    primaryDocumentRef: 'nsc-68-indochina',
  },
  hanoi: {
    keyActors: ['Ho Chi Minh', 'Vo Nguyen Giap', 'Truong Chinh', 'Pham Van Dong'],
    strategicObjective:
      'Drive out the French, win recognition as an independent country and build a socialist Vietnam.',
    underlyingAssumptions: [
      'A long people’s war would wear down France’s will to fight and drain its economy.',
      'Chinese artillery, anti-aircraft guns and supplies, which arrived after 1950, could make up for France’s better weapons.',
      'As French casualty lists grew, voters in Paris would turn against the war.',
    ],
    internalDebates: [
      'At Dien Bien Phu, Chinese advisers urged a fast, all-out assault. Giap chose a slower siege.',
      'Truong Chinh’s harsh early land reform in the areas the Viet Minh controlled caused tension inside the movement.',
    ],
    homeFrontConstraints: [
      'Severe economic poverty and food scarcity while mobilizing a quarter-million civilian porters across trackless mountain trails under French aerial bombing.',
      'Heavy material dependence on Chinese munitions and Soviet military supplies.',
    ],
    primaryDocumentRef: 'ho-truman-1946',
  },
  causalChain: {
    decision: {
      actor: 'President Eisenhower',
      action: 'He refused to send bombers to save the French at Dien Bien Phu. Then he decided the United States would take France’s place in the south.',
      date: 'May–July 1954',
    },
    assumption: {
      premise: 'With France gone, Washington thought it could build a strong, independent, non-communist country in the south.',
      blindSpot: 'Ho Chi Minh had just beaten a European army. Millions of Vietnamese saw him as the man who won their independence.',
    },
    result: {
      immediate: 'The Geneva Accords split Vietnam at the 17th parallel until elections, which were set for July 1956.',
      counterAction: 'Washington set up the SEATO alliance and backed Ngo Dinh Diem to run the south.',
    },
    unintendedConsequence:
      'The United States took on the job of propping up a new, untested government in Saigon, while the fight over who should rule Vietnam stayed unsettled.',
    nextDecision:
      'Would Diem and Washington allow the 1956 elections?',
  },
  interactiveModule: {
    id: 'dien-bien-phu-map',
    type: 'dien-bien-phu-map',
    title: 'The trap at Dien Bien Phu',
    prompt:
      'Move through the siege to see why French commanders felt safe in the valley, and what happened once Giap’s guns in the hills could reach the airstrip.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['ho-truman-1946'], PRIMARY_DOCUMENTS['nsc-68-indochina']],
  nextQuestion: {
    question: 'Why did a temporary line become a border?',
    framing:
      'The Geneva deal called the line at the 17th parallel temporary. Elections in 1956 were supposed to reunite the country, and they never took place.',
  },
  citations: [
    CITATION_REGISTRY['c1-1'],
    CITATION_REGISTRY['c1-2'],
    CITATION_REGISTRY['c1-3'],
  ],
};

export default chapter;
