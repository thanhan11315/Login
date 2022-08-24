import { Layout } from "antd";
import React from "react";
import Navbar from "./Navbar/Navbar.js";
import "./index.css";
const { Content, Footer } = Layout;

const DefaultLayout = ({ children }) => {
  // const LogOut = () => {
  //   console.log("1");
  //   localStorage.setItem("dzzshasddf", "0");
  // };
  return (
    <>
      <Layout>
        <Navbar />
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default DefaultLayout;
