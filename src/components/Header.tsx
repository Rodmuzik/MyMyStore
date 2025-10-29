'use client'

import { useState } from 'react'
import HeaderLoginButton from './HeaderLoginButton'
import CartModal from './CartModal'
import { useCart } from '@/contexts/CartContext'

export default function Header() {
  const { state } = useCart()
  const [isCartModalOpen, setIsCartModalOpen] = useState(false)
  return (
    <header className="bg-green-700 shadow-sm border-b border-green-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">My Store</h1>
          </div>

          {/* 右側功能區 */}
          <div className="flex items-center space-x-4">
            {/* 購物車 */}
            <button
              onClick={() => setIsCartModalOpen(true)}
              className="relative p-2 text-green-100 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9" />
              </svg>
              {/* 購物車數量提示 */}
              {state.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.totalItems}
                </span>
              )}
            </button>

            {/* 登入區域 */}
            <div className="flex items-center">
              <HeaderLoginButton />
            </div>
          </div>
        </div>
      </div>

      {/* 購物車彈窗 */}
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </header>
  )
}