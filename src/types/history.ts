/**
 * Type definitions for future historical modules and timeline components.
 * Intentionally schema-only: contains no historical claims or populated content.
 */

export interface HistoricalDate {
  year: number;
  month?: number;
  day?: number;
  approximate?: boolean;
}

export interface HistoricalSource {
  title: string;
  authorOrInstitution?: string;
  url?: string;
  sourceType?: 'primary' | 'secondary' | 'archival';
}

export interface TimelineEventPlaceholder {
  id: string;
  date: HistoricalDate;
  title: string;
  summary: string;
  tags?: string[];
  sources?: HistoricalSource[];
}
