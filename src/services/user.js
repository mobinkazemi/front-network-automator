import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

export const paginated = async () => {
  const response = await axiosInstance.get("/user/admin/list");

  return response.data;
};

// ----------------------------------------------------------------------

export const register = async () => {
  const response = await axiosInstance.post("/auth/register");

  return response.data;
};
