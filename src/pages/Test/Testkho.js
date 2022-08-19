import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Form, Checkbox } from "antd";
import TestPick from "./Testpick";
import Address from "../../compoments/GlobalStyles/Address";
import Contact from "../../compoments/GlobalStyles/Contact";
import Phone from "../../compoments/GlobalStyles/Phone";
import Name from "../../compoments/GlobalStyles/Name";
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
          <Name />

          <Phone />

          <Contact />

          <Address />

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
