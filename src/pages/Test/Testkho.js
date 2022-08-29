import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Form, Checkbox } from "antd";
import Test from "./Test";
import Address from "../../compoments/GlobalStyles/Address";
import Contact from "../../compoments/GlobalStyles/Contact";
import Phone from "../../compoments/GlobalStyles/Phone";
import Name from "../../compoments/GlobalStyles/Name";
import "./wareHouse.css";
import { message } from "antd";
const App = () => {
  const [visible, setVisible] = useState(false);
  const [district, setdistrict] = useState("");
  const [province, setprovince] = useState("");
  const [commune, setcommune] = useState("");

  const error = () => {
    message.error({
      content: "Vui Lòng Nhập Địa Chỉ",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };

  const getAddress = (address) => {
    console.log(address);
    setdistrict(address.district);
    setprovince(address.province);
    setcommune(address.name);
  };

  const getDistrict = () => {
    console.log("");
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (value) => {
    if (commune) {
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
    } else {
      error();
    }
  };

  return (
    <>
      <div className="boxWareHouse">
        <Button type="primary" onClick={showModal}>
          +
        </Button>
        <Modal
          visible={visible}
          title="Tạo Kho Hàng"
          onCancel={handleCancel}
          footer={[]}
        >
          <Form name="register" onFinish={onFinish} scrollToFirstError>
            <Name />

            <Phone />

            <Contact />

            <Address />

            <div style={{ position: "relative" }}>
              <Test getAddress={getAddress} getDistrict={getDistrict} />
            </div>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Mặc định</Checkbox>
            </Form.Item>

            <Form.Item>
              <div className="boxButton">
                <Button
                  className="Register-button"
                  type="primary"
                  htmlType="submit"
                >
                  Tạo Kho
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default App;
