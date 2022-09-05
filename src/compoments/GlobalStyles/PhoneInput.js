import { Form, Input } from "antd";

function PhoneInput() {
  return (
    <Form.Item
      name="phone"
      label="Phone Number"
      rules={[
        {
          required: true,
          message: "Please input!",
          whitespace: true,
        },
        {
          type: "string",
          min: 10,
          max: 10,
          message: "Please input!",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
}

export default PhoneInput;
