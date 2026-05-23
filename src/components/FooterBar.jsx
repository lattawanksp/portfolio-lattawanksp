import { Sparkles } from "lucide-react";
import { profileLinks } from "../data/Data";

function FooterBar() {
  return (
    <footer className="paper-panel flex flex-wrap items-center justify-between gap-4 px-5 py-4 text-sm text-[#7d6751]">
      <div className="flex items-center gap-2 font-medium text-[#4f3b27]">
        <Sparkles className="h-4 w-4 text-[#8d6b49]" />
        Let&apos;s connect
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {profileLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#4f3b27]"
          >
            <link.icon className="h-4 w-4 text-[#8d6b49]" />
            <span>
              {link.href.replace("mailto:", "").replace("https://", "")}
            </span>
          </a>
        ))}
      </div>

      <div className="rounded-full border border-[#b99f7b] bg-white/75 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#8d6b49]">
        React + Tailwind
      </div>
    </footer>
  );
}

export default FooterBar;
