import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'gulf-of-tonkin',
  number: 4,
  timeframe: '1964',
  leadImageId: 'tonkin-p4-1964',
  title: 'The Gulf of Tonkin',
  subtitle: 'Two nights at sea in August 1964, and the vote in Congress that followed',
  summary:
    'On August 2, 1964, North Vietnamese torpedo boats fought the destroyer USS Maddox in daylight. That clash was real. On August 4, in a storm, U.S. ships reported a second attack. Navy commanders and NSA analysts soon doubted it, but the Johnson administration presented it as a clear attack. Congress passed the Gulf of Tonkin Resolution almost unanimously.',
  isLandmark: true,
  layout: 'layered',
  story: {
    objectives: {
      ah1: [
        'Describe what happened on August 2 and August 4, 1964',
        'Explain what the Gulf of Tonkin Resolution allowed the president to do',
        'Explain how the resolution led to a much larger war in 1965',
      ],
      apush: [
        'Explain the causes and effects of the Gulf of Tonkin Resolution (Topic 8.8)',
        'Analyze how it shaped debates over presidential war power through 1973 (KC-8.1.II.C.ii)',
        'Evaluate two competing explanations of why Washington acted on August 4',
      ],
    },
    beats: [
      {
        id: 'covert',
        kicker: 'January–July 1964',
        headline: 'A secret war along the coast',
        body: [
          'In early 1964, the United States began backing secret raids on North Vietnam’s coast. Under a plan called OPLAN 34A, South Vietnamese commandos struck radar sites and islands.',
          'At the same time, U.S. Navy destroyers sailed the Gulf of Tonkin on spy missions called DeSoto patrols. They recorded North Vietnam’s radio and radar signals. On July 31, commandos shelled Hon Me Island while the destroyer Maddox was offshore. To Hanoi, the raids and the patrols looked like one operation.',
        ],
      },
      {
        id: 'august-2',
        imageId: 'tonkin-track-chart-1964',
        kicker: 'August 2, 1964',
        headline: 'A real fight in daylight',
        body: [
          'On the afternoon of August 2, three North Vietnamese torpedo boats raced toward the Maddox. The American commander on board sent a warning and got ready to fire.[^Q024]',
          'In the fight that followed, planes from the carrier Ticonderoga damaged the boats. The Maddox was hit by a single machine-gun bullet.',
        ],
        visual: { kind: 'quote', citationId: 'Q024' },
      },
      {
        id: 'august-4',
        kicker: 'Night of August 4, 1964',
        headline: 'A night of confusion',
        body: [
          'Two nights later, the Maddox and a second destroyer, the Turner Joy, were back in the gulf. A storm rolled in after dark. Then the radar screens lit up.',
        ],
        visual: {
          kind: 'night',
          question: 'What did Washington know, and when?',
          instruction: 'Scroll through the night and watch both clocks.',
          takeaway:
            'Doubts from the scene reached Washington about ten hours before the president announced air strikes. The commander reported no visual sightings, and the pilot overhead saw no enemy boats.',
          caption:
            'Scenes are illustrations, not plotted data. Gulf time is 11 hours ahead of Washington. The cable and broadcast times are from the records; the first three times are approximate.',
          citationId: 'c4-1',
          steps: [
            {
              localTime: 'Aug 4, 9:30 p.m.',
              washingtonTime: 'Aug 4, 10:30 a.m.',
              scene: 'contacts',
              headline: 'Blips in the storm',
              body: 'In rain and darkness, radar operators on the Maddox saw blips they took for enemy boats. No one on the Maddox actually saw an enemy boat.[^Q013]',
            },
            {
              localTime: 'Aug 4, 10:15 p.m.',
              washingtonTime: 'Aug 4, 11:15 a.m.',
              scene: 'firing',
              headline: 'Firing into the dark',
              body: 'Sonar operators reported torpedoes in the water. Both destroyers fired more than 600 rounds at the radar contacts.',
            },
            {
              localTime: 'Aug 4, 11:00 p.m.',
              washingtonTime: 'Aug 4, 12:00 p.m.',
              scene: 'overhead',
              headline: 'A pilot sees nothing',
              body: 'Navy pilot James Stockdale flew low over the destroyers, looking for the enemy. He saw the ships’ wakes and their gunfire, and nothing else.[^Q021]',
              quoteCitationId: 'Q021',
            },
            {
              localTime: 'Aug 5, 12:27 a.m.',
              washingtonTime: 'Aug 4, 1:27 p.m.',
              scene: 'cable',
              headline: 'The commander has doubts',
              body: 'Captain John Herrick, in command at sea, sent a flash cable. He said many of the reports looked doubtful and asked for a full review before anyone acted.[^Q013]',
              quoteCitationId: 'Q013',
            },
            {
              localTime: 'Aug 5, 10:36 a.m.',
              washingtonTime: 'Aug 4, 11:36 p.m.',
              scene: 'broadcast',
              headline: 'The president goes on TV',
              body: 'About ten hours after Herrick’s cable, President Johnson spoke on national television. He said U.S. ships had been attacked again, and that American planes were already striking back.[^Q027]',
              quoteCitationId: 'Q027',
            },
          ],
        },
        checkId: 'c4-q2',
      },
      {
        id: 'two-nights',
        kicker: 'August 2 vs. August 4',
        headline: 'The two nights compared',
        body: [
          'Historians agree on what happened on August 2. Using records released decades later, they also agree that the August 4 attack most likely never happened.[^c4-2]',
        ],
        visual: {
          kind: 'compare',
          question: 'How do the two nights compare?',
          rowLabels: ['Conditions', 'Evidence at the time', 'What later research found'],
          columns: [
            {
              label: 'August 2',
              verdict: 'Attack confirmed',
              cells: [
                'Afternoon, in daylight.',
                'The Maddox reported torpedo boats closing in and prepared to fire.[^Q024]',
                'Three torpedo boats fought the Maddox; one bullet hit the ship.',
              ],
            },
            {
              label: 'August 4',
              verdict: 'Most likely no attack',
              cells: [
                'Night, in heavy rain and total darkness.',
                'Radar and sonar reports, plus radio intercepts later shown to describe August 2.[^c4-2] The Maddox had no visual sightings.[^Q013]',
                'The NSA’s own historian concluded that no attack took place that night.[^Q005]',
              ],
            },
          ],
          takeaway: 'One clash was real. The second, which led Congress to act, most likely was not.',
          citationId: 'c4-1',
        },
        checkId: 'c4-q1',
      },
      {
        id: 'resolution',
        imageId: 'lbj-tonkin-signing-1964',
        moreImageIds: ['tonkin-resolution-1964'],
        kicker: 'August 4–7, 1964',
        headline: 'Washington acts fast',
        body: [
          'Johnson ordered air strikes on North Vietnamese naval bases, called Operation Pierce Arrow. He was also running for president against Barry Goldwater, who called the administration weak.[^c4-3]',
          'Three days later, Congress passed the Gulf of Tonkin Resolution. It let the president use force to repel attacks and prevent further aggression, without a declaration of war.[^Q006]',
        ],
        visual: {
          kind: 'debate',
          question: 'Should Congress give the president this much power?',
          sides: [
            {
              stance: 'Yes',
              who: 'President Johnson and most of Congress',
              argument: 'Attacks on U.S. ships called for a firm reply, and a united Congress would show Hanoi that America meant it.',
            },
            {
              stance: 'No',
              who: 'Senators Wayne Morse and Ernest Gruening',
              argument: 'The resolution handed Congress’s war power to the president, based on reports nobody had checked.',
            },
          ],
          outcome: 'It passed 416–0 in the House and 88–2 in the Senate. Only Morse and Gruening voted no.',
        },
        checkId: 'c4-q3',
      },
      {
        id: 'blank-check',
        kicker: '1965–1973',
        headline: 'Congress hands over its war power, then takes it back',
        body: [
          'The resolution did not declare war, but it worked like one. When Viet Cong forces attacked U.S. barracks at Pleiku in February 1965, Johnson already had the power to escalate. Within weeks, steady bombing began and U.S. combat troops landed.',
          'Years later, Congress tried to take that power back. The War Powers Resolution of 1973 says a president can send troops into combat only after a declaration of war, a specific law, or an attack on the United States.[^Q029] It passed over President Nixon’s veto.',
        ],
        visual: { kind: 'consequence' },
        checkId: 'c4-q4',
      },
    ],
    debate: {
      question: 'Did the Johnson administration mislead Congress, or rush to judgment?',
      agreed: 'Historians now agree that no attack took place on August 4.[^Q005] They disagree about why Washington acted as if one had.',
      positions: [
        {
          label: 'A rush to judgment',
          claim: 'Officials acted fast on confused early reports. The worst errors came from how intelligence was handled, not from a plan to lie.[^c4-1]',
          evidence: [
            'Moise’s reconstruction does not claim that Johnson knowingly lied.[^c4-1]',
            'The NSA study blamed mid-level analysts who filtered intercepts, not top officials.[^c4-2]',
            'McNamara later called it confusion and admitted the attack did not happen.[^Q023]',
          ],
        },
        {
          label: 'An opportunity seized',
          claim: 'The administration wanted broad authority for a wider war and used the incident to get it.[^c4-3]',
          evidence: [
            'The text of a congressional resolution had been drafted months before August 1964.[^c4-3]',
            'Herrick’s doubts reached Washington about ten hours before the president spoke.[^Q013]',
            'Johnson was campaigning against Goldwater, who called the administration weak.[^c4-3]',
          ],
        },
      ],
    },
    evidence: ['Q024', 'Q013', 'Q021', 'Q027', 'Q006', 'Q022', 'Q028', 'Q023', 'Q029'],
    tasks: {
      ah1: [
        {
          kind: 'order',
          prompt: 'Put these events in the order they happened.',
          items: [
            { label: 'Secret commando raids on North Vietnam begin (OPLAN 34A)', date: 'January 1964' },
            { label: 'Commandos shell Hon Me Island', date: 'July 31, 1964' },
            { label: 'Torpedo boats attack the Maddox in daylight', date: 'August 2, 1964' },
            { label: 'Johnson announces air strikes on television', date: 'August 4, 1964' },
            { label: 'Congress passes the Gulf of Tonkin Resolution', date: 'August 7, 1964' },
          ],
        },
        {
          kind: 'explain',
          prompt: 'In your own words, how was August 2 different from August 4?',
          starters: ['On August 2,', 'On August 4,', 'The difference matters because'],
          checklist: [
            'August 2 was a real attack, in daylight',
            'August 4 was reports at night, in a storm, with no sightings',
            'Later research found no attack on August 4',
            'The August 4 reports led to the resolution',
          ],
          model:
            'On August 2, North Vietnamese torpedo boats really did fight the Maddox in daylight. On August 4, the destroyers reported an attack at night in a storm, but nobody saw an enemy boat, and later research found there was no attack. The difference matters because the August 4 reports are what Congress acted on.',
        },
        {
          kind: 'explain',
          prompt: 'Why did Congress give President Johnson so much power in August 1964?',
          starters: ['Congress believed that', 'Most members voted yes because', 'This mattered later because'],
          checklist: [
            'Names the reported attack on U.S. ships',
            'Notes that Congress was not told about the doubts from the scene',
            'Explains that the president could now use force without a declaration of war',
            'Connects the resolution to the larger war in 1965',
          ],
          model:
            'Congress was told that North Vietnam had attacked U.S. ships twice, and members wanted to back the president in a crisis. They were not told that the commander at sea doubted the second attack. The resolution let Johnson use force without declaring war, and he relied on it when he began heavy bombing and sent combat troops in 1965.',
        },
      ],
      apush: [
        {
          kind: 'stimulus',
          citationId: 'Q013',
          intro: 'Read the cable, then answer the questions.',
          questions: [
            {
              id: 'c4-s1',
              question: 'The cable most directly supports which conclusion?',
              options: [
                'Naval officers had confirmed a coordinated torpedo attack on both ships',
                'North Vietnam had admitted attacking the destroyers during the night',
                'The commander at sea doubted that a second attack had taken place',
                'Congress had approved air strikes before the incident was reported',
              ],
              correctIndex: 2,
              rationale:
                'Herrick reports that many contacts and torpedo reports appear doubtful, notes no visual sightings, and asks for a full evaluation before further action.',
            },
            {
              id: 'c4-s2',
              question: 'Which development followed most directly from the reports this cable questioned?',
              options: [
                'Congress gave the president broad power to use force in Southeast Asia',
                'The United States formally declared war on North Vietnam that month',
                'Congress passed the War Powers Resolution to limit the president',
                'The Soviet Union sent warships to defend the North Vietnamese coast',
              ],
              correctIndex: 0,
              rationale:
                'Three days later Congress passed the Gulf of Tonkin Resolution. The United States never declared war, and the War Powers Resolution came nine years later.',
            },
            {
              id: 'c4-s3',
              question: 'Historians most often use this cable as evidence in debates over which question?',
              options: [
                'Whether containment should also have applied to Latin America',
                'Whether the draft fell unfairly on working-class Americans',
                'Whether the Marshall Plan helped stop communism in Western Europe',
                'Whether officials acted on doubtful intelligence in August 1964',
              ],
              correctIndex: 3,
              rationale:
                'The cable shows that doubts existed before the administration acted, which is central to debates over intelligence and presidential war power.',
            },
          ],
        },
        {
          kind: 'saq',
          citationId: 'Q023',
          intro: 'Answer (a), (b), and (c) using the excerpt from a former secretary of defense.',
          parts: [
            {
              label: 'a',
              prompt: 'Briefly describe McNamara’s argument in the excerpt.',
              model:
                'Robert McNamara argues that confusion led officials to judge that U.S. ships were attacked on August 4, 1964, and that later events showed the attack did not happen.',
            },
            {
              label: 'b',
              prompt: 'Briefly explain ONE piece of evidence from August 1964 that supports the argument.',
              model:
                'Captain Herrick’s flash cable that night said many contacts looked doubtful and that the Maddox had no visual sightings. A Navy pilot flying overhead also saw no enemy boats.',
            },
            {
              label: 'c',
              prompt: 'Briefly explain ONE way the Gulf of Tonkin Resolution affected U.S. policy in Vietnam between 1964 and 1975.',
              model:
                'Johnson used the resolution as legal authority to escalate without a declaration of war, starting sustained bombing and sending combat troops in 1965. Concern about that blank check later helped lead Congress to pass the War Powers Resolution in 1973.',
            },
          ],
        },
        {
          kind: 'leq',
          prompt:
            'Evaluate the extent to which the Vietnam War changed the balance of power between the president and Congress over military decisions from 1964 to 1975.',
          reasoning: 'Continuity and change',
          scaffold: [
            { label: 'Thesis', hint: 'Take a position on how much changed, with your line of reasoning in one or two sentences.' },
            { label: 'Context', hint: 'Describe the Cold War pattern before 1964, such as presidents committing forces in Korea without a declaration of war.' },
            { label: 'Evidence of presidential power', hint: 'For example, the Gulf of Tonkin Resolution (1964) and the escalation that followed in 1965.' },
            { label: 'Evidence of congressional pushback', hint: 'For example, the Cooper-Church Amendment (1970), the Case-Church Amendment (1973), and the War Powers Resolution (1973).' },
            { label: 'Complexity', hint: 'Explain what did not change, or why the War Powers Resolution limited presidents less than Congress hoped.' },
          ],
        },
      ],
    },
  },
  landmarkMoment: {
    bannerTitle: 'Two nights in the Gulf of Tonkin',
    dateline: 'August 2 & 4, 1964',
    location: 'Gulf of Tonkin, South China Sea',
    quote:
      'Review of action makes many reported contacts and torpedoes fired appear doubtful. Freak weather effects on radar and overeager sonarmen may have accounted for many reports. No actual visual sightings by Maddox. Suggest complete evaluation before any further action taken.',
    quoteCitationId: 'Q013',
    quoteSpeaker: 'Captain John J. Herrick, CTG 72.1',
    quoteContext: 'Operational Flash Cable DTG 041727Z AUG 64 (FRUS 1964–1968, Vol. I, Doc 117)',
  },
  personalStory: {
    name: 'James Stockdale',
    role: 'Navy commander and fighter pilot, USS Ticonderoga, 1964',
    paragraphs: [
      'On the night of August 4, 1964, Commander James Stockdale was flying an F-8 Crusader low over the Gulf of Tonkin, looking for the enemy torpedo boats the destroyers below were reporting. He circled above them for well over an hour. He saw the destroyers’ wakes and their gunfire, and nothing else.',
      'The next morning he was ordered to lead an airstrike against North Vietnam in retaliation for the attack he had just watched not happen. He flew the mission.',
      'Thirteen months later, in September 1965, Stockdale was shot down over North Vietnam and taken prisoner. Through years of interrogation in Hoa Lo prison, he carried a private fear: that his captors would learn he was the pilot who knew the truth about August 4.',
    ],
    quoteCitationId: 'Q021',
    afterward:
      'Released in February 1973 after seven and a half years as a prisoner of war, Stockdale received the Medal of Honor in 1976. He told the Tonkin story with his wife, Sybil, in their 1984 memoir. She had spent his captivity organizing the families of missing and imprisoned servicemen.',
  },
  featuredDocument: {
    citationId: 'Q013',
    kind: 'Flash telegram',
    stamp: 'FRUS 1964–1968, Vol. I, Doc. 276',
    header: [['From', 'CTG 72.1 (USS Maddox)'], ['To', 'CINCPACFLT'], ['Sent', '041727Z AUG 64']],
    note: 'Captain John Herrick sent this from the Maddox after the reported attack of August 4. CINCPACFLT is the Navy’s Pacific Fleet command. About ten hours later, President Johnson went on television to announce air strikes. The full wording comes from a published reprint; the State Department volume quotes parts of it.',
  },
  whatHappened: {
    narrative: [
      'Throughout 1964, South Vietnam’s military situation worsened rapidly following Diem’s death. The Johnson administration initiated OPLAN 34A—covert South Vietnamese commando raids against North Vietnamese coastal radar installations and islands, coordinated alongside U.S. Navy DeSoto intelligence patrols collecting electronic signals in the Gulf of Tonkin.',
      'On the afternoon of August 2, 1964, three North Vietnamese P-4 torpedo boats engaged the USS Maddox in international waters.[^Q024] Because South Vietnamese patrol boats had shelled radar towers on nearby Hon Me Island two days earlier, North Vietnamese naval commanders viewed the Maddox as an integral element of the operation. In the ensuing firefight, carrier aircraft from the USS Ticonderoga damaged the torpedo boats, while the Maddox was struck by a single 14.5mm machine-gun bullet.',
      'Two nights later, on August 4, in heavy rain and total darkness, the Maddox and the USS Turner Joy reported coming under continuous torpedo attack, firing over 600 rounds at radar contacts. Hours later, task group commander Captain John Herrick cabled Washington urging caution, reporting that many reported contacts and torpedo firings appeared doubtful:[^Q013] “Review of action makes many reported contacts and torpedoes fired appear doubtful...” Subsequent declassified naval track reconstructions by Edwin Moise[^c4-1] and official NSA historical analysis by Robert Hanyok[^c4-2] demonstrated conclusively that intercepted North Vietnamese communications cited as proof of an attack actually described the salvage operations of boats damaged on August 2. Facing an election campaign against conservative Barry Goldwater, President Johnson presented the incident as an unprovoked attack, ordered retaliatory airstrikes (Operation Pierce Arrow), and secured passage of the Gulf of Tonkin Resolution.[^c4-3]',
    ],
    keyEvents: [
      { date: 'Jan 1964', title: 'OPLAN 34A is approved', detail: 'Secret raids by sea along North Vietnam’s coast begin.' },
      { date: 'July 31, 1964', title: 'The raid on Hon Me Island', detail: 'South Vietnamese boats shell radar sites on the northern coast while the Maddox sails offshore.' },
      { date: 'Aug 2, 1964', title: 'The first Tonkin clash', detail: 'Three North Vietnamese torpedo boats fight the USS Maddox in daylight. This one is confirmed.' },
      { date: 'Aug 4, 1964', title: 'The second “attack”', detail: 'Destroyers fire into dark, stormy water at radar and sonar contacts. Captain Herrick sends a cable saying he has doubts.' },
      { date: 'Aug 4, 1964 (Night)', title: 'Operation Pierce Arrow', detail: 'Johnson goes on national television to announce air strikes on North Vietnamese naval bases.' },
      { date: 'Aug 7, 1964', title: 'Congress passes the Tonkin Resolution', detail: 'The vote is 416–0 in the House and 88–2 in the Senate. Morse and Gruening vote no.' },
    ],
  },
  washington: {
    keyActors: ['Lyndon B. Johnson', 'Robert S. McNamara', 'Dean Rusk', 'Adm. U.S. Grant Sharp Jr.', 'Sen. Wayne Morse'],
    strategicObjective:
      'Show Hanoi that America meant business, steady the Saigon government and answer Barry Goldwater’s charge that Johnson was weak.',
    underlyingAssumptions: [
      'A sharp show of American air power would convince Hanoi that backing the southern guerrillas cost too much.',
      'Congress could hand the president broad power to use force, to be held in reserve, without a declaration of war or a long debate.',
    ],
    internalDebates: [
      'McNamara and the military relied on radio intercepts that seemed to confirm an attack, and set aside Captain Herrick’s cables asking them to wait.',
      'Senators Wayne Morse and Ernest Gruening warned that the resolution gave away Congress’s war power on the basis of unchecked claims.[^Q022]',
    ],
    homeFrontConstraints: [
      'The 1964 presidential campaign: Johnson campaigned as the prudent candidate against Goldwater, promising not to send “American boys 9 or 10,000 miles away from home to do what Asian boys ought to be doing for themselves.”[^Q028]',
    ],
    primaryDocumentRef: 'tonkin-resolution-1964',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Ho Chi Minh', 'General Vo Nguyen Giap', 'Nguyen Chi Thanh'],
    strategicObjective:
      'Defend the coast against the OPLAN 34A raids and keep supplies moving to the guerrillas in the South.',
    underlyingAssumptions: [
      'The American spy patrols and the South Vietnamese commando raids were one operation against North Vietnam.',
      'An open American war was coming whether or not Hanoi held back.',
    ],
    internalDebates: [
      'On August 2, local naval commanders attacked because they believed the Maddox was guiding the commando boats.',
      'Hanoi said its boats took part in no fighting on the night of August 4.',
    ],
    homeFrontConstraints: [
      'Hanoi built civil defense networks and dug bomb shelters along the sidewalks to get ready for American bombing.',
    ],
    primaryDocumentRef: 'hanyok-tonkin-nsa',
  },
  causalChain: {
    decision: {
      actor: 'Lyndon Johnson and Congress',
      action: 'Congress passed the Gulf of Tonkin Resolution after the administration presented doubtful reports of a second attack as fact.',
      date: 'August 7, 1964',
    },
    assumption: {
      premise: 'Johnson saw the resolution as a warning to Hanoi and political cover in an election year. He thought it would help prevent a wider war.',
      blindSpot: 'Hanoi read the American air strikes as proof that a full war was coming, and got ready for one.',
    },
    result: {
      immediate: 'Johnson won the November 1964 election in a landslide, holding open-ended legal authority to use force.',
      counterAction: 'Hanoi sent its first full regiments of regular troops south on the Ho Chi Minh Trail.',
    },
    unintendedConsequence:
      'When the Viet Cong attacked the U.S. base at Pleiku in February 1965, Johnson already had the power to escalate and few easy ways to back down.',
    nextDecision:
      'With Saigon’s government close to collapse in early 1965, would Johnson send in ground troops?',
  },
  interactiveModule: {
    id: 'tonkin-reconstruction',
    type: 'tonkin-reconstruction',
    title: 'August 2 and August 4, side by side',
    prompt:
      'Put the two nights next to each other. See why August 2 was a real fight, and how bad weather, radar errors and selective use of intelligence produced the reports of August 4.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['tonkin-resolution-1964'], PRIMARY_DOCUMENTS['hanyok-tonkin-nsa']],
  nextQuestion: {
    question: 'Can you win a war by counting the dead?',
    framing:
      'General William Westmoreland believed the United States could kill North Vietnamese soldiers faster than Hanoi could replace them. He called that moment the crossover point, and it never came.',
  },
  citations: [
    CITATION_REGISTRY['c4-1'],
    CITATION_REGISTRY['c4-2'],
    CITATION_REGISTRY['c4-3'],
  ],
};

export default chapter;
