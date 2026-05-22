import { useMemo, useState } from "react";
import {
  siExpress,
  siFigma,
  siMongodb,
  siNodedotjs,
  siReact,
  siTailwindcss,
  siTypescript,
  siVite,
} from "simple-icons";
import { stackItems } from "../../data/SectionPanelData";

const iconMap = {
  react: siReact,
  tailwind: siTailwindcss,
  typescript: siTypescript,
  vite: siVite,
  node: siNodedotjs,
  express: siExpress,
  mongodb: siMongodb,
  figma: siFigma,
};

const categories = ["All", "Frontend", "Backend", "Design"];

function StackLogo({ icon, color }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-10 w-10 transition-transform duration-500 group-hover:scale-110"
      style={{ color }}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

function StackContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return stackItems;
    return stackItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.setProperty("--pointer-x", `${x}px`);
    card.style.setProperty("--pointer-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
  };

  const handlePointerLeave = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--pointer-x", "50%");
    card.style.setProperty("--pointer-y", "50%");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[#8d6b49]">
            Tech playground
          </p>
          <p className="mt-2 text-base leading-8 text-[#7d6751] sm:text-lg">
            Real tools from my current workflow, grouped by how I use them
            across product building.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-[#99a168] bg-[#99a168] text-white shadow-[0_12px_20px_rgba(153,161,104,0.24)]"
                    : "border-[#d8c0a0] bg-white/75 text-[#7d6751] hover:-translate-y-0.5 hover:text-[#4f3b27]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {filteredItems.map((item, index) => {
          const icon = iconMap[item.icon];

          return (
            <article
              key={item.name}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="group stack-card relative overflow-hidden rounded-3xl border border-[#d8c0a0] bg-white/80 p-5 shadow-[0_12px_24px_rgba(120,92,54,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#8ec5ff] hover:bg-[#fbf2e4] hover:shadow-[0_22px_40px_rgba(120,92,54,0.14)]"
              style={{
                animationDelay: `${index * 90}ms`,
                animation: "stackCardIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both",
                transform:
                  "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(255,255,255,0.82), transparent 30%)",
                }}
              />

              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="rounded-full border border-[#d8c0a0] bg-[#fff8ed] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8d6b49]">
                    {item.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-[#b69874]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <div className="mx-auto mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.4rem] border border-[#d8c0a0] bg-[#fff8ed] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors duration-500 group-hover:border-[#8ec5ff] group-hover:bg-[#fff2da]">
                  {icon ? (
                    <StackLogo icon={icon} color={`#${icon.hex}`} />
                  ) : null}
                </div>

                <h3 className="text-center text-xl font-semibold text-[#4f3b27]">
                  {item.name}
                </h3>
                <p className="mt-3 text-center text-sm leading-7 text-[#7d6751] sm:text-[0.96rem]">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default StackContent;
