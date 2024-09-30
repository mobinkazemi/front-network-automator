import apiClient from "../../../../configs/axios.config";

interface IResponse {
  result: boolean;
  message: string;
  token?: string;
}
export const loginUser = async (values: any): Promise<IResponse> => {
  let res;
  try {
    res = await apiClient.post("/auth/login", values);
    return {
      result: true,
      message: res?.data?.message,
      token: res?.data?.data?.token,
    };
  } catch (error) {
    return { result: false, message: (error as any)?.response?.data?.detail };
  }
};
