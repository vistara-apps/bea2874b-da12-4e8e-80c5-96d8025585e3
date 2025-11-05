import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "Onchain Lens - Base Intelligence",
  description: "Discover, Track, and Share Base Onchain Intelligence with Your Farcaster Network",
  openGraph: {
    title: "Onchain Lens",
    description: "Discover, Track, and Share Base Onchain Intelligence",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
