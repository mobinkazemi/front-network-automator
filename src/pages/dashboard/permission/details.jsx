import { Helmet } from "react-helmet-async";

import { PermissionDetailsView } from "@/sections/permission/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Permission details - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <PermissionDetailsView />
    </>
  );
}
