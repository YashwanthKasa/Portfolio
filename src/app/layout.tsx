import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.personalName} | Independent Video Editor & Creative Storyteller`,
  description:
    "Premium video editor and creative content specialist turning raw footage into cinematic visual stories. Short-form retention, YouTube long-form, and commercial brand edits.",
  keywords: [
    "Video Editor",
    "Creative Storyteller",
    "Colorist",
    "Sound Design",
    "DaVinci Resolve",
    "Premiere Pro",
    "YouTube Editor",
    "Commercial Video",
    "Cinematic Showreel",
  ],
  authors: [{ name: portfolioData.personalName }],
  creator: portfolioData.personalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexandercross.film",
    title: `${portfolioData.personalName} | Independent Video Editor`,
    description: portfolioData.heroDescription,
    siteName: `${portfolioData.personalName} Portfolio`,
    images: [
      {
        url: portfolioData.showreel.thumbnailUrl,
        width: 1920,
        height: 1080,
        alt: `${portfolioData.personalName} Showreel`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personalName} | Video Editor`,
    description: portfolioData.heroDescription,
    images: [portfolioData.showreel.thumbnailUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
      <body className="bg-black text-[#F5F5F7] min-h-screen antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
