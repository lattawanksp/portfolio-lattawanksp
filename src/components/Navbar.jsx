// import { Home } from "lucide-react";
import { sections } from "../data/Data";

function Navbar({ activeSection, onOpenSection }) {
  return (
    <header className="flex flex-wrap items-center justify-center gap-4 p-4 lg:justify-between">
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
