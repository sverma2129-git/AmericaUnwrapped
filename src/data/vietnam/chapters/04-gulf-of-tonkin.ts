import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'gulf-of-tonkin',
  number: 4,
  timeframe: '1964',
  title: 'The Gulf of Tonkin: Two Nights and a Resolution',
  subtitle: 'Two sea incidents, selective intelligence, and the congressional resolution for war',
  summary:
    'In August 1964, a confirmed daylight clash between North Vietnamese torpedo boats and the destroyer USS Maddox on August 2 was followed on August 4 by reports of a second attack in stormy seas. While naval commanders and NSA analysts quickly raised doubts about the second engagement, the Johnson administration presented the reports as clear provocation, securing nearly unanimous congressional approval for the Gulf of Tonkin Resolution.',
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
              localTime: 'Aug 4 · 9:30 p.m.',
              washingtonTime: 'Aug 4 · 10:30 a.m.',
              scene: 'contacts',
              headline: 'Blips in the storm',
              body: 'In rain and darkness, radar operators on the Maddox saw blips they took for enemy boats. No one on the Maddox actually saw an enemy boat.[^Q013]',
            },
            {
              localTime: 'Aug 4 · 10:15 p.m.',
              washingtonTime: 'Aug 4 · 11:15 a.m.',
              scene: 'firing',
              headline: 'Firing into the dark',
              body: 'Sonar operators reported torpedoes in the water. Both destroyers fired more than 600 rounds at the radar contacts.',
            },
            {
              localTime: 'Aug 4 · 11:00 p.m.',
              washingtonTime: 'Aug 4 · 12:00 p.m.',
              scene: 'overhead',
              headline: 'A pilot sees nothing',
              body: 'Navy pilot James Stockdale flew low over the destroyers, looking for the enemy. He saw the ships’ wakes and their gunfire, and nothing else.[^Q021]',
              quoteCitationId: 'Q021',
            },
            {
              localTime: 'Aug 5 · 12:27 a.m.',
              washingtonTime: 'Aug 4 · 1:27 p.m.',
              scene: 'cable',
              headline: 'The commander has doubts',
              body: 'Captain John Herrick, in command at sea, sent a flash cable. He said many of the reports looked doubtful and asked for a full review before anyone acted.[^Q013]',
              quoteCitationId: 'Q013',
            },
            {
              localTime: 'Aug 5 · 10:36 a.m.',
              washingtonTime: 'Aug 4 · 11:36 p.m.',
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
        headline: 'Two nights, two different stories',
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
        headline: 'A blank check, then a correction',
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
    evidence: ['Q024', 'Q013', 'Q021', 'Q027', 'Q006', 'Q022', 'Q028', 'Q005', 'Q023', 'Q029'],
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
          citationId: 'Q005',
          intro: 'Answer (a), (b), and (c) using the excerpt from a historian.',
          parts: [
            {
              label: 'a',
              prompt: 'Briefly describe the historian’s argument in the excerpt.',
              model:
                'The historian, Robert Hanyok of the NSA, argues that the second attack on August 4, 1964 did not happen at all, not just that it happened differently than reported.',
            },
            {
              label: 'b',
              prompt: 'Briefly explain ONE piece of historical evidence that supports the argument.',
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
    bannerTitle: 'The Tonkin Incident & The Blank Check Resolution',
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
  whatHappened: {
    narrative: [
      'Throughout 1964, South Vietnam’s military situation worsened rapidly following Diem’s death. The Johnson administration initiated OPLAN 34A—covert South Vietnamese commando raids against North Vietnamese coastal radar installations and islands, coordinated alongside U.S. Navy DeSoto intelligence patrols collecting electronic signals in the Gulf of Tonkin.',
      'On the afternoon of August 2, 1964, three North Vietnamese P-4 torpedo boats engaged the USS Maddox in international waters.[^Q024] Because South Vietnamese patrol boats had shelled radar towers on nearby Hon Me Island two days earlier, North Vietnamese naval commanders viewed the Maddox as an integral element of the operation. In the ensuing firefight, carrier aircraft from the USS Ticonderoga damaged the torpedo boats, while the Maddox was struck by a single 14.5mm machine-gun bullet.',
      'Two nights later, on August 4, in heavy rain and total darkness, the Maddox and the USS Turner Joy reported coming under continuous torpedo attack, firing over 600 rounds at radar contacts. Hours later, task group commander Captain John Herrick cabled Washington urging caution, reporting that many reported contacts and torpedo firings appeared doubtful:[^Q013] "Review of action makes many reported contacts and torpedoes fired appear doubtful..." Subsequent declassified naval track reconstructions by Edwin Moise[^c4-1] and official NSA historical analysis by Robert Hanyok[^c4-2] demonstrated conclusively that intercepted North Vietnamese communications cited as proof of an attack actually described the salvage operations of boats damaged on August 2. Facing an election campaign against conservative Barry Goldwater, President Johnson presented the incident as an unprovoked attack, ordered retaliatory airstrikes (Operation Pierce Arrow), and secured passage of the Gulf of Tonkin Resolution.[^c4-3]',
    ],
    keyEvents: [
      { date: 'Jan 1964', title: 'OPLAN 34A Authorized', detail: 'Covert naval sabotage operations along the North Vietnamese coastline begin.' },
      { date: 'July 31, 1964', title: 'Raid on Hon Me Island', detail: 'South Vietnamese patrol craft shell northern coastal radar sites while Maddox cruises offshore.' },
      { date: 'Aug 2, 1964', title: 'First Tonkin Engagement', detail: 'Confirmed daylight clash between three North Vietnamese torpedo boats and USS Maddox.' },
      { date: 'Aug 4, 1964', title: 'Reported Second Incident', detail: 'Destroyers fire into dark stormy waters on radar/sonar contacts; Captain Herrick cables doubts.' },
      { date: 'Aug 4, 1964 (Night)', title: 'Operation Pierce Arrow', detail: 'LBJ announces retaliatory air strikes against North Vietnamese naval bases on national television.' },
      { date: 'Aug 7, 1964', title: 'Gulf of Tonkin Resolution Passed', detail: 'Congress approves resolution 416–0 in House and 88–2 in Senate (Morse and Gruening dissenting).' },
    ],
  },
  washington: {
    keyActors: ['Lyndon B. Johnson', 'Robert S. McNamara', 'Dean Rusk', 'Adm. U.S. Grant Sharp Jr.', 'Sen. Wayne Morse'],
    strategicObjective:
      'Demonstrate American resolve to deter Hanoi, stabilize the Saigon government, and neutralize Barry Goldwater’s charges of administration weakness during the 1964 presidential campaign.',
    underlyingAssumptions: [
      'A targeted display of American airpower would convince Hanoi that the cost of pursuing the southern insurgency was prohibitive.',
      'Broad congressional war-making authority could be obtained and held in reserve without requiring a formal declaration of war or extended public debate.',
    ],
    internalDebates: [
      'McNamara and military commanders relied on selectively summarized SIGINT intercepts that appeared to confirm an attack, dismissing Captain Herrick’s urgent cables urging delay.',
      'Senators Wayne Morse and Ernest Gruening warned that the resolution was an unconstitutional transfer of war power based on unverified allegations.[^Q022]',
    ],
    homeFrontConstraints: [
      'The 1964 presidential campaign: Johnson campaigned as the prudent candidate against Goldwater, promising not to send "American boys 9 or 10,000 miles away from home to do what Asian boys ought to be doing for themselves."[^Q028]',
    ],
    primaryDocumentRef: 'tonkin-resolution-1964',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Ho Chi Minh', 'General Vo Nguyen Giap', 'Nguyen Chi Thanh'],
    strategicObjective:
      'Defend coastal territorial waters against OPLAN 34A raids and maintain supply lines to the southern insurgency.',
    underlyingAssumptions: [
      'U.S. naval intelligence patrols and South Vietnamese commando raids were an indivisible joint operation violating DRV sovereignty.',
      'Open American military escalation was increasingly probable regardless of North Vietnamese restraint.',
    ],
    internalDebates: [
      'Local naval commanders acted aggressively on August 2, believing the Maddox was directly guiding the 34A raiding boats.',
      'Hanoi confirmed that its naval vessels did not participate in any engagement on the night of August 4.',
    ],
    homeFrontConstraints: [
      'Constructing extensive civil defense networks, digging sidewalk bomb shelters, and preparing northern infrastructure for sustained American aerial bombardment.',
    ],
    primaryDocumentRef: 'hanyok-tonkin-nsa',
  },
  causalChain: {
    decision: {
      actor: 'Johnson Administration & U.S. Congress',
      action: 'Passed the Gulf of Tonkin Resolution based on selectively presented intelligence of a second naval engagement.',
      date: 'August 7, 1964',
    },
    assumption: {
      premise: 'The resolution was a deterrent tool and political insurance policy that would prevent war rather than initiate it.',
      blindSpot: 'Hanoi interpreted the retaliatory airstrikes not as a deterrent, but as proof that direct American war was inevitable, triggering preemptive escalation.',
    },
    result: {
      immediate: 'LBJ won the 1964 presidential election by a historic landslide; the resolution provided legal authority for open-ended military action.',
      counterAction: 'Hanoi dispatched the first full regular PAVN infantry regiments south down the Ho Chi Minh Trail.',
    },
    unintendedConsequence:
      'When the Viet Cong attacked American barracks at Pleiku in February 1965, LBJ had a blank check in hand and few diplomatic off-ramps remaining.',
    nextDecision:
      'With the Saigon government near collapse in early 1965, would the U.S. introduce ground combat troops and launch sustained strategic bombing?',
  },
  interactiveModule: {
    id: 'tonkin-reconstruction',
    type: 'tonkin-reconstruction',
    title: 'Reconstructing Tonkin: August 2 vs. August 4',
    prompt:
      'Analyze the radar, sonar, and communications logs: inspect why August 2 was a confirmed daylight firefight and how weather, radar anomalies, and selective intelligence produced the August 4 reports.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['tonkin-resolution-1964'], PRIMARY_DOCUMENTS['hanyok-tonkin-nsa']],
  nextQuestion: {
    question: 'Can an insurgency be defeated through the mathematics of attrition?',
    framing:
      'General William Westmoreland claimed the U.S. would reach a "crossover point"—killing enemy soldiers faster than North Vietnam could replace them. Why did that mathematical calculation break down?',
  },
  citations: [
    CITATION_REGISTRY['c4-1'],
    CITATION_REGISTRY['c4-2'],
    CITATION_REGISTRY['c4-3'],
  ],
};

export default chapter;
