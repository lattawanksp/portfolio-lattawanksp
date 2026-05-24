const certificateItems = [
  {
    title: "Full-stack Web Development Bootcamp",
    issuer: "Generation Thailand",
    note: "Use this area for certificate image, PDF link, or short achievement notes.",
  },
  {
    title: "Workshop / Short Course",
    issuer: "Add issuer name here",
    note: "A second slot for workshops, online learning, or platform-based certificates.",
  },
  {
    title: "Future Certificate",
    issuer: "Coming soon",
    note: "Keep this card as a placeholder for future credentials and milestones.",
  },
];

function CertificateContent() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {certificateItems.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-[#d8c0a0] bg-[#fffaf2] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ec5ff] hover:bg-[#f9f0de] hover:shadow-[0_16px_28px_rgba(120,92,54,0.1)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8d6b49]">
              {item.issuer}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[#4f3b27]">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-8 text-[#7d6751]">
              {item.note}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default CertificateContent;
