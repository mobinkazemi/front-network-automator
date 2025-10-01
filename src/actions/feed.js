import { useQuery } from "@tanstack/react-query";

import { paginated } from "@/services/feed";

// ----------------------------------------------------------------------

export const useFeedsQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["feeds"],
    queryFn: paginated,
  });

  return {
    feeds: data,
    feedsLoading: isPending,
  };
};
