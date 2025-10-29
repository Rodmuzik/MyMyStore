'use client'

import { useState } from 'react'
import { useCart, Product } from '@/contexts/CartContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0)
  const { addToCart } = useCart()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity)
      setQuantity(0) // 重置數量為0
      alert(`已將 ${quantity} 個 ${product.name} 加入購物車！`)
    }
  }

  const subtotal = product.price * quantity

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-lg hover:bg-gray-100 transition-all duration-200">
      <div className="h-24 bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg mb-2 flex items-center justify-center shadow-sm">
        <span className="text-xl">🍲</span>
      </div>

      <h4 className="font-semibold mb-1 text-xs leading-tight">{product.name}</h4>

      <p className="text-blue-600 font-bold text-base mb-1">NT$ {product.price}</p>

      {/* 小計顯示 */}
      <p className="text-gray-600 text-xs mb-2">小計 NT$ {subtotal}</p>

      {/* 數量選擇器 */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-700">數量:</span>
        <div className="flex items-center border border-gray-300 rounded-md bg-white">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="px-1.5 py-0.5 text-gray-600 hover:bg-blue-50 rounded-l-md disabled:text-gray-300 disabled:hover:bg-white text-sm"
            disabled={quantity <= 0}
          >
            -
          </button>
          <span className="px-2 py-0.5 bg-white min-w-[30px] text-center text-xs">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="px-1.5 py-0.5 text-gray-600 hover:bg-blue-50 rounded-r-md text-sm"
          >
            +
          </button>
        </div>
      </div>

      {/* 加入購物車按鈕 */}
      <button
        onClick={handleAddToCart}
        disabled={quantity === 0}
        className={`w-full py-1.5 px-2 rounded-md text-xs transition-colors ${
          quantity === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        加入購物車
      </button>
    </div>
  )
}