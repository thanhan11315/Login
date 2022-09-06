import { Form, Input, Space } from "antd";
import { useEffect, useState } from "react";

function Weight(prosp) {
  const [required, setrequired] = useState(false);
  const [weightValue, setWeightValue] = useState("500");
  const maxWeight = 20000;
  const onChange = (e) => {
    const { value: inputValue } = e.target;
    if (!inputValue) {
      setrequired(true);
    }
    const numberParsed = String(inputValue).replaceAll(",", "");
    const isValidNumber =
      Number(numberParsed) >= 0 && Number(numberParsed) <= maxWeight;
    if (isValidNumber) {
      const valueConverted = inputValue
        .replace(/\$\s?|(,*)/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .replace(/\s/g, "");
      setWeightValue(valueConverted);
      prosp.getWeight(valueConverted.replaceAll(",", ""));
    } else {
      console.log("Nhap Khong Dung");
    }
  };

  useEffect(() => {
    prosp.getWeight(500);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Form.Item
      name="weight"
      label="Khối Lượng Đơn Hàng"
      rules={[
        {
          required: required,
          message: "Please input !",
          whitespace: true,
        },
      ]}
    >
      <Space style={{ width: "100%" }}>
        <Input
          value={weightValue}
          onChange={onChange}
          placeholder="Input a number"
          style={{ width: "100%" }}
        />
      </Space>
    </Form.Item>
  );
}

export default Weight;
