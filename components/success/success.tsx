'use client'

import { useCartStore } from '@/store/cart.store'
import Link from 'next/link'
import { useEffect } from 'react'
import { Button } from '../ui/button'

export function Success() {
  const { clearCart } = useCartStore()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Success</h2>
      <p className='text-gray-700'>
        Your order was successful! Thank you for your purchase. You will receive
        an email confirmation shortly.
      </p>
      <Link href='/products'>
        <Button className='mt-4 cursor-pointer' size='lg'>
          Continue Shopping
        </Button>
      </Link>
    </div>
  )
}
