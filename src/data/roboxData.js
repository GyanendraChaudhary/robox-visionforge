import {
  Hand,
  Activity,
  Navigation,
  ScanEye,
  Users,
  Globe2,
  Smartphone,
  Fingerprint,
  Layers3,
  Database,
  ShieldCheck,
  BrainCircuit,
  FileJson,
  Network,
} from "lucide-react";

export const datasets = [
  {
    name: "EgoGrasp",
    icon: Hand,
    color: "from-cyan-400 to-blue-500",
    tag: "Object Manipulation",
    status: "High Value",
    description:
      "First-person hand-object interaction data designed for robotic grasping, dexterous manipulation, affordance learning, and embodied AI training.",
    specs: ["1080p video", "30 FPS", "Object labels", "Hand pose", "Quality score"],
    useCases: ["Grasp prediction", "Robotic manipulation", "Object affordance", "Dexterity models"],
  },
  {
    name: "EgoDaily",
    icon: Activity,
    color: "from-pink-400 to-fuchsia-600",
    tag: "Daily Activities",
    status: "Core Dataset",
    description:
      "Real-world daily activity clips such as cooking, organizing, cleaning, typing, and routine task execution for household robotics.",
    specs: ["Activity clips", "Scene context", "Task labels", "Temporal segments", "Metadata rich"],
    useCases: ["Task planning", "Activity recognition", "Assistive AI", "Household robotics"],
  },
  {
    name: "EgoNav",
    icon: Navigation,
    color: "from-emerald-400 to-teal-500",
    tag: "Indoor Navigation",
    status: "Research Ready",
    description:
      "Walking-pace indoor navigation data captured across real environments to support localization, obstacle avoidance, and path planning.",
    specs: ["Indoor paths", "Motion context", "Obstacle cues", "Navigation traces", "Environment tags"],
    useCases: ["SLAM", "Path planning", "Indoor localization", "Autonomous navigation"],
  },
  {
    name: "EgoScene",
    icon: ScanEye,
    color: "from-violet-400 to-purple-600",
    tag: "Spatial Understanding",
    status: "3D Mapping",
    description:
      "Scene scans and panoramic captures for spatial mapping, reconstruction, room understanding, and environment classification.",
    specs: ["360° capture", "Room scans", "Spatial tags", "Layout cues", "Scene metadata"],
    useCases: ["3D reconstruction", "Scene understanding", "AR robotics", "Spatial mapping"],
  },
  {
    name: "EgoSocial",
    icon: Users,
    color: "from-orange-400 to-red-500",
    tag: "Human Interaction",
    status: "Coming Soon",
    description:
      "Human interaction and social navigation data for training robots to understand movement, gestures, collaboration, and public-space behavior.",
    specs: ["Social scenes", "Gesture cues", "Anonymized faces", "Crowd context", "Interaction tags"],
    useCases: ["Human-robot interaction", "Crowd dynamics", "Pedestrian prediction", "Social robotics"],
  },
];

export const workflow = [
  {
    title: "Join Campaign",
    text: "Contributors select a campaign based on task type, capture requirements, and dataset goals.",
    icon: Globe2,
  },
  {
    title: "Record Egocentric Data",
    text: "Smartphones become first-person sensors for capturing real-world human actions and environments.",
    icon: Smartphone,
  },
  {
    title: "Privacy Processing",
    text: "Sensitive identifiers like faces, plates, and personal signals are handled before upload.",
    icon: Fingerprint,
  },
  {
    title: "Annotation Pipeline",
    text: "Clips are enriched with object labels, interaction types, scene context, and quality scores.",
    icon: Layers3,
  },
  {
    title: "Research Dataset",
    text: "Structured datasets are packaged for robotics labs, AI researchers, and embodied AI teams.",
    icon: Database,
  },
];

export const features = [
  {
    title: "Crowdsourced Scale",
    text: "Collects diverse real-world data without relying only on expensive robot fleets or closed labs.",
    icon: Network,
  },
  {
    title: "Privacy-First Design",
    text: "Opt-in capture, contributor control, secure upload, and anonymization-first data handling.",
    icon: ShieldCheck,
  },
  {
    title: "Embodied AI Ready",
    text: "Built for imitation learning, humanoid robotics, navigation, scene understanding, and VLA models.",
    icon: BrainCircuit,
  },
  {
    title: "Structured Metadata",
    text: "Clips include context, quality score, device information, annotation layers, and versioning.",
    icon: FileJson,
  },
];

export const faqs = [
  {
    q: "What is RoboX VisionForge?",
    a: "RoboX VisionForge is a premium frontend showcase inspired by RoboX documentation. It presents egocentric datasets, privacy-first data collection, annotation pipelines, and robotics use cases.",
  },
  {
    q: "Why is egocentric data useful?",
    a: "First-person data captures how humans naturally interact with objects, spaces, and people. This helps robotics models learn real-world actions and context.",
  },
  {
    q: "How does RoboX protect privacy?",
    a: "The platform focuses on opt-in contribution, on-device anonymization, secure upload, contributor control, and responsible data handling.",
  },
  {
    q: "Who can use these datasets?",
    a: "Robotics labs, AI researchers, embodied AI teams, humanoid robotics companies, and businesses building real-world perception or action models.",
  },
];