import { Helmet } from "react-helmet-async";

import { DeviceHardeningResultView } from "@/sections/device/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Device hardening result - ${
          import.meta.env.VITE_APP_NAME
        }`}</title>
      </Helmet>

      <DeviceHardeningResultView />
    </>
  );
}
