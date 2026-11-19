import type { Metadata } from 'next';
import { Courier_Prime, Libre_Franklin, Source_Serif_4 } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CitationProvider } from '@/components/common/CitationContext';
import CitationModal from '@/components/common/CitationModal';
import './globals.css';

const franklin = Libre_Franklin({ subsets: ['latin'], variable: '--font-franklin', display: 'swap' });
const courier = Courier_Prime({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-courier', display: 'swap' });
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
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
    <html lang="en" className={`h-full ${franklin.variable} ${sourceSerif.variable} ${courier.variable}`}>
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
