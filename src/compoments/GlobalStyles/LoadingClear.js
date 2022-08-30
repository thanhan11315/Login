import { Spin } from "antd";
import React from "react";
import { Form, Select } from "antd";

const LoadingClear = () => (
  <Form.Item name="loading" label="Loading" rules={[{ required: true }]}>
    <div
      style={{
        zIndex: "10",
        position: "absolute",
        display: "inline-block",
        opacity: "1",
        left: "50%",
        bottom: "0%",
      }}
    >
      <Spin />
    </div>
    <Select style={{ width: "100%" }}></Select>
  </Form.Item>
);

export default LoadingClear;
