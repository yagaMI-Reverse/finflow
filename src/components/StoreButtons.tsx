import { Apple, Play } from "lucide-react";

type Props = { className?: string; variant?: "light" | "dark" };

/** Styled App Store / Google Play buttons (decorative — not linked to real stores). */
export default function StoreButtons({ className = "", variant = "light" }: Props) {
  const base =
    variant === "dark"
      ? "bg-ink text-white shadow-clay-brand"
      : "bg-surface text-ink shadow-clay-sm";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <button
        type="button"
        aria-label="Download FinFlow on the App Store"
        className={`group inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 ${base}`}
      >
        <Apple className="h-6 w-6" aria-hidden />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-500 opacity-70">Download on the</span>
          <span className="block font-display text-base font-700">App Store</span>
        </span>
      </button>

      <button
        type="button"
        aria-label="Get FinFlow on Google Play"
        className={`group inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 ${base}`}
      >
        <Play className="h-6 w-6" aria-hidden />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-500 opacity-70">Get it on</span>
          <span className="block font-display text-base font-700">Google Play</span>
        </span>
      </button>
    </div>
  );
}
