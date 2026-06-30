import { useEffect, useState } from "react";
import { Wallet, Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`section-pad flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled ? "bg-surface/80 py-2 shadow-clay-sm backdrop-blur-md" : "py-2"
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-800 text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-clay-brand">
            <Wallet className="h-5 w-5" aria-hidden />
          </span>
          FinFlow
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-600 text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#download" className="btn-clay text-sm">
            Get the app
          </a>
        </div>

        <button
          type="button"
          className="btn-ghost px-3 py-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {open && (
        <div className="section-pad mt-2 md:hidden">
          <div className="clay-card flex flex-col gap-1 p-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-2.5 text-sm font-600 text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="btn-clay mt-2 text-sm"
            >
              Get the app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
