import { ChapterStudyData } from '@/types/study';

// ─── CHAPTER 12: MEMORY, LESSONS & HISTORIOGRAPHY ────────────────────────────
export const MEMORY_ARGUMENT_STUDY_DATA: ChapterStudyData = {
  chapterId: 'memory-and-the-argument',
  bigQuestion:
    'Was the Vietnam War an unwinnable quagmire from the start, or a noble cause squandered by civilian political restrictions and media distortion?',
  whyItMatters:
    'Examines the profound, ongoing historiographical debate between "Orthodox" and "Revisionist" historians that continues to shape American foreign policy, military doctrine, and political discourse.',
  whatYouWillLearn: [
    'The core arguments of the Orthodox School (Halberstam, Sheehan, Herring: the war was an unresolvable nationalist conflict).',
    'The core arguments of the Revisionist School (Summers, Moyar, Lewy: the war was winnable if fought without micromanagement).',
    'How the "Vietnam Syndrome" shaped subsequent American military doctrine (the Weinberger-Powell Doctrine) through the Gulf War and post-9/11 conflicts.',
  ],
  briefing: {
    summary:
      'Fifty years after the fall of Saigon, historians and policymakers remain deeply divided over the fundamental meaning of the Vietnam War. The Orthodox School—represented by historians such as David Halberstam, Neil Sheehan, and George Herring—argues that the war was an unwinnable quagmire from the outset: American leaders tragically misunderstood a protracted anti-colonial nationalist revolution as a Cold War proxy war, and no degree of conventional military firepower could build political legitimacy for an unpopular, corrupt Saigon government. Conversely, the Revisionist School—championed by military theorists like Harry Summers and historians like Mark Moyar and Guenter Lewy—argues that the war was a noble and winnable conflict: they contend that civilian politicians micromanaged the military, prohibited cross-border invasions of North Vietnamese sanctuaries, and that General Creighton Abrams’ pacification strategy was genuinely succeeding before Congress abandoned South Vietnam. The legacy of this debate produced the "Vietnam Syndrome"—a profound public and military reluctance to commit U.S. forces abroad without overwhelming domestic support, clear exit strategies, and decisive military force, as codified in the Weinberger-Powell Doctrine.',
    examTakeaways: [
      'The Orthodox vs. Revisionist Debate: Essential historiographical dichotomy for AP U.S. History essays and DBQs analyzing American foreign policy.',
      'The "Vietnam Syndrome": The post-war reluctance of the American public and Congress to support open-ended foreign military interventions.',
      'The Powell Doctrine: Direct military lesson formulated by General Colin Powell requiring overwhelming force, vital national interest, and a clear exit strategy before deploying combat troops.',
    ],
    keyTerms: [
      {
        id: 'orthodox-school',
        term: 'Orthodox Historiographical School',
        phonetic: 'OR-thuh-doks SKOOL',
        definition:
          'Historical school arguing that American intervention in Vietnam was fundamentally misguided, hubristic, and unwinnable because Vietnamese nationalism and revolutionary endurance could not be broken by foreign military power.',
        significance:
          'The dominant academic interpretation among university historians, emphasizing that the U.S. backed a corrupt southern regime that lacked indigenous popular legitimacy.',
        examTip: 'Key historians: George Herring, David Halberstam, Neil Sheehan, Stanley Karnow.',
      },
      {
        id: 'revisionist-school',
        term: 'Revisionist Historiographical School',
        phonetic: 'rih-VIZH-un-ist SKOOL',
        definition:
          'Historical school arguing that the war was a noble cause that could have been won if civilian politicians had not placed political restrictions on the military, or if Creighton Abrams’ pacification had been supported.',
        significance:
          'Prominent within military colleges and conservative political circles; argues that congressional aid cuts and media defeatism squandered a winnable war.',
        examTip: 'Key scholars: Harry Summers (On Strategy), Mark Moyar (Triumph Forsaken), Guenter Lewy.',
      },
      {
        id: 'powell-doctrine',
        term: 'The Powell Doctrine',
        phonetic: 'POW-ul DOK-trin',
        definition:
          'Military doctrine formulated by General Colin Powell stating that the U.S. should only commit combat troops if vital national security interests are at stake, with overwhelming force, clear objectives, public support, and an explicit exit strategy.',
        significance:
          'The definitive military codification of "lessons learned from Vietnam," successfully applied during the 1991 Persian Gulf War.',
        examTip: 'High frequency on modern post-Cold War foreign policy exam questions.',
      },
    ],
  },
  quiz: [
    {
      id: 'c12-q1',
      question:
        'What is the central historical argument of the "Orthodox School" of Vietnam War historiography?',
      options: [
        'The war was unwinnable: Washington mistook nationalism for Soviet expansion',
        'The war was winnable if civilian leaders had let the military fight freely',
        'The war was lost mainly because U.S. television turned the public against it',
        'The war was a success because it delayed communist gains elsewhere in Asia',
      ],
      correctIndex: 0,
      rationale:
        'Orthodox historians argue that the primary engine of the conflict was Vietnamese nationalism and anti-colonialism. Because the Saigon regime was perceived by many Vietnamese as a foreign puppet created by Western aid, American military firepower could never manufacture political legitimacy.',
      citationRef: 'c12-1',
    },
    {
      id: 'c12-q2',
      question:
        'What core thesis was advanced by Colonel Harry Summers in his influential 1982 revisionist monograph "On Strategy"?',
      options: [
        'Television coverage, not battlefield events, cost the United States the war',
        'The war was a nationalist revolution that no outside military power could have defeated',
        'South Vietnam’s corrupt government made any U.S. strategy impossible to win',
        'U.S. forces won in battle but lost because policy kept them from attacking the North',
      ],
      correctIndex: 3,
      rationale:
        'Summers famously recounted telling a North Vietnamese colonel in 1975: "You know, you never defeated us on the battlefield." The colonel replied: "That may be so, but it is also irrelevant." Summers argued that civilian micromanagement diverted the military into counterinsurgency rather than cutting the enemy’s main conventional lifeline in the North.',
      citationRef: 'c12-2',
    },
    {
      id: 'c12-q3',
      question:
        'What was the primary foreign policy impact of the so-called "Vietnam Syndrome" on American grand strategy during the late 1970s and 1980s?',
      options: [
        'A push to expand U.S. bases across Southeast Asia to prevent new dominoes',
        'Reluctance to commit U.S. troops to long, uncertain wars overseas',
        'Renewed support for a peacetime draft to rebuild American combat power',
        'A belief that air power alone could win any future war without ground troops',
      ],
      correctIndex: 1,
      rationale:
        'The "Vietnam Syndrome" describes the deep psychological and political trauma that made Americans wary of foreign military entanglements for two decades, until President George H.W. Bush declared after the 1991 Gulf War: "By God, we’ve kicked the Vietnam syndrome once and for all."',
      citationRef: 'c12-3',
    },
  ],
  flashcards: [
    {
      id: 'c12-fc1',
      term: 'The "Vietnam Syndrome"',
      phonetic: 'vyet-NAM SIN-drohm',
      definition:
        'The public and political reluctance to deploy American military forces into foreign conflicts abroad following the trauma and defeat in Vietnam.',
      significance:
        'Constrained American foreign policy interventions throughout the late 1970s and 1980s until the 1991 Persian Gulf War.',
      examTip: 'High frequency. Frequently paired with Ronald Reagan’s rhetoric characterizing Vietnam as a "noble cause."',
    },
    {
      id: 'c12-fc2',
      term: 'The Pentagon Papers (1971)',
      phonetic: 'PEN-tuh-gahn PAY-perz',
      definition:
        'Top-secret 7,000-page Department of Defense study leaked by military analyst Daniel Ellsberg to the New York Times documenting systematic government deception regarding the war.',
      significance:
        'Demonstrated that four presidential administrations had misled the public and Congress about war aims and progress; upheld in the landmark Supreme Court case New York Times Co. v. United States.',
      examTip: 'Landmark First Amendment and executive accountability case study.',
    },
    {
      id: 'c12-fc3',
      term: 'The Weinberger Doctrine (1984)',
      phonetic: 'WYN-ber-ger DOK-trin',
      definition:
        'Six criteria proposed by Defense Secretary Caspar Weinberger that must be met before committing U.S. troops to combat abroad, including vital interests, intention of winning, and public/congressional support.',
      significance:
        'Direct precursor to the Powell Doctrine; formalized the military’s insistence on never repeating the incremental quagmire of Vietnam.',
      examTip: 'Essential military doctrine reflecting post-Vietnam strategic consensus.',
    },
  ],
};
