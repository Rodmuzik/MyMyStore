'use client'

import { useSession } from 'next-auth/react'

interface LoginPromptProps {
  children: React.ReactNode
}

export default function LoginPrompt({ children }: LoginPromptProps) {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">載入中...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}