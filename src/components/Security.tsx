import { ShieldCheck, Lock, Fingerprint, BellRing, Eye } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  {
    icon: Lock,
    title: "256-bit encryption",
    body: "Every transaction and message is protected with the same encryption banks rely on.",
  },
  {
    icon: Fingerprint,
    title: "Face & fingerprint lock",
    body: "Only you get in. Biometric sign-in keeps your account yours, on every device.",
  },
  {
    icon: BellRing,
    title: "Real-time alerts",
    body: "Instant notifications on every payment, so anything unusual gets caught right away.",
  },
  {
    icon: Eye,
    title: "Freeze in one tap",
    body: "Misplaced your card? Freeze and unfreeze it instantly — no phone calls, no waiting.",
  },
];

export default function Security() {
  return (
    <section id="security" className="section-pad py-20">
      <div className="clay-card overflow-hidden p-8 sm:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="clay-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-700 text-mint-600">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Safety first
            </span>
            <h2 className="mt-5 text-3xl font-800 sm:text-4xl">
              Your money,{" "}
              <span className="gradient-text">guarded around the clock</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              FinFlow is built on bank-grade security and is regulated to keep your funds
              protected. We&apos;ll never sell your data — and you stay in control of every
              permission, always.
            </p>

            <div className="mt-7 flex items-center gap-4 rounded-clay bg-canvas p-5 shadow-clay-inset">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-mint-300 to-mint-500 text-white shadow-clay-sm">
                <ShieldCheck className="h-7 w-7" aria-hidden />
              </span>
              <p className="text-sm font-600 text-ink-soft">
                Eligible deposits are protected up to{" "}
                <span className="font-700 text-ink">$250,000</span> through our partner
                banks.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-clay bg-canvas p-6 shadow-clay-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-brand-500 shadow-clay-inset">
                    <p.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-700">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
