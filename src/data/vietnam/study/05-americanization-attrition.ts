import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 5: AMERICANIZATION & THE WAR OF ATTRITION ───────────────────────
export const ATTRITION_STUDY_DATA: ChapterStudyData = {
  chapterId: 'americanization-attrition',
  bigQuestion:
    'Why did General Westmoreland’s strategy of attrition and search-and-destroy fail to break Hanoi’s will to fight?',
  whyItMatters:
    'Explains how America escalated to over 500,000 ground troops and dropped more bombs than in WWII, yet became trapped in a military stalemate governed by flawed body count metrics.',
  whatYouWillLearn: [
    'How the March 1965 landing of Marines at Da Nang and Operation Rolling Thunder Americanized the war.',
    'How the Battle of Ia Drang (1965) confirmed helicopter air-mobility for the U.S. and ambush tactics for the NVA.',
    'Why Alain Enthoven’s Pentagon systems analysis proved that communist forces, not MACV, controlled the rate of casualties.',
  ],
  briefing: {
    summary:
      'In March 1965, President Johnson deployed the first American ground combat troops (3,500 Marines at Da Nang) and launched Operation Rolling Thunder, a three-year sustained bombing campaign against North Vietnam. General William Westmoreland implemented a strategy of attrition: using overwhelming firepower, B-52 strikes, and helicopter air-cavalry to kill enemy soldiers faster than North Vietnam could replace them—reaching the mathematical "crossover point." In November 1965, the Battle of the Ia Drang Valley proved that American air-mobility could inflict devastating casualties, but also taught North Vietnamese commanders to "grab them by the belt buckle"—fighting so close that American airpower could not be used without killing friendly troops. Crucially, Pentagon systems analysis revealed that communist forces initiated over 75% of firefights, allowing them to regulate their own casualty rates and nullify the attrition model.',
    examTakeaways: [
      'Americanization of the War: In 1965, LBJ shifted the war from an advisory mission to a direct American war, expanding troop levels from 23,000 to over 184,000 in one year (peaking at 543,000 in 1969).',
      'Flawed "Body Count" Metric: Lacking territorial frontlines, MACV used body counts to measure progress, creating intense institutional pressure to inflate casualty figures and count dead civilians as combatants.',
      'Failure of the Crossover Point: North Vietnam’s annual draft pool (~200,000 young men reaching age 18) far exceeded the maximum sustainable loss rate MACV could inflict.',
    ],
    keyTerms: [
      {
        id: 'search-and-destroy',
        term: 'Search and Destroy',
        phonetic: 'SERCH and dih-STROY',
        definition:
          'MACV ground combat doctrine where American infantry platoons were inserted by helicopter into hostile rural areas to locate enemy units, destroy them with artillery and airstrikes, and immediately withdraw.',
        significance:
          'Because the territory was not held or secured, communist forces routinely re-occupied villages the moment American helicopters departed, alienating rural peasants.',
        examTip: 'Contrasted with "enclave" or "clear and hold" pacification strategies.',
      },
      {
        id: 'operation-rolling-thunder',
        term: 'Operation Rolling Thunder (1965–1968)',
        phonetic: 'ROH-ling THUN-der',
        definition:
          'The sustained, gradual aerial bombardment campaign conducted by the U.S. Air Force and Navy against North Vietnam, dropping over 864,000 tons of bombs.',
        significance:
          'Failed to coerce Hanoi into halting infiltration or destroy its decentralized agrarian economy; reinforced North Vietnamese national resolve and stimulated Soviet air-defense aid.',
        examTip: 'Dropped more bomb tonnage on North Vietnam than the total dropped on the entire Pacific theater in WWII.',
      },
      {
        id: 'ia-drang-valley',
        term: 'Battle of the Ia Drang Valley (Nov 1965)',
        phonetic: 'EE-uh DRAHNG',
        definition:
          'The first major conventional battle between American soldiers (1st Cavalry Division Airmobile) and North Vietnamese Army regulars in the Central Highlands.',
        significance:
          'Both sides claimed victory: the U.S. validated its air-mobility and helicopter firepower concepts, while the NVA learned tactical counter-measures (close-quarters fighting).',
        examTip: 'Subject of the famous memoir and film We Were Soldiers Once... and Young.',
      },
    ],
  },
  quiz: [
    {
      id: 'c5-q1',
      question:
        'What was the primary operational objective of General William Westmoreland’s "strategy of attrition"?',
      options: [
        'To conquer and permanently annex North Vietnamese territory up to the Chinese border.',
        'To reach the "crossover point" where allied firepower would kill or capture enemy soldiers faster than North Vietnam could replace them.',
        'To construct an impenetrable physical concrete wall along the 17th parallel.',
        'To train the South Vietnamese military to take over 100% of combat operations by 1966.',
      ],
      correctIndex: 1,
      rationale:
        'Westmoreland defined victory not by territory taken, but by reaching the "crossover point"—inflicting casualties at a rate exceeding North Vietnam’s demographic ability to recruit and infiltrate replacements, forcing Hanoi to abandon the insurgency.',
      citationRef: 'c5-1',
    },
    {
      id: 'c5-q2',
      question:
        'What tactical lesson did North Vietnamese Army commanders learn from the bloody fighting at LZ X-Ray in the Ia Drang Valley in November 1965?',
      options: [
        'That they should engage American forces only in open daylight tank battles.',
        'To "grab them by the belt buckle"—fighting in extreme close-quarters so American artillery and close air support could not fire without hitting friendly troops.',
        'To immediately surrender all heavy weapons and convert to pure guerrilla tactics.',
        'That American soldiers would refuse to fight if confronted with massed armor.',
      ],
      correctIndex: 1,
      rationale:
        'General Vo Nguyen Giap and battlefield commander Chu Huy Man realized that American artillery and airpower were devastating at long range. By engaging American troops at point-blank range ("grabbing the belt buckle"), communist units neutralized U.S. fire superiority.',
      citationRef: 'c5-2',
    },
    {
      id: 'c5-q3',
      question:
        'What critical flaw in the attrition strategy was discovered by the Department of Defense Systems Analysis division under Alain Enthoven?',
      options: [
        'American ammunition factories could not manufacture enough artillery shells.',
        'Communist forces initiated over 75% of firefights, allowing them to disengage and regulate their casualty rates whenever losses mounted.',
        'North Vietnam had run out of food and was relying entirely on food imports from Cuba.',
        'South Vietnamese soldiers were secretly fighting on the side of North Vietnam in every province.',
      ],
      correctIndex: 1,
      rationale:
        'Pentagon systems analysis proved that communist forces decided when, where, and for how long over 75% of combat engagements occurred. Because the enemy held the tactical initiative, they could simply break contact and avoid combat when losses became excessive.',
      citationRef: 'c5-3',
    },
  ],
  flashcards: [
    {
      id: 'c5-fc1',
      term: 'General William Westmoreland',
      phonetic: 'WEST-mor-lund',
      definition:
        'Four-star U.S. Army general who commanded MACV from 1964 to 1968, championing search-and-destroy tactics, body counts, and attrition warfare.',
      significance:
        'Assumed American technological and material superiority would force North Vietnam to capitulate; relieved of command following the 1968 Tet Offensive.',
      examTip: 'Famously declared in November 1967 that there was "light at the end of the tunnel" right before Tet.',
    },
    {
      id: 'c5-fc2',
      term: 'The "Crossover Point"',
      phonetic: 'KROS-oh-ver POYNT',
      definition:
        'The statistical threshold at which MACV calculated that enemy casualties would exceed North Vietnam’s ability to replenish troops through drafts and recruiting.',
      significance:
        'The core mathematical justification for Westmoreland’s war of attrition, which failed because North Vietnam’s demographic pool and political endurance were far greater than estimated.',
      examTip: 'Key conceptual term for analyzing the flawed metrics of the Vietnam War.',
    },
    {
      id: 'c5-fc3',
      term: 'Free-Fire Zone',
      phonetic: 'FREE FYRE ZOHN',
      definition:
        'Designated rural areas from which civilian populations were ordered evacuated, allowing American and ARVN forces to fire artillery and drop bombs on any moving person without prior clearance.',
      significance:
        'Resulted in heavy civilian casualties and the displacement of millions of rural peasants into squalid refugee slums around Saigon and Da Nang.',
      examTip: 'Created widespread rural hostility toward the South Vietnamese government and the U.S. military.',
    },
  ],
};
