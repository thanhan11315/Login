import { Form, InputNumber, Space } from "antd";

const onChange = (value) => {
  console.log("change", value);
};

function Weight() {
  return (
    <Form.Item
      name="weight"
      label="Khối Lượng Đơn Hàng"
      rules={[
        {
          required: true,
          message: "Please input !",
          whitespace: true,
        },
      ]}
    >
      <Space style={{ width: "100%" }}>
        <InputNumber
          defaultValue={0}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={onChange}
          style={{ width: "100%" }}
        />
      </Space>{" "}
    </Form.Item>
  );
}

export default Weight;
