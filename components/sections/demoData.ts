export interface DemoStep {
  id: string
  title: string
  description: string
  sidebarMessages: { text: string; sender: 'user' | 'slider' }[]
  // For screenshot swap later: data-step attribute + placeholder description
  placeholderLabel: string
  // Grid span hints for bento layout
  gridSpan: 'large' | 'medium' | 'small'
}

export const demoSteps: DemoStep[] = [
  {
    id: 'open-sidebar',
    title: 'Open Slider Sidebar',
    description: 'Launch Slider directly in PowerPoint to get started. Your AI copilot appears in the sidebar, ready to help.',
    sidebarMessages: [
      { text: 'I need a sales deck', sender: 'user' },
      { text: "I'll help you build that. Which Skill should we use?", sender: 'slider' }
    ],
    placeholderLabel: 'PowerPoint with Slider sidebar open',
    gridSpan: 'large'
  },
  {
    id: 'choose-skill',
    title: 'Choose a Skill',
    description: 'Select from expert-crafted Skills designed for common presentation tasks. Each Skill knows best practices for its domain.',
    sidebarMessages: [
      { text: 'Use Sales Pitch', sender: 'user' },
      { text: "Great choice. Let me set up your deck...", sender: 'slider' }
    ],
    placeholderLabel: 'Skill selection interface',
    gridSpan: 'medium'
  },
  {
    id: 'ai-builds',
    title: 'AI Builds Your Slides',
    description: 'Watch as Slider generates professional slides in real-time. AI handles layout, content structure, and design.',
    sidebarMessages: [
      { text: 'Building slide 3 of 8...', sender: 'slider' },
      { text: 'Adding data visualization...', sender: 'slider' }
    ],
    placeholderLabel: 'Slides being generated in real-time',
    gridSpan: 'medium'
  },
  {
    id: 'review-refine',
    title: 'Review & Refine',
    description: 'Instantly apply changes across your deck. Slider updates all slides to match your feedback.',
    sidebarMessages: [
      { text: 'Make the charts bigger', sender: 'user' },
      { text: 'Done! Charts resized across all slides.', sender: 'slider' }
    ],
    placeholderLabel: 'Polished final deck',
    gridSpan: 'small'
  }
]

// Bento grid layout mapping for CSS Grid
export const bentoGridAreas = [
  { id: 'open-sidebar', colSpan: 2, rowSpan: 2 },  // large: 2x2
  { id: 'choose-skill', colSpan: 1, rowSpan: 2 },  // medium: 1x2
  { id: 'ai-builds', colSpan: 1, rowSpan: 2 },     // medium: 1x2
  { id: 'review-refine', colSpan: 1, rowSpan: 1 }  // small: 1x1
]
