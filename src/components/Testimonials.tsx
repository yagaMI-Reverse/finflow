import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const reviews = [
  {
    quote:
      "I finally understand where my money goes. The budgets sort themselves and I've saved more in three months than in the last two years.",
    name: "Maya Adebayo",
    role: "Designer · London",
    initials: "MA",
    tint: "from-brand-400 to-brand-600",
  },
  {
    quote:
      "Sent money to my family abroad in seconds with no crazy fees. The app just feels nice to use — soft, fast and never confusing.",
    name: "Diego Ramos",
    role: "Freelancer · Lisbon",
    initials: "DR",
    tint: "from-mint-300 to-mint-500",
  },
  {
    quote:
      "The savings vaults are addictive in the best way. Round-ups quietly filled my holiday fund before I even noticed.",
    name: "Hannah Kim",
    role: "Engineer · Berlin",
    initials: "HK",
    tint: "from-violet-400 to-violet-600",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-800 sm:text-4xl">
          Loved by <span className="gradient-text">2.4 million people</span>
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Real reviews from people who switched to a calmer way to handle money.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.08}>
            <figure className="clay-card flex h-full flex-col p-7">
              <Quote className="h-8 w-8 text-brand-200" aria-hidden />
              <div className="mt-3 flex" aria-label="Rated 5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink-soft">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${r.tint} font-display text-sm font-700 text-white shadow-clay-sm`}
                >
                  {r.initials}
                </span>
                <span>
                  <span className="block font-display font-700 text-ink">{r.name}</span>
                  <span className="block text-sm text-ink-faint">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
