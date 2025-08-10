"use client"

import Link from "next/link"

interface HeaderProps {
  scrollY: number
}

export function Header({ scrollY }: HeaderProps) {
  return (
    <header 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-playfair font-bold text-white hover:text-gray-300 transition-colors duration-200"
          >
            CHISATO HARA
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="font-inter text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="font-inter text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/news" 
              className="font-inter text-sm font-medium text-white"
            >
              News
            </Link>
            <Link 
              href="/contact" 
              className="font-inter text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}