import "./Page.css";
import { Alert } from "antd";
import { message } from "antd";
import TabTitle from "../TapTitle";
import Logo from "../../assets/images/SuperShip-Logo.png";
import Test from "../Test/Test.js";
import Testkho from "../Test/Testkho.js";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Button, Form, Input, Checkbox } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "../../compoments/GlobalStyles/PhoneInput";
import NamePickup from "../../compoments/GlobalStyles/NamePickup";
import AddressPickup from "../../compoments/GlobalStyles/AddressPickup";
import Product from "../../compoments/GlobalStyles/Product";
import Amount from "../../compoments/GlobalStyles/Amount";
import Weight from "../../compoments/GlobalStyles/Weight";
import PickupCode from "../../compoments/GlobalStyles/PickupCode";
import Config from "../../compoments/GlobalStyles/Config";
import Warehouse from "../../compoments/GlobalStyles/Warehouses ";
import Loading from "../../compoments/GlobalStyles/Loading";
import axios from "axios";
const Page2 = () => {
  TabTitle("Tạo đơn hàng");

  const error = () => {
    message.error({
      content: "Vui Lòng Nhập Địa Chỉ",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };

  const [district, setdistrict] = useState("");
  const [province, setprovince] = useState("");
  const [commune, setcommune] = useState("");

  // price đổi Hàng 10000
  const [returnn, setReturnn] = useState("");

  const getAddress = (address) => {
    console.log(address);
    setdistrict(address.district);
    setprovince(address.province);
    setcommune(address.name);
  };

  console.log(district);

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
    console.log(e);
  };

  useEffect(() => {
    if (checkNick) {
      setReturnn(10000);
    } else {
      setReturnn("");
    }
  }, [checkNick]);

  const onFinish = (values) => {
    if (commune) {
      const arrayPickUp = values.warehouse.split(", ");
      console.log(arrayPickUp);
      const data = {
        pickup_phone: 0,
        pickup_address: arrayPickUp[0],
        pickup_province: arrayPickUp[3],
        pickup_district: arrayPickUp[2],
        pickup_commune: arrayPickUp[1],
        district: district,
        province: province,
        commune: commune,
        address: values.address,
        amount: amountValue,
        value: value,
        weight: weight,
        note: values.note,
        service: 1,
        config: values.config,
        product_type: 1,
        product: values.product,
        barter: values.barter ? 1 : "",
        partner: values.partner,
      };
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
    } else {
      error();
    }
  };

  // Amount

  const [amountValue, setAmountValue] = useState("");
  const getAmount = (value) => {
    setAmountValue(value);
  };

  //  price

  const [delivery, setdelivery] = useState("");
  const [fee, setfee] = useState("");
  const [insurance, setinsurance] = useState("");
  const [pickup, setpickup] = useState("");
  const [weight, setWeight] = useState("");
  const [value, setValue] = useState("");
  const [pickUpProvince, setPickUpProvince] = useState("");
  const [pickUpDistrict, setPickUpDistrict] = useState("");
  const [loading, setloading] = useState(false);
  const getValue = (value) => {
    setValue(value);
  };

  const getWeight = (value) => {
    setWeight(value);
  };

  const getwarehouses = (warehouse) => {
    console.log(warehouse);
    setPickUpProvince(warehouse[3]);
    setPickUpDistrict(warehouse[2]);
  };

  const [provinceApi, setprovinceApi] = useState("");
  const [districtApi, setdistrictApi] = useState("");

  const getDistrict = (value) => {
    setprovinceApi(value.province);
    setdistrictApi(value.name);
  };

  useEffect(() => {
    setloading(true);
    var config = {
      method: "get",
      url: `https://api.mysupership.vn/v1/partner/orders/price?sender_province=${pickUpProvince}&sender_district=${pickUpDistrict}&receiver_province=${provinceApi}&receiver_district=${districtApi}&weight=${weight}&value=${
        value ? value : 0
      }`,
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmMGU5NTI2Nzc5Y2Y3Nzk2ZTY3ZjllNGQzZmNkZDg0Yzk0OWY4M2IxOTQxMzM1YTQwODQ2NGQwMDU4NzNiMDM3NDAwMDM1MjRhZTZlMjJhIn0.eyJhdWQiOiIxIiwianRpIjoiZGYwZTk1MjY3NzljZjc3OTZlNjdmOWU0ZDNmY2RkODRjOTQ5ZjgzYjE5NDEzMzVhNDA4NDY0ZDAwNTg3M2IwMzc0MDAwMzUyNGFlNmUyMmEiLCJpYXQiOjE2NjAwMzY1NDgsIm5iZiI6MTY2MDAzNjU0OCwiZXhwIjoxNjkxNTcyNTQ4LCJzdWIiOiI0MTMxMSIsInNjb3BlcyI6W119.01rKRfFAVw-3G-8FLNo2TGvNVjdNZE1LaxjRqKJ7FKL2NT-s2iZS-oRnYetm3wZPVc-dDPiG3b1ptPXyN0noOcBiT5VFQaP2T_jEFZdLJeas-mL9bOtqmWnseyP6wtqjfFEI3HBSZLCgIZDSYZY8XRZdCCwq5zxXocHywfpXVoDrAPJSa64YY-nD6YJo6FThtBh_LHfdGQ51j_qH8OChyF3O0TiCUmlDD8G0K_91wtw1KgvAmn6XM5H3oCqCWZEmKqaukkXh_4rI5hlAQN-0CarkLbU0wKMmnkr_hPqdjvBeGOaCYwzB9yRGlTLf-YBBqprpvNNs4FBi1cBp7oTag___KPifAP_kyjbtn853yh05t2mdw62HnKHX4PdrUBjuR68zrBOnORXqd5ft5djdC_REbfonojqUpVhK51IOmx6RMcl13DUIlUisb3T4shJrm66lzVTSzH_tqyhqxxx7_v1vWKydQBVRYPxnoiA3P5fHPYk-KH_FMJa0IAxNojjhtl6O8u9myfYLlF-htHYjNlsn3syEKGkpfKgMEhIj9FQzHvHvgxOyVvhmK30lePZ_WvIWXOdn42vhSfNjy7p3wOqwY4fHoAiNrqnJgMRAWFJUFNcHL4Xi_zQ8f4u10sNvyg8jyA7uK-bVfGR8ghT8WKcKLPlR-6FMFoTBGpxmPyo",
      },
    };
    axios(config)
      .then(function (response) {
        const data = response.data.results[0];
        setdelivery(data.delivery.name);
        setfee(data.fee);
        setinsurance(data.insurance);
        setpickup(data.pickup.name);
        console.log(data);
        setloading(false);
      })
      .catch(function (error) {
        console.log(error);
        setloading(false);
        setfee(0);
      });
  }, [weight, value, districtApi, amountValue, provinceApi, pickUpProvince]); // eslint-disable-line react-hooks/exhaustive-deps

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
                  <Row>
                    <Col lg={23} sm={22} xs={22}>
                      <Warehouse getwarehouses={getwarehouses} />
                    </Col>
                    <Col lg={1} sm={2} xs={2}>
                      <Testkho />
                    </Col>
                  </Row>
                </div>
                <h3 className="title">Thông Tin Người Nhận</h3>
                <Row>
                  <Col lg={12} sm={24} xs={24}>
                    <div className="boxNamePickup">
                      <NamePickup />
                      <PhoneInput />
                      <AddressPickup />
                    </div>
                  </Col>
                  <Col lg={12} sm={24} xs={24} className="boxAddressPickUp">
                    <Test getAddress={getAddress} getDistrict={getDistrict} />
                  </Col>
                </Row>
                <h3 className="title">Thông Tin Đơn Hàng</h3>
                <Row>
                  <Col lg={12} sm={24} xs={24} className="boxNameProduct">
                    <Product />

                    <Amount getAmount={getAmount} getValue={getValue} />

                    <Weight getWeight={getWeight} />

                    <PickupCode />
                  </Col>
                  <Col lg={12} sm={24} xs={24} className="boxCheckNick">
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

        <Col lg={6} sm={24} xs={24} className="boxRight">
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
                  <div>
                    {" "}
                    <span style={{ color: "rgb(225, 41, 61)" }}>[*]</span> là có
                    thể tạo đơn được rồi, các ô
                  </div>
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
                <p>Dự kiến lấy hàng : {pickup}</p>
                <p>Dự kiến giao hàng : {delivery}</p>
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
                      {amountValue ? amountValue.toLocaleString() : 0}₫
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
                    {loading ? (
                      <Loading />
                    ) : fee + insurance + returnn ? (
                      (
                        (fee ? fee : 0) +
                        (insurance ? insurance : 0) +
                        (returnn ? returnn : 0)
                      ).toLocaleString()
                    ) : (
                      0
                    )}
                    ₫
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
                  <div
                    style={{
                      paddingTop: "10px",
                    }}
                  >
                    Phí Giao Hàng{" "}
                    <span
                      style={{
                        padding: "5px",
                        backgroundColor: "#e33649",
                        borderRadius: "5px",
                      }}
                    >
                      {fee ? fee.toLocaleString() : 0} ₫{" "}
                    </span>{" "}
                    [1]
                  </div>
                  {insurance ? (
                    <div
                      style={{
                        paddingTop: "10px",
                      }}
                    >
                      Phí Bảo Hiểm{" "}
                      <span
                        style={{
                          padding: "5px",
                          backgroundColor: "#e33649",
                          borderRadius: "5px",
                        }}
                      >
                        {insurance ? insurance.toLocaleString() : 0} ₫{" "}
                      </span>{" "}
                      [2]
                    </div>
                  ) : (
                    ""
                  )}
                  {returnn ? (
                    <div
                      style={{
                        paddingTop: "10px",
                      }}
                    >
                      Phí Hàng Đổi{" "}
                      <span
                        style={{
                          padding: "5px",
                          backgroundColor: "#e33649",
                          borderRadius: "5px",
                        }}
                      >
                        {returnn ? returnn.toLocaleString() : 0} ₫{" "}
                      </span>{" "}
                      [2]
                    </div>
                  ) : (
                    ""
                  )}
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
