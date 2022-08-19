import { Form, Input } from "antd";

function PickupCode() {
  return (
    <Form.Item
      name="pickup_code"
      label="Mã Đơn Của Shop"
      rules={[
        {
          message: "Please input !",
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
}

export default PickupCode;
