import { Form, Input } from "antd";

function Name() {
  return (
    <Form.Item
      name="name"
      label="Tên kho"
      rules={[
        {
          required: true,
          message: "Please input!",
          whitespace: true,
        },
      ]}
    >
      <Input
        style={{
          width: "100%",
        }}
      />
    </Form.Item>
  );
}

export default Name;
