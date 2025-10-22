import { lazy } from "react";
import { Navigate, useRoutes } from "react-router";

import { authRoutes } from "./auth";
import { dashboardRoutes } from "./dashboard";

// ----------------------------------------------------------------------

const Page404 = lazy(() => import('@/pages/error/404'));

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    { index: true, element: <Navigate to="auth/sign-in" /> },
    ...authRoutes,
    ...dashboardRoutes,
    { path: '404', element: <Page404 /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
