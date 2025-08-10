import { useContactView } from "./hooks"

export default function ContactView() {
  useContactView()

  return (
    <>
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-playfair font-bold text-transparent">Contact</h1>
            <p className="font-cormorant text-lg text-gray-300">
              お問い合わせは以下の方法でお気軽にご連絡ください
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gray-800/80 p-8 shadow-lg backdrop-blur-sm border border-gray-700/50 text-center">
              <div className="mb-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-playfair font-semibold text-white">Gmail</h3>
                <a 
                  href="mailto:ch0x0hr@gmail.com" 
                  className="text-lg font-inter text-gray-300 hover:text-white transition-colors duration-200"
                >
                  ch0x0hr@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-gray-800/80 p-8 shadow-lg backdrop-blur-sm border border-gray-700/50 text-center">
              <div className="mb-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.690 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-playfair font-semibold text-white">Instagram</h3>
                <a 
                  href="https://instagram.com/chisatohr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-inter text-gray-300 hover:text-white transition-colors duration-200"
                >
                  @chisatohr
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="font-cormorant text-gray-400">
              作品についてのお問い合わせや展示のご相談など、お気軽にご連絡ください
            </p>
          </div>
        </div>
    </>
  )
}