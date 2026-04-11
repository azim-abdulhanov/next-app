'use client'

import { useState } from 'react'
import Stripe from 'stripe'
import { ProductCard } from '../product-card/product-card'
import { Input } from '../ui/input'
interface ProductListProps {
  products: Stripe.Product[]
}

export function ProductList({ products }: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filteredProducts = products.filter(product => {
    const term = searchTerm.toLowerCase()

    const nameMatch = product.name.toLowerCase().includes(term)
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false

    return nameMatch || descriptionMatch
  })

  return (
    <div>
      <Input
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className='mb-4 w-full h-10'
      />

      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
