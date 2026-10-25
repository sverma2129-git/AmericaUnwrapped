import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'gulf-of-tonkin',
  number: 4,
  layout: 'investigation',
  timeframe: '1964',
  title: 'The Gulf of Tonkin: Pretext & Blank Check',
  subtitle: 'Two sea incidents, selective intelligence, and the congressional resolution for war',
  summary:
    'In August 1964, a confirmed daylight clash between North Vietnamese torpedo boats and the destroyer USS Maddox on August 2 was followed on August 4 by reports of a second attack in stormy seas. While naval commanders and NSA analysts quickly raised doubts about the second engagement, the Johnson administration presented the reports as clear provocation, securing nearly unanimous congressional approval for the Gulf of Tonkin Resolution.',
  isLandmark: true,
  landmarkMoment: {
    bannerTitle: 'The Tonkin Incident & The Blank Check Resolution',
    dateline: 'August 2 & 4, 1964',
    location: 'Gulf of Tonkin, South China Sea',
    quote:
      'Review of action makes many reported contacts and torpedoes fired appear doubtful. Freak weather effects on radar and overeager sonarmen may have accounted for many reports. No actual visual sightings by Maddox. Suggest complete evaluation before any further action taken.',
    quoteSpeaker: 'Captain John J. Herrick, CTG 72.1',
    quoteContext: 'Operational Flash Cable DTG 041727Z AUG 64 (FRUS 1964–1968, Vol. I, Doc 117)',
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
      'The 1964 presidential campaign: Johnson campaigned as the prudent candidate against Goldwater, promising not to send "American boys nine or ten thousand miles away from home to do what Asian boys ought to be doing for themselves."',
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
