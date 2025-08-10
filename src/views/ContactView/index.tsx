import { config } from "~/config"
import { useContactView } from "./hooks"

export default function ContactView() {
  useContactView()

  return (
    <>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-playfair font-bold text-transparent">Contact</h1>
          <p className="font-cormorant text-lg text-gray-700">
            Please feel free to contact me through the following methods
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-8 shadow-lg border border-gray-200 text-center hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-red-500">
                <svg className="size-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-playfair font-semibold text-gray-900">Gmail</h3>
              <a
                href="mailto:ch0x0hr@gmail.com"
                className="cursor-pointer text-lg font-inter text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                ch0x0hr@gmail.com
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-8 shadow-lg border border-gray-200 text-center hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full">
                <img
                  src={`${config.imageUrl}/images/logo/instagram-icon.svg`}
                  alt={"instagram icon"}
                  className="cursor-pointer"
                />
              </div>
              <h3 className="mb-2 text-xl font-playfair font-semibold text-gray-900">Instagram</h3>
              <a
                href="https://instagram.com/chisatohr"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-lg font-inter text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                @chisatohr
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-cormorant text-gray-600">
            Please feel free to contact me regarding artwork inquiries or exhibition consultations
          </p>
        </div>
      </div>
    </>
  )
}