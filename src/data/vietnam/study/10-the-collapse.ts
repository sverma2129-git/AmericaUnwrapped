import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 10: THE 1975 COLLAPSE & THE FALL OF SAIGON ───────────────────────
export const THE_COLLAPSE_STUDY_DATA: ChapterStudyData = {
  chapterId: 'the-collapse',
  bigQuestion:
    'Why did the South Vietnamese military—on paper one of the best-equipped armies in the world—collapse in just 55 days in the spring of 1975?',
  whyItMatters:
    'The 1975 Spring Offensive marks the end of the thirty-year Vietnam War, the final humiliation of the American withdrawal, and the unification of Vietnam under communist rule.',
  whatYouWillLearn: [
    'How U.S. congressional aid cuts, inflation, and ammunition rationing crippled the ARVN.',
    'How General Van Tien Dung’s surprise assault on Ban Me Thuot triggered President Thieu’s catastrophic panic retreat.',
    'Why the fierce stand of the ARVN 18th Division at Xuan Loc could not prevent Tank 843 from crashing through the gates of the Presidential Palace on April 30, 1975.',
  ],
  briefing: {
    summary:
      'Following the 1973 American withdrawal, South Vietnam’s economy cratered as military expenditures vanished. Simultaneously, a disillusioned U.S. Congress slashed military aid from $2.3 billion to under $700 million, forcing ARVN units to ration artillery shells, ground helicopters for lack of spare parts, and fight with scarce ammunition. In December 1974, communist forces attacked Phuoc Long province to test whether the U.S. would resume bombing; when no strikes occurred, Hanoi authorized a two-year campaign planned by General Van Tien Dung. On March 10, 1975, PAVN armor captured Ban Me Thuot in the Central Highlands. In panic, President Thieu ordered the entire Central Highlands abandoned without consultation, turning the retreat down unpaved Route 7B into the disastrous "Column of Tears" where soldiers abandoned units to rescue fleeing families. Hue fell on March 25; Da Nang collapsed on March 30 amid 300,000 refugees. Despite a heroic two-week stand by the ARVN 18th Division at Xuan Loc, North Vietnamese forces accelerated their timetable into the "Ho Chi Minh Campaign." On the morning of April 30, 1975, following the frantic rooftop helicopter evacuations of Operation Frequent Wind, North Vietnamese Tank 843 rammed through the gates of Saigon’s Presidential Palace, ending the war.',
    examTakeaways: [
      'Multi-Causal Collapse: The ARVN collapse was caused by a combination of severe U.S. aid reductions, fuel/ammo rationing, strategic panic orders from President Thieu, and the psychological collapse of soldier family networks.',
      'The Column of Tears: Thieu’s disastrous uncoordinated retreat order surrendered two-thirds of South Vietnam in three weeks without major pitched combat.',
      'Operation Frequent Wind: The largest helicopter evacuation in history, capturing the iconic image of helicopters being pushed over the side of aircraft carriers into the South China Sea to clear flight decks.',
    ],
    keyTerms: [
      {
        id: 'fall-of-saigon',
        term: 'The Fall of Saigon (April 30, 1975)',
        phonetic: 'SAHY-gahn',
        definition:
          'The capture of the South Vietnamese capital by the North Vietnamese Army (PAVN), concluding the 55-day Great Spring Victory.',
        significance:
          'Marked the definitive end of the Vietnam War and the dissolution of the Republic of Vietnam, unifying the nation under the communist government in Hanoi and renaming the city Ho Chi Minh City.',
        examTip: 'High frequency. Concludes the Cold War Indochina timeline on exams.',
      },
      {
        id: 'operation-frequent-wind',
        term: 'Operation Frequent Wind (April 29–30, 1975)',
        phonetic: 'FREE-kwent WIND',
        definition:
          'The emergency tactical helicopter evacuation of over 1,300 American personnel and 5,500 at-risk South Vietnamese citizens from the U.S. Embassy and Tan Son Nhut Air Base to aircraft carriers offshore.',
        significance:
          'The chaotic final imagery of the American defeat; immortalized by Hubert Van Es’s famous photograph of refugees climbing a ladder to a rooftop helicopter.',
        examTip: 'Symbolizes the rushed and tragic conclusion of America’s longest 20th-century war.',
      },
      {
        id: 'battle-of-xuan-loc',
        term: 'Battle of Xuan Loc (April 9–21, 1975)',
        phonetic: 'SWAN LAHK',
        definition:
          'The final major defensive stand mounted by the ARVN 18th Division under Brigadier General Le Minh Dao, defending the strategic highway gateway 40 miles northeast of Saigon.',
        significance:
          'Refutes the common post-war stereotype that South Vietnamese troops universally refused to fight; the 18th Division held off three PAVN divisions for nearly two weeks until encircled.',
        examTip: 'The "last stand" of the Republic of Vietnam military.',
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
        'Following the loss of Ban Me Thuot, Thieu held a secret meeting at Cam Ranh and abruptly ordered the entire II Corps to evacuate the Central Highlands down unpaved Route 7B. The retreat degenerated into the "Column of Tears," costing South Vietnam 75% of its armor and artillery without a fight.',
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
        'Facing double-digit inflation, the 1973 oil crisis, and disillusionment with Saigon corruption, Congress slashed military assistance. By 1975, ARVN artillery batteries were restricted to firing only three shells per day, and more than half of South Vietnam’s transport helicopters were grounded for lack of spare parts.',
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
        'North Vietnamese Army Tank 843 rammed through the perimeter gates of the Independence Palace in Saigon. Minutes later, soldiers entered the cabinet room where South Vietnam’s last president, Duong Van Minh, surrendered unconditionally, concluding thirty years of war.',
      citationRef: 'c10-2',
    },
  ],
  flashcards: [
    {
      id: 'c10-fc1',
      term: 'General Van Tien Dung',
      phonetic: 'VAHN TYEN ZUNG',
      definition:
        'Senior North Vietnamese general and Chief of Staff of the PAVN who planned and commanded the final 1975 Great Spring Victory.',
      significance:
        'Author of the military plan that shattered ARVN defenses in 55 days, succeeding General Giap as the primary operational commander of North Vietnam.',
      examTip: 'Wrote the official northern military history Our Great Spring Victory.',
    },
    {
      id: 'c10-fc2',
      term: 'The "Column of Tears"',
      phonetic: 'KOL-um of TEERZ',
      definition:
        'The chaotic, tragic retreat of 200,000 ARVN soldiers and over 400,000 civilian refugees down unpaved Route 7B from the Central Highlands to the coast in March 1975.',
      significance:
        'Repeatedly shelled by North Vietnamese artillery, only a fraction reached coastal safety; symbolized the catastrophic disintegration of South Vietnamese command.',
      examTip: 'One of the darkest humanitarian and military disasters in Vietnamese history.',
    },
    {
      id: 'c10-fc3',
      term: 'President Duong Van Minh ("Big Minh")',
      phonetic: 'ZWOONG VAHN MIN',
      definition:
        'South Vietnamese general who led the 1963 coup against Diem and served as the final President of South Vietnam for just 48 hours in April 1975.',
      significance:
        'Broadcast the unconditional surrender order over Saigon radio on April 30, 1975, ordering all ARVN soldiers to cease fire and preventing bloody street-by-street destruction of the capital.',
      examTip: 'Famously told communist officers: "I have been waiting since early morning to transfer power." They replied: "You cannot give up what you do not have."',
    },
  ],
};
