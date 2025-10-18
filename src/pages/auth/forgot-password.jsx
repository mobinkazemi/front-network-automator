import { Helmet } from "react-helmet-async";

import { ForgotPasswordView } from "@/sections/auth/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Forgot password - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <ForgotPasswordView />
    </>
  );
}
