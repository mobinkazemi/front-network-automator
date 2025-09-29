import { useRoutes } from "react-router";

import { NotFound } from "@/pages/404";

import { dashboardRoutes } from "./dashboard";

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([...dashboardRoutes, { path: "*", element: <NotFound /> }]);
}
