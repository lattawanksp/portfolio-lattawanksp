import { startTransition, useState } from "react";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import SectionPanel from "./components/SectionPanel";
import FooterBar from "./components/FooterBar";
import { sections } from "./data/Data";

function App() {
  const [activeSection, setActiveSection] = useState("welcome");
  const [welcomeStarted, setWelcomeStarted] = useState(false);

  const currentSection =
    sections.find((section) => section.id === activeSection) ?? null;

  const openSection = (sectionId) =>
    startTransition(() => setActiveSection(sectionId));

  return (
    <main className="relative h-screen overflow-x-hidden overflow-y-auto px-4 py-4 text-stone-700 sm:px-6 lg:overflow-hidden lg:px-8">
      <div className="absolute inset-0 bg-[url('/references/bg-img.png')] bg-cover bg-center bg-no-repeat" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(189,171,120,0.18),transparent_20%),rgba(252,246,236,0.48)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-2rem)] gap-6 lg:h-[calc(100vh-2rem)] lg:grid-cols-[20%_80%]">
        <LeftSidebar />

        <section className="flex min-h-0 flex-col gap-5 lg:overflow-hidden lg:pr-5 lg:sm:pr-6">
          <Navbar
            activeSection={activeSection}
            onOpenSection={openSection}
          />

          <div className="flex-1 lg:min-h-0">
            <SectionPanel
              section={currentSection}
              onOpenSection={openSection}
              welcomeStarted={welcomeStarted}
              onStartWelcome={() => setWelcomeStarted(true)}
            />
          </div>

          <FooterBar />
        </section>
      </div>
    </main>
  );
}

export default App;
