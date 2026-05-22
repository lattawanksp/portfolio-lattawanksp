import { projectCards } from "../../data/SectionPanelData";

function ProjectsContent() {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {projectCards.map((project, index) => (
        <article
          key={project.title}
          className="rounded-[1.75rem] border border-(--line) bg-white/75 p-4 shadow-[0_16px_28px_rgba(120,92,54,0.08)]"
        >
          <div className="overflow-hidden rounded-[1.4rem] border border-(--line) bg-[#f4ead7]">
            <img
              src={
                index === 1
                  ? "/references/portfolio-reference-1.png"
                  : "/references/portfolio-reference-2.png"
              }
              alt={project.title}
              className="h-44 w-full object-cover object-top"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-(--ink)">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-(--muted)">
              {project.description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-(--line) bg-[#fff8ed] px-3 py-1 text-xs text-(--accent)"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-(--soft-green) px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-95"
          >
            View project
          </button>
        </article>
      ))}
    </div>
  );
}

export default ProjectsContent;
