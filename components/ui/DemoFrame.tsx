import { forwardRef, ReactNode } from 'react'

interface DemoFrameProps {
  children: ReactNode
  sidebarContent?: ReactNode
  className?: string
}

export const DemoFrame = forwardRef<HTMLDivElement, DemoFrameProps>(
  ({ children, sidebarContent, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        data-demo-frame
        className={`bg-stone-800 rounded-xl border border-stone-700 overflow-hidden shadow-2xl ${className}`}
      >
        {/* PowerPoint title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-stone-900/90 border-b border-stone-700">
          {/* Left side: dots + filename */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-stone-600"></div>
              <div className="w-3 h-3 rounded-full bg-stone-600"></div>
              <div className="w-3 h-3 rounded-full bg-stone-600"></div>
            </div>
            <span className="text-stone-500 text-xs ml-2">Quarterly Report.pptx</span>
          </div>

          {/* Right side: PowerPoint label */}
          <span className="text-stone-600 text-xs">PowerPoint</span>
        </div>

        {/* Content area with optional sidebar */}
        <div className="flex">
          {/* Main content area */}
          <div className="flex-1 min-h-[300px] lg:min-h-[400px] bg-[#211F1E]">
            {children}
          </div>

          {/* Sidebar (if provided) */}
          {sidebarContent && (
            <div className="w-[200px] lg:w-[240px] bg-stone-900 border-l border-stone-700 p-4 flex flex-col">
              {sidebarContent}
            </div>
          )}
        </div>
      </div>
    )
  }
)

DemoFrame.displayName = 'DemoFrame'
