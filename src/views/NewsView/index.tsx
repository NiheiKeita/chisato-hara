"use client"

import { useNewsView } from "./hooks"

function NewsView() {
  const { news } = useNewsView()

  return (
    <>
        <div className="mb-12 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-4xl font-playfair font-bold text-transparent">
            News
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-cormorant text-gray-700">
            Latest information about exhibitions, performances, and workshops
          </p>
        </div>

        <div className="space-y-8">
          {news.map((item, index) => (
            <article 
              key={item.id}
              className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-lg transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-xl"
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
                        ? 'bg-blue-100 text-blue-700' 
                        : item.type === 'performance'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {item.type === 'exhibition' ? 'Exhibition' : item.type === 'performance' ? 'Performance' : 'Workshop'}
                    </span>
                    <time className="text-sm font-inter text-gray-600" dateTime={item.date}>
                      {item.date}
                    </time>
                  </div>
                  <h2 className="mb-3 text-xl font-playfair font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="mb-4 font-cormorant text-gray-700">
                    {item.description}
                  </p>
                  <div className="space-y-1 text-sm font-inter text-gray-600">
                    <div>
                      <span className="font-medium text-gray-700">Venue:</span> {item.venue}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Period:</span> {item.period}
                    </div>
                    {item.url && (
                      <div>
                        <span className="font-medium text-gray-700">Details:</span>{' '}
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          Official Website
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
          <p className="font-cormorant text-gray-600">
            Past news will be archived sequentially
          </p>
        </div>
    </>
  )
}

export default NewsView
export { NewsView }