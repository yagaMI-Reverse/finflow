import { QrCode } from "lucide-react";
import Reveal from "./Reveal";
import StoreButtons from "./StoreButtons";

export default function DownloadCTA() {
  return (
    <section id="download" className="section-pad py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-clay-xl bg-gradient-to-br from-brand-500 via-brand-500 to-violet-600 px-7 py-14 text-center text-white shadow-clay-lg sm:px-12">
          {/* soft decorative blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-12 h-72 w-72 rounded-full bg-violet-400/40 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-800 leading-tight tracking-tight !text-white sm:text-4xl">
              Money that finally feels easy
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-white/85">
              Join over 2.4 million people who switched to FinFlow. It&apos;s free to start,
              and it takes two minutes to set up.
            </p>

            <div className="mt-8 flex justify-center">
              <StoreButtons variant="light" />
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 text-sm font-600 text-white/90 backdrop-blur">
              <QrCode className="h-5 w-5" aria-hidden />
              Scan the QR in-store to download instantly
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
