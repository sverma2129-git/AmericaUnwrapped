import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';
import { CITATION_REGISTRY } from '../sourceRegistry';

const chapter: ChapterData = {
  id: 'the-secret-war',
  number: 6,
  timeframe: '1961–1972',
  title: 'The Shadow War: Phoenix, Ranch Hand, & Pacification',
  subtitle: 'Targeting civilian networks, herbicide defoliation, and the covert war in Laos',
  summary:
    'Alongside conventional military battles, the United States and South Vietnam waged a shadow war to dismantle the insurgent political infrastructure and strip rural forest cover. The Phoenix Program targeted the Viet Cong Infrastructure through intelligence-driven detention and neutralization, while Operation Ranch Hand sprayed millions of gallons of herbicides, generating enduring human and environmental consequences.',
  whatHappened: {
    narrative: [
      'Recognizing that military sweeps failed to eliminate the Viet Cong’s civilian governance apparatus—which collected taxes, ran schools, and recruited fighters—the CIA and South Vietnamese security agencies developed the Phoenix Program (Phung Hoang) in 1967–1968. Directed under CORDS (Civil Operations and Revolutionary Development Support), Phoenix coordinated intelligence across military and police organs to identify and "neutralize" the Viet Cong Infrastructure (VCI). Official figures reported to Congress in 1971 indicated that 81,740 individuals were neutralized: 33,358 captured, 22,013 defected, and 26,369 killed.[^c6-3] However, testimony revealed that roughly 87 percent of those killed died during regular military operations and artillery strikes rather than targeted police actions, as monthly quotas led to widespread padding of reports with ordinary combat casualties.[^c6-3]',
      'Between 1962 and 1971, the U.S. Air Force conducted Operation Ranch Hand, spraying an estimated 19 million gallons of tactical herbicides over rural South Vietnam to deprive guerrilla forces of vegetative cover and food crops.[^c6-2] Roughly 11 million gallons consisted of Agent Orange, contaminated with the persistent carcinogen 2,3,7,8-TCDD dioxin.[^c6-2] Over 5 million acres of forest and 500,000 acres of crops were defoliated. The chemical legacy persisted for decades, causing elevated rates of cancer, birth defects, and chronic illnesses among Vietnamese civilians and American veterans. In an underreported domestic aftermath, contaminated UC-123 aircraft were transferred to the U.S. Air Force Reserve and flown domestically on cargo missions from 1972 to 1982.',
      'Concurrently, the CIA prosecuted a massive "Secret War" in neighboring Laos, organizing an army of roughly 30,000 ethnic Hmong under General Vang Pao to interdict the Ho Chi Minh Trail.[^c6-1] Supported by Air America transport planes and intense covert B-52 strikes, Laos became the most heavily bombed country per capita in human history.[^c6-2] While Phoenix and pacification efforts disrupted insurgent political networks, their heavy-handed implementation and civilian casualties alienated significant segments of the rural population.',
    ],
    keyEvents: [
      { date: 'Nov 1961', title: 'Herbicide Spraying Authorized', detail: 'President Diem requests aerial defoliation; Kennedy approves mission-by-mission testing.' },
      { date: 'Jan 1962', title: 'Operation Ranch Hand Begins', detail: 'Aerial spraying of tactical herbicides begins under the unit motto "Only you can prevent a forest."' },
      { date: 'May 1967', title: 'CORDS Established', detail: 'Pacification and civilian development unified under Robert Komer and MACV.' },
      { date: 'July 1968', title: 'Phoenix Program Formally Activated', detail: 'President Thieu decrees Phung Hoang to target and neutralize the Viet Cong civilian infrastructure.' },
      { date: 'July 1971', title: 'Congressional Hearings on Phoenix', detail: 'William Colby and military intelligence veterans testify before the House on quotas and abuses.' },
      { date: '1971–1972', title: 'Ranch Hand Terminated', detail: 'Herbicide spraying halted following scientific studies on dioxin toxicity and domestic protest.' },
    ],
  },
  washington: {
    keyActors: ['Robert Komer', 'William Colby', 'Richard Helms', 'Ngo Dinh Diem'],
    strategicObjective:
      'Eradicate the political shadow government of the Viet Cong and deny insurgents forest concealment and agricultural sustenance.',
    underlyingAssumptions: [
      'The insurgency was sustained primarily by a coercive political infrastructure that could be dismantled through centralized intelligence collection and police action.',
      'Herbicides were an efficient, economical weapon to protect American patrol bases and convoys without long-term ecological consequences.',
    ],
    internalDebates: [
      'Controversy erupted in Congress and the media labeling Phoenix a "civilian assassination program," leading the CIA to defend it as an essential counterinsurgency program padded by conventional combat reporting.',
      'State Department officials initially resisted herbicide defoliation in 1961, fearing international condemnation for chemical warfare.',
    ],
    homeFrontConstraints: [
      'Intense public and congressional scrutiny following revelations of interrogation abuses, tiger cages at Con Son Island, and chemical contamination.',
    ],
    primaryDocumentRef: 'cia-memo-giap-thanh-1966',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Central Office for South Vietnam (COSVN)', 'Nguyen Van Linh'],
    strategicObjective:
      'Protect underground party cadres, maintain rural political control, and counter pacification programs.',
    underlyingAssumptions: [
      'The rural population’s nationalist sentiment and land grievances would enable the Viet Cong infrastructure to regenerate despite government arrests.',
      'American chemical defoliation would reinforce anti-imperialist propaganda and drive uncommitted peasants into the revolutionary camp.',
    ],
    internalDebates: [
      'COSVN recognized Phoenix as a severe operational threat that decimated southern party apparatus in many provinces between 1968 and 1971, forcing cadres to operate from remote base areas.',
    ],
    homeFrontConstraints: [
      'Managing heavy loss of seasoned southern organizers, requiring northern administrative cadres to be dispatched south to replace fallen personnel.',
    ],
    primaryDocumentRef: 'resolution-15-1959',
  },
  causalChain: {
    decision: {
      actor: 'MACV, CIA, & South Vietnamese Authorities',
      action: 'Institutionalized the Phoenix Program to eliminate insurgent cadres and conducted Operation Ranch Hand to defoliate rural sanctuaries.',
      date: '1962–1971',
    },
    assumption: {
      premise: 'Dismantling the political infrastructure and stripping vegetative cover would break the insurgency’s hold on the rural population.',
      blindSpot: 'Quota-driven arrests and widespread chemical devastation generated substantial civilian alienation, reinforcing the grievances that fueled insurgency.',
    },
    result: {
      immediate: 'Over 80,000 individuals were neutralized under Phoenix, and millions of forest acres were destroyed.',
      counterAction: 'Insurgent networks adapted by shifting base areas across borders and relying increasingly on conventional northern regular units.',
    },
    unintendedConsequence:
      'The programs damaged the moral standing of the allied effort internationally and produced an enduring ecological and health crisis spanning generations.',
    nextDecision:
      'How would the sudden urban shock of the 1968 Tet Offensive intersect with these ongoing pacification and attrition efforts?',
  },
  interactiveModule: {
    id: 'phoenix-analysis',
    type: 'phoenix-analysis',
    title: 'The Shadow War: Phoenix Metrics & Defoliation Realities',
    prompt:
      'Examine the statistical breakdown of the Phoenix Program—the definitions of "neutralized" and the 87% conventional combat attribution—and explore the operational legacy of Operation Ranch Hand.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['cia-memo-giap-thanh-1966']],
  nextQuestion: {
    question: 'How did a military disaster for the Viet Cong destroy the American presidency?',
    framing:
      'In the 1968 Tet Offensive, communist forces were repelled from every major city and suffered devastating casualties. Why did Tet break the domestic consensus for the war and reverse American policy?',
  },
  citations: [
    CITATION_REGISTRY['c6-1'],
    CITATION_REGISTRY['c6-2'],
    CITATION_REGISTRY['c6-3'],
  ],
};

export default chapter;
