'use client';

import React, { useState } from 'react';
import { HISTORIOGRAPHICAL_SCHOOLS } from '@/data/vietnam/arguments';

export default function CompetingArguments() {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>(HISTORIOGRAPHICAL_SCHOOLS[0].id);

  const activeSchool =
    HISTORIOGRAPHICAL_SCHOOLS.find((s) => s.id === selectedSchoolId) ||
    HISTORIOGRAPHICAL_SCHOOLS[0];

  return (
    <figure className="my-10 border border-stone-300 bg-[#f9f7f2]">
      {/* Editorial Header */}
      <div className="px-5 py-3 border-b border-stone-200 bg-stone-100/90 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-bold text-stone-900">
            Historiographical Matrix
          </span>
          <span className="text-stone-500 ml-2">&bull; Four Traditions of Historical Interpretation</span>
        </div>
        <span className="text-stone-500 text-[11px]">
          Comparative Historiography
        </span>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        <div>
          <h4 className="font-editorial-serif text-2xl font-bold text-stone-900 mt-1">
            Why Historians Still Disagree About the War’s Fundamental Meaning
          </h4>
          <p className="mt-2 font-editorial-serif text-base text-stone-700 leading-relaxed">
            The Vietnam War is not an inert chapter of the past. It remains an active ideological battleground. Each generation of scholars brings different archival evidence, questions, and political contexts to explain why the tragedy occurred.
          </p>
        </div>

        {/* School Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 border-t border-stone-200">
          {HISTORIOGRAPHICAL_SCHOOLS.map((school) => (
            <button
              key={school.id}
              type="button"
              onClick={() => setSelectedSchoolId(school.id)}
              className={`p-3 text-left transition-colors cursor-pointer border ${ selectedSchoolId === school.id ? 'border-stone-900 bg-stone-900 text-stone-100 font-bold' : 'border-stone-300 bg-white text-stone-700 hover:border-stone-500' }`}
            >
              <div className="text-[10px] opacity-70">
                {school.era.split(' ')[0]}
              </div>
              <div className="font-editorial-serif text-sm font-bold mt-0.5">
                {school.name.split('/')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Selected School Detail Ledger */}
        <div className="p-6 bg-white border border-stone-200 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 pb-3">
            <div>
              <h5 className="font-editorial-serif text-2xl font-bold text-stone-900">
                {activeSchool.name}
              </h5>
              <span className="text-xs text-stone-500">
                Era of Prominence: {activeSchool.era}
              </span>
            </div>
            <div className="text-xs text-stone-600">
              Key Scholars: {activeSchool.keyHistorians.slice(0, 3).join(', ')}
            </div>
          </div>

          {/* Core Thesis */}
          <div className="border-l border-stone-900 pl-4 py-1">
            <span className="text-xs font-bold text-stone-500 block mb-1">
              Core Historical Argument
            </span>
            <p className="font-editorial-serif text-base sm:text-lg text-stone-800 leading-relaxed">
              &ldquo;{activeSchool.coreThesis}&rdquo;
            </p>
          </div>

          {/* Strengths vs Blindspots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-4 bg-[#f2ede4] border border-stone-300 space-y-2 text-xs font-sans">
              <span className="font-bold text-stone-700 block">
                Evidence Emphasized &bull; Explanatory Power:
              </span>
              <ul className="space-y-1.5 text-stone-700 font-editorial-serif text-sm">
                {activeSchool.strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-stone-900">&bull;</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#f2ede4] border border-stone-300 space-y-2 text-xs font-sans">
              <span className="font-bold text-stone-700 block">
                Historiographical Critiques &bull; Blind Spots:
              </span>
              <ul className="space-y-1.5 text-stone-700 font-editorial-serif text-sm">
                {activeSchool.blindSpotsOrCritiques.map((blind, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-stone-900">&bull;</span>
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
