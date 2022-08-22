import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import "./index.css";
const { Header, Content, Footer } = Layout;

const DefaultLayout = ({ children }) => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Link to="/Page2">Page2</Link>
      </Menu>
    </Header>
    <Content>
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default DefaultLayout;
