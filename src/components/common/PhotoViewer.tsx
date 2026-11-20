'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IMAGE_REGISTRY, RIGHTS_LABEL } from '@/data/vietnam/images';

function src(file: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/vietnam/${file}`;
}

/** Every enlargeable photo on the page, in reading order. */
function photoIdsOnPage(): string[] {
  const ids = Array.from(document.querySelectorAll<HTMLElement>('[data-photo-id]')).map((el) => el.dataset.photoId as string);
  return ids.filter((id, i) => ids.indexOf(id) === i);
}

/**
 * A registered image that opens full screen when tapped. Inside the viewer you
 * can step through every photo on the page with the arrow buttons or keys.
 */
export default function PhotoViewer({ imageId, className = '', priority = false }: { imageId: string; className?: string; priority?: boolean }) {
  const image = IMAGE_REGISTRY[imageId];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(imageId);
  const [position, setPosition] = useState<{ index: number; total: number }>({ index: 0, total: 1 });

  const show = useCallback((id: string) => {
    const ids = photoIdsOnPage();
    setCurrent(id);
    setPosition({ index: Math.max(0, ids.indexOf(id)), total: Math.max(1, ids.length) });
  }, []);

  const step = useCallback(
    (delta: number) => {
      const ids = photoIdsOnPage();
      const i = ids.indexOf(current);
      if (i < 0 || ids.length < 2) return;
      show(ids[(i + delta + ids.length) % ids.length]);
    },
    [current, show],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    }
    dialog.addEventListener('keydown', onKey);
    return () => dialog.removeEventListener('keydown', onKey);
  }, [step]);

  if (!image) return null;
  const shown = IMAGE_REGISTRY[current] ?? image;

  return (
    <>
      <button
        type="button"
        data-photo-id={imageId}
        onClick={() => {
          show(imageId);
          dialogRef.current?.showModal();
        }}
        className="group relative block w-full cursor-zoom-in text-left"
        aria-label={`Enlarge photo: ${image.alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static export: files are served as-is from /public */}
        <img
          src={src(image.file)}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`h-auto w-full rounded-sm bg-parchment ${className}`}
        />
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 rounded-sm bg-paper/90 px-2 py-1 text-xs font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        >
          Enlarge
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={shown.caption}
        className="m-auto h-full max-h-none w-full max-w-none bg-paper p-0 text-ink backdrop:bg-ink/40"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 text-sm">
            <p className="tabular-nums text-ink-muted">
              Photo {position.index + 1} of {position.total}
            </p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="cursor-pointer rounded-sm border border-rule-strong px-3 py-1.5 font-medium text-ink hover:border-ink"
            >
              Close
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center py-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
            <img src={src(shown.file)} alt={shown.alt} className="max-h-full max-w-full object-contain" />
          </div>

          <div className="grid gap-4 border-t border-ink pt-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
            <div className="max-w-[70ch]">
              <p className="text-base text-ink">{shown.caption}</p>
              <p className="mt-1 text-xs text-ink-soft">
                {shown.creator}, {shown.date}. {shown.source}. {RIGHTS_LABEL[shown.rights]}.{' '}
                <a href={shown.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand">
                  Source record
                </a>
              </p>
            </div>
            {position.total > 1 && (
              <div className="flex gap-2">
                <button type="button" onClick={() => step(-1)} className="cursor-pointer rounded-sm border border-rule-strong px-4 py-2 text-sm font-medium hover:border-ink">
                  Previous
                </button>
                <button type="button" onClick={() => step(1)} className="cursor-pointer rounded-sm border border-rule-strong px-4 py-2 text-sm font-medium hover:border-ink">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
