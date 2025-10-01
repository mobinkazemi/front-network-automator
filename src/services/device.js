import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

export const paginated = async () => {
  const response = await axiosInstance.get("/devices/list");

  return response.data;
};

// ----------------------------------------------------------------------

export const get = async (deviceId) => {
  const response = await axiosInstance.get(`/devices/info/${deviceId}`);

  return response.data.data;
};

// ----------------------------------------------------------------------

export const loadAssets = async (deviceId) => {
  const response = await axiosInstance.get(`/devices/fetchAssets/${deviceId}`);

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

  return response.data.data;
};

// ----------------------------------------------------------------------

export const fetchHistory = async (deviceId) => {
  const response = await axiosInstance.get(
    `/hardeningResults/history/${deviceId}`,
  );

  return response.data.data;
};

// ----------------------------------------------------------------------

export const fetchStatistics = async (version) => {
  const response = await axiosInstance.get(
    `/hardeningResults/statistics/${version}`,
  );

  return response.data.data;
};

// ----------------------------------------------------------------------

export const fetchHardeningResult = async (version) => {
  const response = await axiosInstance.get(
    `/hardening/hardening_result_list/${version}`,
  );

  return response.data.data;
};
