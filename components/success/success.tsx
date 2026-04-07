'use client'

import { useCartStore } from '@/store/cart.store'
import Link from 'next/link'
import { useEffect } from 'react'

export function Success() {
  const { clearCart } = useCartStore()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Success</h2>
      <p>
        Your order was successful! Thank you for your purchase. You will receive
        an email confirmation shortly.
      </p>
      <Link href='/products'>
        <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
          Continue Shopping
        </button>
      </Link>
    </div>
  )
}
