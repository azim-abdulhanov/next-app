import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface ProductCardProps {
  product: Stripe.Product
}

export function ProductCard({ product }: ProductCardProps) {
  const price = product.default_price as Stripe.Price

  return (
    <Link href={`/products/${product.id}`}>
      <Card className='hover:shadow-lg transition-shadow duration-300 h-full'>
        {product.images && product.images.length > 0 && (
          <div>
            <Image
              src={product.images[0]}
              alt={product.name || 'Product Image'}
              width={400}
              height={400}
              className='object-contain w-full h-48 px-4'
            />
          </div>
        )}

        <CardHeader className='mt-4'>
          <CardTitle className='text-md font-bold line-clamp-1'>
            {product.name}
          </CardTitle>
          <CardContent className='mt-1 p-0'>
            {product.description && (
              <p className='text-sm text-gray-500 line-clamp-2 mb-2'>
                {product.description}
              </p>
            )}

            {price && (
              <p className='text-md font-semibold text-gray-700'>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: price.currency
                }).format(price.unit_amount! / 100)}
              </p>
            )}

            <Button className='mt-4 w-full' variant='default' size='lg'>
              View Details
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  )
}
