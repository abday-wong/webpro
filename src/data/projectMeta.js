export const PROJECT_META = [
  {
    id: 1,
    slug: "yoknabung",
    title: "YokNabung",
    category: "Flutter Savings Tracker",
    color: "bg-purple-400",
    img: "/yoknabung.png",
  },
  {
    id: 2,
    slug: "project-alpha",
    title: "Project Alpha",
    category: "Mobile Experience (Coming Soon)",
    color: "bg-cyan-400",
    img: "/project_alpha.png",
  },
  {
    id: 3,
    slug: "web-portfolio",
    title: "Web Portfolio",
    category: "Interactive React Portfolio",
    color: "bg-cyan-400",
    img: "/web_portfolio.png",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
