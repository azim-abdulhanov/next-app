import { Success } from '@/components/success/success'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Success',
  description: 'Your order was successful!'
}

export default function Page() {
  return <Success />
}
