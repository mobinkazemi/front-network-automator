import { Helmet } from "react-helmet-async";

import { OverviewView } from "@/sections/overview/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Dashboard - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <OverviewView />
    </>
  );
}
