import { motion, useReducedMotion } from "framer-motion";
import { Plane, Home, Gift, Check } from "lucide-react";
import Reveal from "./Reveal";

const goals = [
  { icon: Plane, name: "Japan trip", saved: 2840, target: 4000, tint: "from-brand-400 to-brand-600" },
  { icon: Home, name: "New apartment", saved: 9200, target: 15000, tint: "from-violet-400 to-violet-600" },
  { icon: Gift, name: "Holiday fund", saved: 640, target: 800, tint: "from-mint-300 to-mint-500" },
];

const perks = [
  "Auto-deposit a little every payday",
  "Round up spare change into your vaults",
  "Earn up to 4.1% AER on your balance",
];

function GoalPhone() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-tr from-violet-400/30 via-brand-200/40 to-mint-200/40 blur-3xl"
      />
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-[2.75rem] bg-gradient-to-b from-white to-[#e7ecf6] p-3 shadow-phone"
      >
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#11162a]">
          <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black/80" />
          <div className="h-[540px] bg-gradient-to-b from-[#f3f6fd] to-[#e9eefa] px-4 pb-6 pt-10">
            <div className="flex items-center justify-between px-1 pb-4">
              <h3 className="font-display text-lg font-800 text-ink">Savings goals</h3>
              <span className="rounded-full bg-mint-100 px-2.5 py-1 text-[10px] font-700 text-mint-600">
                4.1% AER
              </span>
            </div>

            <div className="rounded-[1.6rem] bg-gradient-to-br from-mint-400 to-mint-600 p-4 text-white shadow-clay-sm">
              <p className="text-[11px] font-500 text-white/85">Total saved</p>
              <p className="font-display text-[26px] font-800 leading-tight">$12,680</p>
              <p className="mt-1 text-[11px] text-white/85">+$214 earned in interest</p>
            </div>

            <div className="mt-4 space-y-3">
              {goals.map((g, i) => {
                const pct = Math.round((g.saved / g.target) * 100);
                return (
                  <div
                    key={g.name}
                    className="rounded-2xl bg-white/85 p-3.5 shadow-clay-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${g.tint} text-white`}
                      >
                        <g.icon className="h-4 w-4" aria-hidden />
                      </span>
                      <div className="flex-1">
                        <p className="text-[12px] font-700 text-ink">{g.name}</p>
                        <p className="text-[10px] text-ink-faint">
                          ${g.saved.toLocaleString()} of ${g.target.toLocaleString()}
                        </p>
                      </div>
                      <span className="text-[12px] font-700 text-mint-600">{pct}%</span>
                    </div>
                    <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-canvas">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-brand-400 to-violet-500"
                        initial={reduce ? false : { width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 * i, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="section-pad py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <GoalPhone />
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <span className="clay-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-700 text-violet-600">
            Saving, made automatic
          </span>
          <h2 className="mt-5 text-3xl font-800 sm:text-4xl">
            Reach every goal <span className="gradient-text">without thinking about it</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Create a vault for anything that matters and let FinFlow do the saving for you.
            Small, painless amounts add up faster than you&apos;d expect — and they grow while
            they wait.
          </p>

          <ul className="mt-7 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-ink-soft">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-600">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <span className="font-600">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
