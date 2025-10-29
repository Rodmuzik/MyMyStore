import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import LoginPrompt from '@/components/LoginPrompt'
import { CartProvider } from '@/contexts/CartContext'

export default function Home() {
  const products = [
    { id: "1", name: "銀杏四神湯", price: 150 },
    { id: "2", name: "基本款四神湯", price: 100 },
    { id: "3", name: "四物", price: 100 },
    { id: "4", name: "十全大補", price: 100 },
    { id: "5", name: "藥頭排骨", price: 100 },
    { id: "6", name: "羊肉爐", price: 100 },
    { id: "7", name: "蕉母鴨", price: 100 },
    { id: "8", name: "鹿茸天麻首烏藥膳", price: 300 },
    { id: "9", name: "狗尾草藥膳", price: 250 },
    { id: "10", name: "玉竹百合蓮子藥膳", price: 200 },
    { id: "11", name: "清補蟲草飲", price: 200 },
    { id: "12", name: "桃膠木耳蓮子飲", price: 100 }
  ]

  return (
    <CartProvider>
      <div className="min-h-screen bg-green-800">
        <Header />
        <main className="container mx-auto px-4 py-8 pb-20">

          <div className="max-w-6xl mx-auto">
            <LoginPrompt>
              {/* 湯類／藥膳飲品列表 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6">湯類／藥膳飲品列表</h3>

              {/* 手機版：左右滾動 */}
              <div className="md:hidden">
                <div
                  className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory px-6"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                    scrollPaddingLeft: '1.5rem'
                  }}
                >
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className="flex-none w-60 snap-center"
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>

                {/* 滾動提示 */}
                <p className="text-sm text-gray-500 text-center mt-2">
                  ← 左右滑動查看更多商品 →
                </p>
              </div>

              {/* 桌電版：網格布局 */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            </LoginPrompt>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}