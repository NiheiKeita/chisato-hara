import type { Metadata } from "next"
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google"
import React from "react"
import { SharedLayout } from "~/components/SharedLayout"
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
  title: "CHISATO HARA - Artist",
  description: "Artist portfolio featuring videos, performances, installations, and art projects by Chisato Hara",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable}`}>
      <body className="font-inter antialiased">
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  )
}
