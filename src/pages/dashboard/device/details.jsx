import { Helmet } from "react-helmet-async";

import { DeviceDetailsView } from "@/sections/device/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Device details - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <DeviceDetailsView />
    </>
  );
}
