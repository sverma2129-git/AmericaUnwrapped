'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { ChapterCitation } from '@/types/vietnam';
import { resolveCitation } from '@/lib/citations';

interface CitationContextValue {
  activeCitation: ChapterCitation | null;
  isOpen: boolean;
  openCitation: (citationOrId: ChapterCitation | string) => void;
  closeCitation: () => void;
}

const CitationContext = createContext<CitationContextValue | undefined>(undefined);

export function CitationProvider({ children }: { children: React.ReactNode }) {
  const [activeCitation, setActiveCitation] = useState<ChapterCitation | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openCitation = useCallback((citationOrId: ChapterCitation | string) => {
    if (typeof citationOrId === 'string') {
      const found = resolveCitation(citationOrId);
      if (found) {
        setActiveCitation(found);
        setIsOpen(true);
      } else {
        console.warn(`Citation with ID "${citationOrId}" not found in CITATION_REGISTRY.`);
      }
    } else {
      setActiveCitation(citationOrId);
      setIsOpen(true);
    }
  }, []);

  const closeCitation = useCallback(() => {
    setIsOpen(false);
    setActiveCitation(null);
  }, []);

  const value = useMemo(
    () => ({
      activeCitation,
      isOpen,
      openCitation,
      closeCitation,
    }),
    [activeCitation, isOpen, openCitation, closeCitation]
  );

  return <CitationContext.Provider value={value}>{children}</CitationContext.Provider>;
}

export function useCitation(): CitationContextValue {
  const context = useContext(CitationContext);
  if (!context) {
    throw new Error('useCitation must be used within a CitationProvider');
  }
  return context;
}
