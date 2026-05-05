import { Cpu } from "lucide-react";

export default function Navbar() {
  const links = [
    ["About", "about"],
    ["Datasets", "datasets"],
    ["Workflow", "workflow"],
    ["Privacy", "privacy"],
    ["Use Cases", "use-cases"],
    ["FAQ", "faq"],
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-lg shadow-cyan-500/30">
            <Cpu className="h-6 w-6 text-white" />
          </div>

          <div>
            <p className="text-lg font-black leading-none text-white">RoboX VisionForge</p>
            <p className="text-xs font-medium text-cyan-300">Egocentric AI Data Layer</p>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {name}
            </a>
          ))}
        </div>

        <a
          href="#datasets"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:scale-105 hover:bg-cyan-200 md:inline-flex"
        >
          Explore Platform
        </a>
      </div>
    </nav>
  );
}