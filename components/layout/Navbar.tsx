'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLenis } from '@/hooks/useLenis'
import Button from '@/components/ui/Button'
import MobileMenu from '@/components/layout/MobileMenu'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Styles', href: '#styles' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we've scrolled past threshold
      setIsScrolled(currentScrollY > 50)

      // Only hide/show after scrolling past 100px
      if (currentScrollY > 100) {
        // Scrolling down - hide navbar
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          setIsHidden(true)
        }
        // Scrolling up - show navbar
        else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
          setIsHidden(false)
        }
      } else {
        setIsHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  useEffect(() => {
    const supabase = createClient()

    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const scrollToTop = () => {
    lenis?.scrollTo(0)
  }

  const scrollToSection = (target: string) => {
    lenis?.scrollTo(target)
  }

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user?.email) return '?'
    return user.email.charAt(0).toUpperCase()
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      } ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-12 lg:h-14' : 'h-16 lg:h-20'
        }`}>
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()
                scrollToTop()
              }
            }}
            className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 z-10"
          >
            <img
              src="/logo.png"
              alt="Slider"
              width={32}
              height={32}
              className={`transition-all duration-300 ${isScrolled ? 'w-6 h-6' : 'w-8 h-8'}`}
            />
            <span className={`font-bold text-white transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
              Slider
            </span>
          </Link>

          {/* Desktop Navigation Links - Absolutely centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-stone-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Auth Buttons / Profile */}
          <div className="hidden md:flex items-center gap-4 z-10">
            {loading ? (
              <div className={`rounded-full bg-stone-800 animate-pulse transition-all duration-300 ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`} />
            ) : user ? (
              <Link
                href="/profile"
                className={`rounded-full bg-burnt-orange flex items-center justify-center text-white font-semibold hover:bg-burnt-orange-hover transition-all duration-300 ${isScrolled ? 'w-8 h-8 text-sm' : 'w-10 h-10'}`}
                title="View profile"
              >
                {getUserInitials()}
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-stone-300 hover:text-white transition-colors duration-200"
                >
                  Sign in
                </Link>
                <Link href="/signup">
                  <Button variant="primary" size="default">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2 text-stone-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {!mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        user={user}
      />
    </header>
  )
}
