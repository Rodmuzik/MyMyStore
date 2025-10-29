'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import LoginButton from './LoginButton'

interface ProtectedRouteProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function ProtectedRoute({
  children,
  fallback
}: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // 還在載入中

    if (!session) {
      // 如果沒有session，可選擇重導向或顯示登入表單
      // router.push('/auth/signin')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!session) {
    return (
      fallback || (
        <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">需要登入</h2>
          <p className="text-gray-600 text-center mb-6">
            此頁面需要登入後才能訪問
          </p>
          <LoginButton />
        </div>
      )
    )
  }

  return <>{children}</>
}