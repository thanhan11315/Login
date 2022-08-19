import { Form, Input } from "antd";

function Phone() {
  return (
    <Form.Item
      name="phone"
      label="Phone Number"
      rules={[
        {
          required: true,
          message: "Please input your phone number!",
        },
        {
          type: "string",
          min: 10,
          max: 10,
          message: "Please input your phone number!",
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

export default Phone;
