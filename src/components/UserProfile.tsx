'use client'

import { signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import Image from 'next/image'

interface UserProfileProps {
  session: Session
}

export default function UserProfile({ session }: UserProfileProps) {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full"
          />
        )}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">
            {session.user?.name || '用戶'}
          </h2>
          <p className="text-gray-600 text-sm">
            {session.user?.email}
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-green-600 text-sm font-medium">✓ 已登入</span>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          登出
        </button>
      </div>
    </div>
  )
}