import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const quickLinks = [
  { id: "projects", label: "Project" },
  { id: "playground", label: "Mini project" },
  { id: "stack", label: "Tech stack" },
];

const replyMessages = [
  <>
    Hi ! Welcome to <span className="font-bold">my portfolio ✨</span>
  </>,
  <>
    My name is <span className="font-bold text-[#b87d4b]">Lin</span>, I&apos;m a{" "}
    <span className="font-bold">Junior Software Developer</span>
  </>,
  <>
    Thank you for taking the time to visit. You can navigate through the{" "}
    <span className="font-semibold decoration-[#b99f7b]">menu above ⭡</span>
  </>,
  <>
    Or start by exploring{" "}
    <span className="font-semibold decoration-[#b99f7b]">
      my project links down here ⭣
    </span>
  </>,
];

const typingDurations = [1000, 1400, 1800, 1400, 1400];

function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="inline-flex items-center gap-2 rounded-[1.9rem] rounded-bl-md bg-white px-6 py-5 shadow-[0_14px_24px_rgba(120,92,54,0.12)]">
        <span className="h-3 w-3 animate-pulse rounded-full bg-[#d8c8b0] [animation-delay:0ms]" />
        <span className="h-3 w-3 animate-pulse rounded-full bg-[#cdbb9f] [animation-delay:180ms]" />
        <span className="h-3 w-3 animate-pulse rounded-full bg-[#c2ad8f] [animation-delay:360ms]" />
      </div>
    </div>
  );
}

function ReplyBubble({ children }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[92%] rounded-[1.9rem] rounded-bl-md bg-white px-6 py-5 text-xl text-[#4f3b27] shadow-[0_14px_24px_rgba(120,92,54,0.12)]">
        {children}
      </div>
    </div>
  );
}

function LinksBubble({ onOpenSection }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[92%] rounded-[1.9rem] rounded-bl-md bg-white px-6 py-5 text-[#4f3b27] shadow-[0_14px_24px_rgba(120,92,54,0.12)]">
        <p className="mb-4 text-base font-semibold uppercase tracking-[0.18em] text-[#8d6b49]">
          Start here
        </p>
        <div className="flex flex-wrap gap-3">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onOpenSection?.(link.id)}
              className="inline-flex items-center gap-2 rounded-full border border-[#b99f7b] bg-[#fffaf2] px-5 py-3 text-base font-medium text-[#4f3b27] transition hover:-translate-y-0.5 hover:bg-[#f7ead6]"
            >
              {link.label}
              <ArrowRight className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function WelcomeContent({ onOpenSection, welcomeStarted, onStartWelcome }) {
  const [visibleReplies, setVisibleReplies] = useState(
    welcomeStarted ? replyMessages.length : 0,
  );
  const [typingStep, setTypingStep] = useState(-1);
  const [linksVisible, setLinksVisible] = useState(welcomeStarted);

  useEffect(() => {
    if (!welcomeStarted) return undefined;
    if (linksVisible) return undefined;

    let cancelled = false;
    const timers = [];

    const runSequence = () => {
      let delay = 0;

      replyMessages.forEach((_, index) => {
        timers.push(
          window.setTimeout(() => {
            if (cancelled) return;
            setTypingStep(index);
          }, delay),
        );

        delay += typingDurations[index];

        timers.push(
          window.setTimeout(() => {
            if (cancelled) return;
            setTypingStep(-1);
            setVisibleReplies(index + 1);
          }, delay),
        );

        delay += 250;
      });

      timers.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setTypingStep(replyMessages.length);
        }, delay),
      );

      delay += typingDurations[replyMessages.length];

      timers.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setTypingStep(-1);
          setLinksVisible(true);
        }, delay),
      );
    };

    runSequence();

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [welcomeStarted, linksVisible]);

  const startChat = () => {
    setVisibleReplies(0);
    setTypingStep(-1);
    setLinksVisible(false);
    onStartWelcome?.();
  };

  return (
    <div className="flex h-full min-h-112 flex-col rounded-4xl bg-[linear-gradient(180deg,rgba(171,205,255,0.24),rgba(255,255,255,0.1))] p-6 sm:p-8">
      <div className="flex-1 space-y-5 overflow-y-auto pr-2">
        {!welcomeStarted ? (
          <div className="flex h-full items-center justify-center">
            <button
              type="button"
              onClick={startChat}
              className="inline-flex items-center gap-3 rounded-full bg-[#58aef7] px-10 py-5 text-2xl font-semibold text-white shadow-[0_18px_28px_rgba(88,174,247,0.28)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              <Sparkles className="h-6 w-6" />
              Hi !
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-end">
              <div className="rounded-4xl rounded-br-md bg-[#58aef7] px-7 py-5 text-xl font-medium text-white shadow-[0_14px_24px_rgba(88,174,247,0.28)]">
                Hi !
              </div>
            </div>

            {visibleReplies >= 1 ? (
              <ReplyBubble>{replyMessages[0]}</ReplyBubble>
            ) : null}
            {typingStep === 0 ? <TypingBubble /> : null}

            {visibleReplies >= 2 ? (
              <ReplyBubble>{replyMessages[1]}</ReplyBubble>
            ) : null}
            {typingStep === 1 ? <TypingBubble /> : null}

            {visibleReplies >= 3 ? (
              <ReplyBubble>{replyMessages[2]}</ReplyBubble>
            ) : null}
            {typingStep === 2 ? <TypingBubble /> : null}

            {visibleReplies >= 4 ? (
              <ReplyBubble>{replyMessages[3]}</ReplyBubble>
            ) : null}
            {typingStep === 3 ? <TypingBubble /> : null}

            {linksVisible ? (
              <LinksBubble onOpenSection={onOpenSection} />
            ) : null}
            {typingStep === 4 ? <TypingBubble /> : null}
          </>
        )}
      </div>
    </div>
  );
}

export default WelcomeContent;
