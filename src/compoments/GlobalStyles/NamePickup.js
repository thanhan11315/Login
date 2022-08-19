import { Form, Input } from "antd";

function NamePickup() {
  return (
    <Form.Item
      name="name"
      label="Tên Người Nhận"
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

export default NamePickup;
