import { useMemo, useState } from "react";

const campaigns = [
  {
    name: "EgoGrasp",
    emoji: "🦾",
    color: "from-cyan-400 to-blue-500",
    status: "Active",
    type: "Manipulation",
    volume: "1055 clips",
    score: 96,
    description:
      "First-person recordings of object grasping and manipulation in real-world settings. Contributors pick up, move, and interact with everyday objects while using a smartphone at chest or waist height.",
    specs: [
      "1080p egocentric video",
      "30 FPS standard capture",
      "Max clip duration: 15 seconds",
      "Phone at chest/waist height",
      "Object category labels",
      "Hand pose estimation",
      "Quality score and lighting metadata",
      "Current volume: 1055 clips",
    ],
    categories:
      "Cup/mug, mouse, scissors, hanger, utensils, remote, pen, plushie, bottle, headphones, charger, stationery and more.",
    useCases:
      "Robotic manipulation, grasp planning, object affordance learning, VLA fine-tuning, household robotics.",
  },
  {
    name: "EgoScene",
    emoji: "🌐",
    color: "from-violet-400 to-purple-600",
    status: "Active",
    type: "Spatial",
    volume: "295 clips",
    score: 82,
    description:
      "Slow 360-degree panoramic scans of real-world environments like rooms, stores, offices, and outdoor areas for spatial understanding and mapping.",
    specs: [
      "1080p egocentric video",
      "30 FPS",
      "Average clip duration: 11 seconds",
      "Slow panoramic rotation capture",
      "Scene classification",
      "Lighting and environment metadata",
      "IMU data per frame",
      "Current volume: 295 clips",
    ],
    categories:
      "Kitchen, bedroom, bathroom, living room, office, supermarket, shopping mall, outdoor.",
    useCases:
      "Scene understanding, 3D reconstruction, spatial mapping, environment classification, indoor robotics.",
  },
  {
    name: "EgoNav",
    emoji: "🧭",
    color: "from-emerald-400 to-teal-500",
    status: "Active",
    type: "Navigation",
    volume: "167 clips",
    score: 74,
    description:
      "Walking-pace egocentric recordings of indoor navigation through homes, stores, offices, malls, staircases, and public indoor spaces.",
    specs: [
      "1080p egocentric video",
      "30 FPS",
      "Average clip duration: 8–10 seconds",
      "Walking navigation capture",
      "Trajectory segmentation",
      "Obstacle context",
      "Heading and speed metadata",
      "Current volume: 167 clips",
    ],
    categories:
      "Home, store, office, mall, corridor, staircase, indoor environments.",
    useCases:
      "Path planning, autonomous navigation, obstacle avoidance, indoor localization, SLAM pre-training.",
  },
  {
    name: "EgoDaily",
    emoji: "🏠",
    color: "from-pink-400 to-fuchsia-600",
    status: "Active",
    type: "Daily Tasks",
    volume: "220 clips",
    score: 79,
    description:
      "Egocentric recordings of routine activities in homes and workplaces including cooking, cleaning, laundry, typing, and organizing.",
    specs: [
      "1080p egocentric video",
      "30 FPS",
      "Average clip duration: 15–18 seconds",
      "Routine activity capture",
      "Activity type labeling",
      "Temporal segmentation",
      "Environment classification",
      "Current volume: 220 clips",
    ],
    categories:
      "Cooking, cleaning, laundry, workspace tasks, organizing, home routines.",
    useCases:
      "Activity recognition, task planning, assistive AI, household robotics, procedural learning.",
  },
  {
    name: "EgoSocial",
    emoji: "👥",
    color: "from-orange-400 to-red-500",
    status: "Coming Soon",
    type: "Social",
    volume: "Soon",
    score: 68,
    description:
      "Egocentric navigation through crowded spaces such as markets, stations, malls, campuses, food courts, terminals, and public gatherings.",
    specs: [
      "1080p egocentric video",
      "30 FPS",
      "Target duration: 5–12 minutes",
      "Crowd navigation capture",
      "Face blur verification",
      "Crowd density estimation",
      "GPS / heading / speed metadata",
      "Collection starts soon",
    ],
    categories:
      "Street markets, train stations, shopping malls, campuses, food courts, terminals, festivals, stadium exits.",
    useCases:
      "Social navigation, crowd dynamics, pedestrian prediction, public-space robotics, human-robot interaction.",
  },
];

