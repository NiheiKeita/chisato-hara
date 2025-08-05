import { useContactView } from "./hooks"
import { Header } from "./components/Header"

export default function ContactView() {
  useContactView()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-2xl font-bold text-transparent">お問い合わせ</h2>
            <p className="text-gray-600">
              作品の購入、展示のご相談、その他ご質問がございましたらお気軽にご連絡ください。
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50/80 p-6 shadow-lg backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">連絡先情報</h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <strong>Email:</strong><br />
                  chisato.hara@example.com
                </div>
                <div>
                  <strong>電話:</strong><br />
                  03-1234-5678
                </div>
                <div>
                  <strong>営業時間:</strong><br />
                  平日 10:00 - 18:00
                </div>
                <div>
                  <strong>アトリエ住所:</strong><br />
                  東京都渋谷区〇〇 1-2-3<br />
                  アートビル 3F
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50/80 p-6 shadow-lg backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">SNS・その他</h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <strong>Instagram:</strong><br />
                  @chisato_hara_art
                </div>
                <div>
                  <strong>Twitter:</strong><br />
                  @chisato_art
                </div>
                <div>
                  <strong>展示スケジュール:</strong><br />
                  定期的に更新いたします
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">お問い合わせフォーム</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 transition-all duration-200 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 transition-all duration-200 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                  件名 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="">件名を選択してください</option>
                  <option value="purchase">作品の購入について</option>
                  <option value="exhibition">展示・委託について</option>
                  <option value="media">メディア・取材について</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  メッセージ *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="ご質問やご相談内容をお書きください"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="rounded-md bg-gray-900 px-8 py-3 text-white transition-all duration-200 hover:scale-105 hover:bg-gray-800 hover:shadow-lg"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              お送りいただいた内容は、原則として3営業日以内にご返信いたします。<br />
              お急ぎの場合は、お電話にてお問い合わせください。
            </p>
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