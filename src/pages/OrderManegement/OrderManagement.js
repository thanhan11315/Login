import React from "react";
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
  // const onFinish = (values) => {
  //   console.log(values);
  // };
  const handleHidden = () => {
    setbuttonHidden(!buttonHidden);
  };
  return (
    <>
      <Row>
        <Col
          lg={18}
          sm={24}
          xs={24}
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          <Button type="primary" onClick={handleHidden}>
            {buttonHidden ? "Thu Gọn Tìm Kiếm" : "Mở Rộng Tìm Kiếm"}
          </Button>
          <Status />
          {buttonHidden ? <AddressManagement /> : ""}
          {buttonHidden ? <WarehouseManagement /> : ""}

          <Row>
            <Col
              lg={12}
              sm={24}
              xs={24}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <CodeOrder />
              <CodeShopManagement />
              {buttonHidden ? <NameManagement /> : ""}
              {buttonHidden ? <CodeDownManagement /> : ""}
            </Col>
            <Col
              lg={12}
              sm={24}
              xs={24}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
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
            <RangePicker />
          </Form.Item>
          <Form.Item label="In Đơn">
            <Radio.Group>
              <Radio value="1"> Chưa In </Radio>
              <Radio value="2"> Đã In </Radio>
            </Radio.Group>
          </Form.Item>
          <Alert message="Từ Ngày :" type="error" />
          <Alert message="Đến Ngày :" type="error" />
          <Button type="primary"> Tìm Kiếm </Button>
        </Col>
      </Row>
      <div>
        <Button>In K46 [0]</Button>
        <Button>In K75 [0]</Button>
        <Button>In K80 [0]</Button>
        <Button>In K50 [0]</Button>
        <Button>In T2 [0]</Button>
        <Button>In A5 [0]</Button>
        <Button>Xuất Excel [0]</Button>
      </div>
      <Alert message="Kết Quả Đã tìm Thấy" type="info" />
      <Form.Item label="Tìm Kiếm">
        <Input />
      </Form.Item>
      <TableManagement />
    </>
  );
}

export default OrderManagement;
