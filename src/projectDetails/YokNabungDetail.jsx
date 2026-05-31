import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "YokNabung",
  category: "Flutter Savings Tracker",
  heroImg: "/yoknabung.png",
  tagline:
    "A Neo-Brutalist savings tracker app built with Flutter. Features goal tracking, milestone roadmaps, streak system, gamification with EXP & levels, daily reminders, and beautiful dark/light mode.",
  year: "2025",
  stack: [
    "Flutter",
    "Dart",
    "Provider (State Management)",
    "SharedPreferences (Local Persistence)",
    "fl_chart (Interactive Charts)",
    "Local Notifications",
    "Neo-Brutalist UI Design"
  ],
  features: [
    "Goal tracking: Add, update, and manage your savings goals with interactive progress metrics.",
    "Milestone roadmaps: Track intermediate savings milestones with a visual pathway.",
    "Gamified experience: Earn EXP and increase your developer-style level as you log savings.",
    "Streak system: Gamified saving streaks that unlock custom badge tiers (e.g. 10, 30, 50, 100 days) with custom status titles.",
    "Daily reminders: Scheduled local notifications reminding you to keep up your savings streak.",
    "Neo-Brutalist design: A striking layout style utilizing vibrant colors, strong borders, and modern fonts."
  ],
  impact: [
    "Encourages consistent saving habits by combining game mechanics (levels, XP) with everyday finance tracking.",
    "Ensures full user privacy by keeping all transaction logs stored locally on the device (Local-First).",
    "Provides a clean, beautiful, and fluid mobile experience without any ads or cluttered menus."
  ],
  links: {
    repo: "https://github.com/abday-wong/yoknabung",
  },
};

export default function YokNabungDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
