import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Alphecci 🏛️",
  category: "Digital Product Studio",
  heroImg: "/alphecci.png",
  tagline:
    "A premium, state-of-the-art digital product studio landing page built with React and Vite, featuring a warm-ivory neomorphic design system.",
  year: "2025",
  stack: [
    "React 19",
    "Vite",
    "Tailwind CSS",
    "CSS Neomorphism",
    "Framer Motion",
    "Interactive Components"
  ],
  features: [
    "Warm-Ivory Neomorphism: Custom, pixel-perfect double-shadowing (light highlights + soft dark shadows) on UI panels and cards.",
    "Services Hub: Modular sections outlining offerings like UI/UX Design, Custom Software Development, and AI Systems with hover states.",
    "Interactive Showcase: Dynamic, filterable portfolio demonstrating agency project case studies with smooth layouts.",
    "Bespoke Aesthetics: Warm, tactile, and highly modern design system crafted from scratch to move away from default flat UI designs."
  ],
  impact: [
    "Establishes a highly polished web presence that builds credibility for high-end digital agency services.",
    "Demonstrates expertise in advanced custom CSS layouts and neomorphic user interface design."
  ],
  links: {
    repo: "https://github.com/abday-wong/ALPHECCI",
    live: "https://alphecci.vercel.app/"
  },
};

export default function AlphecciDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
