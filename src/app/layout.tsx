import type { Metadata } from "next"
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google"
import React from "react"
import "./globals.css"

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "原 千里 - アーティスト",
  description: "アーティスト原千里の作品集とプロフィール",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
