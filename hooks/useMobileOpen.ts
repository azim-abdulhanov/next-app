import { useEffect, useState } from 'react'

export function useMobileOpen() {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const onToggleMobileMenu = () => {
    setIsMobileOpen(prev => !prev)
  }

  return {
    onToggleMobileMenu,
    isMobileOpen
  }
}
