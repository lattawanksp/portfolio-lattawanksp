import {
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import SectionPanel from "./components/SectionPanel";
import FooterBar from "./components/FooterBar";
import { sections } from "./data/Data";

function App() {
  const [activeSection, setActiveSection] = useState("welcome");
  const [welcomeStarted, setWelcomeStarted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const mainRef = useRef(null);
  const audioContextRef = useRef(null);

  const currentSection =
    sections.find((section) => section.id === activeSection) ?? null;

  const openSection = (sectionId) =>
    startTransition(() => setActiveSection(sectionId));

  const playClickSound = useCallback(() => {
    if (!soundEnabled || typeof window === "undefined") return;

    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextClass();
    }

    const context = audioContextRef.current;
    if (context.state === "suspended") {
      context.resume().catch(() => {});
    }

    const now = context.currentTime;
    const bufferSize = Math.floor(context.sampleRate * 0.035);
    const noiseBuffer = context.createBuffer(1, bufferSize, context.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);

    for (let index = 0; index < bufferSize; index += 1) {
      noiseData[index] = (Math.random() * 2 - 1) * (1 - index / bufferSize);
    }

    const noiseSource = context.createBufferSource();
    const noiseFilter = context.createBiquadFilter();
    const noiseGain = context.createGain();
    const bodyOscillator = context.createOscillator();
    const bodyGain = context.createGain();

    noiseSource.buffer = noiseBuffer;

    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(2800, now);
    noiseFilter.Q.setValueAtTime(1.1, now);

    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.12, now + 0.003);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

    bodyOscillator.type = "triangle";
    bodyOscillator.frequency.setValueAtTime(180, now);
    bodyOscillator.frequency.exponentialRampToValueAtTime(120, now + 0.04);

    bodyGain.gain.setValueAtTime(0.0001, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.045, now + 0.002);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(context.destination);

    bodyOscillator.connect(bodyGain);
    bodyGain.connect(context.destination);

    noiseSource.start(now);
    noiseSource.stop(now + 0.035);
    bodyOscillator.start(now);
    bodyOscillator.stop(now + 0.05);
  }, [soundEnabled]);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return undefined;

    const handleClickSound = (event) => {
      if (!soundEnabled) return;

      const control = event.target.closest("button, a");
      if (!control) return;

      const isDisabled =
        control.hasAttribute("disabled") ||
        control.getAttribute("aria-disabled") === "true";

      if (isDisabled) return;

      playClickSound();
    };

    main.addEventListener("click", handleClickSound);

    return () => {
      main.removeEventListener("click", handleClickSound);
    };
  }, [playClickSound, soundEnabled]);

  useEffect(
    () => () => {
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch(() => {});
      }
    },
    [],
  );

  return (
    <main
      ref={mainRef}
      className="relative h-screen overflow-x-hidden overflow-y-auto px-4 py-4 text-stone-700 sm:px-6 lg:overflow-hidden lg:px-8"
    >
      <div className="absolute inset-0 bg-[url('/references/bg-img.png')] bg-cover bg-center bg-no-repeat" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(189,171,120,0.18),transparent_20%),rgba(252,246,236,0.48)]" />

      <div className="app-shell relative mx-auto grid min-h-[calc(100vh-2rem)] gap-6 lg:h-[calc(100vh-2rem)] lg:grid-cols-[20%_80%]">
        <LeftSidebar />

        <section className="flex min-h-0 flex-col gap-5 lg:overflow-hidden lg:pr-5 lg:sm:pr-6">
          <Navbar
            activeSection={activeSection}
            onOpenSection={openSection}
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled((current) => !current)}
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
