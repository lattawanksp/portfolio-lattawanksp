import { profileLinks } from "../../data/Data";

function ContactContent() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[1.75rem] border border-(--line) bg-white/70 p-6">
        <h3 className="text-2xl font-semibold text-(--ink)">
          Open for freelance, internships, and team projects.
        </h3>
        <p className="mt-4 leading-8 text-(--muted)">
          Replace this block with your real availability, timezone, and a short
          note about the kinds of work you want to do next.
        </p>
      </div>

      <div className="grid gap-4">
        {profileLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-3xl border border-(--line) bg-white/80 p-5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(120,92,54,0.1)]"
          >
            <div className="rounded-full bg-(--soft-green)/60 p-3 text-(--accent)">
              <link.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-(--accent)">
                {link.label}
              </p>
              <p className="mt-1 text-(--ink)">
                {link.href.replace("mailto:", "")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactContent;
