import { Outlet } from "react-router";
import { lazy } from "react";
import SignInPage from "@/pages/auth/sign-in";

import { ValidateQueryParams } from "../components/validate-query-params";

// ----------------------------------------------------------------------

// auth
const ForgotPasswordPage = lazy(() => import("@/pages/auth/forgot-password"));

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: "auth",
    element: (
      <ValidateQueryParams allowNone>
        <Outlet />
      </ValidateQueryParams>
    ),
    children: [
      { path: "sign-in", element: <SignInPage /> },
      { path: "reset-password", element: <ForgotPasswordPage /> },
    ],
  },
];
