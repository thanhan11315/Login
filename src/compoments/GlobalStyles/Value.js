import { Form, Input } from "antd";

function Value() {
  return (
    <Form.Item
      name="Value"
      label="Giá trị đơn hàng"
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

export default Value;
