'use client'
import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'lenis/dist/lenis.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Create Lenis instance with reduced motion awareness
    const lenis = new Lenis({
      lerp: prefersReducedMotion ? 1 : 0.1,
      smoothWheel: !prefersReducedMotion,
    })

    // CRITICAL 3-line bridge for Lenis + GSAP ScrollTrigger synchronization
    lenis.on('scroll', ScrollTrigger.update)

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    // Cleanup
    return () => {
      lenis.destroy()
      gsap.ticker.remove(rafCallback)
    }
  }, [])

  return <>{children}</>
}
