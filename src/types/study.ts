export interface KeyTerm {
  id: string;
  term: string;
  phonetic?: string;
  definition: string;
  significance: string;
  examTip?: string;
  /** Id of a registered image shown on the flashcard. */
  imageId?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  rationale: string;
  citationRef?: string;
  /** Id of a registered image the question is about (a stimulus). */
  imageId?: string;
}

export interface ChapterStudyData {
  chapterId: string;
  bigQuestion: string;
  whyItMatters: string;
  whatYouWillLearn: string[];
  briefing: {
    summary: string;
    examTakeaways: string[];
    keyTerms: KeyTerm[];
  };
  quiz: QuizQuestion[];
  flashcards: KeyTerm[];
}
