import apiClient from "../../../../configs/axios.config";
import { ISwitch } from "../../interface";

interface IResponse {
  result: boolean;
  message: string;
}
export const updateSwitch = async (values: ISwitch): Promise<IResponse> => {
  try {
    let res = await apiClient.patch("/switches/update", values);

    return { result: true, message: res?.data?.message };
  } catch (error) {
    return { result: false, message: (error as any)?.response?.data?.detail };
  }
};
