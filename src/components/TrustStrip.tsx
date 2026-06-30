import Reveal from "./Reveal";

const stats = [
  { value: "2.4M+", label: "Active users" },
  { value: "4.9★", label: "App Store rating" },
  { value: "$18B", label: "Moved safely" },
  { value: "0%", label: "Hidden fees" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Key statistics" className="section-pad py-6">
      <Reveal>
        <div className="clay-card grid grid-cols-2 gap-4 px-6 py-7 sm:grid-cols-4 sm:px-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-800 tracking-tight gradient-text sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-600 text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
