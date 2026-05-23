const playgroundCards = [
  {
    title: "Motion Studies",
    description:
      "Small interaction experiments for hover states, staggered reveals, and playful micro-animations.",
  },
  {
    title: "UI Lab",
    description:
      "Interface ideas, alternate layouts, and design explorations that may grow into full sections later.",
  },
  {
    title: "Creative Coding",
    description:
      "A place for visual effects, scroll behavior tests, and frontend details that make the portfolio feel alive.",
  },
];

function PlaygroundContent() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        {playgroundCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.5rem] border border-[#d8c0a0] bg-[#fffaf2] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ec5ff] hover:bg-[#f9f0de] hover:shadow-[0_16px_28px_rgba(120,92,54,0.1)]"
          >
            <h3 className="text-xl font-semibold text-[#4f3b27]">
              {card.title}
            </h3>
            <p className="mt-3 text-base leading-8 text-[#7d6751]">
              {card.description}
            </p>
          </article>
        ))}
      </div>

      <div className="rounded-[1.75rem] border border-dashed border-[#c9af89] bg-white/60 p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8d6b49]">
          More experiments coming soon
        </p>
        <p className="mt-3 text-base leading-8 text-[#7d6751] sm:text-lg">
          We can use this area later for animation showcases, mini interaction
          demos, shader-like effects, or concept interfaces.
        </p>
      </div>
    </div>
  );
}

export default PlaygroundContent;
