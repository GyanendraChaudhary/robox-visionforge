import { motion } from "framer-motion";
import { workflow, features } from "../data/roboxData";

export default function Workflow() {
  return (
    <>
      <section id="about" className="relative bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              About VisionForge
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              A premium intelligence layer for RoboX documentation.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              This project presents RoboX as a powerful data infrastructure platform for robotics labs,
              embodied AI researchers, and companies building the future of real-world automation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.09]"
                >
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/20">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-black text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Workflow
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              From smartphone capture to research-ready robotics datasets.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              The project visualizes RoboX as an end-to-end data engine where real-world contributors
              power the next generation of embodied AI systems.
            </p>
          </div>

          <div className="relative grid gap-5 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-cyan-400/0 via-cyan-300/50 to-violet-400/0 lg:block" />

            {workflow.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-4xl font-black text-white/10">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-black text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}