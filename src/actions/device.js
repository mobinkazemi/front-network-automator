import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import {
  paginated,
  get,
  loadAssets,
  fetchAssets,
  fetchCis,
  fetchHistory,
  fetchStatistics,
  fetchHardeningResult,
} from "@/services/device";

// ----------------------------------------------------------------------

export const useDevicesQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["devices"],
    queryFn: paginated,
  });

  return {
    devices: data,
    devicesLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useDeviceQuery = () => {
  const { deviceId } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["device", deviceId],
    queryFn: () => get(deviceId),
  });

  return {
    device: data,
    deviceLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useLoadAssetsQuery = (deviceId) => {
  const { isFetching } = useQuery({
    queryKey: ["load-assets", deviceId],
    queryFn: () => loadAssets(deviceId),
    enabled: !!deviceId,
  });

  return {
    assetsFetching: isFetching,
  };
};

// ----------------------------------------------------------------------

export const useAssetsQuery = () => {
  const { deviceId } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["assets", deviceId],
    queryFn: () => fetchAssets(deviceId),
  });

  return {
    assets: data,
    assetsLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useCisQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["cis"],
    queryFn: fetchCis,
  });

  return {
    cis: data,
    cisLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useHistoryQuery = () => {
  const { deviceId } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["history", deviceId],
    queryFn: () => fetchHistory(deviceId),
  });

  return {
    history: data,
    historyLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useStatisticsQuery = () => {
  const { version } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["statistics", version],
    queryFn: () => fetchStatistics(version),
  });

  return {
    statistics: data,
    statisticsLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useHardeningResultQuery = () => {
  const { version } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["hardening-result", version],
    queryFn: () => fetchHardeningResult(version),
  });

  return {
    hardeningResult: data,
    hardeningResultLoading: isPending,
  };
};
