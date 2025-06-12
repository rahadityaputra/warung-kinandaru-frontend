import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";


const quicsand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warung Kinandaru",
  description: "Homepage Warung Kinandaru",
};


const Footer = dynamic(() => import("@/components/Footer"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicsand.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
