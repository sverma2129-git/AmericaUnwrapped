import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { VIETNAM_CHAPTERS } from '@/data/vietnam/chapters';
import ChapterNavBar from '@/components/vietnam/ChapterNavBar';
import ChapterContent from '@/components/vietnam/ChapterContent';
import TonkinPilotView from '@/components/vietnam/TonkinPilotView';

interface ChapterPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VIETNAM_CHAPTERS.map((chapter) => ({
    slug: chapter.id,
  }));
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = VIETNAM_CHAPTERS.find((c) => c.id === slug);

  if (!chapter) {
    return {
      title: 'Chapter Not Found · America Unwrapped',
    };
  }

  return {
    title: `Ch. ${chapter.number.toString().padStart(2, '0')}: ${chapter.title} (${chapter.timeframe}) · America Unwrapped`,
    description: chapter.summary,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = VIETNAM_CHAPTERS.find((c) => c.id === slug);

  if (!chapter) {
    notFound();
  }

  const nextChapter =
    chapter.number < 12
      ? VIETNAM_CHAPTERS.find((c) => c.number === chapter.number + 1)
      : null;

  return (
    <div className="min-h-screen bg-[#FFFEFA] text-[#2C2523]">
      <ChapterNavBar currentChapter={chapter} />
      <div className="w-full">
        {slug === 'gulf-of-tonkin' ? (
          <TonkinPilotView
            chapter={chapter}
            nextChapterId={nextChapter?.id}
            nextChapterTitle={nextChapter?.title}
          />
        ) : (
          <ChapterContent
            chapter={chapter}
            nextChapterId={nextChapter?.id}
            nextChapterTitle={nextChapter?.title}
          />
        )}
      </div>
    </div>
  );
}
