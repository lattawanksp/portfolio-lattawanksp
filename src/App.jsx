import { startTransition, useState } from "react";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import SectionPanel from "./components/SectionPanel";
import FooterBar from "./components/FooterBar";
import { sections } from "./data/SectionPanelData";

function App() {
  const [activeSection, setActiveSection] = useState("welcome");
  const [welcomeStarted, setWelcomeStarted] = useState(false);

  const currentSection =
    sections.find((section) => section.id === activeSection) ?? null;

  const openSection = (sectionId) =>
    startTransition(() => setActiveSection(sectionId));
  const resetSection = () => setActiveSection(null);

  return (
    <main className="relative h-screen overflow-hidden px-4 py-4 text-stone-700 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/references/bg-img.png')] bg-cover bg-center bg-no-repeat" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(189,171,120,0.18),transparent_20%),rgba(252,246,236,0.48)]" />

      <div className="mx-auto relative grid h-[calc(100vh-2rem)] max-w-auto gap-6 lg:grid-cols-[20%_80%]">
        <LeftSidebar />

        <section className="flex min-h-0 flex-col gap-5 overflow-hidden pr-5 sm:pr-6">
          <Navbar
            activeSection={activeSection}
            onOpenSection={openSection}
            onReset={resetSection}
          />

          <div className="min-h-0 flex-1">
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
