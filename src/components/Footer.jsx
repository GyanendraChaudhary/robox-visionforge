import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section className="bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-fuchsia-500/20 p-10 text-center shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:p-16">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Power the future of robotics with real-world data.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-200">
            RoboX VisionForge is a premium RoboX-inspired interface that makes egocentric datasets,
            privacy, annotation pipelines, and embodied AI use cases look like a world-class product.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#home"
              className="rounded-full bg-white px-8 py-4 font-black text-slate-950 transition hover:scale-105 hover:bg-cyan-200"
            >
              Back to Top
            </a>

            <a
              href="#datasets"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-black text-white transition hover:scale-105 hover:bg-white/15"
            >
              View Datasets
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500">
              <Cpu className="h-5 w-5" />
            </div>

            <div>
              <p className="font-black">RoboX VisionForge</p>
              <p className="text-xs text-slate-400">Advanced RoboX Showcase Project</p>
            </div>
          </div>

          <p className="text-sm text-slate-400">
            Built as a premium frontend concept for robotics, datasets, and embodied AI.
          </p>
        </div>
      </footer>
    </>
  );
}