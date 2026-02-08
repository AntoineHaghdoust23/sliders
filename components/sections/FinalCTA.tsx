'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState('')

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Staggered fade-in from below for CTA elements
        gsap.from(['.cta-heading', '.cta-subline', '.cta-form'], {
          autoAlpha: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        })
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(['.cta-heading', '.cta-subline', '.cta-form'], { clearProps: 'all' })
      })

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder only — no backend submission
  }

  return (
    <section
      ref={containerRef}
      id="cta"
      className="bg-burnt-orange text-white py-24 sm:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="cta-heading text-4xl sm:text-5xl font-bold mb-4">
          Ready to Build Smarter Presentations?
        </h2>

        <p className="cta-subline text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Join the waitlist and be first to experience AI-powered presentations inside PowerPoint.
        </p>

        <form onSubmit={handleSubmit} className="cta-form">
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address for waitlist"
              className="flex-1 px-5 py-3.5 rounded-button bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-base"
            />
            <Button variant="secondary" size="lg" type="button">
              Join Waitlist
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-3">
            Free during beta. No credit card required.
          </p>
        </form>
      </div>
    </section>
  )
}
