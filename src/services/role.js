import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

export const all = async () => {
  const response = await axiosInstance.get("/role/list?list_limit=100");

  return response.data.data;
};
