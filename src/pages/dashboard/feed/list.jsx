import { Helmet } from "react-helmet-async";

import { FeedListView } from "@/sections/feed/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Feed list - ${import.meta.env.VITE_APP_NAME}`}</title>
      </Helmet>

      <FeedListView />
    </>
  );
}