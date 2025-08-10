import { useState } from "react"

export const useHomeView = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const works = {
    videos: [
      {
        id: 1,
        title: "「いま、いま、いま、いま」①",
        year: "2024",
        image: "/images/video/「いま、いま、いま、いま」①.jpg",
        description: "Video work exploring temporal expression",
        videoUrl: "https://example.com/video1"
      },
      {
        id: 2,
        title: "「いま、いま、いま、いま」②",
        year: "2024",
        image: "/images/video/「いま、いま、いま、いま」②.jpg",
        description: "Video work exploring temporal expression",
        videoUrl: "https://example.com/video1"
      },
      {
        id: 3,
        title: "運ばれる頁①",
        year: "2023",
        image: "/images/video/運ばれる頁①.JPG",
        description: "Experimental digital video work",
        videoUrl: "https://example.com/video2"
      },
      {
        id: 4,
        title: "運ばれる頁②",
        year: "2023",
        image: "/images/video/運ばれる頁②.JPG",
        description: "Experimental digital video work",
        videoUrl: "https://example.com/video2"
      }
    ],
    performances: [
      {
        id: 5,
        title: "イスくんは、ぬくもりがすき。①",
        year: "2023",
        image: "/images/performances/イスくんは、ぬくもりがすき。①.JPG",
        description: "Interactive performance emphasizing warmth and comfort"
      },
      {
        id: 6,
        title: "イスくんは、ぬくもりがすき。②",
        year: "2023",
        image: "/images/performances/イスくんは、ぬくもりがすき。②.jpg",
        description: "Interactive performance emphasizing warmth and comfort"
      },
      {
        id: 7,
        title: "景",
        year: "2024",
        image: "/images/performances/景.png",
        description: "Spatial performance work"
      }
    ],
    installations: [
      {
        id: 8,
        title: "CONTACT.①",
        year: "2024",
        image: "/images/installation/CONTACT.①.png",
        description: "Installation exploring human connection"
      },
      {
        id: 9,
        title: "CONTACT.②",
        year: "2024",
        image: "/images/installation/CONTACT.②.png",
        description: "Installation exploring human connection"
      },
      {
        id: 10,
        title: "CONTACT.③",
        year: "2024",
        image: "/images/installation/CONTACT.③.jpg",
        description: "Installation exploring human connection"
      },
      {
        id: 11,
        title: "CONTACT.④",
        year: "2024",
        image: "/images/installation/CONTACT.④.png",
        description: "Installation exploring human connection"
      }
    ],
    photography: [
      {
        id: 12,
        title: "在る身体シリーズ①",
        year: "2023",
        image: "/images/photography/在る身体シリーズ①.png",
        description: "Photography series exploring physical presence"
      },
      {
        id: 13,
        title: "在る身体シリーズ②",
        year: "2023",
        image: "/images/photography/在る身体シリーズ②.png",
        description: "Photography series exploring body and space"
      },
      {
        id: 14,
        title: "在る身体シリーズ③",
        year: "2023",
        image: "/images/photography/在る身体シリーズ③.png",
        description: "Photography series exploring body and space"
      }
    ],
    projects: [
      {
        id: 15,
        title: "2:DUO①",
        year: "2024",
        image: "/images/project/2:DUO①.png",
        description: "Collaborative art project"
      },
      {
        id: 16,
        title: "2:DUO②",
        year: "2024",
        image: "/images/project/2:DUO②.png",
        description: "Collaborative art project"
      }
    ]
  }

  return {
    hoveredCard,
    setHoveredCard,
    works
  }
}