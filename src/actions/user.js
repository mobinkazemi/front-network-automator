import { toast } from "sonner";
import { useNavigate, useSearchParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";

import { paginated, login, register, me, logout } from "@/services/user";
import queryString from "query-string";

// ----------------------------------------------------------------------

export const useUsersQuery = () => {
  const [searchParams] = useSearchParams();
  const query = queryString.parse(searchParams.toString());

  const { data, isPending } = useQuery({
    queryKey: ["users", query],
    queryFn: () => paginated(searchParams.toString()),
  });

  return {
    users: data,
    usersLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      // localStorage.setItem("token", data.token);
      // localStorage.setItem("refreshToken", data.refreshToken);

      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.response.data.detail, {
        position: "top-right",
      });
    },
  });

  return {
    mutate,
    loginLoading: isPending,
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

// ----------------------------------------------------------------------

export const useMeQuery = () => {
  const { data, isPending, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: me,
  });

  return {
    me: data,
    isSuccess,
    meLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useLogout = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");

      navigate("/auth/sign-in");
    },
  });

  return {
    logout: mutate,
    logoutLoading: isPending,
  };
};
