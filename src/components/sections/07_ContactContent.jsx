import { Mail, MapPin, Phone, Printer } from "lucide-react";

const contactCards = [
  {
    title: "Our Main Office",
    icon: MapPin,
    lines: ["Bangkok, Thailand", "Open to remote collaboration"],
  },
  {
    title: "Phone Number",
    icon: Phone,
    lines: ["+66 92-000-0000", "Available on weekdays"],
  },
  {
    title: "Fax",
    icon: Printer,
    lines: ["Project briefs welcome", "Share docs before we talk"],
  },
  {
    title: "Email",
    icon: Mail,
    lines: ["youremail@email.com", "Best for project inquiries"],
    href: "mailto:youremail@email.com",
  },
];

function ContactContent() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.35fr]">
      <div className="grid gap-4 sm:grid-cols-2 xl:pt-8">
        {contactCards.map((card) => {
          const CardIcon = card.icon;

          return card.href ? (
            <a
              key={card.title}
              href={card.href}
              className="group rounded-[1.7rem] border border-(--line) bg-[linear-gradient(180deg,rgba(255,252,246,0.98),rgba(250,242,229,0.92))] p-6 text-center shadow-[0_16px_28px_rgba(120,92,54,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ec5ff] hover:bg-[#f9f0de]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d5c3a5] bg-[#f5ebd8] text-[#98a16d] transition-colors duration-300 group-hover:border-[#8ec5ff] group-hover:text-[#6ea9da]">
                <CardIcon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#4f3b27]">
                {card.title}
              </h3>
              <div className="mt-4 space-y-1.5 text-[0.98rem] leading-7 text-[#6d5843]">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </a>
          ) : (
            <div
              key={card.title}
              className="group rounded-[1.7rem] border border-(--line) bg-[linear-gradient(180deg,rgba(255,252,246,0.98),rgba(250,242,229,0.92))] p-6 text-center shadow-[0_16px_28px_rgba(120,92,54,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ec5ff] hover:bg-[#f9f0de]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d5c3a5] bg-[#f5ebd8] text-[#98a16d] transition-colors duration-300 group-hover:border-[#8ec5ff] group-hover:text-[#6ea9da]">
                <CardIcon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#4f3b27]">
                {card.title}
              </h3>
              <div className="mt-4 space-y-1.5 text-[0.98rem] leading-7 text-[#6d5843]">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-[2rem] border border-(--line) bg-[linear-gradient(180deg,rgba(236,223,198,0.76),rgba(214,195,168,0.82))] p-6 shadow-[0_20px_36px_rgba(120,92,54,0.1)] sm:p-8">
        <div className="rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(255,252,246,0.95),rgba(249,240,224,0.92))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:p-8">
          <h3 className="text-center text-3xl font-semibold text-[#4f3b27] sm:text-[2.6rem]">
            Contact Me
          </h3>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-[1rem] border border-[#d5c3a5] bg-white/88 px-4 py-3 text-[#4f3b27] outline-none transition placeholder:text-[#a58d73] focus:border-[#8ec5ff] focus:ring-2 focus:ring-[#dfeefe]"
            />
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full rounded-[1rem] border border-[#d5c3a5] bg-white/88 px-4 py-3 text-[#4f3b27] outline-none transition placeholder:text-[#a58d73] focus:border-[#8ec5ff] focus:ring-2 focus:ring-[#dfeefe]"
            />
            <textarea
              rows="6"
              placeholder="Tell me about your project, collaboration idea, or just say hello."
              className="w-full resize-none rounded-[1rem] border border-[#d5c3a5] bg-white/88 px-4 py-3 text-[#4f3b27] outline-none transition placeholder:text-[#a58d73] focus:border-[#8ec5ff] focus:ring-2 focus:ring-[#dfeefe]"
            />

            <div className="pt-2 text-center">
              <button
                type="button"
                className="rounded-[1rem] border border-[#b99f7b] bg-[#98a16d] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
