import { Check, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

type Plan = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    blurb: "Everything you need to send, spend and save with zero monthly cost.",
    features: [
      "Fee-free virtual card",
      "Instant FinFlow transfers",
      "Smart budgets & categories",
      "Up to 3 savings vaults",
    ],
    cta: "Get started free",
  },
  {
    name: "Plus",
    price: "$6.99",
    cadence: "per month",
    blurb: "More limits, more rewards and a premium metal card for everyday life.",
    features: [
      "Everything in Free",
      "Metal card & priority support",
      "No-fee spending abroad",
      "Unlimited savings vaults",
      "Up to 4.1% AER on savings",
    ],
    cta: "Start 30-day trial",
    featured: true,
  },
  {
    name: "Family",
    price: "$11.99",
    cadence: "per month",
    blurb: "Shared budgets and kids' cards to keep the whole household in flow.",
    features: [
      "Everything in Plus",
      "Up to 5 member accounts",
      "Kids' cards with controls",
      "Shared goals & allowances",
    ],
    cta: "Choose Family",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-800 sm:text-4xl">
          Start free, <span className="gradient-text">upgrade when you&apos;re ready</span>
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          No hidden fees, ever. Cancel a paid plan any time, right from the app.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08}>
            <div
              className={`relative flex h-full flex-col rounded-clay-lg p-7 transition-transform duration-300 hover:-translate-y-1.5 ${
                plan.featured
                  ? "bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-clay-lg"
                  : "clay-card"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-700 text-white">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Most popular
                </span>
              )}
              <h3
                className={`font-display text-xl font-800 ${
                  plan.featured ? "text-white" : "text-ink"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mt-3 flex items-end gap-1.5">
                <span className="font-display text-4xl font-800">{plan.price}</span>
                <span
                  className={`pb-1 text-sm font-600 ${
                    plan.featured ? "text-white/80" : "text-ink-faint"
                  }`}
                >
                  {plan.cadence}
                </span>
              </div>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  plan.featured ? "text-white/85" : "text-ink-soft"
                }`}
              >
                {plan.blurb}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.featured ? "bg-white/25 text-white" : "bg-mint-100 text-mint-600"
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span
                      className={`text-sm font-500 ${
                        plan.featured ? "text-white/95" : "text-ink-soft"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`mt-7 w-full rounded-full px-6 py-3 text-center font-display font-700 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 ${
                  plan.featured
                    ? "bg-white text-brand-600 shadow-clay-sm"
                    : "btn-clay"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
