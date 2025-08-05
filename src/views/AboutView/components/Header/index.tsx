import Link from "next/link"

export const Header = () => {
  return (
    <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-6">
          <div className="shrink-0">
            <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">原 千里</h1>
            <p className="text-xs tracking-widest text-gray-600 sm:text-sm">A R T I S T</p>
          </div>
          <nav className="flex space-x-4 sm:space-x-8">
            <Link href="/" className="text-sm text-gray-600 transition-colors hover:text-gray-900 sm:text-base">作品</Link>
            <Link href="/about" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 sm:text-base">プロフィール</Link>
            <Link href="/contact" className="text-sm text-gray-600 transition-colors hover:text-gray-900 sm:text-base">お問い合わせ</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}