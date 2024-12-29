import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { DeleteButton } from "./parts/DeleteButton";
import { EditButton } from "./parts/EditButton";
import { AxiosResponse } from "axios";
import moment from "jalali-moment";
import { IBaseBackendResponse } from "../../../shared/interfaces/base-backend-response.interface";
import { BACKEND_ROUTES } from "../../../shared/backendRoutes";
import apiClient from "../../../configs/axios.config";
import TopNavigation from "../../../components/TopNavigation";

interface DataType {
  id: React.Key;
  name: string;
  ip: string;
  groups: string;
  os: string;
  clusterNodes: string;
  version: string;
  registerDate: string;
  lastkeepAlive: string;
  status: string;
  synced: string;
}

interface IEachBackendRecord {
  id: React.Key;
  name: string;
  ip: string;
  groups: string;
  os: string;
  clusterNodes: string;
  version: string;
  registerDate: string;
  lastkeepAlive: string;
  status: string;
  synced: string;
}

interface IListResponse extends IBaseBackendResponse<IEachBackendRecord[]> {}

const { url: listUrl, method: listMethod } =
  BACKEND_ROUTES.operatingSystem.list;

const OSListPage: React.FC = () => {
  const [operatingSystemListData, setOperatingSystemListData] = useState<
    IEachBackendRecord[]
  >([]);
  const [deletedOperatingSystem, setDeletedOperatingSystem] = useState<
    number[]
  >([]);

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
      title: "گروه‌ها",
      dataIndex: "groups",
    },
    {
      title: "سیستم عامل",
      dataIndex: "os",
    },
    {
      title: "نود‌های کلاستر ",
      dataIndex: "clusterNodes",
    },
    {
      title: "ورژن",
      dataIndex: "version",
    },
    {
      title: "تاریخ ثبت",
      dataIndex: "registerDate",
    },
    {
      title: "آخرین بررسی",
      dataIndex: "lastkeepAlive",
    },
    {
      title: "وضعیت",
      dataIndex: "status",
    },
    {
      title: "همگام سازی",
      dataIndex: "synced",
    },
    {
      title: "اقدامات",
      key: "action",
      render: (_: any, record: DataType) => {
        return (
          <Space>
            <DeleteButton
              operatingSystemId={record.id as number}
              setDeletionState={setDeletedOperatingSystem}
              deletedOperatingSystem={deletedOperatingSystem}
            />
            <EditButton operatingSystemId={record.id as number} />
          </Space>
        );
      },
    },
  ];
  useEffect(() => {
    apiClient[listMethod](listUrl).then(
      (data: AxiosResponse<IListResponse>) => {
        const setMe = (data.data.data || []).map((el) => {
          return {
            id: el.id,
            name: el.name,
            ip: el.ip,
            groups: el.groups,
            os: el.os,
            clusterNodes: el.clusterNodes,
            version: el.version,
            registerDate: moment(el.registerDate).format("jYYYY/jMM/jDD HH:mm"),
            lastkeepAlive: moment(el.lastkeepAlive).format(
              "jYYYY/jMM/jDD HH:mm"
            ),
            status: el.status,
            synced: el.synced,
          };
        });

        setOperatingSystemListData(setMe as unknown as any);
      }
    );
  }, []);

  return (
    <>
      <TopNavigation />
      <Table
        columns={columns}
        dataSource={operatingSystemListData.filter(
          (item) => deletedOperatingSystem.indexOf(item.id as number) === -1
        )}
        rowKey="id"
      />
    </>
  );
};

export default OSListPage;
