'use client';

import React, { useState } from 'react';
import { HISTORIOGRAPHICAL_SCHOOLS } from '@/data/vietnam/arguments';

export default function CompetingArguments() {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>(HISTORIOGRAPHICAL_SCHOOLS[0].id);

  const activeSchool =
    HISTORIOGRAPHICAL_SCHOOLS.find((s) => s.id === selectedSchoolId) ||
    HISTORIOGRAPHICAL_SCHOOLS[0];

  return (
    <figure className="my-10 border border-rule-strong bg-paper">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-rule bg-parchment-light flex flex-wrap items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-bold text-ink">
            Two schools of thought
          </span>
        </div>
        <span className="text-ink-soft text-xs">
          How historians disagree
        </span>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <h3 className="font-display text-xl font-bold text-ink mt-1">
            Why historians still argue about what the war meant
          </h3>
          <p className="mt-2 font-display text-base text-ink-muted leading-relaxed">
            The Vietnam War is not an inert chapter of the past. It remains an active ideological battleground. Each generation of scholars brings different archival evidence, questions, and political contexts to explain why the tragedy occurred.
          </p>
        </div>

        {/* School Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 border-t border-rule">
          {HISTORIOGRAPHICAL_SCHOOLS.map((school) => (
            <button
              key={school.id}
              type="button"
              onClick={() => setSelectedSchoolId(school.id)}
              className={`p-3 text-left transition-colors cursor-pointer border ${ selectedSchoolId === school.id ? 'border-ink bg-ink text-paper font-bold' : 'border-rule-strong bg-white text-ink-muted hover:border-rule-strong' }`}
            >
              <div className="text-xs opacity-70">
                {school.era.split(' ')[0]}
              </div>
              <div className="font-display text-sm font-bold mt-0.5">
                {school.name.split('/')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Selected School Detail Ledger */}
        <div className="p-6 bg-white border border-rule space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-rule pb-3">
            <div>
              <h4 className="font-display text-xl font-bold text-ink">
                {activeSchool.name}
              </h4>
              <span className="text-xs text-ink-soft">
                Era of Prominence: {activeSchool.era}
              </span>
            </div>
            <div className="text-xs text-ink-muted">
              Key Scholars: {activeSchool.keyHistorians.slice(0, 3).join(', ')}
            </div>
          </div>

          {/* Core Thesis */}
          <div className="border-l border-ink pl-4 py-1">
            <span className="text-xs font-bold text-ink-soft block mb-1">
              Main argument
            </span>
            <p className="font-display text-base sm:text-lg text-ink leading-relaxed">
              &ldquo;{activeSchool.coreThesis}&rdquo;
            </p>
          </div>

          {/* Strengths vs Blindspots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-4 bg-parchment border border-rule-strong space-y-2 text-xs font-sans">
              <span className="font-bold text-ink-muted block">
                The evidence they lean on
              </span>
              <ul className="space-y-1.5 text-ink-muted font-display text-sm">
                {activeSchool.strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-ink">&bull;</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-parchment border border-rule-strong space-y-2 text-xs font-sans">
              <span className="font-bold text-ink-muted block">
                What critics say they miss
              </span>
              <ul className="space-y-1.5 text-ink-muted font-display text-sm">
                {activeSchool.blindSpotsOrCritiques.map((blind, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-ink">&bull;</span>
                    <span>{blind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
