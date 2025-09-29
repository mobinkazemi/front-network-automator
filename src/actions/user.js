import { useMutation, useQuery } from "@tanstack/react-query";

import { paginated, register } from "@/services/user";

// ----------------------------------------------------------------------

export const useUsersQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: paginated,
  });

  return {
    users: data,
    usersLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useRegisterMutation = () => {
  const { data, isPending } = useMutation({
    queryFn: register,
  });

  return {
    users: data,
    usersLoading: isPending,
  };
};
