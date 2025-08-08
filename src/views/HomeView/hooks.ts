import { useState, useEffect } from "react"

export const useHomeView = () => {
  const [scrollY, setScrollY] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    
return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const artworks = [
    {
      id: 1,
      title: "夏の風景",
      medium: "Oil on Canvas",
      year: "2024",
      image: "/artworks/artwork1.jpg",
      description: "美しい夏の自然を表現した作品"
    },
    {
      id: 2,
      title: "都市の夜",
      medium: "Acrylic on Canvas",
      year: "2023",
      image: "/artworks/artwork2.jpg",
      description: "都市の夜景をモダンなタッチで描いた作品"
    },
    {
      id: 3,
      title: "静寂",
      medium: "Watercolor",
      year: "2024",
      image: "/artworks/artwork3.jpg",
      description: "静かな時間を表現した水彩画"
    },
    {
      id: 4,
      title: "生命力",
      medium: "Mixed Media",
      year: "2023",
      image: "/artworks/artwork4.jpg",
      description: "生命の力強さを表現したミクストメディア作品"
    },
    {
      id: 5,
      title: "記憶の断片",
      medium: "Digital Art",
      year: "2024",
      image: "/artworks/artwork5.jpg",
      description: "記憶をテーマにしたデジタルアート"
    },
    {
      id: 6,
      title: "希望の光",
      medium: "Oil on Canvas",
      year: "2024",
      image: "/artworks/artwork6.jpg",
      description: "希望をテーマにした明るい作品"
    }
  ]

  return {
    scrollY,
    hoveredCard,
    setHoveredCard,
    artworks
  }
}