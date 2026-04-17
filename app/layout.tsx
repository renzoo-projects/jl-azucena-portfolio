import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "JL Azucena — Video Editor",
  description:
    "Cinematic video editor portfolio showcasing storytelling through motion, color, and sound.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "JL Azucena — Video Editor",
    description:
      "Cinematic video editor portfolio showcasing storytelling through motion, color, and sound.",
    type: "website",
    url: "https://your-domain.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JL Azucena Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JL Azucena — Video Editor",
    description:
      "Cinematic video editor portfolio showcasing storytelling through motion, color, and sound.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}