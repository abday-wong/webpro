import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Project Alpha",
  category: "Mobile Experience (Coming Soon)",
  heroImg: "/project_alpha.png",
  tagline:
    "A brand new mobile application bringing next-generation micro-interactions and interactive widgets to everyday utilities.",
  year: "2026",
  stack: ["Flutter", "Dart", "Provider", "Figma"],
  features: [
    "Fluid micro-interactions built from the ground up for a tactile mobile feel.",
    "Highly customizable dashboard layouts with reorderable widgets.",
    "Local storage synchronization and offline-first usage model."
  ],
  impact: [
    "Explores new UI layout methodologies on mobile devices.",
    "Aims to optimize small utility tools for maximum user efficiency."
  ],
  links: {},
};

export default function ProjectAlphaDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
