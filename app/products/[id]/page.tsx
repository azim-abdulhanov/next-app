import { ProductDetail } from '@/components/product-detail/product-detail'
import { stripe } from '@/lib/stripe'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Details',
  description:
    'View detailed information about our products, including pricing, features, and specifications. Find the perfect product to meet your needs and make informed purchasing decisions.'
}

export default async function Page({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = await stripe.products.retrieve(id, {
    expand: ['default_price']
  })

  const plainProduct = JSON.parse(JSON.stringify(product))

  return <ProductDetail product={plainProduct} />
}
