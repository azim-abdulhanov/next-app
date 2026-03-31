'use client'

import { useState } from 'react'
import Stripe from 'stripe'
import { ProductCard } from '../product-card/product-card'

interface ProductListProps {
  products: Stripe.Product[]
}

export function ProductList({ products }: ProductListProps) {
  // Search products by name or description
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
      <input
        className='w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300'
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
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
