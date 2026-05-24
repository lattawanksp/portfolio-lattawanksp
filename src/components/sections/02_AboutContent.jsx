import {
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Languages,
  Sprout,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const aboutSections = [
  {
    id: "experience",
    label: "Experience",
    entries: [
      {
        year: "Mar 2026 - Jun 2026",
        title: "Full-stack Web Development Bootcamp | Generation Thailand",
        text: "Intensive Full-stack Development bootcamp with a focus on high-demand technologies and agile methodology.",
        bullets: [
          "Mastered MERN Stack (MongoDB, Express.js, React, Node.js) and version control using Git/GitHub.",
          "Developed professional-grade web applications through Project-based Learning.",
        ],
      },
      {
        year: "Sep 2019 - Present",
        title: "Small Business Owner | ICE PALETTE",
        text: "Managed end-to-end shop operations, optimizing supply chain and inventory for 15+ rotating flavors based on sales data.",
        bullets: [
          "Designed all brand identity and digital marketing assets using Adobe Photoshop and Canva to drive social engagement.",
        ],
      },
      {
        year: "Aug 2015 - Feb 2017",
        title: "Animator | Animated Storyboard",
        text: "Produced 3D character animations for advertising and mastered software transitions (Maya to 3ds Max) to meet project requirements.",
        bullets: [],
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    entries: [
      {
        year: "2011 - 2015",
        title: "Bachelor of Science (Animation)",
        text: "College of Arts, Media and Technology, Chiang Mai University",
        bullets: [],
      },
    ],
  },
  {
    id: "soft-skill",
    label: "Soft Skill",
    points: [
      "Problem-solving with a practical, user-centered mindset.",
      "Adaptability and continuous learning across frontend, backend, and design tools.",
      "Collaboration experience shaped by Agile and Scrum teamwork.",
      "Entrepreneurial thinking from years of small business ownership.",
      "Creative direction that balances aesthetics with real-world product goals.",
    ],
  },
  {
    id: "language",
    label: "Language",
    languages: [
      { name: "Thai", level: "Native speaker" },
      { name: "English", level: "Intermediate working proficiency" },
      { name: "Japanese", level: "JLPT N3" },
    ],
  },
];

const sectionIcons = {
  experience: BriefcaseBusiness,
  education: GraduationCap,
  "soft-skill": HeartHandshake,
  language: Languages,
};

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
      duration: 0.85,
      smoothWheel: true,
      wheelMultiplier: 1.15,
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
          setActiveSection(entry.target.id);
        });
      },
      {
        root: wrapperRef.current,
        rootMargin: "-22% 0px -46% 0px",
        threshold: 0.15,
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
    window.setTimeout(() => setPoppedSection(""), 420);
    lenisRef.current?.scrollTo(sectionRefs.current[id], {
      offset: -12,
      duration: 0.65,
      immediate: false,
    });
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="mb-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-b border-[#e7d6bb] pb-4 text-center lg:hidden">
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
              className={`cursor-pointer transition-all duration-300 ${
                isActive
                  ? "scale-105 text-[#4f3b27]"
                  : "text-[#a08463] hover:-translate-y-0.5 hover:text-[#4f3b27]"
              }`}
            >
              <p className="text-base font-semibold sm:text-lg">
                {section.label}
              </p>
            </div>
          );
        })}
      </div>

      <div
        ref={wrapperRef}
        className="panel-scroll min-h-0 flex-1 overflow-y-auto pr-1 sm:pr-2"
      >
        <div
          ref={contentRef}
          className="grid gap-8 pb-8 lg:grid-cols-[14rem_minmax(0,1fr)]"
        >
          <aside className="hidden lg:block">
            <div className="sticky top-0 rounded-3xl border border-[#eadcc7] bg-white/52 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8d6b49]">
                Chapters
              </p>
              <div className="mt-6 space-y-5">
                {aboutSections.map((section, index) => {
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
                      className={`cursor-pointer border-l-2 pl-4 transition-all duration-300 ${
                        isActive
                          ? "border-[#99a168] translate-x-1 text-[#4f3b27]"
                          : "border-[#eadcc7] text-[#9e8261] hover:translate-x-1 hover:border-[#8ec5ff] hover:text-[#4f3b27]"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.24em]">
                        0{index + 1}
                      </p>
                      <p className="mt-1 text-base font-semibold leading-6">
                        {section.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="space-y-12">
            {aboutSections.map((section, index) => {
              const isActive = activeSection === section.id;
              const SectionIcon = sectionIcons[section.id];

              return (
                <div key={section.id}>
                  <section
                    id={section.id}
                    ref={(element) => {
                      sectionRefs.current[section.id] = element;
                    }}
                    className={`transition-all duration-500 ${
                      poppedSection === section.id ? "about-section-pop" : ""
                    }`}
                  >
                    <div className="max-w-2xl">
                      <div
                        className={`text-3xl font-semibold transition-colors duration-300 sm:text-[2.15rem] ${
                          isActive ? "text-[#4f3b27]" : "text-[#745d44]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {SectionIcon ? (
                            <SectionIcon className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
                          ) : null}
                          <h3>
                            {section.label === "Soft Skill"
                              ? "Soft Skill"
                              : section.label === "Language"
                                ? "Language"
                                : section.label}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {section.entries ? (
                      <div className="mt-8 space-y-12 border-l border-[#e3d3bc] pl-6 sm:pl-8">
                        {section.entries.map((entry) => (
                          <article
                            key={entry.title}
                            className="group relative transition-all duration-300"
                          >
                            <span className="absolute left-[-2.15rem] top-2 h-3.5 w-3.5 rounded-full border border-[#cfb190] bg-[#fffaf2] transition-colors duration-300 group-hover:border-[#8ec5ff] group-hover:bg-[#eef7ff]" />
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9f7f5a]">
                              {entry.year}
                            </p>
                            <h4 className="mt-2 text-xl font-semibold text-[#4f3b27] sm:text-[1.42rem]">
                              {entry.title}
                            </h4>
                            <ul className="mt-4 max-w-2xl space-y-3 text-base leading-8 text-[#7d6751] sm:text-[1.02rem]">
                              {[entry.text, ...entry.bullets].map((bullet) => (
                                <li key={bullet} className="flex gap-3">
                                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#99a168]" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </article>
                        ))}
                      </div>
                    ) : null}

                    {section.points ? (
                      <div className="mt-6 grid max-w-3xl gap-x-8 gap-y-5 sm:grid-cols-2">
                        {section.points.map((point) => (
                          <div
                            key={point}
                            className="border-b border-[#eee2d0] pb-4 text-base leading-8 text-[#7d6751] transition-all duration-300 hover:border-[#8ec5ff] hover:text-[#5d4732] sm:text-[1rem]"
                          >
                            {point}
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {section.languages ? (
                      <div className="mt-6 max-w-2xl space-y-5">
                        <div className="space-y-5">
                          {section.languages.map((language) => (
                            <div
                              key={language.name}
                              className="flex flex-col gap-2 border-b border-[#eee2d0] pb-4 transition-all duration-300 hover:border-[#8ec5ff] sm:flex-row sm:items-center sm:justify-between"
                            >
                              <span className="text-base text-[#8d6b49]">
                                {language.name}
                              </span>
                              <span className="text-base text-[#8d6b49]">
                                {language.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </section>

                  {index < aboutSections.length - 1 ? (
                    <div className="my-5 flex items-center gap-4 sm:my-6">
                      <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#d9c0a0] to-[#e8d4b8]" />
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5d4bd] bg-white/70 text-[#b09068] shadow-[0_6px_14px_rgba(154,127,92,0.06)]">
                        {index % 2 === 0 ? (
                          <Sparkles className="h-4 w-4" />
                        ) : (
                          <Sprout className="h-4 w-4" />
                        )}
                      </div>
                      <div className="h-px flex-1 bg-linear-to-r from-[#e8d4b8] via-[#d9c0a0] to-transparent" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
