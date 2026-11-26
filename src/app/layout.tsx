import type { Metadata } from 'next';
import { Instrument_Serif, JetBrains_Mono, Newsreader, Source_Sans_3 } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CitationProvider } from '@/components/common/CitationContext';
import CitationModal from '@/components/common/CitationModal';
import { SITE_ORIGIN, socialMeta } from '@/lib/social';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
});
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  ...socialMeta(
    'America Unwrapped',
    'Free U.S. history for high school students, told through the original records: the Vietnam War in 12 chapters, with a study guide for the unit test.',
  ),
  title: {
    template: '%s | America Unwrapped',
    default: 'America Unwrapped',
  },
  description:
    'American history for high school students, told through the documents: the Vietnam War in 12 chapters, with a study guide for the unit test.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${newsreader.variable} ${instrument.variable} ${sourceSans.variable} ${jetbrains.variable}`}>
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans antialiased">
        <CitationProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-sm"
          >
            Skip to main content
          </a>

          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />

          <CitationModal />
        </CitationProvider>
      </body>
    </html>
  );
}
