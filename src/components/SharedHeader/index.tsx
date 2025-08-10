"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface SharedHeaderProps {
  scrollY?: number
}

export function SharedHeader({ scrollY = 0 }: SharedHeaderProps) {
  const pathname = usePathname()

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 px-2 sm:px-4 lg:px-6 py-2 ${scrollY > 50
        ? 'bg-black/80 backdrop-blur-md border-b border-gray-700/50'
        : 'bg-transparent'
        }`}
      style={{
        transform: pathname === '/' && scrollY > 100 ? `translateY(-100%)` : 'translateY(0%)',
      }}
    >
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-playfair font-bold text-white hover:text-gray-300 transition-colors duration-200"
          >
            <div className="shrink-0">
              <h1 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-2xl font-playfair font-bold text-transparent sm:text-3xl">原 千里</h1>
              <p className="text-xs font-inter tracking-[0.3em] text-gray-400 sm:text-sm">A R T I S T</p>
            </div>
          </Link>

          <div className="flex space-x-4 sm:space-x-8">
            <Link
              href="/"
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/about' ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
            >
              About
            </Link>
            <Link
              href="/news"
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/news' ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
            >
              News
            </Link>
            <Link
              href="/contact"
              className={`font-inter text-sm font-medium transition-colors duration-200 ${pathname === '/contact' ? 'text-white' : 'text-gray-300 hover:text-white'
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