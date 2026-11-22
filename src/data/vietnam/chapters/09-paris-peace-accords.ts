import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'paris-peace-accords',
  number: 9,
  timeframe: '1972–1973',
  leadImageId: 'paris-signing-1973',
  galleryImageIds: ['b52-linebacker-1972', 'paris-accords-text-1973', 'loc-ninh-exchange-1973', 'homecoming-1973', 'hoa-lo-prison-1973', 'nixon-thieu-1973', 'calc-ceasefire-poster-1973'],
  title: 'The Paris Peace Accords',
  subtitle: 'Kissinger negotiated in secret for years. The deal he signed in 1973 brought Americans home and let North Vietnamese troops stay in the South.',
  summary:
    'In October 1972, Henry Kissinger and Le Duc Tho secretly agreed on a draft deal. U.S. troops would leave, and North Vietnamese troops could stay where they were in the South. South Vietnam’s President Thieu rejected it, and Nixon ordered the 11-day Christmas Bombing of Hanoi, called Linebacker II. The treaty signed in January 1973 was essentially the same as the October draft. It ended direct American involvement and left the civil war unsettled.',
  isLandmark: true,
  landmarkMoment: {
    bannerTitle: 'The Paris Peace Accords',
    dateline: 'January 27, 1973',
    location: 'International Conference Center, Avenue Kléber, Paris',
    quote: 'The diplomatic settlement permitted an estimated 150,000 to 200,000 North Vietnamese combat troops to remain in South Vietnam while concluding the total withdrawal of American combat forces.',
    quoteSpeaker: 'Pierre Asselin',
    quoteContext: 'Historical analysis based on A Bitter Peace (2002)',
  },
  featuredDocument: {
    citationId: 'Q010',
    kind: 'Agreement',
    stamp: 'UN Treaty Series, Vol. 935',
    header: [['Title', 'Agreement on Ending the War and Restoring Peace in Viet-Nam'], ['Article', '1'], ['Signed', 'Paris, January 27, 1973']],
    note: 'All four sides signed: the United States, North Vietnam, South Vietnam and the Viet Cong’s Provisional Revolutionary Government. The United States agreed to pull out completely within 60 days.',
  },
  whatHappened: {
    narrative: [
      'Starting in 1969, Henry Kissinger held secret talks in a house outside Paris with Le Duc Tho, a member of Hanoi’s ruling Politburo. For three years, the talks were stuck on two demands neither side would drop. Washington insisted that every North Vietnamese soldier leave the South. Hanoi insisted that South Vietnam’s president, Nguyen Van Thieu, be removed before any political deal.',
      'In October 1972, both sides gave ground. Hanoi dropped its demand that Thieu go right away and agreed that he could stay in charge in Saigon. In return, the United States agreed that about 150,000 to 200,000 North Vietnamese combat troops could stay where they were inside South Vietnam.[^c9-1] A few weeks before the 1972 presidential election, Kissinger told reporters that peace was at hand.',
      'When Thieu saw the draft, he rejected it outright. Letting North Vietnamese troops stay on South Vietnamese soil, he said, was a death sentence for his country. Kissinger went back to Paris with 69 changes Thieu wanted, and the talks broke down. From December 18 to 29, 1972, Nixon ordered Operation Linebacker II, known as the Christmas Bombing. More than 20,000 tons of bombs fell on Hanoi and Haiphong.[^c9-1] Historians argue about why. The administration said the bombing forced Hanoi back to the table, but the Paris Peace Accords signed on January 27, 1973, were almost the same as the October draft. Its main effect was on Thieu. The bombing, together with Nixon’s secret written promises to bomb again if Hanoi broke the ceasefire, pushed him into signing.[^c9-2] The last U.S. combat troops left by March 29, 1973, and 591 American prisoners of war came home.[^c9-3]'
    ],
    sections: [
      { date: '1969–1972', heading: 'Secret talks outside Paris' },
      { date: 'October 1972', heading: 'A draft deal' },
      { date: 'December 1972 – March 1973', heading: 'The Christmas Bombing and the final deal' },
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
      'Get the American prisoners of war back, bring the last troops home and leave South Vietnam in a position it could defend.',
    underlyingAssumptions: [
      'Historians disagree about whether Nixon thought his threat of more B-52 strikes would stop a future invasion, or knew Congress would never allow it.',
      'Congress would keep sending South Vietnam the military and economic aid it needed.',
    ],
    internalDebates: [
      'Thieu accused Kissinger of giving away South Vietnam’s independence by letting enemy troops stay in the South.',
      'Nixon told Thieu that if he refused to sign, the United States would make its own deal with Hanoi and cut off all aid.',
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
      'Get every American soldier out for good while keeping North Vietnamese troops inside South Vietnam.',
    underlyingAssumptions: [
      'Once American forces left and opinion at home hardened, Washington would be unable to return to the war.',
      'Over time, the military balance in the South would swing Hanoi’s way.',
    ],
    internalDebates: [
      'Hanoi rode out Linebacker II. Its leaders bet that shooting down B-52s and waiting out American patience would protect what they had won at the table.',
    ],
    homeFrontConstraints: [
      'Severe devastation of urban infrastructure and rail lines from the Christmas bombing; air defense missile stockpiles were near total exhaustion by December 29.',
    ],
    primaryDocumentRef: 'paris-accords-treaty-1973',
  },
  causalChain: {
    decision: {
      actor: 'Nixon, Kissinger and Le Duc Tho',
      action: 'They signed the Paris Peace Accords. All American forces left, and about 150,000 North Vietnamese troops stayed in the South.',
      date: 'January 27, 1973',
    },
    assumption: {
      premise: 'The threat of American air power would keep Hanoi from breaking the deal.',
      blindSpot: 'That threat rested on Nixon’s personal promises, and Watergate soon wrecked his power to keep them.',
    },
    result: {
      immediate: '591 American prisoners of war came home, and the last U.S. combat troops left on March 29, 1973.',
      counterAction: 'North and South Vietnam kept fighting over contested villages, a struggle called the war of the flags.',
    },
    unintendedConsequence:
      'America’s part in the war ended. Vietnam’s war went on, and South Vietnam was left exposed.',
    nextDecision:
      'Once Congress banned any return of American forces, what would stop Hanoi’s final offensive?',
  },
  interactiveModule: {
    id: 'paris-timeline',
    type: 'paris-timeline',
    title: 'How the Paris deal was made',
    prompt:
      'Follow the secret talks to October 1972, when each side gave ground. Then see why Thieu objected and what historians say the Christmas Bombing was for.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['paris-accords-treaty-1973']],
  nextQuestion: {
    question: 'Why did South Vietnam’s army fall apart in 55 days?',
    framing:
      'In early 1975, South Vietnam’s army looked strong on paper. Then aid ran short, fuel was rationed and Thieu ordered a retreat that turned into a rout.',
  },
  citations: [
    CITATION_REGISTRY['c9-1'],
    CITATION_REGISTRY['c9-2'],
    CITATION_REGISTRY['c9-3'],
  ],
};

export default chapter;
