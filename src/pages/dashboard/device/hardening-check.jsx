import { Helmet } from "react-helmet-async";

import { DeviceHardeningCheckView } from "@/sections/device/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Device hardening check - ${
          import.meta.env.VITE_APP_NAME
        }`}</title>
      </Helmet>

      <DeviceHardeningCheckView />
    </>
  );
}
