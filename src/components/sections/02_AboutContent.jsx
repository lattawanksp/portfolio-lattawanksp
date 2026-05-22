function AboutContent() {
  return (
    <div className="grid h-full gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[1.75rem] border border-(--line) bg-white/70 p-6">
        <div className="mb-5 flex flex-wrap gap-3">
          {["Story", "Study", "Experience"].map((tab, index) => (
            <span
              key={tab}
              className={`rounded-full border px-4 py-2 text-sm ${
                index === 0
                  ? "border-(--soft-green) bg-(--soft-green) text-white"
                  : "border-(--line) bg-white/80 text-(--muted)"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="space-y-4 text-(--muted)">
          <p className="leading-8">
            Hi, I am Latte. I enjoy the balance between logic and aesthetics,
            especially when a product needs to feel both neat and inviting.
          </p>
          <p className="leading-8">
            My workflow usually starts with structure first: content hierarchy,
            navigation, responsive layout, then the visual details that give the
            page personality.
          </p>
          <p className="leading-8">
            This layout is set up as a strong starting point for a personal
            site, and it is easy to expand into a richer case study portfolio
            later.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.75rem] border border-(--line) bg-[#f7ecdb]/80 p-4">
        <img
          src="/references/portfolio-reference-1.png"
          alt="Portfolio inspiration preview"
          className="h-full min-h-72 w-full rounded-[1.35rem] object-cover object-center shadow-[0_18px_30px_rgba(120,92,54,0.14)]"
        />
      </div>
    </div>
  );
}

export default AboutContent;
