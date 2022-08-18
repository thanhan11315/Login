import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Form, Input, Checkbox } from "antd";
import TestPick from "./Testpick";
const App = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (value) => {
    console.log(value);
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        +
      </Button>
      <Modal
        visible={visible}
        title="Tạo Kho Hàng"
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Đóng
          </Button>,
        ]}
      >
        <Form name="register" onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name="name"
            label="Tên kho"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
              {
                type: "string",
                min: 10,
                max: 10,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="lienlac"
            label="Liên Lạc"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="Diachi"
            label="Địa Chỉ Chi Tiết"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <TestPick />

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Mặc định</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              className="Register-button"
              type="primary"
              htmlType="submit"
            >
              Tạo Kho
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
