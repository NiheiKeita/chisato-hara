"use client"

import { ReactNode, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { SharedHeader } from "~/components/SharedHeader"

interface SharedLayoutProps {
  children: ReactNode
}

export function SharedLayout({ children }: SharedLayoutProps) {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ページごとのmainクラスを決定
  const getMainClasses = () => {
    if (pathname === '/') {
      return "mx-auto max-w-7xl px-4 py-8 pt-32 sm:px-6 lg:px-8"
    }

    return "mx-auto max-w-4xl px-4 py-12 pt-32 sm:px-6 lg:px-8"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <SharedHeader scrollY={scrollY} />
      
      <main className={getMainClasses()}>
        {children}
      </main>
      
      <footer className="mt-16 border-t border-gray-700/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center font-inter text-gray-400">
            <p>&copy; 2024 CHISATO HARA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}