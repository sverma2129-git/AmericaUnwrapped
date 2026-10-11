import { PrimarySourceExcerpt } from '@/types/vietnam';

export const PRIMARY_DOCUMENTS: Record<string, PrimarySourceExcerpt> = {
  'ho-truman-1946': {
    id: 'ho-truman-1946',
    title: 'Letter from Ho Chi Minh to President Harry S. Truman',
    authorOrSpeaker: 'Ho Chi Minh',
    role: 'President, Provisional Government of the Democratic Republic of Vietnam',
    side: 'hanoi',
    date: 'February 28, 1946',
    classification: 'Archival Diplomatic Cable (Unanswered)',
    archiveSource: 'U.S. National Archives and Records Administration (NARA), Record Group 226',
    archiveId: 'RG 226, Entry 140, Box 39',
    excerpt: `I avail myself of this opportunity to request your Excellency and the American people to interfere urgently in support of our independence and as well against the French aggression... Our Vietnam people, after so many years of oppression and devastation under the French and the Japanese, are determined to fight to the last drop of blood rather than submit again to foreign slavery.`,
    historicalContext:
      'In the months immediately following World War II, Ho Chi Minh wrote multiple letters to President Truman appealing to the Atlantic Charter and American principles of national self-determination. Washington, prioritizing French cooperation in post-war European reconstruction and the emergent containment of the Soviet Union, never formally replied.',
    whyItMatters:
      'Demonstrates Hanoi’s early effort to cultivate American diplomatic recognition before the Cold War solidified into rigid ideological blocs in East Asia.',
  },
  'nsc-68-indochina': {
    id: 'nsc-68-indochina',
    title: 'United States Objectives and Programs for National Security (NSC 64 / NSC 68 Excerpt)',
    authorOrSpeaker: 'National Security Council',
    role: 'Policy Planning Staff, Executive Office of the President',
    side: 'washington',
    date: 'February 27, 1950',
    classification: 'TOP SECRET (Declassified)',
    archiveSource: 'Foreign Relations of the United States (FRUS), 1950, The Far East, Vol. VI',
    archiveId: 'NSC 64 / FRUS 1950 VI:744-747',
    excerpt: `It is important to United States security interests that all practicable measures be taken to prevent further communist expansion in Southeast Asia. Indochina is a key area of Southeast Asia and is under immediate threat. The neighboring countries of Thailand and Burma could be expected to fall under communist domination if Indochina is controlled by a communist-dominated government.`,
    historicalContext:
      'Following the communist victory in China in 1949 and Soviet recognition of the DRV in early 1950, the Truman administration pivoted from viewing the conflict as a colonial war to seeing Indochina as the critical linchpin of Southeast Asian containment.',
    whyItMatters:
      'Codified what Eisenhower would later describe as the "Domino Theory," directly leading to the U.S. underwriting up to 78–80% of French military expenditures in Vietnam by 1954.',
  },
  'resolution-15-1959': {
    id: 'resolution-15-1959',
    title: 'Resolution 15 of the Vietnam Workers’ Party Central Committee',
    authorOrSpeaker: 'Central Executive Committee, Workers’ Party of Vietnam',
    role: 'Ruling Politburo / Central Committee, Hanoi',
    side: 'hanoi',
    date: 'January 1959',
    classification: 'Internal Politburo Document (Secret)',
    archiveSource: 'Wilson Center Cold War International History Project (CWIHP), Translated by Robert K. Brigham',
    archiveId: 'CWIHP Bulletin 16/17, Document Collection',
    excerpt: `The fundamental path of development for the revolution in South Vietnam is that of violent struggle... It is necessary to rely on the political forces of the masses and coordinate political struggle with armed struggle to overthrow the colonialist-feudalist ruling clique and establish a revolutionary administration of the people.`,
    historicalContext:
      'Between 1954 and 1958, Hanoi prioritized socialist reconstruction and land reform in the North. But as Ngo Dinh Diem’s "Denounce the Communists" campaign decimated southern cadre networks, southern militants—led by Le Duan—pressured the Politburo to authorize armed struggle.',
    whyItMatters:
      'Marked the decisive transition from political agitation to armed revolutionary warfare in the South, creating Group 559 to construct what became the Ho Chi Minh Trail.',
  },
  'cable-243-diem': {
    id: 'cable-243-diem',
    title: 'State Department Cable 243 to Embassy Saigon (The Coup Cable)',
    authorOrSpeaker: 'George Ball, Averell Harriman, and Roger Hilsman',
    role: 'U.S. Department of State',
    side: 'washington',
    date: 'August 24, 1963',
    classification: 'TOP SECRET // OPERATIONAL IMMEDIATE',
    archiveSource: 'National Security Archive, George Washington University; FRUS 1961–1963, Vol. III',
    archiveId: 'FRUS 1961-63 III, Doc 268',
    excerpt: `U.S. Government cannot tolerate situation in which power lies in Nhu’s hands. Diem must be given chance to rid himself of Nhu and his coterie... If, in spite of all your efforts, Diem remains obdurate and refuses, then we must face the possibility that Diem himself cannot be preserved... We will give [rebel generals] direct support in any interim period of breakdown of central government.`,
    historicalContext:
      'Drafted over a weekend when President Kennedy, Dean Rusk, and Robert McNamara were away from Washington, this cable signaled to South Vietnamese generals that the U.S. would not oppose a military coup against Ngo Dinh Diem following the raids on Buddhist pagodas.',
    whyItMatters:
      'The ensuing November 1, 1963 coup and assassination of Diem eliminated the civilian leadership of South Vietnam, creating a cycle of military juntas that drew Washington into direct institutional ownership of the regime.',
  },
  'hanyok-tonkin-nsa': {
    id: 'hanyok-tonkin-nsa',
    title: '"Skunks, Bogies, Silent Hounds, and the Flying Fish: The Gulf of Tonkin Mystery"',
    authorOrSpeaker: 'Robert J. Hanyok',
    role: 'Historian, National Security Agency (Center for Cryptologic History)',
    side: 'washington',
    date: 'Winter 2000 / Spring 2001 (Declassified 2005)',
    classification: 'TOP SECRET // COMINT-CHANNELS (Declassified)',
    archiveSource: 'National Security Archive Electronic Briefing Book No. 132 / NSA Cryptologic Quarterly',
    archiveId: 'NSA-EBB-132-DOC01',
    excerpt: `It is not simply that there is a different story as to what happened; it is that no attack happened that night... In truth, Hanoi’s navy was engaged in nothing that night but the salvage of two of the boats damaged on 2 August... Mid-level SIGINT officials selectively chose only that information which supported the attack hypothesis and suppressed contradictory material.`,
    historicalContext:
      'An exhaustive internal NSA investigation into the cryptologic records of August 4, 1964. Hanyok demonstrated that intercepted North Vietnamese communications cited by the Johnson administration as "proof" of an attack actually described the tow operations of torpedo boats damaged two days earlier.',
    whyItMatters:
      'Proves through official intelligence records that the August 4 incident was not simply confused sailors in a storm, but an instance where ambiguous signals intelligence was selectively summarized upstream to fit an established administration objective.',
  },
  'tonkin-resolution-1964': {
    id: 'tonkin-resolution-1964',
    title: 'The Gulf of Tonkin Resolution (Joint Resolution of Congress, Public Law 88-408)',
    authorOrSpeaker: '88th United States Congress',
    role: 'Legislative Branch of the United States',
    side: 'washington',
    date: 'August 7, 1964',
    classification: 'Public Law',
    archiveSource: 'U.S. National Archives Milestone Documents / 78 Stat. 384',
    archiveId: 'Public Law 88-408',
    excerpt: `Resolved by the Senate and House of Representatives of the United States of America in Congress assembled, That the Congress approves and supports the determination of the President, as Commander in Chief, to take all necessary measures to repel any armed attack against the forces of the United States and to prevent further aggression.`,
    historicalContext:
      'Passed 416–0 in the House and 88–2 in the Senate within three days of reported naval engagements in the Gulf of Tonkin. The only dissenting senators, Wayne Morse and Ernest Gruening, warned that Congress was unconstitutionally abdicating war powers on unverified evidence.',
    whyItMatters:
      'Served as the functional legal authorization utilized by the Johnson administration to conduct a major, undeclared ground and air war in Southeast Asia.',
  },
  'cia-memo-giap-thanh-1966': {
    id: 'cia-memo-giap-thanh-1966',
    title: 'CIA Intelligence Memorandum: The Strategy Debate in Hanoi',
    authorOrSpeaker: 'Directorate of Intelligence, Central Intelligence Agency',
    role: 'Office of Current Intelligence, CIA',
    side: 'washington',
    date: 'July 18, 1966',
    classification: 'TOP SECRET (Declassified 2004)',
    archiveSource: 'CIA Freedom of Information Act Electronic Reading Room',
    archiveId: 'CIA-RDP79T00826A001100010046-3',
    excerpt: `A debate has been underway in the North Vietnamese press between advocates of conventional, large-unit military action (championed by General Nguyen Chi Thanh) and proponents of protracted, small-unit guerrilla warfare (associated with Defense Minister Vo Nguyen Giap)... Thanh argues that the arrival of massive American combat power requires aggressive conventional offensive blows, while Giap emphasizes the conservation of forces and prolonged attrition.`,
    historicalContext:
      'Contemporaneous evidence that American intelligence detected genuine tactical and doctrinal fractures within Hanoi’s military hierarchy during the height of U.S. troop escalation.',
    whyItMatters:
      'Refutes the perception that Hanoi was monolithic; reveals the high-stakes debate between large-unit offensive warfare (which culminated in Tet) and protracted defensive conservation.',
  },
  'mccarthy-hanoi-1968': {
    id: 'mccarthy-hanoi-1968',
    title: '"Hanoi—1968" (Dispatch from North Vietnam)',
    authorOrSpeaker: 'Mary McCarthy',
    role: 'Author and Eyewitness Observer',
    side: 'neutral',
    date: 'May 23, 1968',
    classification: 'Published Eyewitness Account',
    archiveSource: 'The New York Review of Books, Vol. 10, No. 10',
    archiveId: 'NYRB-1968-0523',
    excerpt: `Along the sidewalks of Hanoi, every few yards, there are individual concrete cylinder shelters, sunk into the earth like manholes, each with a heavy lid of cement or woven bamboo... The city has been substantially evacuated; children and the elderly are in the villages... Far from shattering social cohesion, the air bombardment has become the organizing principle of daily existence, reinforcing a shared national discipline.`,
    historicalContext:
      'Mary McCarthy traveled to North Vietnam in early 1968 during Operation Rolling Thunder, documenting street-level civil defense, bomb shelters, and civilian resilience.',
    whyItMatters:
      'Provides a rare, contemporaneous Western eyewitness record of how aerial bombardment operated in practice: rather than coercing capitulation, it stimulated decentralized civil defense and collective endurance.',
  },
  'tet-politburo-directive': {
    id: 'tet-politburo-directive',
    title: 'Hanoi Politburo Resolution on the General Offensive and General Uprising',
    authorOrSpeaker: 'Party Central Committee & Military Commission',
    role: 'Hanoi High Command (Le Duan)',
    side: 'hanoi',
    date: 'December 1967',
    classification: 'Strictly Confidential Military Directive',
    archiveSource: 'Military History Institute of Vietnam, Hanoi (Lich Su Quan Doi Nhan Dan)',
    archiveId: 'MHIV Documents Vol. 3, 1995',
    excerpt: `We must deliver a decisive blow against the enemy’s main administrative centers and military headquarters across all cities and towns. The masses will rise up in unison (Khoi Nghia), the puppet army will disintegrate, and the American imperialists will be forced to accept defeat and negotiate withdrawal.`,
    historicalContext:
      'The operational doctrine for the 1968 Tet Offensive. Le Duan’s faction assumed the South Vietnamese urban population would enthusiastically rise against the Thieu government when urban centers were struck.',
    whyItMatters:
      'Demonstrates Hanoi’s flawed assumption: the anticipated urban uprising failed to materialize, and southern Viet Cong units suffered severe losses even while achieving an unintended psychological breakthrough in the U.S.',
  },
  'paris-accords-treaty-1973': {
    id: 'paris-accords-treaty-1973',
    title: 'Agreement on Ending the War and Restoring Peace in Viet-Nam (Paris Accords)',
    authorOrSpeaker: 'William P. Rogers, Nguyen Duy Trinh, Tran Van Lam, Nguyen Thi Binh',
    role: 'Signatories representing USA, DRV (North Vietnam), RVN (South Vietnam), PRG (Viet Cong)',
    side: 'international',
    date: 'January 27, 1973',
    classification: 'International Treaty',
    archiveSource: 'United Nations Treaty Series, Vol. 935, No. 13295',
    archiveId: 'UNTS 935:2',
    excerpt: `Article 1: The United States and all other countries respect the independence, sovereignty, unity, and territorial integrity of Viet-Nam as recognized by the 1954 Geneva Agreements... Article 3(b): The armed forces of the United States and other foreign allies shall completely withdraw from South Viet-Nam within sixty days... Article 15: The reunification of Viet-Nam shall be carried out step by step through peaceful means.`,
    historicalContext:
      'The treaty required the complete withdrawal of all U.S. military personnel while permitting approximately 150,000–200,000 North Vietnamese Army (PAVN) troops to remain in place inside South Vietnam.',
    whyItMatters:
      'President Thieu viewed the treaty as a fatal compromise for South Vietnam, acquiescing only after Nixon secretly promised in personal letters that the U.S. would "respond with full force" if Hanoi violated the agreement—a commitment Congress soon rendered legally impossible via the Case-Church Amendment.',
  },
  'ap-casualty-disclosure-1995': {
    id: 'ap-casualty-disclosure-1995',
    title: 'Associated Press Wire: "Vietnam Releases First Official War Casualty Figures"',
    authorOrSpeaker: 'Associated Press Wire Service',
    role: 'Journalistic Wire Archive',
    side: 'neutral',
    date: 'April 4, 1995',
    classification: 'Published Press Wire',
    archiveSource: 'The Virginian-Pilot / Associated Press Archives',
    archiveId: 'AP-VP-1995-0404',
    excerpt: `HANOI, Vietnam — Breaking twenty years of official silence, the Vietnamese government announced today that 1.1 million North Vietnamese and Viet Cong soldiers died during the war against the United States, with an additional 600,000 wounded... Official estimates of civilian deaths were placed at 2 million in the North and 2 million in the South, though official statements also referenced 'nearly 2 million civilian dead on both sides' combined.`,
    historicalContext:
      'On the eve of the 20th anniversary of the fall of Saigon, Hanoi officially published its internal casualty counts for the 1954–1975 conflict, revealing the massive demographic toll.',
    whyItMatters:
      'Documents the primary disclosure of North Vietnamese military fatalities while illustrating how even official civilian casualty tallies have been reported with competing ranges (2 million combined vs. 4 million total).',
  },
};
