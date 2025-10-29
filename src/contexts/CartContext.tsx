'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'

// 定義商品和購物車項目的類型
export interface Product {
  id: string
  name: string
  price: number
}

export interface CartItem extends Product {
  quantity: number
}

// 定義購物車狀態
interface CartState {
  items: CartItem[]
  totalItems: number
  totalAmount: number
}

// 定義動作類型
type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }

// 初始狀態
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0
}

// 計算總計的輔助函數
const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  return { totalItems, totalAmount }
}

// Reducer函數
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity } = action.payload
      const existingItemIndex = state.items.findIndex(item => item.id === product.id)

      let newItems: CartItem[]
      if (existingItemIndex >= 0) {
        // 如果商品已存在，更新數量
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        // 如果是新商品，加入到購物車
        newItems = [...state.items, { ...product, quantity }]
      }

      const { totalItems, totalAmount } = calculateTotals(newItems)
      return { items: newItems, totalItems, totalAmount }
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.id !== action.payload.id)
      const { totalItems, totalAmount } = calculateTotals(newItems)
      return { items: newItems, totalItems, totalAmount }
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      const newItems = quantity <= 0
        ? state.items.filter(item => item.id !== id)
        : state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )

      const { totalItems, totalAmount } = calculateTotals(newItems)
      return { items: newItems, totalItems, totalAmount }
    }

    case 'CLEAR_CART':
      return initialState

    default:
      return state
  }
}

// Context類型
interface CartContextType {
  state: CartState
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

// 創建Context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Provider組件
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product: Product, quantity: number) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })
  }

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook for using cart context
export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}