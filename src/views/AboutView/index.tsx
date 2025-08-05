import { useAboutView } from "./hooks"
import { Header } from "./components/Header"

export default function AboutView() {
  useAboutView()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 shadow-xl">
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
                <span className="text-sm text-gray-500">プロフィール写真</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-2xl font-bold text-transparent">アーティストプロフィール</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    1990年東京生まれ。幼少期より絵画に親しみ、高校時代に本格的に美術を学び始める。
                    2014年に多摩美術大学絵画学科を卒業後、都内を中心に個展・グループ展を開催。
                  </p>
                  <p>
                    自然と都市生活の調和をテーマに、油彩、水彩、ミクストメディアなど様々な技法を用いて作品を制作。
                    特に光と色彩の表現に重点を置き、見る人の心に安らぎと希望をもたらす作品づくりを目指している。
                  </p>
                  <p>
                    2020年からはデジタルアートにも挑戦し、伝統的な技法とデジタル技術を融合させた新しい表現を模索している。
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">学歴・経歴</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex">
                    <span className="w-16 text-sm font-medium">2014年</span>
                    <span className="text-sm">多摩美術大学絵画学科 卒業</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-sm font-medium">2015年</span>
                    <span className="text-sm">第1回個展「光のかけら」開催（銀座ギャラリー）</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-sm font-medium">2018年</span>
                    <span className="text-sm">新人作家展 優秀賞受賞</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-sm font-medium">2020年</span>
                    <span className="text-sm">デジタルアート作品の制作開始</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-sm font-medium">2023年</span>
                    <span className="text-sm">個展「都市と自然の調和」開催（渋谷アートギャラリー）</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">受賞歴</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex">
                    <span className="w-16 text-sm font-medium">2018年</span>
                    <span className="text-sm">新人作家展 優秀賞</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-sm font-medium">2021年</span>
                    <span className="text-sm">現代美術コンペティション 入選</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-sm font-medium">2023年</span>
                    <span className="text-sm">東京アートフェア 特別賞</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">制作技法</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• 油彩</div>
                  <div>• 水彩</div>
                  <div>• アクリル</div>
                  <div>• ミクストメディア</div>
                  <div>• デジタルアート</div>
                  <div>• コラージュ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 border-t border-gray-200/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 原 千里. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}