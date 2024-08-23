import apiClient from "../../../../configs/axios.config";

interface ICommand {
  command: string;
  id: number;
}
interface ICommandRes {
  message: string;
  result: boolean;
  data?: { stdout: string; stderr: string };
}
export const sendSwitchCommand = async (
  data: ICommand
): Promise<ICommandRes> => {
  let result;
  try {
    result = await apiClient.post("/switches/execCommand", {
      data: data.command,
      switchId: data.id,
    });

    console.log(111111, result);
    return { ...(result.data as ICommandRes), result: true };
  } catch (error) {
    console.log(222222, result);

    return { message: (error as any)?.response?.data?.detail, result: false };
  }
};
