'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Stripe from 'stripe'
import { Card, CardContent, CardTitle } from '../ui/card'

interface CarouselProps {
  products: Stripe.Product[]
}

export function Carousel({ products }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % products.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [products.length])

  const currentProduct = products[current]

  const price = currentProduct.default_price as Stripe.Price

  return (
    <Card className='relative w-full h-96 flex items-center justify-center overflow-hidden'>
      {currentProduct.images && currentProduct.images.length > 0 && (
        <div className='absolute inset-0'>
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name || 'Product Image'}
            width={400}
            height={400}
            className='object-contain w-full h-full opacity-70'
          />
        </div>
      )}
      <CardContent className='relative z-10 text-center'>
        <CardTitle className='text-xl'>{currentProduct.name}</CardTitle>
        {price && (
          <p className='text-lg font-semibold mt-2'>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: price.currency
            }).format(price.unit_amount! / 100)}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
