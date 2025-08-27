import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Don Rey - Zachary Donhauser | Full Stack Developer",
  description: "Full stack software engineer with proven experience delivering production systems. Specializing in React, Node.js, PostgreSQL, and modern web technologies.",
  icons: {
    icon: '/donrey_favicon.ico',
    shortcut: '/donrey_favicon.ico',
    apple: '/donrey_favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
