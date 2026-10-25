export interface KeyTerm {
  id: string;
  term: string;
  phonetic?: string;
  definition: string;
  significance: string;
  examTip?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  rationale: string;
  citationRef?: string;
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
