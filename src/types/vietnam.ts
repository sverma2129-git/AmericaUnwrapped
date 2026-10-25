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
  isVerified?: boolean;
  transcriptionStatus?: 'source_transcription' | 'unverified_paraphrase' | 'pending_verification';
  registryId?: string;
}

export type SourceClassificationType =
  | 'PRIMARY_SOURCE'
  | 'CONTEMPORARY_REPORTING'
  | 'SCHOLARLY_SECONDARY_SOURCE'
  | 'LATER_HISTORICAL_ANALYSIS'
  | 'REFERENCE_SOURCE';

export type VerificationCategory =
  | 'VERIFIED_QUOTATION'
  | 'VERIFIED_PARAPHRASE'
  | 'UNVERIFIABLE';

export interface SourceRegistryEntry {
  id: string; // e.g. "Q001"
  chapter: number;
  type: 'quotation' | 'claim';
  verificationCategory: VerificationCategory;
  text: string;
  exactQuotation?: string;
  source: string;
  sourceUrl?: string;
  authorOrCreator?: string;
  institution?: string;
  date?: string;
  locator: string; // page/line/box or precise locator
  verified: boolean;
  sourceType: SourceClassificationType | string;
  supportsClaim: string; // "WHAT THIS SOURCE SUPPORTS"
  limitations?: string; // "LIMITATIONS"
  notes: string;
  conversionStatus: 'verified_verbatim' | 'converted_to_paraphrase' | 'unverified_pending_verification' | 'unverifiable_unsupported';
  locatorStatus: 'supported' | 'unsupported' | 'unverified_conflated';
}

export interface ChapterCitation {
  id: string;
  marker: number;
  citation: string;
  sourceType: SourceClassificationType | 'archival' | 'official-history' | 'academic-monograph' | 'declassified';
  authorOrInstitution?: string;
  title?: string;
  date?: string;
  publicationOrArchive?: string;
  locator?: string;
  supportsClaim?: string;
  limitations?: string;
  originalUrl?: string;
  exactQuotation?: string;
  verificationCategory?: VerificationCategory;
}

export interface FlaggedClaimEntry {
  id: string;
  chapter: number;
  claimText: string;
  category: 'interpretive_narrative' | 'causal_assertion' | 'historiographical_dispute';
  context: string;
  editorialConcern: string;
  recommendedAction: string;
}

export interface TonkinEditorialAudit {
  id: string;
  issue: string;
  currentPresentation: string;
  requiredFramework: string;
  actionItems: string[];
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
  /** 'investigation' renders the evidence-led TonkinPilotView instead of the standard chapter layout. */
  layout?: 'standard' | 'investigation';
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
  citations: ChapterCitation[];
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
