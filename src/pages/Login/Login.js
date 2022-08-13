import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useEffect } from "react";
import { Row, Col } from "antd";
import Banner from "../../assets/images/Banner-login.png";
import SuperShipLogo from "../../assets/images/SuperShip-Logo.png";
import TabTitle from "../TapTitle";
import React from "react";

const Login = () => {
  TabTitle("Login");

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const adminPassword = values.password;
    const adminUsername = values.username;
    if (adminPassword === "123456" && adminUsername === "thanhan") {
      navigate("/LoginSuccess");
      localStorage.setItem("dzzshasddf", JSON.stringify("zndkeadeeqwrmf"));
    } else if (adminPassword !== "123456" && adminUsername === "thanhan") {
      alert("bạn nhập sai Password");
    } else if (adminPassword === "123456" && adminUsername !== "thanhan") {
      alert("bạn nhập sai Username");
    } else if (adminPassword !== "123456" && adminUsername !== "thanhan") {
      alert("bạn nhập sai Passwork và Username");
    }
  };

  useEffect(() => {
    const getLocalUsername = JSON.parse(localStorage.getItem("dzzshasddf"));
    console.log(getLocalUsername);
    if (getLocalUsername === "zndkeadeeqwrmf") {
      navigate("/LoginSuccess");
    }
  }, []);

  return (
    <>
      <Row>
        <Col lg={16} sm={24} xs={24}>
          <div className="align-box-login">
            <div className="wrapper-login">
              <div className="boxtitle-logo">
                <div className="">
                  <h4 className="title">Login</h4>
                  <p className="p-title">SuperShip Points.</p>
                </div>
                <img
                  src={SuperShipLogo}
                  alt="img not load"
                  style={{ width: "60px", height: "60px", borderRadius: "5px" }}
                />
              </div>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Link className="login-form-forgot" to="/ResetPassword">
                    Forgot password?
                  </Link>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                  <div>
                    Or <Link to="/Register">register now!</Link>
                  </div>
                </Form.Item>
              </Form>
            </div>
            <Link className="hidden" to="/LoginSuccess">
              register now!
            </Link>
          </div>
        </Col>
        <Col lg={8} sm={0} xs={0}>
          <div className="Login-box-item">
            <h4 className="title-item">Biệt Đội Giao Hàng Siêu Đẳng</h4>
            <img src={Banner} alt="img not load" style={{ width: "100%" }} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;