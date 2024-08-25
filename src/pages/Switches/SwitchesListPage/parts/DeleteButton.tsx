import { Button, Flex } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import apiClient from "../../../../configs/axios.config";

interface IProps {
  switchId: number;
  setDeletedSwitch: Function;
  deletedSwitch: number[];
}
/**
 * DeleteButton component
 *
 * This component represents a button which can be used to delete a switch.
 *
 * @param {IProps} data - The props for the DeleteButton component.
 * @param {number} data.switchId - The ID of the switch to be deleted.
 * @returns {ReactElement} The DeleteButton component.
 */
export const DeleteButton: React.FC<IProps> = ({
  switchId,
  setDeletedSwitch,
  deletedSwitch,
}: IProps): React.ReactElement => (
  <Flex wrap gap="small">
    <Button
      onClick={async () => {
        setDeletedSwitch([...deletedSwitch, switchId]);
        await apiClient.delete("/switches/delete/" + switchId);
      }}
      type="primary"
      danger
      icon={<DeleteOutlined />}
    >
      حذف
    </Button>
  </Flex>
);
