"use client"

import { useHomeView } from "./hooks"
import { VideoPlayer } from "./components/VideoPlayer"

export default function HomeView() {
  const { hoveredCard, setHoveredCard, works } = useHomeView()

  return (
    <>
        <div className="mb-16 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-5xl font-playfair font-bold text-transparent">
            原知里
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-cormorant text-gray-600">
            Explore works through videos, performances, installations, and art projects
          </p>
        </div>

        {/* Videos Section */}
        <section id="videos" className="mb-20">
          <h2 className="mb-8 text-3xl font-playfair font-bold text-gray-900">Videos</h2>
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
                  <h3 className="mb-1 text-xl font-cormorant font-semibold text-gray-900">{work.title}</h3>
                  <p className="mb-2 text-sm font-inter text-gray-600">{work.year}</p>
                  <p className="text-sm font-cormorant text-gray-700">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performances Section */}
        <section id="performances" className="mb-20">
          <h2 className="mb-8 text-3xl font-playfair font-bold text-gray-900">Performances</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {works.performances.map((work) => (
              <div 
                key={work.id} 
                className="group cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredCard(work.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-500/10">
                  <div 
                    className={`flex size-full items-center justify-center bg-gradient-to-br transition-all duration-700 ${
                      hoveredCard === work.id 
                        ? 'from-purple-400 via-pink-400 to-red-400' 
                        : 'from-gray-200 via-gray-300 to-gray-400'
                    }`}
                  >
                    <span className={`text-sm transition-all duration-300 ${
                      hoveredCard === work.id 
                        ? 'scale-110 text-white opacity-100' 
                        : 'text-gray-600 opacity-70'
                    }`}>
                      パフォーマンス作品
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-cormorant font-semibold text-gray-900">{work.title}</h3>
                  <p className="mb-2 text-sm font-inter text-gray-600">{work.year}</p>
                  <p className="text-sm font-cormorant text-gray-700">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Installations Section */}
        <section id="installations" className="mb-20">
          <h2 className="mb-8 text-3xl font-playfair font-bold text-gray-900">Installations</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {works.installations.map((work) => (
              <div 
                key={work.id} 
                className="group cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredCard(work.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-500/10">
                  <div 
                    className={`flex size-full items-center justify-center bg-gradient-to-br transition-all duration-700 ${
                      hoveredCard === work.id 
                        ? 'from-green-400 via-teal-400 to-cyan-400' 
                        : 'from-gray-200 via-gray-300 to-gray-400'
                    }`}
                  >
                    <span className={`text-sm transition-all duration-300 ${
                      hoveredCard === work.id 
                        ? 'scale-110 text-white opacity-100' 
                        : 'text-gray-600 opacity-70'
                    }`}>
                      インスタレーション作品
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-cormorant font-semibold text-gray-900">{work.title}</h3>
                  <p className="mb-2 text-sm font-inter text-gray-600">{work.year}</p>
                  <p className="text-sm font-cormorant text-gray-700">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="mb-8 text-3xl font-playfair font-bold text-gray-900">Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {works.projects.map((work) => (
              <div 
                key={work.id} 
                className="group cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredCard(work.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-500/10">
                  <div 
                    className={`flex size-full items-center justify-center bg-gradient-to-br transition-all duration-700 ${
                      hoveredCard === work.id 
                        ? 'from-orange-400 via-amber-400 to-yellow-400' 
                        : 'from-gray-200 via-gray-300 to-gray-400'
                    }`}
                  >
                    <span className={`text-sm transition-all duration-300 ${
                      hoveredCard === work.id 
                        ? 'scale-110 text-white opacity-100' 
                        : 'text-gray-600 opacity-70'
                    }`}>
                      アートプロジェクト
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-cormorant font-semibold text-gray-900">{work.title}</h3>
                  <p className="mb-2 text-sm font-inter text-gray-600">{work.year}</p>
                  <p className="text-sm font-cormorant text-gray-700">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
    </>
  )
}