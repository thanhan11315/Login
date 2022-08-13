import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function LoginSuccess() {
  const navigate = useNavigate();
  const refreshPagechild = () => {
    const getLocalUsername = JSON.parse(localStorage.getItem("dzzshasddf"));
    console.log(getLocalUsername);
    if (getLocalUsername !== "zndkeadeeqwrmf") {
      navigate("/");
    }
  };
  useEffect(() => {
    refreshPagechild();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <h1>LoginSuccess233232</h1>;
}

export default LoginSuccess;
