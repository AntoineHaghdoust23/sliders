export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950">
      <main className="container mx-auto px-8 py-32">
        <h1 className="text-display font-bold text-burnt-orange mb-8">
          Slider — AI Copilot for PowerPoint
        </h1>
        <p className="text-xl text-stone-300 mb-16 max-w-2xl">
          Testing design tokens and smooth scroll integration. This page demonstrates the fluid typography scale and custom color palette.
        </p>

        <div className="space-y-32">
          <section className="py-16">
            <h2 className="text-5xl font-bold text-teal mb-4">Section 1</h2>
            <p className="text-lg text-stone-400">Content to enable scrolling...</p>
          </section>

          <section className="py-16">
            <h2 className="text-4xl font-bold text-amber mb-4">Section 2</h2>
            <p className="text-lg text-stone-400">More scrollable content...</p>
          </section>

          <section className="py-16">
            <h2 className="text-3xl font-bold text-burnt-orange mb-4">Section 3</h2>
            <p className="text-lg text-stone-400">Even more content...</p>
          </section>

          <section className="py-16">
            <h2 className="text-2xl font-bold text-success mb-4">Section 4</h2>
            <p className="text-lg text-stone-400">Final section for testing scroll...</p>
          </section>

          <section className="py-16">
            <h2 className="text-xl font-bold text-stone-100 mb-4">Section 5</h2>
            <p className="text-base text-stone-500">Bottom of the page.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
