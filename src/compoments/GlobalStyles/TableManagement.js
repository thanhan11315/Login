import { Table, Button } from "antd";
import React, { useState } from "react";
const columns = [
  {
    title: "TT",
    dataIndex: "key",
  },
  {
    title: "Đơn Hàng",
    dataIndex: "name",
  },
  {
    title: "Gói Hàng",
    dataIndex: "product",
  },
  {
    title: "Người Nhận",
    dataIndex: "address",
  },
];

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: (
      <>
        <div>SGNS555534NT.598747871</div>
        <div>11-08-2022 18:04:25</div>
        <div>Phí Giao Hàng: 20.000 ₫</div>
      </>
    ),
    product: (
      <>
        <div> Kênh API</div>
        <div>TỐC HÀNH</div>
        <div>Khối Lượng: 200 gr</div>
        <div>Sản phẩm:</div>
        <div>Khăn</div>
      </>
    ),
    address: (
      <>
        <div>
          <div>Hủy</div>
          <div>Người Gửi</div>
        </div>
        <div>
          <Button>Hành Trình</Button>
          <Button>Yêu Cầu</Button>
          <Button>In K46</Button>
          <Button>In A5</Button>
          <Button>Đánh giá</Button>
        </div>
        <div>
          Lấy hàng tại 47 Dương Quảng Hàm, Phường 05, Quận Gò Vấp, Thành phố Hồ
          Chí Minh | SĐT Lấy Hàng: 089****907
        </div>
        <div>
          13 Thân Nhân Trung, Phường 13, Quận Tân Bình, Thành phố Hồ Chí Minh
        </div>
        <div>Lê Thanh Ân - 089****999</div>
        <div>
          11:21:58 23/08: [S555534] Le Thanh An (Thanh An) đã in Nhãn Giao Hàng
          bằng Trình Duyệt với size K46
        </div>
      </>
    ),
  });
}

const TableManagement = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default TableManagement;
