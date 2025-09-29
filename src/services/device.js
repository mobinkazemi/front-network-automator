import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

export const paginated = async () => {
  const response = await axiosInstance.get("/devices/list");

  return response.data;
};

// ----------------------------------------------------------------------

export const fetchAssets = async (deviceId) => {
  const response = await axiosInstance.get(`/devices/assetList/${deviceId}`);

  return response.data;
};

// ----------------------------------------------------------------------

export const fetchCis = async () => {
  const response = await axiosInstance.get("/cis/list");

  return response.data;
};

// ----------------------------------------------------------------------

export const fetchHistory = async (deviceId) => {
  const response = await axiosInstance.get(
    `/hardeningResults/history/${deviceId}`
  );

  return response.data;
};

// ----------------------------------------------------------------------

export const fetchStatistics = async (version) => {
  const response = await axiosInstance.get(
    `/hardeningResults/statistics/${version}`
  );

  return response.data;
};

// ----------------------------------------------------------------------

export const fetchResults = async (cisId) => {
  const response = await axiosInstance.get(
    `/hardening/hardening_check_list/${cisId}`
  );

  return response.data;
};
