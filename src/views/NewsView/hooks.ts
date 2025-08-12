export const useNewsView = () => {

  const news = [
    {
      id: 1,
      type: 'exhibition',
      title: '個展「新しい視点」',
      description: '最新作品を中心とした個展を開催いたします。映像作品とインスタレーション作品を組み合わせた新しい試みをご覧ください。',
      date: '2024-12-01',
      period: '2024年12月1日 - 2024年12月31日',
      venue: '東京現代美術館',
      url: 'https://example.com'
    },
    {
      id: 2,
      type: 'performance',
      title: 'パフォーマンス「身体と空間」',
      description: '身体性をテーマにしたパフォーマンス作品を上演します。観客との相互作用を重視した新しい形の表現にご期待ください。',
      date: '2024-11-15',
      period: '2024年11月15日 19:00-',
      venue: 'スパイラルホール',
      url: null
    },
    {
      id: 3,
      type: 'workshop',
      title: 'ワークショップ「映像表現入門」',
      description: '映像を使った表現技法について学ぶワークショップです。初心者の方でも参加いただけます。',
      date: '2024-10-20',
      period: '2024年10月20日 14:00-17:00',
      venue: 'アートセンター東京',
      url: 'https://example.com/workshop'
    }
  ]

  return {
    news
  }
}