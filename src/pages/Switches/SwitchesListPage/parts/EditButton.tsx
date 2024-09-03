import { Button, Flex } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTES_ENUM } from "../../../../shared/enums/routes.enum";

interface IProps {
  switchId: number;
}
export const EditButton: React.FC<IProps> = ({ switchId }: IProps) => {
  const navigator = useNavigate();

  return (
    <Flex wrap gap="small">
      <Button
        type="primary"
        onClick={() =>
          navigator(
            ROUTES_ENUM.SWITCHES_UPDATE.replace(":switchId", String(switchId))
          )
        }
        icon={<EditOutlined />}
      >
        ویرایش
      </Button>
    </Flex>
  );
};
