import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function LoginSuccess() {
  const navigatea = useNavigate();
  useEffect(() => {
    navigatea("/LoginSuccess");
  });
  return <h1>LoginSuccess233232</h1>;
}

export default LoginSuccess;
