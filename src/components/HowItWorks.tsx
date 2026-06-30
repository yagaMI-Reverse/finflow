import { Download, UserCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Step = { n: string; icon: LucideIcon; title: string; body: string };

const steps: Step[] = [
  {
    n: "01",
    icon: Download,
    title: "Download & join",
    body: "Grab FinFlow from the App Store or Google Play. Creating an account takes about two minutes — no paperwork.",
  },
  {
    n: "02",
    icon: UserCheck,
    title: "Verify in minutes",
    body: "A quick, secure ID check unlocks your account and card. Everything is encrypted end to end from the very first tap.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Flow with your money",
    body: "Top up, send, spend and watch budgets and savings work in the background. You stay in control, FinFlow does the busywork.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-800 sm:text-4xl">
          Up and running in <span className="gradient-text">three steps</span>
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          From download to your first transfer — most people are set in under five minutes.
        </p>
      </Reveal>

      <div className="relative mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="clay-card relative h-full p-7">
              <span
                aria-hidden
                className="absolute right-6 top-5 font-display text-5xl font-800 text-brand-100"
              >
                {s.n}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface text-brand-500 shadow-clay-inset">
                <s.icon className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-700">{s.title}</h3>
              <p className="mt-2.5 leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
