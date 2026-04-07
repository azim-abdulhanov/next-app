import { Checkout } from '@/components/checkout/checkout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout',
  description:
    'Complete your purchase and enjoy our products. Review your order, enter your payment details, and finalize your checkout process with ease.'
}

export default function Page() {
  return <Checkout />
}
