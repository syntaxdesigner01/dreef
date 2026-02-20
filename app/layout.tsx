import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Dreef",
  description: "Project Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link
          rel="preload"
          href="/userIcon.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/briefcaseWhite.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/routing-2.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/document-text.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/user-avater2.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/transcation.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <TopBar />
        {children}
      </body>
    </html>
  );
}
