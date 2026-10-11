export interface HistoricalDate {
  year: number;
  month?: number;
  day?: number;
  approximate?: boolean;
  display: string;
}

export interface PrimarySourceExcerpt {
  id: string;
  title: string;
  authorOrSpeaker: string;
  role: string;
  side: 'washington' | 'hanoi' | 'saigon' | 'neutral' | 'international';
  date: string;
  classification: string;
  archiveSource: string;
  archiveId?: string;
  excerpt: string;
  historicalContext: string;
  whyItMatters: string;
  originalDocumentUrl?: string;
}

export interface CausalStep {
  decision: {
    actor: string;
    action: string;
    date: string;
  };
  assumption: {
    premise: string;
    blindSpot: string;
  };
  result: {
    immediate: string;
    counterAction: string;
  };
  unintendedConsequence: string;
  nextDecision: string;
}

export interface SidePerspective {
  keyActors: string[];
  strategicObjective: string;
  underlyingAssumptions: string[];
  internalDebates: string[];
  homeFrontConstraints: string[];
  primaryDocumentRef?: string;
}

export interface LandmarkMoment {
  bannerTitle: string;
  dateline: string;
  location: string;
  quote: string;
  quoteSpeaker: string;
  quoteContext: string;
}

export interface StrategicActorEcosystem {
  washington: {
    objective: string;
    underlyingAssumption: string;
    internalDebate: string;
  };
  hanoi: {
    objective: string;
    underlyingAssumption: string;
    internalDebate: string;
  };
  saigon: {
    regimeAndSociety: string;
    coreDilemma: string;
  };
  battlefield: {
    tacticalReality: string;
    humanCost: string;
  };
  publicAndDiplomacy: {
    politicalPressure: string;
    internationalContext: string;
  };
}

export interface ChapterData {
  id: string;
  number: number;
  timeframe: string;
  title: string;
  subtitle: string;
  summary: string;
  isLandmark?: boolean;
  landmarkMoment?: LandmarkMoment;
  hookLead?: string;
  hookParadox?: string;
  strategicEcosystem?: StrategicActorEcosystem;
  editorialEvidenceIntro?: string;
  interpretationInsight?: string;
  consequenceSummary?: string;
  transitionLead?: string;
  whatHappened: {
    narrative: string[];
    keyEvents: { date: string; title: string; detail: string }[];
  };
  washington: SidePerspective;
  hanoi: SidePerspective;
  causalChain: CausalStep;
  interactiveModule: {
    id: string;
    type:
      | 'dien-bien-phu-map'
      | 'geneva-division-map'
      | 'escalation-timeline'
      | 'tonkin-reconstruction'
      | 'attrition-model'
      | 'phoenix-analysis'
      | 'tet-offensive-map'
      | 'vietnamization-tracker'
      | 'paris-timeline'
      | 'collapse-1975-map'
      | 'aftermath-metrics'
      | 'competing-arguments';
    title: string;
    prompt: string;
  };
  primaryDocuments: PrimarySourceExcerpt[];
  nextQuestion: {
    question: string;
    framing: string;
  };
  citations: {
    id: string;
    marker: number;
    citation: string;
    sourceType: 'archival' | 'official-history' | 'academic-monograph' | 'declassified';
  }[];
}

export interface TimelineEventItem {
  id: string;
  year: number;
  dateStr: string;
  title: string;
  summary: string;
  theater: 'washington' | 'hanoi' | 'saigon' | 'battlefield' | 'diplomacy';
  chapterRef: string;
}

export interface HistoriographicalSchool {
  id: string;
  name: string;
  era: string;
  coreThesis: string;
  keyHistorians: string[];
  strengths: string[];
  blindSpotsOrCritiques: string[];
  primaryEvidenceEmphasized: string;
}
