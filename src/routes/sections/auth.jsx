import SignInPage from "@/pages/auth/sign-in";
import { lazy } from "react";

// ----------------------------------------------------------------------

// auth
const ForgotPasswordPage = lazy(() => import("@/pages/auth/forgot-password"));

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: "auth",
    children: [
      { path: "sign-in", element: <SignInPage /> },
      { path: "reset-password", element: <ForgotPasswordPage /> },
    ],
  },
];
