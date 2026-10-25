import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 3: KENNEDY, COUNTERINSURGENCY & THE DIEM COUP ───────────────────
export const KENNEDY_DIEM_STUDY_DATA: ChapterStudyData = {
  chapterId: 'kennedy-and-diem',
  bigQuestion:
    'How did Kennedy’s counterinsurgency experiment fail at Ap Bac—and why did Washington back the coup that killed Ngo Dinh Diem?',
  whyItMatters:
    'The 1963 Diem coup shattered the South Vietnamese political structure and locked Washington into direct moral and operational responsibility for the Saigon government.',
  whatYouWillLearn: [
    'How JFK expanded military advisers from 900 to over 16,000 under "Flexible Response".',
    'Why the Strategic Hamlet Program and the 1963 Battle of Ap Bac exposed southern military dysfunction.',
    'How the Buddhist Crisis and Cable 243 led to the violent overthrow of Ngo Dinh Diem weeks before Kennedy’s assassination.',
  ],
  briefing: {
    summary:
      'President John F. Kennedy rejected massive conventional troop commitments, attempting to defeat the Viet Cong through "Flexible Response": Green Berets, helicopter air-mobility, chemical defoliation (Agent Orange), and the Strategic Hamlet Program (fortified peasant hamlets). In January 1963, the Battle of Ap Bac proved disastrous when 350 Viet Cong guerrillas routed 1,500 ARVN troops equipped with American armored personnel carriers and helicopters. In spring 1963, Diem’s government banned Buddhist flags and crushed protests, culminating in monk Thich Quang Duc’s self-immolation in Saigon. Concluding Diem was an unviable leader, the Kennedy administration sent Cable 243 signaling support for a military coup. On November 1–2, 1963, ARVN generals overthrew and executed Diem and Nhu—leaving South Vietnam trapped in chaotic revolving-door military juntas.',
    examTakeaways: [
      'Flexible Response & Expansion: Under JFK, American military "advisers" surged from ~900 to over 16,300, routinely engaging in active combat operations.',
      'The Buddhist Crisis: Sparked global moral outrage when monk Thich Quang Duc publicly burned himself alive, destroying the Diem regime’s international legitimacy.',
      'The Coup Trap: Diem’s assassination on November 2, 1963—three weeks before JFK’s own assassination—deposed the only stable central leader and deepened U.S. obligation to defend South Vietnam.',
    ],
    keyTerms: [
      {
        id: 'flexible-response',
        term: 'Flexible Response',
        phonetic: 'FLEK-suh-bul rih-SPONS',
        definition:
          'Kennedy’s defense doctrine replacing Eisenhower’s "Massive Retaliation" nuclear strategy with specialized counterinsurgency, Special Forces (Green Berets), and proportional conventional responses.',
        significance:
          'Created the institutional framework for incremental military escalation in Third World insurgencies like Vietnam.',
        examTip: 'Contrasted on exams with Eisenhower’s nuclear brinkmanship.',
      },
      {
        id: 'strategic-hamlets',
        term: 'Strategic Hamlet Program',
        phonetic: 'struh-TEE-jik HAM-let',
        definition:
          'Joint U.S.-South Vietnamese pacification strategy that forcibly relocated rural peasants into fortified villages ringed with barbed wire and bamboo punji stakes to isolate them from Viet Cong influence.',
        significance:
          'Deeply alienated peasants who resented being torn from ancestral lands and graves, allowing the Viet Cong to infiltrate the camps from within.',
        examTip: 'Classic example of an operational pacification program that produced the opposite of its intended effect.',
      },
      {
        id: 'cable-243',
        term: 'State Department Cable 243 (August 24, 1963)',
        phonetic: 'KAY-bul TOO FOR-TEE THREE',
        definition:
          'Top-secret diplomatic telegram drafted by Roger Hilsman and approved by JFK informing Ambassador Henry Cabot Lodge Jr. that the U.S. would no longer tolerate Diem’s brother Nhu and would support a military coup if Diem refused to remove him.',
        significance:
          'The green light from Washington to dissident ARVN generals that precipitated the November 1963 coup against Diem.',
        examTip: 'Demonstrates direct American complicity in the overthrow of South Vietnam’s head of state.',
      },
    ],
  },
  quiz: [
    {
      id: 'c3-q1',
      question:
        'What was the primary military significance of the January 1963 Battle of Ap Bac?',
      options: [
        'It marked the first direct combat clash between American and North Vietnamese regular infantry.',
        'A small force of 350 Viet Cong guerrillas successfully defeated 1,500 heavily armed ARVN troops equipped with American helicopters and armored vehicles.',
        'It resulted in the destruction of the Ho Chi Minh Trail in Laos.',
        'It was a decisive tactical victory that convinced President Kennedy to withdraw all advisers.',
      ],
      correctIndex: 1,
      rationale:
        'At Ap Bac, 350 dug-in Viet Cong guerrillas held off 1,500 ARVN troops backed by artillery, M113 armored personnel carriers, and U.S. helicopters, shooting down five helicopters and killing three American advisers. It shattered MACV claims that ARVN was winning the ground war.',
      citationRef: 'c3-1',
    },
    {
      id: 'c3-q2',
      question:
        'What event in June 1963 crystallized global opposition to the Diem regime and prompted President Kennedy to state that "no news picture in history has generated so much emotion around the world"?',
      options: [
        'The communist takeover of the central highlands.',
        'The self-immolation of Buddhist monk Thich Quang Duc in an intersection in downtown Saigon.',
        'The bombing of the American embassy by Viet Cong sappers.',
        'The execution of American prisoners of war on national television.',
      ],
      correctIndex: 1,
      rationale:
        'On June 11, 1963, 66-year-old Buddhist monk Thich Quang Duc set himself on fire in protest of Diem’s religious discrimination. Malcolm Browne’s Pulitzer Prize-winning photograph shocked the global public and convinced the White House that Diem had lost all moral legitimacy.',
      citationRef: 'c3-2',
    },
    {
      id: 'c3-q3',
      question:
        'What immediate political consequence followed the November 1–2, 1963 coup and execution of President Ngo Dinh Diem?',
      options: [
        'South Vietnam established a stable democratic parliament that held nationwide elections.',
        'The Viet Cong dissolved their army and negotiated an immediate peace agreement.',
        'A chaotic series of twelve revolving-door military coups and counter-coups severely destabilized the Saigon government.',
        'The United States immediately evacuated all military personnel and ended aid.',
      ],
      correctIndex: 2,
      rationale:
        'Rather than stabilizing South Vietnam, Diem’s death created a political vacuum. Over the next eighteen months, rival ARVN generals staged twelve successive coups and cabinet reshuffles, leaving the rural countryside almost completely open to Viet Cong expansion.',
      citationRef: 'c3-3',
    },
  ],
  flashcards: [
    {
      id: 'c3-fc1',
      term: 'Thich Quang Duc',
      phonetic: 'TIK KWAHNG DUK',
      definition:
        'Mahayana Buddhist monk who burned himself to death in Saigon on June 11, 1963, protesting the Diem regime’s persecution of Buddhists.',
      significance:
        'Ignited the Buddhist Crisis that shattered American public support for Ngo Dinh Diem and led directly to the November 1963 coup.',
      examTip: 'His heart remained intact through cremation and became a sacred relic of religious resistance.',
    },
    {
      id: 'c3-fc2',
      term: 'MACV',
      phonetic: 'MAK-vee',
      definition:
        'Military Assistance Command, Vietnam; the unified U.S. joint-service command established in Saigon in February 1962 to oversee all American military advisory and combat efforts.',
      significance:
        'Commanded by General Paul Harkins, and later General William Westmoreland and Creighton Abrams, MACV directed all U.S. military strategy in the war.',
      examTip: 'Created by Kennedy in 1962 as American advisory commitment expanded beyond the original MAAG mandate.',
    },
    {
      id: 'c3-fc3',
      term: 'Agent Orange',
      phonetic: 'AY-junt OR-inj',
      definition:
        'A powerful chemical defoliant containing toxic dioxin sprayed by U.S. Air Force planes under Operation Ranch Hand to strip jungle canopy and destroy enemy food crops.',
      significance:
        'Caused devastating long-term health crises, birth defects, and cancer among Vietnamese civilians and American veterans for decades following the war.',
      examTip: 'First authorized by JFK in late 1961 as part of counterinsurgency chemical warfare operations.',
    },
  ],
};
