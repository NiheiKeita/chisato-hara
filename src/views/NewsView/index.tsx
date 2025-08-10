"use client"

import { useNewsView } from "./hooks"

function NewsView() {
  const { news } = useNewsView()

  return (
    <>
        <div className="mb-12 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-4xl font-playfair font-bold text-transparent">
            News
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-cormorant text-gray-300">
            展示、出演、ワークショップなどの最新情報をお知らせします
          </p>
        </div>

        <div className="space-y-8">
          {news.map((item, index) => (
            <article 
              key={item.id}
              className="rounded-lg border border-gray-700/50 bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/70"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
                transform: 'translateY(30px)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="mb-4 sm:mb-0 sm:flex-1">
                  <div className="mb-2 flex items-center space-x-3">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                      item.type === 'exhibition' 
                        ? 'bg-blue-900/50 text-blue-300' 
                        : item.type === 'performance'
                        ? 'bg-purple-900/50 text-purple-300'
                        : 'bg-green-900/50 text-green-300'
                    }`}>
                      {item.type === 'exhibition' ? '展示' : item.type === 'performance' ? 'パフォーマンス' : 'ワークショップ'}
                    </span>
                    <time className="text-sm font-inter text-gray-400" dateTime={item.date}>
                      {item.date}
                    </time>
                  </div>
                  <h2 className="mb-3 text-xl font-playfair font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mb-4 font-cormorant text-gray-300">
                    {item.description}
                  </p>
                  <div className="space-y-1 text-sm font-inter text-gray-400">
                    <div>
                      <span className="font-medium text-gray-300">会場:</span> {item.venue}
                    </div>
                    <div>
                      <span className="font-medium text-gray-300">期間:</span> {item.period}
                    </div>
                    {item.url && (
                      <div>
                        <span className="font-medium text-gray-300">詳細:</span>{' '}
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 hover:underline"
                        >
                          公式サイト
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-cormorant text-gray-400">
            過去のニュースは順次アーカイブされます
          </p>
        </div>
    </>
  )
}

export default NewsView
export { NewsView }