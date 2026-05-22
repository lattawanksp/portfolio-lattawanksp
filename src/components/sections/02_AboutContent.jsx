import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const aboutSections = [
  {
    id: "experience",
    label: "Experience",
    eyebrow: "Experience",
    cards: [
      {
        title: "Small Business Owner | ICE PALETTE",
        period: "Sep 2019 - Present",
        details: [
          "Managed end-to-end shop operations and optimized the supply chain for more than 15 rotating flavors using sales data.",
          "Designed the brand identity and digital marketing assets with Adobe Photoshop and Canva to grow social engagement.",
          "Built a practical business mindset around customer needs, daily operations, and sustainable growth.",
        ],
      },
      {
        title: "Animator | Animated Storyboard",
        period: "Aug 2015 - Feb 2017",
        details: [
          "Produced 3D character animations for advertising work.",
          "Adapted quickly between Maya and 3ds Max to match project requirements and production flow.",
          "Strengthened timing, visual storytelling, and detail awareness through animation production.",
        ],
      },
      {
        title: "Selected Development Projects",
        period: "2026",
        details: [
          "Developed Make A Scoop, an in-progress e-commerce platform with React and Tailwind CSS, focusing on high-fidelity UI and scalable components.",
          "Worked on Creative Market, a marketplace concept for handcrafted arts, using Agile and Scrum planning with Figma mockups and responsive CSS layouts.",
          "Prepared system diagrams and database schemas for full React implementation and product expansion.",
        ],
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    eyebrow: "Education",
    cards: [
      {
        title: "Full-stack Web Development Bootcamp | Generation Thailand",
        period: "Mar 2026 - Jun 2026",
        details: [
          "Completed an intensive bootcamp focused on MERN stack development and agile methodology.",
          "Practiced MongoDB, Express.js, React, Node.js, and version control with Git and GitHub.",
          "Built professional-grade web applications through project-based learning.",
        ],
      },
      {
        title: "Bachelor of Science (Animation) | Chiang Mai University",
        period: "2011 - 2015",
        details: [
          "Studied at the College of Arts, Media and Technology.",
          "Built a strong base in storytelling, visual communication, and creative production.",
        ],
      },
    ],
  },
  {
    id: "soft-skill",
    label: "Soft Skill",
    eyebrow: "Soft Skill",
    items: [
      "Problem-solving with a practical and user-centered mindset.",
      "Adaptability and continuous learning across frontend, backend, and design tools.",
      "Collaboration experience through Agile and Scrum teamwork.",
      "Entrepreneurial thinking shaped by more than 7 years in small business management.",
      "Creative direction that balances aesthetics with real-world business goals.",
    ],
  },
  {
    id: "language",
    label: "Language",
    eyebrow: "Language",
    languages: [
      { name: "Thai", level: "Native speaker" },
      { name: "English", level: "Intermediate working proficiency" },
      { name: "Japanese", level: "JLPT N3" },
    ],
  },
];

function AboutContent() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const lenisRef = useRef(null);
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState("experience");
  const [poppedSection, setPoppedSection] = useState("");

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return undefined;

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.5,
      gestureOrientation: "vertical",
      orientation: "vertical",
      touchMultiplier: 1.1,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    let animationFrame = 0;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = window.requestAnimationFrame(raf);
    };

    animationFrame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const { id } = entry.target;
          setActiveSection(id);
        });
      },
      {
        root: wrapperRef.current,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0,
      },
    );

    const elements = Object.values(sectionRefs.current);
    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectSection = (id) => {
    setActiveSection(id);
    setPoppedSection(id);
    window.setTimeout(() => setPoppedSection(""), 450);
    lenisRef.current?.scrollTo(sectionRefs.current[id], {
      offset: -10,
      duration: 0.55,
      immediate: false,
    });
  };

  return (
    <div className="flex h-full min-h-0 flex-col rounded-[1.75rem] border border-(--line) bg-white/72 p-4 sm:p-6">
      <div className="mb-5 border-b border-[#e7d6bb] pb-4">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
          {aboutSections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <div
                key={section.id}
                role="button"
                tabIndex={0}
                onClick={() => handleSelectSection(section.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleSelectSection(section.id);
                  }
                }}
                className={`min-w-[8rem] cursor-pointer text-center transition-all duration-300 ${
                  isActive
                    ? "scale-105 text-[#4f3b27]"
                    : "scale-100 text-[#a08463] hover:-translate-y-0.5 hover:text-[#4f3b27]"
                }`}
              >
                <p
                  className={`text-base font-semibold transition-all duration-300 sm:text-lg ${isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-80"}`}
                >
                  {section.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        ref={wrapperRef}
        className="panel-scroll min-h-0 flex-1 overflow-y-auto pr-2 sm:pr-3"
      >
        <div ref={contentRef} className="space-y-6 pb-6">
          {aboutSections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <section
                key={section.id}
                id={section.id}
                ref={(element) => {
                  sectionRefs.current[section.id] = element;
                }}
                className={`rounded-[1.5rem] border bg-white/84 p-5 transition-all duration-500 sm:p-6 ${
                  isActive
                    ? "border-[#c7ae87] shadow-[0_18px_32px_rgba(154,127,92,0.12)]"
                    : "border-(--line)"
                } ${poppedSection === section.id ? "about-section-pop" : ""}`}
              >
                <p className="mb-4 text-base font-semibold uppercase tracking-[0.22em] text-[#8d6b49]">
                  {section.eyebrow}
                </p>

                {section.cards ? (
                  <div className="space-y-4">
                    {section.cards.map((card, index) => (
                      <article
                        key={card.title}
                        style={{ transitionDelay: `${index * 40}ms` }}
                        className="rounded-[1.25rem] border border-[#e7d6bb] bg-[#fffaf2] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ec5ff] hover:bg-[#f9f0de] hover:shadow-[0_12px_24px_rgba(120,92,54,0.08)] sm:p-5"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <h3 className="text-xl font-semibold text-[#4f3b27] sm:text-[1.35rem]">
                              {card.title}
                            </h3>
                            <p className="mt-1 text-base font-medium uppercase tracking-[0.14em] text-[#8d6b49]">
                              {card.period}
                            </p>
                          </div>
                        </div>
                        <ul className="mt-4 space-y-2 text-base leading-8 text-[#7d6751] sm:text-[1.02rem]">
                          {card.details.map((detail) => (
                            <li key={detail} className="flex gap-3">
                              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#99a168]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                ) : null}

                {section.items ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {section.items.map((item, index) => (
                      <div
                        key={item}
                        style={{ transitionDelay: `${index * 70}ms` }}
                        className="rounded-[1.25rem] border border-[#e7d6bb] bg-[#fffaf2] p-4 text-base leading-8 text-[#7d6751] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ec5ff] hover:bg-[#f9f0de] hover:shadow-[0_12px_24px_rgba(120,92,54,0.08)] sm:p-5 sm:text-[1.02rem]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.languages ? (
                  <div className="space-y-3">
                    <p className="text-base leading-8 text-[#7d6751] sm:text-[1.02rem]">
                      Thai / English / Japanese (JLPT N3)
                    </p>
                    {section.languages.map((language, index) => (
                      <div
                        key={language.name}
                        style={{ transitionDelay: `${index * 80}ms` }}
                        className="rounded-[1.25rem] border border-[#e7d6bb] bg-[#fffaf2] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ec5ff] hover:bg-[#f9f0de] hover:shadow-[0_12px_24px_rgba(120,92,54,0.08)] sm:p-5"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-lg font-semibold text-[#4f3b27] sm:text-xl">
                            {language.name}
                          </span>
                          <span className="rounded-full border border-[#d8c0a0] bg-white/80 px-3 py-1 text-base font-medium text-[#8d6b49]">
                            {language.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
