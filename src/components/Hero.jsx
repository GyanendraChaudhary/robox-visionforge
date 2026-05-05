import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles, Cpu } from "lucide-react";
import { datasets } from "../data/roboxData";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950 px-5 pt-32 text-white">
      <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-cyan-500 opacity-30 blur-3xl" />
      <div className="absolute right-[-8%] top-32 h-96 w-96 rounded-full bg-violet-600 opacity-30 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-pink-500 opacity-25 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Premium RoboX Documentation Showcase
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">
            Real-world data for the next generation of
            <span className="block gradient-text"> Robotics Intelligence.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-300 md:text-xl">
            RoboX VisionForge transforms RoboX documentation into an immersive product experience:
            egocentric datasets, privacy-first capture, annotation pipelines, and embodied AI use cases.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#datasets"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-4 font-bold text-white shadow-2xl shadow-cyan-500/30 transition hover:scale-105"
            >
              Explore Datasets
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>

            <a
              href="#workflow"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/50 hover:bg-white/15"
            >
              <PlayCircle className="h-5 w-5" />
              How it Works
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["5", "Dataset Families"],
              ["1000+", "Egocentric Clips"],
              ["30FPS", "Video Standard"],
              ["Privacy", "First Design"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-white">{number}</p>
                <p className="mt-1 text-xs font-medium text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-pink-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-200">Live Dataset Console</p>
                <p className="text-xs text-slate-400">RoboX egocentric data intelligence</p>
              </div>
              <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                ONLINE
              </div>
            </div>

            <div className="grid gap-4">
              {datasets.slice(0, 4).map((d, i) => {
                const Icon = d.icon;

                return (
                  <motion.div
                    key={d.name}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
                    className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-4"
                  >
                    <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${d.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-black text-white">{d.name}</p>
                        <span className="text-xs font-bold text-cyan-300">{d.status}</span>
                      </div>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${76 + i * 5}%` }}
                          transition={{ duration: 1.2, delay: 0.5 + i * 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${d.color}`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5 text-cyan-300" />
                <p className="font-bold text-white">Annotation Intelligence</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Object labels, temporal segments, scene context, hand pose, and interaction classification
                combined into research-ready datasets.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}