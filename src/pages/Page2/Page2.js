import "./Page.css";
import { Alert } from "antd";
import TabTitle from "../TapTitle";
import Logo from "../../assets/images/SuperShip-Logo.png";
import Test from "../Test/Test.js";
import Testkho from "../Test/Testkho.js";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Button, Form, Input, Select, Checkbox } from "antd";
import React from "react";
// import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "../../compoments/GlobalStyles/PhoneInput";
import NamePickup from "../../compoments/GlobalStyles/NamePickup";
import AddressPickup from "../../compoments/GlobalStyles/AddressPickup";
import Product from "../../compoments/GlobalStyles/Product";
import Amount from "../../compoments/GlobalStyles/Amount";
import Weight from "../../compoments/GlobalStyles/Weight";
import Value from "../../compoments/GlobalStyles/Value";
import PickupCode from "../../compoments/GlobalStyles/PickupCode";
import Config from "../../compoments/GlobalStyles/Config";

const { Option } = Select;

const Page2 = () => {
  const getaddress = (address) => {
    console.log(address);
  };

  console.log(<Test callback={getaddress} />);
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

  const [checkNick, setCheckNick] = useState(false);

  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };

  const onFinish = (values) => {
    console.log(values);
    var data = JSON.stringify(values);
    console.log(data);

    // var config = {
    //   method: "post",
    //   url: "https://api.mysupership.vn/v1/partner/orders/add",
    //   headers: {
    //     Accept: "application/json",
    //     Authorization:
    //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmMGU5NTI2Nzc5Y2Y3Nzk2ZTY3ZjllNGQzZmNkZDg0Yzk0OWY4M2IxOTQxMzM1YTQwODQ2NGQwMDU4NzNiMDM3NDAwMDM1MjRhZTZlMjJhIn0.eyJhdWQiOiIxIiwianRpIjoiZGYwZTk1MjY3NzljZjc3OTZlNjdmOWU0ZDNmY2RkODRjOTQ5ZjgzYjE5NDEzMzVhNDA4NDY0ZDAwNTg3M2IwMzc0MDAwMzUyNGFlNmUyMmEiLCJpYXQiOjE2NjAwMzY1NDgsIm5iZiI6MTY2MDAzNjU0OCwiZXhwIjoxNjkxNTcyNTQ4LCJzdWIiOiI0MTMxMSIsInNjb3BlcyI6W119.01rKRfFAVw-3G-8FLNo2TGvNVjdNZE1LaxjRqKJ7FKL2NT-s2iZS-oRnYetm3wZPVc-dDPiG3b1ptPXyN0noOcBiT5VFQaP2T_jEFZdLJeas-mL9bOtqmWnseyP6wtqjfFEI3HBSZLCgIZDSYZY8XRZdCCwq5zxXocHywfpXVoDrAPJSa64YY-nD6YJo6FThtBh_LHfdGQ51j_qH8OChyF3O0TiCUmlDD8G0K_91wtw1KgvAmn6XM5H3oCqCWZEmKqaukkXh_4rI5hlAQN-0CarkLbU0wKMmnkr_hPqdjvBeGOaCYwzB9yRGlTLf-YBBqprpvNNs4FBi1cBp7oTag___KPifAP_kyjbtn853yh05t2mdw62HnKHX4PdrUBjuR68zrBOnORXqd5ft5djdC_REbfonojqUpVhK51IOmx6RMcl13DUIlUisb3T4shJrm66lzVTSzH_tqyhqxxx7_v1vWKydQBVRYPxnoiA3P5fHPYk-KH_FMJa0IAxNojjhtl6O8u9myfYLlF-htHYjNlsn3syEKGkpfKgMEhIj9FQzHvHvgxOyVvhmK30lePZ_WvIWXOdn42vhSfNjy7p3wOqwY4fHoAiNrqnJgMRAWFJUFNcHL4Xi_zQ8f4u10sNvyg8jyA7uK-bVfGR8ghT8WKcKLPlR-6FMFoTBGpxmPyo",
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <Alert
        style={{ marginBottom: "20px", marginTop: "20px" }}
        type="warning"
        message={
          <>
            <p>
              Hiện đang có một số nền tảng giả mạo như: sps**, **sv … có chứa từ
              khóa “SPS”, “sps” gây hiểu nhầm đối với khách hàng, giao diện đạo
              nhái thương hiệu và logo của{" "}
              <span style={{ fontWeight: "700" }}>SuperShip</span>.
              <span style={{ fontWeight: "700" }}>
                {" "}
                SuperShip xin nhấn mạnh đây là những nền tảng giả mạo{" "}
              </span>
              . Quý khách hàng vui lòng không sử dụng những hệ thống này để
              tránh những rủi ro về Hàng Hóa, Tiền Thu Hộ... Chi tiết xem tại{" "}
              <Link to="/" style={{ fontWeight: "700" }}>
                Đây
              </Link>
              .
            </p>
          </>
        }
      ></Alert>
      <Alert
        style={{ marginBottom: "20px" }}
        type="info"
        message={
          <>
            <p style={{ fontWeight: "700" }}>
              Đối với Shop có nhiều Kho Lấy Hàng, trước khi Tạo Đơn Hàng thì
              Shop vui lòng kiểm tra lại Kho Lấy Hàng Mặc Định. Nếu chưa đúng
              với thực tế shop, Shop vui lòng chọn lại Kho Lấy Hàng Mặc Định ở
              mục Người Dùng -> Kho Hàng (APP) hoặc Cài Đặt -> Kho Hàng (WEB).
            </p>
          </>
        }
      ></Alert>
      <Alert
        type="error"
        message={
          <>
            <p>
              Đơn hàng giao trễ từ 24 giờ so với thời gian cam kết mà không có
              liên hệ, xử lý và được khách hàng chấp nhận, SuperShip bồi thường
              lên đến 50.000 ₫/đơn hàng. Nhấn tại{" "}
              <Link style={{ fontWeight: "700" }} to="/">
                Đây
              </Link>{" "}
              để gửi yêu cầu bồi thường. Quy định điều kiện bồi thường xem tại{" "}
              <Link style={{ fontWeight: "700" }} to="/">
                Đây
              </Link>
              .
            </p>
          </>
        }
      ></Alert>

      <Row>
        <Col lg={18} sm={24} xs={24}>
          <div className="create-align-box">
            <div className="box">
              <div className="img">
                <h2 className="title">Tạo Đơn Hàng</h2>
                <img
                  src={Logo}
                  alt="img not load"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <Form
                form={form}
                name="Make"
                onFinish={onFinish}
                scrollToFirstError
              >
                <div>
                  <h3 className="title">Thông Tin Người Gửi</h3>
                  <div style={{ display: "flex" }}>
                    <Form.Item
                      name="address"
                      label="Kho Lấy Hàng"
                      rules={[{ required: true, message: "Please input !" }]}
                    >
                      <Select placeholder="Chon kho hang" allowClear>
                        <Option>none</Option>
                      </Select>
                    </Form.Item>
                    <Testkho />
                  </div>
                </div>
                <h3 className="title">Thông Tin Người Nhận</h3>
                <Row>
                  <Col lg={12} sm={24} xs={24}>
                    <div>
                      <NamePickup />
                      <PhoneInput />
                      <AddressPickup />
                    </div>
                  </Col>
                  <Col lg={12} sm={24} xs={24}>
                    <Test callback={getaddress} />
                  </Col>
                </Row>
                <h3 className="title">Thông Tin Đơn Hàng</h3>
                <Row>
                  <Col lg={12} sm={24} xs={24}>
                    <Product />

                    <Amount />

                    <Weight />

                    <Value />

                    <PickupCode />
                  </Col>
                  <Col lg={12} sm={24} xs={24}>
                    <Form.Item name="barter" valuePropName="checked">
                      <Checkbox checked={checkNick} onChange={onCheckboxChange}>
                        Đổi/Lấy Hàng Về
                      </Checkbox>
                    </Form.Item>

                    <Form.Item
                      name="note"
                      label="Ghi Chú Khi Giao Hàng"
                      rules={[
                        {
                          required: checkNick,
                          message: "Please input !",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input.TextArea />
                    </Form.Item>

                    <Form.Item name="partner" label="Mã khuyến mãi">
                      <Input />
                    </Form.Item>

                    <Config />
                  </Col>
                  <div className="box-create-button">
                    <Form.Item>
                      <Button
                        className="create-button"
                        type="primary"
                        htmlType="submit"
                      >
                        Tạo Đơn
                      </Button>
                    </Form.Item>
                  </div>
                </Row>
              </Form>
            </div>
          </div>
        </Col>

        <Col lg={6} sm={24} xs={24}>
          <Alert
            style={{ marginBottom: "20px", marginTop: "20px" }}
            type="warning"
            message={
              <>
                <p>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    HƯỚNG DẪN{" "}
                  </div>
                  <div
                    style={{
                      fontWeight: "700",
                      color: "#e1293d",
                    }}
                  >
                    Phải đọc hướng dẫn sử dụng này!
                  </div>
                  <div>
                    [1] Nếu bạn chưa có Kho Hàng hoặc Sản Phẩm, nhấn dấu cộng
                    màu đỏ để tạo nhanh.
                  </div>
                  <div>[2] Chỉ cần nhập các ô có dấu</div>
                  <div>[*] là có thể tạo đơn được rồi, các ô</div>
                  <div> khác không cần nhập cũng không sao cả.</div>
                  <div>
                    {" "}
                    [3] Sau khi tạo xong, SuperShip hiển thị Mã Đơn Hàng. Quý
                    khách vui lòng viết/in mã này lên gói hàng.
                  </div>{" "}
                  <div
                    style={{
                      fontWeight: "700",
                      color: "#e1293d",
                    }}
                  >
                    {" "}
                    [4] Trị Giá Hàng là căn cứ xác định giá trị bồi thường khi
                    xảy ra sự cố.
                  </div>{" "}
                  <div
                    style={{
                      color: "#e1293d",
                    }}
                  >
                    {" "}
                    [5] Bạn đã đọc và hiểu rõ các chính sách dịch vụ của
                    SuperShip.
                  </div>
                </p>
              </>
            }
          />
          <Alert
            style={{ marginBottom: "20px" }}
            type="error"
            message={
              <>
                <p>
                  {" "}
                  <div
                    style={{
                      fontSize: "1.1rem",
                    }}
                  >
                    {" "}
                    Tiền Thu Khách{" "}
                    <span
                      style={{
                        padding: "5px",
                        backgroundColor: "#F1C40F",
                        borderRadius: "5px",
                      }}
                    >
                      0 ₫
                    </span>
                  </div>
                  <div>
                    {" "}
                    <i>
                      {" "}
                      SuperShip sẽ thu <b> Người Nhận </b> số tiền này khi giao
                      hàng{" "}
                    </i>
                  </div>
                </p>
              </>
            }
          />
          <Alert
            style={{ marginBottom: "20px" }}
            type="info"
            message={
              <>
                <p>
                  Phí Cuối Cùng{" "}
                  <span
                    style={{
                      padding: "5px",
                      backgroundColor: "#36c6d3",
                      borderRadius: "5px",
                    }}
                  >
                    0 ₫
                  </span>{" "}
                  = [1] + [2] - [3]
                </p>
              </>
            }
          />
          <Alert
            style={{ marginBottom: "20px" }}
            type="error"
            message={
              <>
                <p>
                  {" "}
                  <div>
                    <b>CHI TIẾT PHÍ</b>
                  </div>
                  Phí Giao Hàng{" "}
                  <span
                    style={{
                      padding: "5px",
                      backgroundColor: "#e33649",
                      borderRadius: "5px",
                    }}
                  >
                    0 ₫{" "}
                  </span>{" "}
                  [1]
                </p>
              </>
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default Page2;
