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
    slug: "alphecci",
    title: "Alphecci",
    category: "Neomorphic Product Studio",
    color: "bg-amber-400",
    img: "/alphecci.png",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
