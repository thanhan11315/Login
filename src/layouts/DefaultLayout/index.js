import { Link } from "react-router-dom";
import { CopyOutlined, ImportOutlined, BookOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { MenuItem } from "rc-menu";
import React from "react";
import "./index.css";
const { Header, Content, Sider, Footer } = Layout;

const Logout = () => {
  localStorage.setItem("dzzshasddf", "0");
  localStorage.setItem("choose", false);
};

const DefaultLayout = ({ children }) => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <MenuItem>
          <Link to="/Page2">
            <CopyOutlined />
            Tạo Đơn Hàng
          </Link>
        </MenuItem>
        <MenuItem onClick={Logout}>
          <Link to="/">
            <ImportOutlined />
            Đăng Xuất
          </Link>
        </MenuItem>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
        >
          <MenuItem>
            <Link to="/Page2">
              <CopyOutlined /> Tạo Đơn Hàng
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/orderManagement">
              <BookOutlined /> Quản Lý Đơn Hàng
            </Link>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout
        style={{
          padding: "0 24px 24px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  </Layout>
);

export default DefaultLayout;
