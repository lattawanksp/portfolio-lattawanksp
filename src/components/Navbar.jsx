// import { Home } from "lucide-react";
import { Music4, Volume2, VolumeX, X } from "lucide-react";
import { sections } from "../data/Data";

function Navbar({
  activeSection,
  onOpenSection,
  soundEnabled,
  musicEnabled,
  onToggleSound,
  onToggleMusic,
}) {
  return (
    <header className="flex items-center justify-center gap-3 p-4 lg:justify-between">
      <nav className="flex w-full flex-wrap justify-center gap-1.5 rounded-2xl border border-[#e8d9c5] bg-[#fdf6ec] p-2 lg:flex-1 lg:justify-start lg:gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onOpenSection(section.id)}
            className={`inline-flex h-11 w-11 items-center justify-center gap-1 rounded-2xl border px-0 py-0 text-sm font-semibold uppercase tracking-[0.18em] transition lg:h-auto lg:w-auto lg:px-5 lg:py-3 ${
              section.id === "lets-play" ? "lg:ml-auto" : ""
            } ${
              section.id === activeSection
                ? "border-[#c4a882] bg-[#e8d9c5] text-[#5c4a2a]"
                : "border-[#d4c5b0] bg-[#fdf6ec] text-[#8b7355] hover:-translate-y-0.5 hover:text-[#5c4a2a]"
            }`}
            aria-label={section.label}
            title={section.label}
          >
            <section.icon className="h-4 w-4" />
            <span className="hidden lg:inline">{section.label}</span>
          </button>
        ))}
      </nav>

      <button
        type="button"
        onClick={onToggleSound}
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-[#8b7355] transition hover:-translate-y-0.5 hover:text-[#5c4a2a]"
        aria-label={soundEnabled ? "Mute click sound" : "Enable click sound"}
        title={soundEnabled ? "Mute click sound" : "Enable click sound"}
      >
        {soundEnabled ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </button>

      <button
        type="button"
        onClick={onToggleMusic}
        className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center text-[#8b7355] transition hover:-translate-y-0.5 hover:text-[#5c4a2a]"
        aria-label={musicEnabled ? "Pause background music" : "Play background music"}
        title={musicEnabled ? "Pause background music" : "Play background music"}
      >
        <Music4 className="h-5 w-5" />
        {!musicEnabled ? (
          <span className="pointer-events-none absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#fdf6ec] text-[#8b7355]">
            <X className="h-3 w-3" strokeWidth={2.4} />
          </span>
        ) : null}
      </button>

      {/* <button
        type="button"
        onClick={onReset}
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4c5b0] bg-[#fdf6ec] text-[#8b7355] transition hover:-translate-y-0.5"
        aria-label="Reset to home"
      >
        <Home className="h-5 w-5" />
      </button> */}
    </header>
  );
}

export default Navbar;
