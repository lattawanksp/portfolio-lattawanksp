import { startTransition, useState } from 'react'
import LeftSidebar from './components/LeftSidebar'
import Navbar from './components/Navbar'
import SectionPanel from './components/SectionPanel'
import FooterBar from './components/FooterBar'
import { sections } from './data/portfolioData'

function App() {
  const [activeSection, setActiveSection] = useState(null)

  const currentSection = sections.find((section) => section.id === activeSection) ?? null

  const openSection = (sectionId) => {
    startTransition(() => {
      setActiveSection(sectionId)
    })
  }

  const resetSection = () => {
    setActiveSection(null)
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-4 text-stone-700 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(189,171,120,0.14),transparent_20%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-2rem)] max-w-550 gap-6 lg:grid-cols-[20%_80%]">
        <LeftSidebar />

        <section className="flex min-h-0 flex-col gap-5">
          <Navbar activeSection={activeSection} onOpenSection={openSection} onReset={resetSection} />

          <div className="min-h-0 flex-1">
            <SectionPanel section={currentSection} onClose={resetSection} />
          </div>

          <FooterBar />
        </section>
      </div>
    </main>
  )
}

export default App
