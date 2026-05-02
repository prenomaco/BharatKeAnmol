'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Why Us', href: '/#why' },
  { label: 'Categories', href: '/#categories' },
  { label: 'Founder', href: '/#founder' },
  { label: 'Forms', href: '/#forms' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.replace('/#', '/'))
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[border-color,background-color] duration-300',
          'backdrop-blur-md bg-cream/90',
          scrolled
            ? 'border-b border-gold/40 bg-cream/95'
            : 'border-b border-transparent'
        )}
      >
        <div className="relative max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="flex h-12 w-[82px] items-center justify-start py-2 shrink-0 transition-transform duration-300 hover:scale-[1.04]"
            aria-label="Bharat Ke Anmol home"
          >
            <Image
              src="/logo-text.png"
              alt="Bharat Ke Anmol"
              width={88}
              height={54}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center Nav — Desktop */}
          <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'gsap-hover relative text-[13px] font-medium tracking-[0.04em] text-navy/80 pb-[3px] group',
                  'transition-colors duration-200 hover:text-navy'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-saffron',
                    'transition-opacity duration-200',
                    isActive(link.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Right Actions — Desktop */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <Link
              href="/partner"
              className="gsap-hover text-[13px] font-semibold text-navy border border-navy/25 px-4 py-2 rounded-full hover:border-saffron hover:text-saffron transition-colors duration-200 flex items-center gap-1.5"
            >
              Become a Partner
              <ArrowRight className="hover-icon" size={12} strokeWidth={2} />
            </Link>
            <Link
              href="/nominate"
              className="gsap-hover bg-saffron text-white text-[13px] font-bold px-5 py-2.5 rounded-full hover:bg-amber transition-colors duration-200"
            >
              Nominate Now
            </Link>
          </div>

          {/* Hamburger — Mobile */}
          <button
            className="lg:hidden text-navy p-1.5 rounded-lg hover:bg-navy/5 transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out',
            open ? 'max-h-[500px]' : 'max-h-0'
          )}
        >
          <div className="px-6 pb-6 pt-2 bg-cream/98 border-t border-gold/20 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[14px] font-medium text-navy/80 hover:text-navy border-b border-navy/5 last:border-b-0 flex items-center justify-between"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/partner"
                onClick={() => setOpen(false)}
                className="text-center py-3 rounded-full border border-navy/20 text-navy text-[13px] font-semibold hover:bg-navy/5 transition-colors duration-200"
              >
                Become a Partner
              </Link>
              <Link
                href="/nominate"
                onClick={() => setOpen(false)}
                className="text-center bg-saffron text-white py-3 rounded-full text-[13px] font-bold hover:bg-amber transition-colors duration-200"
              >
                Nominate Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[72px]" />
    </>
  )
}
