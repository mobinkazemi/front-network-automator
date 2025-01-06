import React from "react";
import { Layout, MenuProps } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { ROUTES_ENUM } from "../shared/enums/routes.enum";
import TopNavigation from "./topNavigation/TopNavigation";
import SliderMenu from "./sliderMenu/sliderMenu";
const { Header, Sider, Content, Footer } = Layout;

const BaseLayout: React.FC = () => {
  const navigator = useNavigate();
  const [_, setCurrent] = React.useState<string>(ROUTES_ENUM.HOME);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);

    switch (e.key) {
      case ROUTES_ENUM.HOME:
        navigator(ROUTES_ENUM.HOME);
        break;

      //
      //
      //
      //
      // SWITCHES
      //
      case ROUTES_ENUM.SWITCHES_LIST:
        navigator(ROUTES_ENUM.SWITCHES_LIST);
        break;

      case ROUTES_ENUM.SWITCHES_CREATE:
        navigator(ROUTES_ENUM.SWITCHES_CREATE);
        break;

      //
      //
      //
      //
      // CIS
      //
      case ROUTES_ENUM.CIS_LIST:
        navigator(ROUTES_ENUM.CIS_LIST);
        break;

      case ROUTES_ENUM.CIS_CREATE:
        navigator(ROUTES_ENUM.CIS_CREATE);
        break;

      //
      //
      //
      //
      // CATEGORY
      //
      case ROUTES_ENUM.CATEGORY_CREATE:
        navigator(ROUTES_ENUM.CATEGORY_CREATE);
        break;

      case ROUTES_ENUM.CATEGORY_LIST:
        navigator(ROUTES_ENUM.CATEGORY_LIST);
        break;

      //
      //
      //
      //
      // HARDENING
      //
      case ROUTES_ENUM.HARDENING_CREATE:
        navigator(ROUTES_ENUM.HARDENING_CREATE);
        break;
      case ROUTES_ENUM.HARDENING_LIST:
        navigator(ROUTES_ENUM.HARDENING_LIST);
        break;
      //
      //
      //
      //
      // OPERATING SYSTEM
      //
      case ROUTES_ENUM.OS_LIST:
        navigator(ROUTES_ENUM.OS_LIST);
        break;
    }
  };
  return (
    <Layout style={{ minHeight: "100vh", direction: "rtl" }}>
      {/* Top Navigation */}
      <Header style={{ background: "#FE7E03", color: "white", padding: "0" }}>
        <TopNavigation />
      </Header>

      <Layout>
        {/* Right Sidebar */}
        <Sider
          style={{
            background: "#F5F5F5",
            textAlign: "right",
          }}
          width={256}
        >
          {/* <Menu
            onClick={onClick}
            theme="light"
            mode="vertical"
            items={[
              { label: "صفحه اصلی", key: "home" },
              { label: "تعریف سوییچ جدید", key: ROUTES_ENUM.SWITCHES_CREATE },
            ]}
          /> */}
          <SliderMenu onClick={onClick as any} />
        </Sider>

        {/* Content Area */}
        <Content
          style={{
            margin: "16px",
            padding: "16px",
            background: "#fff",
            borderRadius: "10px",
            border: "2px solid #EFF2F5",
          }}
        >
          <Outlet />
        </Content>
      </Layout>

      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>My App ©2024</Footer>
    </Layout>
  );
};

export default BaseLayout;
