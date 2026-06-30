import { Wallet, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Features", "Cards", "Savings", "Pricing", "Business"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Blog", "Contact"],
  },
  {
    title: "Support",
    links: ["Help center", "Security", "Status", "Community", "Fees"],
  },
];

const socials = [
  { icon: Twitter, label: "FinFlow on Twitter" },
  { icon: Instagram, label: "FinFlow on Instagram" },
  { icon: Linkedin, label: "FinFlow on LinkedIn" },
  { icon: Github, label: "FinFlow on GitHub" },
];

export default function Footer() {
  return (
    <footer className="section-pad pb-10 pt-8">
      <div className="clay-card p-8 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-800 text-ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-clay-brand">
                <Wallet className="h-5 w-5" aria-hidden />
              </span>
              FinFlow
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              The friendly money app for sending, spending and saving — beautifully simple,
              built to be trusted.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-surface text-ink-soft shadow-clay-sm transition-transform duration-200 hover:-translate-y-0.5 hover:text-brand-500"
                >
                  <s.icon className="h-5 w-5" aria-hidden />
                </button>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-sm font-700 text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink/5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} FinFlow Inc. A fictional product crafted for a
            portfolio. Not a real financial service.
          </p>
          <div className="flex gap-5 text-xs font-600 text-ink-faint">
            <a href="#top" className="transition-colors hover:text-ink">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-ink">
              Terms
            </a>
            <a href="#top" className="transition-colors hover:text-ink">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
