'use client'

import { useCart } from '@/contexts/CartContext'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { state, updateQuantity, removeFromCart } = useCart()

  if (!isOpen) return null

  const handleCheckout = () => {
    alert('準備進入結帳流程...')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">購物車</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🛒</div>
              <p className="text-gray-500">購物車是空的</p>
              <p className="text-sm text-gray-400 mt-2">快去選購您喜歡的商品吧！</p>
            </div>
          ) : (
            <div className="space-y-3">
              {state.items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-gray-800 truncate">
                        {item.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm mt-1">
                        NT$ {item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 ml-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* 數量控制 */}
                    <div className="flex items-center border border-gray-300 rounded-md bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-gray-600 hover:bg-blue-50 rounded-l-md text-sm"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 bg-white text-center text-sm min-w-[40px]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-gray-600 hover:bg-blue-50 rounded-r-md text-sm"
                      >
                        +
                      </button>
                    </div>

                    {/* 小計 */}
                    <div className="text-right">
                      <p className="text-xs text-gray-500">小計</p>
                      <p className="font-semibold text-green-600">
                        NT$ {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {state.items.length > 0 && (
          <div className="border-t p-4 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">商品數量</span>
                <span className="font-medium">{state.totalItems} 件</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span className="text-gray-800">總計金額</span>
                <span className="text-green-600">NT$ {state.totalAmount}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              確認結帳
            </button>
          </div>
        )}
      </div>
    </div>
  )
}