import { Spin } from "antd";
import React from "react";

const Loading = () => (
  <div
    style={{
      zIndex: "10",
      position: "absolute",
      display: "inline-block",
      opacity: "1",
      left: "60%",
      bottom: "0%",
    }}
  >
    <Spin />
  </div>
);

export default Loading;
