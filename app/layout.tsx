import { Navbar } from '@/components/navbar/navbar'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Nextjs ecommerce website',
  description:
    'A simple ecommerce website built with Next.js, Tailwind CSS, and TypeScript.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col bg-white'>
        <Navbar />
        <main className='grow container mx-auto px-6 py-8'>{children}</main>
      </body>
    </html>
  )
}
