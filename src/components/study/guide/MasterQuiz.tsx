'use client';

import React, { useState } from 'react';
import ChapterQuiz from '@/components/study/ChapterQuiz';
import { QuizQuestion } from '@/types/study';

export interface QuizGroup {
  id: string;
  label: string;
  questions: QuizQuestion[];
}

interface MasterQuizProps {
  allQuestions: QuizQuestion[];
  groups: QuizGroup[];
}

export default function MasterQuiz({ allQuestions, groups }: MasterQuizProps) {
  const [filter, setFilter] = useState('all');
  const filters: QuizGroup[] = [
    { id: 'all', label: `All Chapters (${allQuestions.length})`, questions: allQuestions },
    ...groups,
  ];
  const questions = filters.find((f) => f.id === filter)?.questions ?? allQuestions;

  return (
    <section aria-label="Master Practice Quiz" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-rule pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
            Self-Grading Assessment Mode
          </span>
          <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-ink">
            Multi-Chapter Master Practice Quiz
          </h2>
        </div>

        <div className="flex flex-wrap gap-1.5 text-xs" role="group" aria-label="Filter questions by chapter range">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`px-3 py-1.5 rounded-xs border cursor-pointer font-medium ${
                filter === f.id
                  ? 'bg-brand text-white border-brand font-bold'
                  : 'bg-white text-ink-muted border-rule hover:border-brand'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <ChapterQuiz
        key={filter}
        questions={questions}
        title={`Vietnam War Practice Test (${questions.length} Questions)`}
      />
    </section>
  );
}
