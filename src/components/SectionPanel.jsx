import WelcomeContent from "./sections/01_WelcomeContent";
import AboutContent from "./sections/02_AboutContent";
import StackContent from "./sections/03_StackContent";
import ProjectsContent from "./sections/04_ProjectsContent";
import CertificateContent from "./sections/06_CertificateContent";
import ContactContent from "./sections/07_ContactContent";
import LetsPlayContent from "./sections/08_LetsPlayContent";

const sectionComponents = {
  welcome: WelcomeContent,
  about: AboutContent,
  stack: StackContent,
  projects: ProjectsContent,
  certificate: CertificateContent,
  contact: ContactContent,
  "lets-play": LetsPlayContent,
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
  const isLetsPlay = section.id === "lets-play";

  return (
    <div className="paper-panel relative flex min-h-[70vh] flex-col overflow-hidden p-5 sm:p-6 lg:h-full lg:min-h-0 lg:p-8">
      {hasHeader ? (
        <div
          className={`max-w-3xl ${isLetsPlay ? "space-y-2.5" : "space-y-4"}`}
        >
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8d6b49]">
              {section.eyebrow}
            </p>
          ) : null}
          {section.title ? (
            <h2
              className={`font-semibold text-[#4f3b27] ${isLetsPlay ? "text-[2.3rem] sm:text-[2.65rem]" : "text-3xl sm:text-4xl"}`}
            >
              {section.title}
            </h2>
          ) : null}
          {section.summary ? (
            <p
              className={`text-[#7d6751] ${isLetsPlay ? "max-w-2xl text-[0.98rem] leading-7 sm:text-base" : "text-base leading-8 sm:text-lg"}`}
            >
              {section.summary}
            </p>
          ) : null}
        </div>
      ) : null}

      <div
        className={`${hasHeader ? (isLetsPlay ? "mt-4 lg:mt-5" : "mt-6 lg:mt-8") : ""} flex-1 overflow-visible lg:min-h-0 lg:overflow-y-auto lg:pr-2 panel-scroll`}
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
