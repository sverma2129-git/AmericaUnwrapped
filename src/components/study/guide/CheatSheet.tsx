import React from 'react';
import Link from 'next/link';
import Disclosure from './Disclosure';
import ExpandAllControls from './ExpandAllControls';
import { PRESIDENCIES, TURNING_POINTS } from '@/data/vietnam/studyGuide';
import { getChapter } from '@/data/vietnam/chapters';

export default function CheatSheet() {
  return (
    <section aria-label="1-Page Cheat Sheet" className="space-y-12">
      {/* Quick Exam Overview Banner */}
      <div className="bg-parchment border-l-4 border-brand border-t border-r border-b border-rule p-6 rounded-r-xs shadow-2xs">
        <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
          Unit At A Glance &bull; AP U.S. History Period 8 Focus
        </span>
        <h2 className="font-editorial-serif text-2xl font-bold text-ink">
          The Essential Core: 30 Years Across 5 Presidencies
        </h2>
        <p className="mt-2 font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
          Vietnam is the primary Cold War conflict testing American containment doctrine, executive war powers, and public trust in government. On exams, questions consistently center on <strong>the causes of escalation</strong> (Domino Theory, Tonkin), <strong>the reasons for stalemate</strong> (guerilla warfare, flawed body counts), <strong>the erosion of the home front</strong> (Tet, Credibility Gap), and <strong>the constitutional aftermath</strong> (Pentagon Papers, War Powers Act).
        </p>
      </div>

      {/* 5-Presidency Master Matrix */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-3">
          <div>
            <h3 className="font-editorial-serif text-2xl font-bold text-ink">
              1. The Five Presidencies Decision Matrix
            </h3>
            <p className="text-xs text-ink-muted mt-0.5">
              Click any presidency to toggle strategic actions, turning points, and high-yield exam pitfalls.
            </p>
          </div>
          <ExpandAllControls targetId="presidency-matrix" />
        </div>

        <div id="presidency-matrix" className="grid grid-cols-1 gap-4">
          {PRESIDENCIES.map((p) => (
            <Disclosure
              key={p.id}
              summary={
                <>
                  <div className="font-editorial-serif font-bold text-lg sm:text-xl text-ink">{p.name}</div>
                  <span className="text-xs text-brand font-bold block">Doctrine: {p.doctrine}</span>
                </>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans mt-3">
                <div className="p-3 bg-white border border-rule rounded-xs">
                  <strong className="font-semibold text-ink block mb-1">Key Actions:</strong>
                  <p className="text-ink-muted leading-relaxed">{p.keyActions}</p>
                </div>
                <div className="p-3 bg-white border border-rule rounded-xs">
                  <strong className="font-semibold text-ink block mb-1">Turning Point:</strong>
                  <p className="text-ink-muted leading-relaxed">{p.turningPoint}</p>
                </div>
                <div className="p-3 bg-brand-tint border border-brand-rule rounded-xs">
                  <strong className="font-semibold text-brand block mb-1">⚠️ Exam Pitfall:</strong>
                  <p className="text-ink-muted leading-relaxed">{p.examPitfall}</p>
                </div>
              </div>
            </Disclosure>
          ))}
        </div>
      </div>

      {/* Master Chronology & Landmark Turning Points Table */}
      <div className="space-y-4 pt-6">
        <h3 className="font-editorial-serif text-2xl font-bold text-ink">2. Landmark Turning Points Timeline</h3>

        <div className="overflow-x-auto border border-rule rounded-xs">
          <table className="w-full text-left font-sans text-xs sm:text-sm">
            <thead className="bg-parchment-light border-b border-rule text-xs font-bold uppercase tracking-wider text-ink">
              <tr>
                <th className="p-3 sm:p-4">Date</th>
                <th className="p-3 sm:p-4">Event</th>
                <th className="p-3 sm:p-4">Historical Significance</th>
                <th className="p-3 sm:p-4">Inquiry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule bg-white">
              {TURNING_POINTS.map((tp) => {
                const chapter = getChapter(tp.chapterId);
                return (
                  <tr key={tp.event} className={`hover:bg-parchment ${tp.highlight ? 'bg-brand-tint' : ''}`}>
                    <td className="p-3 sm:p-4 font-mono text-xs font-bold text-brand whitespace-nowrap">{tp.date}</td>
                    <td className="p-3 sm:p-4 font-semibold text-ink">{tp.event}</td>
                    <td className="p-3 sm:p-4 text-ink-muted">{tp.significance}</td>
                    <td className="p-3 sm:p-4 font-semibold text-xs">
                      {chapter && (
                        <Link
                          href={`/vietnam/${chapter.id}`}
                          className={`text-brand underline ${tp.highlight ? 'font-bold' : ''}`}
                        >
                          Ch. {chapter.number.toString().padStart(2, '0')}
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
