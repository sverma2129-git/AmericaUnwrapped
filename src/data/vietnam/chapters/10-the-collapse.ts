import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'the-collapse',
  number: 10,
  timeframe: '1973–1975',
  leadImageId: 'frequent-wind-1975',
  galleryImageIds: ['ford-nsc-1975', 'babylift-ford-1975', 'kissinger-evacuation-1975', 'tan-son-nhut-evacuation-1975', 'hancock-pilots-1975', 'hancock-girl-1975'],
  title: 'The fall of Saigon',
  subtitle: 'In the spring of 1975, North Vietnam’s army took the South in 55 days. On April 30, its tanks rolled through the gates of the Presidential Palace in Saigon.',
  summary:
    'After the U.S. left, South Vietnam’s economy shrank, prices soared, and Congress cut aid so sharply that the army had to ration ammunition and fuel. In June 1973, Congress passed the Case-Church Amendment, which made it illegal for U.S. forces to go back in. In late 1974, Hanoi tested America’s will at Phuoc Long. No response came, so it sped up its campaign. President Thieu’s sudden order to retreat from the Central Highlands turned into a rout. South Vietnam fell in 55 days, and Saigon was captured on April 30, 1975.',
  isLandmark: true,
  landmarkMoment: {
    bannerTitle: 'The 55 days that ended South Vietnam',
    dateline: 'April 30, 1975, 11:30 a.m.',
    location: 'The Independence Palace, Saigon',
    quote: 'On the morning of April 30, 1975, North Vietnamese armored units breached the perimeter gates of Saigon’s Presidential Palace, concluding the military collapse of the Republic of Vietnam.',
    quoteSpeaker: 'George J. Veith',
    quoteContext: 'Historical account based on Black April (2012)',
  },
  whatHappened: {
    narrative: [
      'In 1973 and 1974, South Vietnam’s economy shrank sharply as American military spending disappeared. Congress, tired of the corruption in Saigon and set on getting out, cut military aid from $2.3 billion to less than $700 million.[^c10-1] South Vietnamese units had to ration artillery shells and bullets, and helicopters sat on the ground for lack of spare parts. In June 1973, Congress passed the Case-Church Amendment by margins large enough to override a veto. It banned all U.S. military action in Indochina after August 15, 1973, so Nixon’s private promises of air support to Thieu could no longer be kept.[^c10-1] In August 1974, Nixon resigned over the Watergate scandal. President Gerald Ford had neither the legal power nor the political support to step in.',
      'In December 1974, communist forces attacked Phuoc Long province, about 60 to 75 miles north of Saigon, to test whether the United States would start bombing again. Congress turned down Ford’s requests for emergency aid, and no air strikes came. Hanoi concluded that the Americans would not come back. General Van Tien Dung planned a two-year campaign for 1975 and 1976. On March 10, 1975, North Vietnamese tanks made a surprise attack and captured Ban Me Thuot in the Central Highlands.[^c10-2] On March 14, Thieu panicked and ordered his army to abandon the whole Central Highlands so it could defend a smaller area around Saigon.[^c10-1]',
      'The disorganized retreat down Route 7B, an unpaved road, became known as the Column of Tears. More than 200,000 soldiers and 400,000 civilian refugees were shelled along the way, and soldiers left their posts to save their families.[^c10-3] Hue fell on March 25. Da Nang collapsed into chaos on March 30, with 300,000 refugees crowding the city. After the war, many people believed that South Vietnamese troops simply refused to fight. That is not the whole story. At Xuan Loc, the ARVN 18th Division under Brigadier General Le Minh Dao held out from April 9 to 21 and inflicted heavy losses on three North Vietnamese divisions before it was outflanked.[^c10-1] Hanoi sped up its timetable and renamed the push the Ho Chi Minh Campaign. At 11:30 a.m. on April 30, 1975, North Vietnamese tanks crashed through the gates of the Presidential Palace in Saigon.[^c10-2]'
    ],
    sections: [
      { date: '1973–1974', heading: 'The aid runs out' },
      { date: 'December 1974 – March 1975', heading: 'Hanoi tests Washington' },
      { date: 'March–April 1975', heading: 'Fifty-five days' },
    ],
    keyEvents: [
      { date: 'June 1973', title: 'Congress bans further fighting', detail: 'The Case-Church Amendment bans U.S. military action in Indochina after August 15, 1973.' },
      { date: 'Nov 7, 1973', title: 'The War Powers Act passes', detail: 'Congress overrides Nixon’s veto and limits the president’s power to send troops abroad.' },
      { date: 'Aug 9, 1974', title: 'Nixon resigns', detail: 'Gerald Ford becomes president. South Vietnam loses the man who made it promises.' },
      { date: 'Dec 1974 – Jan 1975', title: 'Phuoc Long: Hanoi tests the U.S.', detail: 'Communist forces take a province to test the U.S. No American planes come.' },
      { date: 'March 10–12, 1975', title: 'Ban Me Thuot falls', detail: 'North Vietnamese tanks take this key town in the Central Highlands. Thieu orders a badly planned retreat.' },
      { date: 'April 9–21, 1975', title: 'The Battle of Xuan Loc', detail: 'The ARVN 18th Division holds for two weeks, 40 miles from Saigon, before pulling back.' },
      { date: 'April 30, 1975', title: 'Saigon falls', detail: 'Operation Frequent Wind flies out the last Americans. North Vietnamese tanks enter the Presidential Palace.' },
    ],
  },
  washington: {
    keyActors: ['Gerald R. Ford', 'Henry Kissinger', 'Graham Martin (Ambassador to Saigon)'],
    strategicObjective:
      'Win emergency aid from Congress to steady South Vietnam, get Americans out safely and limit the damage of defeat.',
    underlyingAssumptions: [
      'Even if South Vietnam was weakening, Washington expected it to hold out against major attacks until at least 1976.',
      'Ambassador Graham Martin put off evacuation plans because he feared they would set off panic and speed the collapse.',
    ],
    internalDebates: [
      'President Ford asked Congress for $722 million in emergency military aid. Congressional leaders turned him down, treating the war as finished.',
    ],
    homeFrontConstraints: [
      'Americans and Congress did not want to lose more soldiers or spend more money in Southeast Asia.',
    ],
    primaryDocumentRef: 'paris-accords-treaty-1973',
  },
  hanoi: {
    keyActors: ['Le Duan', 'General Van Tien Dung', 'Vo Nguyen Giap', 'Pham Hung'],
    strategicObjective:
      'Take the whole South, defeat South Vietnam’s army and force Saigon to surrender without conditions.',
    underlyingAssumptions: [
      'At first Hanoi planned a two-year campaign for 1975 and 1976, expecting South Vietnam’s army to fight hard.',
      'The collapse came so fast that it surprised even General Dung, who ordered his commanders to move faster and take bigger risks.',
    ],
    internalDebates: [
      'After Ban Me Thuot fell, commanders debated whether to pause and bring up supplies, or send every reserve unit down Route 1 at once.',
    ],
    homeFrontConstraints: [
      'Supply lines stretched thin as hundreds of trucks and tanks, and fuel pipelines, moved south over hundreds of miles of captured highway.',
    ],
    primaryDocumentRef: 'paris-accords-treaty-1973',
  },
  causalChain: {
    decision: {
      actor: 'Congress; President Thieu; General Van Tien Dung',
      action: 'Congress cut aid and barred any return of American air power. Thieu ordered the retreat from the Central Highlands, and Hanoi sped up its attack.',
      date: '1973–1975',
    },
    assumption: {
      premise: 'Thieu thought his army could pull back in good order and defend a smaller area. Congress thought cutting aid would push Saigon toward a political deal.',
      blindSpot: 'An army retreating under fire, with soldiers’ families on the same roads, broke into a rout. The aid cuts had already left units short of fuel and ammunition.',
    },
    result: {
      immediate: 'South Vietnam fell in 55 days. The end came on April 30, 1975.',
      counterAction: 'General Duong Van Minh, president for two days, announced South Vietnam’s unconditional surrender.',
    },
    unintendedConsequence:
      'The war ended in total defeat for the South, and hundreds of thousands of people soon fled the country.',
    nextDecision:
      'What happened to the people of Vietnam after reunification?',
  },
  interactiveModule: {
    id: 'collapse-1975-map',
    type: 'collapse-1975-map',
    title: 'The 55-day collapse',
    prompt:
      'Step through the collapse, from the break at Ban Me Thuot to Thieu’s retreat order and the panic at Da Nang. Finish with the last stand at Xuan Loc.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['paris-accords-treaty-1973']],
  nextQuestion: {
    question: 'What did peace look like in Vietnam after 1975?',
    framing:
      'The shooting stopped, but Vietnam did not settle down. Re-education camps and new wars with Cambodia and China followed, and more than a million people fled by sea.',
  },
  citations: [
    CITATION_REGISTRY['c10-1'],
    CITATION_REGISTRY['c10-2'],
    CITATION_REGISTRY['c10-3'],
  ],
};

export default chapter;
