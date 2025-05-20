'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className={styles.menu}>
          <HomeLogo />
          <GitHubLogo />
          <LinkedInIcon />
          <MailLogo />
        </nav>
        {children}
      </body>
    </html>
  );
}