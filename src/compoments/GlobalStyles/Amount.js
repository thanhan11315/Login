import { Form, Input } from "antd";

function Amount() {
  return (
    <Form.Item
      name="amount"
      label="Số Tiền Thu Hộ"
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

export default Amount;
