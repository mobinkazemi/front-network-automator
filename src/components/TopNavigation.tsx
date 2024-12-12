import React, { useState } from "react";
import Icon, { CodepenCircleFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES_ENUM } from "../shared/enums/routes.enum";

type MenuItem = Required<MenuProps>["items"][number];
enum NavKeys {
  HOME_PAGE = "HOME PAGE",

  SWITCHES = "SWITCHES",
  SWITCHES_LIST = "SWITCHES LIST",
  SWITCHES_CREATE = "SWITCHES CREATE",

  ROUTERS = "ROUTERS",
}
const items: MenuItem[] = [
  {
    label: "صفحه اصلی",
    key: ROUTES_ENUM.HOME,
    icon: (
      <Icon
        component={() => (
          <img style={{ width: "60px" }} src="/douranLogo.png" />
        )}
      />
    ),
  },
  {
    label: "تجهیزات",
    key: ROUTES_ENUM.__SWITCHES__,
    icon: <CodepenCircleFilled />,
    children: [
      {
        type: "group",
        label: "سوییچ ها",
        children: [
          { label: "لیست", key: ROUTES_ENUM.SWITCHES_LIST },
          { label: "ایجاد", key: ROUTES_ENUM.SWITCHES_CREATE },
        ],
      },
      {
        label: "روتر ها",
        key: NavKeys.ROUTERS,
        icon: <CodepenCircleFilled />,
        disabled: true,
      },
    ],
  },
  {
    label: "مدیریت هاردنینگ",
    key: ROUTES_ENUM.__CIS__,
    icon: <CodepenCircleFilled />,
    children: [
      {
        type: "group",
        label: "سی‌ آی‌ اس",
        children: [
          { label: "لیست", key: ROUTES_ENUM.CIS_LIST },
          { label: "ایجاد", key: ROUTES_ENUM.CIS_CREATE },
        ],
      },
      {
        type: "group",
        label: "دسته بندی",
        children: [
          { label: "لیست", key: ROUTES_ENUM.CATEGORY_LIST },
          { label: "ایجاد", key: ROUTES_ENUM.CATEGORY_CREATE },
        ],
      },
      {
        type: "group",
        label: "هاردنینگ",
        children: [
          { label: "لیست", key: ROUTES_ENUM.HARDENING_LIST },
          { label: "ایجاد", key: ROUTES_ENUM.HARDENING_CREATE },
        ],
      },
    ],
  },
];

const TopNavigation: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const navigator = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);

    switch (e.key) {
      case ROUTES_ENUM.HOME:
        navigator(ROUTES_ENUM.HOME);
        break;

      case ROUTES_ENUM.SWITCHES_LIST:
        navigator(ROUTES_ENUM.SWITCHES_LIST);
        break;

      case ROUTES_ENUM.SWITCHES_CREATE:
        navigator(ROUTES_ENUM.SWITCHES_CREATE);
        break;
    }
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ marginBottom: "20px", borderBottom: "2px solid lightgray" }}
      />
    </>
  );
};

export default TopNavigation;

// const items: MenuItem[] = [
//   {
//     label: "Navigation One",
//     key: "mail",
//     icon: <MailOutlined />,
//   },
//   {
//     label: "Navigation Two",
//     key: "app",
//     icon: <AppstoreOutlined />,
//     disabled: true,
//   },
//   {
//     label: "Navigation Three - Submenu",
//     key: "SubMenu",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           { label: "Option 1", key: "setting:1" },
//           { label: "Option 2", key: "setting:2" },
//         ],
//       },
//       {
//         type: "group",
//         label: "Item 2",
//         children: [
//           { label: "Option 3", key: "setting:3" },
//           { label: "Option 4", key: "setting:4" },
//         ],
//       },
//     ],
//   },
//   {
//     key: "alipay",
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//   },
// ];

// const App: React.FC = () => {
//   const [current, setCurrent] = useState("mail");

//   const onClick: MenuProps["onClick"] = (e) => {
//     console.log("click ", e);
//     setCurrent(e.key);
//   };

//   return (
//     <Menu
//       onClick={onClick}
//       selectedKeys={[current]}
//       mode="horizontal"
//       items={items}
//     />
//   );
// };

// export default App;
