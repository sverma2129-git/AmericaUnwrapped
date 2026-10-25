'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ArcNode {
  year: number;
  label: string;
  slug: string;
  chapterNumber: number;
  chapterTitle: string;
  summary: string;
  isLandmark?: boolean;
}

const ARC_NODES: ArcNode[] = [
  {
    year: 1945,
    label: 'DRV Proclamation',
    slug: 'french-indochina-dien-bien-phu',
    chapterNumber: 1,
    chapterTitle: 'French Indochina & Dien Bien Phu',
    summary: 'Ho Chi Minh proclaims independence; France moves to restore colonial sovereignty.',
    isLandmark: false,
  },
  {
    year: 1954,
    label: 'Dien Bien Phu',
    slug: 'french-indochina-dien-bien-phu',
    chapterNumber: 1,
    chapterTitle: 'French Indochina & Dien Bien Phu',
    summary: 'Cataclysmic 55-day siege shatters French colonial rule on the eve of Geneva.',
    isLandmark: true,
  },
  {
    year: 1956,
    label: 'Partition Hardens',
    slug: 'geneva-south-vietnam',
    chapterNumber: 2,
    chapterTitle: 'Geneva & The Creation of South Vietnam',
    summary: 'Nationwide reunification elections are aborted; North and South harden into separate Cold War states.',
    isLandmark: false,
  },
  {
    year: 1963,
    label: 'Ap Bac & Diem Coup',
    slug: 'kennedy-and-diem',
    chapterNumber: 3,
    chapterTitle: 'Kennedy, Counterinsurgency, & Diem',
    summary: 'U.S. advisory commitment expands to 16,300; Diem is overthrown and assassinated.',
    isLandmark: false,
  },
  {
    year: 1964,
    label: 'Gulf of Tonkin',
    slug: 'gulf-of-tonkin',
    chapterNumber: 4,
    chapterTitle: 'The Gulf of Tonkin: Pretext & Blank Check',
    summary: 'Contested naval incidents lead Congress to grant LBJ broad war-making authorization.',
    isLandmark: true,
  },
  {
    year: 1965,
    label: 'Rolling Thunder',
    slug: 'americanization-attrition',
    chapterNumber: 5,
    chapterTitle: 'Americanization, Attrition, & Hanoi’s Inner War',
    summary: 'U.S. combat troops deploy; Westmoreland initiates search-and-destroy attrition warfare.',
    isLandmark: false,
  },
  {
    year: 1968,
    label: 'The Tet Offensive',
    slug: 'tet-offensive',
    chapterNumber: 7,
    chapterTitle: 'The Tet Offensive & The Crisis of Credibility',
    summary: 'Synchronized assaults across 36 provincial capitals shatter Washington’s official optimism.',
    isLandmark: true,
  },
  {
    year: 1970,
    label: 'Vietnamization & Cambodia',
    slug: 'nixon-and-vietnamization',
    chapterNumber: 8,
    chapterTitle: 'Nixon, Vietnamization, & The Widening War',
    summary: 'Ground troop withdrawals paired with expanded air war and Cambodian incursion.',
    isLandmark: false,
  },
  {
    year: 1973,
    label: 'Paris Peace Accords',
    slug: 'paris-peace-accords',
    chapterNumber: 9,
    chapterTitle: 'The Paris Peace Accords: Peace at Hand?',
    summary: 'U.S. combat forces withdraw while 150,000+ North Vietnamese troops remain in the South.',
    isLandmark: true,
  },
  {
    year: 1975,
    label: 'Fall of Saigon',
    slug: 'the-collapse',
    chapterNumber: 10,
    chapterTitle: 'The Final Offensive & The Collapse',
    summary: 'A 55-day conventional campaign leads to the unconditional surrender of the South Vietnamese government.',
    isLandmark: true,
  },
  {
    year: 1986,
    label: 'Doi Moi Reforms',
    slug: 'aftermath-1975',
    chapterNumber: 11,
    chapterTitle: 'Aftermath: Vietnam After 1975',
    summary: 'Following post-war hardship, re-education, and refugee flight, Vietnam adopts market economic reforms.',
    isLandmark: false,
  },
];

export default function TimelineArc() {
  const [selectedNode, setSelectedNode] = useState<ArcNode>(ARC_NODES[1]); // Default to Dien Bien Phu 1954

  return (
    <div className="border border-rule bg-parchment text-ink p-6 sm:p-8 rounded-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-rule gap-2">
        <div>
          <span className="font-archival-mono text-[11px] uppercase tracking-widest text-brand font-bold block">
            The Chronological Backbone · 1945–1986
          </span>
          <h3 className="font-editorial-serif text-xl sm:text-2xl font-bold text-ink">
            Thirty-Year Arc of Decision &amp; Escalation
          </h3>
        </div>
        <div className="font-archival-mono text-xs text-ink-muted">
          Click any milestone to inspect historical context
        </div>
      </div>

      {/* Interactive Horizontal Vector Track */}
      <div className="py-8 overflow-x-auto">
        <div className="min-w-[680px] relative px-4">
          {/* Baseline Rail */}
          <div className="h-0.5 w-full bg-rule absolute top-4 left-0 -z-0" />

          {/* Nodes */}
          <div className="flex justify-between items-start relative z-10">
            {ARC_NODES.map((node) => {
              const isSelected = selectedNode.year === node.year && selectedNode.label === node.label;
              return (
                <button
                  key={`${node.year}-${node.label}`}
                  onClick={() => setSelectedNode(node)}
                  className="group flex flex-col items-center focus-visible:outline-none"
                  aria-label={`${node.year}: ${node.label}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all border ${
                      isSelected
                        ? 'bg-brand text-white border-brand scale-110 shadow-xs'
                        : node.isLandmark
                        ? 'bg-brand/10 text-brand border-brand group-hover:scale-105'
                        : 'bg-paper text-ink-muted border-rule group-hover:border-brand'
                    }`}
                  >
                    {node.year.toString().slice(2)}
                  </div>
                  <span
                    className={`mt-2 font-mono text-[10px] tracking-tight whitespace-nowrap transition-colors max-w-[64px] text-center truncate ${
                      isSelected
                        ? 'font-bold text-brand'
                        : 'text-ink-soft group-hover:text-ink'
                    }`}
                  >
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Milestone Inspection Plate */}
      <div className="mt-4 p-5 bg-paper border border-rule rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">
              {selectedNode.year} · Chapter {selectedNode.chapterNumber.toString().padStart(2, '0')}
            </span>
            {selectedNode.isLandmark && (
              <span className="px-1.5 py-0.5 bg-brand/10 text-brand text-[10px] uppercase tracking-wider rounded-xs border border-brand/30 font-bold">
                Landmark Turning Point
              </span>
            )}
          </div>
          <h4 className="font-editorial-serif text-lg font-bold text-ink">
            {selectedNode.label}: {selectedNode.chapterTitle}
          </h4>
          <p className="font-editorial-serif text-sm text-ink-muted max-w-2xl leading-relaxed">
            {selectedNode.summary}
          </p>
        </div>

        <Link
          href={`/vietnam/${selectedNode.slug}`}
          className="inline-flex items-center justify-center shrink-0 px-4 py-2.5 bg-brand hover:bg-brand-hover text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-xs shadow-xs"
        >
          Enter Chapter {selectedNode.chapterNumber} &rarr;
        </Link>
      </div>
    </div>
  );
}
