import { Button, Flex, message } from "antd";
import {  SyncOutlined } from "@ant-design/icons";
import apiClient from "../../../../configs/axios.config";
import { IBaseBackendResponse } from "../../../../shared/interfaces/base-backend-response.interface";
import { BACKEND_ROUTES } from "../../../../shared/enums/backend.routes.enum";
import { AxiosResponse } from "axios";

interface IProps {
  switchId: number;
}

interface IData {
  portCount: number;
  ios_version: string;
  model: string;
  serial: string;
  mac_address: string;
  hostname: string;
  interface: string;
}

interface IAPIResponse extends IBaseBackendResponse<IData> {}

export const GetAssetsButton: React.FC<IProps> = ({ switchId }: IProps) => {
  const fn = () => {
    apiClient
      .get<IAPIResponse>(
        BACKEND_ROUTES.SWITCHES_GET_ASSETS.replace(":id", String(switchId))
      )
      .then((data: AxiosResponse<IAPIResponse>) => {
        message.success('اطلاعات سوییچ به روز رسانی شد', 1000)
        setTimeout(() => {
          window.location.reload()
        }, 1200);
      })
      .catch((error) => {
        message.error('اطلاعات سوییچ به روز رسانی نشد')

      });
  };
  return (
    <Flex wrap gap="small">
      <Button type="primary" onClick={fn} icon={<SyncOutlined />}>
      </Button>
    </Flex>
  );
};
