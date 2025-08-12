import { useAboutView } from "./hooks"
import { config } from "~/config"

export default function AboutView() {
  useAboutView()

  return (
    <>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 shadow-xl shadow-gray-500/20">
              <img 
                src={`${config.imageUrl}/images/アー写.jpg`}
                alt="原知里"
                className="size-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-12">
              <div>
                <h2 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text font-playfair text-3xl font-bold text-transparent">Artist Statement</h2>
                <div className="space-y-6 font-cormorant text-lg leading-relaxed text-gray-700">
                  <p>
                    Please write your artist statement here. Describe in detail your philosophy and thoughts about artwork creation, and what you want to express.
                  </p>
                  <p>
                    This is the part where you express what you want to convey through your artistic activities and what values you bring to your creative work.
                  </p>
                  <p>
                    By mentioning the role of art in contemporary society and personal creative motivations, you can deepen understanding of your work.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text font-playfair text-3xl font-bold text-transparent">Biography</h2>
                <div className="space-y-6 font-cormorant text-gray-700">
                  <div>
                    <h3 className="mb-4 font-playfair text-xl font-semibold text-gray-900">Career</h3>
                    <div className="space-y-4 text-base">
                      <p>
                        Please write detailed career information here. Include date of birth, place of origin, education, major exhibition history, awards, etc. in chronological order.
                      </p>
                      <p>
                        By touching on your artistic journey, pivotal moments, influential artists or experiences, it becomes easier to understand the background of your work.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 font-playfair text-xl font-semibold text-gray-900">Major Exhibitions</h3>
                    <div className="space-y-3 font-inter text-gray-600">
                      <div className="border-l-2 border-gray-400 pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="text-sm font-medium text-gray-700 sm:w-20">2024</span>
                          <span className="text-sm">Exhibition name (Venue name, City)</span>
                        </div>
                      </div>
                      <div className="border-l-2 border-gray-400 pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="text-sm font-medium text-gray-700 sm:w-20">2023</span>
                          <span className="text-sm">Exhibition name (Venue name, City)</span>
                        </div>
                      </div>
                      <div className="border-l-2 border-gray-400 pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="text-sm font-medium text-gray-700 sm:w-20">2022</span>
                          <span className="text-sm">Exhibition name (Venue name, City)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 font-playfair text-xl font-semibold text-gray-900">Awards & Grants</h3>
                    <div className="space-y-3 font-inter text-gray-600">
                      <div className="border-l-2 border-gray-400 pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="text-sm font-medium text-gray-700 sm:w-20">2024</span>
                          <span className="text-sm">Award or grant name</span>
                        </div>
                      </div>
                      <div className="border-l-2 border-gray-400 pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="text-sm font-medium text-gray-700 sm:w-20">2023</span>
                          <span className="text-sm">Award or grant name</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 font-playfair text-xl font-semibold text-gray-900">Collections</h3>
                    <div className="space-y-2 font-inter text-gray-600">
                      <div className="text-sm">
                        List museums or institutions where works are collected
                      </div>
                      <div className="text-sm">
                        Private collections if any
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