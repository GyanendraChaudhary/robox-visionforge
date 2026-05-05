import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { datasets } from "../data/roboxData";

export default function DatasetExplorer() {
  const [selected, setSelected] = useState(datasets[0]);
  const [modal, setModal] = useState(null);
  const SelectedIcon = selected.icon;

  return (
    <section id="datasets" className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
      <div className="absolute left-[-8%] top-1/2 h-96 w-96 rounded-full bg-blue-600 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Dataset Explorer
          </p>
          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
            Five egocentric data families, one robotics-ready ecosystem.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            Explore how RoboX organizes first-person video data into practical dataset categories for
            manipulation, navigation, daily activity understanding, spatial mapping, and social robotics.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {datasets.map((d) => {
              const Icon = d.icon;
              const active = selected.name === d.name;

              return (
                <button
                  key={d.name}
                  onClick={() => setSelected(d)}
                  className={`group flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition ${
                    active
                      ? "border-cyan-300/60 bg-cyan-300/10 shadow-xl shadow-cyan-900/20"
                      : "border-white/10 bg-white/[0.05] hover:border-white/25 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${d.color}`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-black text-white">{d.name}</p>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-cyan-200">
                        {d.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{d.tag}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <motion.div
            layout
            className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className={`mb-5 grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${selected.color}`}>
                  <SelectedIcon className="h-8 w-8 text-white" />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                  {selected.tag}
                </p>

                <h3 className="mt-3 text-4xl font-black text-white">{selected.name}</h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  {selected.description}
                </p>
              </div>

              <button
                onClick={() => setModal(selected)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:scale-105 hover:bg-cyan-200"
              >
                View Details <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-5">
                <h4 className="mb-4 font-black text-white">Technical Specs</h4>

                <div className="grid gap-3">
                  {selected.specs.map((s) => (
                    <div key={s} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-5">
                <h4 className="mb-4 font-black text-white">Robotics Use Cases</h4>

                <div className="flex flex-wrap gap-2">
                  {selected.useCases.map((u) => (
                    <span
                      key={u}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100"
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/70 px-5 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-2xl rounded-[2rem] border border-white/15 bg-slate-950 p-7 shadow-2xl"
            >
              <button
                onClick={() => setModal(null)}
                className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="pr-12 text-3xl font-black text-white">{modal.name} Dataset</h3>
              <p className="mt-4 leading-8 text-slate-300">{modal.description}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-white/[0.06] p-5">
                  <p className="mb-3 font-black text-cyan-200">Specs</p>
                  {modal.specs.map((item) => (
                    <p key={item} className="mb-2 text-sm text-slate-300">
                      • {item}
                    </p>
                  ))}
                </div>

                <div className="rounded-3xl bg-white/[0.06] p-5">
                  <p className="mb-3 font-black text-cyan-200">Use Cases</p>
                  {modal.useCases.map((item) => (
                    <p key={item} className="mb-2 text-sm text-slate-300">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}