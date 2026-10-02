import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Software Engineer & Competitive Programmer | Portfolio",
  description:
    "From solving problems to building systems. Personal portfolio of a Software Engineering student & Competitive Programmer.",
  keywords: [
    "Software Engineer",
    "Competitive Programmer",
    "Algorithms",
    "System Design",
    "Next.js",
    "TypeScript",
    "Codeforces",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#060a12] text-[#f1f5f9] antialiased selection:bg-cyan-500/20 selection:text-cyan-300 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
