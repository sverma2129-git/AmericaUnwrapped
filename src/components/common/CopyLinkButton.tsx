'use client';

import React, { useEffect, useRef, useState } from 'react';

type Status = 'idle' | 'copied' | 'manual';

/**
 * Copies the address of a page on this site (or of one section of it), or a ready-made
 * note that ends with that address, for pasting into a chat or Google Classroom. Nothing is sent anywhere. If the browser blocks
 * copying, the address is shown so it can be selected by hand.
 */
export default function CopyLinkButton({
  anchor,
  path,
  message,
  label = 'Copy link',
  context,
  className = '',
}: {
  /** Site path to link to, such as /vietnam. Defaults to the current page. */
  path?: string;
  /** Text to copy ahead of the address. */
  message?: string;
  /** Names the target for screen readers when several buttons share a label. */
  context?: string;
  /** Id of a section to link straight to, without the #. */
  anchor?: string;
  label?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [url, setUrl] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const field = useRef<HTMLInputElement>(null);

  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (status === 'manual') field.current?.select();
  }, [status]);

  async function copy() {
    const { origin, pathname } = window.location;
    const target = path ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}` : pathname;
    const address = `${origin}${target}${anchor ? `#${anchor}` : ''}`;
    const link = message ? `${message} ${address}` : address;
    setUrl(link);
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(link);
      setStatus('copied');
      timer.current = setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('manual');
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}>
      <button
        type="button"
        onClick={copy}
        aria-label={context ? `${status === 'copied' ? 'Link copied' : label}: ${context}` : undefined}
        className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm border border-rule-strong bg-surface px-4 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.8 10.2a4 4 0 00-5.7 0l-3 3a4 4 0 105.7 5.7l1.2-1.2m-1.8-3.9a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7L12 6.3"
          />
        </svg>
        {status === 'copied' ? 'Link copied' : label}
      </button>
      <span role="status" className="sr-only">
        {status === 'copied' ? 'Copied' : ''}
      </span>
      {status === 'manual' && (
        <label className="flex w-full max-w-md flex-col gap-1 text-sm text-ink-muted">
          Copy this:
          <input
            ref={field}
            readOnly
            value={url}
            onFocus={(e) => e.currentTarget.select()}
            className="rounded-sm border border-rule-strong bg-surface px-3 py-2 text-ink"
          />
        </label>
      )}
    </div>
  );
}
