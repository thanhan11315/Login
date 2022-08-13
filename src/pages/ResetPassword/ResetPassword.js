import "./ResetPassword.css"
import { Link } from "react-router-dom";
import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, } from 'antd';
import SuperShipLogo from "../../assets/images/SuperShip-Logo.png"
import TabTitle from "../TapTitle";
import React from 'react';


const ResetPassword = () => {

  TabTitle('ResetPassword');

  const onFinish = (values) => {
    console.log(values);
    console.log(values.user.email);
    if(values.user.email==='thanhan11315@gmail.com'){
      alert('Yêu cầu thành công SuperShip sẽ gửi mật khẩu mới vào mail của bạn')
    } else {
      alert('Email của bạn chưa đăng kí, vui lòng đăng kí hoặc nhập lại e mail đúng')
    }
  };

  return (
    <>
      <div className="ResetPassword-align-box">
        <div className="box">
          <div className="img">
            <img src={SuperShipLogo} alt="img not load" style={{ width: '80px', height: '80px' }} />
          </div>
          <h4 className="title">Forgot Password?</h4>
          <p className="p-title">SuperTek will email you a link to reset your password.</p>
          <Form name="ResetPassword" onFinish={onFinish}>
            <Form.Item
              name={['user', 'email']}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Button className="password-reset" type="primary" htmlType="submit">
              Password Reset
            </Button>
          </Form>
          <h6 className="Login"><Link to="/" className="link">Login</Link></h6>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;