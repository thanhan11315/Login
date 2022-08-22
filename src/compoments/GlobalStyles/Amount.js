import { Form, InputNumber, Space } from "antd";
import { useState } from "react";

function Amount() {
  const [valueP, setValueP] = useState("");

  const onChangeAmount = (value) => {
    console.log("changed", value);
    setValueP(value);
  };

  const onChangeValue = (value) => {
    console.log("change", value);
    setValueP(value);
  };

  return (
    <>
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
        <Space style={{ width: "100%" }}>
          <InputNumber
            defaultValue={0}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChangeAmount}
            style={{ width: "100%" }}
          />
        </Space>
      </Form.Item>
      <Form.Item
        name="Value"
        value={valueP}
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
            value={valueP}
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

export default Amount;
