import Link from "next/link"

export const Header = () => {
  return (
    <header className="border-b border-gray-800/30 bg-gray-900/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-6">
          <div className="shrink-0">
            <h1 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-2xl font-playfair font-bold text-transparent sm:text-3xl">原 千里</h1>
            <p className="text-xs font-inter tracking-[0.3em] text-gray-400 sm:text-sm">A R T I S T</p>
          </div>
          <nav className="flex space-x-4 sm:space-x-8">
            <Link href="/" className="text-sm font-inter text-gray-300 transition-colors hover:text-white sm:text-base">作品</Link>
            <Link href="/about" className="text-sm font-inter text-gray-300 transition-colors hover:text-white sm:text-base">プロフィール</Link>
            <Link href="/contact" className="text-sm font-inter font-medium text-white transition-colors hover:text-gray-300 sm:text-base">お問い合わせ</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}