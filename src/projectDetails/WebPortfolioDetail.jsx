import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Web Portfolio",
  category: "Interactive React Portfolio",
  heroImg: "/web_portfolio.png",
  tagline:
    "You're looking at it right now! A premium personal profile website built using React, Vite, and Tailwind CSS, featuring an AI terminal assistant.",
  year: "2025",
  stack: [
    "React 19",
    "Vite",
    "Tailwind CSS",
    "GSAP + ScrollTrigger",
    "Lenis (Smooth Scroll)",
    "React Router"
  ],
  features: [
    "Premium animations: Driven by GSAP and ScrollTrigger for high-fidelity element entry transitions.",
    "AI Terminal Chat: Interactive developer terminal shell offering command navigation (help, ls, cat <slug>) and Cerebras LLM chat.",
    "Preloader experience: Customized preloader presenting profile names and animations before rendering content.",
    "GitHub Integration: Displays active contributions and coding statistics dynamically.",
    "Fully Responsive: Mapped layout grid for desktop, tablet, and mobile screens."
  ],
  impact: [
    "Serves as an interactive hub for all project work, experiences, and technical skills.",
    "Engages tech-focused visitors by offering a command-line interface directly on the portfolio.",
    "Ensures lightning-fast loading speeds using Vite build bundling and lazy component rendering."
  ],
  links: {
    repo: "https://github.com/abday-wong/webpro",
  },
};

export default function WebPortfolioDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
