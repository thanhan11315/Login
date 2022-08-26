import { Form, InputNumber, Space } from "antd";

function Weight(getWeight) {
  const onChange = (value) => {
    console.log("change", value);
    getWeight.getWeight(value);
  };
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
          min={1}
          max={50000}
          defaultValue={500}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={onChange}
          style={{ width: "100%" }}
        />
      </Space>
    </Form.Item>
  );
}

export default Weight;
