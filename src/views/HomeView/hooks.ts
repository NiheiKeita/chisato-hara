import { useState } from "react"

export const useHomeView = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const works = {
    videos: [
      {
        id: 1,
        title: "映像作品 1",
        year: "2024",
        image: "/works/video1.jpg",
        description: "映像を用いた表現作品",
        videoUrl: "https://example.com/video1"
      },
      {
        id: 2,
        title: "映像作品 2",
        year: "2023",
        image: "/works/video2.jpg",
        description: "デジタル映像による実験的作品",
        videoUrl: "https://example.com/video2"
      }
    ],
    performances: [
      {
        id: 3,
        title: "パフォーマンス作品 1",
        year: "2024",
        image: "/works/performance1.jpg",
        description: "身体性を通じた表現"
      },
      {
        id: 4,
        title: "パフォーマンス作品 2",
        year: "2023",
        image: "/works/performance2.jpg",
        description: "観客との相互作用を重視した作品"
      }
    ],
    installations: [
      {
        id: 5,
        title: "インスタレーション作品 1",
        year: "2024",
        image: "/works/installation1.jpg",
        description: "空間を使った立体作品"
      },
      {
        id: 6,
        title: "インスタレーション作品 2",
        year: "2023",
        image: "/works/installation2.jpg",
        description: "光と影を使った空間演出"
      }
    ],
    projects: [
      {
        id: 7,
        title: "アートプロジェクト 1",
        year: "2024",
        image: "/works/project1.jpg",
        description: "地域と連携したアートプロジェクト"
      },
      {
        id: 8,
        title: "アートプロジェクト 2",
        year: "2023",
        image: "/works/project2.jpg",
        description: "コミュニティベースの創作活動"
      }
    ]
  }

  return {
    hoveredCard,
    setHoveredCard,
    works
  }
}