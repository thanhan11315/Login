import { Form, Input } from "antd";

function Weight() {
  return (
    <Form.Item
      name="weight"
      label="Khối Lượng Đơn Hàng"
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

export default Weight;
