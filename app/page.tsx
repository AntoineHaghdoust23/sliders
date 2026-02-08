import Hero from '@/components/sections/Hero'
import FeatureShowcase from '@/components/sections/FeatureShowcase'
import ProductDemo from '@/components/sections/ProductDemo'
import SkillsSection from '@/components/sections/SkillsSection'
import UseCasesSection from '@/components/sections/UseCasesSection'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div>
      <Hero />

      <FeatureShowcase />

      <ProductDemo />

      <SkillsSection />

      <UseCasesSection />

      {/* CTA Section */}
      <section id="cta" className="min-h-screen flex flex-col items-center justify-center text-center bg-stone-900 text-white py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Presentations?
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams using Slider to create better decks faster.
          </p>
          <Button variant="primary" size="lg">
            Start Building Today
          </Button>
        </div>
      </section>
    </div>
  )
}
