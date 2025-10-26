import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liyvo Marketing | Halloween Reel Script",
  description:
    "High-energy Halloween reel script crafted for Liyvo Marketing's Instagram audience.",
  openGraph: {
    title: "Liyvo Marketing | Halloween Reel Script",
    description:
      "Ready-to-produce Halloween Instagram reel concept to showcase Liyvo Marketing's creative edge.",
    url: "https://agentic-8455e171.vercel.app",
    siteName: "Liyvo Marketing",
    type: "website"
  },
  metadataBase: new URL("https://agentic-8455e171.vercel.app")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
