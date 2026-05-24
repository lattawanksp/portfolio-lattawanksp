import { Globe } from "lucide-react";

function hasActiveLink(href) {
  if (!href) return false;

  return !href.includes("yourname") && !href.includes("your-project-demo.com");
}

function normalizePublicPath(path) {
  if (!path) return "";
  if (path.startsWith("/public/")) return path.replace("/public", "");

  return path;
}

function ShowcaseCard({ item, placeholder = false }) {
  const title = item?.title ?? "Project Title";
  const description =
    item?.description ??
    "Add a short description here later to explain the project clearly.";
  const tags = item?.tags?.length ? item.tags : ["HTML", "CSS", "JavaScript"];
  const imageSrc = normalizePublicPath(item?.imageSrc);
  const hasGithubLink = hasActiveLink(item?.githubHref);
  const hasDemoLink = hasActiveLink(item?.demoHref);

  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-(--line) bg-white/75 p-4 shadow-[0_16px_28px_rgba(120,92,54,0.08)]">
      <div className="overflow-hidden rounded-[1.45rem] border border-(--line) bg-[#f7efdf]">
        {placeholder || !imageSrc ? (
          <div className="flex min-h-65 items-center justify-center bg-[linear-gradient(135deg,#e8dcc8,#f8f0e3)] p-5">
            <div className="w-full space-y-4">
              <div className="h-7 w-2/3 rounded-full bg-white/70" />
              <div className="h-32 rounded-[1.1rem] bg-white/55" />
              <div className="h-5 w-1/2 rounded-full bg-white/60" />
            </div>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="h-full min-h-65 w-full object-cover object-top"
          />
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-[1.4rem] font-semibold leading-8 text-(--ink)">
          {title}
        </h3>
        <p className="mt-2 text-[1rem] leading-8 text-(--muted)">
          {description}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
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
              href={item.githubHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-(--line) bg-[#fff8ed] transition hover:border-[#8ec5ff] hover:bg-[#eef7ff]"
            >
              <img
                src="/github-alt-svgrepo-com.svg"
                alt=""
                aria-hidden="true"
                className="h-4 w-4 sepia saturate-[0.55] hue-rotate-388 brightness-[0.55]"
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
              href={item.demoHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} Live demo`}
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
}

export default ShowcaseCard;
