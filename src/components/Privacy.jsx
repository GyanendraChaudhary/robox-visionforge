import { motion } from "framer-motion";
import { Lock, ShieldCheck } from "lucide-react";

export default function Privacy() {
  const checks = [
    "Opt-in campaign contribution",
    "On-device anonymization",
    "Secure encrypted upload",
    "Contributor data control",
    "Responsible AI data practices",
    "Research-focused transparency",
  ];

  return (
    <section id="privacy" className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
      <div className="absolute right-[-12%] top-20 h-96 w-96 rounded-full bg-emerald-500 opacity-25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-emerald-300">
            Privacy Layer
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Privacy by design. Trust by default.
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            RoboX-style data infrastructure should feel powerful but also responsible. VisionForge highlights
            opt-in contribution, anonymization-first workflows, secure transfer, and contributor control as core product pillars.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {checks.map((check) => (
              <div
                key={check}
                className="flex items-center gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4 text-sm font-semibold text-emerald-100"
              >
                <Lock className="h-4 w-4" />
                {check}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
          <div className="rounded-[2rem] border border-emerald-300/20 bg-slate-950/65 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="font-black text-white">Security Monitor</p>
                <p className="text-sm text-slate-400">Responsible data flow visualization</p>
              </div>
              <ShieldCheck className="h-9 w-9 text-emerald-300" />
            </div>

            {[
              ["Face & identifier removal", "97%"],
              ["Upload encryption", "TLS"],
              ["Metadata verification", "Active"],
              ["Contributor control", "Enabled"],
            ].map(([label, value], idx) => (
              <div key={label} className="mb-5">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-300">{label}</span>
                  <span className="font-bold text-emerald-300">{value}</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: idx === 1 ? "88%" : idx === 2 ? "76%" : "97%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}