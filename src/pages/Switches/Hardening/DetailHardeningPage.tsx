import React, { useEffect, useState } from "react";
import { message, Table } from "antd";
import TopNavigation from "../../../components/TopNavigation";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import apiClient from "../../../configs/axios.config";
import { useParams } from "react-router-dom";
import { BACKEND_ROUTES } from "../../../shared/enums/backend.routes.enum";
interface DataType {
  id: React.Key;
  name: string;
  ip: string;
  model: string;
  series: string;
  os: string;
  status: boolean | null;
}

const HardeningPage: React.FC = () => {
  const [switchesListData, setSwitchesListData] = useState<DataType[]>([]);
  const { switchId } = useParams();

  const columns = [
    {
      title: "عنوان",
      dataIndex: "title",
    },
    {
      title: "وضعیت",
      dataIndex: "status",
      render: (status: boolean | null) =>
        status === null ? (
          <Tag icon={<SyncOutlined spin />} color="processing">
            درحال بررسی
          </Tag>
        ) : status ? (
          <Tag icon={<CheckCircleOutlined />} color="success">
            امن
          </Tag>
        ) : (
          <Tag icon={<CloseCircleOutlined />} color="error">
            غیر امن
          </Tag>
        ),
    },
  ];
  useEffect(() => {
    apiClient
      .get(
        BACKEND_ROUTES.SWITCHES_HARDENING.replace(
          ":switchId",
          switchId as string
        )
      )
      .then(({ data }) => {
        console.log("here", data.data[2].status);
        setSwitchesListData(
          data.data.map((sw: any) => ({ ...sw, status: sw.status }))
        );
      })
      .catch((err) => {
        message.error((err as any).response.data.detail);
      });
  }, []);

  return (
    <>
      <TopNavigation />
      <Table
        columns={columns}
        dataSource={switchesListData.sort(
          (a, b) => (a.status === true ? 1 : 0) - (b.status === true ? 1 : 0)
        )}
        rowKey="id"
      />
    </>
  );
};

export default HardeningPage;
