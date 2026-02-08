export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand section */}
        <div className="mb-8">
          <div className="text-white font-bold text-lg">Slider</div>
          <p className="text-stone-500 text-sm mt-1">
            AI-powered presentations, inside PowerPoint.
          </p>
        </div>

        {/* Legal links */}
        <div className="flex gap-6 mb-8">
          <a
            href="/privacy"
            className="text-stone-500 hover:text-white transition-colors text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-stone-500 hover:text-white transition-colors text-sm"
          >
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <div className="text-stone-600 text-xs pt-8 border-t border-stone-800">
          © {currentYear} Slider. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
