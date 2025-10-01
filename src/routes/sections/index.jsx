import { useRoutes } from "react-router";

import { authRoutes } from "./auth";
import { dashboardRoutes } from "./dashboard";

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([...authRoutes, ...dashboardRoutes]);
}
