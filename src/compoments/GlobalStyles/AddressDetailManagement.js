import { Form, Input } from "antd";

function AddressDetaiManagement() {
  return (
    <Form.Item name="address" label="Địa Chỉ Chi Tiết">
      <Input
        style={{
          width: "100%",
        }}
      />
    </Form.Item>
  );
}

export default AddressDetaiManagement;
