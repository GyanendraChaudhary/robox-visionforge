import { CheckCircle2, FileJson, Zap } from "lucide-react";

export default function DataFormat() {
  const useCases = [
    "Humanoid imitation learning",
    "Vision-language-action models",
    "Robotic grasp planning",
    "Indoor navigation systems",
    "Scene and spatial understanding",
    "Human-robot interaction",
    "Activity recognition",
    "Assistive AI workflows",
  ];

  return (
    <>
      <section className="bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Data Format
            </p>

            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Technical structure that feels clear and research-grade.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              A polished visualization of how dataset files, clips, annotations, and metadata can be organized
              for robotics and AI teams.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3">
                <FileJson className="h-7 w-7 text-cyan-300" />
                <h3 className="text-2xl font-black">Dataset Package</h3>
              </div>

              <pre className="overflow-x-auto rounded-3xl border border-cyan-300/15 bg-slate-950 p-5 text-sm leading-8 text-cyan-100">
{`robox-visionforge/
├── manifest.json
├── metadata.parquet
├── clips/
│   ├── ego_grasp_001.mp4
│   └── ego_nav_002.mp4
├── annotations/
│   ├── objects.json
│   ├── hand_pose.json
│   └── interactions.json
└── README.md`}
              </pre>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Temporal Segments", "Action start/end timing for precise imitation learning."],
                ["Object Labels", "Category and context labels for manipulation tasks."],
                ["Hand Pose", "Useful motion signals for dexterous robotics."],
                ["Quality Score", "Clip quality, lighting, and research-readiness checks."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
                  <CheckCircle2 className="mb-5 h-7 w-7 text-cyan-300" />
                  <h4 className="font-black text-white">{title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Use Cases
            </p>

            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Built for researchers, robotics labs, and AI builders.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              VisionForge turns technical documentation into a story about business value,
              research utility, and real-world robotics applications.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40"
              >
                <Zap className="mb-5 h-7 w-7 text-cyan-300" />
                <p className="font-bold leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}