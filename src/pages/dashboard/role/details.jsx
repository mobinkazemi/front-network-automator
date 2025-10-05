import { Helmet } from "react-helmet-async";

import { RoleDetailsView } from "@/sections/role/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Role details - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <RoleDetailsView />
    </>
  );
}
