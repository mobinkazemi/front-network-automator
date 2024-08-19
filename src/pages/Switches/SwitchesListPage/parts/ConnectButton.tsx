import { Button, Flex } from "antd";
import { CodeOutlined } from "@ant-design/icons";

interface IProps {
  disable: boolean;
}
export const ConnectButton: React.FC<IProps> = ({ disable }: IProps) => {
  if (disable) {
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
        >
          اتصال
        </Button>
      </Flex>
    );
};
