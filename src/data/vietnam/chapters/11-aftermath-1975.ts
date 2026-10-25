import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';

const chapter: ChapterData = {
  id: 'aftermath-1975',
  number: 11,
  timeframe: '1975–1990',
  title: 'Aftermath: Vietnam After 1975',
  subtitle: 'Re-education camps, the boat people exodus, the Third Indochina War, and Doi Moi',
  summary:
    'The fall of Saigon brought national reunification but not immediate peace. The post-war era was characterized by severe economic stagnation, forced agricultural collectivization, re-education camps, and the Third Indochina War against Cambodia and China. The humanitarian crisis of over one million "boat people"—heavily driven by the targeting of ethnic Chinese—strained the region, until near-famine and hyperinflation forced the Communist Party to adopt market-oriented reforms under Doi Moi in 1986.',
  whatHappened: {
    narrative: [
      'Following victory, Hanoi formally reunified the country in July 1976 as the Socialist Republic of Vietnam. The new government imposed orthodox socialist central planning, nationalizing southern private businesses and forcing agricultural collectivization in the Mekong Delta. Compounded by a U.S. trade embargo, Western aid cutoffs, and administrative mismanagement, agricultural output plummeted, resulting in widespread rationing and near-famine conditions by the late 1970s, with inflation peaking at over 700 percent in 1986.',
      'Political consolidation was accompanied by widespread detention. Hundreds of thousands of former South Vietnamese military officers, civil servants, and religious figures were processed through "re-education camps" (trai cai tao). While initially promised short political lectures, officers and senior officials served sentences averaging 3 to 10+ years of forced labor and political indoctrination. Concurrently, the New Economic Zones program forcibly relocated roughly 750,000 to over 1 million southern urban dwellers to undeveloped jungle frontiers, while approximately 1 million northerners moved south.',
      'Between 1975 and 1995, an estimated 800,000 to nearly 2 million refugees fled Indochina by sea. The crisis peaked in 1978–1979, driven heavily by deteriorating relations with China: Vietnam’s government targeted ethnic Chinese (Hoa), expropriating property and driving hundreds of thousands into boats across the South China Sea, where ethnic Hoa comprised 50 to 80 percent of monthly refugee camp arrivals. International agencies estimate between 200,000 and 500,000 died at sea from drowning, exposure, and piracy. Regionally, peace proved elusive: in December 1978, Vietnam invaded Cambodia to topple the genocidal Khmer Rouge, triggering a punitive Chinese invasion of northern Vietnam in February 1979. Facing economic collapse, the 6th Party Congress in December 1986 enacted *Doi Moi* (Renovation), dismantling collectivization and transitioning to a market economy.',
    ],
    keyEvents: [
      { date: '1975–1985', title: 'Re-education Camps & Collectivization', detail: 'Over 1 million processed through camps; southern agriculture collectivized amid severe shortages.' },
      { date: 'July 2, 1976', title: 'Socialist Republic of Vietnam Proclaimed', detail: 'Formal reunification of North and South; Saigon officially renamed Ho Chi Minh City.' },
      { date: 'Nov 1978', title: 'The Hai Hong Incident', detail: 'Freighter with 2,500 refugees denied docking in Malaysia; UNHCR establishes prima facie refugee status.' },
      { date: 'Dec 1978 – Jan 1979', title: 'Invasion of Cambodia', detail: 'Vietnamese forces overthrow Pol Pot’s Khmer Rouge, entering a decade-long counterinsurgency.' },
      { date: 'Feb–March 1979', title: 'Sino-Vietnamese Border War', detail: 'China launches a punitive military incursion into northern Vietnam with heavy casualties.' },
      { date: 'Dec 1986', title: 'Doi Moi (Renovation) Enacted', detail: '6th Party Congress abandons central planning and collectivization, adopting market reforms.' },
    ],
  },
  washington: {
    keyActors: ['Gerald Ford', 'Jimmy Carter', 'Ronald Reagan', 'United Nations High Commissioner for Refugees'],
    strategicObjective:
      'Resettle Indochinese refugees, maintain international economic embargo on Vietnam, account for Missing in Action (MIA) personnel, and support ASEAN containment of Vietnamese presence in Cambodia.',
    underlyingAssumptions: [
      'Economic isolation and diplomatic embargo would force Hanoi to withdraw from Cambodia and moderate its regional behavior.',
    ],
    internalDebates: [
      'Debates over normalizing relations with Vietnam stalled in the late 1970s due to Hanoi’s invasion of Cambodia and Soviet naval access to Cam Ranh Bay.',
    ],
    homeFrontConstraints: [
      'The "Vietnam Syndrome": deep public and congressional aversion to overseas military intervention.',
      'Resettlement of hundreds of thousands of Vietnamese, Hmong, and Cambodian refugees across American communities.',
    ],
    primaryDocumentRef: 'ap-casualty-disclosure-1995',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Nguyen Van Linh', 'Truong Chinh', 'Vo Van Kiet'],
    strategicObjective:
      'Consolidate socialist transformation, eliminate counter-revolutionary threats, secure borders against Cambodia and China, and resolve economic crisis.',
    underlyingAssumptions: [
      'Hanoi initially assumed northern central planning could be rapidly implemented in the capitalist southern economy through administrative decrees.',
      'Contested: Whether Doi Moi was catalyzed primarily by Western economic embargo pressure, or by internal economic collapse, inflation, and Soviet aid reductions.',
    ],
    internalDebates: [
      'Hardliners resisted market mechanisms, fearing ideological dilution; southern reformers (Vo Van Kiet, Nguyen Van Linh) demonstrated that private markets and family farming were essential for survival.',
    ],
    homeFrontConstraints: [
      'Severe inflation reaching 700% in 1986, near-famine in rural provinces, and heavy military casualties in Cambodia and along the Chinese border.',
    ],
    primaryDocumentRef: 'ap-casualty-disclosure-1995',
  },
  causalChain: {
    decision: {
      actor: 'Hanoi Leadership',
      action: 'Imposed orthodox socialist collectivization and re-education, invaded Cambodia, and eventually reversed economic policy under Doi Moi in 1986.',
      date: '1975–1986',
    },
    assumption: {
      premise: 'Victory would enable swift socialist modernization; military power could resolve regional border disputes.',
      blindSpot: 'Collectivization paralyzed agricultural output, while regional warfare and refugee flight deepened international isolation.',
    },
    result: {
      immediate: 'Near-famine, the exodus of over a million refugees, and international diplomatic isolation.',
      counterAction: 'Doi Moi dismantled collective farming and legalized private commerce in 1986.',
    },
    unintendedConsequence:
      'The Communist Party preserved political power only by abandoning the economic model for which it had fought for thirty years.',
    nextDecision:
      'How do historians, veterans, and citizens interpret the contested meaning of this thirty-year conflict today?',
  },
  interactiveModule: {
    id: 'aftermath-metrics',
    type: 'aftermath-metrics',
    title: 'The Human, Political, & Demographic Consequences',
    prompt:
      'Inspect the statistical ledger: compare casualty ranges from the 1995 disclosure, examine the two distinct refugee waves and the ethnic Chinese (Hoa) dimension, and review re-education camp data.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['ap-casualty-disclosure-1995']],
  nextQuestion: {
    question: 'Why do historians and societies still fiercely debate the Vietnam War?',
    framing:
      'Was Vietnam an unwinnable quagmire, a noble cause sabotaged by domestic politics, or an international tragedy shaped by multi-sided agency? Examine the competing historiographical schools and cultural memory.',
  },
  citations: [
    { id: 'c11-1', marker: 1, citation: 'Robinson, W. Courtland. Terms of Refuge: The Indochinese Exodus and the International Response. Zed Books, 1998.', sourceType: 'academic-monograph' },
    { id: 'c11-2', marker: 2, citation: 'Hirschman, Charles, et al. "Vietnamese Casualties During the American War: A New Estimate." Population and Development Review, 1995.', sourceType: 'academic-monograph' },
    { id: 'c11-3', marker: 3, citation: 'Evans, Grant, and Kelvin Rowley. Red Brotherhood at War: Vietnam, Cambodia and Laos since 1975. Verso, 1990.', sourceType: 'academic-monograph' },
  ],
};

export default chapter;
