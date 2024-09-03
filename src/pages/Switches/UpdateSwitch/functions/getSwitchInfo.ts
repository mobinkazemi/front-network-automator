import { AxiosResponse } from "axios";
import apiClient from "../../../../configs/axios.config";
import { ISwitch } from "../../interface";

export const getSwitchInfo = async (switchId: number) => {
  return await apiClient
    .get(`/switches/info/${switchId}`)
    .then((axiosData: AxiosResponse<ISwitch>) => {
      return axiosData.data;
    });
};
