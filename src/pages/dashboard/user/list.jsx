import { Helmet } from "react-helmet-async";

import { UserListView } from "@/sections/user/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`User list - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <UserListView />
    </>
  );
}
