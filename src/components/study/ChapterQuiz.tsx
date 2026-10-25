'use client';

import React, { useState } from 'react';
import { QuizQuestion } from '@/types/study';
import { useCitation } from '@/components/common/CitationContext';

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
  const [answers, setAnswers] = useState<Record<number, { selected: number; correct: boolean }>>({});
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

  const correctCount = Object.values(answers).filter((a) => a.correct).length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  return (
    <section
      aria-label="Chapter Self-Quiz"
      className="my-10 rounded-xs border border-[#E8DDC8] bg-[#FAF7F2] p-6 sm:p-8 text-[#2C2523] shadow-2xs transition-colors"
    >
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-[#E8DDC8] gap-2 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block mb-1">
            Exam Prep &bull; Concept Check {chapterNumber ? `Ch. ${chapterNumber}` : ''}
          </span>
          <h2 className="font-editorial-serif text-2xl sm:text-3xl font-bold">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#5C524E]">
          <span>
            Question {quizFinished ? totalQuestions : currentIndex + 1} of {totalQuestions}
          </span>
          <span>&bull;</span>
          <span className="font-semibold text-[#2C2523]">
            {Object.keys(answers).length} Answered
          </span>
        </div>
      </div>

      {!quizFinished ? (
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="w-full bg-[#E8DDC8] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#8B252D] h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="py-2">
            <h3 className="font-editorial-serif text-lg sm:text-xl font-bold text-[#2C2523] leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3" role="radiogroup" aria-label="Quiz Answer Options">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectOption = idx === currentQ.correctIndex;

              let optionStyle =
                'border-[#E8DDC8] bg-[#FFFEFA] hover:border-[#8B252D] text-[#2C2523]';

              if (isSubmitted) {
                if (isCorrectOption) {
                  optionStyle =
                    'border-emerald-600 bg-emerald-50 text-emerald-950 font-medium ring-1 ring-emerald-500';
                } else if (isSelected && !isCorrectOption) {
                  optionStyle =
                    'border-[#8B252D] bg-[#FDF3F3] text-[#8B252D] ring-1 ring-[#8B252D]';
                } else {
                  optionStyle = 'opacity-50 border-[#E8DDC8] bg-[#FAF7F2] text-[#5C524E]';
                }
              } else if (isSelected) {
                optionStyle =
                  'border-[#8B252D] bg-[#FDF3F3] text-[#2C2523] ring-1 ring-[#8B252D]';
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
                  className={`w-full text-left p-4 rounded-xs border transition-all flex items-start gap-3.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8B252D] ${optionStyle}`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-mono font-bold shrink-0 transition-colors ${
                      isSubmitted && isCorrectOption
                        ? 'bg-emerald-600 text-white'
                        : isSubmitted && isSelected && !isCorrectOption
                        ? 'bg-[#8B252D] text-white'
                        : isSelected
                        ? 'bg-[#8B252D] text-white'
                        : 'bg-[#E8DDC8] text-[#2C2523]'
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
                  : 'bg-[#FDF3F3] border-[#F0C4C7]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs text-white ${
                    selectedOption === currentQ.correctIndex
                      ? 'bg-emerald-600'
                      : 'bg-[#8B252D]'
                  }`}
                >
                  {selectedOption === currentQ.correctIndex ? 'Correct Analysis' : 'Explanation & Context'}
                </span>
                <span className="text-xs text-[#5C524E]">
                  Historical Rationale
                </span>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#2C2523] leading-relaxed">
                {currentQ.rationale}
              </p>

              {currentQ.citationRef && (
                <div className="pt-2 border-t border-[#E8DDC8] flex items-center justify-between text-xs">
                  <span className="text-[#5C524E]">
                    Source Evidence: Ref [{currentQ.citationRef}]
                  </span>
                  <button
                    type="button"
                    onClick={() => openCitation(currentQ.citationRef!)}
                    className="font-bold text-[#8B252D] hover:underline cursor-pointer"
                  >
                    Inspect Source Dossier &rarr;
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Action Navigation Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E8DDC8]">
            <button
              type="button"
              onClick={handlePreviousQuestion}
              disabled={currentIndex === 0}
              className={`text-xs uppercase tracking-wider px-3 py-2 rounded-xs transition-colors cursor-pointer ${
                currentIndex === 0
                  ? 'opacity-30 cursor-not-allowed text-[#6B5E59]'
                  : 'text-[#5C524E] hover:text-[#2C2523]'
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
                    ? 'bg-[#E8DDC8] text-[#6B5E59] cursor-not-allowed'
                    : 'bg-[#8B252D] hover:bg-[#731E25] text-white cursor-pointer shadow-xs'
                }`}
              >
                Check Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#8B252D] hover:bg-[#731E25] text-white rounded-xs transition-colors cursor-pointer shadow-xs"
              >
                {currentIndex < totalQuestions - 1 ? 'Next Question →' : 'View Final Results →'}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Completed Summary Screen */
        <div className="py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FAF7F2] border-2 border-[#8B252D] mb-2">
            <span className="font-editorial-serif text-3xl font-bold text-[#8B252D]">
              {scorePercent}%
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-editorial-serif text-2xl font-bold text-[#2C2523]">
              {scorePercent >= 80 ? 'Mastery Demonstrated' : scorePercent >= 60 ? 'Solid Foundation' : 'Review Recommended'}
            </h3>
            <p className="font-sans text-sm text-[#5C524E] max-w-md mx-auto">
              You answered <strong className="text-[#2C2523]">{correctCount} of {totalQuestions}</strong> questions correctly.
            </p>
          </div>

          {/* Detailed Question Review Breakdown */}
          <div className="text-left max-w-xl mx-auto space-y-3 pt-4 border-t border-[#E8DDC8]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block">
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
                      : 'bg-[#FDF3F3] border-[#F0C4C7] text-[#8B252D]'
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
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#8B252D] hover:bg-[#731E25] text-white rounded-xs transition-colors cursor-pointer shadow-xs"
            >
              Retake Quiz &rarr;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
