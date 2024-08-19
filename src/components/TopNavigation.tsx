import React, { useState } from "react";
import { CodepenCircleFilled, HomeOutlined } from "@ant-design/icons";
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
    icon: <HomeOutlined />,
  },
  {
    label: "سوییچ ها",
    key: ROUTES_ENUM.__SWITCHES__,
    icon: <CodepenCircleFilled />,
    children: [
      { label: "لیست سوییچ ها", key: ROUTES_ENUM.SWITCHES_LIST },
      { label: "ایجاد سوییچ جدید", key: ROUTES_ENUM.SWITCHES_CREATE },
    ],
  },
  {
    label: "روتر ها",
    key: NavKeys.ROUTERS,
    icon: <CodepenCircleFilled />,
    disabled: true,
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
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default TopNavigation;
