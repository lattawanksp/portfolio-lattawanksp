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

      <div className="px-1 text-xs uppercase tracking-[0.2em] text-[#8d6b49]">
        lattawanksp@2026
      </div>
    </footer>
  );
}

export default FooterBar;
