import { Navigate, useRoutes } from "react-router";

import { authRoutes } from "./auth";
import { dashboardRoutes } from "./dashboard";

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    { index: true, element: <Navigate to="auth/sign-in" /> },
    ...authRoutes,
    ...dashboardRoutes,
  ]);
}
