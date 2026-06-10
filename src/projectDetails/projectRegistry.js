import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  yoknabung: lazy(() => import("./YokNabungDetail")),
  "project-alpha": lazy(() => import("./ProjectAlphaDetail")),
  "web-portfolio": lazy(() => import("./WebPortfolioDetail")),
  alphecci: lazy(() => import("./AlphecciDetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
