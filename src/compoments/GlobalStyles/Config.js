import { Form, Select } from "antd";
const { Option } = Select;

function Config() {
  return (
    <Form.Item
      name="config"
      label="Chọn Cách Kiểm Hàng"
      // hasFeedback
      rules={[
        {
          required: true,
          message: "Please select your country!",
        },
      ]}
    >
      <Select placeholder="Please select">
        <Option value="1">Cho Xem Hàng Nhưng Không Thử Hàng</Option>
        <Option value="2">Cho Thử Hàng</Option>
        <Option value="3">Không Cho Xem Hàng</Option>
      </Select>
    </Form.Item>
  );
}

export default Config;
