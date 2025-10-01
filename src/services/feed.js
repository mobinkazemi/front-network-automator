import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

export const paginated = async () => {
  const response = await axiosInstance.get("/devices/firewall/feed/list");

  return response.data;
};

// ----------------------------------------------------------------------

export const create = async (data) => {
  const response = await axiosInstance.post(
    "/devices/firewall/feed/create",
    data,
  );

  return response.data;
};

// ----------------------------------------------------------------------

export const getFileNames = async () => {
  const response = await axiosInstance.get("/devices/firewall/feed/file-names");

  return response.data;
};
