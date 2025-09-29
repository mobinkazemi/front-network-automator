import { useQuery } from "@tanstack/react-query";

import { all } from "@/services/role";

// ----------------------------------------------------------------------

export const useRolesQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["roles"],
    queryFn: all,
  });

  return {
    roles: data,
    rolesLoading: isPending,
  };
};
