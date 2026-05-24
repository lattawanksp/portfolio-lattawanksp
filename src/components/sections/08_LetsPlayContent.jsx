import { useMemo, useState } from "react";
import { Cat, Copy, RefreshCw, Sparkles } from "lucide-react";

const avatarSets = [
  { id: "set1", label: "Robot", query: "", icon: Sparkles },
  { id: "set2", label: "Monster", query: "?set=set2", icon: RefreshCw },
  { id: "set4", label: "Cat", query: "?set=set4", icon: Cat },
];

function LetsPlayContent() {
  const [keyword, setKeyword] = useState("");
  const [activeSet, setActiveSet] = useState("set1");
  const [copied, setCopied] = useState(false);

  const currentSet =
    avatarSets.find((set) => set.id === activeSet) ?? avatarSets[0];
  const safeKeyword = keyword.trim() || "hello";

  const imageUrl = useMemo(() => {
    const encodedKeyword = encodeURIComponent(safeKeyword);

    return `https://robohash.org/${encodedKeyword}${currentSet.query}`;
  }, [currentSet.query, safeKeyword]);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="grid gap-3 lg:h-full lg:min-h-0 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="rounded-[1.45rem] border border-(--line) bg-[linear-gradient(180deg,rgba(255,252,246,0.98),rgba(249,240,224,0.92))] p-4 shadow-[0_14px_24px_rgba(120,92,54,0.08)] lg:h-full">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#d5c3a5] bg-[#f5ebd8] text-[#98a16d]">
            <Sparkles className="h-4.5 w-4.5" />
          </div>
          <div>
            <h3 className="text-[1.45rem] font-semibold leading-tight text-[#4f3b27]">
              RoboHash Generator
            </h3>
            <p className="mt-1 text-[0.86rem] leading-5 text-[#7d6751]">
              Type any word and RoboHash will always generate the same avatar
              for it.
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6b49]">
              Your text
            </span>
            <input
              type="text"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="Type anything..."
              className="mt-2 w-full rounded-[0.85rem] border border-[#d5c3a5] bg-white/88 px-4 py-2.5 text-sm text-[#4f3b27] outline-none transition placeholder:text-[#a58d73] focus:border-[#8ec5ff] focus:ring-2 focus:ring-[#dfeefe]"
            />
          </label>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6b49]">
              Avatar style
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {avatarSets.map((set) => {
                const SetIcon = set.icon;

                return (
                  <button
                    key={set.id}
                    type="button"
                    onClick={() => setActiveSet(set.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                      set.id === activeSet
                        ? "border-[#c4a882] bg-[#e8d9c5] text-[#5c4a2a]"
                        : "border-[#d4c5b0] bg-[#fdf6ec] text-[#8b7355] hover:-translate-y-0.5 hover:text-[#5c4a2a]"
                    }`}
                  >
                    <SetIcon className="h-4 w-4" />
                    {set.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[1.45rem] border border-(--line) bg-white/78 p-4 shadow-[0_14px_24px_rgba(120,92,54,0.08)] lg:h-full">
        <div className="overflow-hidden rounded-[1.25rem] border border-[#d9c8ae] bg-[linear-gradient(180deg,rgba(247,240,226,0.95),rgba(255,250,243,0.92))] p-3.5 lg:h-full">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8d6b49]">
                Live preview
              </p>
              <h3 className="mt-1 text-[1.45rem] font-semibold text-[#4f3b27]">
                {currentSet.label} Avatar
              </h3>
            </div>

            <button
              type="button"
              onClick={handleCopyUrl}
              className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-[#fff8ed] px-3 py-1.5 text-sm font-medium text-[#8d6b49] transition hover:border-[#8ec5ff] hover:bg-[#eef7ff]"
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copied!" : "Copy URL"}
            </button>
          </div>

          <div className="mt-3 flex justify-center rounded-[1.1rem] border border-[#dfcdb1] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_35%),linear-gradient(180deg,#f7efdf,#fffaf2)] p-2.5">
            <img
              src={imageUrl}
              alt={`${safeKeyword} generated avatar`}
              className="aspect-square w-fit max-w-37.5 rounded-[0.9rem] object-contain lg:max-w-41.25 xl:max-w-45"
            />
          </div>

          <div className="mt-2.5 rounded-[0.95rem] border border-[#e1d0b4] bg-white/72 px-3 py-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#8d6b49]">
              Endpoint
            </p>
            <p className="panel-scroll mt-1 overflow-x-auto whitespace-nowrap text-[0.74rem] leading-5 text-[#6b5843]">
              {imageUrl}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetsPlayContent;
