import { X } from 'lucide-react'
import ProfileContent from './sections/ProfileContent'
import AboutContent from './sections/AboutContent'
import StackContent from './sections/StackContent'
import ProjectsContent from './sections/ProjectsContent'
import ContactContent from './sections/ContactContent'

const sectionComponents = {
  profile: ProfileContent,
  about: AboutContent,
  stack: StackContent,
  projects: ProjectsContent,
  contact: ContactContent,
}

function SectionPanel({ section, onClose }) {
  if (!section) {
    return null
  }

  const ActiveComponent = sectionComponents[section.id]

  return (
    <div className="paper-panel relative flex h-full min-h-[28rem] flex-col p-6 sm:p-8">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b99f7b] bg-white/90 text-[#7d6751] transition hover:-translate-y-0.5 hover:text-[#4f3b27]"
        aria-label="Close panel"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="max-w-3xl space-y-4 pr-14">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8d6b49]">{section.eyebrow}</p>
        <h2 className="text-3xl font-semibold text-[#4f3b27] sm:text-4xl">{section.title}</h2>
        <p className="text-base leading-8 text-[#7d6751] sm:text-lg">{section.summary}</p>
      </div>

      <div className="mt-8 flex-1">{ActiveComponent ? <ActiveComponent /> : null}</div>
    </div>
  )
}

export default SectionPanel
