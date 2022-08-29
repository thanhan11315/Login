import { Spin } from "antd";
import React from "react";

const LoadingCommune = () => (
  <div
    style={{
      zIndex: "10",
      position: "absolute",
      display: "inline-block",
      opacity: "1",
      left: "60%",
      bottom: "14%",
    }}
  >
    <Spin />
  </div>
);

export default LoadingCommune;
