"use client"

import { useHomeView } from "./hooks"
import { Header } from "./components/Header"

export default function HomeView() {
  const { scrollY, hoveredCard, setHoveredCard, artworks } = useHomeView()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header scrollY={scrollY} />

      <main className="mx-auto max-w-7xl px-4 py-8 pt-32 sm:px-6 lg:px-8">
        <div 
          className="mb-12 text-center"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <h2 className="mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-4xl font-playfair font-bold text-transparent">
            作品集
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-cormorant text-gray-300">
            様々な技法で表現した作品をご覧ください。それぞれの作品に込められた想いと情熱を感じていただけることを願っています。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork, index) => (
            <div 
              key={artwork.id} 
              className="group cursor-pointer transition-all duration-500 hover:rotate-1 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
                transform: 'translateY(30px)',
              }}
              onMouseEnter={() => setHoveredCard(artwork.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                <div 
                  className={`flex size-full items-center justify-center bg-gradient-to-br transition-all duration-700 ${
                    hoveredCard === artwork.id 
                      ? 'from-blue-600 via-purple-600 to-indigo-600' 
                      : 'from-gray-700 via-gray-600 to-gray-500'
                  }`}
                >
                  <span className={`text-sm transition-all duration-300 ${
                    hoveredCard === artwork.id 
                      ? 'scale-110 text-white opacity-100' 
                      : 'text-gray-300 opacity-70'
                  }`}>
                    作品画像
                  </span>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredCard === artwork.id ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-cormorant font-semibold text-white transition-colors duration-300 group-hover:text-gray-200">{artwork.title}</h3>
                <p className="mb-1 text-sm font-inter text-gray-400">{artwork.medium} • {artwork.year}</p>
                <p className="text-sm font-cormorant text-gray-500 transition-colors duration-300 group-hover:text-gray-400">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-16 border-t border-gray-700/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center font-inter text-gray-400">
            <p>&copy; 2024 原 千里. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}