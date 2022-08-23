import { Form, InputNumber, Space } from "antd";
import { useState } from "react";

function Amount(getAmount) {
  const [valueP, setValueP] = useState("");

  const onChangeAmount = (value) => {
    console.log("changed", value);
    setValueP(value);
    getAmount.getAmount(value);
    getAmount.getValue(value);
  };

  const onChangeValue = (value) => {
    console.log("change", value);
    setValueP(value);
    getAmount.getValue(value);
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
            min={0}
            max={30000000}
            defaultValue={""}
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
            min={0}
            max={30000000}
            defaultValue={""}
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
