import { profileLinks } from '../data/portfolioData'

function ProfilePreviewCard() {
  return (
    <div className="h-100 rounded-[1.75rem] border border-[#b99f7b] bg-[#fffaf2]/92 p-5 shadow-[0_18px_30px_rgba(120,92,54,0.14)] backdrop-blur">
      <div className="flex items-start gap-4">
        <img
          src="/references/portfolio-reference-2.png"
          alt="Avatar"
          className="h-20 w-20 rounded-[1.4rem] border border-[#b99f7b] object-cover object-[10%_18%]"
        />
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#8d6b49]">Profile</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#4f3b27]">Full Stack Developer</h2>
          <p className="mt-2 text-sm leading-7 text-[#7d6751]">
            I enjoy turning ideas into real-world interfaces with clean structure and cozy visual details.
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {profileLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.2rem] border border-[#b99f7b] bg-white/85 p-3 text-center text-xs text-[#7d6751] transition hover:-translate-y-0.5 hover:text-[#4f3b27]"
          >
            <link.icon className="mx-auto mb-2 h-4 w-4 text-[#8d6b49]" />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProfilePreviewCard
