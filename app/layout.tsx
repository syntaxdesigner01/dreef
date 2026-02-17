import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit', 
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
      <body className="flex flex-col min-h-screen bg-gray-50">
        <TopBar />
        {children}
      </body>
    </html>
  );
}