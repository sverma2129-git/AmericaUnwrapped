import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';

const chapter: ChapterData = {
  id: 'aftermath-1975',
  number: 11,
  timeframe: '1975–1995',
  leadImageId: 'vietnam-memorial-wall',
  galleryImageIds: ['boat-people-1984', 'camp-pendleton-1975', 'indiantown-gap-1975', 'cargo-net-rescue-1979'],
  title: 'After the war',
  subtitle: 'After 1975 came re-education camps, the boat people and new wars. Relations with the United States did not return to normal until 1995.',
  summary:
    'The fall of Saigon reunited Vietnam but did not bring peace right away. The years after the war brought a stalled economy, forced collective farming, re-education camps, and new wars with Cambodia and China. More than one million boat people fled, many of them ethnic Chinese who were being targeted. Near-famine and runaway inflation finally pushed the Communist Party to open up the economy with the Doi Moi reforms of 1986.',
  whatHappened: {
    narrative: [
      'After the victory, Hanoi formally reunited the country in July 1976 as the Socialist Republic of Vietnam. The new government ran the economy from the top. It took over private businesses in the South and forced farmers in the Mekong Delta onto collective farms. With a U.S. trade embargo, the loss of Western aid and poor management on top of that, farm output collapsed. By the late 1970s there was rationing and near-famine, and in 1986 inflation rose above 700 percent.',
      'The new government also locked up its former enemies. Hundreds of thousands of former South Vietnamese military officers, government workers and religious leaders were sent to re-education camps, *trai cai tao* in Vietnamese. They had been told to expect a few political lectures. Instead, officers and senior officials were held for 3 to more than 10 years of forced labor and political lessons. At the same time, the New Economic Zones program forced about 750,000 to more than 1 million people from southern cities onto undeveloped land in the jungle, while about 1 million northerners moved south.',
      'Between 1975 and 1995, somewhere between 800,000 and nearly 2 million refugees fled Indochina by sea. The crisis peaked in 1978–1979, as relations with China broke down. Vietnam’s government turned on its ethnic Chinese citizens, the Hoa. It seized their property and drove hundreds of thousands of them into boats on the South China Sea, and in some months the Hoa made up 50 to 80 percent of new arrivals at refugee camps. International agencies estimate that 200,000 to 500,000 people died at sea from drowning, exposure and pirate attacks. The region did not find peace either. In December 1978, Vietnam invaded Cambodia and overthrew the Khmer Rouge, which had committed genocide there. In February 1979, China invaded northern Vietnam to punish it. With its economy failing, Vietnam’s Communist Party adopted *Doi Moi*, or Renovation, at its 6th Congress in December 1986. It ended collective farming and moved the country toward a market economy.'
    ],
    sections: [
      { date: '1975–1986', heading: 'A planned economy fails' },
      { date: '1975–1980s', heading: 'Camps and forced moves' },
      { date: '1975–1995', heading: 'The boat people and new wars' },
    ],
    keyEvents: [
      { date: '1975–1985', title: 'Re-education camps and collective farms', detail: 'More than 1 million people go through the camps. Southern farms are forced into collectives, and food runs short.' },
      { date: 'July 2, 1976', title: 'Vietnam is officially reunited', detail: 'North and South become one country. Saigon is renamed Ho Chi Minh City.' },
      { date: 'Nov 1978', title: 'The Hai Hong', detail: 'Malaysia turns away a ship carrying 2,500 refugees. The UN refugee agency starts treating boat people as refugees as a group.' },
      { date: 'Dec 1978 – Jan 1979', title: 'Vietnam invades Cambodia', detail: 'Vietnamese forces overthrow Pol Pot’s Khmer Rouge and then fight guerrillas there for ten years.' },
      { date: 'Feb–March 1979', title: 'China and Vietnam go to war', detail: 'China invades northern Vietnam to punish it. Both sides lose many soldiers.' },
      { date: 'Dec 1986', title: 'Doi Moi reforms begin', detail: 'The 6th Party Congress drops central planning and collective farms and adopts market reforms.' },
    ],
  },
  washington: {
    keyActors: ['Gerald Ford', 'Jimmy Carter', 'Ronald Reagan', 'United Nations High Commissioner for Refugees'],
    strategicObjective:
      'Take in refugees, keep the trade embargo on Vietnam, account for Americans missing in action and help Vietnam’s neighbors push it out of Cambodia.',
    underlyingAssumptions: [
      'Cutting Vietnam off from trade and diplomacy would force Hanoi out of Cambodia and make it act more cautiously.',
    ],
    internalDebates: [
      'Talks about restoring relations stalled in the late 1970s, after Vietnam invaded Cambodia and gave the Soviet navy use of Cam Ranh Bay.',
    ],
    homeFrontConstraints: [
      'The Vietnam Syndrome: deep public and congressional aversion to overseas military intervention.',
      'Resettlement of hundreds of thousands of Vietnamese, Hmong, and Cambodian refugees across American communities.',
    ],
    primaryDocumentRef: 'ap-casualty-disclosure-1995',
  },
  hanoi: {
    keyActors: ['Le Duan', 'Nguyen Van Linh', 'Truong Chinh', 'Vo Van Kiet'],
    strategicObjective:
      'Bring socialism to the South, crush opponents, defend the borders with Cambodia and China and fix a failing economy.',
    underlyingAssumptions: [
      'Leaders thought the North’s planned economy could be imposed on the South’s market economy by decree.',
      'Historians disagree about what pushed Vietnam toward Doi Moi: the Western embargo, or collapse at home, runaway inflation and shrinking Soviet aid.',
    ],
    internalDebates: [
      'Hardliners feared that markets would water down the party’s ideas. Southern reformers such as Vo Van Kiet and Nguyen Van Linh showed that private markets and family farms were needed to keep people fed.',
    ],
    homeFrontConstraints: [
      'Severe inflation reaching 700% in 1986, near-famine in rural provinces, and heavy military casualties in Cambodia and along the Chinese border.',
    ],
    primaryDocumentRef: 'ap-casualty-disclosure-1995',
  },
  causalChain: {
    decision: {
      actor: 'Vietnam’s Communist Party',
      action: 'The party forced farmers onto collectives, sent former enemies to re-education camps and invaded Cambodia. In 1986 it changed course with Doi Moi.',
      date: '1975–1986',
    },
    assumption: {
      premise: 'Leaders thought victory would let them build a modern socialist economy quickly, and that their army could settle border fights.',
      blindSpot: 'Collective farming wrecked food production. The wars and the refugee crisis left Vietnam isolated.',
    },
    result: {
      immediate: 'Vietnam faced near-famine, more than a million people fled, and most of the world kept its distance.',
      counterAction: 'Doi Moi in 1986 ended collective farming and made private business legal again.',
    },
    unintendedConsequence:
      'To stay in power, the party gave up the economic system it had fought thirty years to build.',
    nextDecision:
      'How do historians, veterans and ordinary people make sense of the war today?',
  },
  interactiveModule: {
    id: 'aftermath-metrics',
    type: 'aftermath-metrics',
    title: 'What the war cost',
    prompt:
      'Look at the casualty estimates from Vietnam’s 1995 disclosure and at the two waves of refugees, including the ethnic Chinese families who fled. Then read what is known about the re-education camps.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['ap-casualty-disclosure-1995']],
  nextQuestion: {
    question: 'Why do people still argue about the Vietnam War?',
    framing:
      'Some historians say the war could never have been won. Others say politics at home threw away a war the United States could have won, and a newer group looks at the choices every side made.',
  },
  citations: [
    { id: 'c11-1', marker: 1, citation: 'Robinson, W. Courtland. Terms of Refuge: The Indochinese Exodus and the International Response. Zed Books, 1998.', sourceType: 'academic-monograph' },
    { id: 'c11-2', marker: 2, citation: 'Hirschman, Charles, et al. “Vietnamese Casualties During the American War: A New Estimate.” Population and Development Review, 1995.', sourceType: 'academic-monograph' },
    { id: 'c11-3', marker: 3, citation: 'Evans, Grant, and Kelvin Rowley. Red Brotherhood at War: Vietnam, Cambodia and Laos since 1975. Verso, 1990.', sourceType: 'academic-monograph' },
  ],
};

export default chapter;
