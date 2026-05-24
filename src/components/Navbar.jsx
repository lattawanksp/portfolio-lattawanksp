// import { Home } from "lucide-react";
import { sections } from "../data/Data";

function Navbar({ activeSection, onOpenSection }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 p-4">
      <nav className="flex flex-1 flex-wrap gap-2 rounded-2xl border border-[#e8d9c5] bg-[#fdf6ec] p-2">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onOpenSection(section.id)}
            className={`inline-flex items-center gap-1 rounded-2xl border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
              section.id === "lets-play" ? "ml-auto" : ""
            } ${
              section.id === activeSection
                ? "border-[#c4a882] bg-[#e8d9c5] text-[#5c4a2a]"
                : "border-[#d4c5b0] bg-[#fdf6ec] text-[#8b7355] hover:-translate-y-0.5 hover:text-[#5c4a2a]"
            }`}
          >
            <section.icon className="h-4 w-4" />
            {section.label}
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
