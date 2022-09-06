import { Form, Space } from "antd";
import Input from "antd/lib/input/Input";
import { useState } from "react";

const maxAmount = 20000000;

function Amount(prosp) {
  const [valueP, setValueP] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const handleChangeAmount = (e) => {
    const { value: inputValue } = e.target;
    const numberParsed = String(inputValue).replaceAll(",", "");
    const isValidNumber =
      Number(numberParsed) >= 0 && Number(numberParsed) <= maxAmount;
    if (isValidNumber) {
      const valueConverted = inputValue
        .replace(/\$\s?|(,*)/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .replace(/\s/g, "");
      setAmountValue(valueConverted);
      setValueP(valueConverted);
      prosp.getValue(valueConverted.replaceAll(",", ""));
      prosp.getAmount(valueConverted);
    } else {
      console.log("Nhap Khong Dung");
    }
  };

  const handleChangeValueP = (e) => {
    const { value: inputValue } = e.target;
    const numberParsed = String(inputValue).replaceAll(",", "");
    const isValidNumber =
      Number(numberParsed) >= 0 &&
      Number(numberParsed) <= maxAmount &&
      numberParsed !== " ";
    if (isValidNumber) {
      const valueConverted = inputValue
        .replace(/\$\s?|(,*)/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .replace(/\s/g, "");
      setValueP(valueConverted);
      prosp.getValue(valueConverted.replaceAll(",", ""));
    } else {
      console.log("Nhap Khong Dung");
    }
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
          <Input
            value={amountValue}
            onChange={handleChangeAmount}
            placeholder="Input a number"
          />
        </Space>
      </Form.Item>
      <Form.Item name="Value" label="Giá trị đơn hàng">
        <Space style={{ width: "100%" }}>
          {" "}
          <Input
            value={valueP}
            onChange={handleChangeValueP}
            placeholder="Input a number"
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
