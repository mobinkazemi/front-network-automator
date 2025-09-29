import { useRoutes } from "react-router";

import { dashboardRoutes } from "./dashboard";
import { NotFound } from "src/pages/404";

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([...dashboardRoutes, { path: "*", element: <NotFound /> }]);
}
