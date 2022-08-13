import "./Page2";
import TabTitle from "../TapTitle";
import Logo from "../../assets/images/SuperShip-Logo.png";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
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
  TabTitle("Register");

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    var data = JSON.stringify(values);
    console.log(data);

    var config = {
      method: "post",
      url: "https://api.mysupership.vn/v1/partner/orders/add",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmMGU5NTI2Nzc5Y2Y3Nzk2ZTY3ZjllNGQzZmNkZDg0Yzk0OWY4M2IxOTQxMzM1YTQwODQ2NGQwMDU4NzNiMDM3NDAwMDM1MjRhZTZlMjJhIn0.eyJhdWQiOiIxIiwianRpIjoiZGYwZTk1MjY3NzljZjc3OTZlNjdmOWU0ZDNmY2RkODRjOTQ5ZjgzYjE5NDEzMzVhNDA4NDY0ZDAwNTg3M2IwMzc0MDAwMzUyNGFlNmUyMmEiLCJpYXQiOjE2NjAwMzY1NDgsIm5iZiI6MTY2MDAzNjU0OCwiZXhwIjoxNjkxNTcyNTQ4LCJzdWIiOiI0MTMxMSIsInNjb3BlcyI6W119.01rKRfFAVw-3G-8FLNo2TGvNVjdNZE1LaxjRqKJ7FKL2NT-s2iZS-oRnYetm3wZPVc-dDPiG3b1ptPXyN0noOcBiT5VFQaP2T_jEFZdLJeas-mL9bOtqmWnseyP6wtqjfFEI3HBSZLCgIZDSYZY8XRZdCCwq5zxXocHywfpXVoDrAPJSa64YY-nD6YJo6FThtBh_LHfdGQ51j_qH8OChyF3O0TiCUmlDD8G0K_91wtw1KgvAmn6XM5H3oCqCWZEmKqaukkXh_4rI5hlAQN-0CarkLbU0wKMmnkr_hPqdjvBeGOaCYwzB9yRGlTLf-YBBqprpvNNs4FBi1cBp7oTag___KPifAP_kyjbtn853yh05t2mdw62HnKHX4PdrUBjuR68zrBOnORXqd5ft5djdC_REbfonojqUpVhK51IOmx6RMcl13DUIlUisb3T4shJrm66lzVTSzH_tqyhqxxx7_v1vWKydQBVRYPxnoiA3P5fHPYk-KH_FMJa0IAxNojjhtl6O8u9myfYLlF-htHYjNlsn3syEKGkpfKgMEhIj9FQzHvHvgxOyVvhmK30lePZ_WvIWXOdn42vhSfNjy7p3wOqwY4fHoAiNrqnJgMRAWFJUFNcHL4Xi_zQ8f4u10sNvyg8jyA7uK-bVfGR8ghT8WKcKLPlR-6FMFoTBGpxmPyo",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="Register-align-box">
        <div className="box">
          <div className="img">
            <img
              src={Logo}
              alt="img not load"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <h2 className="title">Tạo Đơn Hàng</h2>
          <Form
            form={form}
            name="Make"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="pickup_phone"
              label="Số Điện Thoại Điểm Lấy Hàng"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="pickup_address"
              label="Địa Chỉ Điểm Lấy Hàng"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="pickup_province"
              label="Tên Tỉnh/Thành Phố Điểm Lấy Hàng"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="pickup_district"
              label="Tên Quận/Huyện Điểm Lấy Hàng"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="pickup_commune"
              label="Tên Phường/xã Điểm Lấy Hàng"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="name"
              label="Tên Người Nhận"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Số Điện Thoại Người Nhận"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Địa Chỉ Người Nhận"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="province"
              label="Tên Tỉnh/Thành Phố Người Nhận"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="district"
              label="Tên Quận/Huyện Người Nhận"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="commune"
              label="Tên Phường/xã Người Nhận"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="amount"
              label="Số Tiền Thu Hộ"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="weight"
              label="Khối Lượng Đơn Hàng"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="service"
              label="Mã Gói Dịch Vụ"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="config"
              label="Người Nhận Có Được Xem Sản phẩm"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="payer"
              label="Người trả phí"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="product_type"
              label="Cách chuyển sản Phẩm"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="product"
              label="Tên Sản Phẩm"
              rules={[
                {
                  required: true,
                  message: "Please input !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                className="Register-button"
                type="primary"
                htmlType="submit"
              >
                Tạo Đơn
              </Button>
            </Form.Item>
          </Form>
          <h6 className="Login">
            <Link to="/" className="link">
              Login
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Page2;
