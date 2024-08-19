import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import axios from "axios";
import TopNavigation from "../../../components/TopNavigation";
import { DeleteButton } from "./parts/DeleteButton";
import { EditButton } from "./parts/EditButton";
import { ConnectButton } from "./parts/ConnectButton";

interface DataType {
  id: React.Key;
  name: string;
  ip: string;
  model: string;
  series: string;
  connectionStatus: boolean | null;
}

const columns = [
  {
    title: "آی‌دی",
    dataIndex: "id",
  },
  {
    title: "نام",
    dataIndex: "name",
  },
  {
    title: "آدرس آی‌پی",
    dataIndex: "ip",
  },
  {
    title: "مدل",
    dataIndex: "model",
  },
  {
    title: "سری",
    dataIndex: "series",
  },
  {
    title: "وضعیت اتصال",
    dataIndex: "connectionStatus",
    render: (status: boolean | null) =>
      status === null ? (
        <Tag icon={<SyncOutlined spin />} color="processing">
          درحال بررسی
        </Tag>
      ) : status ? (
        <Tag icon={<CheckCircleOutlined />} color="success">
          آماده اتصال
        </Tag>
      ) : (
        <Tag icon={<CloseCircleOutlined />} color="error">
          اتصال ممکن نیست
        </Tag>
      ),
  },
  {
    title: "اقدامات",
    key: "action",
    render: (_: any, record: DataType) => {
      return (
        <Space>
          <DeleteButton />
          <EditButton />
          <ConnectButton disable={!record.connectionStatus}></ConnectButton>
        </Space>
      );
    },
  },
];

interface IStatus {
  id: number;
  result: boolean;
}

const App: React.FC = () => {
  const [switchesListData, setSwitchesListData] = useState<DataType[]>([]);
  const [loadingStatuses, setLoadingStatuses] = useState<boolean>(false);

  useEffect(() => {
    // Fetch the list of switches
    axios.get("http://localhost:8000/switches/list").then(({ data }) => {
      setSwitchesListData(
        data.data.map((sw: any) => ({ ...sw, connectionStatus: null }))
      );
    });
  }, []);

  useEffect(() => {
    // Fetch connection statuses once the list of switches is loaded
    if (switchesListData.length && !loadingStatuses) {
      setLoadingStatuses(true);
      axios
        .get("http://localhost:8000/switches/checkConnectionStatus")
        .then(({ data }) => {
          const statusData = data.data as IStatus[];

          // Update connection statuses
          setSwitchesListData((prevSwitches) =>
            prevSwitches.map((sw) => ({
              ...sw,
              connectionStatus:
                statusData.find((status) => status.id === sw.id)?.result ??
                null,
            }))
          );
          setLoadingStatuses(false);
        });
    }
  }, [switchesListData, loadingStatuses]);

  return (
    <>
      <TopNavigation />
      <Table columns={columns} dataSource={switchesListData} rowKey="id" />
    </>
  );
};

export default App;

import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Flex, Tag } from "antd";
<Flex gap="4px 0" wrap>
  <Tag icon={<CheckCircleOutlined />} color="success">
    success
  </Tag>
  <Tag icon={<SyncOutlined spin />} color="processing">
    processing
  </Tag>
  <Tag icon={<CloseCircleOutlined />} color="error">
    error
  </Tag>
  <Tag icon={<ExclamationCircleOutlined />} color="warning">
    warning
  </Tag>
  <Tag icon={<ClockCircleOutlined />} color="default">
    waiting
  </Tag>
  <Tag icon={<MinusCircleOutlined />} color="default">
    stop
  </Tag>
</Flex>;
