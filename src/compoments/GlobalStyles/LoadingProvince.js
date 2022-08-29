import { Spin } from "antd";
import React from "react";

const LoadingProvince = () => (
  <div
    style={{
      zIndex: "10",
      position: "absolute",
      display: "inline-block",
      opacity: "1",
      left: "60%",
      bottom: "82%",
    }}
  >
    <Spin />
  </div>
);

export default LoadingProvince;
