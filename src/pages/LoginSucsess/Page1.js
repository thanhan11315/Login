import { Select, Form, Button } from "antd";
import React, { useState } from "react";
const { Option } = Select;

const App = () => {
  const cityData = ["HàNội", "HồChíMinh"];
  const districtData = {
    HàNội: ["QuậnBaĐình", "QuậnCầuGiấy", "QuậnĐốngĐa"],
    HồChíMinh: ["Quận1", "Quận10", "Quận2"],
  };
  const wardData = {
    QuậnBaĐình: ["Phường Cống Vị", "Phường Điện Biên", "Phường Cấn Đội Cấn"],
    QuậnCầuGiấy: [
      "Phường Dịch Vọng",
      "Phường Dịch Vọng Hậu",
      "Phường Mai Dịch",
    ],
    QuậnĐốngĐa: ["Phường Láng Thượng", "Phường Nam Đồng"],
    Quận1: ["Phường Bến Nghé", "Phường Bến Thành", "Phường Cầu Kho"],
    Quận10: ["Phường 01", "Phường 02", "Phường 03"],
    Quận2: ["Phường An Khánh"],
  };

  const [districts, setdistricts] = useState([]);
  const [district, setdistrict] = useState('');
  const [wards, setwards] = useState([]);
  const [ward, setward] = useState('');

  const handleCityChange = (value) => {
    setdistricts(districtData[value]);
    // setdistrict(districtData[value][0]);
    setdistrict('')
    setward('')
  };

  const ondistrictChange = (value) => {
    setwards(wardData[value])
    // setward(wardData[value][0])
    setdistrict(value)
    setward('')
  };

  const onwardChange = (value) => {
    setward(value);
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form name="Makeeee" onFinish={onFinish}>
        <Form.Item name='City' >
          <Select
            style={{
              width: 120,
            }}
            onChange={handleCityChange}
          >
            {cityData.map((province) => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name='district'>
          <Select
            style={{
              width: 120,
            }}
            value={district}
            onChange={ondistrictChange}
          >
            {districts.map((district) => (
              <Option key={district}>{district}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name='ward'>
          <Select
            style={{
              width: 120,
            }}
            value={ward}
            onChange={onwardChange}
          >
            {wards.map((ward) => (
              <Option key={ward}>{ward}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button className="Register-button" type="primary" htmlType="submit">
            Tạo Đơn
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
