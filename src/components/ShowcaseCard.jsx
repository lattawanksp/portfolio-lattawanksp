import { Globe } from "lucide-react";

const mockupLinks = ["On campus", "Online", "For companies", "Sign in"];

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
  const brandLabel = title.split("-")[0].trim().toUpperCase();

  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-(--line) bg-white/75 p-4 shadow-[0_16px_28px_rgba(120,92,54,0.08)]">
      <div className="overflow-hidden rounded-[1.45rem] border border-(--line) bg-[#f7efdf]">
        <div className="flex items-center justify-between border-b border-[#e3d0b3] bg-white/75 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#4f3b27]" />
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#4f3b27]">
              {brandLabel}
            </p>
          </div>

          <div className="hidden items-center gap-3 text-[0.7rem] text-[#6d5640] sm:flex">
            {mockupLinks.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </div>
        </div>

        <div className="grid min-h-[220px] gap-4 bg-[#efefef]/45 p-4 lg:grid-cols-[1.55fr_1fr]">
          <div className="overflow-hidden rounded-[1.1rem] border border-[#d6c4a8] bg-[#f3ead9]">
            {placeholder || !imageSrc ? (
              <div className="flex h-full min-h-[160px] items-center justify-center bg-[linear-gradient(135deg,#e8dcc8,#f8f0e3)]">
                <div className="w-full space-y-3 px-5">
                  <div className="h-6 w-2/3 rounded-full bg-white/70" />
                  <div className="h-24 rounded-[1rem] bg-white/55" />
                  <div className="h-4 w-1/2 rounded-full bg-white/60" />
                </div>
              </div>
            ) : (
              <img
                src={imageSrc}
                alt={title}
                className="h-full min-h-[160px] w-full object-cover object-top"
              />
            )}
          </div>

          <div className="flex flex-col justify-center rounded-[1.1rem] bg-[#e9eaee] px-5 py-6">
            <h3 className="text-[1.1rem] font-semibold leading-8 text-[#4f3b27] sm:text-[1.35rem]">
              {placeholder ? "Learn something new every day" : "Project preview"}
            </h3>
            <p className="mt-3 text-[0.92rem] leading-7 text-[#6b5843]">
              {placeholder
                ? "This mock card is ready for your future content, image, and links."
                : "A quick mockup area for showing the mood and layout of the project."}
            </p>
            <div className="mt-5 h-10 rounded-md bg-[#5c5c5c] px-4 text-center text-[0.78rem] font-semibold leading-10 text-white">
              Start here
            </div>
          </div>
        </div>
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
