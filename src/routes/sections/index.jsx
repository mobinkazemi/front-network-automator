import { useRoutes } from "react-router";

import { dashboardRoutes } from "./dashboard";

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([...dashboardRoutes]);
}
