import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
const refreshPagechild = () => {
  const getLocalUsername = JSON.parse(localStorage.getItem("dzzshasddf"));
  console.log(getLocalUsername);
  if (getLocalUsername !== "zndkeadeeqwrmf") {
    navigate("/");
  }
};


export {refreshPagechild} ;