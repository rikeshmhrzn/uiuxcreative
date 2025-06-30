import type { Metadata } from "next";
import "./globals.css";

import { Inter, Caveat, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UIUXCREATIVE",
  description:
    "Hi! Meet your trusted design partner for websites, apps, and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo2.svg" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${caveat.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
