import { ProductCarousel } from '@/components/carousel/carousel'
import { Button } from '@/components/ui/button'
import { stripe } from '@/lib/stripe'
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the home page of our Next.js application.'
}

export default async function Page() {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 5
  })

  return (
    <>
      <section className='flex items-center justify-between gap-8 mb-10 border rounded-2xl p-8'>
        <div className='max-w-lg'>
          <h1 className='text-2xl md:text-4xl font-bold'>
            Welcome to Our Store
          </h1>
          <p className='mt-4 text-gray-600'>
            Discover our exclusive collection of products and enjoy seamless
            shopping experience.
          </p>
          <Link href='/products'>
            <Button variant='outline' className='mt-6 cursor-pointer'>
              <span>View Products</span>
              <ChevronRight size={18} />
            </Button>
          </Link>
        </div>

        <div className='w-96 h-96 relative hidden md:block'>
          <Image
            src={products.data[0].images[0]}
            alt={products.data[0].name}
            width={450}
            height={450}
            className='object-contain w-full h-full'
            loading='eager'
          />
        </div>
      </section>

      <section>
        <ProductCarousel products={products.data} />
      </section>
    </>
  )
}
