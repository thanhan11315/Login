import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CopyOutlined,
  ImportOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "antd";
import SuperShipLogo from "../../../assets/images/DcvLogoWhite.png";
import "./Navbar.css";
const Navbar = () => {
  var navigate = useNavigate();
  const [Click, setClick] = useState(false);
  const [Choose, setChoose] = useState(false);

  const handleClick = () => {
    setClick(!Click);
  };
  const handleClicktag = () => {
    setChoose(true);
  };
  const Logout = () => {
    localStorage.setItem("dzzshasddf", "0");
    localStorage.setItem("choose", false);
    navigate("/");
    console.log("1");
  };
  return (
    <nav className="NavbarItems">
      <div className="navbar-logo">
        <img src={SuperShipLogo} style={{ width: "250px" }} alt="Logo"></img>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {Click ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </div>
      <ul className={Click ? "nav-menu active" : "nav-menu"}>
        <li onClick={handleClicktag}>
          <Link
            className={Choose ? "nav-links choose" : "nav-links"}
            to="/Page2"
          >
            <CopyOutlined /> Tạo Đơn Hàng
          </Link>
        </li>
        <li>
          <Link className="nav-links-mobile" onClick={Logout} to="/Page2">
            Đăng Xuất
          </Link>
        </li>
      </ul>
      <Button className="button" onClick={Logout}>
        <ImportOutlined /> Đăng Xuất
      </Button>
    </nav>
  );
};
export default Navbar;
