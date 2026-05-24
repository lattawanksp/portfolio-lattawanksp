import WelcomeContent from "./sections/01_WelcomeContent";
import AboutContent from "./sections/02_AboutContent";
import StackContent from "./sections/03_StackContent";
import ProjectsContent from "./sections/04_ProjectsContent";
import CertificateContent from "./sections/06_CertificateContent";
import ContactContent from "./sections/07_ContactContent";

const sectionComponents = {
  welcome: WelcomeContent,
  about: AboutContent,
  stack: StackContent,
  projects: ProjectsContent,
  certificate: CertificateContent,
  contact: ContactContent,
};

function SectionPanel({
  section,
  onOpenSection,
  welcomeStarted,
  onStartWelcome,
}) {
  if (!section) return null;

  const ActiveComponent = sectionComponents[section.id];
  const hasHeader = section.eyebrow || section.title || section.summary;

  return (
    <div className="paper-panel relative flex min-h-[70vh] flex-col overflow-hidden p-5 sm:p-6 lg:h-full lg:min-h-0 lg:p-8">
      {hasHeader ? (
        <div className="max-w-3xl space-y-4">
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8d6b49]">
              {section.eyebrow}
            </p>
          ) : null}
          {section.title ? (
            <h2 className="text-3xl font-semibold text-[#4f3b27] sm:text-4xl">
              {section.title}
            </h2>
          ) : null}
          {section.summary ? (
            <p className="text-base leading-8 text-[#7d6751] sm:text-lg">
              {section.summary}
            </p>
          ) : null}
        </div>
      ) : null}

      <div
        className={`${hasHeader ? "mt-6 lg:mt-8" : ""} flex-1 overflow-visible lg:min-h-0 lg:overflow-y-auto lg:pr-2 panel-scroll`}
      >
        {ActiveComponent ? (
          <ActiveComponent
            onOpenSection={onOpenSection}
            welcomeStarted={welcomeStarted}
            onStartWelcome={onStartWelcome}
          />
        ) : null}
      </div>
    </div>
  );
}

export default SectionPanel;
