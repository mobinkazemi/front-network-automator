import apiClient from "../../../../configs/axios.config";

interface IResponse {
  result: boolean;
  message: string;
}
export const registerUser = async (values: any): Promise<IResponse> => {
  let res;
  try {
    res = await apiClient.post("/auth/register", values);
    return {
      result: true,
      message: res?.data?.message,
    };
  } catch (error) {
    return { result: false, message: (error as any)?.response?.data?.detail };
  }
};
