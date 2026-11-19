import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 10: THE 1975 COLLAPSE & THE FALL OF SAIGON ───────────────────────
export const THE_COLLAPSE_STUDY_DATA: ChapterStudyData = {
  chapterId: 'the-collapse',
  bigQuestion:
    'South Vietnam’s army was one of the best-equipped in the world on paper. Why did it collapse in just 55 days in the spring of 1975?',
  whyItMatters:
    'The 1975 Spring Offensive ended thirty years of war in Vietnam. It made the American withdrawal look like a defeat and united Vietnam under communist rule.',
  whatYouWillLearn: [
    'How cuts in U.S. aid, rising prices and rationed ammunition weakened the ARVN.',
    'How General Van Tien Dung’s surprise attack on Ban Me Thuot led President Thieu to order a panicked retreat.',
    'Why the ARVN 18th Division’s stand at Xuan Loc could not stop Tank 843 from crashing through the palace gates on April 30, 1975.',
  ],
  briefing: {
    summary:
      'After American troops left in 1973, South Vietnam’s economy sank as American military spending disappeared. Congress also cut military aid from $2.3 billion to under $700 million. ARVN units had to ration artillery shells, keep helicopters on the ground for lack of spare parts, and fight short of ammunition. In December 1974, communist forces attacked Phuoc Long province to see whether the U.S. would start bombing again. When no planes came, Hanoi approved a two-year campaign planned by General Van Tien Dung. On March 10, 1975, North Vietnamese tanks took Ban Me Thuot in the Central Highlands. In a panic, President Thieu ordered the whole Central Highlands abandoned without consulting his commanders. The retreat down the dirt road Route 7B became the “Column of Tears,” as soldiers left their units to rescue their families. Hue fell on March 25. Da Nang fell on March 30, crowded with 300,000 refugees. The ARVN 18th Division held at Xuan Loc for two weeks, but North Vietnam sped up its plans and launched the “Ho Chi Minh Campaign.” On the morning of April 30, 1975, after the rooftop helicopter evacuations of Operation Frequent Wind, North Vietnamese Tank 843 crashed through the gates of the Presidential Palace in Saigon. The war was over.',
    examTakeaways: [
      'Many causes: The ARVN fell apart because U.S. aid was cut, fuel and ammunition were rationed, Thieu gave panicked orders, and soldiers left to save their families.',
      'The Column of Tears: Thieu’s badly planned retreat gave up two-thirds of South Vietnam in three weeks, mostly without major battles.',
      'Operation Frequent Wind: The largest helicopter evacuation in history. Crews pushed helicopters off aircraft carriers into the sea to make room on deck.',
    ],
    keyTerms: [
      {
        id: 'fall-of-saigon',
        term: 'The Fall of Saigon (April 30, 1975)',
        phonetic: 'SAHY-gahn',
        definition:
          'North Vietnam’s army captured Saigon, the capital of South Vietnam. It ended the 55-day campaign that Hanoi called the Great Spring Victory.',
        significance:
          'It ended the Vietnam War and the Republic of Vietnam. The country was united under the communist government in Hanoi, and Saigon was renamed Ho Chi Minh City.',
        examTip: 'Shows up often. It is the last event in the Vietnam timeline on most exams.',
      },
      {
        id: 'operation-frequent-wind',
        term: 'Operation Frequent Wind (April 29–30, 1975)',
        imageId: 'frequent-wind-1975',
        phonetic: 'FREE-kwent WIND',
        definition:
          'The emergency helicopter evacuation of more than 1,300 Americans and 5,500 South Vietnamese at risk. Helicopters flew them from the U.S. Embassy and Tan Son Nhut Air Base to aircraft carriers offshore.',
        significance:
          'Its chaotic scenes became the last images of the American defeat. Hubert van Es photographed people climbing a ladder to a helicopter on a Saigon rooftop.',
        examTip: 'It stands for the rushed, painful end of America’s longest war of the 20th century.',
      },
      {
        id: 'battle-of-xuan-loc',
        term: 'Battle of Xuan Loc (April 9–21, 1975)',
        phonetic: 'SWAN LAHK',
        definition:
          'The last major stand by South Vietnam’s army. The ARVN 18th Division, under Brigadier General Le Minh Dao, defended a key highway town 40 miles northeast of Saigon.',
        significance:
          'It goes against the common idea that South Vietnamese troops would not fight. The 18th Division held off three North Vietnamese divisions for nearly two weeks before it was surrounded.',
        examTip: 'The last stand of South Vietnam’s army.',
      },
    ],
  },
  quiz: [
    {
      id: 'c10-q1',
      question:
        'What major strategic decision made by President Nguyen Van Thieu on March 14, 1975 transformed a localized setback into a catastrophic military collapse?',
      options: [
        'He ordered every ARVN division north to retake Ban Me Thuot at any cost',
        'He resigned and handed command of the army to U.S. officers in Saigon',
        'He ordered a hasty withdrawal from the Central Highlands to defend the south',
        'He sent his best divisions into Cambodia to cut the Ho Chi Minh Trail for good',
      ],
      correctIndex: 2,
      rationale:
        'After Ban Me Thuot fell, Thieu held a secret meeting at Cam Ranh. He suddenly ordered the whole II Corps to leave the Central Highlands down the dirt road Route 7B. The retreat became the “Column of Tears,” and South Vietnam lost 75% of its tanks and artillery without a fight.',
      citationRef: 'c10-1',
    },
    {
      id: 'c10-q2',
      question:
        'How did U.S. congressional actions between 1973 and 1974 directly impact the combat readiness of the South Vietnamese military (ARVN)?',
      options: [
        'Congress cut military aid sharply, leaving ARVN short of ammunition and parts',
        'Congress raised aid but required ARVN to buy only American-made weapons',
        'Congress sent U.S. advisers back to retrain ARVN units in new defensive tactics',
        'Congress shifted all aid from the army to South Vietnam’s navy and air force',
      ],
      correctIndex: 0,
      rationale:
        'Congress faced rising prices, the 1973 oil crisis and anger over corruption in Saigon, so it cut military aid. By 1975, ARVN artillery units could fire only three shells per day, and more than half of South Vietnam’s transport helicopters sat on the ground for lack of spare parts.',
      citationRef: 'c10-1',
    },
    {
      id: 'c10-q3',
      question:
        'At 11:30 AM on April 30, 1975, what historic symbolic action marked the official end of the Republic of Vietnam?',
      options: [
        'President Ford signed a surrender agreement at the United Nations in New York',
        'A North Vietnamese tank broke through the gates of the Presidential Palace',
        'The last U.S. helicopter lifted off from the roof of the American embassy',
        'South Vietnam’s navy shelled the city to stop communist forces from entering it',
      ],
      correctIndex: 1,
      rationale:
        'North Vietnamese Tank 843 crashed through the gates of the Independence Palace in Saigon. Minutes later, soldiers entered the cabinet room, where South Vietnam’s last president, Duong Van Minh, surrendered without conditions. Thirty years of war were over.',
      citationRef: 'c10-2',
    },
    {
      id: 'c10-q4',
      imageId: 'frequent-wind-1975',
      question:
        'The scene in the photograph took place during which event?',
      options: [
        'The landing of U.S. Marines at Da Nang in 1965',
        'The return of American prisoners of war in 1973',
        'The Tet Offensive attack on Saigon in 1968',
        'The evacuation of Saigon in April 1975',
      ],
      correctIndex: 3,
      rationale:
        'In Operation Frequent Wind, April 29–30, 1975, helicopters carried Americans and South Vietnamese to Navy ships as Saigon fell. Crews pushed helicopters overboard to clear the decks.',
    },
  ],
  flashcards: [
    {
      id: 'c10-fc1',
      term: 'General Van Tien Dung',
      phonetic: 'VAHN TYEN ZUNG',
      definition:
        'A senior North Vietnamese general and chief of staff of the army. He planned and commanded the final 1975 offensive.',
      significance:
        'His plan broke South Vietnam’s defenses in 55 days. He took over from General Giap as North Vietnam’s main battlefield commander.',
      examTip: 'He wrote North Vietnam’s official account of the campaign, Our Great Spring Victory.',
    },
    {
      id: 'c10-fc2',
      term: 'The “Column of Tears”',
      phonetic: 'KOL-um of TEERZ',
      definition:
        'The chaotic retreat of 200,000 ARVN soldiers and more than 400,000 civilian refugees down the dirt road Route 7B, from the Central Highlands to the coast in March 1975.',
      significance:
        'North Vietnamese artillery shelled the column again and again, and only a small part of it reached the coast. It showed South Vietnam’s command falling apart.',
      examTip: 'One of the worst military and humanitarian disasters in Vietnam’s history.',
    },
    {
      id: 'c10-fc3',
      term: 'President Duong Van Minh (“Big Minh”)',
      phonetic: 'ZWOONG VAHN MIN',
      definition:
        'A South Vietnamese general who led the 1963 coup against Diem. He was South Vietnam’s last president, for just 48 hours in April 1975.',
      significance:
        'On April 30, 1975, he ordered all ARVN soldiers over Saigon radio to stop fighting. The surrender spared the capital from street-by-street destruction.',
      examTip: 'He told the arriving communist officers he was ready to hand over power. They answered that he had no power left to give.',
    },
  ],
};
