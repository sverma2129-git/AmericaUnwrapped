import React from 'react';
import { IMAGE_REGISTRY, RIGHTS_LABEL } from '@/data/vietnam/images';
import { LOOK_CLOSER } from '@/data/vietnam/lookCloser';
import PhotoViewer from './PhotoViewer';
import LookCloser from './LookCloser';

/** Path to a registered image file. Raw <img> src needs the deploy base path added by hand. */
export function imageSrc(file: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/vietnam/${file}`;
}

/**
 * A registered image without its caption, cropped to fill its box. Used on
 * cards and lists; every image is credited in full on the About page.
 */
export function Thumb({ imageId, className = '', priority = false }: { imageId: string; className?: string; priority?: boolean }) {
  const image = IMAGE_REGISTRY[imageId];
  if (!image) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export: files are served as-is from /public
    <img
      src={imageSrc(image.file)}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`object-cover bg-parchment ${className}`}
    />
  );
}

interface FigureProps {
  /** Id of an entry in IMAGE_REGISTRY. Images can only be shown through the registry. */
  imageId: string;
  /** 'full' shows caption and credit; 'compact' shows the credit line only. */
  variant?: 'full' | 'compact';
  /** Load eagerly (for the first image on a page). */
  priority?: boolean;
  className?: string;
}

/**
 * A photograph or document from the image registry, always shown with where it
 * came from: creator, holding institution, rights status and a link to the
 * source record. Renders nothing for an unregistered id.
 */
export default function Figure({ imageId, variant = 'full', priority = false, className = '' }: FigureProps) {
  const image = IMAGE_REGISTRY[imageId];
  if (!image) return null;
  // Tall images get a narrower column so they never fill the whole screen.
  const ratio = image.height / image.width;
  const full = ratio > 1.1 ? '26rem' : ratio > 0.85 ? '34rem' : '52rem';
  const compact = ratio > 1.1 ? '15rem' : ratio > 0.85 ? '20rem' : '30rem';
  const details = variant === 'full' ? LOOK_CLOSER[imageId] : undefined;
  return (
    <figure className={className} style={{ maxWidth: variant === 'full' ? (details ? '40rem' : full) : compact }}>
      {details ? (
        <LookCloser imageId={imageId} entry={details} priority={priority} />
      ) : (
        <PhotoViewer imageId={imageId} priority={priority} />
      )}
      <figcaption className="mt-2.5 text-xs leading-relaxed text-ink-soft">
        {variant === 'full' && <span className="text-sm text-ink-muted block mb-0.5">{image.caption}</span>}
        {image.creator}, {image.date}. {image.source}. {RIGHTS_LABEL[image.rights]}.{' '}
        <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand">
          Source record
        </a>
      </figcaption>
    </figure>
  );
}
