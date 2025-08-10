"use client"

import { useHomeView } from "./hooks"
import { VideoPlayer } from "./components/VideoPlayer"
import { WorkCard } from "./components/WorkCard"

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
            <WorkCard
              key={work.id}
              id={work.id}
              title={work.title}
              image={work.image}
              description={work.description}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </section>

      {/* Performances Section */}
      <section id="performances" className="mb-20">
        <h2 className="mb-8 text-3xl font-playfair font-bold text-gray-900">Performances</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {works.performances.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              title={work.title}
              image={work.image}
              description={work.description}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </section>

      {/* Installations Section */}
      <section id="installations" className="mb-20">
        <h2 className="mb-8 text-3xl font-playfair font-bold text-gray-900">Installations</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {works.installations.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              title={work.title}
              image={work.image}
              description={work.description}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h2 className="mb-8 text-3xl font-playfair font-bold text-gray-900">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {works.projects.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              title={work.title}
              image={work.image}
              description={work.description}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="mb-20">
        <h2 className="mb-8 text-3xl font-playfair font-bold text-gray-900">Photography</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {works.photography.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              title={work.title}
              image={work.image}
              description={work.description}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </section>
    </>
  )
}