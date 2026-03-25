import { PagesConfig } from '@/config/pages.config'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className='sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background px-6 py-3'>
      {/* Logo */}
      <Link href={PagesConfig.HOME}>
        <Image
          src='/logo.png'
          alt='Logo'
          width={40}
          height={40}
          className='w-10 h-10 object-contain'
        />
      </Link>

      {/* Navigation */}
      <nav>
        <ul className='hidden md:flex items-center gap-5'>
          <li>
            <Link
              className='text-foreground hover:text-blue-600 transition-colors'
              href={PagesConfig.ORDERS}>
              Orders
            </Link>
          </li>
          <li>
            <Link
              className='text-foreground hover:text-blue-600 transition-colors'
              href={PagesConfig.FAVORITES}>
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
