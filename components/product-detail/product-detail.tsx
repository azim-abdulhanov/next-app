'use client'

import { useCartStore } from '@/store/cart.store'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import Stripe from 'stripe'
import { Button } from '../ui/button'

interface ProductDetailProps {
  product: Stripe.Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { items, addItem, removeItem } = useCartStore()
  const price = product.default_price as Stripe.Price

  const cartItem = items.find(item => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount!,
      imageUrl: product.images[0] || null,
      quantity: 1
    })
  }

  return (
    <div className='flex flex-col md:flex-row gap-4'>
      {product.images.length > 0 && (
        <div className='w-full md:w-1/2'>
          <Image
            className='rounded-md object-cover'
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
      )}

      <div className='w-full md:w-1/2 flex flex-col gap-4'>
        <h1 className='text-xl font-bold'>{product.name}</h1>
        <div className='text-md font-metium text-gray-600'>
          {product.description && <p>{product.description}</p>}
        </div>
        {price && (
          <p className='text-lg font-semibold'>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: price.currency
            }).format(price.unit_amount! / 100)}
          </p>
        )}

        <div className='flex items-center gap-2'>
          <Button
            className='cursor-pointer'
            variant='outline'
            onClick={() => removeItem(product.id)}
            disabled={quantity === 0}>
            <Minus className='w-4 h-4' />
          </Button>
          <span className='text-md font-semibold'>{quantity}</span>
          <Button
            className='cursor-pointer'
            variant='outline'
            onClick={onAddItem}
            disabled={quantity >= 10}>
            <Plus className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </div>
  )
}
