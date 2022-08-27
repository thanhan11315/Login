import { Spin } from "antd";
import React from "react";

const Loading = () => (
  <div
    style={{
      zIndex: "10",
      position: "absolute",
      display: "inline-block",
      opacity: "1",
      left: "50%",
      bottom: "4%",
    }}
  >
    <Spin />
  </div>
);

export default Loading;
