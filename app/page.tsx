import { Carousel } from '@/components/carousel/carousel'
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
      <section className='flex items-center justify-between gap-8 mb-16 border rounded-lg p-8'>
        <div className='max-w-lg'>
          <h1 className='text-xl md:text-4xl font-bold'>
            Welcome to My Ecommerce
          </h1>
          <p className='mt-4 text-xs md:text-sm text-gray-600'>
            Discover our latest products and enjoy seamless shopping experience.
            Browse our collection and find the perfect items for you!
          </p>
          <Link href='/products'>
            <Button variant='outline' className='mt-6 cursor-pointer'>
              View Products <ChevronRight className='ml-1' size={18} />
            </Button>
          </Link>
        </div>

        <div className='w-96 h-96 relative'>
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
        <Carousel products={products.data} />
      </section>
    </>
  )
}
