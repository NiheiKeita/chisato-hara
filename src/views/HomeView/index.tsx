"use client"

import { useHomeView } from "./hooks"
import { WorkCard } from "./components/WorkCard"
import { ImageModal } from "./components/ImageModal"

export default function HomeView() {
  const { hoveredCard, setHoveredCard, works, selectedImage, openImageModal, closeImageModal } = useHomeView()

  return (
    <>
      <div className="mb-16 text-center">
        <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text font-playfair text-5xl font-bold text-transparent">
          原知里
        </h1>
        <p className="mx-auto max-w-2xl font-cormorant text-lg text-gray-600">
          Explore works through videos, performances, installations, and art projects
        </p>
      </div>

      {/* Videos Section */}
      <section id="videos" className="mb-20">
        <h2 className="mb-8 font-playfair text-3xl font-bold text-gray-900">Videos</h2>
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
              onImageClick={openImageModal}
            />
          ))}
        </div>
      </section>

      {/* Performances Section */}
      <section id="performances" className="mb-20">
        <h2 className="mb-8 font-playfair text-3xl font-bold text-gray-900">Performances</h2>
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
              onImageClick={openImageModal}
            />
          ))}
        </div>
      </section>

      {/* Installations Section */}
      <section id="installations" className="mb-20">
        <h2 className="mb-8 font-playfair text-3xl font-bold text-gray-900">Installations</h2>
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
              onImageClick={openImageModal}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h2 className="mb-8 font-playfair text-3xl font-bold text-gray-900">Projects</h2>
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
              onImageClick={openImageModal}
            />
          ))}
        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="mb-20">
        <h2 className="mb-8 font-playfair text-3xl font-bold text-gray-900">Photography</h2>
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
              onImageClick={openImageModal}
            />
          ))}
        </div>
      </section>

      <ImageModal
        isOpen={selectedImage !== null}
        imageSrc={selectedImage?.src || ""}
        title={selectedImage?.title || ""}
        description={selectedImage?.description || ""}
        onClose={closeImageModal}
      />
    </>
  )
}