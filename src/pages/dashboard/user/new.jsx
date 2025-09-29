import { Helmet } from "react-helmet-async";

import { UserCreateView } from "@/sections/user/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Create a new user - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <UserCreateView />
    </>
  );
}
