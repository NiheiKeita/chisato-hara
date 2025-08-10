"use client"

import { config } from "~/config"

interface WorkCardProps {
  id: number
  title: string
  image: string
  description: string
  hoveredCard: number | null
  setHoveredCard: (id: number | null) => void
  onImageClick: (image: string, title: string, description: string) => void
}

export function WorkCard({ 
  id, 
  title, 
  image, 
  description, 
  hoveredCard, 
  setHoveredCard,
  onImageClick
}: WorkCardProps) {
  return (
    <div
      key={id}
      className="group cursor-pointer transition-all duration-500"
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div 
        className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-500/10"
        onClick={() => onImageClick(image, title, description)}
      >
        <img
          src={`${config.imageUrl}${image}`}
          alt={title}
          className="size-full object-contain transition-all duration-300 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${hoveredCard === id ? 'opacity-100' : 'opacity-0'
          }`} />
      </div>
      <div>
        <h3 className="mb-1 text-xl font-cormorant font-semibold text-gray-900">{title}</h3>
        <p className="text-sm font-cormorant text-gray-700">{description}</p>
      </div>
    </div>
  )
}