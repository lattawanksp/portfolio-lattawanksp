import { FileText, Sparkles } from "lucide-react";

const iconMaskStyle = (iconPath) => ({
  backgroundColor: "#4f3b27",
  maskImage: `url(${iconPath})`,
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskSize: "contain",
  WebkitMaskImage: `url(${iconPath})`,
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  WebkitMaskSize: "contain",
});

function ProfilePreviewCard() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-4xl border border-[#b99f7b] bg-[#fffaf2]/96 p-4 shadow-[0_18px_30px_rgba(120,92,54,0.14)] backdrop-blur sm:p-5 lg:p-6">
      <Sparkles className="absolute left-4 top-4 h-5 w-5 fill-[#efc76d] text-[#b78c3f] sm:left-5 sm:top-5 sm:h-6 sm:w-6" />

      <div className="mb-4 flex items-center justify-center gap-2 sm:mb-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#4f3b27] sm:text-sm sm:tracking-[0.26em]">
          Profile
        </p>
      </div>

      <div className="flex min-w-0 flex-col items-center gap-4 text-center">
        <div className="shrink-0 rounded-full border-2 border-[#c7ae87]">
          <img
            src="/references/profile-img.png"
            alt="Avatar"
            className="h-20 w-20 rounded-full object-cover object-[10%_18%] sm:h-24 sm:w-24 lg:h-28 lg:w-28"
          />
        </div>

        <div className="min-w-0 w-full">
          <h2 className="wrap-break-words text-center text-[1.35rem] font-semibold leading-tight text-[#4f3b27] sm:text-[1.55rem] lg:text-[1.8rem]">
            lattawanksp
          </h2>
          <p className="mt-2 break-words text-center text-[1.2rem] font-bold leading-6 text-[#4f3b27] sm:text-[1.1rem] lg:text-[1.2rem]">
            {" "}
            Junior Software Developer
            <br />
            <span className="text-[0.82rem] sm:text-[0.88rem] lg:text-[0.95rem] text-[#b99f7b]">
              illustrator
            </span>
            <span className="mx-2 text-[#b99f7b]">|</span>
            <span className="text-[0.82rem] sm:text-[0.88rem] lg:text-[0.95rem] text-[#b99f7b]">
              Animator
            </span>
          </p>
        </div>
      </div>

      <blockquote className="mx-auto mt-5 max-w-full wrap-break-words border-l border-[#e7d6bb] pl-3 text-center text-[0.88rem] leading-7 text-[#5a4631] sm:mt-6 sm:pl-4 sm:text-[0.95rem]">
        " Turning ideas into real solutions. I enjoy the process of building
        things and I'm fully ready to dive in. "
      </blockquote>

      <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
        <a
          href="https://github.com/lattawanksp"
          target="_blank"
          rel="noreferrer"
          className="group text-center"
        >
          <div className="relative rounded-[1.1rem] border border-[#b99f7b] bg-white/90 px-2 pb-3 pt-4 transition group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_20px_rgba(120,92,54,0.12)] sm:rounded-[1.25rem] sm:px-3 sm:pb-4 sm:pt-5">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78b67] bg-[#c9ab7d]" />
            <span
              className="mx-auto block h-7 w-7 sm:h-8 sm:w-8"
              style={iconMaskStyle("/github-alt-svgrepo-com.svg")}
            />
          </div>
          <p className="mt-2 wrap-break-words text-[0.78rem] font-medium text-[#4f3b27] sm:text-[0.88rem]">
            GitHub
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/lattawan-ksp/"
          target="_blank"
          rel="noreferrer"
          className="group text-center"
        >
          <div className="relative rounded-[1.1rem] border border-[#b99f7b] bg-white/90 px-2 pb-3 pt-4 transition group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_20px_rgba(120,92,54,0.12)] sm:rounded-[1.25rem] sm:px-3 sm:pb-4 sm:pt-5">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78b67] bg-[#c9ab7d]" />
            <span
              className="mx-auto block h-7 w-7 sm:h-8 sm:w-8"
              style={iconMaskStyle("/linkedin-logo-svgrepo-com.svg")}
            />
          </div>
          <p className="mt-2 wrap-break-words text-[0.78rem] font-medium text-[#4f3b27] sm:text-[0.88rem]">
            LinkedIn
          </p>
        </a>

        <a
          href="/files/lattawan-kasempitakpong-cv.pdf"
          download
          className="group text-center"
        >
          <div className="relative rounded-[1.1rem] border border-[#b99f7b] bg-white/90 px-2 pb-3 pt-4 transition group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_20px_rgba(120,92,54,0.12)] sm:rounded-[1.25rem] sm:px-3 sm:pb-4 sm:pt-5">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78b67] bg-[#c9ab7d]" />
            <FileText className="mx-auto h-7 w-7 text-[#4f3b27] sm:h-8 sm:w-8" />
          </div>
          <p className="mt-2 wrap-break-words text-[0.78rem] font-medium text-[#4f3b27] sm:text-[0.88rem]">
            Resume
          </p>
        </a>
      </div>
    </div>
  );
}

export default ProfilePreviewCard;
