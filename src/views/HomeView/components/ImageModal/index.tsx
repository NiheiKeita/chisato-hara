"use client"

import { config } from "~/config"
import { useEffect } from "react"

interface ImageModalProps {
  isOpen: boolean
  imageSrc: string
  title: string
  description: string
  onClose: () => void
}

export function ImageModal({ isOpen, imageSrc, title, description, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative mx-4 max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-black/50 text-white transition-all duration-200 hover:bg-black/70"
        >
          <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col">
          <div className="relative">
            <img
              src={`${config.imageUrl}${imageSrc}`}
              alt={title}
              className="max-h-[70vh] w-full object-contain"
            />
          </div>
          
          <div className="p-6">
            <h3 className="mb-2 text-2xl font-playfair font-semibold text-gray-900">{title}</h3>
            <p className="font-cormorant text-gray-700">{description}</p>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
      />
    </div>
  )
}