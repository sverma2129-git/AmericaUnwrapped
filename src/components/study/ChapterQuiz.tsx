'use client';

import React, { useState } from 'react';
import { QuizQuestion } from '@/types/study';
import { useCitation } from '@/components/common/CitationContext';
import { QuizAnswer, scoreQuiz } from '@/lib/study';

interface ChapterQuizProps {
  title?: string;
  questions: QuizQuestion[];
  chapterNumber?: number;
}

export default function ChapterQuiz({
  title = 'Test Your Understanding',
  questions,
  chapterNumber,
}: ChapterQuizProps) {
  const { openCitation } = useCitation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, QuizAnswer>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === currentQ.correctIndex;
    setIsSubmitted(true);
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: { selected: selectedOption, correct: isCorrect },
    }));
  };

  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      const nextAnswer = answers[currentIndex + 1];
      if (nextAnswer !== undefined) {
        setSelectedOption(nextAnswer.selected);
        setIsSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsSubmitted(false);
      }
    } else {
      setQuizFinished(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setSelectedOption(answers[prevIndex]?.selected ?? null);
      setIsSubmitted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setAnswers({});
    setQuizFinished(false);
  };

  const { correct: correctCount, percent: scorePercent } = scoreQuiz(answers, totalQuestions);

  return (
    <section
      aria-label="Chapter Self-Quiz"
      className="my-10 rounded-xs border border-rule bg-parchment p-6 sm:p-8 text-ink shadow-2xs transition-colors"
    >
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-rule gap-2 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
            Exam Prep &bull; Concept Check {chapterNumber ? `Ch. ${chapterNumber}` : ''}
          </span>
          <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span>
            Question {quizFinished ? totalQuestions : currentIndex + 1} of {totalQuestions}
          </span>
          <span>&bull;</span>
          <span className="font-semibold text-ink">
            {Object.keys(answers).length} Answered
          </span>
        </div>
      </div>

      {!quizFinished ? (
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="w-full bg-rule h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-brand h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="py-2">
            <h3 className="font-editorial-serif text-lg sm:text-xl font-bold text-ink leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3" role="radiogroup" aria-label="Quiz Answer Options">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectOption = idx === currentQ.correctIndex;

              let optionStyle =
                'border-rule bg-paper hover:border-brand text-ink';

              if (isSubmitted) {
                if (isCorrectOption) {
                  optionStyle =
                    'border-emerald-600 bg-emerald-50 text-emerald-950 font-medium ring-1 ring-emerald-500';
                } else if (isSelected && !isCorrectOption) {
                  optionStyle =
                    'border-brand bg-brand-tint text-brand ring-1 ring-brand';
                } else {
                  optionStyle = 'opacity-50 border-rule bg-parchment text-ink-muted';
                }
              } else if (isSelected) {
                optionStyle =
                  'border-brand bg-brand-tint text-ink ring-1 ring-brand';
              }

              const letters = ['A', 'B', 'C', 'D'];

              return (
                <button
                  key={idx}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  disabled={isSubmitted}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-xs border transition-all flex items-start gap-3.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand ${optionStyle}`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-mono font-bold shrink-0 transition-colors ${
                      isSubmitted && isCorrectOption
                        ? 'bg-emerald-600 text-white'
                        : isSubmitted && isSelected && !isCorrectOption
                        ? 'bg-brand text-white'
                        : isSelected
                        ? 'bg-brand text-white'
                        : 'bg-rule text-ink'
                    }`}
                  >
                    {isSubmitted && isCorrectOption ? '✓' : isSubmitted && isSelected && !isCorrectOption ? '✕' : letters[idx]}
                  </span>
                  <span className="font-sans text-sm sm:text-base leading-relaxed pt-0.5">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Rationale & Source Evidence (Shown immediately after submission) */}
          {isSubmitted && (
            <div
              className={`p-5 rounded-xs border animate-in fade-in duration-200 space-y-3 ${
                selectedOption === currentQ.correctIndex
                  ? 'bg-emerald-50/70 border-emerald-300'
                  : 'bg-brand-tint border-brand-rule'
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs text-white ${
                    selectedOption === currentQ.correctIndex
                      ? 'bg-emerald-600'
                      : 'bg-brand'
                  }`}
                >
                  {selectedOption === currentQ.correctIndex ? 'Correct Analysis' : 'Explanation & Context'}
                </span>
                <span className="text-xs text-ink-muted">
                  Historical Rationale
                </span>
              </div>

              <p className="font-sans text-sm sm:text-base text-ink leading-relaxed">
                {currentQ.rationale}
              </p>

              {currentQ.citationRef && (
                <div className="pt-2 border-t border-rule flex items-center justify-between text-xs">
                  <span className="text-ink-muted">
                    Source Evidence: Ref [{currentQ.citationRef}]
                  </span>
                  <button
                    type="button"
                    onClick={() => openCitation(currentQ.citationRef!)}
                    className="font-bold text-brand hover:underline cursor-pointer"
                  >
                    Inspect Source Dossier &rarr;
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Action Navigation Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-rule">
            <button
              type="button"
              onClick={handlePreviousQuestion}
              disabled={currentIndex === 0}
              className={`text-xs uppercase tracking-wider px-3 py-2 rounded-xs transition-colors cursor-pointer ${
                currentIndex === 0
                  ? 'opacity-30 cursor-not-allowed text-ink-soft'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              &larr; Previous Question
            </button>

            {!isSubmitted ? (
              <button
                type="button"
                onClick={handleCheckAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors ${
                  selectedOption === null
                    ? 'bg-rule text-ink-soft cursor-not-allowed'
                    : 'bg-brand hover:bg-brand-hover text-white cursor-pointer shadow-xs'
                }`}
              >
                Check Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-brand hover:bg-brand-hover text-white rounded-xs transition-colors cursor-pointer shadow-xs"
              >
                {currentIndex < totalQuestions - 1 ? 'Next Question →' : 'View Final Results →'}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Completed Summary Screen */
        <div className="py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-parchment border-2 border-brand mb-2">
            <span className="font-editorial-serif text-3xl font-bold text-brand">
              {scorePercent}%
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-editorial-serif text-2xl font-bold text-ink">
              {scorePercent >= 80 ? 'Mastery Demonstrated' : scorePercent >= 60 ? 'Solid Foundation' : 'Review Recommended'}
            </h3>
            <p className="font-sans text-sm text-ink-muted max-w-md mx-auto">
              You answered <strong className="text-ink">{correctCount} of {totalQuestions}</strong> questions correctly.
            </p>
          </div>

          {/* Detailed Question Review Breakdown */}
          <div className="text-left max-w-xl mx-auto space-y-3 pt-4 border-t border-rule">
            <span className="text-xs font-bold uppercase tracking-wider text-brand block">
              Question-by-Question Review:
            </span>
            {questions.map((q, idx) => {
              const res = answers[idx];
              const isCorrect = res?.correct;
              return (
                <div
                  key={q.id}
                  className={`p-3 rounded-xs border text-xs flex items-center justify-between ${
                    isCorrect
                      ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950'
                      : 'bg-brand-tint border-brand-rule text-brand'
                  }`}
                >
                  <span className="font-sans truncate max-w-[420px]">
                    <strong className="font-mono mr-2">Q{idx + 1}:</strong> {q.question}
                  </span>
                  <span className="font-bold shrink-0 ml-2">
                    {isCorrect ? '✓ Correct' : '✕ Missed'}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex justify-center gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-brand hover:bg-brand-hover text-white rounded-xs transition-colors cursor-pointer shadow-xs"
            >
              Retake Quiz &rarr;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
