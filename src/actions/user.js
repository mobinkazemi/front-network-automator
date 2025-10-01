import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";

import { paginated, login, register, me, logout } from "@/services/user";

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

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);

      navigate("/dashboard/device");
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
  const { data, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: me,
  });

  return {
    me: data,
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
