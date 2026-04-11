'use client'

import { checkoutAction } from '@/app/checkout/checkout-action'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCartStore } from '@/store/cart.store'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'

export function Checkout() {
  const { items, addItem, removeItem } = useCartStore()

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (items.length === 0) {
    return <p>Your cart is empty. Please add some items before checking out.</p>
  }

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Checkout</h2>
      <Card className='p-4'>
        <CardHeader className='mb-3'>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='flex flex-col divide-y divide-gray-200'>
            {items.map(item => (
              <li
                key={item.id}
                className='flex flex-col md:flex-row justify-between items-center gap-4 py-5'>
                <div className='flex items-start gap-5 w-full md:max-w-3xl'>
                  <Image
                    src={item.imageUrl || '/placeholder.png'}
                    alt={item.name}
                    width={56}
                    height={56}
                    className='object-contain w-14 h-14'
                  />

                  <div className='flex flex-col gap-2'>
                    <span className='font-medium text-md'>
                      {item.name} x {item.quantity} pc.
                    </span>
                    <span className='text-gray-600'>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className='flex items-center gap-2'>
                  <Button
                    className='cursor-pointer'
                    size='icon-sm'
                    variant='destructive'
                    onClick={() => removeItem(item.id)}>
                    <Minus className='size-3' />
                  </Button>
                  <Button
                    className='cursor-pointer'
                    size='icon-sm'
                    onClick={() => addItem({ ...item, quantity: 1 })}
                    disabled={item.quantity >= 10}>
                    <Plus className='size-3' />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex justify-between font-bold text-lg border-t border-gray-200 pt-4 mt-4'>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      <form action={checkoutAction} className='mt-6'>
        <Input type='hidden' name='items' value={JSON.stringify(items)} />
        <Button type='submit' className='cursor-pointer' size='lg'>
          Place Order
        </Button>
      </form>
    </div>
  )
}
