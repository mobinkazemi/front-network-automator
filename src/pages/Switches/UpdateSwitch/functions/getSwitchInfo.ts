import { AxiosResponse } from "axios";
import apiClient from "../../../../configs/axios.config";
import { ISwitch } from "../../interface";
import { BACKEND_ROUTES } from "../../../../shared/backendRoutes";

const { method, setId } = BACKEND_ROUTES.switch.info;
export const getSwitchInfo = async (switchId: number) => {
  return await apiClient[method](setId!(switchId)).then(
    (axiosData: AxiosResponse<ISwitch>) => {
      return axiosData.data;
    }
  );
};
