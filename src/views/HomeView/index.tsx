"use client"

import { useHomeView } from "./hooks"
import { VideoPlayer } from "./components/VideoPlayer"

export default function HomeView() {
  const { hoveredCard, setHoveredCard, works } = useHomeView()

  return (
    <>
        <div className="mb-16 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-5xl font-playfair font-bold text-transparent">
            CHISATO HARA
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-cormorant text-gray-300">
            映像、パフォーマンス、インスタレーション、プロジェクトを通じて表現する作品をご覧ください
          </p>
        </div>

        {/* Videos Section */}
        <section id="videos" className="mb-20">
          <h2 className="mb-8 text-3xl font-playfair font-bold text-white">Videos</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {works.videos.map((work) => (
              <div 
                key={work.id} 
                className="group cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredCard(work.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <VideoPlayer 
                  videoUrl={work.videoUrl}
                  title={work.title}
                  isHovered={hoveredCard === work.id}
                />
                <div>
                  <h3 className="mb-1 text-xl font-cormorant font-semibold text-white">{work.title}</h3>
                  <p className="mb-2 text-sm font-inter text-gray-400">{work.year}</p>
                  <p className="text-sm font-cormorant text-gray-300">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performances Section */}
        <section id="performances" className="mb-20">
          <h2 className="mb-8 text-3xl font-playfair font-bold text-white">Performances</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {works.performances.map((work) => (
              <div 
                key={work.id} 
                className="group cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredCard(work.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                  <div 
                    className={`flex size-full items-center justify-center bg-gradient-to-br transition-all duration-700 ${
                      hoveredCard === work.id 
                        ? 'from-purple-600 via-pink-600 to-red-600' 
                        : 'from-gray-700 via-gray-600 to-gray-500'
                    }`}
                  >
                    <span className={`text-sm transition-all duration-300 ${
                      hoveredCard === work.id 
                        ? 'scale-110 text-white opacity-100' 
                        : 'text-gray-300 opacity-70'
                    }`}>
                      パフォーマンス作品
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-cormorant font-semibold text-white">{work.title}</h3>
                  <p className="mb-2 text-sm font-inter text-gray-400">{work.year}</p>
                  <p className="text-sm font-cormorant text-gray-300">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Installations Section */}
        <section id="installations" className="mb-20">
          <h2 className="mb-8 text-3xl font-playfair font-bold text-white">Installations</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {works.installations.map((work) => (
              <div 
                key={work.id} 
                className="group cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredCard(work.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                  <div 
                    className={`flex size-full items-center justify-center bg-gradient-to-br transition-all duration-700 ${
                      hoveredCard === work.id 
                        ? 'from-green-600 via-teal-600 to-cyan-600' 
                        : 'from-gray-700 via-gray-600 to-gray-500'
                    }`}
                  >
                    <span className={`text-sm transition-all duration-300 ${
                      hoveredCard === work.id 
                        ? 'scale-110 text-white opacity-100' 
                        : 'text-gray-300 opacity-70'
                    }`}>
                      インスタレーション作品
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-cormorant font-semibold text-white">{work.title}</h3>
                  <p className="mb-2 text-sm font-inter text-gray-400">{work.year}</p>
                  <p className="text-sm font-cormorant text-gray-300">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="mb-8 text-3xl font-playfair font-bold text-white">Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {works.projects.map((work) => (
              <div 
                key={work.id} 
                className="group cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredCard(work.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                  <div 
                    className={`flex size-full items-center justify-center bg-gradient-to-br transition-all duration-700 ${
                      hoveredCard === work.id 
                        ? 'from-orange-600 via-amber-600 to-yellow-600' 
                        : 'from-gray-700 via-gray-600 to-gray-500'
                    }`}
                  >
                    <span className={`text-sm transition-all duration-300 ${
                      hoveredCard === work.id 
                        ? 'scale-110 text-white opacity-100' 
                        : 'text-gray-300 opacity-70'
                    }`}>
                      アートプロジェクト
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-cormorant font-semibold text-white">{work.title}</h3>
                  <p className="mb-2 text-sm font-inter text-gray-400">{work.year}</p>
                  <p className="text-sm font-cormorant text-gray-300">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
    </>
  )
}