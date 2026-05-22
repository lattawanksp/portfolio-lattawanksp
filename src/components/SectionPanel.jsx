import WelcomeContent from "./sections/01_WelcomContent";
import AboutContent from "./sections/02_AboutContent";
import StackContent from "./sections/03_StackContent";
import ProjectsContent from "./sections/04_ProjectsContent";
import ContactContent from "./sections/05_ContactContent";

const sectionComponents = {
  welcome: WelcomeContent,
  about: AboutContent,
  stack: StackContent,
  projects: ProjectsContent,
  contact: ContactContent,
};

function SectionPanel({ section }) {
  if (!section) return null;

  const ActiveComponent = sectionComponents[section.id];

  return (
    <div className="paper-panel relative flex h-full min-h-112 flex-col p-6 sm:p-8">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8d6b49]">
          {section.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-[#4f3b27] sm:text-4xl">
          {section.title}
        </h2>
        <p className="text-base leading-8 text-[#7d6751] sm:text-lg">
          {section.summary}
        </p>
      </div>

      <div className="mt-8 flex-1">
        {ActiveComponent ? <ActiveComponent /> : WelcomeContent}
      </div>
    </div>
  );
}

export default SectionPanel;