const workflow = [
  ["01", "Select Campaign", "Choose an active RoboX data mission based on task and collection requirements."],
  ["02", "Record First-Person Data", "Use a smartphone to capture real-world actions, navigation, scenes, or tasks."],
  ["03", "Anonymize On Device", "Faces, identifiers, plates, and sensitive details are blurred or removed before upload."],
  ["04", "Annotate & Score", "Object labels, actions, hand pose, scene context, and quality scores are added."],
  ["05", "Deliver Dataset", "Clips, metadata, annotations, and schema files are packaged for robotics teams."],
];

const annotationLayers = [
  "Temporal segmentation",
  "Object bounding boxes",
  "Hand pose estimation",
  "Gaze direction",
  "Scene structure",
  "Interaction classification",
];

const metadataFields = [
  "clip_id",
  "campaign",
  "duration_sec",
  "fps",
  "resolution",
  "environment",
  "device_model",
  "quality_score",
  "annotation_layers",
  "object_categories",
  "schema_version",
  "created_at",
];

const faqData = [
  {
    q: "What is RoboX VisionForge?",
    a: "It is a premium interactive frontend showcase based on RoboX documentation, designed to present datasets, privacy, data format, annotation layers, and robotics use cases professionally.",
  },
  {
    q: "What makes this project better than a simple documentation page?",
    a: "It includes clickable dataset cards, filters, search, tabs, modal details, copy actions, progress bars, FAQ accordion, and a product-style layout.",
  },
  {
    q: "Why is egocentric data useful?",
    a: "First-person data helps robots and embodied AI systems understand real-world actions, object interactions, navigation, scenes, and human behavior.",
  },
  {
    q: "Can this be deployed on GitHub Pages?",
    a: "Yes. Since this is a Vite React project, it can be deployed using GitHub Pages after running build and setting the correct base path.",
  },
];

const datasetTree = `robox-dataset/
├── manifest.json
├── metadata.parquet
├── clips/
│   ├── clip_001.mp4
│   ├── clip_002.mp4
│   └── ...
├── annotations/
│   ├── clip_001.json
│   ├── clip_002.json
│   └── ...
└── README.md`;

