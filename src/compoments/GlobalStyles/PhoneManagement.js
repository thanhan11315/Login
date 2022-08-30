import { Form, Input } from "antd";

function PhoneManagement() {
  return (
    <Form.Item name="phone" label="Phone Number">
      <Input
        style={{
          width: "100%",
        }}
      />
    </Form.Item>
  );
}

export default PhoneManagement;
