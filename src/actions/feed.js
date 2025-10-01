import { useMutation, useQuery } from "@tanstack/react-query";

import { paginated, create, getFileNames } from "@/services/feed";

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

export const useCreateFeedMutation = () => {
  return useMutation({
    mutationFn: create,
  });
};

// ----------------------------------------------------------------------

export const useFileNamesQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["file-names"],
    queryFn: getFileNames,
  });

  return {
    fileNames: data,
    fileNamesLoading: isPending,
  };
};
