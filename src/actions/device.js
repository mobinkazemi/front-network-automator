import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import {
  paginated,
  fetchAssets,
  fetchCis,
  fetchHistory,
  fetchStatistics,
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
    select: ({ data }) => {
      const versions = Object.keys(data.grouped).map((version) => ({
        version,
        date: data.grouped[version][0].checkedAt,
      }));

      return [
        {
          cis: data.cis.name,
          versions,
        },
      ];
    },
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
    select: ({ data }) => data,
  });

  return {
    statistics: data,
    statisticsLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useResultQuery = () => {
  const { version } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["statistics", version],
    queryFn: () => fetchStatistics(version),
    select: ({ data }) => data,
  });

  return {
    statistics: data,
    statisticsLoading: isPending,
  };
};
