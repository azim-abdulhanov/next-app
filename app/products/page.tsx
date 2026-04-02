import { ProductList } from '@/components/product-list/product-list'
import { stripe } from '@/lib/stripe'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore our wide range of products and find the perfect items for you. From electronics to fashion, we have something for everyone.'
}

export default async function Page() {
  const products = await stripe.products.list({
    expand: ['data.default_price']
  })

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>All Products</h2>
      <ProductList products={products.data} />
    </div>
  )
}
