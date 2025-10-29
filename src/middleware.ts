import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // 在這裡可以添加額外的中間件邏輯
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // 定義需要登入才能訪問的路徑
        const protectedPaths = ['/cart', '/checkout', '/orders', '/admin']
        const isProtectedPath = protectedPaths.some(path =>
          req.nextUrl.pathname.startsWith(path)
        )

        // 如果是受保護的路徑，檢查是否有有效的token
        if (isProtectedPath) {
          return !!token
        }

        // 其他路徑允許訪問
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/cart/:path*', '/checkout/:path*', '/orders/:path*', '/admin/:path*']
}