import { useAboutView } from "./hooks"

export default function AboutView() {
  useAboutView()

  return (
    <>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-800 shadow-xl shadow-black/50">
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500">
                <span className="text-sm text-gray-300">プロフィール写真</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-12">
              <div>
                <h2 className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-playfair font-bold text-transparent">Artist Statement</h2>
                <div className="space-y-6 font-cormorant text-lg text-gray-300 leading-relaxed">
                  <p>
                    アーティストステートメントをこちらに記載します。作品制作における理念や思想、表現したいことについて詳しく記述してください。
                  </p>
                  <p>
                    芸術活動を通じて何を伝えたいか、どのような価値観を持って制作に臨んでいるかを表現する部分です。
                  </p>
                  <p>
                    現代社会における芸術の役割や、個人的な制作動機について言及することで、作品への理解を深めることができます。
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-playfair font-bold text-transparent">Biography</h2>
                <div className="space-y-6 font-cormorant text-gray-300">
                  <div>
                    <h3 className="mb-4 text-xl font-playfair font-semibold text-white">経歴</h3>
                    <div className="space-y-4 text-base">
                      <p>
                        こちらに詳細な経歴を記載します。生年月日、出身地、学歴、主要な展覧会履歴、受賞歴などを時系列で記述してください。
                      </p>
                      <p>
                        アーティストとしての歩みや転機となった出来事、影響を受けた作家や体験などについても触れることで、作品の背景を理解しやすくなります。
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-playfair font-semibold text-white">主要展覧会</h3>
                    <div className="space-y-3 font-inter text-gray-400">
                      <div className="border-l-2 border-gray-600 pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="text-sm font-medium text-gray-300 sm:w-20">2024年</span>
                          <span className="text-sm">展覧会名を記載（会場名、都市名）</span>
                        </div>
                      </div>
                      <div className="border-l-2 border-gray-600 pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="text-sm font-medium text-gray-300 sm:w-20">2023年</span>
                          <span className="text-sm">展覧会名を記載（会場名、都市名）</span>
                        </div>
                      </div>
                      <div className="border-l-2 border-gray-600 pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="text-sm font-medium text-gray-300 sm:w-20">2022年</span>
                          <span className="text-sm">展覧会名を記載（会場名、都市名）</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-playfair font-semibold text-white">受賞・助成</h3>
                    <div className="space-y-3 font-inter text-gray-400">
                      <div className="border-l-2 border-gray-600 pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="text-sm font-medium text-gray-300 sm:w-20">2024年</span>
                          <span className="text-sm">受賞・助成名を記載</span>
                        </div>
                      </div>
                      <div className="border-l-2 border-gray-600 pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="text-sm font-medium text-gray-300 sm:w-20">2023年</span>
                          <span className="text-sm">受賞・助成名を記載</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-playfair font-semibold text-white">コレクション</h3>
                    <div className="space-y-2 font-inter text-gray-400">
                      <div className="text-sm">
                        作品がコレクションされている美術館や機関名を記載
                      </div>
                      <div className="text-sm">
                        プライベートコレクション等があれば記載
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}