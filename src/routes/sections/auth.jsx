import SignInPage from "@/pages/auth/sign-in";

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: "auth",
    children: [{ path: "sign-in", element: <SignInPage /> }],
  },
];
