import { Helmet } from "react-helmet-async";

import { SignInView } from "@/sections/auth/view";

// ----------------------------------------------------------------------

const Page = () => {
  return (
    <>
      <Helmet>
        <title>{`Sign in - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <SignInView />
    </>
  );
};

export default Page;
