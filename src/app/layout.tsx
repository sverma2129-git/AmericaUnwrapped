import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CitationProvider } from '@/components/common/CitationContext';
import CitationModal from '@/components/common/CitationModal';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | America Unwrapped',
    default: 'America Unwrapped · A Digital History Publication',
  },
  description:
    'American history explained clearly and honestly, with the real documents behind every big claim.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans antialiased selection:bg-rule selection:text-ink">
        <CitationProvider>
          {/* Accessible Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-xs focus:shadow-md focus:outline-none focus:ring-2 focus:ring-brand"
          >
            Skip to main content
          </a>

          {/* Global Masthead */}
          <Header />

          {/* Main Content Area */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Global Citation Modal */}
          <CitationModal />
        </CitationProvider>
      </body>
    </html>
  );
}
