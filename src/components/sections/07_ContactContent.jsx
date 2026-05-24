import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    title: "Location",
    icon: MapPin,
    lines: ["Chiang Mai, Thailand", "Open to remote work"],
  },
  {
    title: "Phone Number",
    icon: Phone,
    lines: ["+66 92-624-9742"],
  },
  // {
  //   title: "Facebook",
  //   icon: ,
  //   lines: ["Project briefs welcome"],
  // },
  {
    title: "Email",
    icon: Mail,
    lines: ["lattawan.ksp@gmail.com"],
    href: "mailto:lattawan.ksp@email.com",
  },
];

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  const trimmedValue = value.trim();

  if (name === "name") {
    if (!trimmedValue) return "Please enter your name.";
    return "";
  }

  if (name === "email") {
    if (!trimmedValue) return "Please enter your email address.";
    if (!emailPattern.test(trimmedValue)) return "Please enter a valid email address.";
    return "";
  }

  if (name === "message") {
    return "";
  }

  return "";
}

function ContactContent() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    setFormErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setFormErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {
      name: validateField("name", formValues.name),
      email: validateField("email", formValues.email),
      message: validateField("message", formValues.message),
    };

    setFormErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the highlighted fields before submitting.",
      });
      return;
    }

    if (!formspreeEndpoint) {
      setSubmitStatus({
        type: "error",
        message:
          "Formspree is not connected yet. Add VITE_FORMSPREE_ENDPOINT to your .env file first.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Unable to submit the form right now.");
      }

      setSubmitStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });
      setFormValues({
        name: "",
        email: "",
        message: "",
      });
      setFormErrors({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.35fr]">
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:pt-8">
        {contactCards.map((card) => {
          const CardIcon = card.icon;
          const cardClasses =
            "group flex h-full min-h-[250px] flex-col items-center justify-center rounded-[1.7rem] border border-(--line) bg-[linear-gradient(180deg,rgba(255,252,246,0.98),rgba(250,242,229,0.92))] p-6 text-center shadow-[0_16px_28px_rgba(120,92,54,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ec5ff] hover:bg-[#f9f0de]";
          const cardContent = (
            <>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d5c3a5] bg-[#f5ebd8] text-[#98a16d] transition-colors duration-300 group-hover:border-[#8ec5ff] group-hover:text-[#6ea9da]">
                <CardIcon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#4f3b27]">
                {card.title}
              </h3>
              <div className="mt-4 space-y-1.5 text-center text-[0.98rem] leading-7 text-[#6d5843]">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </>
          );

          return card.href ? (
            <a
              key={card.title}
              href={card.href}
              className={cardClasses}
            >
              {cardContent}
            </a>
          ) : (
            <div
              key={card.title}
              className={cardClasses}
            >
              {cardContent}
            </div>
          );
        })}
      </div>

      <div className="rounded-[2rem] border border-(--line) bg-[linear-gradient(180deg,rgba(236,223,198,0.76),rgba(214,195,168,0.82))] p-6 shadow-[0_20px_36px_rgba(120,92,54,0.1)] sm:p-8">
        <div className="rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(255,252,246,0.95),rgba(249,240,224,0.92))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:p-8">
          <h3 className="text-center text-3xl font-semibold text-[#4f3b27] sm:text-[2.6rem]">
            Contact Me
          </h3>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formValues.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded-[1rem] border bg-white/88 px-4 py-3 text-[#4f3b27] outline-none transition placeholder:text-[#a58d73] focus:ring-2 ${
                formErrors.name
                  ? "border-[#d16a6a] focus:border-[#d16a6a] focus:ring-[#f8d7d7]"
                  : "border-[#d5c3a5] focus:border-[#8ec5ff] focus:ring-[#dfeefe]"
              }`}
            />
            {formErrors.name ? (
              <p className="px-1 text-sm text-[#b35a5a]">{formErrors.name}</p>
            ) : null}
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formValues.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded-[1rem] border bg-white/88 px-4 py-3 text-[#4f3b27] outline-none transition placeholder:text-[#a58d73] focus:ring-2 ${
                formErrors.email
                  ? "border-[#d16a6a] focus:border-[#d16a6a] focus:ring-[#f8d7d7]"
                  : "border-[#d5c3a5] focus:border-[#8ec5ff] focus:ring-[#dfeefe]"
              }`}
            />
            {formErrors.email ? (
              <p className="px-1 text-sm text-[#b35a5a]">{formErrors.email}</p>
            ) : null}
            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project, collaboration idea, or just say hello."
              value={formValues.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full resize-none rounded-[1rem] border bg-white/88 px-4 py-3 text-[#4f3b27] outline-none transition placeholder:text-[#a58d73] focus:ring-2 ${
                formErrors.message
                  ? "border-[#d16a6a] focus:border-[#d16a6a] focus:ring-[#f8d7d7]"
                  : "border-[#d5c3a5] focus:border-[#8ec5ff] focus:ring-[#dfeefe]"
              }`}
            />
            {formErrors.message ? (
              <p className="px-1 text-sm text-[#b35a5a]">{formErrors.message}</p>
            ) : null}

            {submitStatus.message ? (
              <p
                className={`rounded-[1rem] border px-4 py-3 text-sm ${
                  submitStatus.type === "success"
                    ? "border-[#b6c596] bg-[#f3f8e8] text-[#60703d]"
                    : "border-[#e2b2b2] bg-[#fff1f1] text-[#a55757]"
                }`}
              >
                {submitStatus.message}
              </p>
            ) : null}

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-[1rem] border border-[#b99f7b] bg-[#98a16d] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-65"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
