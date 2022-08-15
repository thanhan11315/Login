import "./Register.css";
import TabTitle from "../TapTitle";
import SuperShipLogo from "../../assets/images/SuperShip-Logo.png";
import Page3 from "../LoginSucsess/Page3";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Select } from "antd";
import React from "react";
import { message } from "antd";
const { Option } = Select;

const Register = () => {
  
  TabTitle("Register");

  const success = () => {
    message.success({
      content: 'Bạn đã đăng kí thành công',
      className: 'custom-class',
      style: {
        marginTop: '40vh',
      },
    });
  };

  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    success()
    setTimeout(() => navigate("/"), 3000);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <div className="Register-align-box">
        <div className="box">
          <div className="img">
            <img
              src={SuperShipLogo}
              alt="img not load"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <h2 className="title">Register</h2>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "84",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="company"
              label="Company"
              rules={[
                {
                  required: true,
                  message: "Please input your company!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Page3 />

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="full name"
              label="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please input your company!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
            >
              <Checkbox>
                I have read the <Link to="/Register">agreement</Link>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                className="Register-button"
                type="primary"
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <h6 className="Login">
            <Link to="/" className="link">
              Login
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Register;
