import { Button, Flex } from "antd";
import { EditOutlined } from "@ant-design/icons";

export const EditButton: React.FC = () => (
  <Flex wrap gap="small">
    <Button type="primary" icon={<EditOutlined />}>
      ویرایش
    </Button>
  </Flex>
);