export default function App() {
  const [selected, setSelected] = useState(campaigns[0]);
  const [activeTab, setActiveTab] = useState("overview");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [modal, setModal] = useState(null);
  const [copied, setCopied] = useState(false);

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter((item) => {
      const matchFilter = filter === "All" || item.status === filter || item.type === filter;
      const query = search.toLowerCase();
      const matchSearch =
        item.name.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);
      return matchFilter && matchSearch;
    });
  }, [filter, search]);

  const copyTree = async () => {
    try {
      await navigator.clipboard.writeText(datasetTree);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_35%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.10),transparent_35%)]"></div>

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-xl shadow-lg shadow-cyan-500/20">
              ⚙️
            </div>
            <div>
              <h2 className="text-xl font-black">RoboX VisionForge</h2>
              <p className="text-xs font-bold text-cyan-300">Premium Interactive Showcase</p>
            </div>
          </a>

          <div className="hidden gap-6 md:flex">
            {["Datasets", "Workflow", "Details", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#datasets"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-black text-slate-950 transition hover:scale-105 hover:bg-cyan-200 md:inline-flex"
          >
            Explore
          </a>
        </div>
      </nav>

      <section id="hero" className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl"></div>
        <div className="absolute right-[-120px] top-28 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/2 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
              🚀 RoboX Documentation Reimagined
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Interactive data platform for{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                Robotics Intelligence
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A premium RoboX-inspired project with clickable datasets, search,
              filters, tabs, modal previews, data structure, privacy model, and
              robotics use cases.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#datasets"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-4 font-black transition hover:scale-105"
              >
                Explore Datasets
              </a>
              <a
                href="#details"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 font-black transition hover:bg-white/15"
              >
                View Technical Details
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["5", "Campaigns"],
                ["1000+", "Clips"],
                ["30 FPS", "Standard"],
                ["Privacy", "First"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center shadow-lg"
                >
                  <p className="text-2xl font-black text-cyan-300">{num}</p>
                  <p className="mt-1 text-xs font-bold text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black">Live Dataset Console</h3>
                <p className="text-sm text-slate-400">Clickable preview dashboard</p>
              </div>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-black text-emerald-300">
                ONLINE
              </span>
            </div>

            <div className="grid gap-4">
              {campaigns.slice(0, 4).map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setSelected(item);
                    window.location.hash = "datasets";
                  }}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-left transition hover:scale-[1.02] hover:border-cyan-400/40"
                >
                  <div className="flex items-center gap-4">
                    <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${item.color} text-2xl`}>
                      {item.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="font-black">{item.name}</h4>
                        <span className="text-xs font-bold text-cyan-300">{item.volume}</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="datasets" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Dataset Explorer"
            title="Search, filter, and click datasets"
            text="Cards are interactive. Click any campaign to update the detail panel, open modal view, or inspect specs."
          />

          <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 md:flex-row md:items-center md:justify-between">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search datasets, type, or use cases..."
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 md:max-w-md"
            />

            <div className="flex flex-wrap gap-3">
              {["All", "Active", "Coming Soon", "Manipulation", "Navigation", "Spatial", "Daily Tasks", "Social"].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-4 py-2 text-sm font-black transition ${
                    filter === item
                      ? "bg-gradient-to-r from-cyan-400 to-violet-500"
                      : "border border-white/15 bg-white/10 hover:bg-white/15"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              {filteredCampaigns.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setSelected(item)}
                  className={`rounded-[1.5rem] border p-5 text-left transition hover:scale-[1.01] ${
                    selected.name === item.name
                      ? "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-950/30"
                      : "border-white/10 bg-white/[0.05] hover:border-white/30 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${item.color} text-2xl`}>
                      {item.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-black">{item.name}</h3>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-300">
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-400">{item.type} • {item.volume}</p>
                    </div>
                  </div>
                </button>
              ))}

              {filteredCampaigns.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-center text-slate-300">
                  No dataset found. Try another search.
                </div>
              )}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-7">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className={`grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br ${selected.color} text-4xl`}>
                    {selected.emoji}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-cyan-300">{selected.status} • {selected.type}</p>
                    <h3 className="text-4xl font-black">{selected.name}</h3>
                  </div>
                </div>

                <button
                  onClick={() => setModal(selected)}
                  className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:scale-105 hover:bg-cyan-200"
                >
                  Open Full View
                </button>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-300">{selected.description}</p>

              <div className="mt-8">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-bold text-slate-300">Dataset readiness</span>
                  <span className="font-black text-cyan-300">{selected.score}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full rounded-full bg-gradient-to-r ${selected.color}`} style={{ width: `${selected.score}%` }}></div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <InfoCard title="Technical Specs" items={selected.specs} />
                <div className="grid gap-6">
                  <TextCard title="Categories / Environments" text={selected.categories} />
                  <TextCard title="Use Cases" text={selected.useCases} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Workflow"
            title="From smartphone capture to research-ready data"
            text="This timeline explains the RoboX pipeline in a simple product-style visual flow."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {workflow.map(([step, title, text]) => (
              <div
                key={step}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <p className="text-5xl font-black text-white/10 group-hover:text-cyan-400/30">{step}</p>
                <h3 className="mt-5 text-xl font-black text-cyan-300">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="details" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Technical Center"
            title="Click tabs to switch documentation panels"
            text="This section gives the project a professional dashboard-like documentation feel."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              ["overview", "Overview"],
              ["format", "Data Format"],
              ["privacy", "Privacy Model"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`rounded-full px-6 py-3 font-black transition ${
                  activeTab === id
                    ? "bg-gradient-to-r from-cyan-400 to-violet-500"
                    : "border border-white/15 bg-white/10 hover:bg-white/15"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.07] p-8">
            {activeTab === "overview" && (
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  "RoboX is a crowdsourced data platform for robotics imitation learning.",
                  "Contributors capture first-person real-world actions, scenes, navigation, and daily tasks.",
                  "Layered annotation and metadata transform raw clips into research-ready datasets.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-slate-300">
                    ✅ {item}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "format" && (
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-black text-cyan-300">Dataset Structure</h3>
                    <button onClick={copyTree} className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm leading-7 text-slate-200">
                    {datasetTree}
                  </pre>
                </div>

                <InfoCard title="Metadata Fields" items={metadataFields} />

                <div className="lg:col-span-2">
                  <InfoCard title="Annotation Layers" items={annotationLayers} columns />
                </div>
              </div>
            )}

            {activeTab === "privacy" && (
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Opt-in campaign contribution",
                  "On-device anonymization",
                  "Faces and identifiers removed",
                  "Encrypted upload",
                  "User-controlled deletion",
                  "No silent background collection",
                  "Campaign-only collection",
                  "Responsible AI data practice",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 font-bold text-emerald-200">
                    ✅ {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Click questions to reveal answers"
            text="Accordion style FAQ makes the page feel interactive and complete."
          />

          <div className="mt-10 grid gap-4">
            {faqData.map((item, index) => (
              <div key={item.q} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-lg font-black">{item.q}</span>
                  <span className="text-2xl font-black text-cyan-300">{openFaq === index ? "−" : "+"}</span>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 leading-8 text-slate-300">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-pink-500/20 p-10 text-center">
          <h2 className="text-4xl font-black md:text-6xl">RoboX VisionForge</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            Premium interactive documentation showcase for RoboX datasets, privacy,
            annotation pipelines, metadata structure, and robotics intelligence.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#hero" className="rounded-full bg-white px-7 py-4 font-black text-slate-950 transition hover:scale-105">
              Back to Top
            </a>
            <a href="#datasets" className="rounded-full border border-white/20 bg-white/10 px-7 py-4 font-black transition hover:bg-white/15">
              Explore Again
            </a>
          </div>
        </div>
      </footer>

      {modal && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 px-6 backdrop-blur-lg">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/15 bg-slate-950 p-7 shadow-2xl">
            <button
              onClick={() => setModal(null)}
              className="absolute right-5 top-5 rounded-full bg-white/10 px-4 py-2 font-black transition hover:bg-white/20"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 pr-12">
              <div className={`grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br ${modal.color} text-4xl`}>
                {modal.emoji}
              </div>
              <div>
                <p className="text-sm font-bold text-cyan-300">{modal.status} • {modal.type}</p>
                <h3 className="text-4xl font-black">{modal.name}</h3>
              </div>
            </div>

            <p className="mt-6 text-lg leading-8 text-slate-300">{modal.description}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <InfoCard title="Specs" items={modal.specs} />
              <div className="grid gap-6">
                <TextCard title="Categories" text={modal.categories} />
                <TextCard title="Use Cases" text={modal.useCases} />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black md:text-6xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        {text}
      </p>
    </div>
  );
}

function InfoCard({ title, items, columns = false }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
      <h4 className="text-xl font-black text-cyan-300">{title}</h4>
      <div className={`mt-4 grid gap-3 ${columns ? "md:grid-cols-2" : ""}`}>
        {items.map((item) => (
          <div key={item} className="rounded-xl bg-white/5 p-3 text-slate-300">
            ✅ {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function TextCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
      <h4 className="text-xl font-black text-cyan-300">{title}</h4>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}