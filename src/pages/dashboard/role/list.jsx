import { Helmet } from "react-helmet-async";

import { RoleListView } from "@/sections/role/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Role list - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <RoleListView />
    </>
  );
}
