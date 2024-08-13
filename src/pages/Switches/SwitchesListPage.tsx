// import React, { useEffect, useState } from "react";
// import { Table } from "antd";
// import type { TableColumnsType, TableProps } from "antd";
// import axios from "axios";
// import TopNavigation from "../../components/TopNavigation";

// type TableRowSelection<T extends object = object> =
//   TableProps<T>["rowSelection"];

// interface DataType {
//   id: React.Key;
//   model: string;
//   ip: string;
// }

// const columns: TableColumnsType<DataType> = [
//   {
//     title: "ID",
//     dataIndex: "id",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//   },

//   {
//     title: "IP",
//     dataIndex: "ip",
//   },
//   {
//     title: "Model",
//     dataIndex: "model",
//   },
//   {
//     title: "Series",
//     dataIndex: "series",
//   },
// ];

// const App: React.FC = () => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
//   const [data, setData] = useState<DataType[]>();

//   useEffect(() => {
//     axios.get("http://localhost:8000/switches/list").then((res) => {
//       setData(res.data.data);
//     });
//   }, []);

//   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
//     console.log("selectedRowKeys changed: ", newSelectedRowKeys);
//     setSelectedRowKeys(newSelectedRowKeys);
//   };

//   const rowSelection: TableRowSelection<DataType> = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//     selections: [
//       Table.SELECTION_ALL,
//       Table.SELECTION_INVERT,
//       Table.SELECTION_NONE,
//       {
//         key: "odd",
//         text: "Select Odd Row",
//         onSelect: (changeableRowKeys) => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return false;
//             }
//             return true;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//       {
//         key: "even",
//         text: "Select Even Row",
//         onSelect: (changeableRowKeys) => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return true;
//             }
//             return false;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <TopNavigation></TopNavigation>

//       <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//     </>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { Button, Flex } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";
import TopNavigation from "../../components/TopNavigation";
const DeleteButton: React.FC = () => (
  <Flex wrap gap="small">
    <Button type="primary" danger icon={<DeleteOutlined />}>
      حذف
    </Button>
  </Flex>
);
const EditButton: React.FC = () => (
  <Flex wrap gap="small">
    <Button type="primary" icon={<EditOutlined />}>
      ویرایش
    </Button>
  </Flex>
);
interface DataType {
  id: React.Key;
  model: string;
  ip: string;
}

const columns: TableProps<DataType>["columns"] = [
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
    title: "اقدامات",
    key: "action",
    render: (_, record) => (
      <Space>
        <DeleteButton></DeleteButton>
        <EditButton></EditButton>
      </Space>
    ),
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<DataType[]>();

  useEffect(() => {
    axios.get("http://localhost:8000/switches/list").then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <>
      <TopNavigation></TopNavigation>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default App;
