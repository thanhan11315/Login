import { Form, Input } from "antd";

function Contact() {
  return (
    <Form.Item
      name="contact"
      label="Tên Người Liên Lạc"
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

export default Contact;
