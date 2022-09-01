import React from "react";
import moment from "moment";
import "./OrderManagement.css";
import Status from "../../compoments/GlobalStyles/Status";
import AddressManagement from "../../compoments/GlobalStyles/AddressManagement";
import WarehouseManagement from "../../compoments/GlobalStyles/WarehouseManagement";
import CodeShopManagement from "../../compoments/GlobalStyles/CodeShopManagement";
import CodeDownManagement from "../../compoments/GlobalStyles/CodeDownManagement";
import NameManagement from "../../compoments/GlobalStyles/NameManagement";
import CounterCode from "../../compoments/GlobalStyles/CounterCode";
import PhoneManagement from "../../compoments/GlobalStyles/PhoneManagement";
import AddressDetaiManagement from "../../compoments/GlobalStyles/AddressDetailManagement";
import SortManagerment from "../../compoments/GlobalStyles/SortManagerment";
import TableManagement from "../../compoments/GlobalStyles/TableManagement";
import CodeOrder from "../../compoments/GlobalStyles/codeOrder";
import { Form, Radio, Alert, Input, Button } from "antd";
import { DatePicker } from "antd";
import { useState } from "react";
import { Row, Col } from "antd";
const { RangePicker } = DatePicker;
function OrderManagement() {
  const [buttonHidden, setbuttonHidden] = useState(false);
  const [time1, settime1] = useState("");
  const [time2, settime2] = useState("");
  // const onFinish = (values) => {
  //   console.log(values);
  // };
  const handleHidden = () => {
    setbuttonHidden(!buttonHidden);
  };

  const handleChangeRadio = (value) => {
    console.log(value.target.value);
  };

  const onFinish = (value) => {
    console.log(value);
  };
  const timeChange = (value) => {
    const [beginTime, endTime] = value;
    console.log(
      moment(beginTime).format("DD/MM/YYYY"),
      moment(endTime).format("DD/MM/YYYY")
    );
    settime1(moment(beginTime).format("DD/MM/YYYY"));
    settime2(moment(endTime).format("DD/MM/YYYY"));
    console.log(time1);
    console.log(time2);
  };

  return (
    <>
      <Form name="search" onFinish={onFinish}>
        <Row>
          <Col
            lg={18}
            sm={24}
            xs={24}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <Button
              type="primary"
              onClick={handleHidden}
              style={{ marginBottom: "24px" }}
            >
              {buttonHidden ? "Thu Gọn Tìm Kiếm" : "Mở Rộng Tìm Kiếm"}
            </Button>
            <Status />
            {buttonHidden ? <AddressManagement /> : ""}
            {buttonHidden ? <WarehouseManagement /> : ""}

            <Row>
              <Col lg={12} sm={24} xs={24} style={{ paddingRight: "10px" }}>
                <CodeOrder />
                <CodeShopManagement />
                {buttonHidden ? <NameManagement /> : ""}
                {buttonHidden ? <CodeDownManagement /> : ""}
              </Col>
              <Col lg={12} sm={24} xs={24} style={{ paddingLeft: "10px" }}>
                {buttonHidden ? <CounterCode /> : ""}
                <PhoneManagement />
                <AddressDetaiManagement />
                {buttonHidden ? <SortManagerment /> : ""}
              </Col>
            </Row>
          </Col>
          <Col
            lg={6}
            sm={24}
            xs={24}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <Form.Item label="Thời Gian" name="time">
              <RangePicker onChange={timeChange} />
            </Form.Item>
            <Form.Item label="In Đơn">
              <Radio.Group onChange={handleChangeRadio}>
                <Radio value="1"> Chưa In </Radio>
                <Radio value="2"> Đã In </Radio>
              </Radio.Group>
            </Form.Item>
            <Alert
              message={`Từ Ngày : ${time1}`}
              type="error"
              style={{ marginBottom: "24px" }}
            />
            <Alert
              message={`Đến Ngày : ${time2}`}
              type="error"
              style={{ marginBottom: "24px" }}
            />
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginBottom: "24px" }}
            >
              {" "}
              Tìm Kiếm{" "}
            </Button>
          </Col>
        </Row>
      </Form>
      <div style={{ marginBottom: "24px", textAlign: "end" }}>
        <Button>In K46 [0]</Button>
        <Button>In K75 [0]</Button>
        <Button>In K80 [0]</Button>
        <Button>In K50 [0]</Button>
        <Button>In T2 [0]</Button>
        <Button>In A5 [0]</Button>
        <Button>Xuất Excel [0]</Button>
      </div>
      <Alert
        message="Kết Quả Đã tìm Thấy"
        type="info"
        style={{ marginBottom: "24px", textAlign: "center" }}
      />
      <Form.Item label="Tìm Kiếm">
        <Input />
      </Form.Item>
      <TableManagement />
    </>
  );
}

export default OrderManagement;
