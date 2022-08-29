import { Spin } from "antd";
import React from "react";

const LoadingDistrict = () => (
  <div
    style={{
      zIndex: "10",
      position: "absolute",
      display: "inline-block",
      opacity: "1",
      left: "60%",
      bottom: "48%",
    }}
  >
    <Spin />
  </div>
);

export default LoadingDistrict;
