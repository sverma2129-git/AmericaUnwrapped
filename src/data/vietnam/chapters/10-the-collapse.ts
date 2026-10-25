import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'the-collapse',
  number: 10,
  timeframe: '1973–1975',
  title: 'The Final Offensive & The Collapse',
  subtitle: 'Watergate, aid cutoffs, the Central Highlands rout, and the fall of Saigon',
  summary:
    'Following the U.S. withdrawal, South Vietnam faced severe economic contraction, inflation, and sharp congressional aid cuts that forced ammunition and fuel rationing. In June 1973, Congress passed the Case-Church Amendment, legally prohibiting U.S. military re-intervention. When Hanoi probed U.S. resolve at Phuoc Long in late 1974 without response, it accelerated its campaign. President Thieu’s sudden retreat order in the Central Highlands dissolved into an uncoordinated rout, leading to the collapse of South Vietnam in 55 days, culminating in the fall of Saigon on April 30, 1975.',
  isLandmark: true,
  landmarkMoment: {
    bannerTitle: 'The 55-Day Collapse & The Fall of Saigon',
    dateline: 'April 30, 1975 &bull; 11:30 AM',
    location: 'The Independence Palace, Saigon',
    quote: 'On the morning of April 30, 1975, North Vietnamese armored units breached the perimeter gates of Saigon’s Presidential Palace, concluding the military collapse of the Republic of Vietnam.',
    quoteSpeaker: 'George J. Veith',
    quoteContext: 'Historical account based on Black April (2012)',
  },
  whatHappened: {
    narrative: [
      'Between 1973 and 1974, South Vietnam’s economy contracted severely as American military expenditures vanished. Simultaneously, the U.S. Congress, disillusioned by corruption and determined to conclude involvement, slashed military aid from $2.3 billion to under $700 million.[^c10-1] ARVN units were forced to ration artillery shells, ground helicopters for lack of spare parts, and conserve ammunition. In June 1973, Congress passed the Case-Church Amendment with veto-proof majorities, prohibiting all U.S. military activity in Indochina past August 15, 1973, legally voiding Nixon’s private promises of air support to Thieu.[^c10-1] In August 1974, Nixon resigned over the Watergate scandal, leaving President Gerald Ford with neither the authority nor the political capital to intervene.',
      'In December 1974, communist forces attacked Phuoc Long province, 40 miles north of Saigon, specifically to test whether the U.S. would resume bombing. When Congress rejected Ford’s appeals for emergency assistance and no air strikes occurred, Hanoi concluded the U.S. would not return. General Van Tien Dung planned a two-year campaign for 1975–1976. On March 10, 1975, PAVN armor launched a surprise assault capturing Ban Me Thuot in the Central Highlands.[^c10-2] On March 14, in strategic panic, President Thieu ordered the entire Central Highlands abandoned to consolidate a defensible enclave around Saigon.[^c10-1]',
      'The uncoordinated retreat down unpaved Route 7B degenerated into the "Column of Tears": over 200,000 soldiers and 400,000 civilian refugees were shelled along the roads, and soldiers abandoned positions to save their fleeing families.[^c10-3] Hue fell on March 25; Da Nang collapsed into pandemonium on March 30 amid 300,000 refugees. Contrary to the post-war stereotype that South Vietnamese troops universally refused to fight, the ARVN 18th Division under Brigadier General Le Minh Dao mounted a fierce two-week stand at Xuan Loc (April 9–21), inflicting heavy casualties on three PAVN divisions before being outflanked.[^c10-1] Accelerating the timetable into the "Ho Chi Minh Campaign," North Vietnamese armor crashed through the gates of Saigon’s Presidential Palace at 11:30 AM on April 30, 1975.[^c10-2]',
    ],
    keyEvents: [
      { date: 'June 1973', title: 'Case-Church Amendment Passed', detail: 'Congress legally prohibits U.S. military activity in Indochina past August 15, 1973.' },
      { date: 'Nov 7, 1973', title: 'War Powers Resolution Passed', detail: 'Congress overrides Nixon’s veto, restricting presidential authority to commit armed forces abroad.' },
      { date: 'Aug 9, 1974', title: 'Nixon Resigns Over Watergate', detail: 'Gerald Ford assumes presidency; external guarantor of South Vietnam loses political authority.' },
      { date: 'Dec 1974 – Jan 1975', title: 'Battle of Phuoc Long (The Probe)', detail: 'Communist capture of province tests U.S. response; confirms absence of American air intervention.' },
      { date: 'March 10–12, 1975', title: 'Fall of Ban Me Thuot', detail: 'PAVN tanks seize Central Highlands hub; Thieu orders fatal uncoordinated retreat.' },
      { date: 'April 9–21, 1975', title: 'Battle of Xuan Loc', detail: '18th ARVN Division mounts tenacious two-week defense 40 miles north of Saigon before withdrawing.' },
      { date: 'April 30, 1975', title: 'Fall of Saigon', detail: 'Operation Frequent Wind evacuates remaining personnel; North Vietnamese tanks enter Presidential Palace.' },
    ],
  },
  washington: {
    keyActors: ['Gerald R. Ford', 'Henry Kissinger', 'Graham Martin (Ambassador to Saigon)'],
    strategicObjective:
      'Secure emergency congressional aid to stabilize South Vietnam, execute evacuation of American citizens, and manage the optics of defeat.',
    underlyingAssumptions: [
      'Washington assumed that even if South Vietnam declined, it would withstand major offensives through at least 1976.',
      'Ambassador Graham Martin resisted early evacuation planning, fearing it would trigger instant South Vietnamese panic and accelerate the collapse.',
    ],
    internalDebates: [
      'President Ford appealed to Congress for $722 million in emergency military aid; congressional leaders flatly rejected the request, viewing the war as closed.',
    ],
    homeFrontConstraints: [
      'The American public and Congress were entirely unwilling to risk further casualties or expend additional funds in Southeast Asia.',
    ],
    primaryDocumentRef: 'paris-accords-treaty-1973',
  },
  hanoi: {
    keyActors: ['Le Duan', 'General Van Tien Dung', 'Vo Nguyen Giap', 'Pham Hung'],
    strategicObjective:
      'Liberate the South completely, crush ARVN resistance, and achieve the unconditional surrender of the Saigon government.',
    underlyingAssumptions: [
      'Hanoi initially drew up a conservative two-year campaign plan (1975–1976), expecting stubborn ARVN resistance.',
      'The speed of the ARVN collapse surprised even General Dung, who issued the famous order: "Speed, greater speed; audacity, greater audacity!"',
    ],
    internalDebates: [
      'Whether to pause and consolidate supply lines after Ban Me Thuot or immediately surge all strategic reserve corps down National Route 1.',
    ],
    homeFrontConstraints: [
      'Extremely stretched logistical lines racing hundreds of trucks, tanks, and fuel pipelines south over hundreds of miles of captured highway.',
    ],
    primaryDocumentRef: 'paris-accords-treaty-1973',
  },
  causalChain: {
    decision: {
      actor: 'U.S. Congress / President Thieu / General Van Tien Dung',
      action: 'Congress legally barred air re-intervention and cut aid; Thieu ordered the Central Highlands retreat; Hanoi accelerated its offensive.',
      date: '1973–1975',
    },
    assumption: {
      premise: 'Thieu assumed ARVN could execute an orderly retreat to form an enclave; Congress assumed aid cuts would encourage political accommodation.',
      blindSpot: 'A retreat under fire by an army accompanied by panic-stricken families dissolved into a rout; aid cuts crippled operational readiness.',
    },
    result: {
      immediate: 'The complete collapse of South Vietnam in 55 days, concluding on April 30, 1975.',
      counterAction: 'General Duong Van Minh announced unconditional surrender in Saigon.',
    },
    unintendedConsequence:
      'Thirty years of warfare ended not in a negotiated settlement, but in total military collapse, initiating massive refugee migrations and regional instability.',
    nextDecision:
      'What was the human, social, and economic aftermath in Vietnam following reunification?',
  },
  interactiveModule: {
    id: 'collapse-1975-map',
    type: 'collapse-1975-map',
    title: 'The 55-Day Collapse: The 1975 Spring Offensive',
    prompt:
      'Track the rapid collapse of South Vietnam: inspect the breach at Ban Me Thuot, Thieu’s retreat order, the panic at Da Nang, and the determined stand at Xuan Loc.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['paris-accords-treaty-1973']],
  nextQuestion: {
    question: 'What did peace look like inside unified Vietnam after 1975?',
    framing:
      'The end of the war did not bring immediate stability. How did re-education camps, New Economic Zones, border wars with Cambodia and China, and the "boat people" exodus reshape post-war Vietnam?',
  },
  citations: [
    CITATION_REGISTRY['c10-1'],
    CITATION_REGISTRY['c10-2'],
    CITATION_REGISTRY['c10-3'],
  ],
};

export default chapter;
