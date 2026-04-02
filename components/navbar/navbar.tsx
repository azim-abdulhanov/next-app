'use client'

import { useMobileOpen } from '@/hooks/useMobileOpen'
import { useCartStore } from '@/store/cart.store'
import { Menu, ShoppingBag, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export function Navbar() {
  const { items } = useCartStore()
  const { isMobileOpen, onToggleMobileMenu } = useMobileOpen()

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className='sticky top-0 z-40 border-b border-border bg-background'>
      <div className='container flex justify-between items-center mx-auto px-6 py-5'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={128}
            height={32}
            className='object-cover w-32 h-auto'
          />
        </Link>

        <nav className='flex items-center gap-6'>
          <ul className='hidden md:flex items-center gap-6'>
            <li>
              <Link
                className='text-foreground text-sm hover:text-blue-600 transition-colors'
                href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link
                className='text-foreground text-sm hover:text-blue-600 transition-colors'
                href='/products'>
                Products
              </Link>
            </li>
            <li>
              <Link
                className='text-foreground text-sm hover:text-blue-600 transition-colors'
                href='/checkout'>
                Checkout
              </Link>
            </li>
          </ul>
        </nav>

        <div className='flex items-center gap-3'>
          <Link href='/checkout' className='relative'>
            <ShoppingBag size={20} className='text-foreground' />
            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4.5 h-4.5 flex items-center justify-center'>
                {cartCount}
              </span>
            )}
          </Link>

          <Button
            className='md:hidden block cursor-pointer'
            variant='ghost'
            onClick={onToggleMobileMenu}>
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {isMobileOpen && (
          <div className='absolute top-full left-0 w-full bg-background border-t border-border shadow-md md:hidden'>
            <ul className='flex flex-col items-start gap-3 px-8 py-6'>
              <li>
                <Link
                  className='text-foreground text-sm hover:text-blue-600 transition-colors'
                  href='/'
                  onClick={onToggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='text-foreground text-sm hover:text-blue-600 transition-colors'
                  href='/products'
                  onClick={onToggleMobileMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className='text-foreground text-sm hover:text-blue-600 transition-colors'
                  href='/checkout'
                  onClick={onToggleMobileMenu}>
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
