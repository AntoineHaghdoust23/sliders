'use client'
import { useState, useEffect } from 'react'
import { useLenis } from '@/hooks/useLenis'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Set initial state
    handleScroll()

    // Listen for scroll with passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    lenis?.scrollTo(0)
  }

  const scrollToSection = (target: string) => {
    lenis?.scrollTo(target)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="font-bold text-xl text-white hover:opacity-80 transition-opacity"
          >
            Slider
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8">
              <li>
                <button
                  onClick={() => scrollToSection('#features')}
                  className="text-stone-300 hover:text-white transition-colors duration-200"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#demo')}
                  className="text-stone-300 hover:text-white transition-colors duration-200"
                >
                  Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#skills')}
                  className="text-stone-300 hover:text-white transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#use-cases')}
                  className="text-stone-300 hover:text-white transition-colors duration-200"
                >
                  Use Cases
                </button>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="default">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden">
            {/* Placeholder for mobile menu toggle - Plan 03 will add hamburger button here */}
          </div>
        </div>
      </div>
    </header>
  )
}
