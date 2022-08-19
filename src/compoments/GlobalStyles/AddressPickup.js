import { Form, Input } from "antd";

function addressPickup() {
  return (
    <Form.Item
      name="address"
      label="Địa Chỉ Người Nhận"
      rules={[
        {
          required: true,
          message: "Please input !",
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
}

export default addressPickup;
