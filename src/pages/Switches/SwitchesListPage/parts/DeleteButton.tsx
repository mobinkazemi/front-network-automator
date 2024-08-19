import { Button, Flex } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const DeleteButton: React.FC = () => (
  <Flex wrap gap="small">
    <Button type="primary" danger icon={<DeleteOutlined />}>
      حذف
    </Button>
  </Flex>
);
