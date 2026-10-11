'use client';

import React, { useState } from 'react';
import { HISTORIOGRAPHICAL_SCHOOLS } from '@/data/vietnam/arguments';

export default function CompetingArguments() {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>(HISTORIOGRAPHICAL_SCHOOLS[0].id);

  const activeSchool =
    HISTORIOGRAPHICAL_SCHOOLS.find((s) => s.id === selectedSchoolId) ||
    HISTORIOGRAPHICAL_SCHOOLS[0];

  return (
    <figure className="my-10 border border-stone-300 dark:border-stone-800 bg-[#f9f7f2] dark:bg-[#161514]">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/60 flex flex-wrap items-center justify-between gap-2 text-xs font-archival-mono">
        <div>
          <span className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
            Historiographical Matrix
          </span>
          <span className="text-stone-500 ml-2">&bull; Four Traditions of Historical Interpretation</span>
        </div>
        <span className="text-stone-500 uppercase tracking-widest text-[11px]">
          Comparative Historiography
        </span>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <span className="font-archival-mono text-xs uppercase tracking-wider text-stone-500 block">
            The Battle Over Meaning
          </span>
          <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
            Why Historians Still Disagree About the War’s Fundamental Meaning
          </h4>
          <p className="mt-2 font-editorial-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            The Vietnam War is not an inert chapter of the past. It remains an active ideological battleground. Each generation of scholars brings different archival evidence, questions, and political contexts to explain why the tragedy occurred.
          </p>
        </div>

        {/* School Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 border-t border-stone-200 dark:border-stone-800">
          {HISTORIOGRAPHICAL_SCHOOLS.map((school) => (
            <button
              key={school.id}
              type="button"
              onClick={() => setSelectedSchoolId(school.id)}
              className={`p-3 text-left transition-colors cursor-pointer border ${
                selectedSchoolId === school.id
                  ? 'border-stone-900 dark:border-stone-100 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                  : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-500'
              }`}
            >
              <div className="text-[10px] font-archival-mono uppercase opacity-70">
                {school.era.split(' ')[0]}
              </div>
              <div className="font-editorial-serif text-sm font-bold mt-0.5">
                {school.name.split('/')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Selected School Detail Ledger */}
        <div className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
            <div>
              <h5 className="font-editorial-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                {activeSchool.name}
              </h5>
              <span className="font-archival-mono text-xs text-stone-500">
                Era of Prominence: {activeSchool.era}
              </span>
            </div>
            <div className="font-archival-mono text-xs text-stone-600 dark:text-stone-400">
              Key Scholars: {activeSchool.keyHistorians.slice(0, 3).join(', ')}
            </div>
          </div>

          {/* Core Thesis */}
          <div className="border-l-2 border-stone-900 dark:border-stone-100 pl-4 py-1">
            <span className="font-archival-mono text-xs uppercase tracking-wider font-bold text-stone-500 block mb-1">
              Core Historical Argument
            </span>
            <p className="font-editorial-serif text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed italic">
              &ldquo;{activeSchool.coreThesis}&rdquo;
            </p>
          </div>

          {/* Strengths vs Blindspots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-4 bg-[#f2ede4] dark:bg-[#1a1816] border border-stone-300 dark:border-stone-800 space-y-2 text-xs font-sans">
              <span className="font-archival-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                Evidence Emphasized &bull; Explanatory Power:
              </span>
              <ul className="space-y-1.5 text-stone-700 dark:text-stone-300 font-editorial-serif text-sm">
                {activeSchool.strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-stone-900 dark:text-stone-100">&bull;</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#f2ede4] dark:bg-[#1a1816] border border-stone-300 dark:border-stone-800 space-y-2 text-xs font-sans">
              <span className="font-archival-mono uppercase font-bold text-stone-700 dark:text-stone-300 block">
                Historiographical Critiques &bull; Blind Spots:
              </span>
              <ul className="space-y-1.5 text-stone-700 dark:text-stone-300 font-editorial-serif text-sm">
                {activeSchool.blindSpotsOrCritiques.map((blind, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-stone-900 dark:text-stone-100">&bull;</span>
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
