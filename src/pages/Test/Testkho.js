import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Form, Checkbox } from "antd";
import Test from "./Test";
import Address from "../../compoments/GlobalStyles/Address";
import Contact from "../../compoments/GlobalStyles/Contact";
import Phone from "../../compoments/GlobalStyles/Phone";
import Name from "../../compoments/GlobalStyles/Name";
const App = () => {
  const [visible, setVisible] = useState(false);
  const [district, setdistrict] = useState("");
  const [province, setprovince] = useState("");
  const [commune, setcommune] = useState("");

  const getaddress = (address) => {
    console.log(address);
    setdistrict(address.district);
    setprovince(address.province);
    setcommune(address.name);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (value) => {
    console.log(value);
    const data = {
      name: value.name,
      phone: value.phone,
      contact: value.contact,
      address: value.address,
      primary: value.remember ? 1 : 0,
      province: province,
      district: district,
      commune: commune,
    };
    console.log(data);
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

          <Test callback={getaddress} />

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
