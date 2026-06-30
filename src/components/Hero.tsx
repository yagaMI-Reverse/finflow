import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import StoreButtons from "./StoreButtons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-12 pt-32 sm:pt-36">
      {/* soft floating blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-mint-200/40 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-violet-400/25 blur-3xl animate-float-x"
      />

      <div className="section-pad grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="clay-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-700 text-ink-soft"
          >
            <span className="flex h-2 w-2 rounded-full bg-mint-400" />
            New · Round-ups &amp; auto-savings are live
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="mt-5 font-display text-4xl font-800 leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Smart money,
            <br />
            <span className="gradient-text">beautifully simple.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ink-soft lg:mx-0"
          >
            Send, spend and save in one friendly app. Instant transfers, fee-free cards
            and budgets that quietly do the work — so your money finally feels easy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            className="mt-7 flex justify-center lg:justify-start"
          >
            <StoreButtons />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-600 text-ink-soft lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="flex" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              4.9 · 38k ratings
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-mint-500" aria-hidden />
              Bank-grade encryption
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
