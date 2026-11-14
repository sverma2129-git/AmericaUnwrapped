import { ChapterData } from '@/types/vietnam';
import { PRIMARY_DOCUMENTS } from '../sources';

const chapter: ChapterData = {
  id: 'memory-and-the-argument',
  number: 12,
  timeframe: 'The Argument',
  leadImageId: 'mcnamara-map-1965',
  galleryImageIds: ['memorial-dedication-1982'],
  title: 'How historians argue about the war',
  subtitle: 'Four ways of explaining Vietnam, and the evidence behind each',
  summary:
    'Fifty years after the war ended, historians and citizens still argue about why it happened, how it was fought, and what it means. There are four main schools of thought: Orthodox, Revisionist, Post-Revisionist, and one built on Vietnamese archives. Learning them shows how the same evidence can be read in different ways, and why no single account of the war is accepted by everyone.',
  whatHappened: {
    narrative: [
      'Unlike World War II, which established a broad consensus regarding moral clarity and strategic necessity, the Vietnam War produced deep intellectual and political fractures. These historiographical divisions do not represent simple political talking points; they reflect fundamentally different interpretations of primary documents, military capabilities, and political legitimacy.',
      'The **Orthodox or Liberal Realist school** (David Halberstam, Arthur Schlesinger Jr., George Herring) views the war as an unwinnable quagmire from the start. In this interpretation, American leaders were blinded by rigid Cold War containment dogmatism, misreading a genuine post-colonial nationalist revolution as part of a monolithic Sino-Soviet conspiracy. Because South Vietnam’s government lacked indigenous political legitimacy, no quantity of American military power could construct a viable non-communist state.',
      'The **Revisionist or Conservative school** (Guenter Lewy, Harry Summers, Lewis Sorley) argues that the war was a noble cause to defend a developing ally against totalitarian aggression, and was militarily winnable. Revisionists contend that General Creighton Abrams’ "One War" strategy successfully pacified the countryside after 1968, and that South Vietnam’s collapse in 1975 was caused not by military failure, but by congressional aid cuts, media bias, and political abandonment.',
      'Over the past two decades, the opening of Vietnamese, Soviet, and Chinese archives has fueled a **Post-Revisionist and Internationalist school** (Fredrik Logevall, Lien-Hang Nguyen, Pierre Asselin). This scholarship moves beyond the winnable/unwinnable dichotomy by treating Vietnamese actors not as passive pawns, but as autonomous agents who manipulated their superpower sponsors. It reveals Hanoi as an ideologically militant regime led by Le Duan that suppressed domestic moderates, while restoring agency to South Vietnamese civil society. Concurrently, literary voices such as North Vietnamese veterans **Bao Ninh** (*The Sorrow of War*) and **Duong Thu Huong** challenged official heroic state memory, while the museum in Ho Chi Minh City evolved through three distinct name changes (*Exhibition House for US and Puppet Crimes* to *War Crimes Museum* to *War Remnants Museum*) reflecting diplomatic normalization in 1995.',
    ],
    keyEvents: [
      { date: '1972', title: 'Halberstam publishes The Best and the Brightest', detail: 'A founding orthodox book about how smart, confident officials led the country into war.' },
      { date: '1981', title: 'Summers publishes On Strategy', detail: 'A revisionist book arguing the military should have focused on blocking invasion routes from the North.' },
      { date: '1990', title: 'Bao Ninh publishes The Sorrow of War', detail: 'A North Vietnamese veteran’s novel shows the war as grief and trauma, not the heroic story the state told.' },
      { date: '1995', title: 'The U.S. and Vietnam restore relations', detail: 'President Bill Clinton and Prime Minister Vo Van Kiet restore full relations between the two countries.' },
      { date: '2012', title: 'Lien-Hang Nguyen publishes Hanoi’s War', detail: 'A study based on Vietnamese records of Le Duan’s police state, his purges and his wartime diplomacy.' },
    ],
  },
  washington: {
    keyActors: ['Historians, Veterans, & Citizens: Realists vs Revisionists vs Internationalists'],
    strategicObjective:
      'Derive military and foreign policy lessons from the conflict to guide modern national security doctrine.',
    underlyingAssumptions: [
      'Orthodox: Military power cannot substitute for local political legitimacy in counterinsurgency.',
      'Revisionist: Political restrictions and civilian micromanagement prevented the military from achieving victory.',
    ],
    internalDebates: [
      'Whether Kennedy would have withdrawn had he lived past 1963.',
      'Whether the "decent interval" was a deliberate Nixon strategy or an ex-post facto critique.',
    ],
    homeFrontConstraints: [
      'The cultural legacy: how the memory of Vietnam shaped American public debates over military interventions in the Persian Gulf, the Balkans, Afghanistan, and Iraq.',
    ],
    primaryDocumentRef: 'ap-casualty-disclosure-1995',
  },
  hanoi: {
    keyActors: ['Official State Historians vs Independent Researchers & Diaspora Voices'],
    strategicObjective:
      'Balance official party triumphalism ("The Great Patriotic Resistance Against American Imperialism") with archival evidence and diaspora accounts.',
    underlyingAssumptions: [
      'Official Party History: Victory was the inevitable triumph of Marxism-Leninism and national unity under the Communist Party.',
      'Archival & Diaspora Scholarship: Explores the immense human sacrifice, internal political repression, and the distinct non-communist identity of South Vietnam.',
    ],
    internalDebates: [
      'Ongoing official sensitivity regarding controversial episodes: the 1968 Hue civilian massacres, the 1979 Sino-Vietnamese War, and re-education camp conditions.',
    ],
    homeFrontConstraints: [
      'Generational transition: a youthful population focused on economic development and global integration rather than wartime ideology.',
    ],
    primaryDocumentRef: 'ap-casualty-disclosure-1995',
  },
  causalChain: {
    decision: {
      actor: 'Historians & Readers',
      action: 'Interrogate historical evidence critically, recognizing multiple perspectives and documented causal chains.',
      date: 'Present Day',
    },
    assumption: {
      premise: 'History can be reduced to a single moral verdict or partisan talking point.',
      blindSpot: 'Treating historical actors as heroes or villains obscures the real constraints, assumptions, and unintended consequences that drove decisions.',
    },
    result: {
      immediate: 'Deeper historical understanding: the reader departs thinking, "I understand how this happened," rather than merely reciting facts.',
      counterAction: 'Ongoing scholarly debate enriched by newly declassified archival collections worldwide.',
    },
    unintendedConsequence:
      'Understanding how decisions produced consequences on both sides fosters intellectual rigor and historical humility.',
    nextDecision:
      'Explore the primary source documents and interactive evidence modules above.',
  },
  interactiveModule: {
    id: 'competing-arguments',
    type: 'competing-arguments',
    title: 'Four schools of thought',
    prompt:
      'Compare what each of the four schools claims, what evidence it relies on, and how other historians have criticized it.',
  },
  primaryDocuments: [PRIMARY_DOCUMENTS['ap-casualty-disclosure-1995']],
  nextQuestion: {
    question: 'How does the story change when both sides get the same scrutiny?',
    framing:
      'You have followed thirty years of decisions from 1945 to 1975, and what came after. Go back to any turning point on the timeline, or read the original documents again.',
  },
  citations: [
    { id: 'c12-1', marker: 1, citation: 'Halberstam, David. The Best and the Brightest. Random House, 1972.', sourceType: 'academic-monograph' },
    { id: 'c12-2', marker: 2, citation: 'Summers, Harry G. On Strategy: A Critical Analysis of the Vietnam War. Presidio Press, 1982.', sourceType: 'academic-monograph' },
    { id: 'c12-3', marker: 3, citation: 'Logevall, Fredrik. Choosing War: The Lost Chance for Peace and the Escalation of War in Vietnam. University of California Press, 1999.', sourceType: 'academic-monograph' },
    { id: 'c12-4', marker: 4, citation: 'Nguyen, Lien-Hang T. Hanoi’s War: An International History of the War for Peace in Vietnam. University of North Carolina Press, 2012.', sourceType: 'academic-monograph' },
  ],
};

export default chapter;
