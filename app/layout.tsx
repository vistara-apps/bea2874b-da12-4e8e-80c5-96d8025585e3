import type { Metadata } from 'next';
import { Providers } from './providers';
import { AppShell } from '@/components/layout/AppShell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Onchain Lens - Base Onchain Intelligence',
  description: 'Discover, Track, and Share Base Onchain Intelligence with Your Farcaster Network',
  openGraph: {
    title: 'Onchain Lens',
    description: 'Discover, Track, and Share Base Onchain Intelligence',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
