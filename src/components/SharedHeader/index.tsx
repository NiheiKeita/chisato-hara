"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface SharedHeaderProps {
  scrollY?: number
  scrollDirection?: 'up' | 'down'
}

export function SharedHeader({ scrollY = 0, scrollDirection = 'up' }: SharedHeaderProps) {
  const pathname = usePathname()
  
  // ヘッダーを隠すかどうかの判定
  const shouldHideHeader = scrollDirection === 'down' && scrollY > 100

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 px-2 sm:px-4 lg:px-6 py-2 ${scrollY > 50
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
        : 'bg-transparent'
        }`}
      style={{
        transform: shouldHideHeader ? 'translateY(-100%)' : 'translateY(0%)',
      }}
    >
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-playfair font-bold text-gray-900 hover:text-gray-600 transition-colors duration-200"
          >
            <div className="shrink-0">
              <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-2xl font-playfair font-bold text-transparent sm:text-3xl">原知里</h1>
              <p className="text-xs font-inter tracking-[0.3em] text-gray-600 sm:text-sm">A R T I S T</p>
            </div>
          </Link>

          <div className="flex space-x-4 sm:space-x-8">
            <Link
              href="/"
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/about' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              About
            </Link>
            <Link
              href="/news"
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/news' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              News
            </Link>
            <Link
              href="/contact"
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/contact' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}