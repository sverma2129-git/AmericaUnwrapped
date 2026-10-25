'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { KeyTerm } from '@/types/study';

interface FlashcardDeckProps {
  cards: KeyTerm[];
  title?: string;
}

export default function FlashcardDeck({
  cards,
  title = 'Key Terms & Flashcards',
}: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');

  const total = cards.length;
  const currentCard = cards[currentIndex];

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Keyboard navigation for card mode
  useEffect(() => {
    if (viewMode !== 'card') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, handleFlip, handleNext, handlePrev]);

  return (
    <section
      aria-label="Key Terms Flashcard Deck"
      className="my-10 rounded-xs border border-[#E8DDC8] bg-[#FAF7F2] p-6 sm:p-8 text-[#2C2523] shadow-2xs transition-colors"
    >
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-[#E8DDC8] gap-2 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B252D] block mb-1">
            Study Tool &bull; Exam Vocabulary
          </span>
          <h2 className="font-editorial-serif text-2xl font-bold">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => setViewMode('card')}
            className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer font-medium ${
              viewMode === 'card'
                ? 'bg-[#8B252D] text-white border-[#8B252D] font-bold'
                : 'bg-white text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
            }`}
          >
            Flip Cards
          </button>
          <button
            type="button"
            onClick={() => setViewMode('list')}
            className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer font-medium ${
              viewMode === 'list'
                ? 'bg-[#8B252D] text-white border-[#8B252D] font-bold'
                : 'bg-white text-[#5C524E] border-[#E8DDC8] hover:border-[#8B252D]'
            }`}
          >
            View All ({total})
          </button>
        </div>
      </div>

      {viewMode === 'card' ? (
        /* ─── CARD FLIP MODE ─── */
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-[#5C524E] px-1">
            <span>
              Card {currentIndex + 1} of {total}
            </span>
            <span className="hidden sm:inline text-[#6B5E59]">
              [Space to flip &bull; &larr; &rarr; to navigate]
            </span>
          </div>

          {/* Interactive Card */}
          <div
            tabIndex={0}
            role="button"
            aria-label={`${currentCard.term}. ${isFlipped ? 'Showing definition' : 'Press to show definition'}`}
            onClick={handleFlip}
            className="w-full min-h-[260px] sm:min-h-[280px] p-6 sm:p-8 rounded-xs bg-[#FFFEFA] border-2 border-[#E8DDC8] hover:border-[#8B252D] transition-all cursor-pointer shadow-xs flex flex-col justify-between select-none focus-visible:ring-2 focus-visible:ring-[#8B252D]"
          >
            {/* Top Indicator */}
            <div className="flex items-center justify-between text-xs text-[#5C524E]">
              <span className="uppercase tracking-wider font-bold text-[#8B252D]">
                {isFlipped ? 'Definition & Significance' : 'Historical Term'}
              </span>
              <span className="text-[#6B5E59]">
                {isFlipped ? 'Tap to view term' : 'Tap to reveal definition'} &orarr;
              </span>
            </div>

            {/* Middle Content */}
            <div className="my-auto py-4">
              {!isFlipped ? (
                <div className="text-center space-y-2">
                  <h3 className="font-editorial-serif text-2xl sm:text-3xl font-bold text-[#2C2523]">
                    {currentCard.term}
                  </h3>
                  {currentCard.phonetic && (
                    <span className="font-mono text-xs text-[#8B252D] italic block">
                      /{currentCard.phonetic}/
                    </span>
                  )}
                  <p className="font-sans text-xs text-[#6B5E59] mt-2">
                    (Click or press Space to flip)
                  </p>
                </div>
              ) : (
                <div className="space-y-3 text-left font-sans animate-in fade-in duration-150">
                  <div>
                    <strong className="text-[10px] uppercase tracking-wider text-[#5C524E] block mb-0.5">
                      Definition:
                    </strong>
                    <p className="text-sm sm:text-base text-[#2C2523] leading-relaxed">
                      {currentCard.definition}
                    </p>
                  </div>

                  <div>
                    <strong className="text-[10px] uppercase tracking-wider text-[#5C524E] block mb-0.5">
                      Why It Matters for the Exam:
                    </strong>
                    <p className="text-xs sm:text-sm text-[#5C524E] leading-relaxed">
                      {currentCard.significance}
                    </p>
                  </div>

                  {currentCard.examTip && (
                    <div className="p-2.5 rounded-xs bg-[#FDF3F3] border border-[#F0C4C7] text-xs text-[#8B252D]">
                      <strong>💡 Exam Tip:</strong> {currentCard.examTip}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Footer */}
            <div className="text-center pt-2 border-t border-[#E8DDC8]/60">
              <span className="text-xs text-[#6B5E59]">
                {isFlipped ? 'Click card to flip back' : 'Click to flip for definition & test tip'}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#E8DDC8] bg-[#FAF7F2] hover:bg-[#E8DDC8] text-[#2C2523] transition-colors cursor-pointer"
            >
              &larr; Previous
            </button>

            <button
              type="button"
              onClick={handleFlip}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs bg-[#8B252D] hover:bg-[#731E25] text-white transition-colors cursor-pointer shadow-xs"
            >
              {isFlipped ? 'Show Term' : 'Flip Card'}
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#E8DDC8] bg-[#FAF7F2] hover:bg-[#E8DDC8] text-[#2C2523] transition-colors cursor-pointer"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      ) : (
        /* ─── SCANNABLE LIST MODE ─── */
        <div className="space-y-4">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className="p-5 rounded-xs bg-[#FFFEFA] border border-[#E8DDC8] space-y-2"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E8DDC8] pb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-bold text-[#8B252D]">
                    {idx + 1}.
                  </span>
                  <h4 className="font-editorial-serif font-bold text-base sm:text-lg text-[#2C2523]">
                    {card.term}
                  </h4>
                  {card.phonetic && (
                    <span className="font-mono text-xs text-[#8B252D] italic">
                      /{card.phonetic}/
                    </span>
                  )}
                </div>
                {card.examTip && (
                  <span className="text-[11px] font-bold text-[#8B252D] bg-[#FDF3F3] px-2 py-0.5 rounded-xs border border-[#F0C4C7]">
                    Exam Highlight
                  </span>
                )}
              </div>

              <p className="font-sans text-sm text-[#2C2523] leading-relaxed">
                {card.definition}
              </p>

              <div className="text-xs font-sans text-[#5C524E]">
                <strong className="text-[10px] uppercase tracking-wider text-[#5C524E]">
                  Historical Significance:{' '}
                </strong>
                {card.significance}
              </div>

              {card.examTip && (
                <div className="text-xs font-sans text-[#8B252D] bg-[#FDF3F3] p-2.5 rounded-xs border border-[#F0C4C7]">
                  <span className="font-bold">Exam Tip: </span>
                  {card.examTip}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
