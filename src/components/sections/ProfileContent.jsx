import { profileLinks } from '../../data/portfolioData'

function ProfileContent() {
  return (
    <div className="grid h-full gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[1.75rem] border border-[var(--line)] bg-[#fffaf2]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <div className="flex flex-wrap items-center gap-4">
          <img
            src="/references/portfolio-reference-2.png"
            alt="Portfolio character preview"
            className="h-24 w-24 rounded-[1.5rem] border border-[var(--line)] object-cover object-[8%_20%] shadow-[0_12px_24px_rgba(120,92,54,0.15)]"
          />
          <div>
            <h3 className="text-2xl font-semibold text-[var(--ink)]">Lattawan</h3>
            <p className="text-sm uppercase tracking-[0.26em] text-[var(--accent)]">Full Stack Developer</p>
          </div>
        </div>

        <div className="mt-6 space-y-4 text-[var(--muted)]">
          <p className="leading-8">
            I like building interfaces that feel friendly on first glance and dependable after repeated use. Clear structure,
            responsive behavior, and a polished visual tone matter a lot to me.
          </p>
          <p className="leading-8">
            This starter keeps the content modular, so you can replace the sample copy with your real introduction, timeline,
            and contact details quickly.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between text-sm text-[var(--muted)]">
            <span>Portfolio Progress</span>
            <span>65%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-[#e9dcc7]">
            <div className="h-full w-[65%] rounded-full bg-[var(--soft-green)]" />
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {profileLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.5rem] border border-[var(--line)] bg-white/75 p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(120,92,54,0.12)]"
          >
            <div className="mb-3 inline-flex rounded-full bg-[var(--soft-green)]/60 p-3 text-[var(--accent)]">
              <link.icon className="h-5 w-5" />
            </div>
            <h4 className="text-lg font-semibold text-[var(--ink)]">{link.label}</h4>
            <p className="mt-2 text-sm text-[var(--muted)]">{link.href.replace('mailto:', '')}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProfileContent
