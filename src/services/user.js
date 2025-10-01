import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

export const paginated = async () => {
  const response = await axiosInstance.get("/user/admin/list");

  return response.data;
};

// ----------------------------------------------------------------------

export const login = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);

  return response.data;
};

// ----------------------------------------------------------------------

export const register = async () => {
  const response = await axiosInstance.post("/auth/register");

  return response.data;
};

// ----------------------------------------------------------------------

export const me = async () => {
  const response = await axiosInstance.get("/user/myself");

  return response.data;
};

// ----------------------------------------------------------------------

export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");

  return response.data;
};
