import { ExpandOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../assets/images/DcvLogoWhite.png";
import "./index.css";
const { Header, Content, Footer } = Layout;

const DefaultLayout = ({ children }) => {
  // const LogOut = () => {
  //   console.log("1");
  //   localStorage.setItem("dzzshasddf", "0");
  // };
  return (
    <Layout className="boxStyle">
      <Header className="header">
        <div className="logo">
          {" "}
          <div>
            <img src={LogoWhite} alt="img not load" style={{ width: "120%" }} />
          </div>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <ExpandOutlined />,
              label: <Link to="/page2">Tạo Đơn Hàng</Link>,
            },
          ]}
        />
      </Header>
      <Content>
        <Layout
          className="site-layout-background"
          style={{
            padding: "24px 0",
          }}
        >
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
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
};

export default DefaultLayout;
