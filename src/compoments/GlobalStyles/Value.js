import { Form, InputNumber, Space } from "antd";

const onChangeValue = (value) => {
  console.log("change", value);
};

function Value() {
  return (
    <>
      <Form.Item
        name="Value"
        label="Giá trị đơn hàng"
        rules={[
          {
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
            onChange={onChangeValue}
            style={{ width: "100%" }}
          />
        </Space>
      </Form.Item>
    </>
  );
}

export default Value;
