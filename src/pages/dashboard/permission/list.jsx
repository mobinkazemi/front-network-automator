import { Helmet } from "react-helmet-async";

import { PermissionListView } from "@/sections/permission/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Permission list - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <PermissionListView />
    </>
  );
}
