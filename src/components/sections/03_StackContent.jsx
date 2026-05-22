import { useEffect, useMemo, useRef, useState } from "react";
import {
  AppWindow,
  Database,
  LayoutTemplate,
  PenTool,
  ServerCog,
  SwatchBook,
} from "lucide-react";
import {
  siCss,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siReact,
  siTailwindcss,
  siVercel,
  siVscodium,
} from "simple-icons";

const ITEM_WIDTH = 92;
const ITEM_HEIGHT = 104;
const ITEM_GAP = 18;

const stackGroups = [
  {
    id: "programming",
    title: "Programming",
    icon: AppWindow,
    items: [
      { id: "javascript", label: "JavaScript", icon: siJavascript, color: "#F7DF1E" },
      { id: "html5", label: "HTML5", icon: siHtml5, color: "#E34F26" },
      { id: "css3", label: "CSS3", icon: siCss, color: "#1572B6" },
      { id: "sql", label: "SQL", icon: Database, color: "#3B82F6", isLucide: true },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: LayoutTemplate,
    items: [
      { id: "tailwindcss", label: "Tailwind CSS", icon: siTailwindcss, color: "#06B6D4" },
      { id: "react", label: "React", icon: siReact, color: "#61DAFB" },
      { id: "responsive-design", label: "Responsive", icon: LayoutTemplate, color: "#8B5CF6", isLucide: true },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: ServerCog,
    items: [
      { id: "nodejs", label: "Node.js", icon: siNodedotjs, color: "#5FA04E" },
      { id: "express", label: "Express", icon: siExpress, color: "#1f1f1f" },
      { id: "restful-apis", label: "RESTful APIs", icon: ServerCog, color: "#0F766E", isLucide: true },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    items: [
      { id: "mongodb", label: "MongoDB", icon: siMongodb, color: "#47A248" },
      { id: "postgresql", label: "PostgreSQL", icon: siPostgresql, color: "#4169E1" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: SwatchBook,
    items: [
      { id: "git", label: "Git", icon: siGit, color: "#F05032" },
      { id: "github", label: "GitHub", icon: siGithub, color: "#181717" },
      { id: "vscode", label: "VS Code", icon: siVscodium, color: "#2F80ED" },
      { id: "vercel", label: "Vercel", icon: siVercel, color: "#000000" },
    ],
  },
  {
    id: "design-productivity",
    title: "Design & Productivity",
    icon: SwatchBook,
    items: [
      { id: "figma", label: "Figma", icon: siFigma, color: "#F24E1E" },
      { id: "adobe", label: "Adobe", icon: PenTool, color: "#E11D48", isLucide: true },
    ],
  },
];

function createInitialPositions() {
  const initialPositions = {};

  stackGroups.forEach((group) => {
    group.items.forEach((item, index) => {
      const column = index % 2;
      const row = Math.floor(index / 2);

      initialPositions[item.id] = {
        x: 18 + column * (ITEM_WIDTH + ITEM_GAP),
        y: 18 + row * (ITEM_HEIGHT + ITEM_GAP),
      };
    });
  });

  return initialPositions;
}

function DesktopLogo({ icon, color, isLucide = false }) {
  if (isLucide) {
    const LucideIcon = icon;

    return (
      <LucideIcon
        className="h-11 w-11 drop-shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
        style={{ color }}
        strokeWidth={1.8}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-11 w-11 drop-shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
      style={{ color }}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

function StackContent() {
  const boxRefs = useRef({});
  const dragStateRef = useRef(null);
  const [positions, setPositions] = useState(() => createInitialPositions());
  const [isDragging, setIsDragging] = useState(false);

  const itemGroupMap = useMemo(() => {
    const map = {};

    stackGroups.forEach((group) => {
      group.items.forEach((item) => {
        map[item.id] = group.id;
      });
    });

    return map;
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const dragState = dragStateRef.current;
      if (!dragState) return;

      const { itemId, groupId, offsetX, offsetY } = dragState;
      const box = boxRefs.current[groupId];
      if (!box) return;

      const bounds = box.getBoundingClientRect();
      const nextX = event.clientX - bounds.left - offsetX;
      const nextY = event.clientY - bounds.top - offsetY;
      const maxX = Math.max(0, bounds.width - ITEM_WIDTH);
      const maxY = Math.max(0, bounds.height - ITEM_HEIGHT);

      setPositions((current) => ({
        ...current,
        [itemId]: {
          x: Math.min(Math.max(0, nextX), maxX),
          y: Math.min(Math.max(0, nextY), maxY),
        },
      }));
    };

    const handlePointerUp = () => {
      dragStateRef.current = null;
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("stack-dragging", isDragging);

    return () => {
      document.body.classList.remove("stack-dragging");
    };
  }, [isDragging]);

  const startDrag = (event, itemId) => {
    const groupId = itemGroupMap[itemId];
    const box = boxRefs.current[groupId];
    if (!box) return;

    const bounds = box.getBoundingClientRect();
    const currentPosition = positions[itemId];
    const offsetX = event.clientX - bounds.left - currentPosition.x;
    const offsetY = event.clientY - bounds.top - currentPosition.y;

    dragStateRef.current = {
      itemId,
      groupId,
      offsetX,
      offsetY,
    };
    setIsDragging(true);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[1.75rem] border border-[#d8c0a0] bg-white/72 p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8d6b49]">
          Desktop Stack Board
        </p>
        <p className="mt-3 text-base leading-8 text-[#7d6751] sm:text-lg">
          Drag the icons around inside each category window. Every tool stays
          inside its own workspace, like a mini desktop for the way I build and
          design.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {stackGroups.map((group, groupIndex) => {
          const GroupIcon = group.icon;

          return (
            <section
              key={group.id}
              className="stack-window rounded-[1.8rem] border border-[#d8c0a0] bg-white/80 p-4 shadow-[0_14px_28px_rgba(120,92,54,0.08)] transition-all duration-300 hover:border-[#8ec5ff] hover:bg-[#fbf2e4]"
              style={{
                animation: "stackCardIn 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) both",
                animationDelay: `${groupIndex * 70}ms`,
              }}
            >
              <div className="mb-3 flex items-center gap-3 border-b border-[#ead7bc] pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d8c0a0] bg-[#fff7ea] text-[#8d6b49]">
                  <GroupIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#4f3b27]">
                    {group.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#a38762]">
                    drag inside the box
                  </p>
                </div>
              </div>

              <div
                ref={(element) => {
                  boxRefs.current[group.id] = element;
                }}
                className="relative h-[17rem] overflow-hidden rounded-[1.4rem] border border-[#e4d1b4] bg-[linear-gradient(180deg,rgba(255,251,244,0.95),rgba(247,236,220,0.82))]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(196,168,130,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(196,168,130,0.08)_1px,transparent_1px)] bg-[size:38px_38px]" />

                {group.items.map((item) => {
                  const position = positions[item.id];

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onPointerDown={(event) => startDrag(event, item.id)}
                      className="group absolute flex cursor-grab touch-none flex-col items-center rounded-2xl border border-transparent px-2 py-2 text-center transition-all duration-200 hover:border-[#8ec5ff] hover:bg-white/60 active:cursor-grabbing"
                      style={{
                        width: `${ITEM_WIDTH}px`,
                        minHeight: `${ITEM_HEIGHT}px`,
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                      }}
                    >
                      <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-[#dfc8a8] bg-white/80 shadow-[0_8px_16px_rgba(120,92,54,0.08)] transition-all duration-200 group-hover:border-[#8ec5ff] group-hover:bg-[#fff3df]">
                        <DesktopLogo
                          icon={item.icon}
                          color={item.color}
                          isLucide={item.isLucide}
                        />
                      </div>
                      <span className="text-sm font-medium leading-5 text-[#5b472f]">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default StackContent;
