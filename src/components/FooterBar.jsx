import { Sparkles } from "lucide-react";
import { profileLinks } from "../data/Data";

function FooterBar() {
  return (
    <footer className="paper-panel flex flex-col items-center justify-center gap-3 px-5 py-4 text-center text-sm text-[#7d6751] lg:flex-row lg:flex-wrap lg:justify-between lg:text-left">
      <div className="flex items-center justify-center gap-2 font-medium text-[#4f3b27] lg:justify-start">
        <Sparkles className="h-4 w-4 text-[#8d6b49]" />
        Let&apos;s connect
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start lg:gap-4">
        {profileLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 hover:text-[#4f3b27]"
          >
            <link.icon className="h-4 w-4 text-[#8d6b49]" />
            <span>
              {link.href.replace("mailto:", "").replace("https://", "")}
            </span>
          </a>
        ))}
      </div>

      <div className="px-1 text-center text-xs uppercase tracking-[0.2em] text-[#8d6b49] lg:text-left">
        lattawanksp@2026
      </div>
    </footer>
  );
}

export default FooterBar;
