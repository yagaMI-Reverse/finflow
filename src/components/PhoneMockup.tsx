import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Coffee,
  ShoppingBag,
  Zap,
  Home,
  CreditCard,
  PieChart,
  User,
} from "lucide-react";

const transactions = [
  { icon: Coffee, name: "Blue Bottle Coffee", cat: "Dining", amount: "-$6.40", up: false },
  { icon: ArrowDownLeft, name: "Salary · Acme Inc.", cat: "Income", amount: "+$3,200", up: true },
  { icon: ShoppingBag, name: "Everlane", cat: "Shopping", amount: "-$82.00", up: false },
  { icon: Zap, name: "Spotify", cat: "Subscription", amount: "-$10.99", up: false },
];

// Mini bar chart heights (in %) for the spending overview.
const bars = [48, 66, 40, 82, 58, 74, 92];
const days = ["M", "T", "W", "T", "F", "S", "S"];

export default function PhoneMockup() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      {/* soft floating glow behind the phone */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-mint-200/50 via-brand-200/40 to-violet-400/30 blur-3xl"
      />

      <motion.div
        animate={reduce ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-[2.75rem] bg-gradient-to-b from-white to-[#e7ecf6] p-3 shadow-phone"
      >
        {/* phone frame */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#11162a]">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black/80" />

          {/* screen */}
          <div className="relative h-[560px] bg-gradient-to-b from-[#f3f6fd] to-[#e9eefa] px-4 pb-20 pt-9">
            {/* status bar */}
            <div className="flex items-center justify-between px-1 pb-3 pt-1 text-[11px] font-600 text-ink">
              <span>9:41</span>
              <span className="flex items-center gap-1 text-ink-soft">
                <span className="h-2 w-2 rounded-full bg-mint-400" /> FinFlow
              </span>
            </div>

            {/* balance card */}
            <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-brand-500 via-brand-500 to-violet-600 p-4 text-white shadow-clay-brand">
              <div
                aria-hidden
                className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/15 blur-xl"
              />
              <p className="text-[11px] font-500 text-white/80">Total balance</p>
              <p className="font-display text-[26px] font-800 leading-tight tracking-tight">
                $12,480.55
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-600">
                  •••• 4921
                </span>
                <span className="flex items-center gap-1 text-[11px] text-mint-100">
                  <ArrowUpRight className="h-3 w-3" aria-hidden />
                  +4.2% this month
                </span>
              </div>
            </div>

            {/* quick actions */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: "Send", icon: ArrowUpRight },
                { label: "Request", icon: ArrowDownLeft },
                { label: "Top up", icon: Plus },
              ].map((a) => (
                <div
                  key={a.label}
                  className="flex flex-col items-center gap-1 rounded-2xl bg-white/80 py-2.5 shadow-clay-sm"
                >
                  <a.icon className="h-4 w-4 text-brand-500" aria-hidden />
                  <span className="text-[10px] font-600 text-ink-soft">{a.label}</span>
                </div>
              ))}
            </div>

            {/* spending mini chart */}
            <div className="mt-4 rounded-[1.4rem] bg-white/85 p-3 shadow-clay-sm">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-700 text-ink">This week</span>
                <span className="text-[10px] font-600 text-mint-600">$642 spent</span>
              </div>
              <div className="flex h-24 items-end justify-between gap-1.5">
                {bars.map((h, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                    <div className="flex h-full w-full items-end">
                      <motion.div
                        className="w-full origin-bottom rounded-full bg-gradient-to-t from-brand-400 to-violet-400"
                        style={{ height: `${h}%` }}
                        initial={reduce ? false : { scaleY: 0.1, opacity: 0.4 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-[9px] font-500 text-ink-faint">{days[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* transactions */}
            <div className="mt-4 space-y-2">
              {transactions.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-3 rounded-2xl bg-white/85 px-3 py-2 shadow-clay-sm"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                      t.up ? "bg-mint-100 text-mint-600" : "bg-brand-100 text-brand-500"
                    }`}
                  >
                    <t.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12px] font-600 text-ink">{t.name}</p>
                    <p className="text-[10px] text-ink-faint">{t.cat}</p>
                  </div>
                  <span
                    className={`text-[12px] font-700 ${
                      t.up ? "text-mint-600" : "text-ink"
                    }`}
                  >
                    {t.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* bottom tab bar */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-around rounded-b-[2.25rem] border-t border-white/60 bg-white/90 px-2 py-3 backdrop-blur">
            {[
              { icon: Home, active: true },
              { icon: PieChart, active: false },
              { icon: CreditCard, active: false },
              { icon: User, active: false },
            ].map((tab, i) => (
              <span
                key={i}
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                  tab.active ? "bg-brand-500 text-white shadow-clay-brand" : "text-ink-faint"
                }`}
              >
                <tab.icon className="h-4 w-4" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* floating clay coins */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, -16, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 top-16 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-mint-300 to-mint-500 text-white shadow-clay"
      >
        <ArrowUpRight className="h-6 w-6" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, 14, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-7 bottom-24 flex h-16 w-16 items-center justify-center rounded-[1.3rem] bg-gradient-to-br from-violet-400 to-violet-600 text-white shadow-clay"
      >
        <CreditCard className="h-7 w-7" />
      </motion.div>
    </div>
  );
}
