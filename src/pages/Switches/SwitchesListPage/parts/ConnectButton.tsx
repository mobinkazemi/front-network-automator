import { Button, Flex } from "antd";
import { CodeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTES_ENUM } from "../../../../shared/enums/routes.enum";
import { ISwitch } from "../../../../shared/interfaces/switch.interface";

interface IProps {
  disable: boolean;
  switch: ISwitch;
}
export const ConnectButton: React.FC<IProps> = (data: IProps) => {
  const navigator = useNavigate();

  if (data.disable) {
    return (
      <Flex wrap gap="small">
        <Button
          disabled
          style={{ backgroundColor: "lightgray" }}
          type="primary"
          icon={<CodeOutlined />}
        >
          اتصال
        </Button>
      </Flex>
    );
  } else
    return (
      <Flex wrap gap="small">
        <Button
          style={{ backgroundColor: "green" }}
          type="primary"
          icon={<CodeOutlined />}
          onClick={() => {
            navigator(
              ROUTES_ENUM.SWITCHES_TERMINAL.replace(
                ":switchId",
                String(data.switch.id)
              )
            );
          }}
        >
          اتصال
        </Button>
      </Flex>
    );
};
