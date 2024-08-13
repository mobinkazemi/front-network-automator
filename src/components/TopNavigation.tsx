import React, { useState } from "react";
import { CodepenCircleFilled, HomeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

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
    key: NavKeys.HOME_PAGE,
    icon: <HomeOutlined />,
  },
  {
    label: "سوییچ ها",
    key: NavKeys.SWITCHES,
    icon: <CodepenCircleFilled />,
    children: [
      { label: "لیست سوییچ ها", key: NavKeys.SWITCHES_LIST },
      { label: "ایجاد سوییچ جدید", key: NavKeys.SWITCHES_CREATE },
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
      case NavKeys.HOME_PAGE:
        navigator("/");
        break;

      case NavKeys.SWITCHES_LIST:
        navigator("/switches-list");
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
