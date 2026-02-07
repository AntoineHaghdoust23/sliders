import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center bg-stone-950 py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-display font-bold text-white mb-6">
            Build Better Decks with AI
          </h1>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Slider is your AI copilot for PowerPoint. Create professional presentations in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="min-h-screen bg-stone-50 text-stone-900 py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            Why Teams Choose Slider
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card theme="light" hover>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">
                AI-Powered Content
              </h3>
              <p className="text-stone-600">
                Generate compelling slide content, refine messaging, and get smart suggestions based on your presentation goals.
              </p>
            </Card>
            <Card theme="light" hover>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">
                Brand Consistency
              </h3>
              <p className="text-stone-600">
                Maintain your brand guidelines across every slide. Slider learns your style and applies it automatically.
              </p>
            </Card>
            <Card theme="light" hover>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">
                Instant Iteration
              </h3>
              <p className="text-stone-600">
                Make changes in seconds. Rearrange layouts, update themes, and refine content without manual formatting.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section id="demo" className="min-h-screen bg-stone-900 text-white py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            See Slider in Action
          </h2>
          <div className="bg-stone-800 rounded-card p-8 text-center">
            <p className="text-stone-400 text-lg">
              Interactive demo placeholder — video or animated walkthrough will go here
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-stone-100 text-stone-900 py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            AI-Powered Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card theme="light" hover>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Smart Templates
              </h3>
              <p className="text-stone-600">
                Choose from AI-curated templates that adapt to your content and brand.
              </p>
            </Card>
            <Card theme="light" hover>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Auto-Design
              </h3>
              <p className="text-stone-600">
                Let AI handle layouts, spacing, and visual hierarchy for professional results.
              </p>
            </Card>
            <Card theme="light" hover>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Content Refiner
              </h3>
              <p className="text-stone-600">
                Polish your messaging with AI suggestions for clarity and impact.
              </p>
            </Card>
            <Card theme="light" hover>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Data Visualization
              </h3>
              <p className="text-stone-600">
                Transform data into compelling charts and graphs automatically.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="min-h-screen bg-stone-950 text-white py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Built for Every Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card theme="dark" hover>
              <h3 className="text-xl font-bold text-white mb-3">
                Sales Teams
              </h3>
              <p className="text-stone-400">
                Create winning pitch decks that close deals. Customize presentations for every prospect in minutes.
              </p>
            </Card>
            <Card theme="dark" hover>
              <h3 className="text-xl font-bold text-white mb-3">
                Marketing
              </h3>
              <p className="text-stone-400">
                Build campaign decks, reports, and stakeholder presentations that showcase results.
              </p>
            </Card>
            <Card theme="dark" hover>
              <h3 className="text-xl font-bold text-white mb-3">
                Executives
              </h3>
              <p className="text-stone-400">
                Deliver board presentations and strategic updates with polish and confidence.
              </p>
            </Card>
          </div>
        </div>
      </section>

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
