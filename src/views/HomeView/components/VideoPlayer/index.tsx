"use client"

import { WorkCard } from "../WorkCard"

interface VideoPlayerProps {
  id: number
  title: string
  image: string
  description: string
  hoveredCard: number | null
  setHoveredCard: (id: number | null) => void
  videoUrl: string
  onImageClick: (image: string, title: string, description: string) => void
}

export function VideoPlayer({ 
  id,
  title, 
  image, 
  description,
  hoveredCard,
  setHoveredCard,
  onImageClick
}: VideoPlayerProps) {
  return (
    <WorkCard
      id={id}
      title={title}
      image={image}
      description={description}
      hoveredCard={hoveredCard}
      setHoveredCard={setHoveredCard}
      onImageClick={onImageClick}
    />
  )
}