import { stackItems } from "../../data/SectionPanelData";

function StackContent() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stackItems.map((item) => (
        <div
          key={item}
          className="rounded-3xl border border-(--line) bg-white/75 p-5 text-center shadow-[0_12px_24px_rgba(120,92,54,0.08)]"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-(--line) bg-[#fff8ed] text-xl font-semibold text-(--accent)">
            {item.slice(0, 2).toUpperCase()}
          </div>
          <h3 className="text-lg font-semibold text-(--ink)">{item}</h3>
          <p className="mt-2 text-sm text-(--muted)">
            Ready to be replaced with your real stack icons or logos.
          </p>
        </div>
      ))}
    </div>
  );
}

export default StackContent;
