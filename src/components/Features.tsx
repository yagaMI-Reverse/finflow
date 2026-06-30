import { Send, PieChart, CreditCard, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  tint: string;
};

const features: Feature[] = [
  {
    icon: Send,
    title: "Instant transfers",
    body: "Send money to anyone in seconds — by name, phone or QR. It lands instantly, free between FinFlow accounts and across 30+ currencies.",
    tint: "from-brand-400 to-brand-600",
  },
  {
    icon: PieChart,
    title: "Smart budgeting",
    body: "Spending is sorted automatically into clear categories. Set gentle limits and FinFlow nudges you before you overshoot — no spreadsheets required.",
    tint: "from-mint-300 to-mint-500",
  },
  {
    icon: CreditCard,
    title: "Fee-free cards",
    body: "A sleek physical and virtual card with zero monthly fees, no FX markup abroad, and instant freeze, limits and notifications in a tap.",
    tint: "from-violet-400 to-violet-600",
  },
  {
    icon: Target,
    title: "Savings goals",
    body: "Create vaults for anything — a trip, a deposit, a rainy day. Round-ups and auto-deposits fill them quietly while you earn up to 4.1% on balances.",
    tint: "from-amber-300 to-amber-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-pad py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-800 sm:text-4xl">
          Everything your money needs, <span className="gradient-text">nothing it doesn&apos;t</span>
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Four essentials, designed to feel calm and effortless instead of stressful.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <article className="clay-card group h-full p-7 transition-transform duration-300 hover:-translate-y-1.5">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.tint} text-white shadow-clay-sm transition-transform duration-300 group-hover:scale-105`}
              >
                <f.icon className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-700">{f.title}</h3>
              <p className="mt-2.5 leading-relaxed text-ink-soft">{f.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
