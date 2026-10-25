import type { Metadata } from 'next';
import Link from 'next/link';

// Legacy route superseded by /vietnam. Static exports can't issue HTTP
// redirects, so this page redirects with a meta refresh (no JS required).
const target = '/vietnam';

export const metadata: Metadata = {
  title: 'Moved to Explore History',
  robots: { index: false },
};

export default function VietnamWarRedirect() {
  return (
    <div className="max-w-xl mx-auto px-6 py-24 text-center space-y-4">
      <meta httpEquiv="refresh" content={`0; url=${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${target}`} />
      <h1 className="font-editorial-serif text-2xl font-bold text-ink">This page has moved</h1>
      <p className="text-sm text-ink-muted">
        The Vietnam War experience now lives at{' '}
        <Link href={target} className="text-brand underline">
          Explore History
        </Link>
        .
      </p>
    </div>
  );
}
