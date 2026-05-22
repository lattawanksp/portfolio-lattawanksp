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
    <div className="relative w-full max-w-100 min-h-120 rounded-4xl border border-[#b99f7b] bg-[#fffaf2]/96 p-8 shadow-[0_18px_30px_rgba(120,92,54,0.14)] backdrop-blur">
      <Sparkles className="absolute left-6 top-6 h-6 w-6 fill-[#efc76d] text-[#b78c3f]" />

      <div className="mb-5 flex items-center justify-center gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#4f3b27]">
          Profile
        </p>
      </div>

      <div className="flex items-start gap-5">
        <div className="shrink-0 rounded-full border-2 border-[#c7ae87]">
          <img
            src="/references/profile-img.png"
            alt="Avatar"
            className="h-28 w-28 rounded-full object-cover object-[10%_18%]"
          />
        </div>

        <div className="min-w-0 flex-1 pt-2">
          <h2 className="text-[2.2rem] font-semibold leading-none text-[#4f3b27]">
            lattawanksp
          </h2>
          <p className="mt-3 text-[1.1rem] font-medium text-[#4f3b27]">
            Full Stack Developer <br />
            <span className="text-[1.05rem]">illustrator | Animator</span>
          </p>
        </div>
      </div>

      <blockquote className="mx-auto mt-6 max-w-104 border-l border-[#e7d6bb] pl-4 text-center text-[1rem] text-[#5a4631]">
        " Turning ideas into real solutions through fast learning and
        problem-solving. I enjoy the process of building things and I am fully
        ready to work. "
      </blockquote>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <a
          href="https://github.com/lattawanksp"
          target="_blank"
          rel="noreferrer"
          className="group text-center"
        >
          <div className="relative rounded-[1.35rem] border border-[#b99f7b] bg-white/90 px-4 pb-4 pt-5 transition group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_20px_rgba(120,92,54,0.12)]">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78b67] bg-[#c9ab7d]" />
            <span
              className="mx-auto block h-9 w-9"
              style={iconMaskStyle("/github-alt-svgrepo-com.svg")}
            />
          </div>
          <p className="mt-3 text-[1rem] font-medium text-[#4f3b27]">GitHub</p>
        </a>

        <a
          href="https://www.linkedin.com/in/lattawan-ksp/"
          target="_blank"
          rel="noreferrer"
          className="group text-center"
        >
          <div className="relative rounded-[1.35rem] border border-[#b99f7b] bg-white/90 px-4 pb-4 pt-5 transition group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_20px_rgba(120,92,54,0.12)]">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78b67] bg-[#c9ab7d]" />
            <span
              className="mx-auto block h-9 w-9"
              style={iconMaskStyle("/linkedin-logo-svgrepo-com.svg")}
            />
          </div>
          <p className="mt-3 text-[1rem] font-medium text-[#4f3b27]">
            LinkedIn
          </p>
        </a>

        <a
          href="/files/lattawan-kasempitakpong-cv.pdf"
          download
          className="group text-center"
        >
          <div className="relative rounded-[1.35rem] border border-[#b99f7b] bg-white/90 px-4 pb-4 pt-5 transition group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_20px_rgba(120,92,54,0.12)]">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78b67] bg-[#c9ab7d]" />
            <FileText className="mx-auto h-9 w-9 text-[#4f3b27]" />
          </div>
          <p className="mt-3 text-[1rem] font-medium text-[#4f3b27]">Resume</p>
        </a>
      </div>
    </div>
  );
}

export default ProfilePreviewCard;
