import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 10: THE 1975 COLLAPSE & THE FALL OF SAIGON ───────────────────────
export const THE_COLLAPSE_STUDY_DATA: ChapterStudyData = {
  chapterId: 'the-collapse',
  bigQuestion:
    'How did South Vietnam’s army collapse in just 55 days?',
  whyItMatters:
    'The fall of Saigon ended thirty years of war and reunited Vietnam under communist rule. For Americans, it made the withdrawal look like a defeat.',
  whatYouWillLearn: [
    'How cuts in U.S. aid, rising prices and rationed ammunition weakened the ARVN.',
    'How General Van Tien Dung’s surprise attack on Ban Me Thuot led President Thieu to order a panicked retreat.',
    'Why the ARVN 18th Division’s stand at Xuan Loc could not stop Tank 843 from crashing through the palace gates on April 30, 1975.',
  ],
  briefing: {
    summary:
      'After American troops left in 1973, South Vietnam’s economy sank as American military spending disappeared. Congress also cut military aid from $2.3 billion to under $700 million. ARVN units had to ration artillery shells, keep helicopters on the ground for lack of spare parts, and fight short of ammunition. In December 1974, communist forces attacked Phuoc Long province to see whether the U.S. would start bombing again. When no planes came, Hanoi approved a two-year campaign planned by General Van Tien Dung. On March 10, 1975, North Vietnamese tanks took Ban Me Thuot in the Central Highlands. In a panic, President Thieu ordered the whole Central Highlands abandoned without consulting his commanders. The retreat down the dirt road Route 7B became the Column of Tears, as soldiers left their units to rescue their families. Hue fell on March 25. Da Nang fell on March 30, crowded with 300,000 refugees. The ARVN 18th Division held at Xuan Loc for two weeks, but North Vietnam sped up its plans and launched the Ho Chi Minh Campaign. On the morning of April 30, 1975, after the rooftop helicopter evacuations of Operation Frequent Wind, North Vietnamese Tank 843 crashed through the gates of the Presidential Palace in Saigon. The war was over.',
    examTakeaways: [
      'No single cause explains the collapse. U.S. aid was cut, fuel and ammunition were rationed, Thieu gave panicked orders, and soldiers left their posts to save their families.',
      'Thieu ordered his army out of the Central Highlands in March 1975. The retreat, known as the Column of Tears, gave up two-thirds of South Vietnam in three weeks, mostly without major battles.',
      'In Operation Frequent Wind, the largest helicopter evacuation in history, crews pushed helicopters off aircraft carriers into the sea to make room on deck.',
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
        'What decision did Thieu make on March 14, 1975, that turned a local defeat into a collapse?',
      options: [
        'He ordered every ARVN division north to retake Ban Me Thuot at any cost',
        'He resigned and handed command of the army to U.S. officers in Saigon',
        'He ordered a hasty withdrawal from the Central Highlands to defend the south',
        'He sent his best divisions into Cambodia to cut the Ho Chi Minh Trail for good',
      ],
      correctIndex: 2,
      rationale:
        'After Ban Me Thuot fell, Thieu held a secret meeting at Cam Ranh. He suddenly ordered the whole II Corps to leave the Central Highlands down the dirt road Route 7B. The retreat became the Column of Tears, and South Vietnam lost 75% of its tanks and artillery without a fight.',
      citationRef: 'c10-1',
    },
    {
      id: 'c10-q2',
      question:
        'How did Congress’s actions in 1973 and 1974 affect South Vietnam’s army?',
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
        'What happened at 11:30 a.m. on April 30, 1975, that marked the end of South Vietnam?',
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
    {
      id: 'c10-q5',
      question: 'What did the Case-Church Amendment, passed in June 1973, ban?',
      options: [
        'Sales of American weapons to South Vietnam after 1973',
        'All U.S. military action in Indochina after August 15, 1973',
        'U.S. ground troops in Cambodia and Laos, but not air power',
        'Bombing of North Vietnam north of the 20th parallel by B-52s',
      ],
      correctIndex: 1,
      rationale: 'Congress passed it by margins large enough to override a veto. It banned all U.S. military action in Indochina after August 15, 1973, so Nixon’s private promises of air support to Thieu could no longer be kept.',
      citationRef: 'c10-1',
    },
    {
      id: 'c10-q6',
      question: 'Congress cut military aid to South Vietnam from $2.3 billion to less than what?',
      options: [
        '$1.5 billion',
        '$1 billion',
        '$700 million',
        '$100 million',
      ],
      correctIndex: 2,
      rationale: 'Aid fell from $2.3 billion to less than $700 million. South Vietnamese units had to ration artillery shells and bullets, and helicopters sat on the ground for lack of spare parts.',
      citationRef: 'c10-1',
    },
    {
      id: 'c10-q7',
      question: 'Why did communist forces attack Phuoc Long province in December 1974?',
      options: [
        'To capture Saigon before the end of the year',
        'To seize rice-growing land in the Mekong Delta region',
        'To open a new route for the refugees of the Column of Tears',
        'To test whether the United States would bomb again',
      ],
      correctIndex: 3,
      rationale: 'Hanoi wanted to see if the United States would start bombing again. Congress turned down Ford’s requests for emergency aid and no air strikes came, so Hanoi concluded the Americans would not come back.',
      citationRef: 'c10-2',
    },
    {
      id: 'c10-q8',
      question: 'What was the Column of Tears?',
      options: [
        'The panicked retreat down Route 7B from the Highlands',
        'A march of Buddhist monks to the Presidential Palace',
        'The airlift of Vietnamese children to the United States',
        'The march of North Vietnamese prisoners back to the North',
      ],
      correctIndex: 0,
      rationale: 'After Thieu ordered the army out of the Central Highlands, more than 200,000 soldiers and 400,000 civilians fled down an unpaved road, Route 7B, and were shelled along the way.',
      citationRef: 'c10-1',
    },
    {
      id: 'c10-q9',
      question: 'What did the ARVN 18th Division’s stand at Xuan Loc in April 1975 show?',
      options: [
        'That the U.S. Air Force was still flying missions',
        'That some South Vietnamese units fought hard before falling',
        'That Hanoi could not take any city without help from Chinese troops',
        'That Thieu had stopped giving orders to the army',
      ],
      correctIndex: 1,
      rationale: 'Under Brigadier General Le Minh Dao, the 18th Division held out from April 9 to 21 and inflicted heavy losses on three North Vietnamese divisions before it was outflanked. It shows that the idea that South Vietnamese troops simply refused to fight is not the whole story.',
      citationRef: 'c10-1',
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
      term: 'The Column of Tears',
      phonetic: 'KOL-um of TEERZ',
      definition:
        'The chaotic retreat of 200,000 ARVN soldiers and more than 400,000 civilian refugees down the dirt road Route 7B, from the Central Highlands to the coast in March 1975.',
      significance:
        'North Vietnamese artillery shelled the column again and again, and only a small part of it reached the coast. It showed South Vietnam’s command falling apart.',
      examTip: 'One of the worst military and humanitarian disasters in Vietnam’s history.',
    },
    {
      id: 'c10-fc3',
      term: 'President Duong Van Minh (Big Minh)',
      phonetic: 'ZWOONG VAHN MIN',
      definition:
        'A South Vietnamese general who led the 1963 coup against Diem. He was South Vietnam’s last president, for just 48 hours in April 1975.',
      significance:
        'On April 30, 1975, he ordered all ARVN soldiers over Saigon radio to stop fighting. The surrender spared the capital from street-by-street destruction.',
      examTip: 'He told the arriving communist officers he was ready to hand over power. They answered that he had no power left to give.',
    },
  ],
};
