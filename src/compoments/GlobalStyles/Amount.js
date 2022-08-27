import { Form, InputNumber, Space } from "antd";
import { useState } from "react";

function Amount(prosp) {
  const [valueP, setValueP] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const onChangeAmount = (value) => {
    console.log("changed", value);
    setAmountValue(value);
    setValueP(value);
    prosp.getAmount(value);
    prosp.getValue(value);
  };

  const onChangeValue = (value) => {
    console.log("change", value);
    setValueP(value);
    prosp.getValue(value);
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
          },
        ]}
      >
        <Space style={{ width: "100%" }}>
          <InputNumber
            value={amountValue}
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
      <Form.Item name="Value" label="Giá trị đơn hàng">
        <Space style={{ width: "100%" }}>
          <InputNumber
            min={0}
            max={30000000}
            defaultValue={""}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            value={valueP}
            onChange={onChangeValue}
            style={{ width: "100%" }}
          />
        </Space>
        <div
          style={{
            color: "#e1293d",
            fontSize: "12px",
          }}
        >
          Giá Trị Hàng Hóa bạn kê khai tại mục này chính là Giá Trị Căn Cứ để
          xét xử lý Bồi Hoàn.
          <a href="https://drive.google.com/file/d/1O7s3vFOK9lvz1awyYj3fWcLb1LlXOGrr/view?ref=MySuperShip">
            Xem Chính Sách Bồi Hoàn
          </a>
        </div>
      </Form.Item>
    </>
  );
}

export default Amount;
