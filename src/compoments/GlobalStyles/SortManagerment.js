import { Form, Select } from "antd";
import React from "react";
const { Option } = Select;

const SortManagerment = () => (
  <Form.Item name="Sort" label="Sắp Xếp" style={{ width: "100%" }}>
    <Select
      showSearch
      style={{
        width: "100%",
      }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) => option.children.includes(input)}
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
    >
      <Option value="1">Mới Nhất</Option>
      <Option value="2">Cũ Nhất</Option>
    </Select>
  </Form.Item>
);

export default SortManagerment;
