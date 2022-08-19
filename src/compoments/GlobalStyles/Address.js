import { Form, Input } from "antd";

function Address() {
  return (
    <Form.Item
      name="address"
      label="Địa Chỉ Chi Tiết"
      rules={[
        {
          required: true,
          message: "Please input!",
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

export default Address;
