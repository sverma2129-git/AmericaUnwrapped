import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'paris-peace-accords',
  number: 9,
  timeframe: '1972–1973',
  leadImageId: 'paris-signing-1973',
  galleryImageIds: ['b52-linebacker-1972', 'homecoming-1973'],
  title: 'The Paris Peace Accords',
  subtitle: 'Secret talks, the Christmas Bombing, and America’s exit',
  summary:
    'In October 1972, Henry Kissinger and Le Duc Tho secretly agreed on a draft deal. U.S. troops would leave, and North Vietnamese troops could stay where they were in the South. South Vietnam’s President Thieu rejected it, and Nixon ordered the 11-day "Christmas Bombing" of Hanoi, called Linebacker II. The treaty signed in January 1973 was essentially the same as the October draft. It ended direct American involvement and left the civil war unsettled.',
  isLandmark: true,
  landmarkMoment: {
    bannerTitle: 'The Paris Peace Accords',
    dateline: 'January 27, 1973',
    location: 'International Conference Center, Avenue Kléber, Paris',
    quote: 'The diplomatic settlement permitted an estimated 150,000 to 200,000 North Vietnamese combat troops to remain in South Vietnam while concluding the total withdrawal of American combat forces.',
    quoteSpeaker: 'Pierre Asselin',
    quoteContext: 'Historical analysis based on A Bitter Peace (2002)',
  },
  whatHappened: {
    narrative: [
      'Beginning in 1969, Henry Kissinger conducted secret negotiations in a villa outside Paris with Le Duc Tho, a member of Hanoi’s Politburo. For three years, the talks deadlocked on two non-negotiable demands: Washington insisted that all North Vietnamese Army (PAVN) troops withdraw completely from the South, while Hanoi insisted that South Vietnamese President Nguyen Van Thieu be removed before any political settlement.',
      'In October 1972, the impasse broke through mutual concessions: Hanoi dropped its demand for Thieu’s immediate ouster, agreeing he could remain head of the Saigon administration. In exchange, the United States conceded that approximately 150,000 to 200,000 North Vietnamese combat troops could remain in place inside South Vietnam.[^c9-1] Weeks before the 1972 U.S. presidential election, Kissinger announced publicly: "Peace is at hand."',
      'When presented with the draft, President Thieu vehemently rejected it, arguing that permitting foreign troops on sovereign South Vietnamese soil was a death warrant. Kissinger returned to Paris with 69 amendments demanded by Thieu, causing talks to break down. From December 18 to 29, 1972, Nixon unleashed Operation Linebacker II—the "Christmas Bombing"—dropping over 20,000 tons of explosives on Hanoi and Haiphong.[^c9-1] Historians debate the bombing’s purpose: while administration officials claimed it forced Hanoi back to the table, the final Paris Peace Accords signed on January 27, 1973 were essentially identical to the October draft. The primary effect was demonstrating violent resolve to coerce Thieu into signing under the cover of Nixon’s secret written promises of air retaliation if Hanoi violated the ceasefire.[^c9-2] All remaining U.S. combat troops departed by March 29, 1973, and 591 American POWs returned home.[^c9-3]',
    ],
    keyEvents: [
      { date: 'Oct 8, 1972', title: 'A breakthrough in Paris', detail: 'Hanoi drops its demand that Thieu go. The U.S. lets North Vietnamese troops stay in the South.' },
      { date: 'Oct 26, 1972', title: 'Kissinger says peace is near', detail: 'Days before the U.S. election, Kissinger tells reporters that peace is close.' },
      { date: 'Dec 13, 1972', title: 'The talks break down', detail: 'Hanoi rejects 69 changes demanded by Thieu and Washington, and the talks stop.' },
      { date: 'Dec 18–29, 1972', title: 'The Christmas Bombing', detail: 'Eleven days of all-out B-52 raids on Hanoi and Haiphong. Missiles shoot down 16 B-52s.' },
      { date: 'Jan 5, 1973', title: 'Nixon’s secret letter to Thieu', detail: 'Nixon promises to strike back quickly and hard if Hanoi breaks the peace agreement.' },
      { date: 'Jan 27, 1973', title: 'The Paris Peace Accords are signed', detail: 'All four sides sign. The U.S. agrees to pull out completely within 60 days.' },
    ],
  },
  washington: {
    keyActors: ['Richard M. Nixon', 'Henry Kissinger', 'President Nguyen Van Thieu', 'Alexander Haig'],
    strategicObjective:
      'Retrieve American POWs, withdraw the remaining U.S. military forces, and preserve a defensible political settlement for South Vietnam.',
    underlyingAssumptions: [
      'Contested: Whether Nixon believed his threats of renewed B-52 strikes would deter a future invasion, or recognized that American re-intervention was politically impossible.',
      'Congress would continue to approve robust military and financial aid pipelines to sustain the ARVN.',
    ],
    internalDebates: [
      'Thieu accused Kissinger of sacrificing South Vietnam’s sovereignty by permitting enemy combat units to remain in the South.',
      'Nixon warned Thieu that if Saigon refused to sign, the United States would conclude a bilateral agreement with Hanoi and terminate all aid immediately.',
    ],
    homeFrontConstraints: [
      'The incoming 93rd Congress in January 1973 had decisive majorities prepared to legislate an immediate end to all war funding.',
      'Watergate: the June 1972 break-in began metastasizing into a constitutional crisis that rapidly eroded Nixon’s executive authority.',
    ],
    primaryDocumentRef: 'paris-accords-treaty-1973',
  },
  hanoi: {
    keyActors: ['Le Duc Tho', 'Le Duan', 'Nguyen Duy Trinh', 'Pham Van Dong'],
    strategicObjective:
      'Secure the complete and irreversible withdrawal of American military forces while keeping PAVN troops positioned inside South Vietnam.',
    underlyingAssumptions: [
      'Once U.S. forces departed and American domestic opposition solidified, the U.S. would be politically incapable of re-entering the war.',
      'The balance of military forces in South Vietnam would irreversibly tilt in Hanoi’s favor over time.',
    ],
    internalDebates: [
      'Hanoi endured Linebacker II, calculating that shooting down B-52s and exhausting U.S. domestic tolerance would preserve their core diplomatic gains.',
    ],
    homeFrontConstraints: [
      'Severe devastation of urban infrastructure and rail lines from the Christmas bombing; air defense missile stockpiles were near total exhaustion by December 29.',
    ],
    primaryDocumentRef: 'paris-accords-treaty-1973',
  },
  causalChain: {
    decision: {
      actor: 'Kissinger, Nixon, & Le Duc Tho',
      action: 'Signed the Paris Peace Accords, withdrawing all U.S. forces while leaving ~150,000 North Vietnamese troops inside South Vietnam.',
      date: 'January 27, 1973',
    },
    assumption: {
      premise: 'American airpower could serve as a credible external deterrent to enforce the treaty.',
      blindSpot: 'Nixon’s deterrence rested entirely on personal executive threats, which evaporated as Watergate dismantled his political standing.',
    },
    result: {
      immediate: '591 American POWs returned home; the last U.S. combat troops left Vietnam on March 29, 1973.',
      counterAction: 'Neither North nor South Vietnam ceased firing; a violent "war of the flags" for contested territory erupted immediately.',
    },
    unintendedConsequence:
      'The Accords ended direct American participation without ending the civil war, leaving South Vietnam structurally vulnerable.',
    nextDecision:
      'How would Congress dismantle the legal authority for American military re-intervention, setting the stage for the final offensive?',
  },
  interactiveModule: {
    id: 'paris-timeline',
    type: 'paris-timeline',
    title: 'How the Paris deal was made',
    prompt:
      'Follow the secret talks: what each side gave up in October 1972, why Thieu objected, and the argument over what the Christmas Bombing was for.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['paris-accords-treaty-1973']],
  nextQuestion: {
    question: 'Why did South Vietnam’s army collapse in just 55 days in 1975?',
    framing:
      'In early 1975, South Vietnam’s army was on paper one of the best-equipped in the world. Aid cuts, fuel shortages, bad decisions and soldiers’ worries about their families all played a part. How did they add up to collapse?',
  },
  citations: [
    CITATION_REGISTRY['c9-1'],
    CITATION_REGISTRY['c9-2'],
    CITATION_REGISTRY['c9-3'],
  ],
};

export default chapter;
