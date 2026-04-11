'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import Image from 'next/image'
import Stripe from 'stripe'

interface CarouselProps {
  products: Stripe.Product[]
}

export function ProductCarousel({ products }: CarouselProps) {
  return (
    <Card className='w-full'>
      <CardContent>
        <Carousel className='w-full'>
          <CarouselContent>
            {products.map(product => (
              <CarouselItem key={product.id}>
                <div className='relative h-64 w-full'>
                  {product.images[0] && (
                    <Image
                      src={product.images[0]}
                      alt={product.name || 'Product Image'}
                      width={400}
                      height={400}
                      className='object-contain absolute inset-0 h-full w-full'
                    />
                  )}
                </div>
                <h3 className='mt-4 text-lg font-semibold'>{product.name}</h3>
                <p className='text-sm text-muted-foreground'>
                  {product.description}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  )
}
