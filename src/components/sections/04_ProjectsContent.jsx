import { Globe } from "lucide-react";
import { projectCards } from "../../data/Data";

function hasActiveLink(href) {
  if (!href) return false;

  return !href.includes("yourname") && !href.includes("your-project-demo.com");
}

function ProjectsContent() {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {projectCards.map((project) =>
        (() => {
          const hasGithubLink = hasActiveLink(project.githubHref);
          const hasDemoLink = hasActiveLink(project.demoHref);

          return (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-(--line) bg-white/75 p-4 shadow-[0_16px_28px_rgba(120,92,54,0.08)]"
            >
              <div className="h-60 overflow-hidden rounded-[1.4rem] border border-(--line) bg-[#f4ead7] xl:h-64">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-[1.4rem] font-semibold leading-8 text-(--ink)">
                  {project.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-8 text-(--muted)">
                  {project.description}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-(--line) bg-[#fff8ed] px-3 py-1 text-[0.85rem] text-(--accent)"
                  >
                    {tag}
                  </span>
                ))}

                <div className="ml-auto flex items-center gap-2">
                  {hasGithubLink ? (
                    <a
                      href={project.githubHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-(--line) bg-[#fff8ed] text-(--accent) transition hover:border-[#8ec5ff] hover:bg-[#eef7ff] hover:text-[#3f82c7]"
                    >
                      <img
                        src="/github-alt-svgrepo-com.svg"
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 sepia saturate-[0.55] hue-rotate-[338deg] brightness-[0.55]"
                      />
                    </a>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border border-[#ddd4c6] bg-[#f1ece4] opacity-50"
                    >
                      <img
                        src="/github-alt-svgrepo-com.svg"
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 opacity-55 grayscale"
                      />
                    </span>
                  )}

                  {hasDemoLink ? (
                    <a
                      href={project.demoHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} Live demo`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-(--line) bg-[#fff8ed] text-(--accent) transition hover:border-[#8ec5ff] hover:bg-[#eef7ff] hover:text-[#3f82c7]"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border border-[#ddd4c6] bg-[#f1ece4] text-[#a99d8d] opacity-50"
                    >
                      <Globe className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })(),
      )}
    </div>
  );
}

export default ProjectsContent;
