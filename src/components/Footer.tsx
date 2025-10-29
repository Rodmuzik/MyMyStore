'use client'

export default function Footer() {
  const handleNavigation = (section: string) => {
    console.log(`導航到: ${section}`)
    // 這裡之後可以加入實際的路由導航
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-green-700 border-t border-green-600 shadow-lg z-50">
      <div className="flex items-center justify-around h-16 px-4">
        {/* 商品 */}
        <button
          onClick={() => handleNavigation('商品')}
          className="flex flex-col items-center justify-center flex-1 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-xs font-medium">商品</span>
        </button>

        {/* 清單 */}
        <button
          onClick={() => handleNavigation('清單')}
          className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <span className="text-xs font-medium">清單</span>
        </button>

        {/* 匯款 */}
        <button
          onClick={() => handleNavigation('匯款')}
          className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <span className="text-xs font-medium">匯款</span>
        </button>
      </div>
    </footer>
  )
}