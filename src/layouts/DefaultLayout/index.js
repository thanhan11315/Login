// import MakeFoodter from "./Footer";
// import MakeHearder from "./Hearder";
// import MakeSidebar from "./Sidebar";

import "./index.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ExpandOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const { Header, Sider, Content, Footer } = Layout;

function DefaultLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const handleLogout = () => {
    localStorage.setItem("dzzshasddf", JSON.stringify("0"));
    console.log("0");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/page1">Page1</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link to="/page2">Page2</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <Link to="/page3">Page3</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          trigger={null}
          className="Header"
          style={{ padding: 0 }}
          theme="dark"
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <VideoCameraOutlined />,
                label: <Link to="/page1">Page2</Link>,
              },
              {
                key: "2",
                icon: <ExpandOutlined />,
                label: <Link to="/page2">Tạo Đơn Hàng</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link to="/page3">Page3</Link>,
              },
              {
                key: "0",
                icon: <BankOutlined />,
                label: (
                  <Link to="/" onClick={() => handleLogout()}>
                    Log Out
                  </Link>
                ),
              },
            ]}
          />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;
