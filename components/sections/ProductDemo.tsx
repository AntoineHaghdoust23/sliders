'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BentoCard } from '@/components/ui/BentoCard'
import { DemoFrame } from '@/components/ui/DemoFrame'
import { demoSteps } from '@/components/sections/demoData'

gsap.registerPlugin(ScrollTrigger)

export default function ProductDemo() {
  const containerRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const walkthroughRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Get walkthrough step (first step with large gridSpan)
  const walkthroughStep = demoSteps[0]
  // Get remaining steps for bento grid
  const bentoSteps = demoSteps.slice(1)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. Heading fade-in
      gsap.from(headingRef.current, {
        autoAlpha: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      })

      // 2. Sidebar walkthrough timeline (pinned, scrub)
      const chatBubbles = containerRef.current?.querySelectorAll('.demo-chat-bubble')

      if (walkthroughRef.current && chatBubbles && chatBubbles.length > 0) {
        // Initially hide all chat bubbles
        gsap.set(chatBubbles, { autoAlpha: 0, y: 20 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: walkthroughRef.current,
            pin: true,
            scrub: 0.5,
            start: 'top 20%',
            end: () => `+=${chatBubbles.length * 80}vh`,
            invalidateOnRefresh: true,
            pinSpacing: true,
          }
        })

        // Sequentially reveal each chat bubble
        chatBubbles.forEach((bubble, index) => {
          tl.to(bubble, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
          })
          // Add spacer between bubbles
          if (index < chatBubbles.length - 1) {
            tl.to({}, { duration: 0.5 })
          }
        })
      }

      // 3. Bento card staggered reveal
      ScrollTrigger.batch('.demo-card', {
        onEnter: (elements) => {
          gsap.from(elements, {
            autoAlpha: 0,
            y: 60,
            scale: 0.95,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
          })
        },
        start: 'top 85%',
        once: true,
      })

      // 4. Parallax background shapes
      gsap.utils.toArray<HTMLElement>('.parallax-shape').forEach((shape, i) => {
        gsap.to(shape, {
          yPercent: 30 + (i * 20),
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        })
      })
    })

    mm.add("(prefers-reduced-motion: reduce)", () => {
      // Show all elements without animation
      gsap.set('.demo-card', { clearProps: 'all' })
      gsap.set('.demo-chat-bubble', { clearProps: 'all' })
    })

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="demo"
      className="bg-stone-900 text-white relative overflow-hidden"
    >
      {/* Parallax background shapes */}
      <div className="parallax-shape w-64 h-64 bg-burnt-orange/5 rounded-full blur-3xl absolute -top-32 -left-16" />
      <div className="parallax-shape w-48 h-48 bg-teal/5 rounded-full blur-3xl absolute bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        {/* Section heading */}
        <div ref={headingRef} className="demo-heading text-center mb-12 lg:mb-16">
          <p className="text-burnt-orange uppercase tracking-wide text-sm font-medium mb-3">
            See It In Action
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Watch Slider Build Your Deck
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            From opening the sidebar to final polish, see how Slider transforms your presentation workflow with AI-powered Skills.
          </p>
        </div>

        {/* Full-width pinned walkthrough */}
        <div ref={walkthroughRef} className="mb-16 lg:mb-24 will-change-transform">
          <div className="max-w-5xl mx-auto">
            <DemoFrame
              data-step="sidebar-walkthrough"
              sidebarContent={
                <div ref={sidebarRef} className="space-y-3">
                  {/* Slider branding */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-burnt-orange flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span className="text-white text-sm font-medium">Slider</span>
                  </div>

                  {/* Chat bubbles */}
                  {walkthroughStep.sidebarMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`demo-chat-bubble rounded-lg p-2.5 text-xs ${
                        msg.sender === 'user'
                          ? 'bg-stone-800 text-stone-400'
                          : 'bg-burnt-orange/20 text-burnt-orange border border-burnt-orange/30'
                      }`}
                      data-bubble-index={i}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
              }
            >
              {/* Main slide placeholder */}
              <div className="w-full h-full flex items-center justify-center p-6">
                <div className="aspect-[16/10] w-full max-w-md">
                  <div className="text-center space-y-3">
                    <div className="w-32 h-3 bg-stone-600 rounded mx-auto"></div>
                    <div className="w-48 h-2 bg-stone-700 rounded mx-auto"></div>
                    <div className="w-40 h-2 bg-stone-700 rounded mx-auto"></div>
                    <div className="mt-6 w-24 h-16 bg-stone-700 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
            </DemoFrame>
          </div>
        </div>

        {/* Bento grid of supporting cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {bentoSteps.map((step, index) => (
            <BentoCard key={step.id} gridSpan={step.gridSpan} index={index} className="demo-card">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Placeholder visual */}
                <div
                  className="aspect-[4/3] bg-stone-700/50 rounded-lg flex items-center justify-center"
                  data-step={step.id}
                >
                  <span className="text-stone-500 text-xs text-center px-4">
                    {step.placeholderLabel}
                  </span>
                </div>

                {/* Mini sidebar message preview */}
                <div className="space-y-2 pt-2">
                  {step.sidebarMessages.slice(0, 2).map((msg, i) => (
                    <div
                      key={i}
                      className={`text-xs rounded p-2 ${
                        msg.sender === 'user'
                          ? 'bg-stone-700/50 text-stone-400'
                          : 'bg-burnt-orange/10 text-burnt-orange/80'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
