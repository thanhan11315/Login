import { Form, Input } from "antd";

function Product() {
  return (
    <Form.Item
      name="product"
      label="Tên Sản Phẩm"
      rules={[
        {
          required: true,
          message: "Please input !",
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
}

export default Product;
