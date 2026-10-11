import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | America Unwrapped',
    default: 'America Unwrapped · A Digital History Publication',
  },
  description:
    'A digital history publication designed to make American history understandable, engaging, and intellectually serious.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#fafaf9] text-stone-900 dark:bg-stone-950 dark:text-stone-100 antialiased selection:bg-stone-200 dark:selection:bg-stone-800">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-stone-900 focus:text-stone-50 focus:rounded-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-stone-400"
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
      </body>
    </html>
  );
}
