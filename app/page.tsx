import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the home page of our Next.js application.'
}

export default function Page() {
  return (
    <div>
      <h1 className='text-white'>Welcome to the Home Page!</h1>
    </div>
  )
}
