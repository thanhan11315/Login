import { Form, InputNumber, Space } from "antd";
import { useEffect, useState } from "react";

function Weight(getWeight) {
  const [required, setrequired] = useState(false);

  const onChange = (value) => {
    console.log("change", value);
    getWeight.getWeight(value);
    if (!value) {
      setrequired(true);
    }
  };

  useEffect(() => {
    getWeight.getWeight(500);
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <Form.Item
      name="weight"
      label="Khối Lượng Đơn Hàng"
      rules={[
        {
          required: required,
          message: "Please input !",
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
