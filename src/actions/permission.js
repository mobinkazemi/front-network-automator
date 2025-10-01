import { useQuery } from "@tanstack/react-query";

import { paginated } from "@/services/permission";

// ----------------------------------------------------------------------

export const usePermissionCategoriesQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["permission-categories"],
    queryFn: paginated,
  });

  return {
    permissionCategories: data,
    permissionCategoriesLoading: isPending,
  };
};
