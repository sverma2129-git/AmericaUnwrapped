import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { VIETNAM_CHAPTERS, getAdjacentChapters, getChapter } from '@/data/vietnam/chapters';
import ChapterNavBar from '@/components/vietnam/ChapterNavBar';
import ChapterContent from '@/components/vietnam/ChapterContent';
import TonkinPilotView from '@/components/vietnam/TonkinPilotView';
import LayeredChapter from '@/components/vietnam/layered/LayeredChapter';

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
  const chapter = getChapter(slug);

  if (!chapter) {
    return {
      title: 'Chapter Not Found',
    };
  }

  return {
    title: `Ch. ${chapter.number.toString().padStart(2, '0')}: ${chapter.title} (${chapter.timeframe})`,
    description: chapter.summary,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapter(slug);

  if (!chapter) {
    notFound();
  }

  const { next: nextChapter } = getAdjacentChapters(chapter);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <ChapterNavBar currentChapter={chapter} />
      <div className="w-full">
        {chapter.layout === 'investigation' ? (
          <TonkinPilotView
            chapter={chapter}
            nextChapterId={nextChapter?.id}
            nextChapterTitle={nextChapter?.title}
          />
        ) : chapter.layout === 'layered' && chapter.story ? (
          <LayeredChapter
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
